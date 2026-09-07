/* ============================================================
   AURELIA V3 — script.js
   Complete application logic — production ready
   ============================================================ */

// ---------- CONFIG ----------
const WHATSAPP_NUMBER = "6281234567890"; // ← Ganti dengan nomor WhatsApp Anda

// ---------- DATA ----------
const destinations = [
    {
        id: 'bali',
        name: 'Bali',
        country: 'Indonesia',
        image: 'assets/images/bali.jpg',
        categories: ['Beach', 'Culture', 'Relax'],
        bestTime: 'April – October',
        duration: '6–7 Days',
        budget: 7500000,
        description: 'Island of the Gods with lush rice terraces, ancient temples, and world-class surf beaches.',
        highlights: ['Ubud Monkey Forest', 'Tanah Lot Temple', 'Nusa Penida', 'Seminyak Beach'],
        rating: 4.8
    },
    {
        id: 'kyoto',
        name: 'Kyoto',
        country: 'Japan',
        image: 'assets/images/kyoto.jpg',
        categories: ['Culture', 'City', 'Relax'],
        bestTime: 'March – May, October – November',
        duration: '4–5 Days',
        budget: 9500000,
        description: 'Japan’s cultural heart with thousands of temples, traditional tea houses, and serene gardens.',
        highlights: ['Fushimi Inari Shrine', 'Arashiyama Bamboo Grove', 'Kinkaku-ji', 'Gion District'],
        rating: 4.9
    },
    {
        id: 'istanbul',
        name: 'Istanbul',
        country: 'Turkey',
        image: 'assets/images/istanbul.jpg',
        categories: ['Culture', 'City', 'Adventure'],
        bestTime: 'April – May, September – November',
        duration: '4–5 Days',
        budget: 8500000,
        description: 'Where East meets West – a vibrant city of mosques, bazaars, and rich history.',
        highlights: ['Hagia Sophia', 'Blue Mosque', 'Grand Bazaar', 'Bosphorus Cruise'],
        rating: 4.7
    },
    {
        id: 'swiss',
        name: 'Swiss Alps',
        country: 'Switzerland',
        image: 'assets/images/swiss.jpg',
        categories: ['Nature', 'Adventure'],
        bestTime: 'December – March, June – September',
        duration: '6–7 Days',
        budget: 14500000,
        description: 'Majestic mountains, crystal lakes, and charming alpine villages.',
        highlights: ['Jungfraujoch', 'Interlaken', 'Zermatt & Matterhorn', 'Lake Lucerne'],
        rating: 4.9
    },
    {
        id: 'santorini',
        name: 'Santorini',
        country: 'Greece',
        image: 'assets/images/destination-01.jpg',
        categories: ['Beach', 'Relax', 'Nature'],
        bestTime: 'April – November',
        duration: '4–5 Days',
        budget: 11000000,
        description: 'Iconic white-washed buildings, blue-domed churches, and spectacular sunsets over the Aegean.',
        highlights: ['Oia Sunset', 'Red Beach', 'Akrotiri Ruins', 'Wine Tasting'],
        rating: 4.6
    },
    {
        id: 'nyc',
        name: 'New York City',
        country: 'USA',
        image: 'assets/images/destination-02.jpg',
        categories: ['City', 'Adventure', 'Culture'],
        bestTime: 'April – June, September – November',
        duration: '8+ Days',
        budget: 15500000,
        description: 'The city that never sleeps – iconic landmarks, world-class museums, and endless energy.',
        highlights: ['Central Park', 'Statue of Liberty', 'Times Square', 'Metropolitan Museum'],
        rating: 4.5
    },
    {
        id: 'cappadocia',
        name: 'Cappadocia',
        country: 'Turkey',
        image: 'assets/images/destination-03.jpg',
        categories: ['Adventure', 'Nature', 'Culture'],
        bestTime: 'April – June, September – October',
        duration: '6–7 Days',
        budget: 9000000,
        description: 'Fairy chimneys, cave hotels, and unforgettable hot air balloon rides at sunrise.',
        highlights: ['Hot Air Balloon Ride', 'Göreme Open-Air Museum', 'Underground Cities', 'Rose Valley'],
        rating: 4.8
    },
    {
        id: 'raja-ampat',
        name: 'Raja Ampat',
        country: 'Indonesia',
        image: 'assets/images/destination-04.jpg',
        categories: ['Beach', 'Nature', 'Adventure'],
        bestTime: 'October – April',
        duration: '8+ Days',
        budget: 12000000,
        description: 'The last paradise on Earth – pristine coral reefs, turquoise lagoons, and untouched islands.',
        highlights: ['Wayag Islands', 'Misool', 'Diving & Snorkeling', 'Piaynemo'],
        rating: 5.0
    }
];

const itineraries = {
    bali: [
        { day: 1, title: 'Arrival & Ubud', description: 'Arrive in Bali, transfer to Ubud. Visit Monkey Forest and Ubud Palace.', time: '10:00 – 17:00', category: 'Culture', cost: 800000 },
        { day: 2, title: 'Temples & Rice Terraces', description: 'Tegallalang Rice Terrace, Tirta Empul, and Goa Gajah.', time: '08:00 – 16:00', category: 'Culture', cost: 600000 },
        { day: 3, title: 'Beach Day in Seminyak', description: 'Relax at Seminyak Beach, enjoy sunset at Tanah Lot.', time: '11:00 – 20:00', category: 'Beach', cost: 400000 },
        { day: 4, title: 'Nusa Penida Island', description: 'Full-day tour to Nusa Penida: Kelingking Beach, Angel’s Billabong.', time: '06:30 – 18:00', category: 'Adventure', cost: 1200000 },
        { day: 5, title: 'Departure', description: 'Last-minute shopping, airport transfer.', time: '10:00 – 15:00', category: 'Other', cost: 300000 }
    ],
    kyoto: [
        { day: 1, title: 'Arashiyama & Bamboo Grove', description: 'Explore Arashiyama Bamboo Grove, Tenryu-ji Temple, and Monkey Park.', time: '09:00 – 16:00', category: 'Nature', cost: 700000 },
        { day: 2, title: 'Fushimi Inari & Uji', description: 'Hike Fushimi Inari Shrine, visit Uji and Byodo-in Temple.', time: '08:00 – 17:00', category: 'Culture', cost: 600000 },
        { day: 3, title: 'Golden Pavilion & Zen Gardens', description: 'Kinkaku-ji, Ryoan-ji, and Nishiki Market.', time: '09:00 – 17:00', category: 'Culture', cost: 750000 },
        { day: 4, title: 'Gion & Tea Ceremony', description: 'Explore Gion, participate in a traditional tea ceremony, try kimono rental.', time: '10:00 – 18:00', category: 'Culture', cost: 900000 },
        { day: 5, title: 'Nara Day Trip', description: 'Visit Nara: Todai-ji Temple and Nara Park with friendly deer.', time: '08:00 – 18:00', category: 'Culture', cost: 500000 }
    ],
    istanbul: [
        { day: 1, title: 'Sultanahmet Classics', description: 'Hagia Sophia, Blue Mosque, Hippodrome, and Basilica Cistern.', time: '09:00 – 17:00', category: 'Culture', cost: 500000 },
        { day: 2, title: 'Grand Bazaar & Spice Market', description: 'Explore the Grand Bazaar, Spice Bazaar, and Suleymaniye Mosque.', time: '10:00 – 18:00', category: 'Culture', cost: 300000 },
        { day: 3, title: 'Bosphorus Cruise', description: 'Morning Bosphorus cruise, afternoon in Kadıköy.', time: '09:00 – 18:00', category: 'Adventure', cost: 700000 },
        { day: 4, title: 'Palaces & Modern Istanbul', description: 'Topkapi Palace, Dolmabahçe Palace, and Istiklal Street.', time: '09:00 – 18:00', category: 'Culture', cost: 600000 },
        { day: 5, title: 'Asian Side & Farewell', description: 'Explore Üsküdar and Çamlıca Hill, enjoy a final Turkish dinner.', time: '10:00 – 21:00', category: 'Other', cost: 400000 }
    ],
    swiss: [
        { day: 1, title: 'Zurich & Lucerne', description: 'Arrive in Zurich, transfer to Lucerne. Explore Chapel Bridge and old town.', time: '12:00 – 18:00', category: 'City', cost: 800000 },
        { day: 2, title: 'Mount Titlis', description: 'Full day excursion to Mount Titlis – snow activities and glacier views.', time: '08:00 – 17:00', category: 'Adventure', cost: 1800000 },
        { day: 3, title: 'Interlaken & Lake Brienz', description: 'Scenic train to Interlaken, cruise on Lake Brienz.', time: '09:00 – 18:00', category: 'Nature', cost: 1200000 },
        { day: 4, title: 'Jungfraujoch – Top of Europe', description: 'Cogwheel train to Jungfraujoch, highest railway station in Europe.', time: '07:00 – 19:00', category: 'Adventure', cost: 2500000 },
        { day: 5, title: 'Zermatt & Matterhorn', description: 'Travel to Zermatt, view the Matterhorn, explore the village.', time: '08:00 – 18:00', category: 'Nature', cost: 1600000 }
    ]
};

const tips = [
    {
        title: 'How to Plan a Realistic Itinerary',
        category: 'Planning',
        excerpt: 'Avoid overpacking your days. Learn to leave room for spontaneity.',
        content: 'A realistic itinerary balances must-see sights with free time. Aim for 2-3 major activities per day, and always factor in travel time between locations. Use a map to group attractions by area. Leave at least one afternoon unplanned for wandering.'
    },
    {
        title: 'What to Pack for a Short Trip',
        category: 'Packing',
        excerpt: 'Pack light, but smart. Here’s a minimalist checklist.',
        content: 'For trips under 5 days, pack versatile clothing that can be layered. Bring comfortable walking shoes, a lightweight jacket, and travel-size toiletries. Roll clothes instead of folding to save space. Don’t forget chargers, a power bank, and a reusable water bottle.'
    },
    {
        title: 'How to Manage Your Travel Budget',
        category: 'Budget',
        excerpt: 'Track expenses in real time and set daily limits.',
        content: 'Set a daily budget and track your spending with a simple note or app. Use local currency when possible, and avoid dynamic currency conversion. Allocate more for experiences and less for souvenirs. Always have a buffer for unexpected costs.'
    },
    {
        title: 'Best Time to Book Flights & Hotels',
        category: 'Booking',
        excerpt: 'Timing matters. Learn the sweet spot for booking.',
        content: 'Book flights 2-3 months in advance for international travel and 1-2 months for domestic. Hotels often offer better rates 3-4 weeks before your stay. Use fare alerts and be flexible with dates to save money.'
    },
    {
        title: 'How to Avoid Overplanning',
        category: 'Mindset',
        excerpt: 'Leave space for serendipity and rest.',
        content: 'Overplanning can lead to burnout and disappointment. Allow for downtime, especially after long travel days. Plan one anchor activity per day and let the rest unfold naturally. Some of the best travel memories come from unplanned moments.'
    },
    {
        title: 'Travel Documents Checklist',
        category: 'Preparation',
        excerpt: 'Stay organized with all necessary paperwork.',
        content: 'Ensure your passport is valid for at least 6 months beyond your return date. Make photocopies or digital backups of important documents. Check visa requirements, vaccination certificates, and travel insurance. Keep everything in one accessible folder.'
    }
];

const reviews = [
    {
        name: 'Aisha Putri',
        initial: 'AP',
        rating: 5,
        comment: 'AURELIA helped me plan my Bali trip perfectly. The itinerary suggestions were spot on, and the budget tool kept me on track. Highly recommend!',
        destination: 'Bali'
    },
    {
        name: 'Michael Chen',
        initial: 'MC',
        rating: 5,
        comment: 'The Kyoto itinerary was incredible. Every recommendation felt local and well-curated. This is now my go-to travel planner.',
        destination: 'Kyoto'
    },
    {
        name: 'Sarah Johnson',
        initial: 'SJ',
        rating: 4.5,
        comment: 'Loved the mood-based recommendations. Chose "Adventure" and got Swiss Alps – just what I needed. The share feature is super handy.',
        destination: 'Swiss Alps'
    },
    {
        name: 'Rizky Pratama',
        initial: 'RP',
        rating: 5,
        comment: 'I never realized how much I needed a checklist. The progress tracker made me feel prepared. Plus the WhatsApp advisor is brilliant.',
        destination: 'Istanbul'
    },
    {
        name: 'Emily Davis',
        initial: 'ED',
        rating: 4.8,
        comment: 'The travel tips section is full of practical advice. The gallery lightbox is a nice touch. AURELIA feels like a premium travel magazine and planner combined.',
        destination: 'Santorini'
    }
];

const checklistItems = [
    'Passport',
    'Travel documents',
    'Accommodation',
    'Transportation',
    'Travel insurance',
    'Currency',
    'Packing',
    'Emergency contacts'
];

// ---------- APP STATE ----------
const appState = {
    savedDestinations: [],
    trip: {
        destinationId: null,
        duration: 5,
        activities: []
    },
    preferences: {
        travelStyle: null,
        mood: null
    },
    checklist: {}
};

// ---------- STORAGE HELPERS ----------
function loadStorage() {
    try {
        const saved = localStorage.getItem('aureliaSavedDestinations');
        if (saved) appState.savedDestinations = JSON.parse(saved);
        const trip = localStorage.getItem('aureliaTrip');
        if (trip) appState.trip = JSON.parse(trip);
        const checklist = localStorage.getItem('aureliaChecklist');
        if (checklist) appState.checklist = JSON.parse(checklist);
    } catch (e) {
        console.warn('Storage load failed, using defaults.');
        appState.savedDestinations = [];
        appState.trip = { destinationId: null, duration: 5, activities: [] };
        appState.checklist = {};
    }
}

function saveStorage() {
    try {
        localStorage.setItem('aureliaSavedDestinations', JSON.stringify(appState.savedDestinations));
        localStorage.setItem('aureliaTrip', JSON.stringify(appState.trip));
        localStorage.setItem('aureliaChecklist', JSON.stringify(appState.checklist));
    } catch (e) {
        console.warn('Storage save failed.');
    }
}

// ---------- UTILITY ----------
function escapeHTML(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function formatRupiah(amount) {
    if (isNaN(amount) || amount === null || amount === undefined) return 'Rp0';
    return 'Rp' + Number(amount).toLocaleString('id-ID');
}

function getDestinationById(id) {
    return destinations.find(d => d.id === id) || null;
}

// ---------- GLOBAL STATE INIT ----------
loadStorage();

// ---------- RENDER: DESTINATIONS ----------
let currentFilters = {
    category: 'all',
    budget: 'all',
    duration: 'all',
    search: ''
};

function renderDestinations() {
    const grid = document.getElementById('destination-grid');
    const empty = document.getElementById('destination-empty');
    if (!grid || !empty) return;

    let filtered = destinations.filter(d => {
        if (currentFilters.category !== 'all' && !d.categories.includes(currentFilters.category)) return false;
        if (currentFilters.budget === 'under7' && d.budget >= 7000000) return false;
        if (currentFilters.budget === '7to10' && (d.budget < 7000000 || d.budget > 10000000)) return false;
        if (currentFilters.budget === 'above10' && d.budget <= 10000000) return false;
        if (currentFilters.duration === '4to5' && !d.duration.includes('4–5')) return false;
        if (currentFilters.duration === '6to7' && !d.duration.includes('6–7')) return false;
        if (currentFilters.duration === '8plus' && !d.duration.includes('8+')) return false;
        if (currentFilters.search) {
            const q = currentFilters.search.toLowerCase();
            if (!d.name.toLowerCase().includes(q) && 
                !d.country.toLowerCase().includes(q) && 
                !d.description.toLowerCase().includes(q)) return false;
        }
        return true;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '';
        empty.classList.remove('hidden');
        return;
    }
    empty.classList.add('hidden');

    grid.innerHTML = filtered.map(d => {
        const isSaved = appState.savedDestinations.includes(d.id);
        return `
        <div class="destination-card" onclick="openDestinationModal('${d.id}')" role="button" tabindex="0" aria-label="View ${d.name}" onkeydown="if(event.key==='Enter')openDestinationModal('${d.id}')">
            <img src="${d.image}" alt="${d.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80'">
            <div class="p-5">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-xs font-semibold uppercase tracking-wider text-coral">${d.country}</span>
                    <span class="text-xs text-muted">⭐ ${d.rating}</span>
                </div>
                <h3 class="font-display text-xl text-ink mb-1">${d.name}</h3>
                <div class="flex flex-wrap gap-1 mb-3">
                    ${d.categories.map(cat => `<span class="text-xs bg-cream px-2 py-1 rounded-full">${cat}</span>`).join('')}
                </div>
                <div class="flex items-center justify-between text-sm text-muted">
                    <span>⏱ ${d.duration}</span>
                    <span>💰 ${formatRupiah(d.budget)}</span>
                </div>
                <div class="mt-4 flex items-center justify-between">
                    <span class="text-sm font-medium text-deepgreen">View Destination →</span>
                    ${isSaved ? '<span class="text-coral text-sm">❤️ Saved</span>' : ''}
                </div>
            </div>
        </div>`;
    }).join('');
}

function setFilter(type, value, btn) {
    currentFilters[type] = value;
    document.querySelectorAll(`[data-filter="${type}"]`).forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderDestinations();
}

function resetFilters() {
    currentFilters = { category: 'all', budget: 'all', duration: 'all', search: '' };
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    const allCategory = document.querySelector('[data-filter="category"][data-value="all"]');
    const allBudget = document.querySelector('[data-filter="budget"][data-value="all"]');
    const allDuration = document.querySelector('[data-filter="duration"][data-value="all"]');
    if (allCategory) allCategory.classList.add('active');
    if (allBudget) allBudget.classList.add('active');
    if (allDuration) allDuration.classList.add('active');
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';
    renderDestinations();
}

// ---------- SAVED DESTINATIONS ----------
function renderSavedDestinations() {
    const drawerContent = document.getElementById('saved-drawer-content');
    if (!drawerContent) return;
    if (appState.savedDestinations.length === 0) {
        drawerContent.innerHTML = `<p class="text-muted text-sm">No saved destinations yet. Tap the heart on any destination to save it.</p>`;
        return;
    }
    drawerContent.innerHTML = appState.savedDestinations.map(id => {
        const d = getDestinationById(id);
        if (!d) return '';
        return `
        <div class="flex items-center gap-3 py-3 border-b border-border">
            <img src="${d.image}" alt="${d.name}" class="w-12 h-12 rounded-lg object-cover" onerror="this.src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&q=80'">
            <div class="flex-1">
                <p class="font-medium text-ink">${d.name}</p>
                <p class="text-xs text-muted">${d.country}</p>
            </div>
            <button class="text-coral text-sm font-medium" onclick="toggleSaved('${d.id}')" aria-label="Remove ${d.name} from saved">Remove</button>
        </div>`;
    }).join('');
}

function toggleSaved(destinationId) {
    const index = appState.savedDestinations.indexOf(destinationId);
    if (index > -1) {
        appState.savedDestinations.splice(index, 1);
    } else {
        if (!appState.savedDestinations.includes(destinationId)) {
            appState.savedDestinations.push(destinationId);
        }
    }
    saveStorage();
    renderSavedDestinations();
    renderDestinations();
    updateModalSaveButton(destinationId);
    
    // Tutup modal setelah aksi save/unsave (selalu dipanggil dari dalam modal)
    closeDestinationModal();
}

function updateModalSaveButton(destinationId) {
    const saveBtn = document.getElementById('modal-save-btn');
    if (saveBtn) {
        const isSaved = appState.savedDestinations.includes(destinationId);
        saveBtn.textContent = isSaved ? 'SAVED' : 'SAVE DESTINATION';
        saveBtn.classList.toggle('border-coral', isSaved);
        saveBtn.classList.toggle('text-coral', isSaved);
        saveBtn.classList.toggle('border-deepgreen', !isSaved);
        saveBtn.classList.toggle('text-deepgreen', !isSaved);
    }
}

// ---------- DESTINATION MODAL ----------
let currentModalDestinationId = null;

function openDestinationModal(destinationId) {
    const d = getDestinationById(destinationId);
    if (!d) return;
    currentModalDestinationId = destinationId;
    const modal = document.getElementById('destination-modal');
    const panel = document.getElementById('destination-modal-panel');
    const content = document.getElementById('destination-modal-content');
    const isSaved = appState.savedDestinations.includes(destinationId);

    content.innerHTML = `
    <div class="relative">
        <img src="${d.image}" alt="${d.name}" class="w-full h-56 md:h-72 object-cover" onerror="this.src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80'">
        <div class="p-6 md:p-8">
            <p class="text-xs font-semibold uppercase tracking-widest text-coral">${d.country}</p>
            <h3 class="font-display text-3xl text-ink mt-1 mb-2">${d.name}</h3>
            <div class="flex items-center gap-4 text-sm text-muted mb-4">
                <span>⭐ ${d.rating}</span>
                <span>⏱ ${d.duration}</span>
                <span>💰 ${formatRupiah(d.budget)}</span>
            </div>
            <p class="text-muted leading-relaxed mb-4">${d.description}</p>
            <div class="mb-4">
                <h4 class="font-semibold text-ink mb-2">Highlights</h4>
                <ul class="list-disc list-inside text-sm text-muted space-y-1">
                    ${d.highlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
            </div>
            <div class="mb-6">
                <h4 class="font-semibold text-ink mb-2">Best Time to Visit</h4>
                <p class="text-sm text-muted">${d.bestTime}</p>
            </div>
            <div class="flex flex-wrap gap-3">
                <button id="modal-save-btn" class="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 border-2 ${isSaved ? 'border-coral text-coral' : 'border-deepgreen text-deepgreen'} px-6 py-3 rounded-full text-sm font-semibold hover:bg-cream transition-colors" onclick="toggleSaved('${d.id}')" aria-label="Save or unsave ${d.name}">
                    ${isSaved ? 'SAVED' : 'SAVE DESTINATION'}
                </button>
                <button class="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 bg-deepgreen text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#1d3a30] transition-colors" onclick="addToTrip('${d.id}')">
                    ADD TO MY TRIP
                </button>
            </div>
        </div>
    </div>`;

    modal.classList.remove('pointer-events-none');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => {
        document.getElementById('destination-modal-backdrop').classList.remove('opacity-0');
        panel.classList.remove('translate-y-full', 'md:translate-y-0', 'md:scale-95', 'md:opacity-0');
        panel.classList.add('translate-y-0', 'md:scale-100', 'md:opacity-100');
    });
}

function closeDestinationModal() {
    const modal = document.getElementById('destination-modal');
    const panel = document.getElementById('destination-modal-panel');
    const backdrop = document.getElementById('destination-modal-backdrop');

    // 1. Kembalikan scroll halaman
    document.body.style.overflow = '';

    // 2. Transparankan backdrop agar overlay hilang
    if (backdrop) {
        backdrop.classList.add('opacity-0');
    }

    // 3. Animasi panel keluar
    panel.classList.add('md:scale-95', 'md:opacity-0');
    panel.classList.remove('translate-y-0', 'md:scale-100', 'md:opacity-100');
    panel.classList.add('translate-y-full', 'md:translate-y-0');

    // 4. Setelah animasi selesai, nonaktifkan modal sepenuhnya
    setTimeout(() => {
        modal.classList.add('pointer-events-none');
        modal.setAttribute('aria-hidden', 'true');
        currentModalDestinationId = null;
    }, 300);
}

// ---------- ADD TO TRIP ----------
function addToTrip(destinationId) {
    const d = getDestinationById(destinationId);
    if (!d) return;
    appState.trip.destinationId = destinationId;
    appState.trip.duration = 5;
    const itinerary = itineraries[destinationId];
    appState.trip.activities = itinerary ? itinerary.map(item => ({ ...item, id: `${destinationId}-${item.day}` })) : [];
    saveStorage();
    renderMyTrip();
    renderMobileTripDrawer();
    // Tutup modal setelah berhasil
    closeDestinationModal();
}

function removeFromTrip() {
    appState.trip = { destinationId: null, duration: 5, activities: [] };
    saveStorage();
    renderMyTrip();
    renderMobileTripDrawer();
}

// ---------- RENDER: MY TRIP ----------
function renderMyTrip() {
    const container = document.getElementById('my-trip-content');
    if (!container) return;
    const trip = appState.trip;

    if (!trip.destinationId) {
        container.innerHTML = `
            <div class="text-center py-10 bg-white rounded-3xl shadow-sm border border-border p-8">
                <h3 class="font-display text-2xl text-ink mb-2">Your journey is waiting.</h3>
                <p class="text-muted text-sm mb-6">Choose a destination to start planning your trip.</p>
                <a href="#discover" class="inline-flex items-center gap-2 bg-deepgreen text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#1d3a30] transition-colors">Explore Destinations</a>
            </div>
        `;
        return;
    }

    const d = getDestinationById(trip.destinationId);
    if (!d) {
        appState.trip.destinationId = null;
        appState.trip.activities = [];
        saveStorage();
        renderMyTrip();
        return;
    }

    const progress = calculateProgress();
    container.innerHTML = `
        <div class="bg-white rounded-3xl shadow-sm border border-border p-6 md:p-8">
            <div class="flex flex-col md:flex-row gap-6 mb-8">
                <img src="${d.image}" alt="${d.name}" class="w-full md:w-48 h-40 md:h-48 object-cover rounded-2xl" onerror="this.src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80'">
                <div class="flex-1">
                    <h3 class="font-display text-2xl text-ink">${d.name}</h3>
                    <p class="text-muted text-sm">${d.country} · ${d.duration}</p>
                    <div class="mt-4 flex items-center gap-4 text-sm">
                        <span>Duration: <strong>${trip.duration} days</strong></span>
                        <span>Activities: <strong>${trip.activities.length}</strong></span>
                    </div>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <button class="text-sm bg-cream px-4 py-2 rounded-full hover:bg-sand transition-colors" onclick="openDestinationModal('${d.id}')">View Details</button>
                        <button class="text-sm bg-red-50 text-red-600 px-4 py-2 rounded-full hover:bg-red-100 transition-colors" onclick="removeFromTrip()">Remove Trip</button>
                    </div>
                </div>
            </div>

            <div class="mb-8">
                <div class="flex justify-between text-sm mb-1">
                    <span class="font-medium text-ink">Planning Progress</span>
                    <span class="text-muted">${progress}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-bar-fill" style="width:${progress}%"></div>
                </div>
            </div>

            <h4 class="font-semibold text-ink mb-4">Itinerary</h4>
            <div id="trip-itinerary" class="space-y-4">
                ${trip.activities.map(act => `
                    <div class="day-card">
                        <div class="flex items-start justify-between">
                            <div>
                                <span class="text-xs font-semibold text-coral">DAY ${String(act.day).padStart(2,'0')}</span>
                                <h5 class="font-medium text-ink">${act.title}</h5>
                            </div>
                            <button class="text-sm text-red-500 hover:text-red-700" onclick="removeActivity('${act.id}')" aria-label="Remove activity ${act.title}">✕</button>
                        </div>
                        <p class="text-sm text-muted mt-1">${act.description}</p>
                        <div class="flex items-center justify-between mt-2 text-xs text-muted">
                            <span>${act.time} · ${act.category}</span>
                            <span>${formatRupiah(act.cost)}</span>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="mt-6 flex gap-2">
                <input type="text" id="new-activity-title" placeholder="Add a custom activity..." class="flex-1 px-4 py-2.5 rounded-full border border-border text-sm focus:outline-none focus:ring-2 focus:ring-deepgreen">
                <button class="bg-deepgreen text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#1d3a30] transition-colors" onclick="addActivity()">Add</button>
            </div>

            <div class="mt-8">
                <h4 class="font-semibold text-ink mb-4">Budget Estimate</h4>
                <div id="budget-breakdown" class="space-y-2 text-sm">
                    ${renderBudgetBreakdown()}
                </div>
                <p class="text-lg font-semibold text-ink mt-4">Total: ${formatRupiah(calculateTotalBudget())}</p>
            </div>

            <div class="mt-8">
                <h4 class="font-semibold text-ink mb-4">Checklist</h4>
                <div id="trip-checklist">
                    ${renderChecklistHTML()}
                </div>
            </div>

            <div class="mt-8 flex flex-col sm:flex-row gap-3">
                <button onclick="shareTrip()" class="inline-flex items-center justify-center gap-2 bg-deepgreen text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#1d3a30] transition-colors">Share My Trip</button>
                <button onclick="openWhatsApp()" class="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#1eb857] transition-colors">WhatsApp Advisor</button>
            </div>
        </div>
    `;
}

function renderMobileTripDrawer() {
    const drawerContent = document.getElementById('mobile-trip-drawer-content');
    if (!drawerContent) return;
    const trip = appState.trip;
    if (!trip.destinationId) {
        drawerContent.innerHTML = `<p class="text-muted text-sm">Your trip is waiting. Choose a destination to start planning.</p>`;
        return;
    }
    const d = getDestinationById(trip.destinationId);
    if (!d) {
        drawerContent.innerHTML = `<p class="text-muted text-sm">Trip data not found.</p>`;
        return;
    }
    drawerContent.innerHTML = `
        <div class="flex items-center gap-3 mb-4">
            <img src="${d.image}" alt="${d.name}" class="w-14 h-14 rounded-xl object-cover" onerror="this.src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&q=80'">
            <div>
                <p class="font-semibold text-ink">${d.name}</p>
                <p class="text-xs text-muted">${d.country}</p>
            </div>
        </div>
        <p class="text-sm text-muted mb-3">${trip.activities.length} activities · ${formatRupiah(calculateTotalBudget())}</p>
        <a href="#my-trip" class="inline-flex items-center gap-2 bg-deepgreen text-white px-5 py-2.5 rounded-full text-sm font-semibold" onclick="closeDrawer('mobile-trip-drawer');">Open Planner</a>
    `;
}

function calculateProgress() {
    let completed = 0;
    if (appState.trip.destinationId) completed++;
    if (appState.trip.activities.length > 0) completed++;
    if (Object.values(appState.checklist).filter(Boolean).length === checklistItems.length) completed++;
    if (calculateTotalBudget() > 0) completed++;
    return Math.round((completed / 4) * 100);
}

function renderBudgetBreakdown() {
    const activities = appState.trip.activities;
    let acc = 0, transport = 0, food = 0, other = 0;
    activities.forEach(act => {
        if (act.category === 'Accommodation') acc += act.cost;
        else if (act.category === 'Transport') transport += act.cost;
        else if (act.category === 'Food') food += act.cost;
        else other += act.cost;
    });
    return `
        <div class="flex justify-between"><span>Accommodation</span><span>${formatRupiah(acc)}</span></div>
        <div class="flex justify-between"><span>Transport</span><span>${formatRupiah(transport)}</span></div>
        <div class="flex justify-between"><span>Food</span><span>${formatRupiah(food)}</span></div>
        <div class="flex justify-between"><span>Activities & Other</span><span>${formatRupiah(other)}</span></div>
    `;
}

function calculateTotalBudget() {
    return appState.trip.activities.reduce((sum, act) => sum + (act.cost || 0), 0);
}

function addActivity() {
    const input = document.getElementById('new-activity-title');
    if (!input || !input.value.trim()) return;
    const title = input.value.trim();
    const newId = `custom-${Date.now()}`;
    appState.trip.activities.push({
        id: newId,
        day: appState.trip.activities.length + 1,
        title: title,
        description: 'Custom activity',
        time: 'Flexible',
        category: 'Other',
        cost: 0
    });
    input.value = '';
    saveStorage();
    renderMyTrip();
    renderMobileTripDrawer();
}

function removeActivity(activityId) {
    appState.trip.activities = appState.trip.activities.filter(a => a.id !== activityId);
    saveStorage();
    renderMyTrip();
    renderMobileTripDrawer();
}

// ---------- CHECKLIST ----------
function renderChecklistHTML() {
    return checklistItems.map(item => {
        const checked = appState.checklist[item] || false;
        return `
            <label class="checklist-item">
                <input type="checkbox" class="w-5 h-5 rounded border-border text-deepgreen focus:ring-deepgreen" ${checked ? 'checked' : ''} onchange="toggleChecklistItem('${item}')" aria-label="Mark ${item} as completed">
                <span class="flex-1 ${checked ? 'line-through text-muted' : 'text-ink'}">${item}</span>
            </label>
        `;
    }).join('');
}

function toggleChecklistItem(item) {
    appState.checklist[item] = !appState.checklist[item];
    saveStorage();
    renderMyTrip();
    renderMobileTripDrawer();
}

// ---------- TRAVEL STYLE & MOOD ----------
function setTravelStyle(style) {
    appState.preferences.travelStyle = style;
    document.querySelectorAll('.travel-style-btn').forEach(b => b.classList.remove('active'));
    const activeBtn = document.querySelector(`.travel-style-btn[data-style="${style}"]`);
    if (activeBtn) activeBtn.classList.add('active');
    renderStyleRecommendation();
}

function setMood(mood) {
    appState.preferences.mood = mood;
    document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('active'));
    const activeBtn = document.querySelector(`.mood-btn[data-mood="${mood}"]`);
    if (activeBtn) activeBtn.classList.add('active');
    renderMoodRecommendation();
}

function renderStyleRecommendation() {
    const container = document.getElementById('style-recommendation');
    if (!container || !appState.preferences.travelStyle) return;
    const style = appState.preferences.travelStyle;
    const recs = destinations.filter(d => {
        if (style === 'Beach Escape') return d.categories.includes('Beach');
        if (style === 'Cultural Journey') return d.categories.includes('Culture');
        if (style === 'Nature & Adventure') return d.categories.includes('Adventure') || d.categories.includes('Nature');
        if (style === 'City Explorer') return d.categories.includes('City');
        if (style === 'Slow Travel') return d.categories.includes('Relax');
        return false;
    }).slice(0, 3);
    container.classList.remove('hidden');
    container.innerHTML = `<p class="text-sm text-muted mb-3">Recommended for ${style}:</p>` + recs.map(d => `
        <span class="inline-block bg-white border border-border rounded-full px-4 py-2 text-sm mr-2 mb-2 cursor-pointer hover:bg-cream" onclick="openDestinationModal('${d.id}')">${d.name}</span>
    `).join('');
}

function renderMoodRecommendation() {
    const container = document.getElementById('mood-recommendation');
    if (!container || !appState.preferences.mood) return;
    const mood = appState.preferences.mood;
    let recs;
    switch(mood) {
        case 'Relax': recs = destinations.filter(d => d.categories.includes('Relax') || d.categories.includes('Beach')); break;
        case 'Explore': recs = destinations.filter(d => d.categories.includes('Culture') || d.categories.includes('Nature')); break;
        case 'Reconnect': recs = destinations.filter(d => d.categories.includes('Relax') || d.categories.includes('Culture')); break;
        case 'Adventure': recs = destinations.filter(d => d.categories.includes('Adventure') || d.categories.includes('Nature')); break;
        case 'Discover': recs = destinations.filter(d => d.rating >= 4.8); break;
        default: recs = [];
    }
    recs = recs.slice(0, 4);
    container.classList.remove('hidden');
    container.innerHTML = `<p class="text-sm text-muted mb-3">Places to match your mood:</p>` + recs.map(d => `
        <span class="inline-block bg-white border border-border rounded-full px-4 py-2 text-sm mr-2 mb-2 cursor-pointer hover:bg-cream" onclick="openDestinationModal('${d.id}')">${d.name}</span>
    `).join('');
}

// ---------- TIPS ----------
function renderTips() {
    const grid = document.getElementById('tips-grid');
    if (!grid) return;
    grid.innerHTML = tips.map(tip => `
        <div class="bg-white rounded-2xl border border-border p-6 hover:shadow-md transition-shadow cursor-pointer" onclick="openTipModal('${escapeHTML(tip.title)}')" role="button" tabindex="0" onkeydown="if(event.key==='Enter')openTipModal('${escapeHTML(tip.title)}')">
            <span class="text-xs font-semibold uppercase tracking-wider text-coral">${tip.category}</span>
            <h3 class="font-display text-lg text-ink mt-2 mb-2">${tip.title}</h3>
            <p class="text-sm text-muted">${tip.excerpt}</p>
        </div>
    `).join('');
}

function openTipModal(title) {
    const tip = tips.find(t => t.title === title);
    if (!tip) return;
    const modal = document.getElementById('tip-modal');
    const panel = document.getElementById('tip-modal-panel');
    const content = document.getElementById('tip-modal-content');
    content.innerHTML = `
        <p class="text-xs font-semibold uppercase tracking-widest text-coral mb-2">${tip.category}</p>
        <h3 class="font-display text-2xl text-ink mb-4">${tip.title}</h3>
        <p class="text-muted leading-relaxed">${tip.content}</p>
    `;
    modal.classList.remove('pointer-events-none');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => {
        document.getElementById('tip-modal-backdrop').classList.remove('opacity-0');
        panel.classList.remove('scale-95', 'opacity-0');
        panel.classList.add('scale-100', 'opacity-100');
    });
}

function closeTipModal() {
    const modal = document.getElementById('tip-modal');
    const panel = document.getElementById('tip-modal-panel');
    document.body.style.overflow = '';
    panel.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        modal.classList.add('pointer-events-none');
        modal.setAttribute('aria-hidden', 'true');
    }, 300);
}

// ---------- REVIEWS ----------
function renderReviews() {
    const container = document.getElementById('reviews-container');
    if (!container) return;
    container.innerHTML = reviews.map(r => `
        <div class="flex-shrink-0 w-80 md:w-auto bg-cream rounded-3xl p-6 border border-border">
            <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 rounded-full bg-deepgreen text-white flex items-center justify-center font-semibold">${r.initial}</div>
                <div>
                    <p class="font-medium text-ink">${r.name}</p>
                    <p class="text-xs text-muted">${r.destination} · ⭐ ${r.rating}</p>
                </div>
            </div>
            <p class="text-sm text-muted leading-relaxed">"${r.comment}"</p>
        </div>
    `).join('');
}

// ---------- GALLERY & LIGHTBOX ----------
const galleryImages = [
    'assets/images/hero.jpg',
    'assets/images/bali.jpg',
    'assets/images/kyoto.jpg',
    'assets/images/istanbul.jpg',
    'assets/images/swiss.jpg',
    'assets/images/destination-01.jpg',
    'assets/images/destination-02.jpg',
    'assets/images/destination-03.jpg',
    'assets/images/destination-04.jpg'
];

function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;
    grid.innerHTML = galleryImages.map((src, index) => `
        <div class="overflow-hidden rounded-xl md:rounded-2xl cursor-pointer group" onclick="openLightbox(${index})" role="button" tabindex="0" aria-label="View image ${index + 1}" onkeydown="if(event.key==='Enter')openLightbox(${index})">
            <img src="${src}" alt="Gallery image ${index + 1}" class="w-full h-28 sm:h-40 md:h-52 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80'">
        </div>
    `).join('');
}

let lightboxIndex = 0;

function openLightbox(index) {
    lightboxIndex = index;
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    
    // Set image source terlebih dahulu
    if (img) {
        img.src = galleryImages[lightboxIndex];
        img.alt = `Gallery image ${lightboxIndex + 1}`;
        img.onerror = function() { 
            this.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80'; 
        };
    }

    // Tampilkan lightbox dengan menghapus invisible dan pointer-events-none
    lb.classList.remove('invisible', 'pointer-events-none');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Trigger transisi backdrop
    requestAnimationFrame(() => {
        document.getElementById('lightbox-backdrop').classList.remove('opacity-0');
    });
}

function closeLightbox() {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    document.body.style.overflow = '';
    
    // Sembunyikan backdrop
    document.getElementById('lightbox-backdrop').classList.add('opacity-0');
    
    // Setelah transisi selesai, sembunyikan seluruh lightbox
    setTimeout(() => {
        lb.classList.add('invisible', 'pointer-events-none');
        lb.setAttribute('aria-hidden', 'true');
        if (img) {
            img.src = ''; // Reset sumber gambar
            img.alt = '';
            img.onerror = null;
        }
    }, 300);
}

function navigateLightbox(direction) {
    lightboxIndex = (lightboxIndex + direction + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
}

function updateLightboxImage() {
    const img = document.getElementById('lightbox-img');
    if (img) {
        img.src = galleryImages[lightboxIndex];
        img.alt = `Gallery image ${lightboxIndex + 1}`;
        img.onerror = function() { 
            this.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80'; 
        };
    }
}

// ---------- SIMPLE MAP (SVG) ----------
function renderMap() {
    const container = document.getElementById('simple-map');
    if (!container) return;
    const markers = [
        { name: 'Bali', x: 75, y: 70, id: 'bali' },
        { name: 'Kyoto', x: 85, y: 35, id: 'kyoto' },
        { name: 'Istanbul', x: 48, y: 28, id: 'istanbul' },
        { name: 'Swiss Alps', x: 45, y: 25, id: 'swiss' },
        { name: 'Santorini', x: 55, y: 30, id: 'santorini' },
        { name: 'New York', x: 20, y: 30, id: 'nyc' },
        { name: 'Cappadocia', x: 55, y: 33, id: 'cappadocia' },
        { name: 'Raja Ampat', x: 90, y: 60, id: 'raja-ampat' }
    ];
    container.innerHTML = `
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="w-full h-full">
            <rect width="100" height="100" fill="#DCEBE8" />
            <path d="M20,10 L55,10 L65,20 L75,30 L70,45 L55,40 L40,50 L25,45 Z" fill="#D8C9AD" opacity="0.4" />
            <path d="M70,50 L90,50 L95,65 L80,70 L70,60 Z" fill="#D8C9AD" opacity="0.4" />
            <path d="M30,55 L50,60 L45,75 L25,70 Z" fill="#D8C9AD" opacity="0.4" />
            ${markers.map(m => `
                <circle cx="${m.x}" cy="${m.y}" r="1.8" fill="#E87961" stroke="white" stroke-width="0.5" class="cursor-pointer" onclick="openDestinationModal('${m.id}')" role="button" tabindex="0" aria-label="View ${m.name}" />
                <text x="${m.x}" y="${m.y - 3}" font-size="2.5" fill="#27483D" text-anchor="middle" class="pointer-events-none">${m.name}</text>
            `).join('')}
        </svg>
    `;
}

// ---------- KYOTO ACCORDION ----------
function renderKyotoAccordion() {
    const container = document.getElementById('kyoto-accordion');
    if (!container) return;
    const kyotoItinerary = itineraries.kyoto;
    if (!kyotoItinerary) return;
    container.innerHTML = kyotoItinerary.map((day, index) => `
        <div class="border border-border rounded-xl overflow-hidden">
            <button class="accordion-button w-full text-left px-5 py-4 flex items-center justify-between" onclick="toggleAccordion(this)" aria-expanded="${index === 0 ? 'true' : 'false'}">
                <span>DAY ${String(day.day).padStart(2,'0')} — ${day.title}</span>
                <svg class="w-5 h-5 transform transition-transform duration-300 ${index === 0 ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="accordion-content ${index === 0 ? 'open' : ''}">
                <p class="text-sm text-muted">${day.description}</p>
                <div class="flex justify-between text-xs text-muted mt-2">
                    <span>${day.time}</span>
                    <span>${day.category} · ${formatRupiah(day.cost)}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const isOpen = content.classList.contains('open');
    document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('open'));
    document.querySelectorAll('.accordion-button svg').forEach(svg => svg.classList.remove('rotate-180'));
    if (!isOpen) {
        content.classList.add('open');
        button.querySelector('svg').classList.add('rotate-180');
    }
}

// ---------- SHARE ----------
function shareTrip() {
    const trip = appState.trip;
    if (!trip.destinationId) {
        alert('Please add a destination to your trip first.');
        return;
    }
    const d = getDestinationById(trip.destinationId);
    if (!d) return;
    const summary = `AURELIA Trip Plan:\nDestination: ${d.name}, ${d.country}\nDuration: ${trip.duration} days\nActivities: ${trip.activities.length}\nTotal Budget: ${formatRupiah(calculateTotalBudget())}`;

    if (navigator.share) {
        navigator.share({
            title: 'My AURELIA Trip Plan',
            text: summary,
        }).catch(() => {
            // User cancelled, no action needed
        });
    } else {
        navigator.clipboard.writeText(summary).then(() => {
            const fb = document.getElementById('share-feedback');
            if (fb) {
                fb.textContent = 'Trip copied to clipboard!';
                fb.classList.remove('hidden');
                setTimeout(() => fb.classList.add('hidden'), 3000);
            }
        }).catch(() => {
            alert('Could not copy. Please copy manually.');
        });
    }
}

// ---------- WHATSAPP ----------
function openWhatsApp() {
    const trip = appState.trip;
    if (!trip.destinationId) {
        alert('Please add a destination to your trip first.');
        return;
    }
    const d = getDestinationById(trip.destinationId);
    if (!d) return;
    const activitiesSummary = trip.activities.map(a => `- ${a.title}`).join('\n');
    const message = `Hello! I'd like travel advice for my AURELIA trip:\n\nDestination: ${d.name}, ${d.country}\nDuration: ${trip.duration} days\nActivities:\n${activitiesSummary}\nTotal Budget: ${formatRupiah(calculateTotalBudget())}\n\nPlease help me refine this plan.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
}

// ---------- MOBILE MENU & DRAWERS ----------
function openMobileMenu() {
    const overlay = document.getElementById('mobile-menu-overlay');
    const panel = document.getElementById('mobile-menu-panel');
    if (!overlay || !panel) return;
    overlay.classList.remove('pointer-events-none');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => {
        document.getElementById('mobile-menu-backdrop').classList.remove('opacity-0');
        panel.classList.remove('translate-x-full');
        panel.classList.add('translate-x-0');
    });
}

function closeMobileMenu() {
    const overlay = document.getElementById('mobile-menu-overlay');
    const panel = document.getElementById('mobile-menu-panel');
    if (!overlay || !panel) return;
    document.body.style.overflow = '';
    document.getElementById('mobile-menu-backdrop').classList.add('opacity-0');
    panel.classList.add('translate-x-full');
    setTimeout(() => {
        overlay.classList.add('pointer-events-none');
    }, 300);
}

function openSavedDrawer() {
    const drawer = document.getElementById('saved-drawer');
    if (!drawer) return;
    renderSavedDestinations();
    const panel = drawer.querySelector('.absolute.right-0');
    drawer.classList.remove('pointer-events-none');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => {
        drawer.querySelector('.absolute.inset-0').classList.remove('opacity-0');
        panel.classList.remove('translate-x-full');
        panel.classList.add('translate-x-0');
    });
}

function openMobileTripDrawer() {
    const drawer = document.getElementById('mobile-trip-drawer');
    if (!drawer) return;
    renderMobileTripDrawer();
    const panel = drawer.querySelector('.absolute.right-0');
    drawer.classList.remove('pointer-events-none');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => {
        drawer.querySelector('.absolute.inset-0').classList.remove('opacity-0');
        panel.classList.remove('translate-x-full');
        panel.classList.add('translate-x-0');
    });
}

function closeDrawer(drawerId) {
    const drawer = document.getElementById(drawerId);
    if (!drawer) return;
    const panel = drawer.querySelector('.absolute.right-0');
    document.body.style.overflow = '';
    drawer.querySelector('.absolute.inset-0').classList.add('opacity-0');
    panel.classList.add('translate-x-full');
    setTimeout(() => {
        drawer.classList.add('pointer-events-none');
    }, 300);
}

// ---------- GLOBAL KEYBOARD HANDLING ----------
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeDestinationModal();
        closeTipModal();
        closeLightbox();
        closeMobileMenu();
        closeDrawer('saved-drawer');
        closeDrawer('mobile-trip-drawer');
    }
});

// ---------- INITIALIZATION ----------
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active filters
    const allCategory = document.querySelector('[data-filter="category"][data-value="all"]');
    const allBudget = document.querySelector('[data-filter="budget"][data-value="all"]');
    const allDuration = document.querySelector('[data-filter="duration"][data-value="all"]');
    if (allCategory) allCategory.classList.add('active');
    if (allBudget) allBudget.classList.add('active');
    if (allDuration) allDuration.classList.add('active');

    // Search input listener
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentFilters.search = e.target.value;
            renderDestinations();
        });
    }

    // Render all sections
    renderDestinations();
    renderSavedDestinations();
    renderMyTrip();
    renderMobileTripDrawer();
    renderTips();
    renderReviews();
    renderGallery();
    renderMap();
    renderKyotoAccordion();
});