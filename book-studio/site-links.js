(()=>{
const app=document.currentScript.dataset.app;
const root=new URL(app==='website'?'./':'../',location.href);
const base=root.href.split('#')[0].split('?')[0];
const version='?v=release-20261120';
const website=new URL('index.html',base).href+version;
window.KWLinks={website,teacher:new URL('teacher-studio/index.html',base).href+version,books:new URL('book-studio/index.html',base).href+version};
window.KWLinks.login=website+'#login';
document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('[data-kw-home]').forEach(a=>a.href=website+'#home');
 if(app!=='website'){
 const controls=document.querySelector('.prototype-reset-controls');
 if(controls){const a=document.createElement('a');a.href=window.KWLinks.login;a.textContent='Switch workspace';a.style.cssText='color:inherit;text-decoration:underline;text-underline-offset:3px';controls.append(document.createTextNode(' · '),a)}
 }
});
})();