// Demo event data
const events = [
  {id:1,title:"Harare Jazz Night",date:"25 Nov",venue:"Reps Theatre",price:"$10"},
  {id:2,title:"Bulawayo Gospel Concert",date:"2 Dec",venue:"Large City Hall",price:"Free"},
  {id:3,title:"Chitungwiza Fun Run",date:"9 Dec",venue:"Chit-Town Stadium",price:"$5"}
];

function loadCards(){
  const wrapper = document.getElementById('eventCards');
  wrapper.innerHTML = events.map(e=>`
    <div class="col-12 col-sm-6 col-lg-4">
      <div class="card card-event shadow-sm">
        <div class="card-body">
          <h6 class="card-title">${e.title}</h6>
          <p class="small text-muted mb-1">${e.date} • ${e.venue}</p>
          <span class="badge bg-success">${e.price}</span>
        </div>
      </div>
    </div>`).join('');
}
window.addEventListener('DOMContentLoaded', loadCards);

// PWA install button (Chrome/Edge)
let deferredPrompt;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('installBtn').style.display = 'inline-block';
});
document.getElementById('installBtn').addEventListener('click', async () => {
  if(deferredPrompt){deferredPrompt.prompt(); deferredPrompt=null;}
});

// register service worker
if('serviceWorker' in navigator){navigator.serviceWorker.register('/service-worker.js');}

// footer year
document.getElementById('yr').textContent = new Date().getFullYear();

// simple map (Harare centre)
window.initMap = function(){
  new google.maps.Map(document.getElementById('map'),{
    center:{lat:-17.8252,lng:31.0435},
    zoom:11,
    disableDefaultUI:true
  });
}
