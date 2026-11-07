// node render.js beats|cover|audio|full
const { chromium } = require('playwright');
const { spawn, execFileSync } = require('child_process');
const fs = require('fs'), path = require('path');
const dir = __dirname, url = 'file://' + path.join(dir, 'reel.html');
const FPS = +(process.env.FPS || 30), SUB = +(process.env.SUB || 2);
const mode = process.argv[2] || 'beats';

async function openPage(browser) {
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  page.on('console', m => console.log('[page]', m.text()));
  page.on('pageerror', e => console.log('[pageerror]', e.message));
  await page.goto(url);
  await page.evaluate(() => window.ready);
  return page;
}
const shot = async (page, t, opts = {}) => {
  await page.evaluate(t => window.seek(t), t);
  return page.screenshot({ type: 'png', ...opts });
};

(async () => {
  const browser = await chromium.launch();
  const out = path.join(dir, 'out'); fs.mkdirSync(out, { recursive: true });

  if (mode === 'beats') {
    // un frame por tiempo (68 tiempos), tomado en la segunda mitad del tiempo
    const page = await openPage(browser);
    const safe = process.argv[3] === 'safe';
    if (safe) await page.evaluate(() => window.showSafe(true));
    const bd = path.join(out, 'beats'); fs.mkdirSync(bd, { recursive: true });
    const off = parseFloat(process.argv[4] || '0.45');
    const NB = await page.evaluate(() => window.META.NBARS * 4);
    for (let k = 0; k < NB; k++) {
      await page.evaluate(t => window.seek(t), k * 0.6 + off);
      await page.screenshot({ path: path.join(bd, `b${String(k).padStart(2, '0')}.png`) });
    }
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', '1', '-i', path.join(bd, 'b%02d.png'),
      '-vf', 'scale=270:480,drawtext=fontfile=/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf:text=%{n}:x=6:y=6:fontsize=22:fontcolor=red,tile=8x3:padding=4:color=gray',
      path.join(out, 'sheet_%d.png')]);
    console.log('ok');
  }

  if (mode === 'cover') {
    const page = await openPage(browser);
    await page.evaluate(t => window.seek(t), 2.05);
    await page.screenshot({ path: path.join(dir, 'portada.png') });
    console.log('portada.png');
  }

  if (mode === 'audio') {
    const page = await openPage(browser);
    const b64 = await page.evaluate(() => window.renderAudio());
    fs.writeFileSync(path.join(out, 'audio.wav'), Buffer.from(b64, 'base64'));
    console.log('audio.wav');
  }

  if (mode === 'full') {
    const DUR = 50.4, N = Math.round(DUR * FPS), W = parseInt(process.argv[3] || '4');
    const per = Math.ceil(N / W), t0 = Date.now();
    let done = 0;
    const only = process.argv[4] ? process.argv[4].split(',').map(Number) : null;
    await Promise.all([...Array(W)].map(async (_, w) => {
      if (only && !only.includes(w)) return;
      const a = w * per, b = Math.min(N, a + per);
      const page = await openPage(browser);
      const ff = spawn('ffmpeg', ['-y', '-loglevel', process.env.FFLOG || 'error', '-f', 'image2pipe', '-framerate', String(FPS * SUB), '-c:v', 'png', '-i', '-',
        '-vf', `format=rgb24,tmix=frames=${SUB},select='eq(mod(round(pts)\\,${SUB})\\,${SUB - 1})',setpts=PTS-${SUB - 1},scale=out_color_matrix=bt709:out_range=tv,format=yuv420p`,
        '-r', String(FPS), '-c:v', 'libx264', '-preset', 'medium', '-crf', '14', '-pix_fmt', 'yuv420p',
        '-colorspace', 'bt709', '-color_primaries', 'bt709', '-color_trc', 'bt709', path.join(out, `chunk${w}.mp4`)], { stdio: ['pipe', 'inherit', 'inherit'] });
      let ffDead = null;
      const closed = new Promise(r => ff.on('close', c => { if (c) ffDead = new Error(`ffmpeg salió con código ${c} (chunk ${w})`); r(); }));
      ff.stdin.on('error', () => {});
      for (let f = a; f < b; f++) {
        for (let s = 0; s < SUB; s++) {
          // obturador de 180°: subframes repartidos en medio frame alrededor del instante f/FPS
          const t = Math.max(0, Math.min(DUR - 1e-4, (f + (s - (SUB - 1) / 2) * (0.5 / SUB)) / FPS));
          if (ffDead) throw ffDead;
          const buf = await shot(page, t);
          if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
        }
        if (++done % 120 === 0) console.log(`${done}/${N} frames · ${((Date.now() - t0) / 1000).toFixed(0)} s`);
      }
      ff.stdin.end(); await closed; if (ffDead) throw ffDead;
    }));
    fs.writeFileSync(path.join(out, 'list.txt'), [...Array(W)].map((_, w) => `file 'chunk${w}.mp4'`).join('\n'));
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', path.join(out, 'list.txt'), '-i', path.join(out, 'audio.wav'),
      '-map', '0:v', '-map', '1:a', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-movflags', '+faststart', '-shortest', path.join(dir, (process.env.OUT || 'reel.mp4'))]);
    console.log((process.env.OUT || 'reel.mp4') + ' listo en', ((Date.now() - t0) / 1000).toFixed(0), 's');
  }
  await browser.close();
})();
