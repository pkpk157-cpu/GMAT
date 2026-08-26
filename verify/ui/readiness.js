/* Confirm the readiness projection appears once a target and exam date exist. */
const http=require('http'),fs=require('fs'),path=require('path');
const {chromium}=require(require('path').join(__dirname,'..','..','node_modules','playwright-core'));
const ROOT=require('path').join(__dirname,'..','..');
const MIME={'.html':'text/html','.js':'text/javascript','.json':'application/json','.css':'text/css'};
const server=http.createServer((q,r)=>{let p=q.url.split('?')[0];if(p==='/')p='/index.html';
 const f=path.join(ROOT,p); if(!f.startsWith(ROOT)||!fs.existsSync(f)){r.writeHead(404);return r.end('x');}
 r.writeHead(200,{'Content-Type':MIME[path.extname(f)]||'text/plain'});r.end(fs.readFileSync(f));});
(async()=>{await new Promise(r=>server.listen(0,r));const port=server.address().port;
 const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
 const p=await b.newPage({viewport:{width:430,height:930}});
 const errs=[]; p.on('pageerror',e=>errs.push(e.message));
 await p.goto(`http://127.0.0.1:${port}/index.html`); await p.waitForTimeout(900);
 // Seed a state with plenty logged, a target and an exam date, plus two weeks of history.
 await p.evaluate(()=>{
   const st={name:'R',examDate:'2026-11-15',targets:{daily:20,weekly:120,score:655},
     scoreHist:[{w:'2026-08-10',s:585,d:'2026-08-10'},{w:'2026-08-17',s:605,d:'2026-08-17'}],
     counts:{},daily:{},runs:{}};
   localStorage.setItem('gmat_tracker_v2',JSON.stringify(st));
 });
 await p.reload(); await p.waitForTimeout(1000);
 // Answer enough to clear the score threshold.
 await p.evaluate(()=>document.querySelectorAll('#botnav .bn')[4].click()); await p.waitForTimeout(300);
 await p.evaluate(()=>document.querySelector('[data-subtab="practice"]')?.click()); await p.waitForTimeout(300);
 await p.evaluate(()=>document.querySelector('#view [data-runset]')?.click()); await p.waitForTimeout(400);
 await p.evaluate(()=>document.querySelector('#runner [data-mode="practice"]')?.click()); await p.waitForTimeout(300);
 for(let i=0;i<30;i++){
   const ok=await p.evaluate(()=>{const x=document.querySelector('#runner [data-pick="A"]');if(!x)return false;x.click();return true;});
   if(!ok)break;
   await p.evaluate(()=>document.querySelector('#runner [data-confirm]')?.click()); await p.waitForTimeout(70);
   const n=await p.evaluate(()=>{const x=document.querySelector('#runner [data-next]');if(!x)return false;x.click();return true;});
   if(!n)break; await p.waitForTimeout(70);
 }
 await p.evaluate(()=>{const r=document.getElementById('runner');if(r){r.hidden=true;document.body.style.overflow='';}});
 await p.evaluate(()=>document.querySelectorAll('#botnav .bn')[2].click()); await p.waitForTimeout(400);
 await p.evaluate(()=>document.querySelector('[data-progtoggle]')?.click()); await p.waitForTimeout(500);
 const out=await p.evaluate(()=>{
   const el=[...document.querySelectorAll('#view .panel h3')].find(x=>x.textContent.trim()==='Score estimate');
   return el?el.parentElement.textContent.replace(/\s+/g,' ').trim():null;});
 console.log(out ? out.slice(-330) : 'NO SCORE PANEL');
 console.log('errors:', errs.length?errs.join(' | '):'none');
 await b.close(); server.close();})();
