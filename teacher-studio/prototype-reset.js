(()=>{
const teacher=document.currentScript.dataset.studio==='teacher';
const keys=teacher?['kw-teacher-resources','kw-teacher-prep','kw-teacher-room','kw-teacher-draft','kw-teacher-removed','kw-teacher-reset-backup','kw-demo-account-teacher']:['kw-child-library-v2','kw-child-book-v1','kw-book-reset-backup','kw-demo-account-books','kw-picture-story-seed','kw-picture-generated-draft','kw-picture-config','kw-picture-characters'];
// This prototype intentionally keeps no recovery snapshot.
const controls=document.createElement('div');controls.className='prototype-reset-controls';controls.innerHTML='<span>Prototype</span><span aria-hidden="true">·</span><button type="button" data-prototype-reset>Start over</button>';
(teacher?document.querySelector('footer'):document.body).append(controls);
controls.querySelector('[data-prototype-reset]').onclick=()=>{
 window.prototypeResetInProgress=true;
 for(const key of keys){localStorage.removeItem(key);sessionStorage.removeItem(key)}
 const url=new URL(location.href);url.search='?v=release-20261120';url.hash=teacher?'home':'books';if(url.search===location.search){location.hash=url.hash;location.reload()}else{location.replace(url.href)}
};
})();
