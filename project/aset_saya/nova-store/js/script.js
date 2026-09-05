/* ============================================
   NOVA STORE — SCRIPT.JS
   Vanilla JavaScript for complete e-commerce functionality
   ============================================ */

// ============================================
// CONFIGURATION
// ============================================
const WHATSAPP_NUMBER = "628xxxxxxxxxx"; // TODO: Replace with actual WhatsApp number

const SHIPPING_COSTS = {
    standard: 15000,
    express: 35000
};

const FALLBACK_IMAGE = "data:image/svg+xml," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">' +
    '<rect width="400" height="400" fill="#E5E5E5"/>' +
    '<text x="200" y="195" text-anchor="middle" font-family="Georgia, serif" font-size="28" fill="#6B6B6B" font-weight="bold">NOVA</text>' +
    '<text x="200" y="225" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#999">Product Image</text>' +
    '</svg>'
);

// ============================================
// PRODUCT DATA
// ============================================
const PRODUCTS = [
    {
        id: 1,
        name: "NOVA Everyday Tote",
        category: "Accessories",
        price: 249000,
        image: "assets/images/product-01.jpg",
        description: "A spacious everyday tote crafted from durable canvas with natural leather handles. Designed to carry everything you need with quiet confidence.",
        colors: ["Natural", "Black", "Olive"],
        sizes: [],
        badge: "NEW",
        featured: true,
        dateAdded: "2026-01-15",
        rating: 4.8,
        reviews: 42,
        details: "Made from 100% organic cotton canvas. Hand-stitched leather handles. Interior zip pocket.",
        material: "Organic cotton canvas, vegetable-tanned leather",
        dimensions: "40cm × 35cm × 12cm",
        availability: "In stock"
    },
    {
        id: 2,
        name: "NOVA Essential Shirt",
        category: "Fashion",
        price: 329000,
        image: "assets/images/product-02.jpg",
        description: "The essential shirt — a relaxed fit button-down in breathable cotton. Pre-washed for softness, designed for every day.",
        colors: ["White", "Sand", "Navy"],
        sizes: ["S", "M", "L", "XL"],
        badge: "",
        featured: true,
        dateAdded: "2025-12-20",
        rating: 4.7,
        reviews: 68,
        details: "Relaxed fit. Button-front closure. Single chest pocket. Pre-washed for softness.",
        material: "100% cotton, 180gsm",
        dimensions: "See size guide",
        availability: "In stock"
    },
    {
        id: 3,
        name: "NOVA Ceramic Mug",
        category: "Home",
        price: 149000,
        image: "assets/images/product-03.jpg",
        description: "A hand-glazed ceramic mug with a minimal silhouette. The perfect size for your morning coffee or afternoon tea.",
        colors: ["White", "Sand", "Graphite"],
        sizes: [],
        badge: "",
        featured: true,
        dateAdded: "2025-11-10",
        rating: 4.9,
        reviews: 105,
        details: "350ml capacity. Microwave and dishwasher safe. Hand-glazed finish.",
        material: "Stoneware ceramic",
        dimensions: "8cm × 9cm (diameter × height)",
        availability: "In stock"
    },
    {
        id: 4,
        name: "NOVA Daily Cap",
        category: "Fashion",
        price: 199000,
        image: "assets/images/product-04.jpg",
        description: "A structured six-panel cap in brushed cotton twill. Clean lines, understated branding, and a comfortable fit.",
        colors: ["Black", "Khaki", "Navy"],
        sizes: ["One Size"],
        badge: "NEW",
        featured: true,
        dateAdded: "2026-02-01",
        rating: 4.6,
        reviews: 28,
        details: "Structured crown. Adjustable back strap. Embroidered NOVA logo.",
        material: "Brushed cotton twill",
        dimensions: "One size — adjustable",
        availability: "In stock"
    },
    {
        id: 5,
        name: "NOVA Desk Lamp",
        category: "Home",
        price: 499000,
        image: "assets/images/product-05.jpg",
        description: "A minimal desk lamp with warm LED lighting and an articulated arm. Designed for focused work and quiet evenings.",
        colors: ["White", "Black", "Brass"],
        sizes: [],
        badge: "",
        featured: false,
        dateAdded: "2025-10-05",
        rating: 4.8,
        reviews: 56,
        details: "Warm white LED (2700K). Articulated arm. Touch dimmer switch.",
        material: "Aluminum, steel",
        dimensions: "35cm × 15cm × 40cm",
        availability: "In stock"
    },
    {
        id: 6,
        name: "NOVA Canvas Wallet",
        category: "Accessories",
        price: 179000,
        image: "assets/images/product-06.jpg",
        description: "A slim canvas wallet with leather trim. Fits essential cards and folded notes without bulk.",
        colors: ["Natural", "Black"],
        sizes: [],
        badge: "",
        featured: false,
        dateAdded: "2025-09-18",
        rating: 4.5,
        reviews: 37,
        details: "6 card slots. 1 note compartment. Slim profile design.",
        material: "Cotton canvas, full-grain leather",
        dimensions: "10cm × 8cm × 1.5cm",
        availability: "In stock"
    },
    {
        id: 7,
        name: "NOVA Travel Bottle",
        category: "Lifestyle",
        price: 249000,
        image: "assets/images/product-07.jpg",
        description: "A double-walled stainless steel bottle that keeps drinks cold for 24 hours or hot for 12. Minimal design, maximum function.",
        colors: ["Silver", "Graphite", "Olive"],
        sizes: [],
        badge: "NEW",
        featured: false,
        dateAdded: "2026-01-28",
        rating: 4.7,
        reviews: 89,
        details: "500ml capacity. Double-wall vacuum insulation. Leak-proof lid.",
        material: "304 stainless steel",
        dimensions: "6.5cm × 22cm (diameter × height)",
        availability: "In stock"
    },
    {
        id: 8,
        name: "NOVA Minimal Watch",
        category: "Accessories",
        price: 499000,
        image: "assets/images/product-08.jpg",
        description: "A clean-faced watch with a Japanese quartz movement and a stainless steel case. Time, simply told.",
        colors: ["Black", "Silver", "Gold"],
        sizes: [],
        badge: "NEW",
        featured: false,
        dateAdded: "2026-02-10",
        rating: 4.9,
        reviews: 73,
        details: "Japanese quartz movement. 36mm case. Water resistant to 30m.",
        material: "Stainless steel, sapphire-coated glass",
        dimensions: "36mm case diameter",
        availability: "In stock"
    },
    {
        id: 9,
        name: "NOVA Linen Throw",
        category: "Home",
        price: 399000,
        image: "assets/images/product-09.jpg",
        description: "A generously sized linen throw, woven for warmth and texture. Drapes beautifully over a sofa or at the foot of your bed.",
        colors: ["Sand", "Sage", "Ivory"],
        sizes: [],
        badge: "",
        featured: false,
        dateAdded: "2025-08-22",
        rating: 4.8,
        reviews: 44,
        details: "130cm × 180cm. Fringed edges. Pre-washed for softness.",
        material: "100% European flax linen",
        dimensions: "130cm × 180cm",
        availability: "In stock"
    },
    {
        id: 10,
        name: "NOVA Scented Candle",
        category: "Home",
        price: 189000,
        image: "assets/images/product-10.jpg",
        description: "A hand-poured soy wax candle with subtle, natural fragrances. Housed in a reusable glass vessel.",
        colors: ["Cedar", "Bergamot", "Unscented"],
        sizes: [],
        badge: "NEW",
        featured: false,
        dateAdded: "2026-01-20",
        rating: 4.6,
        reviews: 31,
        details: "45-hour burn time. Hand-poured soy wax. Cotton wick.",
        material: "Soy wax, glass vessel",
        dimensions: "7.5cm × 9cm (diameter × height)",
        availability: "In stock"
    }
];

// ============================================
// STATE MANAGEMENT
// ============================================
let cart = [];
let wishlist = [];
let currentView = 'home';
let currentProductId = null;
let activeFilter = 'all';
let activeSort = 'featured';
let searchQuery = '';
let selectedColor = null;
let selectedSize = null;
let selectedQuantity = 1;
let toastTimeout = null;

// ============================================
// DOM REFERENCES
// ============================================
const app = document.getElementById('app');
const navbar = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobileMenu');
const cartDrawer = document.getElementById('cartDrawer');
const wishlistDrawer = document.getElementById('wishlistDrawer');
const quickViewModal = document.getElementById('quickViewModal');
const toast = document.getElementById('toast');

// ============================================
// UTILITY FUNCTIONS
// ============================================
function formatPrice(price) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
    }).format(price);
}

function getProductById(id) {
    return PRODUCTS.find(p => p.id === parseInt(id));
}

function getProductVariantLabel(product) {
    const parts = [];
    if (selectedColor && product.colors && product.colors.length > 0) {
        parts.push(selectedColor);
    }
    if (selectedSize && product.sizes && product.sizes.length > 0) {
        parts.push(selectedSize);
    }
    return parts.join(' / ') || 'Default';
}

function handleImageError(img) {
    if (img.src !== FALLBACK_IMAGE) {
        img.src = FALLBACK_IMAGE;
    }
}

function showToast(message, duration = 2500) {
    if (toastTimeout) clearTimeout(toastTimeout);
    toast.textContent = message;
    toast.classList.add('show');
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// ============================================
// LOCAL STORAGE
// ============================================
function loadFromStorage() {
    try {
        const storedCart = localStorage.getItem('nova_cart');
        const storedWishlist = localStorage.getItem('nova_wishlist');
        if (storedCart) cart = JSON.parse(storedCart);
        if (storedWishlist) wishlist = JSON.parse(storedWishlist);
    } catch (e) {
        console.warn('Error loading from localStorage:', e);
        cart = [];
        wishlist = [];
    }
}

function saveCart() {
    try {
        localStorage.setItem('nova_cart', JSON.stringify(cart));
    } catch (e) {
        console.warn('Error saving cart to localStorage:', e);
    }
}

function saveWishlist() {
    try {
        localStorage.setItem('nova_wishlist', JSON.stringify(wishlist));
    } catch (e) {
        console.warn('Error saving wishlist to localStorage:', e);
    }
}

// ============================================
// CART FUNCTIONS
// ============================================
function addToCart(productId, quantity = 1) {
    const product = getProductById(productId);
    if (!product) return;

    const variant = getProductVariantLabel(product);
    const existingItem = cart.find(item => item.productId === productId && item.variant === variant);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            productId: productId,
            variant: variant,
            quantity: quantity
        });
    }

    saveCart();
    updateCartBadge();
    showToast(`${product.name} added to cart`);
}

function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        saveCart();
        updateCartBadge();
        renderCart();
    }
}

function updateCartQuantity(index, change) {
    if (index >= 0 && index < cart.length) {
        const newQty = cart[index].quantity + change;
        if (newQty <= 0) {
            removeFromCart(index);
        } else {
            cart[index].quantity = newQty;
            saveCart();
            renderCart();
        }
    }
}

function getCartCount() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function getCartSubtotal() {
    return cart.reduce((sum, item) => {
        const product = getProductById(item.productId);
        return sum + (product ? product.price * item.quantity : 0);
    }, 0);
}

function updateCartBadge() {
    const count = getCartCount();
    const badge = document.getElementById('cartBadge');
    const bottomBadge = document.getElementById('bottomCartBadge');
    if (count > 0) {
        badge.textContent = count;
        badge.classList.remove('hidden');
        bottomBadge.textContent = count;
        bottomBadge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
        bottomBadge.classList.add('hidden');
    }
}

// ============================================
// WISHLIST FUNCTIONS
// ============================================
function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast('Removed from wishlist');
    } else {
        wishlist.push(productId);
        showToast('Added to wishlist');
    }
    saveWishlist();
    updateWishlistBadge();
    renderWishlist();
    updateWishlistHearts();
}

function isInWishlist(productId) {
    return wishlist.includes(productId);
}

function updateWishlistBadge() {
    const badge = document.getElementById('wishlistBadge');
    if (wishlist.length > 0) {
        badge.textContent = wishlist.length;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
}

function updateWishlistHearts() {
    document.querySelectorAll('.product-card-wishlist').forEach(btn => {
        const productId = parseInt(btn.dataset.productId);
        if (isInWishlist(productId)) {
            btn.classList.add('active');
            btn.querySelector('svg').style.fill = 'currentColor';
        } else {
            btn.classList.remove('active');
            btn.querySelector('svg').style.fill = 'none';
        }
    });
}

// ============================================
// RENDER FUNCTIONS
// ============================================
function renderProductCard(product, showQuickAdd = true) {
    const isWishlisted = isInWishlist(product.id);
    const heartFill = isWishlisted ? 'currentColor' : 'none';

    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-card-image">
                ${product.badge ? `<span class="product-card-badge">${product.badge}</span>` : ''}
                <button class="product-card-wishlist ${isWishlisted ? 'active' : ''}" data-product-id="${product.id}" aria-label="Toggle wishlist for ${product.name}">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="${heartFill}" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                </button>
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="handleImageError(this)">
                ${showQuickAdd ? `
                <button class="product-card-add" data-product-id="${product.id}" aria-label="Quick add ${product.name} to cart">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </button>
                ` : ''}
            </div>
            <p class="product-card-category">${product.category}</p>
            <h3 class="product-card-name">${product.name}</h3>
            <p class="product-card-price">${formatPrice(product.price)}</p>
        </div>
    `;
}

function renderFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    const featured = PRODUCTS.filter(p => p.featured);
    container.innerHTML = featured.map(p => renderProductCard(p)).join('');
}

function renderNewArrivals() {
    const container = document.getElementById('newArrivals');
    const newItems = PRODUCTS.filter(p => p.badge === 'NEW');
    container.innerHTML = newItems.map(p => renderProductCard(p)).join('');
}

function renderShopProducts() {
    const container = document.getElementById('shopProducts');
    const noResults = document.getElementById('noResults');

    let products = [...PRODUCTS];

    // Apply filter
    if (activeFilter !== 'all') {
        products = products.filter(p => p.category === activeFilter);
    }

    // Apply search
    if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        products = products.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );
    }

    // Apply sort
    switch (activeSort) {
        case 'price-low':
            products.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            products.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            products.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
            break;
        case 'featured':
        default:
            products.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
            break;
    }

    if (products.length === 0) {
        container.innerHTML = '';
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
        container.innerHTML = products.map(p => renderProductCard(p)).join('');
    }
}

function renderProductDetail(productId) {
    const container = document.getElementById('productDetail');
    const product = getProductById(productId);

    if (!product) {
        container.innerHTML = `
            <div class="no-results">
                <p class="no-results-title">PRODUCT NOT FOUND</p>
                <a href="#shop" class="btn btn-outline">BACK TO SHOP</a>
            </div>
        `;
        return;
    }

    currentProductId = productId;
    selectedColor = product.colors && product.colors.length > 0 ? product.colors[0] : null;
    selectedSize = product.sizes && product.sizes.length > 0 ? product.sizes[0] : null;
    selectedQuantity = 1;

    const colorsHtml = product.colors && product.colors.length > 0 ? `
        <div class="option-group" style="margin-bottom:1rem;">
            <span class="option-label">COLOR</span>
            <div class="option-buttons">
                ${product.colors.map(color => `
                    <button class="option-btn ${color === selectedColor ? 'selected' : ''}" data-option-type="color" data-option-value="${color}">${color}</button>
                `).join('')}
            </div>
        </div>
    ` : '';

    const sizesHtml = product.sizes && product.sizes.length > 0 ? `
        <div class="option-group" style="margin-bottom:1rem;">
            <span class="option-label">SIZE</span>
            <div class="option-buttons">
                ${product.sizes.map(size => `
                    <button class="option-btn ${size === selectedSize ? 'selected' : ''}" data-option-type="size" data-option-value="${size}">${size}</button>
                `).join('')}
            </div>
        </div>
    ` : '';

    container.innerHTML = `
        <div class="product-detail-grid">
            <div class="product-detail-image">
                <img src="${product.image}" alt="${product.name}" onerror="handleImageError(this)">
            </div>
            <div class="product-detail-info">
                <p class="product-detail-category">${product.category}</p>
                <h1 class="product-detail-name">${product.name}</h1>
                <p class="product-detail-price">${formatPrice(product.price)}</p>
                <div class="product-detail-rating">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    <span>${product.rating} (${product.reviews} reviews)</span>
                </div>
                <p class="product-detail-description">${product.description}</p>
                ${colorsHtml}
                ${sizesHtml}
                <div class="product-detail-actions">
                    <div class="quantity-controls" style="border:1px solid var(--color-border); border-radius:4px; display:flex; align-items:center; gap:0.5rem; padding:4px 8px;">
                        <button class="quantity-btn" id="qtyMinus" aria-label="Decrease quantity">−</button>
                        <span id="qtyValue" class="quantity-value" style="min-width:24px; text-align:center; font-weight:500;">1</span>
                        <button class="quantity-btn" id="qtyPlus" aria-label="Increase quantity">+</button>
                    </div>
                    <button class="btn btn-primary" id="addToCartBtn" style="flex:1;">ADD TO CART</button>
                </div>
                <div class="product-detail-meta">
                    <div class="meta-item">
                        <span class="meta-item-label">DETAILS</span>
                        <span class="meta-item-value">${product.details}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-item-label">MATERIAL</span>
                        <span class="meta-item-value">${product.material}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-item-label">DIMENSIONS</span>
                        <span class="meta-item-value">${product.dimensions}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-item-label">AVAILABILITY</span>
                        <span class="meta-item-value" style="color:var(--color-success);">${product.availability}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-item-label">SHIPPING</span>
                        <span class="meta-item-value">Standard: 2–4 business days</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderCart() {
    const container = document.getElementById('cartItems');
    const summary = document.getElementById('cartSummary');

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🛒</div>
                <h3 class="empty-state-title">YOUR CART IS EMPTY.</h3>
                <p class="empty-state-text">Start exploring our collection.</p>
                <a href="#shop" class="btn btn-primary" data-close-drawer="cart">SHOP NOW</a>
            </div>
        `;
        summary.innerHTML = '';
        return;
    }

    container.innerHTML = cart.map((item, index) => {
        const product = getProductById(item.productId);
        if (!product) return '';
        return `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${product.image}" alt="${product.name}" onerror="handleImageError(this)">
                </div>
                <div class="cart-item-info">
                    <p class="cart-item-name">${product.name}</p>
                    <p class="cart-item-variant">${item.variant}</p>
                    <div class="cart-item-bottom">
                        <span class="cart-item-price">${formatPrice(product.price * item.quantity)}</span>
                        <div class="quantity-controls">
                            <button class="quantity-btn" data-cart-index="${index}" data-cart-change="-1" aria-label="Decrease quantity">−</button>
                            <span class="quantity-value">${item.quantity}</span>
                            <button class="quantity-btn" data-cart-index="${index}" data-cart-change="1" aria-label="Increase quantity">+</button>
                        </div>
                        <button class="cart-item-remove" data-cart-index="${index}" aria-label="Remove item">Remove</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    const subtotal = getCartSubtotal();
    const shipping = SHIPPING_COSTS.standard;
    const total = subtotal + shipping;

    summary.innerHTML = `
        <div class="cart-summary-row">
            <span>Subtotal</span>
            <span>${formatPrice(subtotal)}</span>
        </div>
        <div class="cart-summary-row">
            <span>Shipping (Standard)</span>
            <span>${formatPrice(shipping)}</span>
        </div>
        <div class="cart-summary-row total">
            <span>Total</span>
            <span>${formatPrice(total)}</span>
        </div>
        <a href="#checkout" class="btn btn-primary btn-full" data-close-drawer="cart">PROCEED TO CHECKOUT</a>
    `;
}

function renderWishlist() {
    const container = document.getElementById('wishlistItems');

    if (wishlist.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">♡</div>
                <h3 class="empty-state-title">NOTHING SAVED YET.</h3>
                <p class="empty-state-text">Tap the heart on any product to save it here.</p>
                <a href="#shop" class="btn btn-primary" data-close-drawer="wishlist">EXPLORE PRODUCTS</a>
            </div>
        `;
        return;
    }

    container.innerHTML = wishlist.map(productId => {
        const product = getProductById(productId);
        if (!product) return '';
        return `
            <div class="cart-item" style="cursor:pointer;" data-product-id="${product.id}">
                <div class="cart-item-image">
                    <img src="${product.image}" alt="${product.name}" onerror="handleImageError(this)">
                </div>
                <div class="cart-item-info">
                    <p class="cart-item-name">${product.name}</p>
                    <p class="cart-item-variant">${product.category}</p>
                    <div class="cart-item-bottom">
                        <span class="cart-item-price">${formatPrice(product.price)}</span>
                        <button class="cart-item-remove" data-wishlist-remove="${product.id}" aria-label="Remove from wishlist">Remove</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function renderCheckoutSummary() {
    const container = document.getElementById('orderSummaryItems');
    const subtotalEl = document.getElementById('orderSubtotal');
    const shippingEl = document.getElementById('orderShipping');
    const totalEl = document.getElementById('orderTotal');

    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:var(--color-secondary);">Your cart is empty.</p>';
        subtotalEl.textContent = 'Rp 0';
        shippingEl.textContent = 'Rp 0';
        totalEl.textContent = 'Rp 0';
        return;
    }

    container.innerHTML = cart.map(item => {
        const product = getProductById(item.productId);
        if (!product) return '';
        return `
            <div class="order-summary-item">
                <div class="order-summary-item-image">
                    <img src="${product.image}" alt="${product.name}" onerror="handleImageError(this)">
                </div>
                <div class="order-summary-item-info">
                    <p class="order-summary-item-name">${product.name}</p>
                    <p class="order-summary-item-variant">${item.variant} × ${item.quantity}</p>
                </div>
                <span class="order-summary-item-price">${formatPrice(product.price * item.quantity)}</span>
            </div>
        `;
    }).join('');

    const subtotal = getCartSubtotal();
    const shipping = SHIPPING_COSTS.standard;
    const total = subtotal + shipping;

    subtotalEl.textContent = formatPrice(subtotal);
    shippingEl.textContent = formatPrice(shipping);
    totalEl.textContent = formatPrice(total);
}

// ============================================
// NAVIGATION / ROUTING
// ============================================
function navigateTo(hash) {
    const cleanHash = hash.replace('#', '') || 'home';
    let view = cleanHash;
    let productId = null;

    // Handle #product/:id
    if (cleanHash.startsWith('product/')) {
        productId = parseInt(cleanHash.split('/')[1]);
        view = 'product';
    }

    // Show the correct view
    showView(view, productId);

    // Update active nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        const navValue = link.dataset.nav;
        if (navValue === view || (view === 'product' && navValue === 'shop')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Update mobile bottom bar
    document.querySelectorAll('.bottom-bar-link').forEach(link => {
        const href = link.getAttribute('href') || '';
        if (href.includes(view) || (view === 'product' && href.includes('shop'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Scroll to top on view change
    window.scrollTo({ top: 0, behavior: 'smooth' });

    currentView = view;
    if (productId) currentProductId = productId;

    // Close drawers/menus
    closeAllDrawers();
}

function showView(viewName, productId = null) {
    const views = document.querySelectorAll('.view');
    views.forEach(v => v.classList.remove('active'));

    const targetView = document.getElementById(`view-${viewName}`);
    if (targetView) {
        targetView.classList.add('active');
    }

    // If product view, render product detail
    if (viewName === 'product' && productId) {
        renderProductDetail(productId);
    }

    // If checkout view, render summary
    if (viewName === 'checkout') {
        renderCheckoutSummary();
    }

    // If shop view, re-render with current filters
    if (viewName === 'shop') {
        renderShopProducts();
    }
}

// ============================================
// DRAWER MANAGEMENT
// ============================================
function openDrawer(drawerId) {
    const drawer = document.getElementById(drawerId);
    if (drawer) {
        drawer.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeDrawer(drawerId) {
    const drawer = document.getElementById(drawerId);
    if (drawer) {
        drawer.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function closeAllDrawers() {
    closeDrawer('cartDrawer');
    closeDrawer('wishlistDrawer');
    closeDrawer('mobileMenu');
    closeModal();
}

function closeModal() {
    quickViewModal.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// QUICK VIEW
// ============================================
function openQuickView(productId) {
    const product = getProductById(productId);
    if (!product) return;

    const container = document.getElementById('quickViewContent');
    container.innerHTML = `
        <div class="quick-view-content">
            <div class="quick-view-image">
                <img src="${product.image}" alt="${product.name}" onerror="handleImageError(this)">
            </div>
            <div class="quick-view-details">
                <p class="product-detail-category">${product.category}</p>
                <h3 class="product-card-name" style="font-size:1.25rem; margin-bottom:4px;">${product.name}</h3>
                <p class="product-card-price" style="font-size:1.125rem; margin-bottom:12px;">${formatPrice(product.price)}</p>
                <p style="font-size:0.875rem; color:var(--color-secondary); margin-bottom:16px;">${product.description.substring(0, 100)}...</p>
                <button class="btn btn-primary" id="quickViewAddBtn">ADD TO CART</button>
                <a href="#product/${product.id}" class="btn btn-outline" style="margin-top:8px;" data-close-modal>VIEW FULL DETAILS</a>
            </div>
        </div>
    `;

    quickViewModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ============================================
// EVENT LISTENERS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Load state
    loadFromStorage();
    updateCartBadge();
    updateWishlistBadge();

    // Render initial views
    renderFeaturedProducts();
    renderNewArrivals();
    renderShopProducts();
    renderCart();
    renderWishlist();
    updateWishlistHearts();

    // Handle initial hash
    const initialHash = window.location.hash || '#home';
    navigateTo(initialHash);
});

// Hash navigation
window.addEventListener('hashchange', () => {
    const hash = window.location.hash || '#home';
    navigateTo(hash);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
document.getElementById('mobileMenuBtn').addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
});

document.getElementById('mobileMenuClose').addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    });
});

// Cart drawer
document.getElementById('cartBtn').addEventListener('click', () => {
    renderCart();
    openDrawer('cartDrawer');
});

document.getElementById('bottomCartBtn').addEventListener('click', () => {
    renderCart();
    openDrawer('cartDrawer');
});

// Wishlist drawer
document.getElementById('wishlistBtn').addEventListener('click', () => {
    renderWishlist();
    openDrawer('wishlistDrawer');
});

document.getElementById('bottomWishlistBtn').addEventListener('click', () => {
    renderWishlist();
    openDrawer('wishlistDrawer');
});

// Drawer overlay close
document.querySelectorAll('[data-close-drawer]').forEach(el => {
    el.addEventListener('click', function(e) {
        const drawerId = this.dataset.closeDrawer;
        closeDrawer(drawerId);
    });
});

// Drawer close buttons
document.querySelectorAll('.drawer-close').forEach(btn => {
    btn.addEventListener('click', function() {
        const drawer = this.closest('.drawer');
        if (drawer) {
            drawer.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Modal close
document.querySelectorAll('[data-close-modal]').forEach(el => {
    el.addEventListener('click', () => {
        closeModal();
    });
});

// ESC key to close drawers/modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAllDrawers();
        if (mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        }
    }
});

// Product card click (delegated)
document.addEventListener('click', (e) => {
    // Wishlist heart click
    const wishlistBtn = e.target.closest('.product-card-wishlist');
    if (wishlistBtn) {
        e.stopPropagation();
        const productId = parseInt(wishlistBtn.dataset.productId);
        toggleWishlist(productId);
        return;
    }

    // Quick add button click
    const quickAddBtn = e.target.closest('.product-card-add');
    if (quickAddBtn) {
        e.stopPropagation();
        const productId = parseInt(quickAddBtn.dataset.productId);
        addToCart(productId, 1);
        return;
    }

    // Product card click (navigate to detail)
    const productCard = e.target.closest('.product-card');
    if (productCard && !e.target.closest('a') && !e.target.closest('button')) {
        const productId = parseInt(productCard.dataset.productId);
        window.location.hash = `#product/${productId}`;
        return;
    }

    // Cart quantity buttons
    const qtyBtn = e.target.closest('[data-cart-change]');
    if (qtyBtn) {
        const index = parseInt(qtyBtn.dataset.cartIndex);
        const change = parseInt(qtyBtn.dataset.cartChange);
        updateCartQuantity(index, change);
        return;
    }

    // Cart remove buttons
    const removeBtn = e.target.closest('[data-cart-index]');
    if (removeBtn && removeBtn.classList.contains('cart-item-remove')) {
        const index = parseInt(removeBtn.dataset.cartIndex);
        removeFromCart(index);
        return;
    }

    // Wishlist remove
    const wishlistRemove = e.target.closest('[data-wishlist-remove]');
    if (wishlistRemove) {
        const productId = parseInt(wishlistRemove.dataset.wishlistRemove);
        toggleWishlist(productId);
        return;
    }

    // Wishlist item click → navigate to product
    const wishlistItem = e.target.closest('.cart-item[data-product-id]');
    if (wishlistItem && !e.target.closest('button')) {
        const productId = parseInt(wishlistItem.dataset.productId);
        closeDrawer('wishlistDrawer');
        window.location.hash = `#product/${productId}`;
        return;
    }

    // Quick view add to cart
    if (e.target.id === 'quickViewAddBtn') {
        const productId = currentProductId;
        if (productId) {
            addToCart(productId, 1);
            closeModal();
        }
        return;
    }
});

// Product detail events (delegated)
document.addEventListener('click', (e) => {
    // Color option selection
    const colorBtn = e.target.closest('[data-option-type="color"]');
    if (colorBtn) {
        selectedColor = colorBtn.dataset.optionValue;
        document.querySelectorAll('[data-option-type="color"]').forEach(b => b.classList.remove('selected'));
        colorBtn.classList.add('selected');
        return;
    }

    // Size option selection
    const sizeBtn = e.target.closest('[data-option-type="size"]');
    if (sizeBtn) {
        selectedSize = sizeBtn.dataset.optionValue;
        document.querySelectorAll('[data-option-type="size"]').forEach(b => b.classList.remove('selected'));
        sizeBtn.classList.add('selected');
        return;
    }

    // Quantity buttons
    if (e.target.id === 'qtyMinus') {
        if (selectedQuantity > 1) {
            selectedQuantity--;
            document.getElementById('qtyValue').textContent = selectedQuantity;
        }
        return;
    }
    if (e.target.id === 'qtyPlus') {
        selectedQuantity++;
        document.getElementById('qtyValue').textContent = selectedQuantity;
        return;
    }

    // Add to cart button
    if (e.target.id === 'addToCartBtn') {
        if (currentProductId) {
            addToCart(currentProductId, selectedQuantity);
        }
        return;
    }
});

// Shop search
document.getElementById('shopSearch').addEventListener('input', (e) => {
    searchQuery = e.target.value;
    const clearBtn = document.getElementById('clearSearch');
    if (searchQuery) {
        clearBtn.classList.remove('hidden');
    } else {
        clearBtn.classList.add('hidden');
    }
    renderShopProducts();
});

document.getElementById('clearSearch').addEventListener('click', () => {
    searchQuery = '';
    document.getElementById('shopSearch').value = '';
    document.getElementById('clearSearch').classList.add('hidden');
    renderShopProducts();
});

document.getElementById('clearSearchBtn').addEventListener('click', () => {
    searchQuery = '';
    document.getElementById('shopSearch').value = '';
    document.getElementById('clearSearch').classList.add('hidden');
    renderShopProducts();
});

// Shop filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.filter;
        renderShopProducts();
    });
});

// Shop sort
document.getElementById('sortSelect').addEventListener('change', (e) => {
    activeSort = e.target.value;
    renderShopProducts();
});

// Category cards on home page → navigate to shop with filter
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        activeFilter = category;
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.filter === category);
        });
        window.location.hash = '#shop';
    });
});

// Collection links → navigate to shop with filter
document.querySelectorAll('.collection-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.dataset.filterCategory;
        activeFilter = category;
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.filter === category);
        });
        window.location.hash = '#shop';
    });
});

// Newsletter form
document.getElementById('newsletterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('newsletterEmail');
    const feedback = document.getElementById('newsletterFeedback');
    const email = emailInput.value.trim();

    if (!email || !isValidEmail(email)) {
        emailInput.classList.add('error');
        feedback.textContent = 'Please enter a valid email address.';
        feedback.classList.add('error');
        return;
    }

    emailInput.classList.remove('error');
    feedback.classList.remove('error');
    feedback.textContent = 'THANK YOU FOR SUBSCRIBING.';
    emailInput.value = '';
    showToast('Successfully subscribed!');
});

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Checkout form
document.getElementById('checkoutForm').addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateCheckoutForm()) {
        generateWhatsAppOrder();
    }
});

function validateCheckoutForm() {
    let isValid = true;
    const fields = [
        { id: 'fullName', errorId: 'fullNameError', required: true, label: 'Full name' },
        { id: 'whatsappNumber', errorId: 'whatsappError', required: true, label: 'WhatsApp number' },
        { id: 'address', errorId: 'addressError', required: true, label: 'Address' },
        { id: 'city', errorId: 'cityError', required: true, label: 'City' },
        { id: 'postalCode', errorId: 'postalCodeError', required: true, label: 'Postal code' }
    ];

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const errorEl = document.getElementById(field.errorId);
        const value = input.value.trim();

        if (!value) {
            input.classList.add('error');
            errorEl.textContent = `${field.label} is required.`;
            isValid = false;
        } else {
            input.classList.remove('error');
            errorEl.textContent = '';
        }

        // Validate WhatsApp number
        if (field.id === 'whatsappNumber' && value && !/^[0-9+]{10,15}$/.test(value)) {
            input.classList.add('error');
            errorEl.textContent = 'Please enter a valid WhatsApp number.';
            isValid = false;
        }
    });

    if (cart.length === 0) {
        showToast('Your cart is empty.');
        return false;
    }

    return isValid;
}

// WhatsApp order generation
function generateWhatsAppOrder() {
    const fullName = document.getElementById('fullName').value.trim();
    const whatsapp = document.getElementById('whatsappNumber').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const postalCode = document.getElementById('postalCode').value.trim();
    const deliveryMethod = document.querySelector('input[name="delivery"]:checked')?.value || 'Standard';
    const paymentMethod = document.querySelector('input[name="payment"]:checked')?.value || 'Bank Transfer';

    const subtotal = getCartSubtotal();
    const shipping = deliveryMethod === 'Express' ? SHIPPING_COSTS.express : SHIPPING_COSTS.standard;
    const total = subtotal + shipping;

    let message = `Halo NOVA,\n\nSaya ingin melakukan pemesanan.\n\nPesanan:\n`;

    cart.forEach(item => {
        const product = getProductById(item.productId);
        if (product) {
            message += `- ${product.name} (${item.variant}) x${item.quantity}\n`;
        }
    });

    message += `\nSubtotal: ${formatPrice(subtotal)}\n`;
    message += `Ongkir (${deliveryMethod}): ${formatPrice(shipping)}\n`;
    message += `Total: ${formatPrice(total)}\n\n`;
    message += `Nama: ${fullName}\n`;
    message += `WhatsApp: ${whatsapp}\n`;
    message += `Alamat: ${address}, ${city}, ${postalCode}\n`;
    message += `Pembayaran: ${paymentMethod}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Show confirmation view
    showView('order-confirmation');

    // Set the WhatsApp button
    document.getElementById('whatsappBtn').addEventListener('click', () => {
        window.open(whatsappUrl, '_blank');
    });
}

// Update checkout summary when delivery method changes
document.querySelectorAll('input[name="delivery"]').forEach(radio => {
    radio.addEventListener('change', () => {
        renderCheckoutSummary();
    });
});

// ============================================
// INITIALIZATION
// ============================================
// The DOMContentLoaded event at the top handles initialization
// This is here for clarity and any additional setup
console.log('NOVA Store — initialized');