// Thème clair / sombre — switch on/off avec icônes soleil/lune
const themeToggle=document.getElementById('themeToggle');
function applyTheme(t){
  document.documentElement.setAttribute('data-theme',t);
  localStorage.setItem('majg-theme',t);
  if(themeToggle){
    themeToggle.setAttribute('aria-checked',t==='dark'?'true':'false');
    themeToggle.setAttribute('aria-label',t==='dark'?'Activer le mode clair':'Activer le mode sombre');
  }
}
if(themeToggle){
  applyTheme(document.documentElement.getAttribute('data-theme')==='dark'?'dark':'light');
  themeToggle.addEventListener('click',()=>applyTheme(document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark'));
}

const nav=document.getElementById('nav');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>40));
const burger=document.getElementById('burger'),navLinks=document.getElementById('navLinks');
burger.addEventListener('click',()=>{
  const open=navLinks.classList.toggle('open');
  burger.classList.toggle('open',open);
  burger.setAttribute('aria-expanded',open);
});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  navLinks.classList.remove('open');
  burger.classList.remove('open');
  burger.setAttribute('aria-expanded','false');
}));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
document.querySelectorAll('.faq-q').forEach(q=>q.addEventListener('click',()=>{
  const item=q.parentElement,a=item.querySelector('.faq-a'),open=item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i=>{i.classList.remove('open');i.querySelector('.faq-a').style.maxHeight=null});
  if(!open){item.classList.add('open');a.style.maxHeight=a.scrollHeight+'px'}
}));
function setActive(group,btn){group.forEach(b=>b.classList.remove('active'));btn.classList.add('active')}

// Réalisations — gîte : sélecteur d'espaces
const giteData={
  chambre:{title:"Le calme,<br>à deux pas de la ville.",desc:"Lit douillet, lumière naturelle, vue sur les hauteurs.",btn:"Vérifier les disponibilités",img:"https://images.unsplash.com/photo-1764760764956-fcb78be107a5?auto=format&fit=crop&w=900&q=70"},
  terrasse:{title:"Le café du matin,<br>face aux collines.",desc:"Un espace extérieur partagé, ouvert du printemps à l'automne.",btn:"Voir la terrasse",img:"https://images.unsplash.com/photo-1778549026540-579eda9c0b73?auto=format&fit=crop&w=900&q=70"},
  sdb:{title:"Une salle d'eau,<br>pensée comme à la maison.",desc:"Douche à l'italienne, linge fourni, rien à prévoir.",btn:"Découvrir l'équipement",img:"https://images.unsplash.com/photo-1744869524920-f0efc925b82f?auto=format&fit=crop&w=900&q=70"},
  exterieur:{title:"Le jardin,<br>pour souffler un peu.",desc:"Transats, ombre des oliviers, calme garanti.",btn:"Voir les extérieurs",img:"https://images.unsplash.com/photo-1767969217509-7edd70a96e1b?auto=format&fit=crop&w=900&q=70"}
};
document.querySelectorAll('.gite-thumb').forEach(btn=>btn.addEventListener('click',()=>{
  const wrap=btn.closest('.demo-visual'),room=giteData[btn.dataset.room];
  if(!wrap||!room)return;
  setActive(wrap.querySelectorAll('.gite-thumb'),btn);
  const h=wrap.querySelector('h3'),d=wrap.querySelector('.gite-desc'),b=wrap.querySelector('.m-btn');
  if(h)h.innerHTML=room.title;
  if(d)d.textContent=room.desc;
  if(b)b.textContent=room.btn;
  wrap.style.setProperty('--photo',`url('${room.img}')`);
}));

// Réalisations — institut : sélecteur de soin avec prix/durée/photo
document.querySelectorAll('.soin-opt').forEach(btn=>btn.addEventListener('click',()=>{
  const picker=btn.closest('.soin-picker'),wrap=btn.closest('.demo-visual');
  if(!picker)return;
  setActive(picker.querySelectorAll('.soin-opt'),btn);
  const detail=picker.nextElementSibling;
  if(detail){
    const price=detail.querySelector('.soin-price'),duree=detail.querySelector('.soin-duree');
    if(price)price.textContent=btn.dataset.price;
    if(duree)duree.textContent=btn.dataset.duree;
  }
  if(wrap&&btn.dataset.img)wrap.style.setProperty('--photo',`url('${btn.dataset.img}')`);
}));

// Réalisations — artisan : calculateur de devis en direct
function updateDevis(calc){
  const total=calc.nextElementSibling;
  if(!total)return;
  let min=0,max=0;
  calc.querySelectorAll('input[type=checkbox]:checked').forEach(c=>{min+=+c.dataset.min;max+=+c.dataset.max});
  const out=total.querySelector('strong');
  if(out)out.textContent=min===0&&max===0?'0 €':min+' € – '+max+' €';
}
document.querySelectorAll('.devis-calc').forEach(calc=>{
  calc.querySelectorAll('input[type=checkbox]').forEach(input=>input.addEventListener('change',()=>updateDevis(calc)));
});

// Réalisations — réseaux sociaux : grille Instagram cliquable
document.querySelectorAll('.ig-grid-live').forEach(grid=>{
  const reveal=grid.closest('.phone-frame')?.querySelector('.ig-reveal');
  if(!reveal)return;
  const type=reveal.querySelector('.ig-reveal-type'),sujet=reveal.querySelector('.ig-reveal-sujet');
  grid.querySelectorAll('.ig-cell').forEach(cell=>cell.addEventListener('click',()=>{
    setActive(grid.querySelectorAll('.ig-cell'),cell);
    if(type)type.textContent=cell.dataset.type;
    if(sujet)sujet.textContent=cell.dataset.sujet;
  }));
});

// Contact — envoi du formulaire de devis par email (FormSubmit, sans rechargement de page)
const contactForm=document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit',e=>{
    e.preventDefault();
    const btn=contactForm.querySelector('button[type=submit]'),status=document.getElementById('formStatus'),label=btn.textContent;
    btn.disabled=true;btn.textContent='Envoi…';
    fetch('https://formsubmit.co/ajax/jules.grisolle@icloud.com',{
      method:'POST',
      headers:{'Content-Type':'application/json','Accept':'application/json'},
      body:JSON.stringify(Object.fromEntries(new FormData(contactForm)))
    }).then(r=>{
      if(!r.ok)throw new Error('send failed');
      btn.textContent='Merci ! On vous recontacte sous 72 h ✓';
      if(status)status.textContent="C'est envoyé. On revient vers vous très vite.";
      contactForm.reset();
    }).catch(()=>{
      btn.disabled=false;btn.textContent=label;
      if(status)status.textContent="Un souci est survenu — réessayez ou écrivez-nous directement à contact@majg-studio.fr.";
    });
  });
}

// Transition douce au changement de page (rideau plein écran, sans flash de fond)
const curtain=document.querySelector('.page-curtain');
const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('a[href]').forEach(a=>{
  const href=a.getAttribute('href');
  if(!href||href.startsWith('#')||href.startsWith('http')||href.startsWith('mailto:')||href.startsWith('tel:')||a.target==='_blank')return;
  a.addEventListener('click',e=>{
    if(e.defaultPrevented||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0)return;
    e.preventDefault();
    if(curtain&&!reduceMotion){
      curtain.classList.add('show');
      setTimeout(()=>{location.href=href},270);
    }else{
      location.href=href;
    }
  });
});
