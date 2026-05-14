
const navToggle=document.querySelector('.nav-toggle'),navMenu=document.querySelector('.nav-menu');if(navToggle&&navMenu){navToggle.addEventListener('click',()=>navMenu.classList.toggle('open'))}
const slides=[...document.querySelectorAll('.slide')],dotsBox=document.querySelector('.slider-dots');let current=0;function showSlide(i){if(!slides.length)return;slides[current].classList.remove('active');current=(i+slides.length)%slides.length;slides[current].classList.add('active');document.querySelectorAll('.slider-dots button').forEach((b,n)=>b.classList.toggle('active',n===current))}if(slides.length&&dotsBox){slides.forEach((_,i)=>{const b=document.createElement('button');b.onclick=()=>showSlide(i);dotsBox.appendChild(b)});dotsBox.firstChild.classList.add('active');setInterval(()=>showSlide(current+1),5200)}document.querySelector('[data-slider="prev"]')?.addEventListener('click',()=>showSlide(current-1));document.querySelector('[data-slider="next"]')?.addEventListener('click',()=>showSlide(current+1));
setTimeout(()=>document.getElementById('promoPopup')?.classList.add('show'),900);document.querySelectorAll('[data-close-popup]').forEach(b=>b.addEventListener('click',()=>document.getElementById('promoPopup')?.remove()));document.querySelectorAll('.ad-x').forEach(b=>b.addEventListener('click',e=>{e.target.closest('.ad-card,.side-ad,.news-card,.timeline-item,.mini-video,.shop-card,.shot,.inline-ad')?.remove()}));document.getElementById('hideAllAds')?.addEventListener('click',()=>{document.querySelectorAll('.promo-popup,.side-ads,.ad-card,.inline-ad,.floating-ad-close').forEach(el=>el.remove())});document.querySelectorAll('.contact-form').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();alert('Message prêt! Connecte un backend pour recevoir les messages.')}));

// === POPUP CHAOS 9000% ADD-ON ===
(function(){
  const messages=[
    ['PROMO FLASH','Garage VIP -90% pendant 10 minutes!'],['MEGA DEAL','Pack Street Legend offert aux premiers joueurs!'],['SPONSOR','Assurance auto Los Santos: crash illimité!'],['HOT DROP','Nouvelle supercar néon disponible!'],['CREW BONUS','Invite ton crew et gagne des crédits RP!'],['DRIFT NIGHT','Event course nocturne avec récompenses!'],['ADS','Espace partenaire disponible ici!'],['VIP','Accès salon secret + badge premium!'],['TURBO','Nitro gratuite sur toutes les précommandes!'],['LOOT','Caisse mystère: skins, garages, bannières!']
  ];
  let layer=document.querySelector('.popup-storm-layer');
  if(!layer){layer=document.createElement('div');layer.className='popup-storm-layer';document.body.appendChild(layer)}
  const ribbons=['top-left','top-right','bottom-left','bottom-right'];
  ribbons.forEach((r,i)=>{const el=document.createElement('div');el.className='corner-blast '+r;el.textContent=i%2?'AD PROMO':'MEGA POPUP';document.body.appendChild(el)});
  function spawnPopup(force=false){
    if(!force && document.body.classList.contains('popups-paused')) return;
    const [title,text]=messages[Math.floor(Math.random()*messages.length)];
    const p=document.createElement('div');p.className='storm-popup';
    const top=8+Math.random()*72,left=3+Math.random()*78;
    p.style.top=top+'vh';p.style.left=left+'vw';
    p.innerHTML='<button class="close-storm" aria-label="Fermer">×</button><span class="tag">AD POPUP</span><h3>'+title+'</h3><p>'+text+'</p><div class="mini-actions"><a href="promos.html">Voir promo</a><button class="later">Plus tard</button></div>';
    p.querySelector('.close-storm').onclick=()=>p.remove();p.querySelector('.later').onclick=()=>p.remove();
    layer.appendChild(p);
    setTimeout(()=>{ if(p.isConnected) p.remove(); },14000+Math.random()*9000);
    const max=window.innerWidth<700?8:18;
    while(layer.children.length>max) layer.firstElementChild.remove();
  }
  for(let i=0;i<10;i++) setTimeout(()=>spawnPopup(true),i*180);
  let stormTimer=setInterval(()=>spawnPopup(false),850);
  const panel=document.createElement('div');panel.className='popup-control-panel';
  panel.innerHTML='<button id="popupBurst">+ 25 Popups</button><button class="secondary" id="pausePopups">Pause popups</button><button class="secondary" id="clearPopups">Tout fermer</button>';
  document.body.appendChild(panel);
  document.getElementById('popupBurst').onclick=()=>{for(let i=0;i<25;i++)setTimeout(()=>spawnPopup(true),i*35)};
  document.getElementById('pausePopups').onclick=(e)=>{document.body.classList.toggle('popups-paused');e.target.textContent=document.body.classList.contains('popups-paused')?'Reprendre popups':'Pause popups'};
  document.getElementById('clearPopups').onclick=()=>{layer.innerHTML=''};
  document.getElementById('hideAllAds')?.addEventListener('click',()=>{clearInterval(stormTimer);layer.remove();panel.remove();document.querySelectorAll('.corner-blast').forEach(e=>e.remove())});
})();

// === INSANE DIFFERENT POPUPS 128937192873127319312123% ADD-ON ===
(function(){
  const layer=document.querySelector('.popup-storm-layer')||(()=>{const d=document.createElement('div');d.className='popup-storm-layer';document.body.appendChild(d);return d;})();
  const promos=[
    ['🚨 ALERTE POLICE','Ta prime monte! Clique pour la cacher.','danger'],['🏎️ TURBO GRATUIT','Nitro illimitée sur les bolides du week-end.','speed'],['💸 CASH DROP','Un sac de billets vient d’apparaître sur la carte.','cash'],['🎁 BONUS SECRET','Code promo: LOS-CHAOS-9000.','gift'],['🛞 PNEUS DRIFT','Offre garage: pneus fumée rose néon.','drift'],['📺 PUB TV','Regarde ce spot et gagne une fausse récompense.','tv'],['🏆 CREW WAR','Ton crew est demandé pour une guerre de territoire.','crew'],['🧨 BRAQUAGE VIP','Plan secret disponible pendant 60 secondes.','heist'],['🌴 BEACH PARTY','Course illégale sur le bord de mer.','beach'],['🛩️ LUXE','Jet privé + garage penthouse en bundle.','luxury'],['🧢 SKINS','Tenues streetwear édition limitée.','skin'],['🎧 RADIO','Nouvelle station: Neon Pursuit FM.','radio'],['🔥 HOT SALE','Tout est faussement à -99%.','sale'],['⚙️ CUSTOM','Peinture chrome animé disponible.','custom'],['📦 LOOT BOX','Ouvre une caisse turbo maintenant.','loot'],['🕶️ VIP CLUB','Entrée secrète déverrouillée.','vip']
  ];
  const shapes=['toast','card','ticket','alert','wide','tiny','neon','paper','glass','terminal','coupon','wanted'];
  function rnd(a,b){return Math.random()*(b-a)+a}
  function choice(a){return a[Math.floor(Math.random()*a.length)]}
  function spawnInsane(force=false){
    if(!force && document.body.classList.contains('popups-paused')) return;
    const [title,text,type]=choice(promos),shape=choice(shapes);
    const el=document.createElement('div');
    el.className='mega-different-popup '+shape+' type-'+type;
    el.style.left=rnd(1,82)+'vw'; el.style.top=rnd(5,78)+'vh';
    el.style.setProperty('--rot',rnd(-8,8)+'deg'); el.style.setProperty('--delay',rnd(0,1.2)+'s');
    const progress=Math.floor(rnd(12,98));
    const price=['GRATUIT','-90%','2X RP','VIP','LIMITÉ','HOT'][Math.floor(rnd(0,6))];
    const body={
      toast:`<div class="mp-row"><b>${title}</b><button>×</button></div><p>${text}</p>`,
      card:`<button class="mp-x">×</button><span class="mp-pill">${price}</span><h3>${title}</h3><p>${text}</p><div class="mp-bar"><i style="width:${progress}%"></i></div><small>${progress}% déjà réclamé</small>`,
      ticket:`<button class="mp-x">×</button><div class="ticket-cut"></div><h3>${title}</h3><p>${text}</p><strong>ADMIT ONE</strong>`,
      alert:`<button class="mp-x">×</button><h3>⚠️ ${title}</h3><p>${text}</p><div class="mp-actions"><button>Accepter</button><button>Ignorer</button></div>`,
      wide:`<button class="mp-x">×</button><span class="mp-pill">SPONSORISÉ</span><h3>${title}</h3><p>${text}</p><marquee>ACHAT • PROMO • BONUS • GARAGE • CASH • VIP • TURBO</marquee>`,
      tiny:`<button class="mp-x">×</button><b>${title}</b><small>${price}</small>`,
      neon:`<button class="mp-x">×</button><div class="neon-icon">✦</div><h3>${title}</h3><p>${text}</p>`,
      paper:`<button class="mp-x">×</button><h3>${title}</h3><p>${text}</p><em>Annonce officielle non officielle</em>`,
      glass:`<button class="mp-x">×</button><span class="mp-pill">LIVE</span><h3>${title}</h3><p>${text}</p>`,
      terminal:`<button class="mp-x">×</button><code>&gt; ${title}<br>&gt; ${text}<br>&gt; LOADING_PROMO.exe</code>`,
      coupon:`<button class="mp-x">×</button><h3>COUPON</h3><p>${title}</p><strong>${price}</strong><small>${text}</small>`,
      wanted:`<button class="mp-x">×</button><h3>WANTED</h3><p>${title}</p><strong>${text}</strong>`
    }[shape];
    el.innerHTML=body;
    el.querySelectorAll('button').forEach(b=>b.onclick=()=>el.remove());
    layer.appendChild(el);
    setTimeout(()=>{if(el.isConnected)el.remove()},9000+rnd(0,12000));
    const max=window.innerWidth<700?18:55;
    while(layer.children.length>max) layer.firstElementChild.remove();
  }
  function banner(text,cls){const b=document.createElement('div');b.className='chaos-banner '+cls;b.innerHTML='<span>'+text+'</span><button>×</button>';b.querySelector('button').onclick=()=>b.remove();document.body.appendChild(b);setTimeout(()=>b.remove(),18000)}
  ['MEGA PROMO GARAGE','PUB CASH X2','NOUVELLE AUTO NÉON','VIP POPUP STORM'].forEach((t,i)=>setTimeout(()=>banner(t,'b'+i),i*900));
  for(let i=0;i<42;i++) setTimeout(()=>spawnInsane(true),i*65);
  setInterval(()=>{for(let i=0;i<3;i++)setTimeout(()=>spawnInsane(false),i*120)},1050);
  document.getElementById('popupBurst')?.addEventListener('click',()=>{for(let i=0;i<90;i++)setTimeout(()=>spawnInsane(true),i*18)});
  document.getElementById('clearPopups')?.addEventListener('click',()=>document.querySelectorAll('.mega-different-popup,.chaos-banner').forEach(e=>e.remove()));
})();

// === EVEN MORE POPUPS + HIDDEN TOP-RIGHT KILL SWITCH ===
(function(){
  const KEY='prochain_gta_v_popups_disabled';
  const hidden=document.createElement('button');
  hidden.className='secret-popup-toggle';
  hidden.title='Bouton caché: activer/désactiver les popups';
  document.body.appendChild(hidden);
  function notice(txt){
    document.querySelectorAll('.popup-off-notice').forEach(n=>n.remove());
    const n=document.createElement('div');n.className='popup-off-notice';n.textContent=txt;document.body.appendChild(n);setTimeout(()=>n.remove(),2200);
  }
  function applyState(){document.body.classList.toggle('popups-disabled',localStorage.getItem(KEY)==='1')}
  hidden.addEventListener('click',()=>{
    const off=localStorage.getItem(KEY)==='1';
    localStorage.setItem(KEY,off?'0':'1');
    applyState();
    if(!off){
      document.querySelectorAll('.storm-popup,.mega-different-popup,.chaos-banner,.micro-popup,.screen-ad-rain,.promo-popup,.corner-blast').forEach(e=>e.remove());
      document.querySelector('.popup-storm-layer')?.replaceChildren();
      notice('Popups désactivés ✅');
    }else{
      notice('Popups réactivés 🔥');
      setTimeout(()=>window.dispatchEvent(new Event('prochain:popup-resume')),120);
    }
  });
  applyState();

  const microTexts=['+5000 RP','VIP GARAGE','AD','PROMO','CASH DROP','NITRO','FREE CAR','HOT DEAL','POLICE','DRIFT','CREW','LOOT','RADIO','SPONSOR','MEGA SALE','CODE SECRET','BONUS','SHOP'];
  const classes=['cash','police','luxe','radio',''];
  function canSpawn(){return !document.body.classList.contains('popups-disabled') && !document.body.classList.contains('popups-paused')}
  function spawnMicro(force=false){
    if(!force && !canSpawn())return;
    const m=document.createElement('div');m.className='micro-popup '+classes[Math.floor(Math.random()*classes.length)];
    m.style.left=(Math.random()*88+1)+'vw';m.style.top=(Math.random()*82+5)+'vh';
    m.innerHTML='<button>×</button>'+microTexts[Math.floor(Math.random()*microTexts.length)]+'<br><small>'+microTexts[Math.floor(Math.random()*microTexts.length)]+'</small>';
    m.querySelector('button').onclick=()=>m.remove();document.body.appendChild(m);
    setTimeout(()=>m.remove(),5000+Math.random()*7000);
    const max=innerWidth<700?35:120;const all=document.querySelectorAll('.micro-popup');if(all.length>max)all[0].remove();
  }
  function spawnRain(force=false){
    if(!force && !canSpawn())return;
    const r=document.createElement('div');r.className='screen-ad-rain';r.style.left=(Math.random()*98)+'vw';r.style.animationDuration=(2+Math.random()*3.5)+'s';r.style.fontSize=(10+Math.random()*18)+'px';r.textContent=microTexts[Math.floor(Math.random()*microTexts.length)];document.body.appendChild(r);setTimeout(()=>r.remove(),6500);
  }
  function spawnBillboard(){
    if(!canSpawn())return;
    const layer=document.querySelector('.popup-storm-layer')||(()=>{const d=document.createElement('div');d.className='popup-storm-layer';document.body.appendChild(d);return d;})();
    const b=document.createElement('div');b.className='mega-different-popup billboard';b.style.left=(Math.random()*35+15)+'vw';b.style.top=(Math.random()*35+16)+'vh';b.style.setProperty('--rot',(Math.random()*4-2)+'deg');
    b.innerHTML='<button class="mp-x">×</button><h3>ÉNORME PUB GTA STYLE</h3><p>Pack voiture • garage • argent • course • néon • VIP • édition chaos</p><strong>CLIQUABLE PARTOUT</strong>';
    b.querySelector('button').onclick=()=>b.remove();layer.appendChild(b);setTimeout(()=>b.remove(),12000);
  }
  function spawnChat(){
    if(!canSpawn())return;
    const c=document.createElement('div');c.className='mega-different-popup fake-chat';c.style.left=(Math.random()*75+4)+'vw';c.style.top=(Math.random()*70+8)+'vh';c.style.setProperty('--rot',(Math.random()*7-3.5)+'deg');
    c.innerHTML='<button class="mp-x">×</button><h3>📱 Crew Chat Promo</h3><div class="bubble">Yo! nouvelle promo garage!</div><div class="bubble me">Encore une popup 😭</div><div class="bubble">Clique top-right pour tout fermer.</div>';
    c.querySelector('button').onclick=()=>c.remove();document.body.appendChild(c);setTimeout(()=>c.remove(),14000);
  }
  function addLanes(){
    if(document.querySelector('.matrix-ad-lane'))return;
    ['left','right'].forEach(side=>{const lane=document.createElement('div');lane.className='matrix-ad-lane '+side;for(let i=0;i<16;i++){const s=document.createElement('span');s.textContent=' AD PROMO VIP GTA CASH ';s.style.animationDelay=(i*.22)+'s';lane.appendChild(s)}document.body.appendChild(lane)});
  }
  addLanes();
  function burst(){for(let i=0;i<80;i++)setTimeout(()=>spawnMicro(true),i*12);for(let i=0;i<45;i++)setTimeout(()=>spawnRain(true),i*24);setTimeout(spawnBillboard,400);setTimeout(spawnChat,900)}
  window.addEventListener('prochain:popup-resume',burst);
  if(localStorage.getItem(KEY)!=='1') setTimeout(burst,600);
  setInterval(()=>{for(let i=0;i<9;i++)setTimeout(()=>spawnMicro(false),i*55);for(let i=0;i<5;i++)setTimeout(()=>spawnRain(false),i*80)},900);
  setInterval(spawnBillboard,7200);
  setInterval(spawnChat,5600);
  document.getElementById('clearPopups')?.addEventListener('click',()=>document.querySelectorAll('.micro-popup,.screen-ad-rain,.fake-chat,.billboard').forEach(e=>e.remove()));
  document.getElementById('popupBurst')?.addEventListener('click',()=>{for(let i=0;i<260;i++)setTimeout(()=>spawnMicro(true),i*6);for(let i=0;i<130;i++)setTimeout(()=>spawnRain(true),i*12);});
})();

// === AD OVERDOSE EXTRA LAYERS ===
(function(){
  const labels=['AD VIP','GARAGE SALE','CASH +RP','LOOT BOX','NEW CAR','SPONSOR','DRIFT PACK','TURBO AD','PROMO XXL','NEON DEAL'];
  function can(){return !document.body.classList.contains('popups-disabled') && !document.body.classList.contains('popups-paused')}
  function snake(){if(!can())return;const s=document.createElement('div');s.className='ultra-ad-snake';s.style.top=(Math.random()*75+8)+'vh';s.style.animationDuration=(3.5+Math.random()*4)+'s';s.textContent=labels[Math.floor(Math.random()*labels.length)];document.body.appendChild(s);setTimeout(()=>s.remove(),8500)}
  setInterval(()=>{for(let i=0;i<4;i++)setTimeout(snake,i*180)},1300);
  document.addEventListener('click',e=>{if(e.target.classList.contains('ad-x'))e.target.closest('.ad-over-card,.side-ad,.ad-card,.mini-video')?.remove()});
})();

// === LOOT BOX CSGO STYLE SYSTEM ===
(function(){
  const track=document.getElementById('lootTrack');
  const btn=document.getElementById('openLootBox');
  const result=document.getElementById('lootResult');
  const inv=document.getElementById('inventoryGrid');
  const reset=document.getElementById('resetInventory');
  if(!track||!btn||!result||!inv)return;
  const items=[
    {name:'Cash Drop 5K',emoji:'💵',rarity:'common',weight:32},{name:'Pneus Drift',emoji:'🛞',rarity:'common',weight:28},{name:'Radio Neon FM',emoji:'🎧',rarity:'common',weight:22},{name:'Skin Chrome',emoji:'✨',rarity:'rare',weight:14},{name:'Badge Crew',emoji:'🏆',rarity:'rare',weight:12},{name:'Boost Nitro',emoji:'🔥',rarity:'rare',weight:10},{name:'Garage VIP',emoji:'🏢',rarity:'epic',weight:6},{name:'Supercar Neon',emoji:'🏎️',rarity:'epic',weight:5},{name:'Kit Braquage',emoji:'💼',rarity:'epic',weight:4},{name:'Hypercar Mythique',emoji:'💎',rarity:'legendary',weight:1.5},{name:'Dragon Engine',emoji:'🐉',rarity:'legendary',weight:1}
  ];
  function weighted(){const total=items.reduce((a,i)=>a+i.weight,0);let r=Math.random()*total;for(const i of items){r-=i.weight;if(r<=0)return i}return items[0]}
  function card(item){return `<div class="loot-item ${item.rarity}"><div class="emoji">${item.emoji}</div><b>${item.name}</b><small>${item.rarity}</small></div>`}
  function getInv(){try{return JSON.parse(localStorage.getItem('prochain_loot_inventory')||'[]')}catch(e){return[]}}
  function setInv(v){localStorage.setItem('prochain_loot_inventory',JSON.stringify(v))}
  function renderInv(){const data=getInv();inv.innerHTML=data.length?data.slice().reverse().map(i=>`<div class="inventory-card ${i.rarity}"><div class="emoji">${i.emoji}</div><b>${i.name}</b><span>${i.rarity}</span></div>`).join(''):'<div class="inventory-card"><b>Aucun item</b><span>Ouvre une caisse pour commencer.</span></div>'}
  function flash(){const f=document.createElement('div');f.className='loot-burst';document.body.appendChild(f);setTimeout(()=>f.remove(),900)}
  function popupWin(item){if(document.body.classList.contains('popups-disabled'))return;const p=document.createElement('div');p.className='mega-different-popup loot-win '+item.rarity;p.style.left='50vw';p.style.top='22vh';p.style.setProperty('--rot','0deg');p.innerHTML=`<button class="mp-x">×</button><h3>${item.emoji} DROP ${item.rarity.toUpperCase()}</h3><p>Tu as gagné: <b>${item.name}</b></p><strong>Inventaire mis à jour</strong>`;p.querySelector('button').onclick=()=>p.remove();document.body.appendChild(p);setTimeout(()=>p.remove(),9000)}
  btn.addEventListener('click',()=>{
    if(btn.disabled)return;btn.disabled=true;btn.textContent='Ouverture...';
    const winner=weighted();
    const list=[];for(let i=0;i<70;i++)list.push(weighted());list[58]=winner;
    track.classList.remove('spinning');track.style.transform='translateX(0)';track.innerHTML=list.map(card).join('');
    void track.offsetWidth;track.classList.add('spinning');
    const itemWidth=154;const centerOffset=(track.parentElement.clientWidth/2)-(itemWidth/2);const target=58*itemWidth-centerOffset+(Math.random()*46-23);
    track.style.transform=`translateX(${-target}px)`;
    result.innerHTML='<b>La caisse tourne...</b><span>Le curseur choisit la récompense.</span>';
    for(let i=0;i<22;i++)setTimeout(()=>window.dispatchEvent(new Event('prochain:popup-resume')),i*160);
    setTimeout(()=>{
      result.innerHTML=`<b>${winner.emoji} ${winner.name}</b><span>Rareté: ${winner.rarity.toUpperCase()}</span>`;
      const data=getInv();data.push({...winner,date:new Date().toISOString()});setInv(data);renderInv();flash();popupWin(winner);btn.disabled=false;btn.textContent='Ouvrir une caisse';
    },4550);
  });
  reset?.addEventListener('click',()=>{setInv([]);renderInv();result.innerHTML='<b>Inventaire vidé</b><span>Tu peux recommencer les ouvertures.</span>'});
  renderInv();track.innerHTML=Array.from({length:22},()=>card(weighted())).join('');
})();


// === RARE CONFUSION WIN POPUP — ADDED TO EXISTING VERSION ONLY ===
(function(){
  if(window.__rareConfusionWinPopupInstalled)return;
  window.__rareConfusionWinPopupInstalled=true;
  const WIN_PAGE='youwin.html';
  const titles=[
    'OFFRE LIMITÉE','BONUS GTA','PROMO FLASH','CADEAU MYSTÈRE','PACK PREMIUM','ALERTE PROMO','VENTE RAPIDE','RÉCOMPENSE','NOUVEAU GARAGE','MEGA DEAL','PUBLICITÉ','SPÉCIAL MEMBRES'
  ];
  const texts=[
    'Cliquez pour accepter cette offre temporaire.',
    'Un bonus aléatoire peut être disponible maintenant.',
    'Cette annonce change automatiquement à chaque apparition.',
    'Réclamez une récompense avant la fin du timer.',
    'Promotion exclusive sur les voitures et garages.',
    'Votre pack spécial attend une confirmation.',
    'Acceptez pour continuer vers l’offre proposée.',
    'Dernière chance de profiter de cette annonce.',
    'Une surprise publicitaire vient d’apparaître.',
    'Confirmez votre choix pour débloquer l’offre.'
  ];
  function canSpawn(){return !document.body.classList.contains('popups-disabled') && !document.body.classList.contains('popups-paused') && !document.body.classList.contains('win-page')}
  function pick(a){return a[Math.floor(Math.random()*a.length)]}
  function spawnWinAd(){
    if(!canSpawn())return;
    const layer=document.querySelector('.popup-storm-layer')||(()=>{const d=document.createElement('div');d.className='popup-storm-layer';document.body.appendChild(d);return d;})();
    const el=document.createElement('div');
    const shapes=['alert','card','glass','neon','coupon','ticket'];
    const shape=pick(shapes);
    el.className='mega-different-popup '+shape+' type-gift';
    el.style.left=(Math.random()*78+3)+'vw';
    el.style.top=(Math.random()*70+6)+'vh';
    el.style.setProperty('--rot',(Math.random()*10-5)+'deg');
    const title=pick(titles), text=pick(texts);
    const timer=String(Math.floor(Math.random()*50)+10).padStart(2,'0');
    // Même taille/style que les autres popups, aucun texte qui indique que c’est spécial.
    el.innerHTML=`<button class="mp-x" type="button">×</button><span class="mp-pill">AD</span><h3>${title}</h3><p>${text}</p><div class="mp-actions"><button class="win-accept" type="button">Accepter</button><button class="win-refuse" type="button">Refuser</button></div><small>Expire dans 00:${timer}</small>`;
    el.querySelector('.mp-x').onclick=()=>el.remove();
    el.querySelector('.win-refuse').onclick=()=>el.remove();
    el.querySelector('.win-accept').onclick=()=>{ window.location.href=WIN_PAGE; };
    layer.appendChild(el);
    setTimeout(()=>{if(el.isConnected)el.remove()},13000+Math.random()*8000);
  }
  function roll(){
    if(!canSpawn())return;
    // 1 chance sur 15 par vague, donc trouvable sans être toujours présent.
    if(Math.floor(Math.random()*15)===0) spawnWinAd();
  }
  setInterval(roll,900);
  setTimeout(roll,1200);
})();
