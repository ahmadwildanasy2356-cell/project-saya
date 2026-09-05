/* ============================================
   NARA COFFEE — PREMIUM DIGITAL COFFEE EXPERIENCE
   script.js
   ============================================ */

// ---------- CONFIGURATION ----------
const WHATSAPP_NUMBER = "6281234567890"; // GANTI dengan nomor WhatsApp Anda

// ---------- IMAGE FALLBACK ----------
function handleImageError(img) {
    if (img.dataset.fallbackApplied === "true") return;
    img.dataset.fallbackApplied = "true";
    img.onerror = null;
    img.src = "assets/images/fallback.jpg";
}

// ---------- MENU DATA ----------
const menuData = [
    {
        id: 1,
        name: "Nara Espresso",
        category: "coffee",
        categoryLabel: "Coffee",
        description: "Our signature espresso blend with notes of dark chocolate and toasted hazelnut. Rich, bold, and perfectly balanced.",
        price: 28000,
        rating: 4.9,
        image: "assets/images/signature-1.jpg"
    },
    {
        id: 2,
        name: "Single Origin Pour Over",
        category: "coffee",
        categoryLabel: "Coffee",
        description: "Ethiopia Yirgacheffe Natural. Bright and complex with wild berry, floral, and chocolate notes. Brewed to order.",
        price: 42000,
        rating: 4.8,
        image: "assets/images/coffee-1.jpg"
    },
    {
        id: 3,
        name: "Cappuccino",
        category: "coffee",
        categoryLabel: "Coffee",
        description: "Classic cappuccino with silky micro-foam and a dusting of cocoa. Comfort in a cup.",
        price: 32000,
        rating: 4.7,
        image: "assets/images/coffee-2.jpg"
    },
    {
        id: 4,
        name: "Nara Signature Latte",
        category: "signature",
        categoryLabel: "Signature",
        description: "Our house latte with brown sugar and a hint of vanilla. Smooth, creamy, and unforgettable.",
        price: 38000,
        rating: 4.9,
        image: "assets/images/signature-1.jpg"
    },
    {
        id: 5,
        name: "Slow Morning Cold Brew",
        category: "signature",
        categoryLabel: "Signature",
        description: "18-hour cold brew with a smooth, low-acid finish. Served over hand-cut ice.",
        price: 35000,
        rating: 4.6,
        image: "assets/images/signature-2.jpg"
    },
    {
        id: 6,
        name: "Matcha Ceremonial",
        category: "non-coffee",
        categoryLabel: "Non-Coffee",
        description: "Premium ceremonial grade matcha whisked to perfection. Earthy, vibrant, and calming.",
        price: 40000,
        rating: 4.5,
        image: "assets/images/coffee-2.jpg"
    },
    {
        id: 7,
        name: "Hot Chocolate",
        category: "non-coffee",
        categoryLabel: "Non-Coffee",
        description: "Rich Belgian chocolate melted into steamed milk. Pure indulgence.",
        price: 30000,
        rating: 4.4,
        image: "assets/images/coffee-1.jpg"
    },
    {
        id: 8,
        name: "Butter Croissant",
        category: "pastry",
        categoryLabel: "Pastry",
        description: "Flaky, buttery, and baked fresh every morning. The perfect companion to your coffee.",
        price: 22000,
        rating: 4.7,
        image: "assets/images/pastry-1.jpg"
    },
    {
        id: 9,
        name: "Cinnamon Roll",
        category: "pastry",
        categoryLabel: "Pastry",
        description: "Soft, gooey, and generously spiced. Served warm with cream cheese frosting.",
        price: 26000,
        rating: 4.6,
        image: "assets/images/pastry-2.jpg"
    },
    {
        id: 10,
        name: "Avocado Toast",
        category: "food",
        categoryLabel: "Food",
        description: "Sourdough topped with smashed avocado, feta, and chili flakes. Simple and satisfying.",
        price: 45000,
        rating: 4.5,
        image: "assets/images/pastry-1.jpg"
    },
    {
        id: 11,
        name: "Granola Bowl",
        category: "food",
        categoryLabel: "Food",
        description: "House-made granola with Greek yogurt, fresh berries, and local honey.",
        price: 48000,
        rating: 4.3,
        image: "assets/images/pastry-2.jpg"
    },
    {
        id: 12,
        name: "Colombia Huila",
        category: "coffee",
        categoryLabel: "Coffee",
        description: "Washed process from Huila region. Balanced and sweet with caramel and red apple notes.",
        price: 39000,
        rating: 4.7,
        image: "assets/images/coffee-2.jpg"
    }
];

// ---------- PHILOSOPHY DATA ----------
const philosophyData = [
    {
        number: "01",
        title: "Sourcing",
        description: "We partner directly with farmers in Ethiopia, Colombia, and Indonesia. Every bean is chosen for its character and quality."
    },
    {
        number: "02",
        title: "Roasting",
        description: "Small-batch roasting in our own facility. We roast to highlight each origin's unique flavor profile, never too dark."
    },
    {
        number: "03",
        title: "Grinding",
        description: "Freshly ground for every single cup. The grind is adjusted based on brew method, humidity, and bean characteristics."
    },
    {
        number: "04",
        title: "Brewing",
        description: "Precise water temperature, careful timing, and patient pouring. Every brew is a meditation in itself."
    },
    {
        number: "05",
        title: "Serving",
        description: "Presented in handcrafted ceramics, served at the perfect temperature. A moment meant to be savored."
    }
];

// ---------- GALLERY IMAGES ----------
const galleryImages = [
    "assets/images/gallery-1.jpg",
    "assets/images/gallery-2.jpg",
    "assets/images/gallery-3.jpg",
    "assets/images/gallery-4.jpg"
];

// ---------- STATE ----------
let currentView = "home";
let currentFilter = "all";
let currentProduct = null;
let currentProductOptions = {
    size: "Regular",
    temperature: "Hot",
    sugar: "Normal",
    extras: [],
    quantity: 1
};
let cart = JSON.parse(localStorage.getItem("naraCart")) || [];
let checkoutStep = 1;
let checkoutData = {
    name: "",
    whatsapp: "",
    method: "Pick Up",
    address: ""
};
let lightboxIndex = 0;

// ---------- DOM ELEMENTS ----------
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");
const mobileNavClose = document.getElementById("mobileNavClose");
const cartIndicator = document.getElementById("cartIndicator");
const cartCount = document.getElementById("cartCount");
const cartOverlay = document.getElementById("cartOverlay");
const cartBackdrop = document.getElementById("cartBackdrop");
const cartClose = document.getElementById("cartClose");
const cartDrawer = document.getElementById("cartDrawer");
const cartBody = document.getElementById("cartBody");
const cartFooter = document.getElementById("cartFooter");
const mobileCartBar = document.getElementById("mobileCartBar");
const mobileCartItems = document.getElementById("mobileCartItems");
const mobileCartTotal = document.getElementById("mobileCartTotal");
const mobileCartViewBtn = document.getElementById("mobileCartViewBtn");
const productOverlay = document.getElementById("productOverlay");
const productBackdrop = document.getElementById("productBackdrop");
const productSheet = document.getElementById("productSheet");
const productClose = document.getElementById("productClose");
const productSheetContent = document.getElementById("productSheetContent");
const checkoutOverlay = document.getElementById("checkoutOverlay");
const checkoutBackdrop = document.getElementById("checkoutBackdrop");
const checkoutClose = document.getElementById("checkoutClose");
const checkoutContent = document.getElementById("checkoutContent");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const menuGrid = document.getElementById("menuGrid");
const philosophyTimeline = document.getElementById("philosophyTimeline");
const reservationForm = document.getElementById("reservationForm");

// ---------- INITIALIZATION ----------
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initHeroParallax();
    initScrollReveal();
    renderPhilosophy();
    renderMenu();
    initMenuFilters();
    initCart();
    updateCartUI();
    initProductModal();
    initCheckout();
    initReservation();
    initGallery();
    initLightbox();
    initMarquee();
    checkReducedMotion();
    handleInitialRoute();
});

// ---------- ROUTING ----------
function handleInitialRoute() {
    const hash = window.location.hash || "#home";
    const viewName = hash.replace("#", "");
    if (isValidView(viewName)) {
        navigateTo(viewName, false);
    } else {
        navigateTo("home", false);
    }
}

function isValidView(name) {
    const views = ["home", "menu", "story", "coffee", "gallery", "reservation", "location"];
    return views.includes(name);
}

function navigateTo(viewName, pushState = true) {
    if (viewName === currentView && pushState) return;
    
    const oldView = document.getElementById(`view-${currentView}`);
    const newView = document.getElementById(`view-${viewName}`);
    
    if (!newView) return;
    
    // Close mobile nav if open
    closeMobileNav();
    
    // Close any open modals
    closeProductModal();
    closeCart();
    closeCheckout();
    closeLightbox();
    
    // Add exit animation to old view
    if (oldView) {
        oldView.classList.add("view-exit");
        oldView.classList.remove("active");
    }
    
    // Show new view
    newView.classList.remove("view-exit");
    newView.classList.add("active");
    
    // Update current view
    currentView = viewName;
    
    // Update URL
    if (pushState) {
        history.pushState({ view: viewName }, "", `#${viewName}`);
    }
    
    // Update active nav link
    updateActiveNav();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "instant" });
    
    // Re-trigger scroll reveal for new view
    initScrollReveal();
}

// ---------- NAVIGATION ----------
function initNavigation() {
    // Hamburger toggle
    hamburger.addEventListener("click", () => {
        const isOpen = mobileNav.classList.contains("open");
        if (isOpen) {
            closeMobileNav();
        } else {
            openMobileNav();
        }
    });
    
    mobileNavClose.addEventListener("click", closeMobileNav);
    
    // Nav link clicks
    document.querySelectorAll("[data-nav-link]").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const href = link.getAttribute("href");
            if (href && href.startsWith("#")) {
                const viewName = href.replace("#", "");
                if (isValidView(viewName)) {
                    navigateTo(viewName);
                }
            }
        });
    });
    
    // Browser back/forward
    window.addEventListener("popstate", (e) => {
        const hash = window.location.hash || "#home";
        const viewName = hash.replace("#", "");
        if (isValidView(viewName)) {
            navigateTo(viewName, false);
        }
    });
    
    // Navbar scroll effect
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}

function openMobileNav() {
    mobileNav.classList.add("open");
    hamburger.classList.add("active");
    hamburger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
}

function closeMobileNav() {
    mobileNav.classList.remove("open");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
}

function updateActiveNav() {
    document.querySelectorAll("[data-nav-link]").forEach(link => {
        const href = link.getAttribute("href");
        if (href) {
            const viewName = href.replace("#", "");
            if (viewName === currentView) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        }
    });
}

// ---------- HERO PARALLAX ----------
function initHeroParallax() {
    const heroImage = document.getElementById("heroImage");
    if (!heroImage) return;
    
    window.addEventListener("scroll", () => {
        if (currentView !== "home") return;
        const scrollY = window.scrollY;
        const hero = document.getElementById("hero");
        if (!hero) return;
        
        const heroRect = hero.getBoundingClientRect();
        if (heroRect.bottom > 0) {
            const offset = scrollY * 0.3;
            heroImage.style.transform = `translateY(${offset}px)`;
        }
    }, { passive: true });
}

// ---------- SCROLL REVEAL ----------
function initScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal:not(.revealed)");
    const activeView = document.querySelector(".view.active");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.revealDelay || 0;
                setTimeout(() => {
                    entry.target.classList.add("revealed");
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });
    
    revealElements.forEach(el => {
        if (activeView && activeView.contains(el)) {
            observer.observe(el);
        } else {
            el.classList.add("revealed");
        }
    });
}

// ---------- PHILOSOPHY RENDER ----------
function renderPhilosophy() {
    if (!philosophyTimeline) return;
    
    philosophyTimeline.innerHTML = philosophyData.map(item => `
        <div class="timeline-item reveal" data-reveal>
            <span class="timeline-number">${item.number}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
    `).join("");
}

// ---------- MENU RENDER ----------
function renderMenu(filter = "all") {
    if (!menuGrid) return;
    
    const filteredItems = filter === "all" 
        ? menuData 
        : menuData.filter(item => item.category === filter);
    
    menuGrid.innerHTML = filteredItems.map(item => `
        <div class="menu-item reveal" data-reveal data-menu-category="${item.category}">
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}" onerror="handleImageError(this)" loading="lazy">
                <span class="menu-item-category">${item.categoryLabel}</span>
            </div>
            <div class="menu-item-content">
                <h3 class="menu-item-name">${item.name}</h3>
                <p class="menu-item-desc">${item.description}</p>
                <div class="menu-item-footer">
                    <span class="menu-item-price">Rp ${item.price.toLocaleString("id-ID")}</span>
                    <span class="menu-item-rating">★ ${item.rating}</span>
                    <button class="menu-item-btn" data-product-id="${item.id}" aria-label="View ${item.name} details">View</button>
                </div>
            </div>
        </div>
    `).join("");
    
    // Add event listeners to product buttons
    document.querySelectorAll(".menu-item-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const productId = parseInt(btn.dataset.productId);
            openProductModal(productId);
        });
    });
    
    // Re-trigger scroll reveal
    initScrollReveal();
}

// ---------- MENU FILTERS ----------
function initMenuFilters() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const filter = btn.dataset.filter;
            
            filterBtns.forEach(b => {
                b.classList.remove("active");
                b.setAttribute("aria-selected", "false");
            });
            
            btn.classList.add("active");
            btn.setAttribute("aria-selected", "true");
            
            currentFilter = filter;
            renderMenu(filter);
        });
    });
}

// ---------- PRODUCT MODAL ----------
function initProductModal() {
    productClose.addEventListener("click", closeProductModal);
    productBackdrop.addEventListener("click", closeProductModal);
}

function openProductModal(productId) {
    const product = menuData.find(item => item.id === productId);
    if (!product) return;
    
    currentProduct = product;
    currentProductOptions = {
        size: "Regular",
        temperature: "Hot",
        sugar: "Normal",
        extras: [],
        quantity: 1
    };
    
    renderProductModal();
    
    productOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeProductModal() {
    productOverlay.classList.remove("open");
    document.body.style.overflow = "";
    currentProduct = null;
}

function renderProductModal() {
    if (!currentProduct) return;
    
    const product = currentProduct;
    const opts = currentProductOptions;
    
    const extrasList = [
        "Extra Shot",
        "Oat Milk",
        "Caramel",
        "Vanilla"
    ];
    
    const totalPrice = calculateProductTotal();
    
    productSheetContent.innerHTML = `
        <div class="product-sheet-image">
            <img src="${product.image}" alt="${product.name}" onerror="handleImageError(this)">
        </div>
        <p class="product-sheet-category">${product.categoryLabel}</p>
        <h3 class="product-sheet-name">${product.name}</h3>
        <p class="product-sheet-rating">★ ${product.rating} rating</p>
        <p class="product-sheet-desc">${product.description}</p>
        <p class="product-sheet-price">Rp ${product.price.toLocaleString("id-ID")}</p>
        
        <div class="product-option-group">
            <label>Size</label>
            <div class="option-buttons">
                <button class="option-btn ${opts.size === "Regular" ? "selected" : ""}" data-option="size" data-value="Regular">Regular</button>
                <button class="option-btn ${opts.size === "Large" ? "selected" : ""}" data-option="size" data-value="Large">Large</button>
            </div>
        </div>
        
        <div class="product-option-group">
            <label>Temperature</label>
            <div class="option-buttons">
                <button class="option-btn ${opts.temperature === "Hot" ? "selected" : ""}" data-option="temperature" data-value="Hot">Hot</button>
                <button class="option-btn ${opts.temperature === "Iced" ? "selected" : ""}" data-option="temperature" data-value="Iced">Iced</button>
            </div>
        </div>
        
        <div class="product-option-group">
            <label>Sugar</label>
            <div class="option-buttons">
                <button class="option-btn ${opts.sugar === "Normal" ? "selected" : ""}" data-option="sugar" data-value="Normal">Normal</button>
                <button class="option-btn ${opts.sugar === "Less" ? "selected" : ""}" data-option="sugar" data-value="Less">Less</button>
                <button class="option-btn ${opts.sugar === "No Sugar" ? "selected" : ""}" data-option="sugar" data-value="No Sugar">No Sugar</button>
            </div>
        </div>
        
        <div class="product-option-group">
            <label>Extras</label>
            <div class="option-buttons">
                ${extrasList.map(extra => `
                    <button class="option-btn ${opts.extras.includes(extra) ? "selected" : ""}" data-option="extras" data-value="${extra}">${extra}</button>
                `).join("")}
            </div>
        </div>
        
        <div class="quantity-control">
            <button class="quantity-btn" id="qtyMinus" aria-label="Decrease quantity">−</button>
            <span class="quantity-display" id="qtyDisplay">${opts.quantity}</span>
            <button class="quantity-btn" id="qtyPlus" aria-label="Increase quantity">+</button>
        </div>
        
        <p class="product-total">Total: Rp ${totalPrice.toLocaleString("id-ID")}</p>
        
        <button class="btn btn-primary btn-block" id="addToCartBtn">Add to Order</button>
    `;
    
    // Option buttons
    document.querySelectorAll("[data-option]").forEach(btn => {
        btn.addEventListener("click", () => {
            const optionType = btn.dataset.option;
            const value = btn.dataset.value;
            
            if (optionType === "extras") {
                if (currentProductOptions.extras.includes(value)) {
                    currentProductOptions.extras = currentProductOptions.extras.filter(e => e !== value);
                } else {
                    currentProductOptions.extras.push(value);
                }
            } else {
                currentProductOptions[optionType] = value;
            }
            
            renderProductModal();
        });
    });
    
    // Quantity
    document.getElementById("qtyMinus").addEventListener("click", () => {
        if (currentProductOptions.quantity > 1) {
            currentProductOptions.quantity--;
            renderProductModal();
        }
    });
    
    document.getElementById("qtyPlus").addEventListener("click", () => {
        currentProductOptions.quantity++;
        renderProductModal();
    });
    
    // Add to cart
    document.getElementById("addToCartBtn").addEventListener("click", () => {
        addToCart();
    });
}

function calculateProductTotal() {
    if (!currentProduct) return 0;
    let price = currentProduct.price;
    if (currentProductOptions.size === "Large") {
        price += 5000;
    }
    currentProductOptions.extras.forEach(extra => {
        if (extra === "Extra Shot") price += 10000;
        if (extra === "Oat Milk") price += 8000;
        if (extra === "Caramel") price += 6000;
        if (extra === "Vanilla") price += 6000;
    });
    return price * currentProductOptions.quantity;
}

// ---------- CART ----------
function initCart() {
    cartIndicator.addEventListener("click", openCart);
    cartClose.addEventListener("click", closeCart);
    cartBackdrop.addEventListener("click", closeCart);
    mobileCartViewBtn.addEventListener("click", openCart);
    
    // ESC key to close cart
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeCart();
            closeProductModal();
            closeCheckout();
            closeLightbox();
        }
    });
}

function addToCart() {
    if (!currentProduct) return;
    
    const cartItem = {
        id: Date.now(),
        productId: currentProduct.id,
        name: currentProduct.name,
        image: currentProduct.image,
        price: currentProduct.price,
        options: { ...currentProductOptions },
        totalPrice: calculateProductTotal(),
        quantity: currentProductOptions.quantity
    };
    
    cart.push(cartItem);
    saveCart();
    updateCartUI();
    closeProductModal();
    
    // Animate cart icon
    cartCount.classList.remove("bump");
    void cartCount.offsetWidth;
    cartCount.classList.add("bump");
    
    // Show a brief toast
    showToast("Added to your order!");
}

function removeFromCart(cartItemId) {
    cart = cart.filter(item => item.id !== cartItemId);
    saveCart();
    updateCartUI();
    renderCart();
}

function updateCartQuantity(cartItemId, delta) {
    const item = cart.find(i => i.id === cartItemId);
    if (!item) return;
    
    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(cartItemId);
        return;
    }
    
    // Recalculate total
    let basePrice = item.price;
    if (item.options.size === "Large") basePrice += 5000;
    item.options.extras.forEach(extra => {
        if (extra === "Extra Shot") basePrice += 10000;
        if (extra === "Oat Milk") basePrice += 8000;
        if (extra === "Caramel") basePrice += 6000;
        if (extra === "Vanilla") basePrice += 6000;
    });
    item.totalPrice = basePrice * item.quantity;
    
    saveCart();
    updateCartUI();
    renderCart();
}

function saveCart() {
    localStorage.setItem("naraCart", JSON.stringify(cart));
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    
    cartCount.textContent = totalItems;
    
    // Mobile cart bar
    if (cart.length > 0 && currentView !== "home") {
        mobileCartBar.classList.add("visible");
        mobileCartItems.textContent = `${totalItems} item${totalItems !== 1 ? "s" : ""}`;
        mobileCartTotal.textContent = `Rp ${totalAmount.toLocaleString("id-ID")}`;
    } else {
        mobileCartBar.classList.remove("visible");
    }
}

function openCart() {
    renderCart();
    cartOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeCart() {
    cartOverlay.classList.remove("open");
    document.body.style.overflow = "";
}

function renderCart() {
    if (cart.length === 0) {
        cartBody.innerHTML = `
            <div class="cart-empty">
                <p>Your order is empty.</p>
                <p style="margin-top: 0.5rem; font-size: 0.8rem;">Explore our menu and add something delicious.</p>
            </div>
        `;
        cartFooter.innerHTML = "";
        return;
    }
    
    cartBody.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" onerror="handleImageError(this)">
            </div>
            <div class="cart-item-info">
                <p class="cart-item-name">${item.name} × ${item.quantity}</p>
                <p class="cart-item-options">
                    ${item.options.size} · ${item.options.temperature} · ${item.options.sugar}
                    ${item.options.extras.length > 0 ? " · " + item.options.extras.join(", ") : ""}
                </p>
                <p class="cart-item-price">Rp ${item.totalPrice.toLocaleString("id-ID")}</p>
            </div>
            <div class="cart-item-actions">
                <button class="cart-item-qty-btn" data-cart-action="minus" data-cart-id="${item.id}" aria-label="Decrease quantity">−</button>
                <span style="font-weight: 600; font-size: 0.9rem;">${item.quantity}</span>
                <button class="cart-item-qty-btn" data-cart-action="plus" data-cart-id="${item.id}" aria-label="Increase quantity">+</button>
                <button class="cart-item-remove" data-cart-action="remove" data-cart-id="${item.id}" aria-label="Remove item">Remove</button>
            </div>
        </div>
    `).join("");
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    
    cartFooter.innerHTML = `
        <div class="cart-total-row">
            <span>Total (${totalItems} items)</span>
            <span class="cart-total-amount">Rp ${totalAmount.toLocaleString("id-ID")}</span>
        </div>
        <button class="btn btn-primary btn-block" id="checkoutBtn">Checkout</button>
    `;
    
    // Cart item actions
    document.querySelectorAll("[data-cart-action]").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.cartAction;
            const cartId = parseInt(btn.dataset.cartId);
            
            if (action === "remove") {
                removeFromCart(cartId);
            } else if (action === "plus") {
                updateCartQuantity(cartId, 1);
            } else if (action === "minus") {
                updateCartQuantity(cartId, -1);
            }
        });
    });
    
    document.getElementById("checkoutBtn").addEventListener("click", () => {
        closeCart();
        openCheckout();
    });
}

// ---------- CHECKOUT ----------
function initCheckout() {
    checkoutClose.addEventListener("click", closeCheckout);
    checkoutBackdrop.addEventListener("click", closeCheckout);
}

function openCheckout() {
    checkoutStep = 1;
    checkoutData = {
        name: "",
        whatsapp: "",
        method: "Pick Up",
        address: ""
    };
    renderCheckout();
    checkoutOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeCheckout() {
    checkoutOverlay.classList.remove("open");
    document.body.style.overflow = "";
}

function renderCheckout() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    
    let html = "";
    
    if (checkoutStep === 1) {
        // Step 1: Your Order
        html = `
            <div class="checkout-step active">
                <h3>Your Order</h3>
                <div class="checkout-item-summary">
                    ${cart.map(item => `
                        <div class="checkout-item-row">
                            <span>${item.name} × ${item.quantity}</span>
                            <span>Rp ${item.totalPrice.toLocaleString("id-ID")}</span>
                        </div>
                    `).join("")}
                    <div class="checkout-item-row" style="border-top: 1px solid var(--color-sand); padding-top: 0.75rem; font-weight: 600;">
                        <span>Total</span>
                        <span>Rp ${totalAmount.toLocaleString("id-ID")}</span>
                    </div>
                </div>
                <button class="btn btn-primary btn-block" id="checkoutNext1">Continue</button>
            </div>
        `;
    } else if (checkoutStep === 2) {
        // Step 2: Customer Details
        html = `
            <div class="checkout-step active">
                <h3>Customer Details</h3>
                <div class="form-group">
                    <label for="checkoutName">Name</label>
                    <input type="text" id="checkoutName" placeholder="Your name" value="${checkoutData.name}" required>
                    <span class="form-error" id="checkoutNameError">Please enter your name</span>
                </div>
                <div class="form-group">
                    <label for="checkoutWhatsapp">WhatsApp</label>
                    <input type="tel" id="checkoutWhatsapp" placeholder="08xxxxxxxxxx" value="${checkoutData.whatsapp}" required>
                    <span class="form-error" id="checkoutWhatsappError">Please enter a valid WhatsApp number</span>
                </div>
                <button class="btn btn-primary btn-block" id="checkoutNext2">Continue</button>
                <button class="btn btn-outline btn-block" id="checkoutBack2" style="margin-top: 0.5rem; color: var(--color-espresso); border-color: var(--color-espresso);">Back</button>
            </div>
        `;
    } else if (checkoutStep === 3) {
        // Step 3: Order Method
        html = `
            <div class="checkout-step active">
                <h3>Order Method</h3>
                <div class="product-option-group">
                    <label>Method</label>
                    <div class="option-buttons">
                        <button class="option-btn ${checkoutData.method === "Pick Up" ? "selected" : ""}" data-method="Pick Up">Pick Up</button>
                        <button class="option-btn ${checkoutData.method === "Delivery" ? "selected" : ""}" data-method="Delivery">Delivery</button>
                    </div>
                </div>
                ${checkoutData.method === "Delivery" ? `
                <div class="form-group">
                    <label for="checkoutAddress">Delivery Address</label>
                    <textarea id="checkoutAddress" placeholder="Your full address" rows="3" required>${checkoutData.address}</textarea>
                    <span class="form-error" id="checkoutAddressError">Please enter your address</span>
                </div>
                ` : ""}
                <button class="btn btn-primary btn-block" id="checkoutNext3">Continue</button>
                <button class="btn btn-outline btn-block" id="checkoutBack3" style="margin-top: 0.5rem; color: var(--color-espresso); border-color: var(--color-espresso);">Back</button>
            </div>
        `;
    } else if (checkoutStep === 4) {
        // Step 4: Confirmation
        html = `
            <div class="checkout-step active">
                <h3>Confirm Your Order</h3>
                <div class="checkout-item-summary">
                    <div class="checkout-item-row">
                        <span>Name</span>
                        <span>${checkoutData.name}</span>
                    </div>
                    <div class="checkout-item-row">
                        <span>WhatsApp</span>
                        <span>${checkoutData.whatsapp}</span>
                    </div>
                    <div class="checkout-item-row">
                        <span>Method</span>
                        <span>${checkoutData.method}</span>
                    </div>
                    ${checkoutData.method === "Delivery" ? `
                    <div class="checkout-item-row">
                        <span>Address</span>
                        <span>${checkoutData.address}</span>
                    </div>
                    ` : ""}
                    <div class="checkout-item-row" style="border-top: 1px solid var(--color-sand); padding-top: 0.75rem; font-weight: 600;">
                        <span>Total</span>
                        <span>Rp ${totalAmount.toLocaleString("id-ID")}</span>
                    </div>
                </div>
                <button class="btn btn-primary btn-block" id="checkoutConfirm">Send Order via WhatsApp</button>
                <button class="btn btn-outline btn-block" id="checkoutBack4" style="margin-top: 0.5rem; color: var(--color-espresso); border-color: var(--color-espresso);">Back</button>
            </div>
        `;
    }
    
    checkoutContent.innerHTML = html;
    
    // Event listeners for checkout steps
    const next1 = document.getElementById("checkoutNext1");
    if (next1) next1.addEventListener("click", () => { checkoutStep = 2; renderCheckout(); });
    
    const next2 = document.getElementById("checkoutNext2");
    if (next2) next2.addEventListener("click", () => {
        const name = document.getElementById("checkoutName").value.trim();
        const whatsapp = document.getElementById("checkoutWhatsapp").value.trim();
        let valid = true;
        
        if (!name) {
            document.getElementById("checkoutNameError").classList.add("visible");
            document.getElementById("checkoutName").classList.add("error");
            valid = false;
        } else {
            document.getElementById("checkoutNameError").classList.remove("visible");
            document.getElementById("checkoutName").classList.remove("error");
        }
        
        if (!whatsapp || whatsapp.length < 8) {
            document.getElementById("checkoutWhatsappError").classList.add("visible");
            document.getElementById("checkoutWhatsapp").classList.add("error");
            valid = false;
        } else {
            document.getElementById("checkoutWhatsappError").classList.remove("visible");
            document.getElementById("checkoutWhatsapp").classList.remove("error");
        }
        
        if (valid) {
            checkoutData.name = name;
            checkoutData.whatsapp = whatsapp;
            checkoutStep = 3;
            renderCheckout();
        }
    });
    
    const back2 = document.getElementById("checkoutBack2");
    if (back2) back2.addEventListener("click", () => { checkoutStep = 1; renderCheckout(); });
    
    const next3 = document.getElementById("checkoutNext3");
    if (next3) next3.addEventListener("click", () => {
        if (checkoutData.method === "Delivery") {
            const address = document.getElementById("checkoutAddress").value.trim();
            if (!address) {
                document.getElementById("checkoutAddressError").classList.add("visible");
                document.getElementById("checkoutAddress").classList.add("error");
                return;
            }
            checkoutData.address = address;
        }
        checkoutStep = 4;
        renderCheckout();
    });
    
    const back3 = document.getElementById("checkoutBack3");
    if (back3) back3.addEventListener("click", () => { checkoutStep = 2; renderCheckout(); });
    
    const back4 = document.getElementById("checkoutBack4");
    if (back4) back4.addEventListener("click", () => { checkoutStep = 3; renderCheckout(); });
    
    const confirm = document.getElementById("checkoutConfirm");
    if (confirm) confirm.addEventListener("click", () => {
        sendWhatsAppOrder();
    });
    
    // Method selection
    document.querySelectorAll("[data-method]").forEach(btn => {
        btn.addEventListener("click", () => {
            checkoutData.method = btn.dataset.method;
            renderCheckout();
        });
    });
}

function sendWhatsAppOrder() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    
    let orderText = `*NARA COFFEE — ORDER*\n\n`;
    orderText += `*Customer:*\n`;
    orderText += `Name: ${checkoutData.name}\n`;
    orderText += `WhatsApp: ${checkoutData.whatsapp}\n`;
    orderText += `Method: ${checkoutData.method}\n`;
    if (checkoutData.method === "Delivery") {
        orderText += `Address: ${checkoutData.address}\n`;
    }
    orderText += `\n*Items:*\n`;
    
    cart.forEach(item => {
        orderText += `\n• ${item.name} × ${item.quantity}\n`;
        orderText += `  ${item.options.size}, ${item.options.temperature}, ${item.options.sugar}`;
        if (item.options.extras.length > 0) {
            orderText += `, ${item.options.extras.join(", ")}`;
        }
        orderText += `\n  Rp ${item.totalPrice.toLocaleString("id-ID")}\n`;
    });
    
    orderText += `\n*Total: Rp ${totalAmount.toLocaleString("id-ID")}*`;
    
    const encodedText = encodeURIComponent(orderText);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    
    window.open(waUrl, "_blank");
    
    // Clear cart after order
    cart = [];
    saveCart();
    updateCartUI();
    closeCheckout();
    showToast("Order sent! We'll confirm shortly.");
}

// ---------- RESERVATION ----------
function initReservation() {
    if (!reservationForm) return;
    
    reservationForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("resName").value.trim();
        const whatsapp = document.getElementById("resWhatsapp").value.trim();
        const date = document.getElementById("resDate").value;
        const time = document.getElementById("resTime").value;
        const people = document.getElementById("resPeople").value;
        const notes = document.getElementById("resNotes").value.trim();
        
        let valid = true;
        
        // Validate name
        if (!name) {
            document.getElementById("resNameError").classList.add("visible");
            document.getElementById("resName").classList.add("error");
            valid = false;
        } else {
            document.getElementById("resNameError").classList.remove("visible");
            document.getElementById("resName").classList.remove("error");
        }
        
        // Validate WhatsApp
        if (!whatsapp || whatsapp.length < 8) {
            document.getElementById("resWhatsappError").classList.add("visible");
            document.getElementById("resWhatsapp").classList.add("error");
            valid = false;
        } else {
            document.getElementById("resWhatsappError").classList.remove("visible");
            document.getElementById("resWhatsapp").classList.remove("error");
        }
        
        // Validate date
        if (!date) {
            document.getElementById("resDateError").classList.add("visible");
            document.getElementById("resDate").classList.add("error");
            valid = false;
        } else {
            document.getElementById("resDateError").classList.remove("visible");
            document.getElementById("resDate").classList.remove("error");
        }
        
        // Validate time
        if (!time) {
            document.getElementById("resTimeError").classList.add("visible");
            document.getElementById("resTime").classList.add("error");
            valid = false;
        } else {
            document.getElementById("resTimeError").classList.remove("visible");
            document.getElementById("resTime").classList.remove("error");
        }
        
        // Validate people
        if (!people) {
            document.getElementById("resPeopleError").classList.add("visible");
            document.getElementById("resPeople").classList.add("error");
            valid = false;
        } else {
            document.getElementById("resPeopleError").classList.remove("visible");
            document.getElementById("resPeople").classList.remove("error");
        }
        
        if (valid) {
            const reservationText = `*NARA COFFEE — RESERVATION*\n\nName: ${name}\nWhatsApp: ${whatsapp}\nDate: ${date}\nTime: ${time}\nPeople: ${people}\nNotes: ${notes || "-"}`;
            const encodedText = encodeURIComponent(reservationText);
            const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
            
            window.open(waUrl, "_blank");
            
            document.getElementById("reservationSuccess").style.display = "block";
            
            // Reset form
            reservationForm.reset();
            
            setTimeout(() => {
                document.getElementById("reservationSuccess").style.display = "none";
            }, 5000);
            
            showToast("Reservation sent!");
        }
    });
    
    // Remove error on input
    document.querySelectorAll("#reservationForm input, #reservationForm select").forEach(el => {
        el.addEventListener("input", () => {
            el.classList.remove("error");
            const errorEl = document.querySelector(`#${el.id}Error`);
            if (errorEl) errorEl.classList.remove("visible");
        });
        el.addEventListener("change", () => {
            el.classList.remove("error");
            const errorEl = document.querySelector(`#${el.id}Error`);
            if (errorEl) errorEl.classList.remove("visible");
        });
    });
}

// ---------- GALLERY ----------
function initGallery() {
    const galleryItems = document.querySelectorAll(".gallery-item");
    
    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            const index = parseInt(item.dataset.gallery);
            if (!isNaN(index)) {
                openLightbox(index);
            }
        });
    });
}

// ---------- LIGHTBOX ----------
function initLightbox() {
    lightboxClose.addEventListener("click", closeLightbox);
    lightboxPrev.addEventListener("click", () => navigateLightbox(-1));
    lightboxNext.addEventListener("click", () => navigateLightbox(1));
    
    document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("open")) return;
        
        if (e.key === "Escape") {
            closeLightbox();
        } else if (e.key === "ArrowLeft") {
            navigateLightbox(-1);
        } else if (e.key === "ArrowRight") {
            navigateLightbox(1);
        }
    });
}

function openLightbox(index) {
    lightboxIndex = index;
    updateLightboxImage();
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
}

function navigateLightbox(direction) {
    lightboxIndex = (lightboxIndex + direction + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
}

function updateLightboxImage() {
    lightboxImage.src = galleryImages[lightboxIndex];
    lightboxImage.alt = `Gallery image ${lightboxIndex + 1}`;
    lightboxImage.onerror = function() {
        handleImageError(this);
    };
}

// ---------- MARQUEE ----------
function initMarquee() {
    const track = document.getElementById("marqueeTrack");
    if (!track) return;
    
    // The CSS animation handles the marquee
    // Just ensure the track has double content for seamless loop
    // This is already done in the HTML
}

// ---------- TOAST ----------
function showToast(message) {
    let toast = document.createElement("div");
    toast.style.cssText = `
        position: fixed;
        bottom: 80px;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--color-espresso);
        color: var(--color-cream);
        padding: 1rem 2rem;
        border-radius: var(--radius-sm);
        font-size: 0.85rem;
        font-weight: 500;
        letter-spacing: 0.05em;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s ease, transform 0.3s ease;
        text-align: center;
        max-width: 90vw;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    requestAnimationFrame(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translateX(-50%) translateY(-8px)";
    });
    
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(-50%) translateY(0)";
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 2500);
}

// ---------- REDUCED MOTION ----------
function checkReducedMotion() {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    
    if (prefersReducedMotion.matches) {
        const marqueeTrack = document.getElementById("marqueeTrack");
        if (marqueeTrack) {
            marqueeTrack.style.animation = "none";
        }
        
        // Disable parallax
        const heroImage = document.getElementById("heroImage");
        if (heroImage) {
            heroImage.style.transform = "none";
        }
    }
}

// ---------- KEYBOARD SHORTCUTS ----------
document.addEventListener("keydown", (e) => {
    // Number keys to navigate views
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "SELECT") return;
    
    const keyMap = {
        "1": "home",
        "2": "menu",
        "3": "story",
        "4": "coffee",
        "5": "gallery",
        "6": "reservation",
        "7": "location"
    };
    
    if (keyMap[e.key] && isValidView(keyMap[e.key])) {
        navigateTo(keyMap[e.key]);
    }
});