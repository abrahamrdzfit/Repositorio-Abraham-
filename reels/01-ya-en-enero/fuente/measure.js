const {chromium}=require('playwright');const path=require('path');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
await p.goto('file://'+path.join(__dirname,'reel.html'));await p.evaluate(()=>window.ready);
await p.evaluate(()=>seek(38.0));
const r=await p.evaluate(()=>{const sc=document.querySelectorAll('.sc')[8];return [...sc.children].filter(e=>getComputedStyle(e).visibility!=='hidden').map(e=>{
 const rg=document.createRange();rg.selectNodeContents(e);const tr=rg.getBoundingClientRect();const br=e.getBoundingClientRect();
 const r=e.innerText.trim()?tr:br;return (e.innerText.trim().slice(0,20)||e.tagName+'/'+(e.querySelector('img')?'logo':'box'))+'  L='+r.left.toFixed(0)+' R='+r.right.toFixed(0)+' C='+((r.left+r.right)/2).toFixed(1);});});
console.log(r.join('\n'));await b.close();})();
