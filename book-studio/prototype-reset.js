(()=>{
const script=document.currentScript,studio=script.dataset.studio,teacher=studio==='teacher';
const keys=teacher?['kw-teacher-resources','kw-teacher-prep','kw-teacher-room','kw-teacher-draft','kw-teacher-removed']:['kw-child-library-v2','kw-child-book-v1'];
const backupKey=teacher?'kw-teacher-reset-backup':'kw-book-reset-backup';
function findBackup(){const candidates=[];for(const storage of [localStorage,sessionStorage]){try{const saved=JSON.parse(storage.getItem(backupKey));if(saved?.studio===studio&&saved.entries)candidates.push(saved)}catch{}}return candidates.sort((a,b)=>b.savedAt-a.savedAt)[0]||null}
function restart(){window.prototypeResetInProgress=true;const url=new URL(location.href);url.hash=teacher?'home':'books';history.replaceState(null,'',url);location.reload()}
function status(message){const node=document.querySelector('#prototype-reset-status');if(node)node.textContent=message}
function reset(){const entries={};try{for(const key of keys)entries[key]=localStorage.getItem(key);const serialized=JSON.stringify({studio,entries,savedAt:Date.now()});let backedUp=false;for(const storage of [localStorage,sessionStorage]){try{storage.setItem(backupKey,serialized);backedUp=true;break}catch{}}if(!backedUp){status('Could not save a restore copy. No data was cleared.');return}window.prototypeResetInProgress=true;for(const key of keys)localStorage.removeItem(key);restart()}catch{window.prototypeResetInProgress=false;status('Could not reset this browser. Please try again.')}}
function restore(){const snapshot=findBackup();if(!snapshot)return;try{window.prototypeResetInProgress=true;for(const key of keys){const value=snapshot.entries[key];if(value==null)localStorage.removeItem(key);else localStorage.setItem(key,value)}localStorage.removeItem(backupKey);sessionStorage.removeItem(backupKey);restart()}catch{window.prototypeResetInProgress=false;status('Could not restore this session. The restore copy is still available.')}}
const controls=document.createElement('div');controls.className='prototype-reset-controls';controls.innerHTML='<span>Prototype</span><span aria-hidden="true">·</span><button type="button" data-prototype-reset>Start over</button>'+(findBackup()?'<span aria-hidden="true">·</span><button type="button" data-prototype-restore>Restore previous session</button>':'')+'<span id="prototype-reset-status" role="status"></span>';
const target=teacher?document.querySelector('footer'):document.body;target.append(controls);
controls.querySelector('[data-prototype-reset]').onclick=()=>{location.href=window.KWLinks.login};
controls.querySelector('[data-prototype-restore]')?.addEventListener('click',restore);
})();
