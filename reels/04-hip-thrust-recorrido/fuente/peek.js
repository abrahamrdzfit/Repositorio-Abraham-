const {chromium}=require('playwright');const path=require('path');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
await p.goto('file://'+path.join(__dirname,'reel.html'));await p.evaluate(()=>window.ready);
const ts=process.argv.slice(2).map(Number);
for(const t of ts){await p.evaluate(t=>seek(t),t);await p.screenshot({path:`out/peek_${t}.png`});}
await b.close();})();
