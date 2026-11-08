// Ensambla reel.html: incrusta Montserrat y el logo (logo-ar.png si existe; si no, monograma AR en código).
const fs = require('fs'), path = require('path');
const dir = __dirname;
let html = fs.readFileSync(path.join(dir, 'src.html'), 'utf8');
const font = fs.readFileSync(path.join(dir, 'montserrat-latin.woff2')).toString('base64');
const logoPng = ['logo-ar.png', '../logo-ar.png'].map(p => path.join(dir, p)).find(p => fs.existsSync(p));
const logo = logoPng
  ? `<img src="data:image/png;base64,${fs.readFileSync(logoPng).toString('base64')}" style="width:100%;height:100%;object-fit:contain">`
  : `<div style="width:100%;height:100%;background:#384210;clip-path:polygon(0 0,calc(100% - 64px) 0,100% 64px,100% 100%,64px 100%,0 calc(100% - 64px));display:flex;align-items:center;justify-content:center"><span style="font-weight:800;font-size:150px;letter-spacing:-6px;color:#FBFAF7;line-height:1">AR</span></div>`;
const small = logoPng
  ? `<img src="data:image/png;base64,${fs.readFileSync(logoPng).toString('base64')}" style="width:100%;height:100%;object-fit:contain">`
  : `<div style="width:100%;height:100%;background:#384210"></div>`;
const vd = path.join(dir, 'frames/estirar');
const nv = fs.existsSync(vd) ? fs.readdirSync(vd).filter(f => /^f_\d+\.jpg$/.test(f)).length : 0;
const vinfo = nv ? { dir: 'frames/estirar', n: nv, fps: +(process.env.VFPS || 30) } : null;
html = html.replace('__VIDINFO__', JSON.stringify(vinfo)).replace('__FONT__', font).replace('`__LOGO__`', '`' + logo.replace(/`/g, '\\`') + '`').replace('`__LOGOSMALL__`', '`' + small + '`');
fs.writeFileSync(path.join(dir, 'reel.html'), html);
console.log('reel.html', (html.length / 1024).toFixed(0) + ' KB', logoPng ? 'logo: ' + logoPng : 'logo: monograma en código', vinfo ? `video: ${nv} cuadros` : 'video: no hay (se usa la animación)');
