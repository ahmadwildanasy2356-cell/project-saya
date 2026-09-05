/* ============================================================
   KŌJI RAMEN — SCRIPT.JS
   Complete functionality for the Kōji Ramen experience
   ============================================================ */

// ==================== CONFIGURATION ====================
const WHATSAPP_NUMBER = "628xxxxxxxxxx"; // <-- REPLACE WITH YOUR NUMBER
const CURRENCY = "Rp";

// ==================== DATA STRUCTURES ====================
const menuItems = [
    {
        id: "shoyu",
        name: "Shoyu Ramen",
        category: "ramen",
        description: "Clear chicken broth, house tare, spring noodles and tender chashu.",
        price: 42000,
        image: "assets/images/ramen-shoyu.jpg",
        rating: 4.9,
        customization: {
            broth: ["Shoyu", "Miso", "Paitan", "Spicy"],
            noodles: ["Thin", "Medium", "Thick"],
            toppings: ["Chashu", "Ajitama", "Nori", "Corn", "Mushroom", "Extra Green Onion"],
            spice: [0, 1, 2, 3, 4, 5],
            extras: ["Extra Noodles", "Extra Chashu", "Extra Egg"]
        }
    },
    {
        id: "miso",
        name: "Miso Ramen",
        category: "ramen",
        description: "Rich miso broth, wavy noodles, sweet corn, and ground pork.",
        price: 45000,
        image: "assets/images/ramen-miso.jpg",
        rating: 4.8,
        customization: {
            broth: ["Miso", "Shoyu", "Paitan", "Spicy"],
            noodles: ["Thin", "Medium", "Thick"],
            toppings: ["Chashu", "Ajitama", "Nori", "Corn", "Mushroom", "Extra Green Onion"],
            spice: [0, 1, 2, 3, 4, 5],
            extras: ["Extra Noodles", "Extra Chashu", "Extra Egg"]
        }
    },
    {
        id: "paitan",
        name: "Paitan Ramen",
        category: "ramen",
        description: "Creamy chicken paitan broth, thin noodles, and soft egg.",
        price: 48000,
        image: "assets/images/ramen-paitan.jpg",
        rating: 4.9,
        customization: {
            broth: ["Paitan", "Shoyu", "Miso", "Spicy"],
            noodles: ["Thin", "Medium", "Thick"],
            toppings: ["Chashu", "Ajitama", "Nori", "Corn", "Mushroom", "Extra Green Onion"],
            spice: [0, 1, 2, 3, 4, 5],
            extras: ["Extra Noodles", "Extra Chashu", "Extra Egg"]
        }
    },
    {
        id: "spicy",
        name: "Spicy Ramen",
        category: "ramen",
        description: "Fiery red broth, thick noodles, and extra chili oil.",
        price: 46000,
        image: "assets/images/ramen-spicy.jpg",
        rating: 4.7,
        customization: {
            broth: ["Spicy", "Shoyu", "Miso", "Paitan"],
            noodles: ["Thin", "Medium", "Thick"],
            toppings: ["Chashu", "Ajitama", "Nori", "Corn", "Mushroom", "Extra Green Onion"],
            spice: [0, 1, 2, 3, 4, 5],
            extras: ["Extra Noodles", "Extra Chashu", "Extra Egg"]
        }
    },
    {
        id: "signature",
        name: "Kōji Signature",
        category: "ramen",
        description: "Our house special with double chashu, ajitama, and truffle oil.",
        price: 52000,
        image: "assets/images/ramen-signature.jpg",
        rating: 5.0,
        customization: {
            broth: ["Shoyu", "Miso", "Paitan", "Spicy"],
            noodles: ["Thin", "Medium", "Thick"],
            toppings: ["Chashu", "Ajitama", "Nori", "Corn", "Mushroom", "Extra Green Onion"],
            spice: [0, 1, 2, 3, 4, 5],
            extras: ["Extra Noodles", "Extra Chashu", "Extra Egg"]
        }
    },
    {
        id: "black-garlic",
        name: "Black Garlic Ramen",
        category: "ramen",
        description: "Roasted black garlic oil, pork broth, and crispy shallots.",
        price: 49000,
        image: "assets/images/ramen-black-garlic.jpg",
        rating: 4.8,
        customization: {
            broth: ["Shoyu", "Miso", "Paitan", "Spicy"],
            noodles: ["Thin", "Medium", "Thick"],
            toppings: ["Chashu", "Ajitama", "Nori", "Corn", "Mushroom", "Extra Green Onion"],
            spice: [0, 1, 2, 3, 4, 5],
            extras: ["Extra Noodles", "Extra Chashu", "Extra Egg"]
        }
    },
    {
        id: "gyoza",
        name: "Gyoza (5 pcs)",
        category: "sides",
        description: "Pan-fried pork and cabbage dumplings, served with ponzu.",
        price: 28000,
        image: "assets/images/gyoza.jpg",
        rating: 4.6,
        customization: null
    },
    {
        id: "karaage",
        name: "Chicken Karaage",
        category: "sides",
        description: "Japanese fried chicken, served with spicy mayo.",
        price: 32000,
        image: "assets/images/karaage.jpg",
        rating: 4.7,
        customization: null
    },
    {
        id: "edamame",
        name: "Edamame",
        category: "sides",
        description: "Steamed soybeans with sea salt.",
        price: 20000,
        image: "assets/images/edamame.jpg",
        rating: 4.5,
        customization: null
    },
    {
        id: "chashu",
        name: "Chashu (3 pcs)",
        category: "toppings",
        description: "Extra slices of slow-braised pork belly.",
        price: 18000,
        image: "assets/images/chashu.jpg",
        rating: 4.9,
        customization: null
    },
    {
        id: "ajitama",
        name: "Ajitama",
        category: "toppings",
        description: "Marinated soft-boiled egg.",
        price: 10000,
        image: "assets/images/ajitama.jpg",
        rating: 4.8,
        customization: null
    },
    {
        id: "nori",
        name: "Nori (3 sheets)",
        category: "toppings",
        description: "Crispy seaweed sheets.",
        price: 8000,
        image: "assets/images/nori.jpg",
        rating: 4.5,
        customization: null
    },
    {
        id: "green-tea",
        name: "Green Tea (Iced/Hot)",
        category: "drinks",
        description: "Premium Japanese green tea.",
        price: 15000,
        image: "assets/images/green-tea.jpg",
        rating: 4.4,
        customization: null
    },
    {
        id: "yuzu-soda",
        name: "Yuzu Soda",
        category: "drinks",
        description: "Sparkling yuzu citrus drink.",
        price: 22000,
        image: "assets/images/yuzu-soda.jpg",
        rating: 4.6,
        customization: null
    },
    {
        id: "sapporo",
        name: "Sapporo Beer",
        category: "drinks",
        description: "Japanese lager, 330ml.",
        price: 35000,
        image: "assets/images/ramune.jpg",
        rating: 4.7,
        customization: null
    }
];

// Builder options data
const broths = [
    { id: "shoyu", name: "Shoyu", price: 0, desc: "Classic soy sauce base" },
    { id: "miso", name: "Miso", price: 5000, desc: "Rich fermented soybean" },
    { id: "paitan", name: "Paitan", price: 10000, desc: "Creamy chicken broth" },
    { id: "spicy", name: "Spicy", price: 8000, desc: "Fiery chili oil" }
];

const noodles = [
    { id: "thin", name: "Thin", price: 0 },
    { id: "medium", name: "Medium", price: 0 },
    { id: "thick", name: "Thick", price: 2000 }
];

const toppings = [
    { id: "chashu", name: "Chashu", price: 18000 },
    { id: "ajitama", name: "Ajitama", price: 10000 },
    { id: "nori", name: "Nori", price: 8000 },
    { id: "corn", name: "Corn", price: 5000 },
    { id: "mushroom", name: "Mushroom", price: 7000 },
    { id: "green-onion", name: "Green Onion", price: 3000 }
];

const extras = [
    { id: "extra-noodles", name: "Extra Noodles", price: 10000 },
    { id: "extra-chashu", name: "Extra Chashu", price: 18000 },
    { id: "extra-egg", name: "Extra Egg", price: 10000 }
];

const heatLevels = [0, 1, 2, 3, 4, 5];
const heatLabels = ["No Heat", "Gentle", "Warm", "Spicy", "Hot", "Fire"];

const galleryImages = [
    { src: "assets/images/gallery-1.jpg", alt: "Kōji Ramen bowl 1" },
    { src: "assets/images/gallery-2.jpg", alt: "Kōji Ramen bowl 2" },
    { src: "assets/images/gallery-3.jpg", alt: "Restaurant atmosphere" },
    { src: "assets/images/gallery-4.jpg", alt: "Chef at work" }
];

// ==================== STATE MANAGEMENT ====================
let cart = JSON.parse(localStorage.getItem('koji_cart')) || [];
let currentView = 'home';
let currentFilter = 'all';
let productModalItem = null;
let productModalConfig = {};
let productModalQty = 1;

// Builder state
let builderState = {
    broth: 'shoyu',
    noodle: 'thin',
    toppings: [],
    heat: 0,
    extras: [],
    basePrice: 38000
};

// ==================== DOM REFS ====================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const navbar = $('#navbar');
const hamburgerBtn = $('#hamburgerBtn');
const mobileNav = $('#mobileNav');
const mobileNavClose = $('#mobileNavClose');
const mobileNavLinks = $$('.mobile-nav__link');
const navLinks = $$('.navbar__link');
const navCartCount = $('#navCartCount');
const views = $$('.view');
const mainContent = $('#mainContent');
const menuGrid = $('#menuGrid');
const menuPreviewGrid = $('#menuPreviewGrid');
const menuFilterTabs = $$('.menu-filter__tab');
const productModal = $('#productModal');
const productModalContent = $('#productModalContent');
const productModalOverlay = $('#productModalOverlay');
const cartDrawer = $('#cartDrawer');
const cartOverlay = $('#cartOverlay');
const cartItems = $('#cartItems');
const cartTotal = $('#cartTotal');
const cartClose = $('#cartClose');
const checkoutBtn = $('#checkoutBtn');
const checkoutModal = $('#checkoutModal');
const checkoutOverlay = $('#checkoutOverlay');
const checkoutClose = $('#checkoutClose');
const checkoutForm = $('#checkoutForm');
const reservationForm = $('#reservationForm');
const lightbox = $('#lightbox');
const lightboxImg = $('#lightboxImg');
const lightboxClose = $('#lightboxClose');
const lightboxPrev = $('#lightboxPrev');
const lightboxNext = $('#lightboxNext');
const galleryCollage = $('#galleryCollage');
const toast = $('#toast');
const builderBrothOptions = $('#brothOptions');
const builderNoodleOptions = $('#noodleOptions');
const builderToppingOptions = $('#toppingOptions');
const builderHeatOptions = $('#heatOptions');
const builderExtrasOptions = $('#extrasOptions');
const builderSummary = $('#builderSummary');
const builderTotal = $('#builderTotal');
const addBuilderToCartBtn = $('#addBuilderToCart');
const bowlBroth = $('#bowlBroth');
const bowlNoodles = $('#bowlNoodles');
const bowlToppings = $('#bowlToppings');
const bowlBrothLabel = $('#bowlBrothLabel');
const bowlNoodleLabel = $('#bowlNoodleLabel');
const bowlHeatLabel = $('#bowlHeatLabel');
const deliveryAddressField = $('#deliveryAddressField');

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initViews();
    initMenu();
    initProductModal();
    initCart();
    initCheckout();
    initReservation();
    initGallery();
    initLightbox();
    initBuilder();
    initScrollReveal();
    initMarquee();
    initCursorDot();
    updateCartCount();
    populateMenuPreview();
    populateGallery();
    populateBuilderOptions();
    updateBuilderSummary();
    updateBuilderPrice();
    updateBowlPreview();
});

// ==================== IMAGE FALLBACK ====================
function handleImageError(img) {
    if (img.dataset.fallbackApplied === "true") return;
    img.dataset.fallbackApplied = "true";
    img.onerror = null;
    img.src = "assets/images/fallback.jpg";
}

// ==================== NAVIGATION / ROUTING ====================
function initNavigation() {
    // Hamburger toggle
    hamburgerBtn.addEventListener('click', () => {
        const isOpen = mobileNav.classList.contains('open');
        if (isOpen) {
            closeMobileNav();
        } else {
            openMobileNav();
        }
    });

    mobileNavClose.addEventListener('click', closeMobileNav);

    // Mobile nav links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const hash = link.getAttribute('href');
            navigateTo(hash);
            closeMobileNav();
        });
    });

    // Desktop nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const hash = link.getAttribute('href');
            navigateTo(hash);
        });
    });

    // Logo click
    document.querySelectorAll('[data-nav]').forEach(el => {
        if (!el.classList.contains('navbar__link') && !el.classList.contains('mobile-nav__link')) {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                const hash = el.getAttribute('href');
                navigateTo(hash);
            });
        }
    });

    // Browser back/forward
    window.addEventListener('popstate', (e) => {
        const hash = window.location.hash || '#home';
        showView(hash.substring(1));
    });

    // Initial hash
    if (window.location.hash) {
        showView(window.location.hash.substring(1));
    } else {
        showView('home');
    }

    // Scroll event for navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar--scrolled');
        } else {
            navbar.classList.remove('navbar--scrolled');
        }
    });
}

function openMobileNav() {
    mobileNav.classList.add('open');
    hamburgerBtn.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
    mobileNav.classList.remove('open');
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

function navigateTo(hash) {
    const viewId = hash.replace('#', '');
    window.location.hash = hash;
    showView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showView(viewId) {
    if (viewId === 'reservation' || viewId === 'location') {
        viewId = 'location'; // Map reservation to location if needed
    }
    if (!document.getElementById(viewId)) return;

    // Update currentView
    currentView = viewId;

    // Fade out current active view
    const activeView = $('.view--active');
    if (activeView && activeView.id !== viewId) {
        activeView.classList.add('view-exit');
        activeView.classList.remove('view--active');
        setTimeout(() => {
            activeView.classList.remove('view-exit');
            activeView.hidden = true;
        }, 500);
    }

    // Show new view
    const newView = document.getElementById(viewId);
    newView.hidden = false;
    newView.classList.add('view--active');

    // Update nav active states
    updateNavActive(viewId);
}

function updateNavActive(viewId) {
    const map = {
        'home': 'home',
        'menu': 'menu',
        'story': 'story',
        'ramen': 'ramen',
        'builder': 'builder',
        'gallery': 'gallery',
        'location': 'location',
        'reservation': 'location'
    };
    const active = map[viewId] || 'home';
    $$('.navbar__link').forEach(link => {
        const linkHash = link.getAttribute('href').replace('#', '');
        if (linkHash === active) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    // Mobile nav active not needed as we close it
}

// ==================== SCROLL REVEAL ====================
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    $$('[data-reveal]').forEach(el => {
        observer.observe(el);
    });
}

// ==================== MARQUEE ====================
function initMarquee() {
    const track = $('#marqueeTrack');
    // Clone content to make seamless loop
    track.innerHTML += track.innerHTML;
    // Set animation duration based on content width
    const items = track.querySelectorAll('.marquee__item');
    let totalWidth = 0;
    items.forEach(item => totalWidth += item.offsetWidth + 40);
    track.style.animationDuration = totalWidth / 50 + 's';
}

// ==================== CURSOR DOT ====================
function initCursorDot() {
    const dot = $('.cursor-dot');
    if (window.innerWidth > 1024) {
        dot.style.opacity = '1';
        window.addEventListener('mousemove', (e) => {
            dot.style.left = e.clientX + 'px';
            dot.style.top = e.clientY + 'px';
        });
    }
}

// ==================== MENU ====================
function initMenu() {
    // Filter tabs
    menuFilterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            menuFilterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFilter = tab.dataset.filter;
            renderMenuGrid();
        });
    });

    renderMenuGrid();
}

function renderMenuGrid() {
    const filteredItems = currentFilter === 'all' ? menuItems : menuItems.filter(item => item.category === currentFilter);
    menuGrid.innerHTML = filteredItems.map(item => createMenuCard(item)).join('');
    // Add event listeners to cards
    menuGrid.querySelectorAll('.menu-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            const itemId = card.dataset.id;
            const item = menuItems.find(i => i.id === itemId);
            if (item) openProductModal(item);
        });
    });
}

function createMenuCard(item) {
    const customizationBadge = item.customization ? '<span class="menu-card__category">CUSTOMIZABLE</span>' : '';
    return `
        <div class="menu-card" data-id="${item.id}" role="button" tabindex="0" aria-label="View ${item.name}">
            <div class="menu-card__image">
                <img src="${item.image}" alt="${item.name}" class="menu-card__img" onerror="handleImageError(this)">
            </div>
            <div class="menu-card__body">
                ${customizationBadge}
                <h3 class="menu-card__name">${item.name}</h3>
                <p class="menu-card__desc">${item.description}</p>
                <div class="menu-card__footer">
                    <span class="menu-card__price">${formatPrice(item.price)}</span>
                    <button class="menu-card__btn">VIEW BOWL</button>
                </div>
            </div>
        </div>
    `;
}

function populateMenuPreview() {
    // Show first 4 ramen items in preview
    const previewItems = menuItems.filter(i => i.category === 'ramen').slice(0, 4);
    menuPreviewGrid.innerHTML = previewItems.map(item => createMenuCard(item)).join('');
    menuPreviewGrid.querySelectorAll('.menu-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            const itemId = card.dataset.id;
            const item = menuItems.find(i => i.id === itemId);
            if (item) openProductModal(item);
        });
    });
}

// ==================== PRODUCT MODAL ====================
function initProductModal() {
    productModalOverlay.addEventListener('click', closeProductModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeProductModal();
    });
}

function openProductModal(item) {
    productModalItem = item;
    productModalConfig = {};
    productModalQty = 1;

    if (item.customization) {
        // Initialize config with defaults
        productModalConfig = {
            broth: item.customization.broth[0],
            noodle: item.customization.noodles[0],
            toppings: [],
            spice: 0,
            extras: []
        };
    }

    renderProductModal(item);
    productModal.hidden = false;
    productModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    productModal.classList.remove('open');
    setTimeout(() => {
        productModal.hidden = true;
        productModalItem = null;
    }, 300);
    document.body.style.overflow = '';
}

function renderProductModal(item) {
    if (!item.customization) {
        // Simple product (sides, toppings, drinks)
        productModalContent.innerHTML = `
            <button class="product-modal__close" id="pmClose" aria-label="Close">✕</button>
            <div style="display: flex; gap: 1.5rem; flex-wrap: wrap;">
                <img src="${item.image}" alt="${item.name}" style="width: 200px; height: 200px; object-fit: cover; border-radius: 12px;" onerror="handleImageError(this)">
                <div style="flex:1;">
                    <h2 style="font-family: var(--font-serif); font-size: 2rem;">${item.name}</h2>
                    <p style="color: var(--deep-red); font-weight: 600; font-size: 1.2rem;">${formatPrice(item.price)}</p>
                    <p style="margin: 1rem 0;">${item.description}</p>
                    <div style="display: flex; align-items: center; gap: 1rem; margin-top: 1rem;">
                        <span>Quantity:</span>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <button id="pmQtyMinus" style="width: 32px; height: 32px; border: 1px solid #ddd; border-radius: 50%;">-</button>
                            <span id="pmQty">1</span>
                            <button id="pmQtyPlus" style="width: 32px; height: 32px; border: 1px solid #ddd; border-radius: 50%;">+</button>
                        </div>
                    </div>
                    <button id="pmAddToCart" class="btn btn--primary" style="margin-top: 1.5rem; width: 100%;">ADD TO ORDER</button>
                </div>
            </div>
        `;
        // Attach events
        document.getElementById('pmClose').addEventListener('click', closeProductModal);
        document.getElementById('pmQtyMinus').addEventListener('click', () => {
            if (productModalQty > 1) {
                productModalQty--;
                document.getElementById('pmQty').textContent = productModalQty;
            }
        });
        document.getElementById('pmQtyPlus').addEventListener('click', () => {
            productModalQty++;
            document.getElementById('pmQty').textContent = productModalQty;
        });
        document.getElementById('pmAddToCart').addEventListener('click', () => {
            addSimpleItemToCart(item);
            closeProductModal();
        });
    } else {
        // Ramen product with customization
        productModalContent.innerHTML = `
            <button class="product-modal__close" id="pmClose" aria-label="Close">✕</button>
            <div style="display: flex; gap: 1.5rem; flex-wrap: wrap;">
                <img src="${item.image}" alt="${item.name}" style="width: 200px; height: 200px; object-fit: cover; border-radius: 12px;" onerror="handleImageError(this)">
                <div style="flex:1;">
                    <h2 style="font-family: var(--font-serif); font-size: 2rem;">${item.name}</h2>
                    <p style="color: var(--deep-red); font-weight: 600; font-size: 1.2rem;">${formatPrice(item.price)}</p>
                    <p style="margin: 0.5rem 0;">${item.description}</p>
                    <div style="margin-top: 1rem;">
                        <label style="display: block; font-size: 0.8rem; letter-spacing: 1px; margin-bottom: 0.5rem;">BROTH</label>
                        <select id="pmBroth" style="margin-bottom: 1rem;">
                            ${item.customization.broth.map(b => `<option value="${b}" ${b === productModalConfig.broth ? 'selected' : ''}>${b}</option>`).join('')}
                        </select>
                        <label style="display: block; font-size: 0.8rem; letter-spacing: 1px; margin-bottom: 0.5rem;">NOODLES</label>
                        <select id="pmNoodles" style="margin-bottom: 1rem;">
                            ${item.customization.noodles.map(n => `<option value="${n}" ${n === productModalConfig.noodle ? 'selected' : ''}>${n}</option>`).join('')}
                        </select>
                        <label style="display: block; font-size: 0.8rem; letter-spacing: 1px; margin-bottom: 0.5rem;">TOPPINGS</label>
                        <div id="pmToppings" style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
                            ${item.customization.toppings.map(t => `
                                <button class="pm-topping ${productModalConfig.toppings.includes(t) ? 'selected' : ''}" data-topping="${t}" style="padding: 0.4rem 0.8rem; border: 1px solid #ddd; border-radius: 50px; cursor: pointer; ${productModalConfig.toppings.includes(t) ? 'background: var(--deep-red); color: white; border-color: var(--deep-red);' : ''}">${t}</button>
                            `).join('')}
                        </div>
                        <label style="display: block; font-size: 0.8rem; letter-spacing: 1px; margin-bottom: 0.5rem;">SPICE LEVEL</label>
                        <div id="pmSpice" style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
                            ${item.customization.spice.map(s => `
                                <button class="pm-spice ${s === productModalConfig.spice ? 'selected' : ''}" data-spice="${s}" style="width: 36px; height: 36px; border-radius: 50%; border: 1px solid #ddd; cursor: pointer; ${s === productModalConfig.spice ? 'background: var(--deep-red); color: white; border-color: var(--deep-red);' : ''}">${s}</button>
                            `).join('')}
                        </div>
                        <label style="display: block; font-size: 0.8rem; letter-spacing: 1px; margin-bottom: 0.5rem;">EXTRAS</label>
                        <div id="pmExtras" style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
                            ${item.customization.extras.map(e => `
                                <button class="pm-extra ${productModalConfig.extras.includes(e) ? 'selected' : ''}" data-extra="${e}" style="padding: 0.4rem 0.8rem; border: 1px solid #ddd; border-radius: 50px; cursor: pointer; ${productModalConfig.extras.includes(e) ? 'background: var(--deep-red); color: white; border-color: var(--deep-red);' : ''}">${e}</button>
                            `).join('')}
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 1rem; margin-top: 1rem;">
                        <span>Quantity:</span>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <button id="pmQtyMinus" style="width: 32px; height: 32px; border: 1px solid #ddd; border-radius: 50%;">-</button>
                            <span id="pmQty">1</span>
                            <button id="pmQtyPlus" style="width: 32px; height: 32px; border: 1px solid #ddd; border-radius: 50%;">+</button>
                        </div>
                    </div>
                    <div style="margin-top: 1rem; font-weight: 600; font-size: 1.2rem;">TOTAL: <span id="pmTotalPrice">${formatPrice(item.price)}</span></div>
                    <button id="pmAddToCart" class="btn btn--primary" style="margin-top: 1rem; width: 100%;">ADD TO ORDER</button>
                </div>
            </div>
        `;

        // Attach events
        document.getElementById('pmClose').addEventListener('click', closeProductModal);

        document.getElementById('pmBroth').addEventListener('change', (e) => {
            productModalConfig.broth = e.target.value;
            updateProductModalTotal();
        });
        document.getElementById('pmNoodles').addEventListener('change', (e) => {
            productModalConfig.noodle = e.target.value;
            updateProductModalTotal();
        });
        document.getElementById('pmToppings').querySelectorAll('.pm-topping').forEach(btn => {
            btn.addEventListener('click', () => {
                const topping = btn.dataset.topping;
                if (productModalConfig.toppings.includes(topping)) {
                    productModalConfig.toppings = productModalConfig.toppings.filter(t => t !== topping);
                    btn.classList.remove('selected');
                    btn.style.background = '';
                    btn.style.color = '';
                    btn.style.borderColor = '';
                } else {
                    productModalConfig.toppings.push(topping);
                    btn.classList.add('selected');
                    btn.style.background = 'var(--deep-red)';
                    btn.style.color = 'white';
                    btn.style.borderColor = 'var(--deep-red)';
                }
                updateProductModalTotal();
            });
        });
        document.getElementById('pmSpice').querySelectorAll('.pm-spice').forEach(btn => {
            btn.addEventListener('click', () => {
                const spice = parseInt(btn.dataset.spice);
                productModalConfig.spice = spice;
                document.querySelectorAll('.pm-spice').forEach(b => {
                    if (parseInt(b.dataset.spice) === spice) {
                        b.classList.add('selected');
                        b.style.background = 'var(--deep-red)';
                        b.style.color = 'white';
                        b.style.borderColor = 'var(--deep-red)';
                    } else {
                        b.classList.remove('selected');
                        b.style.background = '';
                        b.style.color = '';
                        b.style.borderColor = '';
                    }
                });
                updateProductModalTotal();
            });
        });
        document.getElementById('pmExtras').querySelectorAll('.pm-extra').forEach(btn => {
            btn.addEventListener('click', () => {
                const extra = btn.dataset.extra;
                if (productModalConfig.extras.includes(extra)) {
                    productModalConfig.extras = productModalConfig.extras.filter(e => e !== extra);
                    btn.classList.remove('selected');
                    btn.style.background = '';
                    btn.style.color = '';
                    btn.style.borderColor = '';
                } else {
                    productModalConfig.extras.push(extra);
                    btn.classList.add('selected');
                    btn.style.background = 'var(--deep-red)';
                    btn.style.color = 'white';
                    btn.style.borderColor = 'var(--deep-red)';
                }
                updateProductModalTotal();
            });
        });
        document.getElementById('pmQtyMinus').addEventListener('click', () => {
            if (productModalQty > 1) {
                productModalQty--;
                document.getElementById('pmQty').textContent = productModalQty;
                updateProductModalTotal();
            }
        });
        document.getElementById('pmQtyPlus').addEventListener('click', () => {
            productModalQty++;
            document.getElementById('pmQty').textContent = productModalQty;
            updateProductModalTotal();
        });
        document.getElementById('pmAddToCart').addEventListener('click', () => {
            addCustomizedItemToCart(item, productModalConfig, productModalQty);
            closeProductModal();
        });

        updateProductModalTotal();
    }
}

function updateProductModalTotal() {
    if (!productModalItem || !productModalItem.customization) return;
    let total = productModalItem.price;
    // Add extra prices based on selected toppings/extras? We'll approximate using builder extras prices
    // For simplicity, we assume toppings and extras don't add extra cost in modal (base price only)
    // But we can show base total; builder handles exact pricing.
    // Here we show just base price multiplied by quantity.
    const qty = productModalQty;
    const totalPrice = total * qty;
    const totalEl = document.getElementById('pmTotalPrice');
    if (totalEl) totalEl.textContent = formatPrice(totalPrice);
}

// ==================== CART ====================
function initCart() {
    cartClose.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    checkoutBtn.addEventListener('click', openCheckout);
    $('#navCartBtn').addEventListener('click', openCart);
    // Cart drawer quantity etc handled elsewhere
}

function openCart() {
    cartDrawer.classList.add('open');
    cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    renderCart();
}

function closeCart() {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

function renderCart() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #999;">Your bowl is empty.</p>';
        cartTotal.textContent = formatPrice(0);
        updateCartCount();
        return;
    }
    let total = 0;
    cartItems.innerHTML = cart.map((item, index) => {
        const price = item.totalPrice;
        total += price;
        const customText = item.customizations ? Object.entries(item.customizations).map(([key, val]) => {
            if (Array.isArray(val)) return `${key}: ${val.join(', ')}`;
            return `${key}: ${val}`;
        }).join(' | ') : '';
        return `
            <div class="cart-item">
                <div class="cart-item__info">
                    <div class="cart-item__name">${item.name} x${item.quantity}</div>
                    <div class="cart-item__custom">${customText}</div>
                </div>
                <span class="cart-item__price">${formatPrice(price)}</span>
                <button class="cart-item__remove" data-index="${index}" aria-label="Remove item">✕</button>
            </div>
        `;
    }).join('');
    cartTotal.textContent = formatPrice(total);
    updateCartCount();
    // Attach remove events
    cartItems.querySelectorAll('.cart-item__remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.dataset.index);
            cart.splice(index, 1);
            saveCart();
            renderCart();
        });
    });
}

function addSimpleItemToCart(item) {
    const existing = cart.find(c => c.id === item.id && !c.customizations);
    if (existing) {
        existing.quantity += productModalQty;
        existing.totalPrice = existing.quantity * item.price;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: productModalQty,
            totalPrice: item.price * productModalQty,
            customizations: null
        });
    }
    saveCart();
    showToast(`${item.name} added to order`);
    updateCartCount();
}

function addCustomizedItemToCart(item, config, qty) {
    // Calculate price (base price only for simplicity, but we could add extra prices)
    const basePrice = item.price;
    const totalPrice = basePrice * qty;
    const customText = {
        Broth: config.broth,
        Noodles: config.noodle,
        Toppings: config.toppings.length ? config.toppings.join(', ') : 'None',
        Spice: `Level ${config.spice}`,
        Extras: config.extras.length ? config.extras.join(', ') : 'None'
    };
    cart.push({
        id: item.id + '-' + Date.now(),
        name: item.name,
        price: basePrice,
        quantity: qty,
        totalPrice: totalPrice,
        customizations: customText
    });
    saveCart();
    showToast(`${item.name} added to order`);
    updateCartCount();
}

function addBuilderItemToCart() {
    const summary = getBuilderSummary();
    const totalPrice = calculateBuilderTotal();
    const customText = {
        Broth: builderState.broth,
        Noodles: builderState.noodle,
        Toppings: builderState.toppings.length ? builderState.toppings.join(', ') : 'None',
        Heat: `Level ${builderState.heat}`,
        Extras: builderState.extras.length ? builderState.extras.join(', ') : 'None'
    };
    cart.push({
        id: 'builder-' + Date.now(),
        name: 'Custom Ramen Bowl',
        price: builderState.basePrice,
        quantity: 1,
        totalPrice: totalPrice,
        customizations: customText
    });
    saveCart();
    showToast('Custom bowl added to order');
    updateCartCount();
}

function saveCart() {
    localStorage.setItem('koji_cart', JSON.stringify(cart));
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (navCartCount) navCartCount.textContent = count;
}

function formatPrice(amount) {
    return `${CURRENCY} ${amount.toLocaleString('id-ID')}`;
}

// ==================== CHECKOUT ====================
function initCheckout() {
    checkoutClose.addEventListener('click', closeCheckout);
    checkoutOverlay.addEventListener('click', closeCheckout);
    checkoutForm.addEventListener('submit', submitCheckout);

    // Delivery address toggle
    const methods = document.querySelectorAll('input[name="orderMethod"]');
    methods.forEach(m => {
        m.addEventListener('change', () => {
            if (m.value === 'delivery') {
                deliveryAddressField.hidden = false;
            } else {
                deliveryAddressField.hidden = true;
            }
        });
    });
}

function openCheckout() {
    closeCart();
    checkoutModal.hidden = false;
    checkoutModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCheckout() {
    checkoutModal.classList.remove('open');
    setTimeout(() => {
        checkoutModal.hidden = true;
    }, 300);
    document.body.style.overflow = '';
}

function submitCheckout(e) {
    e.preventDefault();
    const name = document.getElementById('checkoutName').value.trim();
    const whatsapp = document.getElementById('checkoutWhatsApp').value.trim();
    const method = document.querySelector('input[name="orderMethod"]:checked').value;
    const address = method === 'delivery' ? document.getElementById('checkoutAddress').value.trim() : '';

    if (!name || !whatsapp) {
        showToast('Please fill in all required fields');
        return;
    }

    // Build order summary
    let orderSummary = '';
    let total = 0;
    cart.forEach((item, index) => {
        const custom = item.customizations ? Object.entries(item.customizations).map(([k, v]) => `  - ${k}: ${v}`).join('\n') : '';
        orderSummary += `${index + 1}. ${item.name} x${item.quantity}\n${custom}\n`;
        total += item.totalPrice;
    });

    const message = `KŌJI RAMEN ORDER\n\nNama: ${name}\nWhatsApp: ${whatsapp}\nMethod: ${method.toUpperCase()}\n${address ? 'Alamat: ' + address + '\n' : ''}\nPesanan:\n${orderSummary}\nTotal: ${formatPrice(total)}`;
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, '_blank');

    // Clear cart after order
    cart = [];
    saveCart();
    updateCartCount();
    closeCheckout();
    showToast('Order sent via WhatsApp!');
}

// ==================== RESERVATION ====================
function initReservation() {
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('resName').value.trim();
        const whatsapp = document.getElementById('resWhatsApp').value.trim();
        const date = document.getElementById('resDate').value;
        const time = document.getElementById('resTime').value;
        const guests = document.getElementById('resGuests').value;
        const notes = document.getElementById('resNotes').value.trim();

        if (!name || !whatsapp || !date || !time) {
            showToast('Please fill in all required fields');
            return;
        }

        const message = `KŌJI RAMEN RESERVATION\n\nNama: ${name}\nWhatsApp: ${whatsapp}\nTanggal: ${date}\nJam: ${time}\nJumlah: ${guests}\nCatatan: ${notes || '-'}`;
        const encoded = encodeURIComponent(message);
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
        window.open(url, '_blank');
        reservationForm.reset();
        showToast('Reservation request sent!');
    });
}

// ==================== GALLERY ====================
function initGallery() {
    populateGallery();
    galleryCollage.addEventListener('click', (e) => {
        const item = e.target.closest('.gallery-item');
        if (item) {
            const src = item.querySelector('img').src;
            openLightbox(src, item.dataset.index);
        }
    });
}

function populateGallery() {
    galleryCollage.innerHTML = galleryImages.map((img, index) => `
        <div class="gallery-item" data-index="${index}" role="button" tabindex="0" aria-label="View image">
            <img src="${img.src}" alt="${img.alt}" onerror="handleImageError(this)">
        </div>
    `).join('');
}

// ==================== LIGHTBOX ====================
let currentLightboxIndex = 0;
let lightboxImages = [];

function initLightbox() {
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
    lightboxNext.addEventListener('click', () => navigateLightbox(1));
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('open')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') navigateLightbox(-1);
            if (e.key === 'ArrowRight') navigateLightbox(1);
        }
    });
}

function openLightbox(src, index) {
    lightboxImages = galleryImages.map(g => g.src);
    currentLightboxIndex = parseInt(index) || 0;
    lightboxImg.src = src;
    lightbox.hidden = false;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('open');
    setTimeout(() => {
        lightbox.hidden = true;
    }, 300);
    document.body.style.overflow = '';
}

function navigateLightbox(direction) {
    currentLightboxIndex = (currentLightboxIndex + direction + lightboxImages.length) % lightboxImages.length;
    lightboxImg.src = lightboxImages[currentLightboxIndex];
}

// ==================== BUILDER ====================
function initBuilder() {
    builderBrothOptions.addEventListener('click', (e) => {
        const option = e.target.closest('.builder-step__option');
        if (option) {
            const brothId = option.dataset.id;
            builderState.broth = brothId;
            updateBuilderUI();
        }
    });
    builderNoodleOptions.addEventListener('click', (e) => {
        const option = e.target.closest('.builder-step__option');
        if (option) {
            builderState.noodle = option.dataset.id;
            updateBuilderUI();
        }
    });
    builderToppingOptions.addEventListener('click', (e) => {
        const option = e.target.closest('.builder-step__option');
        if (option) {
            const toppingId = option.dataset.id;
            if (builderState.toppings.includes(toppingId)) {
                builderState.toppings = builderState.toppings.filter(t => t !== toppingId);
            } else {
                builderState.toppings.push(toppingId);
            }
            updateBuilderUI();
        }
    });
    builderHeatOptions.addEventListener('click', (e) => {
        const option = e.target.closest('.builder-step__heat-option');
        if (option) {
            builderState.heat = parseInt(option.dataset.heat);
            updateBuilderUI();
        }
    });
    builderExtrasOptions.addEventListener('click', (e) => {
        const option = e.target.closest('.builder-step__option');
        if (option) {
            const extraId = option.dataset.id;
            if (builderState.extras.includes(extraId)) {
                builderState.extras = builderState.extras.filter(ext => ext !== extraId);
            } else {
                builderState.extras.push(extraId);
            }
            updateBuilderUI();
        }
    });
    addBuilderToCartBtn.addEventListener('click', () => {
        addBuilderItemToCart();
    });
}

function populateBuilderOptions() {
    // Broths
    builderBrothOptions.innerHTML = broths.map(b => `
        <button class="builder-step__option ${builderState.broth === b.id ? 'selected' : ''}" data-id="${b.id}">
            <strong>${b.name}</strong>
            <small>${b.desc}</small>
            <small>${b.price > 0 ? '+' + formatPrice(b.price) : 'Included'}</small>
        </button>
    `).join('');

    // Noodles
    builderNoodleOptions.innerHTML = noodles.map(n => `
        <button class="builder-step__option builder-step__option--noodles ${builderState.noodle === n.id ? 'selected' : ''}" data-id="${n.id}">
            ${n.name}
        </button>
    `).join('');

    // Toppings
    builderToppingOptions.innerHTML = toppings.map(t => `
        <button class="builder-step__option builder-step__option--toppings ${builderState.toppings.includes(t.id) ? 'selected' : ''}" data-id="${t.id}">
            ${t.name} <small>+${formatPrice(t.price)}</small>
        </button>
    `).join('');

    // Heat
    builderHeatOptions.innerHTML = heatLevels.map(level => `
        <button class="builder-step__heat-option ${builderState.heat === level ? 'selected' : ''}" data-heat="${level}">${level}</button>
    `).join('');
    updateHeatLabel();

    // Extras
    builderExtrasOptions.innerHTML = extras.map(ex => `
        <button class="builder-step__option builder-step__option--extras ${builderState.extras.includes(ex.id) ? 'selected' : ''}" data-id="${ex.id}">
            ${ex.name} <small>+${formatPrice(ex.price)}</small>
        </button>
    `).join('');
}

function updateBuilderUI() {
    // Update selected states
    builderBrothOptions.querySelectorAll('.builder-step__option').forEach(btn => {
        btn.classList.toggle('selected', btn.dataset.id === builderState.broth);
    });
    builderNoodleOptions.querySelectorAll('.builder-step__option').forEach(btn => {
        btn.classList.toggle('selected', btn.dataset.id === builderState.noodle);
    });
    builderToppingOptions.querySelectorAll('.builder-step__option').forEach(btn => {
        btn.classList.toggle('selected', builderState.toppings.includes(btn.dataset.id));
    });
    builderHeatOptions.querySelectorAll('.builder-step__heat-option').forEach(btn => {
        btn.classList.toggle('selected', parseInt(btn.dataset.heat) === builderState.heat);
    });
    builderExtrasOptions.querySelectorAll('.builder-step__option').forEach(btn => {
        btn.classList.toggle('selected', builderState.extras.includes(btn.dataset.id));
    });

    updateHeatLabel();
    updateBowlPreview();
    updateBuilderSummary();
    updateBuilderPrice();
}

function updateHeatLabel() {
    const label = heatLabels[builderState.heat] || 'No Heat';
    document.getElementById('heatLabel').textContent = `${builderState.heat} — ${label}`;
    bowlHeatLabel.textContent = `HEAT ${builderState.heat}`;
}

function updateBowlPreview() {
    // Broth color
    const brothColors = {
        shoyu: '#c29b6b',
        miso: '#c49b5e',
        paitan: '#e8d5b5',
        spicy: '#c95a3d'
    };
    bowlBroth.style.background = brothColors[builderState.broth] || '#c29b6b';
    bowlBrothLabel.textContent = builderState.broth.toUpperCase();

    // Noodles visual (thickness)
    const noodleStyles = {
        thin: '2px',
        medium: '5px',
        thick: '9px'
    };
    const noodleWidth = noodleStyles[builderState.noodle] || '5px';
    bowlNoodles.style.background = `repeating-linear-gradient(45deg, #f5d9a8 0px, #f5d9a8 ${noodleWidth}, #eac58f ${noodleWidth}, #eac58f ${parseInt(noodleWidth) * 2}px)`;
    bowlNoodleLabel.textContent = builderState.noodle.toUpperCase();

    // Toppings visual (colored dots)
    bowlToppings.innerHTML = '';
    builderState.toppings.forEach(toppingId => {
        const colorMap = {
            chashu: '#b5651d',
            ajitama: '#f0c05a',
            nori: '#2d4a32',
            corn: '#f9d849',
            mushroom: '#8b6f5c',
            'green-onion': '#4caf50'
        };
        const dot = document.createElement('span');
        dot.className = 'bowl-preview__topping-item';
        dot.style.background = colorMap[toppingId] || '#888';
        bowlToppings.appendChild(dot);
    });
}

function calculateBuilderTotal() {
    let total = builderState.basePrice;
    // Broth price
    const broth = broths.find(b => b.id === builderState.broth);
    total += broth ? broth.price : 0;
    // Noodle price
    const noodle = noodles.find(n => n.id === builderState.noodle);
    total += noodle ? noodle.price : 0;
    // Toppings
    builderState.toppings.forEach(tId => {
        const topping = toppings.find(t => t.id === tId);
        if (topping) total += topping.price;
    });
    // Extras
    builderState.extras.forEach(eId => {
        const extra = extras.find(ex => ex.id === eId);
        if (extra) total += extra.price;
    });
    return total;
}

function updateBuilderPrice() {
    builderTotal.textContent = formatPrice(calculateBuilderTotal());
}

function updateBuilderSummary() {
    const total = calculateBuilderTotal();
    builderSummary.classList.add('visible');
    builderSummary.innerHTML = `
        <div class="builder__summary-title">YOUR BOWL</div>
        <div class="builder__summary-details">
            ${builderState.broth.charAt(0).toUpperCase() + builderState.broth.slice(1)} Ramen<br>
            ${builderState.noodle.charAt(0).toUpperCase() + builderState.noodle.slice(1)} Noodles<br>
            Toppings: ${builderState.toppings.length ? builderState.toppings.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(', ') : 'None'}<br>
            Heat Level: ${builderState.heat}<br>
            Extras: ${builderState.extras.length ? builderState.extras.map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(', ') : 'None'}
        </div>
        <div class="builder__summary-total">Total: ${formatPrice(total)}</div>
    `;
}

function getBuilderSummary() {
    // Return just the text summary for cart
    return {
        broth: builderState.broth,
        noodle: builderState.noodle,
        toppings: builderState.toppings,
        heat: builderState.heat,
        extras: builderState.extras
    };
}

// ==================== TOAST ====================
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// ==================== KEYBOARD ESC ====================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (productModal.classList.contains('open')) closeProductModal();
        if (cartDrawer.classList.contains('open')) closeCart();
        if (checkoutModal.classList.contains('open')) closeCheckout();
        if (lightbox.classList.contains('open')) closeLightbox();
        if (mobileNav.classList.contains('open')) closeMobileNav();
    }
});

// ==================== INIT VIEWS (handle initial hash) ====================
function initViews() {
    // All views are initially hidden except home, but we use showView to manage
    const hash = window.location.hash || '#home';
    showView(hash.substring(1));
}