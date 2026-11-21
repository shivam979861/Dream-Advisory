const content=window.DREAM_CONTENT||{};
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#navigation');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
function closeMenu(){menu.setAttribute('aria-expanded','false');nav.classList.remove('open')}
nav.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu()});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});
const dialog=document.querySelector('#privacy-dialog');document.querySelector('#privacy-open').addEventListener('click',()=>dialog.showModal());dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
document.querySelector('#year').textContent=new Date().getFullYear();
const el=(tag,text,cls)=>{const e=document.createElement(tag);e.textContent=text||'';if(cls)e.className=cls;return e};
function localImage(src){return typeof src==='string'&&/^assets\/[a-zA-Z0-9_./-]+$/.test(src)&&!src.includes('..')}
if(content.tagline)document.querySelector('h1').textContent=content.tagline;
if (content.owners?.length) {
  const list = document.querySelector('#owner-list');
  list.replaceChildren();
  for (const owner of content.owners) {
    const card = el('article', '', 'owner-card');
    if (localImage(owner.photo)) {
      const img = document.createElement('img');
      img.src = owner.photo;
      img.alt = '';
      img.loading = 'lazy';
      img.decoding = 'async';
      card.append(img);
    }
    const info = el('div', '', 'owner-info');
    info.append(el('h3', owner.name), el('p', owner.role, 'eyebrow'), el('p', owner.bio));
    card.append(info);
    list.append(card);
  }
}
if(content.partners?.length){
  const list=document.querySelector('#partner-list');
  const track=el('div','','partner-track'),group=el('div','','partner-group');
  group.setAttribute('role','list');
  for(const bank of content.partners){
    const card=el('div','','bank-item');card.setAttribute('role','listitem');
    if(localImage(bank.logo)){
      const img=document.createElement('img');img.src=bank.logo;img.alt='';img.decoding='async';card.append(img);
    }
    card.append(el('span',bank.name));group.append(card);
  }
  const repeat=group.cloneNode(true);repeat.setAttribute('aria-hidden','true');
  track.append(group,repeat);list.replaceChildren(track);
}
if(content.milestones?.length){const list=document.querySelector('#milestones');list.replaceChildren();for(const milestone of content.milestones){const item=el('article','','milestone-item');item.append(el('p',milestone.date,'eyebrow'),el('h3',milestone.title),el('p',milestone.description));list.append(item)}}
const contact = content.contact || {};
const contactOptions = document.querySelector('#contact-options');
const contactDetails = el('dl', '', 'contact-details');

function addContactDetail(label, value) {
  const detail = el('dd');
  detail.append(value);
  contactDetails.append(el('dt', label), detail);
}

function contactLink(label, href, className) {
  const link = el('a', label, className);
  link.href = href;
  return link;
}

if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email || '')) {
  const gmail = new URL('https://mail.google.com/mail/');
  gmail.search = new URLSearchParams({view: 'cm', fs: '1', to: contact.email});
  const emailOptions = el('div', '', 'contact-email-options');
  const gmailLink = contactLink(contact.email, gmail.href);
  gmailLink.setAttribute('aria-label', 'Email ' + contact.email + ' in Gmail');
  emailOptions.append(gmailLink, contactLink('Use your mail app', 'mailto:' + contact.email));
  addContactDetail('Customer feedback & support', emailOptions);
  document.querySelector('#privacy-contact').href = gmail.href;
}
if (/^\+?[\d\s()-]{7,20}$/.test(contact.phone || '')) {
  addContactDetail('Business phone', contactLink(contact.phone, 'tel:' + contact.phone.replace(/[^+\d]/g, '')));
}
if (contact.address) addContactDetail('Service location', contact.address);
if (contact.hours) addContactDetail('Business hours', contact.hours);
contactOptions.append(contactDetails);

if (/^\+?[\d\s()-]{7,20}$/.test(contact.whatsapp || '')) {
  const message = encodeURIComponent('Hello Dream Advisory, I would like to discuss home loan guidance.');
  const whatsappLink = 'https://wa.me/' + contact.whatsapp.replace(/\D/g, '') + '?text=' + message;
  contactOptions.append(contactLink('Message us on WhatsApp', whatsappLink, 'button'));
}
const observer=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){nav.querySelectorAll('a').forEach(a=>{const match=a.getAttribute('href')==='#'+e.target.id;a.classList.toggle('active',match);if(match)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}},{rootMargin:'-15% 0px -60% 0px'});document.querySelectorAll('main section[id]').forEach(s=>observer.observe(s));
