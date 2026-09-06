/* ============================================================
   ARCA — SPACES WORTH LIVING IN.
   Premium Real Estate Portfolio — JavaScript
   ============================================================ */

// ---------- PROPERTY DATA ----------
const properties = [
    {
        id: 1,
        name: "CASA NO. 17",
        location: "Jakarta Selatan",
        type: "Residence",
        price: 8500000000,
        priceDisplay: "Rp 8.5 M",
        image: "assets/images/property-01.jpg",
        exterior: "assets/images/property-01-exterior.jpg",
        interior: "assets/images/property-01-interior.jpg",
        detail: "assets/images/property-01-detail.jpg",
        size: "480 M²",
        bedrooms: "4",
        bathrooms: "4",
        parking: "2",
        description: "A contemporary residence shaped around light, privacy and natural material.",
        architecture: "Contemporary Tropical",
        land: "620 M²",
        building: "480 M²",
        completion: "2026",
        availability: "Private Viewing"
    },
    {
        id: 2,
        name: "VILLA SENJA",
        location: "Bali",
        type: "Villa",
        price: 12000000000,
        priceDisplay: "Rp 12 M",
        image: "assets/images/property-02.jpg",
        exterior: "assets/images/property-02-exterior.jpg",
        interior: "assets/images/property-02-interior.jpg",
        detail: "assets/images/property-02-detail.jpg",
        size: "360 M²",
        bedrooms: "3",
        bathrooms: "3",
        parking: "2",
        description: "A serene villa embracing tropical landscapes and open-air living.",
        architecture: "Tropical Modern",
        land: "500 M²",
        building: "360 M²",
        completion: "2025",
        availability: "Private Viewing"
    },
    {
        id: 3,
        name: "HOUSE NO. 08",
        location: "Bandung",
        type: "Residence",
        price: 6800000000,
        priceDisplay: "Rp 6.8 M",
        image: "assets/images/property-03.jpg",
        exterior: "assets/images/property-03-exterior.jpg",
        interior: "assets/images/property-03-interior.jpg",
        detail: "assets/images/property-03-detail.jpg",
        size: "420 M²",
        bedrooms: "4",
        bathrooms: "4",
        parking: "2",
        description: "A family residence with generous spaces and lush garden views.",
        architecture: "Contemporary Courtyard",
        land: "550 M²",
        building: "420 M²",
        completion: "2025",
        availability: "Private Viewing"
    },
    {
        id: 4,
        name: "THE COURTYARD",
        location: "Yogyakarta",
        type: "Townhouse",
        price: 4900000000,
        priceDisplay: "Rp 4.9 M",
        image: "assets/images/property-04.jpg",
        exterior: "assets/images/property-04-exterior.jpg",
        interior: "assets/images/property-04-interior.jpg",
        detail: "assets/images/property-04-detail.jpg",
        size: "310 M²",
        bedrooms: "3",
        bathrooms: "3",
        parking: "1",
        description: "A compact townhouse centered around a private green courtyard.",
        architecture: "Modern Courtyard",
        land: "380 M²",
        building: "310 M²",
        completion: "2026",
        availability: "Private Viewing"
    },
    {
        id: 5,
        name: "LAGOON RESIDENCE",
        location: "Lombok",
        type: "Villa",
        price: 15000000000,
        priceDisplay: "Rp 15 M",
        image: "assets/images/property-05.jpg",
        exterior: "assets/images/property-05-exterior.jpg",
        interior: "assets/images/property-05-interior.jpg",
        detail: "assets/images/property-05-detail.jpg",
        size: "520 M²",
        bedrooms: "4",
        bathrooms: "5",
        parking: "2",
        description: "An expansive villa overlooking a private lagoon and infinity pool.",
        architecture: "Tropical Luxury",
        land: "700 M²",
        building: "520 M²",
        completion: "2025",
        availability: "Private Viewing"
    },
    {
        id: 6,
        name: "TERRACE HOUSE",
        location: "Jakarta",
        type: "Residence",
        price: 7200000000,
        priceDisplay: "Rp 7.2 M",
        image: "assets/images/property-06.jpg",
        exterior: "assets/images/property-06-exterior.jpg",
        interior: "assets/images/property-06-interior.jpg",
        detail: "assets/images/property-06-detail.jpg",
        size: "295 M²",
        bedrooms: "3",
        bathrooms: "3",
        parking: "2",
        description: "A modern terrace house with cascading green terraces.",
        architecture: "Terrace Modern",
        land: "350 M²",
        building: "295 M²",
        completion: "2026",
        availability: "Private Viewing"
    }
];

// ---------- DOM READY ----------
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initHeroAnimations();
    initPropertyGrid();
    initSearch();
    initFilters();
    initLocationSelector();
    initPropertyDetailOverlay();
    initScrollToTop();
    initInquiryForm();
    initScrollReveal();
});

// ---------- NAVIGATION ----------
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileMenuClose = document.getElementById('mobileMenuClose');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    function toggleMenu(open) {
        if (open) {
            mobileMenuBtn.classList.add('open');
            mobileMenuOverlay.classList.add('open');
            document.body.style.overflow = 'hidden';
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
        } else {
            mobileMenuBtn.classList.remove('open');
            mobileMenuOverlay.classList.remove('open');
            document.body.style.overflow = '';
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    }

    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = mobileMenuOverlay.classList.contains('open');
        toggleMenu(!isOpen);
    });

    mobileMenuClose.addEventListener('click', () => toggleMenu(false));

    // Close mobile menu on link click
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });

    // Close mobile menu on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('open')) {
            toggleMenu(false);
        }
    });
}

// ---------- HERO ANIMATIONS (already via CSS) ----------
function initHeroAnimations() {
    // No extra JS needed; CSS animations handle entrance.
    // We can add a subtle parallax or leave as is.
}

// ---------- PROPERTY GRID RENDERING ----------
function initPropertyGrid() {
    renderPropertyCards(properties);
    observePropertyCards();
}

function renderPropertyCards(propertyList) {
    const grid = document.getElementById('propertyGrid');
    if (!grid) return;

    grid.innerHTML = '';

    if (propertyList.length === 0) {
        grid.innerHTML = `
            <div class="col-span-1 md:col-span-2 lg:col-span-3 text-center py-16">
                <p class="text-xl md:text-2xl font-light" style="color:#A56A52;font-family:'Playfair Display',serif;">NO RESIDENCES FOUND</p>
                <p class="text-sm mt-2" style="color:#77736C;">Try another search.</p>
            </div>
        `;
        return;
    }

    propertyList.forEach((property, index) => {
        const card = document.createElement('article');
        card.className = 'property-card';
        card.setAttribute('data-id', property.id);
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `View details for ${property.name}`);
        card.innerHTML = `
            <div class="property-card-image-wrapper">
                <img src="${property.image}" alt="${property.name} — ${property.location}" class="property-card-image" loading="lazy" onerror="this.onerror=null;this.src='assets/images/hero.jpg';">
                <span class="property-card-number">${String(property.id).padStart(2, '0')}</span>
            </div>
            <div class="property-card-info">
                <p class="property-card-location">${property.location}</p>
                <h3 class="property-card-name">${property.name}</h3>
                <div class="property-card-meta">
                    <span>${property.bedrooms} BEDROOMS</span>
                    <span>${property.size}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);

        // Add click and keyboard interaction
        card.addEventListener('click', () => openPropertyDetail(property.id));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openPropertyDetail(property.id);
            }
        });

        // Stagger animation delay
        card.style.transitionDelay = `${index * 80}ms`;
    });

    // Trigger reveal after render
    requestAnimationFrame(() => {
        document.querySelectorAll('.property-card').forEach(card => {
            card.classList.add('visible');
        });
    });
}

function observePropertyCards() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.property-card').forEach(card => {
        observer.observe(card);
    });
}

// ---------- SEARCH ----------
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResult = document.getElementById('searchResult');
    let searchTimeout;

    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const query = searchInput.value.trim().toLowerCase();
            if (query === '') {
                applyAllFilters();
                searchResult.classList.add('hidden');
                return;
            }
            const filtered = properties.filter(p => 
                p.name.toLowerCase().includes(query) ||
                p.location.toLowerCase().includes(query) ||
                p.type.toLowerCase().includes(query)
            );
            renderPropertyCards(filtered);
            if (filtered.length === 0) {
                searchResult.classList.remove('hidden');
            } else {
                searchResult.classList.add('hidden');
            }
        }, 250);
    });
}

// ---------- FILTERS ----------
let activeFilters = {
    location: 'all',
    type: 'all',
    price: 'all'
};

function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filterType = btn.dataset.filter;
            const filterValue = btn.dataset.value;
            
            // Update active state within same group
            document.querySelectorAll(`.filter-btn[data-filter="${filterType}"]`).forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            activeFilters[filterType] = filterValue;
            applyAllFilters();
        });
    });
}

function applyAllFilters() {
    const query = document.getElementById('searchInput')?.value.trim().toLowerCase() || '';
    let filtered = properties;

    // Search filter
    if (query) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(query) ||
            p.location.toLowerCase().includes(query) ||
            p.type.toLowerCase().includes(query)
        );
    }

    // Location filter
    if (activeFilters.location !== 'all') {
        filtered = filtered.filter(p => p.location.toLowerCase().includes(activeFilters.location.toLowerCase()));
    }

    // Type filter
    if (activeFilters.type !== 'all') {
        filtered = filtered.filter(p => p.type === activeFilters.type);
    }

    // Price filter
    if (activeFilters.price !== 'all') {
        filtered = filtered.filter(p => {
            if (activeFilters.price === 'under-5b') return p.price < 5000000000;
            if (activeFilters.price === '5b-10b') return p.price >= 5000000000 && p.price <= 10000000000;
            if (activeFilters.price === '10b-plus') return p.price > 10000000000;
            return true;
        });
    }

    renderPropertyCards(filtered);
    const searchResult = document.getElementById('searchResult');
    if (searchResult) {
        if (filtered.length === 0 && (query || activeFilters.location !== 'all' || activeFilters.type !== 'all' || activeFilters.price !== 'all')) {
            searchResult.classList.remove('hidden');
        } else {
            searchResult.classList.add('hidden');
        }
    }
}

// ---------- LOCATION SELECTOR ----------
function initLocationSelector() {
    const locationButtons = document.querySelectorAll('.location-btn');
    const locationResult = document.getElementById('locationResult');

    locationButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            locationButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');

            const location = btn.dataset.location;
            if (location === 'all') {
                activeFilters.location = 'all';
                document.querySelectorAll('.filter-btn[data-filter="location"][data-value="all"]').forEach(b => b.classList.add('active'));
                document.querySelectorAll('.filter-btn[data-filter="location"]:not([data-value="all"])').forEach(b => b.classList.remove('active'));
            } else {
                activeFilters.location = location;
                document.querySelectorAll('.filter-btn[data-filter="location"]').forEach(b => b.classList.remove('active'));
                document.querySelector(`.filter-btn[data-filter="location"][data-value="${location}"]`)?.classList.add('active');
            }

            applyAllFilters();

            // Update location result text
            if (location === 'all') {
                locationResult.innerHTML = `<span class="font-medium">All locations selected.</span> <span class="text-[#77736C]">${properties.length} residences available.</span>`;
            } else {
                const count = properties.filter(p => p.location.includes(location)).length;
                locationResult.innerHTML = `<span class="font-medium">${location} selected.</span> <span class="text-[#77736C]">${count} residence${count !== 1 ? 's' : ''} available.</span>`;
            }
        });
    });
}

// ---------- PROPERTY DETAIL OVERLAY ----------
let currentDetailPropertyId = null;
let currentGalleryImages = [];
let currentGalleryIndex = 0;

function initPropertyDetailOverlay() {
    const overlay = document.getElementById('propertyDetailOverlay');
    const closeBtn = document.getElementById('detailCloseBtn');
    const prevBtn = document.getElementById('galleryPrev');
    const nextBtn = document.getElementById('galleryNext');
    const thumbnails = document.querySelectorAll('.gallery-thumb');
    const mainImage = document.getElementById('detailMainImage');
    const inquireBtn = document.getElementById('detailInquireBtn');

    closeBtn.addEventListener('click', closeDetail);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeDetail();
    });

    prevBtn.addEventListener('click', () => navigateGallery(-1));
    nextBtn.addEventListener('click', () => navigateGallery(1));

    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            setGalleryIndex(index);
        });
    });

    inquireBtn.addEventListener('click', () => {
        closeDetail();
        document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!overlay.classList.contains('open')) return;
        if (e.key === 'Escape') closeDetail();
        if (e.key === 'ArrowLeft') navigateGallery(-1);
        if (e.key === 'ArrowRight') navigateGallery(1);
    });

    // Image error fallback for gallery
    mainImage.addEventListener('error', function() {
        this.onerror = null;
        this.src = 'assets/images/hero.jpg';
    });
}

function openPropertyDetail(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;

    currentDetailPropertyId = propertyId;
    currentGalleryImages = [property.exterior, property.interior, property.detail];
    currentGalleryIndex = 0;

    // Populate details
    document.getElementById('detailName').textContent = property.name;
    document.getElementById('detailLocation').textContent = property.location;
    document.getElementById('detailPrice').textContent = property.priceDisplay;
    document.getElementById('detailSize').textContent = property.size;
    document.getElementById('detailBedrooms').textContent = property.bedrooms;
    document.getElementById('detailBathrooms').textContent = property.bathrooms;
    document.getElementById('detailParking').textContent = property.parking;
    document.getElementById('detailDescription').textContent = property.description;
    document.getElementById('detailArchitecture').textContent = property.architecture;
    document.getElementById('detailLand').textContent = property.land;
    document.getElementById('detailBuilding').textContent = property.building;
    document.getElementById('detailCompletion').textContent = property.completion;
    document.getElementById('detailAvailability').textContent = property.availability;

    // Set gallery images and thumbnails
    const mainImage = document.getElementById('detailMainImage');
    mainImage.src = currentGalleryImages[0];
    mainImage.alt = `${property.name} — Exterior view`;

    const thumbs = document.querySelectorAll('.gallery-thumb');
    thumbs.forEach((thumb, index) => {
        thumb.innerHTML = `<img src="${currentGalleryImages[index]}" alt="${property.name} view ${index + 1}" onerror="this.onerror=null;this.src='assets/images/hero.jpg';">`;
        thumb.classList.remove('active');
        if (index === 0) thumb.classList.add('active');
    });

    // Show overlay
    const overlay = document.getElementById('propertyDetailOverlay');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeDetail() {
    const overlay = document.getElementById('propertyDetailOverlay');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    currentDetailPropertyId = null;
    currentGalleryImages = [];
    currentGalleryIndex = 0;
}

function navigateGallery(direction) {
    const newIndex = currentGalleryIndex + direction;
    if (newIndex < 0 || newIndex >= currentGalleryImages.length) return;
    setGalleryIndex(newIndex);
}

function setGalleryIndex(index) {
    if (index < 0 || index >= currentGalleryImages.length) return;
    currentGalleryIndex = index;

    const mainImage = document.getElementById('detailMainImage');
    mainImage.src = currentGalleryImages[index];
    mainImage.alt = `Gallery image ${index + 1}`;

    const thumbs = document.querySelectorAll('.gallery-thumb');
    thumbs.forEach((thumb, i) => {
        if (i === index) thumb.classList.add('active');
        else thumb.classList.remove('active');
    });
}

// ---------- SCROLL TO TOP ----------
function initScrollToTop() {
    const btn = document.getElementById('scrollToTopBtn');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ---------- INQUIRY FORM ----------
function initInquiryForm() {
    const form = document.getElementById('inquiryForm');
    const successMessage = document.getElementById('inquirySuccess');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic validation
        const name = document.getElementById('inqName').value.trim();
        const email = document.getElementById('inqEmail').value.trim();
        const whatsapp = document.getElementById('inqWhatsApp').value.trim();
        const property = document.getElementById('inqProperty').value;

        if (!name || !email || !whatsapp || !property) {
            alert('Please fill in all required fields.');
            return;
        }

        // Simulate submission
        form.reset();
        form.style.display = 'none';
        successMessage.classList.remove('hidden');
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // After 5 seconds, restore form
        setTimeout(() => {
            successMessage.classList.add('hidden');
            form.style.display = 'block';
        }, 5000);
    });
}

// ---------- SCROLL REVEAL ----------
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-section, .intro-heading, .intro-text, .arch-image-wrapper, .lifestyle-image-wrapper, .neighborhood-image, .about-principle, .material-item, .property-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });

    revealElements.forEach(el => {
        el.classList.add('reveal-section');
        observer.observe(el);
    });
}