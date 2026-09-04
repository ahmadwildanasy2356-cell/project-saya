/* ===================================================
   GEPREK NUSANTARA — SCRIPT.JS
   Premium F&B Website — Single Page Application
================================================== */

// ============ KONFIGURASI ============
const WHATSAPP_NUMBER = "6281259730289"; // Ganti dengan nomor WhatsApp Anda
const IMAGE_BASE = "assets/images/";
const FALLBACK_IMAGE = IMAGE_BASE + "fallback.jpg";

// ============ DATA MENU ============
const MENU_ITEMS = [
    {
        id: 1,
        name: "Geprek Original",
        category: "geprek",
        price: 20000,
        rating: 4.8,
        desc: "Ayam crispy digeprek dengan sambal bawang khas Nusantara.",
        image: IMAGE_BASE + "geprek-original.png",
    },
    {
        id: 2,
        name: "Geprek Keju",
        category: "geprek",
        price: 24000,
        rating: 4.9,
        desc: "Geprek original dengan lelehan keju melimpah.",
        image: IMAGE_BASE + "geprek-keju.png",
    },
    {
        id: 3,
        name: "Geprek Mozzarella",
        category: "geprek",
        price: 28000,
        rating: 4.9,
        desc: "Geprek dengan mozzarella premium yang meleleh.",
        image: IMAGE_BASE + "geprek-mozzarella.png",
    },
    {
        id: 4,
        name: "Geprek Matah",
        category: "geprek",
        price: 26000,
        rating: 4.8,
        desc: "Ayam crispy dengan sambal matah segar khas Bali.",
        image: IMAGE_BASE + "geprek-matah.png",
    },
    {
        id: 5,
        name: "Paket Hemat 1",
        category: "paket",
        price: 25000,
        rating: 4.7,
        desc: "Geprek Original + Nasi + Es Teh.",
        image: IMAGE_BASE + "paket-hemat-1.png",
    },
    {
        id: 6,
        name: "Paket Hemat 2",
        category: "paket",
        price: 30000,
        rating: 4.8,
        desc: "Geprek Keju + Nasi + Telur + Es Teh.",
        image: IMAGE_BASE + "paket-hemat-2.png",
    },
    {
        id: 7,
        name: "Telur",
        category: "extra",
        price: 5000,
        rating: 4.5,
        desc: "Telur dadar / ceplok tambahan.",
        image: IMAGE_BASE + "telur.png",
    },
    {
        id: 8,
        name: "Extra Sambal",
        category: "extra",
        price: 6000,
        rating: 4.9,
        desc: "Sambal extra dengan level sesuai selera.",
        image: IMAGE_BASE + "extra-sambal.png",
    },
    {
        id: 9,
        name: "Keju",
        category: "extra",
        price: 8000,
        rating: 4.8,
        desc: "Tambahan keju parut / slice.",
        image: IMAGE_BASE + "keju.png",
    },
    {
        id: 10,
        name: "Extra Ayam",
        category: "extra",
        price: 15000,
        rating: 4.9,
        desc: "Ayam crispy tambahan tanpa sambal.",
        image: IMAGE_BASE + "extra-ayam.png",
    },
    {
        id: 11,
        name: "Es Teh",
        category: "minuman",
        price: 7000,
        rating: 4.7,
        desc: "Es teh manis segar.",
        image: IMAGE_BASE + "es-teh.png",
    },
    {
        id: 12,
        name: "Es Jeruk",
        category: "minuman",
        price: 9000,
        rating: 4.8,
        desc: "Es jeruk peras dengan rasa asli.",
        image: IMAGE_BASE + "es-jeruk.png",
    },
    {
        id: 13,
        name: "Air Mineral",
        category: "minuman",
        price: 5000,
        rating: 4.6,
        desc: "Air mineral botol 500ml.",
        image: IMAGE_BASE + "air-mineral.png",
    },
];

const LEVELS = [
    { value: 0, label: "Tidak Pedas" },
    { value: 1, label: "Pedas Ringan" },
    { value: 2, label: "Pedas" },
    { value: 3, label: "Pedas Sedang" },
    { value: 4, label: "Pedas Banget" },
    { value: 5, label: "Sangat Pedas" },
];

const EXTRAS = [
    { value: "telur", label: "Telur", price: 5000 },
    { value: "keju", label: "Keju", price: 8000 },
    { value: "extra_ayam", label: "Extra Ayam", price: 15000 },
    { value: "extra_sambal", label: "Extra Sambal", price: 6000 },
];

// ============ STATE ============
let cart = JSON.parse(localStorage.getItem("geprek_cart")) || [];
let currentView = "home";
let activeCategory = "all";
let selectedProduct = null;
let productQuantity = 1;
let selectedLevel = 2;
let selectedExtras = [];
let productNote = "";
let checkoutStep = 1;
let checkoutData = {
    name: "",
    phone: "",
    address: "",
    method: "pickup", // pickup / delivery
};

// ============ DOM ELEMENTS ============
const views = document.querySelectorAll(".page-view");
const navLinks = document.querySelectorAll(".nav-link");
const mobileNavLinks = document.querySelectorAll(".nav-link-mobile");
const navLogo = document.querySelector(".navbar-logo");
const btnHamburger = document.getElementById("btn-hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const btnCloseMenu = document.getElementById("btn-close-menu");
const btnCartDesktop = document.getElementById("btn-cart-desktop");
const cartBadgeDesktop = document.getElementById("cart-badge-desktop");
const floatingCartBar = document.getElementById("floating-cart-bar");
const btnFloatingCart = document.getElementById("btn-floating-cart");
const productGrid = document.getElementById("product-grid");
const categoryFilter = document.getElementById("category-filter");
const productModal = document.getElementById("product-modal");
const productSheet = document.getElementById("product-sheet");
const productDetailContent = document.getElementById("product-detail-content");
const cartModal = document.getElementById("cart-modal");
const cartSheet = document.getElementById("cart-sheet");
const cartContent = document.getElementById("cart-content");
const checkoutModal = document.getElementById("checkout-modal");
const checkoutSheet = document.getElementById("checkout-sheet");
const checkoutContent = document.getElementById("checkout-content");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.getElementById("lightbox-close");
const contactForm = document.getElementById("contact-form");

// ============ INIT ============
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    updateCartUI();
    initHashRouter();
    initEventListeners();
    initRevealObserver();
    handleInitialView();
    // Sembunyikan floating cart awalnya jika keranjang kosong
    updateFloatingCartVisibility();
});

// ============ HASH ROUTER ============
function initHashRouter() {
    window.addEventListener("hashchange", () => {
        const hash = window.location.hash.replace("#", "") || "home";
        navigateTo(hash, false);
    });

    // Tangkap klik pada link dengan data-view
    document.querySelectorAll("[data-view]").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const view = link.getAttribute("data-view");
            if (view) {
                navigateTo(view, true);
                // Tutup mobile menu jika terbuka
                closeMobileMenu();
            }
        });
    });

    // Tombol back/forward
    window.addEventListener("popstate", () => {
        const hash = window.location.hash.replace("#", "") || "home";
        navigateTo(hash, false);
    });
}

function handleInitialView() {
    const hash = window.location.hash.replace("#", "") || "home";
    navigateTo(hash, false);
}

function navigateTo(view, updateHash = true) {
    if (view === currentView) return;

    const currentElement = document.getElementById(`view-${currentView}`);
    const nextElement = document.getElementById(`view-${view}`);

    if (!nextElement) return;

    // Tutup semua modal
    closeAllModals();

    // Mulai transisi keluar
    if (currentElement) {
        currentElement.classList.add("exit");
        currentElement.classList.remove("active");
    }

    // Setelah waktu transisi, tampilkan view baru
    setTimeout(() => {
        if (currentElement) {
            currentElement.classList.remove("exit");
            currentElement.style.display = "none";
        }
        nextElement.style.display = "block";
        // Force reflow untuk animasi
        void nextElement.offsetWidth;
        nextElement.classList.add("active");

        currentView = view;

        // Update hash tanpa reload
        if (updateHash) {
            const newHash = `#${view}`;
            if (window.location.hash !== newHash) {
                history.pushState(null, "", newHash);
            }
        }

        // Update nav active state
        updateNavActive(view);
        updateMobileNavActive(view);

        // Scroll ke atas
        window.scrollTo({ top: 0, behavior: "auto" });

        // Reset category jika pindah ke menu
        if (view === "menu") {
            activeCategory = "all";
            updateCategoryButtons();
            renderProducts();
        }

        // Trigger reveal animations
        initRevealObserver();

    }, 300); // Sesuaikan dengan durasi transisi
}

function updateNavActive(view) {
    navLinks.forEach(link => {
        const linkView = link.getAttribute("data-view");
        link.classList.toggle("active", linkView === view);
    });
}

function updateMobileNavActive(view) {
    mobileNavLinks.forEach(link => {
        const linkView = link.getAttribute("data-view");
        link.classList.toggle("active", linkView === view);
    });
}

// ============ MOBILE MENU ============
function openMobileMenu() {
    mobileMenu.classList.add("open");
    btnHamburger.classList.add("active");
    btnHamburger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
    mobileMenu.classList.remove("open");
    btnHamburger.classList.remove("active");
    btnHamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
}

btnHamburger.addEventListener("click", () => {
    if (mobileMenu.classList.contains("open")) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
});

btnCloseMenu.addEventListener("click", closeMobileMenu);
mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) closeMobileMenu();
});

// ============ PRODUK & KATEGORI ============
function renderProducts() {
    if (!productGrid) return;
    const filtered = MENU_ITEMS.filter(item => activeCategory === "all" || item.category === activeCategory);
    productGrid.innerHTML = filtered.map(item => `
        <div class="product-card" data-id="${item.id}" role="button" tabindex="0" aria-label="${item.name}">
            <img src="${item.image}" alt="${item.name}" class="product-card-image" onerror="handleImageError(this)" loading="lazy">
            <div class="product-card-body">
                <div class="product-card-rating">★ ${item.rating}</div>
                <div class="product-card-category">${item.category}</div>
                <h3 class="product-card-name">${item.name}</h3>
                <p class="product-card-desc">${item.desc}</p>
                <div class="product-card-price">Rp ${item.price.toLocaleString('id-ID')}</div>
                <div class="product-card-footer">
                    <span>Klik untuk detail</span>
                    <button class="btn-add" data-id="${item.id}" aria-label="Tambah ${item.name} ke keranjang">+</button>
                </div>
            </div>
        </div>
    `).join("");

    // Event listener untuk card (buka detail)
    productGrid.querySelectorAll(".product-card").forEach(card => {
        card.addEventListener("click", (e) => {
            if (e.target.closest(".btn-add")) return; // tombol tambah tidak buka detail
            const id = parseInt(card.getAttribute("data-id"));
            openProductDetail(id);
        });
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const id = parseInt(card.getAttribute("data-id"));
                openProductDetail(id);
            }
        });
    });

    // Event listener untuk tombol tambah cepat
    productGrid.querySelectorAll(".btn-add").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute("data-id"));
            addToCartQuick(id);
        });
    });
}

function updateCategoryButtons() {
    categoryFilter.querySelectorAll(".category-btn").forEach(btn => {
        const cat = btn.getAttribute("data-category");
        btn.classList.toggle("active", cat === activeCategory);
        btn.setAttribute("aria-selected", cat === activeCategory ? "true" : "false");
    });
}

categoryFilter.addEventListener("click", (e) => {
    const btn = e.target.closest(".category-btn");
    if (!btn) return;
    activeCategory = btn.getAttribute("data-category");
    updateCategoryButtons();
    renderProducts();
});

// ============ DETAIL PRODUK ============
function openProductDetail(id) {
    const product = MENU_ITEMS.find(item => item.id === id);
    if (!product) return;

    selectedProduct = product;
    productQuantity = 1;
    selectedLevel = 2;
    selectedExtras = [];
    productNote = "";

    renderProductDetail(product);
    openModal(productModal);
}

function renderProductDetail(product) {
    const totalPrice = calculateProductTotal();
    productDetailContent.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-detail-image" onerror="handleImageError(this)">
        <div class="product-detail-rating">★ ${product.rating}</div>
        <h3 class="product-detail-name">${product.name}</h3>
        <p class="product-detail-desc">${product.desc}</p>
        <div class="product-detail-price">Rp ${product.price.toLocaleString('id-ID')}</div>

        <div class="product-detail-section">
            <h4>Level Pedas</h4>
            <div class="level-options" id="level-options">
                ${LEVELS.map(level => `
                    <button class="level-btn ${level.value === selectedLevel ? 'active' : ''}" data-level="${level.value}">${level.label}</button>
                `).join("")}
            </div>
        </div>

        <div class="product-detail-section">
            <h4>Extra (opsional)</h4>
            <div class="extra-options" id="extra-options">
                ${EXTRAS.map(extra => `
                    <button class="extra-btn ${selectedExtras.includes(extra.value) ? 'active' : ''}" data-extra="${extra.value}">${extra.label} (+Rp ${extra.price.toLocaleString('id-ID')})</button>
                `).join("")}
            </div>
        </div>

        <div class="product-detail-section">
            <h4>Catatan Pesanan</h4>
            <input type="text" class="note-input" id="product-note" placeholder="Contoh: sambal terpisah, tanpa bawang, dll." value="${productNote}">
        </div>

        <div class="quantity-control">
            <button class="qty-btn" id="qty-minus" aria-label="Kurangi jumlah">−</button>
            <span class="qty-value" id="qty-value">${productQuantity}</span>
            <button class="qty-btn" id="qty-plus" aria-label="Tambah jumlah">+</button>
        </div>

        <div class="total-price">Total: Rp <span id="product-total-price">${totalPrice.toLocaleString('id-ID')}</span></div>

        <button class="btn btn-primary btn-block btn-add-to-cart" id="btn-add-to-cart">Tambah ke Keranjang</button>
    `;

    // Event listeners untuk level
    productDetailContent.querySelectorAll(".level-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            selectedLevel = parseInt(btn.getAttribute("data-level"));
            productDetailContent.querySelectorAll(".level-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            updateProductTotalDisplay();
        });
    });

    // Event untuk extra
    productDetailContent.querySelectorAll(".extra-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const extraVal = btn.getAttribute("data-extra");
            if (selectedExtras.includes(extraVal)) {
                selectedExtras = selectedExtras.filter(e => e !== extraVal);
                btn.classList.remove("active");
            } else {
                selectedExtras.push(extraVal);
                btn.classList.add("active");
            }
            updateProductTotalDisplay();
        });
    });

    // Note input
    const noteInput = productDetailContent.querySelector("#product-note");
    noteInput.addEventListener("input", () => {
        productNote = noteInput.value;
    });

    // Quantity
    productDetailContent.querySelector("#qty-minus").addEventListener("click", () => {
        if (productQuantity > 1) {
            productQuantity--;
            productDetailContent.querySelector("#qty-value").textContent = productQuantity;
            updateProductTotalDisplay();
        }
    });
    productDetailContent.querySelector("#qty-plus").addEventListener("click", () => {
        productQuantity++;
        productDetailContent.querySelector("#qty-value").textContent = productQuantity;
        updateProductTotalDisplay();
    });

    // Add to cart
    productDetailContent.querySelector("#btn-add-to-cart").addEventListener("click", () => {
        addToCartDetailed(product, selectedLevel, selectedExtras, productQuantity, productNote);
        closeModal(productModal);
        showToast("Ditambahkan ke keranjang");
    });
}

function calculateProductTotal() {
    if (!selectedProduct) return 0;
    let total = selectedProduct.price;
    selectedExtras.forEach(extraVal => {
        const extra = EXTRAS.find(e => e.value === extraVal);
        if (extra) total += extra.price;
    });
    return total * productQuantity;
}

function updateProductTotalDisplay() {
    const total = calculateProductTotal();
    const totalEl = productDetailContent.querySelector("#product-total-price");
    if (totalEl) totalEl.textContent = total.toLocaleString('id-ID');
}

// ============ KERANJANG ============
function addToCartQuick(id) {
    const product = MENU_ITEMS.find(item => item.id === id);
    if (!product) return;
    const existing = cart.find(item => item.id === product.id && !item.level && !item.extras && !item.note);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
            level: null,
            extras: [],
            note: "",
        });
    }
    saveCart();
    showToast("Ditambahkan ke keranjang");
}

function addToCartDetailed(product, level, extras, quantity, note) {
    const existing = cart.find(item =>
        item.id === product.id &&
        item.level === level &&
        JSON.stringify(item.extras) === JSON.stringify(extras) &&
        item.note === note
    );
    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity,
            level: level,
            extras: extras,
            note: note,
        });
    }
    saveCart();
}

function saveCart() {
    localStorage.setItem("geprek_cart", JSON.stringify(cart));
    updateCartUI();
    updateFloatingCartVisibility();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartBadgeDesktop.textContent = totalItems;
    document.getElementById("floating-cart-count").textContent = `${totalItems} Item`;
    document.getElementById("floating-cart-total").textContent = `Rp ${totalPrice.toLocaleString('id-ID')}`;

    if (cart.length === 0) {
        floatingCartBar.classList.remove("visible");
    } else {
        floatingCartBar.classList.add("visible");
    }

    // Update cart modal jika terbuka
    if (cartModal.classList.contains("open")) {
        renderCart();
    }
}

function updateFloatingCartVisibility() {
    if (cart.length === 0) {
        floatingCartBar.classList.remove("visible");
    } else {
        floatingCartBar.classList.add("visible");
    }
}

// ============ RENDER CART ============
function renderCart() {
    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div style="text-align:center;padding:40px 0;">
                <p style="font-size:1.2rem;margin-bottom:16px;">Keranjang kosong</p>
                <a href="#menu" class="btn btn-primary" data-view="menu">Lihat Menu</a>
            </div>
        `;
        cartContent.querySelector("[data-view]").addEventListener("click", (e) => {
            e.preventDefault();
            closeModal(cartModal);
            navigateTo("menu", true);
        });
        return;
    }

    let itemsHtml = cart.map((item, index) => {
        const extrasText = item.extras && item.extras.length > 0
            ? item.extras.map(e => EXTRAS.find(extra => extra.value === e)?.label || e).join(", ")
            : "";
        const levelText = item.level !== null && item.level !== undefined ? LEVELS.find(l => l.value === item.level)?.label || "" : "";
        const noteText = item.note ? `Catatan: ${item.note}` : "";
        const totalItem = item.price * item.quantity;
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="handleImageError(this)">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">Rp ${item.price.toLocaleString('id-ID')}</div>
                    ${levelText ? `<div style="font-size:0.8rem;color:var(--text-light)">Level: ${levelText}</div>` : ''}
                    ${extrasText ? `<div style="font-size:0.8rem;color:var(--text-light)">Extra: ${extrasText}</div>` : ''}
                    ${noteText ? `<div style="font-size:0.8rem;color:var(--text-light)">${noteText}</div>` : ''}
                </div>
                <div class="cart-item-qty">
                    <button class="qty-btn" data-cart-index="${index}" data-action="minus">−</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" data-cart-index="${index}" data-action="plus">+</button>
                </div>
                <div class="cart-item-total">Rp ${totalItem.toLocaleString('id-ID')}</div>
            </div>
        `;
    }).join("");

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartContent.innerHTML = `
        <h3 style="font-size:1.5rem;font-weight:700;margin-bottom:16px;">Keranjang (${totalItems} item)</h3>
        <div class="cart-list">${itemsHtml}</div>
        <div class="cart-total">
            <span>Total</span>
            <span>Rp ${totalPrice.toLocaleString('id-ID')}</span>
        </div>
        <button class="btn btn-primary btn-block btn-checkout-next" id="btn-cart-checkout">Lanjut ke Checkout</button>
    `;

    // Event listeners untuk qty
    cartContent.querySelectorAll(".qty-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const index = parseInt(btn.getAttribute("data-cart-index"));
            const action = btn.getAttribute("data-action");
            if (action === "plus") {
                cart[index].quantity += 1;
            } else if (action === "minus") {
                cart[index].quantity -= 1;
                if (cart[index].quantity <= 0) {
                    cart.splice(index, 1);
                }
            }
            saveCart();
            renderCart();
        });
    });

    cartContent.querySelector("#btn-cart-checkout").addEventListener("click", () => {
        closeModal(cartModal);
        openCheckout();
    });
}

// ============ CHECKOUT ============
function openCheckout() {
    checkoutStep = 1;
    checkoutData = { name: "", phone: "", address: "", method: "pickup" };
    renderCheckout();
    openModal(checkoutModal);
}

function renderCheckout() {
    let html = "";
    if (checkoutStep === 1) {
        // Ringkasan pesanan
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        html = `
            <h3 class="checkout-step-title">Konfirmasi Pesanan</h3>
            <div style="margin-bottom:16px;">
                ${cart.map(item => `
                    <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #eee;">
                        <span>${item.name} x${item.quantity}</span>
                        <span>Rp ${(item.price * item.quantity).toLocaleString('id-ID')}</span>
                    </div>
                `).join("")}
                <div style="display:flex;justify-content:space-between;font-weight:700;padding-top:12px;">
                    <span>Total</span>
                    <span>Rp ${totalPrice.toLocaleString('id-ID')}</span>
                </div>
            </div>
            <button class="btn btn-primary btn-block btn-checkout-next" id="btn-step-2">Lanjut</button>
        `;
    } else if (checkoutStep === 2) {
        html = `
            <h3 class="checkout-step-title">Data Pembeli</h3>
            <div class="checkout-form-group">
                <label for="checkout-name">Nama</label>
                <input type="text" id="checkout-name" value="${checkoutData.name}" placeholder="Nama lengkap">
            </div>
            <div class="checkout-form-group">
                <label for="checkout-phone">No. WhatsApp</label>
                <input type="tel" id="checkout-phone" value="${checkoutData.phone}" placeholder="08xxxxxxxxxx">
            </div>
            <button class="btn btn-primary btn-block btn-checkout-next" id="btn-step-3">Lanjut</button>
        `;
    } else if (checkoutStep === 3) {
        html = `
            <h3 class="checkout-step-title">Metode Pesanan</h3>
            <div style="display:flex;gap:12px;margin-bottom:20px;">
                <button class="btn ${checkoutData.method === 'pickup' ? 'btn-primary' : 'btn-outline'}" id="method-pickup">Ambil di Outlet</button>
                <button class="btn ${checkoutData.method === 'delivery' ? 'btn-primary' : 'btn-outline'}" id="method-delivery">Antar</button>
            </div>
            ${checkoutData.method === 'delivery' ? `
                <div class="checkout-form-group">
                    <label for="checkout-address">Alamat Pengiriman</label>
                    <textarea id="checkout-address" rows="3" placeholder="Alamat lengkap">${checkoutData.address}</textarea>
                </div>
            ` : ''}
            <button class="btn btn-primary btn-block btn-checkout-next" id="btn-step-4">Lanjut</button>
        `;
    } else if (checkoutStep === 4) {
        const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        html = `
            <h3 class="checkout-step-title">Konfirmasi Akhir</h3>
            <div style="margin-bottom:16px;line-height:1.8;">
                <p><strong>Nama:</strong> ${checkoutData.name}</p>
                <p><strong>WhatsApp:</strong> ${checkoutData.phone}</p>
                <p><strong>Metode:</strong> ${checkoutData.method === 'pickup' ? 'Ambil di Outlet' : 'Antar'}</p>
                ${checkoutData.method === 'delivery' ? `<p><strong>Alamat:</strong> ${checkoutData.address}</p>` : ''}
                <p><strong>Total:</strong> Rp ${totalPrice.toLocaleString('id-ID')}</p>
            </div>
            <button class="btn btn-primary btn-block" id="btn-send-whatsapp">Kirim via WhatsApp</button>
        `;
    }

    checkoutContent.innerHTML = html;

    // Event listeners sesuai step
    if (checkoutStep === 1) {
        checkoutContent.querySelector("#btn-step-2").addEventListener("click", () => {
            checkoutStep = 2;
            renderCheckout();
        });
    } else if (checkoutStep === 2) {
        checkoutContent.querySelector("#btn-step-3").addEventListener("click", () => {
            const name = checkoutContent.querySelector("#checkout-name").value.trim();
            const phone = checkoutContent.querySelector("#checkout-phone").value.trim();
            if (!name || !phone) {
                alert("Mohon isi nama dan nomor WhatsApp.");
                return;
            }
            checkoutData.name = name;
            checkoutData.phone = phone;
            checkoutStep = 3;
            renderCheckout();
        });
    } else if (checkoutStep === 3) {
        checkoutContent.querySelector("#method-pickup").addEventListener("click", () => {
            checkoutData.method = "pickup";
            renderCheckout();
        });
        checkoutContent.querySelector("#method-delivery").addEventListener("click", () => {
            checkoutData.method = "delivery";
            renderCheckout();
        });
        checkoutContent.querySelector("#btn-step-4").addEventListener("click", () => {
            if (checkoutData.method === "delivery") {
                const address = checkoutContent.querySelector("#checkout-address").value.trim();
                if (!address) {
                    alert("Mohon isi alamat pengiriman.");
                    return;
                }
                checkoutData.address = address;
            }
            checkoutStep = 4;
            renderCheckout();
        });
    } else if (checkoutStep === 4) {
        checkoutContent.querySelector("#btn-send-whatsapp").addEventListener("click", () => {
            sendWhatsApp();
        });
    }
}

function sendWhatsApp() {
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemsText = cart.map(item => {
        const level = item.level !== null ? LEVELS.find(l => l.value === item.level)?.label : "";
        const extras = item.extras && item.extras.length > 0 ? item.extras.map(e => EXTRAS.find(extra => extra.value === e)?.label).join(", ") : "";
        const note = item.note ? ` (Catatan: ${item.note})` : "";
        return `• ${item.name} x${item.quantity}${level ? ` (${level})` : ""}${extras ? ` + ${extras}` : ""}${note} = Rp ${(item.price * item.quantity).toLocaleString('id-ID')}`;
    }).join("\n");

    const message = `Halo Geprek Nusantara! Saya ingin memesan:\n\n${itemsText}\n\nTotal: Rp ${totalPrice.toLocaleString('id-ID')}\n\nNama: ${checkoutData.name}\nNo. HP: ${checkoutData.phone}\nMetode: ${checkoutData.method === 'pickup' ? 'Ambil di Outlet' : 'Antar'}\n${checkoutData.method === 'delivery' ? `Alamat: ${checkoutData.address}\n` : ''}\nTerima kasih.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    // Reset cart setelah kirim
    cart = [];
    saveCart();
    closeModal(checkoutModal);
    showToast("Pesanan dikirim ke WhatsApp");
}

// ============ MODAL HELPERS ============
function openModal(modal) {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeModal(modal) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

function closeAllModals() {
    [productModal, cartModal, checkoutModal, lightbox].forEach(modal => {
        if (modal.classList.contains("open")) closeModal(modal);
    });
}

// Event: tombol close modal
document.querySelectorAll("[data-close-modal]").forEach(btn => {
    btn.addEventListener("click", () => closeModal(productModal));
});
document.querySelectorAll("[data-close-cart]").forEach(btn => {
    btn.addEventListener("click", () => closeModal(cartModal));
});
document.querySelectorAll("[data-close-checkout]").forEach(btn => {
    btn.addEventListener("click", () => closeModal(checkoutModal));
});

// ESC untuk menutup modal
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeAllModals();
        closeMobileMenu();
    }
});

// ============ KERANJANG BUTTONS ============
btnCartDesktop.addEventListener("click", () => {
    renderCart();
    openModal(cartModal);
});

btnFloatingCart.addEventListener("click", () => {
    renderCart();
    openModal(cartModal);
});

// ============ LIGHTBOX ============
document.querySelectorAll(".gallery-image").forEach(img => {
    img.addEventListener("click", () => {
        lightboxImage.src = img.src;
        lightbox.classList.add("open");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    });
});

lightboxClose.addEventListener("click", () => {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove("open");
        lightbox.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }
});

// ============ CONTACT FORM ============
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contact-name").value.trim();
    const phone = document.getElementById("contact-phone").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    if (!name || !phone || !message) {
        alert("Mohon isi semua field.");
        return;
    }

    const waMessage = `Halo Geprek Nusantara! Saya ${name} (${phone}).\n\nPesan: ${message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;
    window.open(url, "_blank");
    contactForm.reset();
    showToast("Pesan dikirim ke WhatsApp");
});

// ============ TOAST ============
function showToast(message) {
    // Buat elemen toast sederhana
    const toast = document.createElement("div");
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--dark);
        color: white;
        padding: 16px 24px;
        border-radius: 30px;
        z-index: 2000;
        font-weight: 600;
        box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
        max-width: 90vw;
        text-align: center;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    requestAnimationFrame(() => {
        toast.style.opacity = "1";
    });
    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// ============ REVEAL OBSERVER ============
function initRevealObserver() {
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
}

// ============ IMAGE FALLBACK ============
function handleImageError(img) {
    if (img.dataset.fallbackApplied === "true") return;
    img.dataset.fallbackApplied = "true";
    img.onerror = null;
    img.src = FALLBACK_IMAGE;
}

// ============ NAVIGASI FOOTER ============
document.querySelectorAll(".footer-link, .footer-logo").forEach(link => {
    link.addEventListener("click", (e) => {
        const view = link.getAttribute("data-view");
        if (view) {
            e.preventDefault();
            navigateTo(view, true);
            closeMobileMenu();
        }
    });
});