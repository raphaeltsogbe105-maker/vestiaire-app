(function(){
  const DEMO_PRODUCTS = [
    {id:'prod-1', img:'img/produit-001.webp', name:'Article 1', price:8000, cat:'Objets'},
    {id:'prod-2', img:'img/produit-002.webp', name:'Article 2', price:8000, cat:'Objets'},
    {id:'prod-3', img:'img/produit-003.webp', name:'Article 3', price:8000, cat:'Objets'},
    {id:'prod-4', img:'img/produit-004.webp', name:'Nike', price:8000, cat:'Objets'},
    {id:'prod-5', img:'img/produit-005.webp', name:'Calvin Klein', price:8000, cat:'Objets'},
    {id:'prod-6', img:'img/produit-006.webp', name:'Article 6', price:8000, cat:'Objets'},
    {id:'prod-7', img:'img/produit-007.jpg', name:'Medias precortadas ya disponibles Adulto y nio I', price:8000, cat:'Objets'},
    {id:'prod-8', img:'img/produit-008.webp', name:'100 Motorcycle Goggles Motocross Glasses Off roa', price:20000, cat:'Sport'},
    {id:'prod-9', img:'img/produit-009.jpg', name:'220g Personnalisez votre drdeur en coton pour ho', price:8000, cat:'Objets'},
    {id:'prod-10', img:'img/produit-010.jpg', name:'4 paires de chaussettes bateau dontracts imprim', price:8000, cat:'Objets'},
    {id:'prod-11', img:'img/produit-011.jpg', name:'40 pes 30 pes 24 pes Meias Esportivas Confortvei', price:8000, cat:'Objets'},
    {id:'prod-12', img:'img/produit-012.webp', name:'Argentina FIFA world cup 2026 new jersey adidas', price:20000, cat:'Sport'},
    {id:'prod-13', img:'img/produit-013.jpg', name:'BARCELONA RETRO', price:20000, cat:'Sport'},
    {id:'prod-14', img:'img/produit-014.webp', name:'Cool Streetwear Outfit for Boys', price:25000, cat:'Vêtements'},
    {id:'prod-15', img:'img/produit-015.webp', name:'FC Barcelonas 2026 27 Away Kit', price:20000, cat:'Sport'},
    {id:'prod-16', img:'img/produit-016.jpg', name:'Fitssss )', price:8000, cat:'Objets'},
    {id:'prod-17', img:'img/produit-017.webp', name:'Gula Dou Ivory Coast 2024', price:8000, cat:'Objets'},
    {id:'prod-18', img:'img/produit-018.jpg', name:'I Tried The Health Focused Galaxy Watch6 For 3', price:8000, cat:'Objets'},
    {id:'prod-19', img:'img/produit-019.webp', name:'KIT 4 FAIXAS DE CABELO ESPORTE, ACADEMIA, ESTILO', price:20000, cat:'Sport'},
    {id:'prod-20', img:'img/produit-020.jpg', name:'Kit regatas americanas gringas', price:20000, cat:'Sport'},
    {id:'prod-21', img:'img/produit-021.jpg', name:'Lamine Yamal', price:20000, cat:'Sport'},
    {id:'prod-22', img:'img/produit-022.jpg', name:'Lionel Messi', price:20000, cat:'Sport'},
    {id:'prod-23', img:'img/produit-023.webp', name:'Meio Cortado Nike', price:8000, cat:'Objets'},
    {id:'prod-24', img:'img/produit-024.webp', name:'Order yours today', price:8000, cat:'Objets'},
    {id:'prod-25', img:'img/produit-025.jpg', name:'Beanies Winter hats for women, Beanie hats, Hats', price:8000, cat:'Objets'},
    {id:'prod-26', img:'img/produit-026.webp', name:'SheIn Womens 4 Packs Solid Thermal Sweatpants El', price:25000, cat:'Vêtements'},
    {id:'prod-27', img:'img/produit-027.jpg', name:'ShopShareInviteNew', price:8000, cat:'Objets'},
    {id:'prod-28', img:'img/produit-028.jpg', name:'Untitled', price:8000, cat:'Objets'},
    {id:'prod-29', img:'img/produit-029.jpg', name:'Vtements homme & femme, shoppez la mode en ligne', price:8000, cat:'Objets'},
    {id:'prod-30', img:'img/produit-030.jpg', name:'World Cup season', price:20000, cat:'Sport'},
    {id:'prod-31', img:'img/produit-031.webp', name:'Wrist Support Unisex Sports Bandage Gym Elastic', price:8000, cat:'Objets'},
    {id:'prod-32', img:'img/produit-032.jpg', name:'ARGENTINA (MESSI) JERSEY', price:20000, cat:'Sport'},
    {id:'prod-33', img:'img/produit-033.webp', name:'Adidas Mens Spain White and Burgundy Soccer Jers', price:20000, cat:'Sport'},
    {id:'prod-34', img:'img/produit-034.webp', name:'Custom caps by junaid impex', price:8000, cat:'Objets'},
    {id:'prod-35', img:'img/produit-035.jpg', name:'Custom soccer uniforms', price:20000, cat:'Sport'},
    {id:'prod-36', img:'img/produit-036.jpg', name:'Shoping hub', price:8000, cat:'Objets'},
    {id:'prod-37', img:'img/produit-037.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-38', img:'img/produit-038.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-39', img:'img/produit-039.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-40', img:'img/produit-040.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-41', img:'img/produit-041.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-42', img:'img/produit-042.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-43', img:'img/produit-043.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-44', img:'img/produit-044.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-45', img:'img/produit-045.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-46', img:'img/produit-046.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-47', img:'img/produit-047.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-48', img:'img/produit-048.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-49', img:'img/produit-049.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-50', img:'img/produit-050.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-51', img:'img/produit-051.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-52', img:'img/produit-052.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-53', img:'img/produit-053.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-54', img:'img/produit-054.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-55', img:'img/produit-055.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-56', img:'img/produit-056.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-57', img:'img/produit-057.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-58', img:'img/produit-058.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-59', img:'img/produit-059.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-60', img:'img/produit-060.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-61', img:'img/produit-061.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-62', img:'img/produit-062.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-63', img:'img/produit-063.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-64', img:'img/produit-064.jpg', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-65', img:'img/produit-065.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-66', img:'img/produit-066.jpg', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-67', img:'img/produit-067.jpg', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-68', img:'img/produit-068.jpg', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-69', img:'img/produit-069.jpg', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-70', img:'img/produit-070.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-71', img:'img/produit-071.jpg', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-72', img:'img/produit-072.jpg', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-73', img:'img/produit-073.jpg', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-74', img:'img/produit-074.jpg', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-75', img:'img/produit-075.jpg', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-76', img:'img/produit-076.jpg', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-77', img:'img/produit-077.jpg', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-78', img:'img/produit-078.jpg', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-79', img:'img/produit-079.jpg', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-80', img:'img/produit-080.jpg', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-81', img:'img/produit-081.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-82', img:'img/produit-082.jpg', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-83', img:'img/produit-083.jpg', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-84', img:'img/produit-084.jpg', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-85', img:'img/produit-085.jpg', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-86', img:'img/produit-086.jpg', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-87', img:'img/produit-087.jpg', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-88', img:'img/produit-088.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-89', img:'img/produit-089.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-90', img:'img/produit-090.webp', name:'Tlhargement', price:8000, cat:'Objets'},
    {id:'prod-91', img:'img/produit-091.webp', name:'Tlhargement', price:8000, cat:'Objets'}
  ];
  const DEMO_ADS = [
    {id:'ad-demo-1', img:null, title:"Soldes d'été — jusqu'à -50%", sub:'Sur une sélection de pièces, dans la limite des stocks.'}
  ];

  let products = [];
  let ads = [];
  let heroImg = null;
  let carIndex = 0;
  let carTimer = null;
  let currentFilter = 'Tous';
  let editingId = null;

  function formatPrice(v){
    const n = Math.round(Number(v) || 0);
    return n.toLocaleString('fr-FR') + ' F CFA';
  }

  const productGrid = document.getElementById('productGrid');
  const carouselTrack = document.getElementById('carouselTrack');
  const carouselDots = document.getElementById('carouselDots');
  const heroPhoto = document.getElementById('heroPhoto');
  const heroFigures = document.getElementById('heroFigures');
  const heroEditBtn = document.getElementById('heroEditBtn');
  const heroResetBtn = document.getElementById('heroResetBtn');
  const heroFileInput = document.getElementById('heroFileInput');

  const WHATSAPP_NUMBER = '22891771170'; // +228 91 77 11 70

  const toggleAdminBtn = document.getElementById('toggleAdmin');
  const adminTopbar = document.getElementById('adminTopbar');
  const logoutBtn = document.getElementById('logoutBtn');
  const loginCard = document.getElementById('loginCard');
  const productCard = document.getElementById('productCard');
  const adCard = document.getElementById('adCard');
  const loginForm = document.getElementById('loginForm');
  const loginEmail = document.getElementById('loginEmail');
  const loginPassword = document.getElementById('loginPassword');
  const loginMsg = document.getElementById('loginMsg');

  const orderOverlay = document.getElementById('orderOverlay');
  const orderModal = document.getElementById('orderModal');
  const orderCloseBtn = document.getElementById('orderCloseBtn');
  const orderProductInfo = document.getElementById('orderProductInfo');
  const orderWhatsappBtn = document.getElementById('orderWhatsappBtn');
  const orderForm = document.getElementById('orderForm');
  const orderMsg = document.getElementById('orderMsg');

  const cartBtn = document.getElementById('cartBtn');
  const cartCount = document.getElementById('cartCount');
  const ordersCard = document.getElementById('ordersCard');
  const salesReportCard = document.getElementById('salesReportCard');
  const salesReport = document.getElementById('salesReport');
  const ordersBadge = document.getElementById('ordersBadge');
  let knownOrderIds = null;
  let ordersPollTimer = null;
  let stockPollTimer = null;

  function playOrderChime(){
    try{
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      [880, 1108].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.0001, ctx.currentTime + i * 0.16);
        gain.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + i * 0.16 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.16 + 0.35);
        osc.connect(gain); gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.16);
        osc.stop(ctx.currentTime + i * 0.16 + 0.4);
      });
    }catch(e){ /* audio not available, ignore */ }
  }
  const messagesCard = document.getElementById('messagesCard');
  const messagesBadge = document.getElementById('messagesBadge');
  const chatToggleBadge = document.getElementById('chatToggleBadge');
  const stockBadge = document.getElementById('stockBadge');
  const stockAlertList = document.getElementById('stockAlertList');
  let knownAdminMsgIds = null;
  let knownClientMsgIds = null;
  let knownOutOfStockIds = null;
  const ordersList = document.getElementById('ordersList');
  const conversationsList = document.getElementById('conversationsList');
  const adminChatMessages = document.getElementById('adminChatMessages');
  const adminChatForm = document.getElementById('adminChatForm');
  const adminChatInput = document.getElementById('adminChatInput');
  const chatToggleBtn = document.getElementById('chatToggleBtn');
  const chatPanel = document.getElementById('chatPanel');
  const chatCloseBtn = document.getElementById('chatCloseBtn');
  const chatDeleteBtn = document.getElementById('chatDeleteBtn');
  const chatMessages = document.getElementById('chatMessages');
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');

  const ADMIN_USER = 'admin';
  const ADMIN_PASSWORD = '1170r@ph';
  let cart = [];
  try{ cart = JSON.parse(localStorage.getItem('vestiaire:cart') || '[]'); }catch(e){ cart = []; }
  let clientId = localStorage.getItem('vestiaire:clientId');
  if(!clientId){
    clientId = 'client-' + Date.now() + '-' + Math.random().toString(36).slice(2,8);
    localStorage.setItem('vestiaire:clientId', clientId);
  }
  let adminConvChannel = null;
  let clientChatChannel = null;
  let currentAdminConversation = null;


  // Connexion à Supabase : toutes les modifications faites via "Gérer la boutique"
  // sont désormais sauvegardées sur un vrai serveur, visibles par tous les visiteurs.
  const SUPABASE_URL = 'https://bwaicdegplkpjhthgdic.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_ospEzFT6wPnH5DghmeDOMQ_OE3o0iPG';
  const supabase = (typeof window !== 'undefined' && window.supabase)
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
    : null;

  async function loadState(){
    products = DEMO_PRODUCTS.slice();
    ads = DEMO_ADS.slice();
    heroImg = null;
    if(supabase){
      try{
        const { data, error } = await supabase.from('products').select('*').order('created_at', {ascending:false});
        if(!error && data && data.length){
          products = data.map(r => ({ id:r.id, img:r.img, name:r.name, price:Number(r.price), cat:r.cat, badge:!!r.badge }));
        }
      }catch(e){ console.error('Erreur de chargement des produits', e); }
      try{
        const { data, error } = await supabase.from('ads').select('*').order('created_at', {ascending:true});
        if(!error && data && data.length){
          ads = data.map(r => ({ id:r.id, img:r.img, title:r.title, sub:r.subtitle }));
        }
      }catch(e){ console.error('Erreur de chargement des publicités', e); }
      try{
        const { data, error } = await supabase.from('site_settings').select('value').eq('key','heroImg').maybeSingle();
        if(!error && data && data.value) heroImg = data.value;
      }catch(e){ console.error("Erreur de chargement de l'image principale", e); }
    }
    renderProducts();
    renderAds();
    renderHero();
  }

  function renderHero(){
    if(heroImg){
      heroPhoto.src = heroImg;
      heroPhoto.style.display = 'block';
      heroFigures.style.display = 'none';
      heroResetBtn.style.display = 'inline-flex';
    }else{
      heroPhoto.style.display = 'none';
      heroFigures.style.display = 'block';
      heroResetBtn.style.display = 'none';
    }
  }

  async function saveProducts(){
    if(!supabase) return;
    try{
      await supabase.from('products').delete().neq('id', '__none__');
      const rows = products.map(p => ({ id:p.id, img:p.img, name:p.name, price:p.price, cat:p.cat, badge:!!p.badge }));
      if(rows.length){
        const { error } = await supabase.from('products').insert(rows);
        if(error) console.error('Erreur de sauvegarde produits', error);
      }
    }catch(e){ console.error('Erreur de sauvegarde produits', e); }
  }
  async function upsertProductRemote(p){
    if(!supabase) throw new Error('Connexion à la base de données indisponible.');
    const row = { id:p.id, img:p.img, name:p.name, price:p.price, cat:p.cat, badge:!!p.badge, stock: (p.stock === undefined ? null : p.stock), sold: (p.sold || 0) };
    const { error } = await supabase.from('products').upsert(row);
    if(error){
      console.error('Erreur de sauvegarde du produit', error);
      throw new Error(error.message || 'Échec de l\'enregistrement du produit.');
    }
  }
  async function deleteProductRemote(id){
    if(!supabase) return;
    try{
      const { error } = await supabase.from('products').delete().eq('id', id);
      if(error) console.error('Erreur de suppression du produit', error);
    }catch(e){ console.error('Erreur de suppression du produit', e); }
  }
  async function saveAds(){
    if(!supabase) return;
    try{
      await supabase.from('ads').delete().neq('id', '__none__');
      const rows = ads.map(a => ({ id:a.id, img:a.img, title:a.title, subtitle:a.sub }));
      if(rows.length){
        const { error } = await supabase.from('ads').insert(rows);
        if(error) console.error('Erreur de sauvegarde publicités', error);
      }
    }catch(e){ console.error('Erreur de sauvegarde publicités', e); }
  }

  function renderProducts(){
    productGrid.innerHTML = '';
    const list = currentFilter === 'Tous' ? products : products.filter(p => p.cat === currentFilter);
    if(list.length === 0){
      productGrid.innerHTML = '<div class="empty-note">Aucun produit dans cette catégorie pour le moment. Cliquez sur "Gérer la boutique" pour en ajouter un.</div>';
      return;
    }
    list.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      const visual = p.img
        ? `<img src="${p.img}" alt="${escapeHtml(p.name)}">`
        : (p.svg || '');
      const outOfStock = p.stock !== null && p.stock !== undefined && p.stock <= 0;
      card.innerHTML = `
        ${outOfStock ? '<div class="sold-badge">Épuisé</div>' : (p.badge ? '<div class="new-badge">Nouveau</div>' : '')}
        <div class="card-actions">
          <button class="prod-edit" type="button" aria-label="Modifier le produit" data-id="${p.id}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 3.3a1 1 0 0 1 1.4 0l1.6 1.6a1 1 0 0 1 0 1.4L7 17l-4 1 1-4z"/></svg>
          </button>
          <button class="prod-del" type="button" aria-label="Supprimer le produit" data-id="${p.id}">
            <svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="product-visual" style="background:${p.bg || '#e3d9c4'};">${visual}</div>
        <div class="product-name">${escapeHtml(p.name)}</div>
        <div class="product-price">${formatPrice(p.price)}</div>
        ${(p.stock !== null && p.stock !== undefined && p.stock > 0) ? `<div class="stock-note">${p.stock} en stock</div>` : ''}
        <div class="admin-stock-info">Vendu : ${p.sold || 0} · Reste : ${(p.stock === null || p.stock === undefined) ? 'illimité' : p.stock}</div>
        <button class="btn-order" type="button" data-id="${p.id}" ${outOfStock ? 'disabled' : ''}>${outOfStock ? 'Épuisé' : 'Ajouter au panier'}</button>
      `;
      productGrid.appendChild(card);
    });
    productGrid.querySelectorAll('.btn-order').forEach(btn => {
      btn.addEventListener('click', () => addToCart(btn.dataset.id));
    });
    productGrid.querySelectorAll('.prod-del').forEach(btn => {
      btn.addEventListener('click', () => {
        products = products.filter(p => p.id !== btn.dataset.id);
        if(editingId === btn.dataset.id) cancelEdit();
        deleteProductRemote(btn.dataset.id);
        renderProducts();
      });
    });
    productGrid.querySelectorAll('.prod-edit').forEach(btn => {
      btn.addEventListener('click', () => startEditProduct(btn.dataset.id));
    });
  }

  function renderAds(){
    carouselTrack.innerHTML = '';
    carouselDots.innerHTML = '';
    if(ads.length === 0){
      carouselTrack.innerHTML = `
        <div class="carousel-slide empty">
          <div class="slide-content">
            <div class="slide-title">Aucune publicité pour l'instant</div>
            <div class="slide-sub">Ajoutez une bannière depuis "Gérer la boutique" pour l'afficher ici en défilement.</div>
          </div>
        </div>`;
      return;
    }
    ads.forEach((a) => {
      const slide = document.createElement('div');
      slide.className = 'carousel-slide';
      slide.innerHTML = `
        ${a.img ? `<img src="${a.img}" alt="">` : ''}
        <div class="overlay"></div>
        <button class="slide-del" type="button" aria-label="Supprimer la publicité" data-id="${a.id}">
          <svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div class="slide-content">
          <div class="slide-title">${escapeHtml(a.title || '')}</div>
          ${a.sub ? `<div class="slide-sub">${escapeHtml(a.sub)}</div>` : ''}
        </div>
      `;
      carouselTrack.appendChild(slide);
    });
    ads.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === carIndex ? ' active' : '');
      dot.type = 'button';
      dot.addEventListener('click', () => goTo(i));
      carouselDots.appendChild(dot);
    });
    carouselTrack.querySelectorAll('.slide-del').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        ads = ads.filter(a => a.id !== btn.dataset.id);
        carIndex = 0;
        saveAds();
        renderAds();
        resetAutoplay();
      });
    });
    if(carIndex >= ads.length) carIndex = 0;
    updateCarousel();
  }

  function updateCarousel(){
    carouselTrack.style.transform = `translateX(-${carIndex * 100}%)`;
    carouselDots.querySelectorAll('.carousel-dot').forEach((d,i)=> d.classList.toggle('active', i===carIndex));
  }
  function goTo(i){
    if(ads.length === 0) return;
    carIndex = (i + ads.length) % ads.length;
    updateCarousel();
  }
  function resetAutoplay(){
    if(carTimer) clearInterval(carTimer);
    if(ads.length > 1){
      carTimer = setInterval(()=> goTo(carIndex + 1), 4500);
    }
  }

  document.getElementById('carPrev').addEventListener('click', ()=>{ goTo(carIndex - 1); resetAutoplay(); });
  document.getElementById('carNext').addEventListener('click', ()=>{ goTo(carIndex + 1); resetAutoplay(); });
  document.getElementById('carousel').addEventListener('mouseenter', ()=>{ if(carTimer) clearInterval(carTimer); });
  document.getElementById('carousel').addEventListener('mouseleave', resetAutoplay);

  function escapeHtml(str){
    return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
  }
  function readFileAsDataUrl(file){
    return new Promise((resolve, reject)=>{
      const r = new FileReader();
      r.onload = ()=> resolve(r.result);
      r.onerror = ()=> reject(new Error('Lecture du fichier impossible'));
      r.readAsDataURL(file);
    });
  }

  // Redimensionne et compresse l'image côté navigateur avant usage : évite les plantages
  // silencieux sur mobile avec les photos de smartphone (souvent 8-20+ Mo non compressées).
  function fileToDataUrl(file, maxDim, quality){
    maxDim = maxDim || 1600;
    quality = quality || 0.82;
    return new Promise((resolve, reject)=>{
      readFileAsDataUrl(file).then(rawDataUrl => {
        const img = new Image();
        img.onload = () => {
          try{
            let { width, height } = img;
            if(width > maxDim || height > maxDim){
              if(width >= height){
                height = Math.round(height * (maxDim / width));
                width = maxDim;
              }else{
                width = Math.round(width * (maxDim / height));
                height = maxDim;
              }
            }
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            resolve(canvas.toDataURL('image/jpeg', quality));
          }catch(e){
            // Si le recadrage échoue (ex: image très inhabituelle), on garde l'original.
            resolve(rawDataUrl);
          }
        };
        img.onerror = () => resolve(rawDataUrl); // pas une image lisible par <img>, on garde tel quel
        img.src = rawDataUrl;
      }).catch(reject);
    });
  }

  const productForm = document.getElementById('productForm');
  const prodImg = document.getElementById('prodImg');
  const prodName = document.getElementById('prodName');
  const prodPrice = document.getElementById('prodPrice');
  const prodCat = document.getElementById('prodCat');
  const prodStock = document.getElementById('prodStock');
  const prodSubmitBtn = document.getElementById('prodSubmitBtn');
  const prodCancelBtn = document.getElementById('prodCancelBtn');

  function startEditProduct(id){
    const p = products.find(x => x.id === id);
    if(!p) return;
    editingId = id;
    prodName.value = p.name;
    prodPrice.value = Math.round(p.price);
    prodCat.value = p.cat;
    prodStock.value = (p.stock === null || p.stock === undefined) ? '' : p.stock;
    prodImg.required = false;
    prodSubmitBtn.textContent = 'Enregistrer les modifications';
    prodCancelBtn.style.display = 'inline-flex';
    document.getElementById('prodMsg').textContent = '';
    document.body.classList.add('admin-open');
    productForm.scrollIntoView({behavior:'smooth', block:'center'});
  }

  function resetProductForm(){
    editingId = null;
    productForm.reset();
    prodImg.required = true;
    prodSubmitBtn.textContent = 'Ajouter le produit';
    prodCancelBtn.style.display = 'none';
  }

  function cancelEdit(){
    resetProductForm();
    document.getElementById('prodMsg').textContent = '';
  }

  prodCancelBtn.addEventListener('click', cancelEdit);

  document.getElementById('catFilters').addEventListener('click', function(e){
    const btn = e.target.closest('.cat-filter');
    if(!btn) return;
    currentFilter = btn.dataset.cat;
    this.querySelectorAll('.cat-filter').forEach(b => b.classList.toggle('active', b === btn));
    renderProducts();
  });

  heroEditBtn.addEventListener('click', ()=> heroFileInput.click());

  heroFileInput.addEventListener('change', async function(){
    if(!this.files[0]) return;
    try{
      const dataUrl = await fileToDataUrl(this.files[0]);
      heroImg = dataUrl;
      renderHero();
      if(supabase){
        try{ await supabase.from('site_settings').upsert({ key:'heroImg', value:heroImg }); }catch(e){ console.error("Erreur de sauvegarde de l'image du hero", e); }
      }
    }catch(err){ /* lecture du fichier impossible, on ignore */ }
    this.value = '';
  });

  heroResetBtn.addEventListener('click', async function(){
    heroImg = null;
    renderHero();
    if(supabase){
      try{ await supabase.from('site_settings').delete().eq('key','heroImg'); }catch(e){ /* rien à supprimer */ }
    }
  });

  function updateAdminUI(){
    const loggedIn = sessionStorage.getItem('vestiaire:isAdmin') === '1';
    document.body.classList.toggle('admin-authed', loggedIn);
    loginCard.style.display = loggedIn ? 'none' : '';
    productCard.style.display = loggedIn ? '' : 'none';
    adCard.style.display = loggedIn ? '' : 'none';
    ordersCard.style.display = loggedIn ? '' : 'none';
    salesReportCard.style.display = loggedIn ? '' : 'none';
    messagesCard.style.display = loggedIn ? '' : 'none';
    adminTopbar.style.display = loggedIn ? 'flex' : 'none';
    if(loggedIn){
      loadOrders(false);
      loadConversations();
      checkStockAlerts(false);
      if(!ordersPollTimer){
        ordersPollTimer = setInterval(() => loadOrders(true), 15000);
      }
      if(!adminConvListPollTimer){
        adminConvListPollTimer = setInterval(loadConversations, 8000);
      }
      if(!stockPollTimer){
        stockPollTimer = setInterval(() => checkStockAlerts(true), 15000);
      }
    }else{
      if(ordersPollTimer){ clearInterval(ordersPollTimer); ordersPollTimer = null; }
      if(adminConvListPollTimer){ clearInterval(adminConvListPollTimer); adminConvListPollTimer = null; }
      if(adminConvPollTimer){ clearInterval(adminConvPollTimer); adminConvPollTimer = null; }
      if(stockPollTimer){ clearInterval(stockPollTimer); stockPollTimer = null; }
      knownOrderIds = null;
      ordersBadge.style.display = 'none';
      ordersBadge.textContent = '0';
      knownAdminMsgIds = null;
      messagesBadge.style.display = 'none';
      messagesBadge.textContent = '0';
      knownOutOfStockIds = null;
      stockBadge.style.display = 'none';
      stockBadge.textContent = '0';
    }
  }

  ordersCard.addEventListener('click', () => {
    ordersBadge.style.display = 'none';
    ordersBadge.textContent = '0';
  });

  messagesCard.addEventListener('click', () => {
    messagesBadge.style.display = 'none';
    messagesBadge.textContent = '0';
  });

  loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    const id = loginEmail.value.trim();
    const pw = loginPassword.value;
    if(id === ADMIN_USER && pw === ADMIN_PASSWORD){
      sessionStorage.setItem('vestiaire:isAdmin', '1');
      loginMsg.textContent = '';
      loginForm.reset();
      updateAdminUI();
    }else{
      loginMsg.textContent = 'Identifiant ou mot de passe incorrect.';
      loginMsg.className = 'admin-msg err';
    }
  });

  logoutBtn.addEventListener('click', function(){
    sessionStorage.removeItem('vestiaire:isAdmin');
    updateAdminUI();
    document.body.classList.remove('admin-open');
    toggleAdminBtn.classList.remove('active');
  });

  document.getElementById('toggleAdmin').addEventListener('click', function(){
    document.body.classList.toggle('admin-open');
    this.classList.toggle('active');
    if(document.body.classList.contains('admin-open')) updateAdminUI();
  });

  document.getElementById('productForm').addEventListener('submit', async function(e){
    e.preventDefault();
    const msg = document.getElementById('prodMsg');
    const name = prodName.value.trim();
    const price = parseFloat(prodPrice.value);
    const cat = prodCat.value;
    const stockRaw = prodStock.value.trim();
    const stock = stockRaw === '' ? null : Math.max(0, parseInt(stockRaw, 10));
    const hasFile = !!prodImg.files[0];

    if(!name || isNaN(price) || (!editingId && !hasFile)){
      msg.textContent = 'Merci de remplir tous les champs.';
      msg.className = 'admin-msg err';
      return;
    }
    try{
      const dataUrl = hasFile ? await fileToDataUrl(prodImg.files[0]) : null;
      let savedProduct;
      if(editingId){
        const p = products.find(x => x.id === editingId);
        if(p){
          p.name = name;
          p.price = price;
          p.cat = cat;
          p.stock = stock;
          if(dataUrl){ p.img = dataUrl; p.svg = null; p.bg = null; }
          savedProduct = p;
        }
      }else{
        const newProduct = { id:'prod-'+Date.now(), img:dataUrl, name, price, cat, stock, badge:true };
        products.unshift(newProduct);
        savedProduct = newProduct;
      }
      if(savedProduct) await upsertProductRemote(savedProduct);
      checkStockAlerts(false);
      msg.textContent = editingId ? 'Produit mis à jour.' : 'Produit ajouté à la boutique.';
      renderProducts();
      resetProductForm();
      msg.className = 'admin-msg ok';
    }catch(err){
      msg.textContent = 'Erreur : ' + (err && err.message ? err.message : "l'enregistrement a échoué.");
      msg.className = 'admin-msg err';
    }
  });

  document.getElementById('adForm').addEventListener('submit', async function(e){
    e.preventDefault();
    const msg = document.getElementById('adMsg');
    const fileInput = document.getElementById('adImg');
    const title = document.getElementById('adTitle').value.trim();
    const sub = document.getElementById('adSub').value.trim();
    if(!fileInput.files[0] || !title){
      msg.textContent = "Merci d'ajouter une image et un titre.";
      msg.className = 'admin-msg err';
      return;
    }
    try{
      const dataUrl = await fileToDataUrl(fileInput.files[0]);
      ads.push({ id:'ad-'+Date.now(), img:dataUrl, title, sub });
      await saveAds();
      carIndex = ads.length - 1;
      renderAds();
      resetAutoplay();
      this.reset();
      msg.textContent = 'Publicité ajoutée au carrousel.';
      msg.className = 'admin-msg ok';
    }catch(err){
      msg.textContent = "Erreur lors de l'ajout de la publicité.";
      msg.className = 'admin-msg err';
    }
  });

  // ---------- Panier ----------
  function saveCartLocal(){
    try{ localStorage.setItem('vestiaire:cart', JSON.stringify(cart)); }catch(e){}
  }
  function addToCart(id){
    const p = products.find(x => x.id === id);
    if(!p) return;
    if(p.stock !== null && p.stock !== undefined && p.stock <= 0) return;
    const existing = cart.find(c => c.id === id);
    if(existing){
      if(p.stock !== null && p.stock !== undefined && existing.qty >= p.stock) return;
      existing.qty += 1;
    }else{
      cart.push({ id:p.id, name:p.name, price:p.price, img:p.img, qty:1 });
    }
    saveCartLocal();
    updateCartBadge();
  }
  function removeFromCart(id){
    cart = cart.filter(c => c.id !== id);
    saveCartLocal();
    updateCartBadge();
    renderCartModal();
  }
  function cartTotal(){
    return cart.reduce((sum,c)=> sum + c.price * c.qty, 0);
  }
  function updateCartBadge(){
    const count = cart.reduce((sum,c)=> sum + c.qty, 0);
    cartCount.textContent = count;
    cartCount.style.display = count > 0 ? 'flex' : 'none';
  }
  function updateWhatsappLink(){
    const lines = ['Bonjour, je souhaite commander :'];
    cart.forEach(c => lines.push(`- ${c.name} x${c.qty} (${formatPrice(c.price*c.qty)})`));
    lines.push(`Total : ${formatPrice(cartTotal())}`);
    orderWhatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
  }
  function renderCartModal(){
    if(cart.length === 0){
      orderProductInfo.innerHTML = '<div class="cart-empty">Votre panier est vide.</div>';
      orderWhatsappBtn.style.display = 'none';
      orderForm.style.display = 'none';
      return;
    }
    orderWhatsappBtn.style.display = 'flex';
    orderForm.style.display = '';
    orderProductInfo.innerHTML = cart.map(c => `
        <div class="cart-item-row">
          ${c.img ? `<img src="${c.img}" alt="">` : ''}
          <div class="cart-item-name">${escapeHtml(c.name)} × ${c.qty}</div>
          <div class="cart-item-price">${formatPrice(c.price * c.qty)}</div>
          <button type="button" class="cart-item-remove" data-id="${c.id}" aria-label="Retirer">&times;</button>
        </div>`).join('') + `<div class="cart-total-row"><span>Total</span><span>${formatPrice(cartTotal())}</span></div>`;
    orderProductInfo.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => removeFromCart(btn.dataset.id));
    });
    updateWhatsappLink();
  }

  cartBtn.addEventListener('click', () => {
    renderCartModal();
    orderOverlay.classList.add('open');
  });
  orderCloseBtn.addEventListener('click', () => orderOverlay.classList.remove('open'));
  orderOverlay.addEventListener('click', (e) => { if(e.target === orderOverlay) orderOverlay.classList.remove('open'); });

  orderForm.addEventListener('submit', async function(e){
    e.preventDefault();
    if(cart.length === 0) return;
    const name = document.getElementById('orderName').value.trim();
    const phone = document.getElementById('orderPhone').value.trim();
    const note = document.getElementById('orderNote').value.trim();
    if(!name || !phone){
      orderMsg.textContent = 'Merci de renseigner votre nom et votre téléphone.';
      orderMsg.className = 'admin-msg err';
      return;
    }
    const order = {
      id: 'order-' + Date.now(),
      customer_name: name,
      phone,
      address: note,
      items: cart.map(c => ({ id:c.id, name:c.name, price:c.price, qty:c.qty })),
      total: cartTotal(),
      validated: false,
      client_id: clientId
    };
    try{
      if(!supabase) throw new Error('Connexion à la base de données indisponible.');
      const { error } = await supabase.from('orders').insert(order);
      if(error) throw new Error(error.message || "Échec de l'enregistrement de la commande.");
      orderMsg.textContent = 'Commande envoyée ! Vous pouvez aussi confirmer via WhatsApp.';
      orderMsg.className = 'admin-msg ok';
      cart = [];
      saveCartLocal();
      updateCartBadge();
      renderCartModal();
      this.reset();
    }catch(err){
      orderMsg.textContent = 'Erreur : ' + (err && err.message ? err.message : "l'envoi de la commande a échoué.");
      orderMsg.className = 'admin-msg err';
    }
  });

  async function checkStockAlerts(isPoll){
    if(!supabase || !stockBadge) return;
    try{
      const { data, error } = await supabase.from('products').select('id,name,stock');
      if(error || !data) return;
      const emptyOnes = data.filter(p => p.stock !== null && p.stock !== undefined && p.stock <= 0);
      const currentIds = new Set(emptyOnes.map(p => p.id));

      if(knownOutOfStockIds === null){
        knownOutOfStockIds = currentIds;
      }else{
        const newlyEmpty = emptyOnes.filter(p => !knownOutOfStockIds.has(p.id));
        if(newlyEmpty.length > 0 && isPoll) playOrderChime();
        knownOutOfStockIds = currentIds;
      }

      if(emptyOnes.length > 0){
        stockBadge.textContent = String(emptyOnes.length);
        stockBadge.style.display = 'inline-flex';
        stockAlertList.innerHTML = emptyOnes.map(p => `<div class="stock-alert-row"><span>${escapeHtml(p.name)}</span><span>Épuisé</span></div>`).join('');
      }else{
        stockBadge.style.display = 'none';
        stockAlertList.innerHTML = '';
      }
    }catch(e){ console.error('Erreur de vérification du stock', e); }
  }

  function renderSalesReport(orders){
    if(!salesReport) return;
    const totalRevenue = orders.reduce((sum,o) => sum + (Number(o.total) || 0), 0);
    const totalOrders = orders.length;
    const itemCounts = {};
    orders.forEach(o => {
      (o.items || []).forEach(it => {
        const key = it.name || 'Produit';
        if(!itemCounts[key]) itemCounts[key] = { qty:0, revenue:0 };
        itemCounts[key].qty += (it.qty || 0);
        itemCounts[key].revenue += (it.qty || 0) * (it.price || 0);
      });
    });
    const topProducts = Object.entries(itemCounts)
      .sort((a,b) => b[1].qty - a[1].qty)
      .slice(0, 5);

    salesReport.innerHTML = `
      <div class="sr-stats">
        <div class="sr-stat"><div class="sr-num">${formatPrice(totalRevenue)}</div><div class="sr-label">Chiffre d'affaires</div></div>
        <div class="sr-stat"><div class="sr-num">${totalOrders}</div><div class="sr-label">Commande${totalOrders > 1 ? 's' : ''}</div></div>
        <div class="sr-stat"><div class="sr-num">${totalOrders ? formatPrice(Math.round(totalRevenue/totalOrders)) : formatPrice(0)}</div><div class="sr-label">Panier moyen</div></div>
      </div>
      ${topProducts.length ? `<div class="sr-top-list">
        ${topProducts.map(([name, v]) => `<div class="sr-top-row"><span>${escapeHtml(name)} ×${v.qty}</span><span>${formatPrice(v.revenue)}</span></div>`).join('')}
      </div>` : ''}
    `;
  }

  async function loadOrders(isPoll){
    if(!supabase) return;
    try{
      const { data, error } = await supabase.from('orders').select('*').order('created_at', {ascending:false});
      if(error || !data){ ordersList.innerHTML = '<div class="cart-empty">Erreur de chargement.</div>'; return; }

      const currentIds = new Set(data.map(o => o.id));
      if(knownOrderIds === null){
        // Premier chargement : on mémorise l'état sans notifier.
        knownOrderIds = currentIds;
      }else{
        const newOnes = data.filter(o => !knownOrderIds.has(o.id));
        if(newOnes.length > 0){
          if(isPoll) playOrderChime();
          const unread = parseInt(ordersBadge.textContent || '0', 10) || 0;
          const total = unread + newOnes.length;
          ordersBadge.textContent = String(total);
          ordersBadge.style.display = 'inline-flex';
        }
        knownOrderIds = currentIds;
      }

      renderSalesReport(data);

      if(data.length === 0){ ordersList.innerHTML = '<div class="cart-empty">Aucune commande pour le moment.</div>'; return; }
      ordersList.innerHTML = data.map(o => {
        const items = (o.items || []).map(it => `${it.name} ×${it.qty}`).join(', ');
        const date = o.created_at ? new Date(o.created_at).toLocaleString('fr-FR') : '';
        return `
          <div class="order-entry${o.validated ? ' validated' : ''}" data-order-id="${o.id}">
            <button type="button" class="order-del" data-order-id="${o.id}" aria-label="Supprimer la commande">×</button>
            <div class="oe-head"><span>${escapeHtml(o.customer_name)}</span><span>${formatPrice(o.total)}</span></div>
            <div class="oe-items">${escapeHtml(items)}</div>
            <div>${escapeHtml(o.phone)}${o.address ? ' — ' + escapeHtml(o.address) : ''}</div>
            <div class="oe-total">${date}</div>
            ${o.validated
              ? '<div class="oe-validated">✓ Vente confirmée, stock mis à jour</div>'
              : `<button type="button" class="order-validate" data-order-id="${o.id}">Valider la vente</button>`}
          </div>`;
      }).join('');
      ordersList.querySelectorAll('.order-del').forEach(btn => {
        btn.addEventListener('click', async (e) => {
          e.stopPropagation();
          if(!confirm('Supprimer définitivement cette commande ?')) return;
          const id = btn.dataset.orderId;
          try{
            await supabase.from('orders').delete().eq('id', id);
            knownOrderIds && knownOrderIds.delete(id);
            loadOrders(false);
          }catch(err){ console.error('Erreur suppression commande', err); }
        });
      });
      ordersList.querySelectorAll('.order-validate').forEach(btn => {
        btn.addEventListener('click', async (e) => {
          e.stopPropagation();
          const id = btn.dataset.orderId;
          const order = data.find(o => o.id === id);
          if(!order) return;
          if(!confirm('Confirmer cette vente et réduire le stock des articles concernés ?')) return;
          btn.disabled = true;
          btn.textContent = 'Validation...';
          try{
            for(const item of (order.items || [])){
              const p = products.find(x => x.id === item.id);
              if(p){
                p.sold = (p.sold || 0) + item.qty;
                if(p.stock !== null && p.stock !== undefined){
                  p.stock = Math.max(0, p.stock - item.qty);
                }
                await upsertProductRemote(p);
              }
            }
            await supabase.from('orders').update({ validated:true }).eq('id', id);
            if(order.client_id){
              const itemsList = (order.items || []).map(it => it.name).join(', ');
              try{
                await supabase.from('messages').insert({
                  id: 'msg-'+Date.now()+'-'+Math.random().toString(36).slice(2,6),
                  conversation_id: order.client_id,
                  sender: 'admin',
                  text: `Votre commande (${itemsList}) a été confirmée ✅. Merci pour votre achat !`
                });
              }catch(msgErr){ console.error('Erreur envoi confirmation client', msgErr); }
            }
            renderProducts();
            checkStockAlerts(false);
            loadOrders(false);
          }catch(err){
            console.error('Erreur validation commande', err);
            btn.disabled = false;
            btn.textContent = 'Valider la vente';
          }
        });
      });
    }catch(e){ console.error('Erreur de chargement des commandes', e); }
  }

  // ---------- Chat ----------
  function renderChatBubbles(container, messages){
    if(messages.length === 0){
      container.innerHTML = "<div class=\"chat-empty\">Aucun message pour l'instant. Écrivez-nous !</div>";
      return;
    }
    container.innerHTML = messages.map(m => `<div class="chat-bubble ${m.sender === 'client' ? 'client' : 'admin'}">${escapeHtml(m.text)}</div>`).join('');
    container.scrollTop = container.scrollHeight;
  }

  let adminConvListPollTimer = null;
  let adminConvPollTimer = null;

  chatToggleBtn.addEventListener('click', () => {
    chatPanel.classList.toggle('open');
    if(chatPanel.classList.contains('open')){
      loadClientChat();
      chatToggleBadge.style.display = 'none';
      chatToggleBadge.textContent = '0';
    }
  });
  chatCloseBtn.addEventListener('click', () => {
    chatPanel.classList.remove('open');
  });
  chatDeleteBtn.addEventListener('click', async () => {
    if(!confirm('Effacer toute la conversation ? Cette action est définitive.')) return;
    try{
      if(supabase) await supabase.from('messages').delete().eq('conversation_id', clientId);
      knownClientMsgIds = null;
      chatMessages.innerHTML = '<div class="chat-empty">Aucun message pour le moment.</div>';
    }catch(e){ console.error('Erreur suppression conversation client', e); }
  });

  async function loadClientChat(){
    if(!supabase) return;
    try{
      const { data, error } = await supabase.from('messages').select('*').eq('conversation_id', clientId).order('created_at', {ascending:true});
      if(!error && data){
        renderChatBubbles(chatMessages, data);
        const currentIds = new Set(data.map(m => m.id));
        if(knownClientMsgIds === null){
          knownClientMsgIds = currentIds;
        }else{
          const newReplies = data.filter(m => m.sender === 'admin' && !knownClientMsgIds.has(m.id));
          if(newReplies.length > 0 && !chatPanel.classList.contains('open')){
            playOrderChime();
            const unread = parseInt(chatToggleBadge.textContent || '0', 10) || 0;
            chatToggleBadge.textContent = String(unread + newReplies.length);
            chatToggleBadge.style.display = 'inline-flex';
          }
          knownClientMsgIds = currentIds;
        }
      }
    }catch(e){ console.error('Erreur de chargement du chat', e); }
    if(!clientChatChannel){
      clientChatChannel = supabase.channel('chat-client-' + clientId)
        .on('postgres_changes', { event:'INSERT', schema:'public', table:'messages', filter:`conversation_id=eq.${clientId}` }, payload => {
          const bubble = document.createElement('div');
          bubble.className = 'chat-bubble ' + (payload.new.sender === 'client' ? 'client' : 'admin');
          bubble.textContent = payload.new.text;
          if(chatMessages.querySelector('.chat-empty')) chatMessages.innerHTML = '';
          chatMessages.appendChild(bubble);
          chatMessages.scrollTop = chatMessages.scrollHeight;
        })
        .subscribe();
    }
  }

  chatForm.addEventListener('submit', async function(e){
    e.preventDefault();
    const text = chatInput.value.trim();
    if(!text || !supabase) return;
    chatInput.value = '';
    try{
      await supabase.from('messages').insert({ id:'msg-'+Date.now()+'-'+Math.random().toString(36).slice(2,6), conversation_id: clientId, sender:'client', text });
    }catch(e){ console.error('Erreur envoi message', e); }
  });

  async function loadConversations(){
    if(!supabase) return;
    try{
      const { data, error } = await supabase.from('messages').select('*').order('created_at', {ascending:true});
      if(error || !data) return;

      const currentIds = new Set(data.map(m => m.id));
      if(knownAdminMsgIds === null){
        knownAdminMsgIds = currentIds;
      }else{
        const newFromClients = data.filter(m => m.sender === 'client' && !knownAdminMsgIds.has(m.id));
        if(newFromClients.length > 0){
          playOrderChime();
          const unread = parseInt(messagesBadge.textContent || '0', 10) || 0;
          messagesBadge.textContent = String(unread + newFromClients.length);
          messagesBadge.style.display = 'inline-flex';
        }
        knownAdminMsgIds = currentIds;
      }

      const convMap = {};
      data.forEach(m => { convMap[m.conversation_id] = m; });
      const convIds = Object.keys(convMap);
      if(convIds.length === 0){
        conversationsList.innerHTML = '<div class="cart-empty">Aucune conversation pour le moment.</div>';
        return;
      }
      conversationsList.innerHTML = convIds.map(id => {
        const last = convMap[id];
        return `<div class="conv-row">
          <button type="button" class="conv-entry${id === currentAdminConversation ? ' active' : ''}" data-id="${id}">${escapeHtml(last.text).slice(0,40)}</button>
          <button type="button" class="conv-del" data-id="${id}" aria-label="Supprimer la conversation">×</button>
        </div>`;
      }).join('');
      conversationsList.querySelectorAll('.conv-entry').forEach(btn => {
        btn.addEventListener('click', () => openAdminConversation(btn.dataset.id));
      });
      conversationsList.querySelectorAll('.conv-del').forEach(btn => {
        btn.addEventListener('click', async (e) => {
          e.stopPropagation();
          if(!confirm('Supprimer définitivement cette conversation ?')) return;
          const id = btn.dataset.id;
          try{
            await supabase.from('messages').delete().eq('conversation_id', id);
            if(currentAdminConversation === id){
              currentAdminConversation = null;
              adminChatMessages.innerHTML = '';
              adminChatForm.style.display = 'none';
              if(adminConvPollTimer){ clearInterval(adminConvPollTimer); adminConvPollTimer = null; }
            }
            loadConversations();
          }catch(err){ console.error('Erreur suppression conversation', err); }
        });
      });
    }catch(e){ console.error('Erreur de chargement des conversations', e); }
  }

  async function openAdminConversation(convId){
    currentAdminConversation = convId;
    conversationsList.querySelectorAll('.conv-entry').forEach(b => b.classList.toggle('active', b.dataset.id === convId));
    adminChatForm.style.display = 'flex';
    async function refreshConv(){
      try{
        const { data, error } = await supabase.from('messages').select('*').eq('conversation_id', convId).order('created_at', {ascending:true});
        if(!error && data) renderChatBubbles(adminChatMessages, data);
      }catch(e){ console.error('Erreur de chargement de la conversation', e); }
    }
    await refreshConv();
    if(adminConvChannel){ supabase.removeChannel(adminConvChannel); adminConvChannel = null; }
    if(adminConvPollTimer){ clearInterval(adminConvPollTimer); adminConvPollTimer = null; }
    adminConvPollTimer = setInterval(refreshConv, 5000);
  }

  adminChatForm.addEventListener('submit', async function(e){
    e.preventDefault();
    const text = adminChatInput.value.trim();
    if(!text || !currentAdminConversation || !supabase) return;
    adminChatInput.value = '';
    try{
      await supabase.from('messages').insert({ id:'msg-'+Date.now()+'-'+Math.random().toString(36).slice(2,6), conversation_id: currentAdminConversation, sender:'admin', text });
    }catch(e){ console.error('Erreur envoi réponse', e); }
  });

  updateCartBadge();
  updateAdminUI();
  if(supabase){ loadClientChat(); setInterval(loadClientChat, 8000); }

  loadState().then(resetAutoplay);
})();
