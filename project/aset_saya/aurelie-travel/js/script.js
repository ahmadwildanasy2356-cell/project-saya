/* ============================================
   AURELIA TRAVEL — script.js
   Vanilla JavaScript — Travel Discovery & Itinerary Planner
   ============================================ */

// ===================== DATA =====================

// Destination Data (8 destinasi, semua gambar terpakai)
const destinations = [
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    style: ['Beach', 'Nature', 'Relax'],
    bestTime: 'April – October',
    recommendedDays: '5–7 days',
    estimatedBudget: 6500000,
    image: 'assets/images/bali.jpg',
    highlights: 'Tropical beaches, lush rice terraces, spiritual temples.',
    thingsToDo: 'Surf in Uluwatu, visit Ubud Monkey Forest, watch sunset at Tanah Lot.'
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    country: 'Japan',
    style: ['Culture', 'Nature'],
    bestTime: 'March – May',
    recommendedDays: '4–6 days',
    estimatedBudget: 8500000,
    image: 'assets/images/kyoto.jpg',
    highlights: 'Ancient temples, traditional tea houses, serene gardens.',
    thingsToDo: 'Explore Fushimi Inari Shrine, stroll through Arashiyama Bamboo Grove, experience a tea ceremony.'
  },
  {
    id: 'istanbul',
    name: 'Istanbul',
    country: 'Türkiye',
    style: ['Culture', 'City'],
    bestTime: 'April – June',
    recommendedDays: '4–6 days',
    estimatedBudget: 9000000,
    image: 'assets/images/istanbul.jpg',
    highlights: 'Historic bazaars, magnificent mosques, vibrant Bosphorus.',
    thingsToDo: 'Visit Hagia Sophia, shop at Grand Bazaar, take a Bosphorus cruise.'
  },
  {
    id: 'swiss',
    name: 'Swiss Alps',
    country: 'Switzerland',
    style: ['Nature', 'Adventure'],
    bestTime: 'June – September',
    recommendedDays: '6–8 days',
    estimatedBudget: 15000000,
    image: 'assets/images/swiss.jpg',
    highlights: 'Majestic peaks, alpine meadows, crystal-clear lakes.',
    thingsToDo: 'Ride the Glacier Express, hike in Zermatt, paraglide over Interlaken.'
  },
  {
    id: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    style: ['Beach', 'Relax', 'Nature'],
    bestTime: 'May – October',
    recommendedDays: '4–6 days',
    estimatedBudget: 12000000,
    image: 'assets/images/destination-01.jpg',
    highlights: 'Whitewashed villages, volcanic beaches, stunning sunsets.',
    thingsToDo: 'Watch sunset in Oia, swim at Red Beach, sail around the caldera.'
  },
  {
    id: 'newyork',
    name: 'New York City',
    country: 'USA',
    style: ['City', 'Adventure', 'Culture'],
    bestTime: 'April – June, September – November',
    recommendedDays: '5–7 days',
    estimatedBudget: 14000000,
    image: 'assets/images/destination-02.jpg',
    highlights: 'Iconic landmarks, world-class museums, vibrant neighborhoods.',
    thingsToDo: 'Walk across Brooklyn Bridge, visit Central Park, see a Broadway show.'
  },
  {
    id: 'cappadocia',
    name: 'Cappadocia',
    country: 'Türkiye',
    style: ['Adventure', 'Culture', 'Nature'],
    bestTime: 'April – June, September – October',
    recommendedDays: '3–5 days',
    estimatedBudget: 8000000,
    image: 'assets/images/destination-03.jpg',
    highlights: 'Fairy chimneys, hot air balloon rides, ancient cave dwellings.',
    thingsToDo: 'Hot air balloon at sunrise, explore Göreme Open Air Museum, hike Rose Valley.'
  },
  {
    id: 'rajaampat',
    name: 'Raja Ampat',
    country: 'Indonesia',
    style: ['Beach', 'Nature', 'Adventure'],
    bestTime: 'October – April',
    recommendedDays: '6–8 days',
    estimatedBudget: 10000000,
    image: 'assets/images/destination-04.jpg',
    highlights: 'Pristine coral reefs, turquoise lagoons, secluded islands.',
    thingsToDo: 'Dive at Cape Kri, kayak through hidden coves, island hop to Wayag.'
  }
];

// Activity Data
const activities = [
  { id: 1, name: 'Fushimi Inari Walk', location: 'Kyoto', duration: '2 hours', price: 0, category: 'culture' },
  { id: 2, name: 'Arashiyama Bamboo Grove', location: 'Kyoto', duration: '1.5 hours', price: 0, category: 'nature' },
  { id: 3, name: 'Tea Ceremony Experience', location: 'Kyoto', duration: '1 hour', price: 150000, category: 'culture' },
  { id: 4, name: 'Nishiki Market Food Tour', location: 'Kyoto', duration: '2.5 hours', price: 250000, category: 'food' },
  { id: 5, name: 'Kinkaku-ji Golden Pavilion', location: 'Kyoto', duration: '1.5 hours', price: 40000, category: 'culture' },
  { id: 6, name: 'Gion District Walk', location: 'Kyoto', duration: '2 hours', price: 0, category: 'culture' },
  { id: 7, name: 'Surf Lesson in Uluwatu', location: 'Bali', duration: '3 hours', price: 350000, category: 'adventure' },
  { id: 8, name: 'Ubud Rice Terrace Trek', location: 'Bali', duration: '2 hours', price: 100000, category: 'nature' },
  { id: 9, name: 'Tanah Lot Sunset Visit', location: 'Bali', duration: '1.5 hours', price: 30000, category: 'relax' },
  { id: 10, name: 'Balinese Cooking Class', location: 'Bali', duration: '3 hours', price: 300000, category: 'food' },
  { id: 11, name: 'Hagia Sophia & Blue Mosque Tour', location: 'Istanbul', duration: '4 hours', price: 200000, category: 'culture' },
  { id: 12, name: 'Bosphorus Sunset Cruise', location: 'Istanbul', duration: '2 hours', price: 250000, category: 'relax' },
  { id: 13, name: 'Grand Bazaar Shopping', location: 'Istanbul', duration: '3 hours', price: 0, category: 'city' },
  { id: 14, name: 'Swiss Alps Hiking Trail', location: 'Swiss Alps', duration: '5 hours', price: 500000, category: 'adventure' },
  { id: 15, name: 'Glacier Express Ride', location: 'Swiss Alps', duration: '8 hours', price: 1200000, category: 'nature' },
  { id: 16, name: 'Paragliding in Interlaken', location: 'Swiss Alps', duration: '2 hours', price: 800000, category: 'adventure' }
];

// WhatsApp number (single source)
const WHATSAPP_NUMBER = '6281234567890'; // ganti dengan nomor asli

// ===================== STATE =====================

let state = {
  // Filters
  searchDestination: '',
  searchMonth: '',
  searchStyle: '',
  currentStyleFilter: 'All',
  currentBudgetFilter: null, // 'under5', '5to10', 'above10'
  currentDurationFilter: null, // '1-3', '4-7', '8+'
  // UI state
  mobileMenuOpen: false,
  filterSheetOpen: false,
  // Destination modal
  selectedDestinationId: null,
  // Add activity modal
  addActivityId: null,
  // Saved destinations (wishlist)
  savedDestinations: JSON.parse(localStorage.getItem('aurelia_saved_destinations') || '[]'),
  // Itinerary
  itinerary: JSON.parse(localStorage.getItem('aurelia_itinerary') || 'null'),
  // Checklist
  checklist: JSON.parse(localStorage.getItem('aurelia_checklist') || '{"passport":false,"insurance":false,"accommodation":false,"transport":false,"currency":false,"documents":false}')
};

// ===================== DOM REFERENCES =====================

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const dom = {
  navbar: $('#navbar'),
  hamburgerBtn: $('#hamburger-btn'),
  mobileMenu: $('#mobile-menu'),
  mobileNavLinks: $$('.mobile-nav-link'),
  navTripCount: $('#nav-trip-count'),
  mobileNavTripCount: $('#mobile-nav-trip-count'),

  searchInput: $('#search-destination'),
  searchMonth: $('#search-month'),
  searchStyle: $('#search-style'),
  searchBtn: $('#search-btn'),
  searchNoResults: $('#search-no-results'),

  destinationGrid: $('#destination-grid'),
  desktopFilters: $('#desktop-filters'),
  mobileFilters: $('#mobile-filters'),
  mobileFilterBtn: $('#mobile-filter-btn'),
  filterSheet: $('#filter-sheet'),
  filterSheetBackdrop: $('#filter-sheet-backdrop'),
  filterSheetPanel: $('#filter-sheet-panel'),
  filterSheetClose: $('#filter-sheet-close'),
  sheetStyleFilters: $('#sheet-style-filters'),
  sheetBudgetFilters: $('#sheet-budget-filters'),
  sheetDurationFilters: $('#sheet-duration-filters'),
  sheetApply: $('#sheet-apply'),
  sheetReset: $('#sheet-reset'),

  travelStyleGrid: $('#travel-style-grid'),
  featuredAccordion: $('#featured-accordion'),

  activityGrid: $('#activity-grid'),

  tripDashboard: $('#trip-dashboard'),
  tripEmptyState: $('#trip-empty-state'),
  tripContent: $('#trip-content'),
  tripName: $('#trip-name'),
  tripMeta: $('#trip-meta'),
  itineraryDays: $('#itinerary-days'),
  clearTripBtn: $('#clear-trip-btn'),

  budgetActivities: $('#budget-activities'),
  budgetAccommodation: $('#budget-accommodation'),
  budgetTransport: $('#budget-transport'),
  budgetFood: $('#budget-food'),
  budgetTotal: $('#budget-total'),

  tripProgressSection: $('#trip-progress-section'),
  tripProgressLabel: $('#trip-progress-label'),
  tripProgressPercent: $('#trip-progress-percent'),
  tripProgressBar: $('#trip-progress-bar'),

  shareTripBtn: $('#share-trip-btn'),

  checklist: $('#checklist'),

  moodGrid: $('#mood-grid'),
  moodResult: $('#mood-result'),

  tipCards: $$('.tip-card'),
  tipModal: $('#tip-modal'),
  tipModalTitle: $('#tip-modal-title'),
  tipModalBody: $('#tip-modal-body'),
  tipModalClose: $$('.tip-modal-close'),

  destinationModal: $('#destination-modal'),
  destinationModalTitle: $('#modal-title'),
  destinationModalBody: $('#modal-body'),
  destinationModalClose: $('#modal-close'),

  addTripModal: $('#add-trip-modal'),
  addTripBody: $('#add-trip-body'),
  addTripClose: $$('.add-trip-close'),

  whatsappBtn: $('#whatsapp-btn'),
  footerWhatsapp: $('#footer-whatsapp'),

  mapSvg: $('#map-svg')
};

// ===================== UTILITY FUNCTIONS =====================

function formatCurrency(amount) {
  return 'Rp' + amount.toLocaleString('id-ID');
}

function parseBudget(budgetStr) {
  if (budgetStr === 'under5') return { min: 0, max: 5000000 };
  if (budgetStr === '5to10') return { min: 5000000, max: 10000000 };
  if (budgetStr === 'above10') return { min: 10000000, max: Infinity };
  return null;
}

function parseDuration(durationStr) {
  if (durationStr === '1-3') return { min: 1, max: 3 };
  if (durationStr === '4-7') return { min: 4, max: 7 };
  if (durationStr === '8+') return { min: 8, max: Infinity };
  return null;
}

function getDestinationById(id) {
  return destinations.find(d => d.id === id);
}

function getActivityById(id) {
  return activities.find(a => a.id === id);
}

function getTripDaysArray() {
  if (!state.itinerary || !state.itinerary.days) return [];
  return Object.keys(state.itinerary.days).map(Number).sort((a,b) => a-b);
}

function getTotalDays() {
  const days = getTripDaysArray();
  return days.length || 5; // default 5 if no days
}

function getPlannedDays() {
  if (!state.itinerary) return 0;
  const days = getTripDaysArray();
  return days.filter(day => {
    return state.itinerary.days[day] && state.itinerary.days[day].length > 0;
  }).length;
}

function getTotalActivitiesInItinerary() {
  if (!state.itinerary) return 0;
  let total = 0;
  const days = getTripDaysArray();
  days.forEach(day => {
    if (state.itinerary.days[day]) total += state.itinerary.days[day].length;
  });
  return total;
}

function getActivityTotalPrice() {
  if (!state.itinerary) return 0;
  let total = 0;
  const days = getTripDaysArray();
  days.forEach(day => {
    const ids = state.itinerary.days[day] || [];
    ids.forEach(id => {
      const activity = getActivityById(id);
      if (activity) total += activity.price;
    });
  });
  return total;
}

function getCurrentBudget() {
  if (!state.itinerary) return { accommodation: 3000000, transport: 1500000, food: 1000000 };
  return state.itinerary.budget || { accommodation: 3000000, transport: 1500000, food: 1000000 };
}

function getTotalBudget() {
  const activitiesPrice = getActivityTotalPrice();
  const budget = getCurrentBudget();
  return activitiesPrice + (budget.accommodation || 0) + (budget.transport || 0) + (budget.food || 0);
}

function saveState() {
  localStorage.setItem('aurelia_saved_destinations', JSON.stringify(state.savedDestinations));
  localStorage.setItem('aurelia_itinerary', JSON.stringify(state.itinerary));
  localStorage.setItem('aurelia_checklist', JSON.stringify(state.checklist));
}

function getFilteredDestinations() {
  let filtered = [...destinations];

  // Search text (name, country, or style)
  if (state.searchDestination.trim()) {
    const query = state.searchDestination.trim().toLowerCase();
    filtered = filtered.filter(dest => {
      return dest.name.toLowerCase().includes(query) ||
             dest.country.toLowerCase().includes(query) ||
             dest.style.some(s => s.toLowerCase().includes(query));
    });
  }

  // Search month (bestTime contains month name)
  if (state.searchMonth) {
    const month = state.searchMonth.toLowerCase();
    filtered = filtered.filter(dest => dest.bestTime.toLowerCase().includes(month));
  }

  // Search style from hero
  if (state.searchStyle) {
    filtered = filtered.filter(dest => dest.style.includes(state.searchStyle));
  }

  // Style filter (tabs or sheet)
  if (state.currentStyleFilter !== 'All') {
    filtered = filtered.filter(dest => dest.style.includes(state.currentStyleFilter));
  }

  // Budget filter
  if (state.currentBudgetFilter) {
    const budgetRange = parseBudget(state.currentBudgetFilter);
    filtered = filtered.filter(dest => {
      return dest.estimatedBudget >= budgetRange.min && dest.estimatedBudget <= budgetRange.max;
    });
  }

  // Duration filter
  if (state.currentDurationFilter) {
    const durationRange = parseDuration(state.currentDurationFilter);
    filtered = filtered.filter(dest => {
      // parse recommendedDays like "5–7 days" -> average 6
      const daysStr = dest.recommendedDays.split('–')[0]; // "5" or "6"
      const daysNum = parseInt(daysStr);
      return daysNum >= durationRange.min && daysNum <= durationRange.max;
    });
  }

  return filtered;
}

// ===================== RENDER FUNCTIONS =====================

function renderDestinations() {
  const filtered = getFilteredDestinations();
  const grid = dom.destinationGrid;

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="col-span-full text-center py-12">
      <p class="text-lg font-medium text-ink mb-2">No destination found.</p>
      <p class="text-muted text-sm">Try another destination or travel style.</p>
    </div>`;
    return;
  }

  grid.innerHTML = filtered.map(dest => {
    const isSaved = state.savedDestinations.includes(dest.id);
    return `
      <div class="destination-card group" data-destination-id="${dest.id}">
        <div class="relative overflow-hidden">
          <img src="${dest.image}" alt="${dest.name}" loading="lazy" 
               onerror="this.src='assets/images/hero.jpg'">
          <button class="save-dest-btn absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:bg-coral hover:text-white transition-all" data-dest-id="${dest.id}" title="Save">
            <span class="text-lg">${isSaved ? '♥' : '♡'}</span>
          </button>
        </div>
        <div class="p-4">
          <h3 class="font-serif text-xl text-ink">${dest.name}</h3>
          <p class="text-sm text-muted">${dest.country}</p>
          <p class="text-xs text-deepgreen mt-2 font-medium">${dest.style.join(' / ')}</p>
          <p class="text-sm font-semibold text-coral mt-3">Explore →</p>
        </div>
      </div>
    `;
  }).join('');

  // Add event listeners to cards and save buttons
  grid.querySelectorAll('.destination-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.save-dest-btn')) return; // ignore save button clicks
      const id = card.dataset.destinationId;
      openDestinationModal(id);
    });
  });

  grid.querySelectorAll('.save-dest-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const destId = btn.dataset.destId;
      toggleSaveDestination(destId);
    });
  });
}

function renderActivityGrid() {
  const grid = dom.activityGrid;
  grid.innerHTML = activities.map(activity => {
    return `
      <div class="activity-card" data-activity-id="${activity.id}">
        <div class="flex justify-between items-start mb-2">
          <h3 class="font-semibold text-ink">${activity.name}</h3>
          <span class="text-xs font-bold uppercase tracking-wide px-2 py-1 rounded-full bg-sky text-deepgreen">${activity.category}</span>
        </div>
        <p class="text-sm text-muted">${activity.location} · ${activity.duration}</p>
        <div class="flex items-center justify-between mt-3">
          <span class="font-semibold text-deepgreen">${activity.price === 0 ? 'Free' : formatCurrency(activity.price)}</span>
          <button class="add-activity-btn bg-deepgreen text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-ink transition-all min-h-[44px]" data-activity-id="${activity.id}">
            + Add
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Add event listeners to add buttons
  grid.querySelectorAll('.add-activity-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const activityId = parseInt(btn.dataset.activityId);
      openAddTripModal(activityId);
    });
  });
}

function renderItinerary() {
  const container = dom.itineraryDays;
  if (!state.itinerary || !state.itinerary.days || Object.keys(state.itinerary.days).length === 0) {
    container.innerHTML = `<p class="text-muted text-center py-6">Your itinerary is waiting. Explore a destination and start planning.</p>`;
    return;
  }

  const days = getTripDaysArray();
  container.innerHTML = days.map(day => {
    const activitiesForDay = state.itinerary.days[day] || [];
    const activitiesHtml = activitiesForDay.length > 0 
      ? activitiesForDay.map(activityId => {
          const act = getActivityById(activityId);
          if (!act) return '';
          return `
            <div class="flex items-center justify-between bg-white p-3 rounded-lg border border-border mb-2">
              <div>
                <p class="font-medium text-sm">${act.name}</p>
                <p class="text-xs text-muted">${act.location} · ${act.duration} · ${act.price === 0 ? 'Free' : formatCurrency(act.price)}</p>
              </div>
              <div class="flex gap-1">
                <button class="move-activity-btn text-xs text-deepgreen hover:text-ink p-1" data-activity-id="${activityId}" data-current-day="${day}" title="Move to another day">↔</button>
                <button class="remove-activity-btn text-xs text-coral hover:text-red-600 p-1" data-activity-id="${activityId}" data-day="${day}" title="Remove">✕</button>
              </div>
            </div>
          `;
        }).join('')
      : `<p class="text-sm text-muted italic">No activities yet. Add from activity list below.</p>`;

    return `
      <div class="itinerary-day rounded-xl overflow-hidden">
        <div class="itinerary-day-header">
          <span>Day ${day}</span>
          <span class="text-xs text-muted">${activitiesForDay.length} activities</span>
        </div>
        <div class="p-4">
          ${activitiesHtml}
        </div>
      </div>
    `;
  }).join('');

  // Attach event listeners for remove and move buttons
  container.querySelectorAll('.remove-activity-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const activityId = parseInt(btn.dataset.activityId);
      const day = parseInt(btn.dataset.day);
      removeActivityFromDay(activityId, day);
    });
  });

  container.querySelectorAll('.move-activity-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const activityId = parseInt(btn.dataset.activityId);
      const currentDay = parseInt(btn.dataset.currentDay);
      openMoveActivityModal(activityId, currentDay);
    });
  });
}

function renderTripDashboard() {
  if (!state.itinerary) {
    dom.tripEmptyState.classList.remove('hidden');
    dom.tripContent.classList.add('hidden');
    dom.tripProgressSection.classList.add('hidden');
    dom.navTripCount.classList.add('hidden');
    dom.mobileNavTripCount.classList.add('hidden');
    return;
  }

  dom.tripEmptyState.classList.add('hidden');
  dom.tripContent.classList.remove('hidden');
  dom.tripProgressSection.classList.remove('hidden');

  const dest = getDestinationById(state.itinerary.destinationId);
  const destName = dest ? dest.name : 'Your Trip';
  dom.tripName.textContent = destName + ' Escape';
  const totalActivities = getTotalActivitiesInItinerary();
  dom.tripMeta.textContent = `${getTotalDays()} Days · ${totalActivities} Activities`;

  // Render itinerary days
  renderItinerary();

  // Update budget inputs
  const budget = getCurrentBudget();
  dom.budgetAccommodation.value = budget.accommodation;
  dom.budgetTransport.value = budget.transport;
  dom.budgetFood.value = budget.food;
  updateBudgetDisplay();

  // Update progress
  const totalDays = getTotalDays();
  const plannedDays = getPlannedDays();
  const percent = totalDays > 0 ? Math.round((plannedDays / totalDays) * 100) : 0;
  dom.tripProgressLabel.textContent = `${plannedDays} / ${totalDays} Days Planned`;
  dom.tripProgressPercent.textContent = `${percent}%`;
  dom.tripProgressBar.style.width = `${percent}%`;

  // Nav count
  const count = totalActivities;
  if (count > 0) {
    dom.navTripCount.textContent = count;
    dom.navTripCount.classList.remove('hidden');
    dom.navTripCount.classList.add('inline-flex');
    dom.mobileNavTripCount.textContent = count;
    dom.mobileNavTripCount.classList.remove('hidden');
  } else {
    dom.navTripCount.classList.add('hidden');
    dom.mobileNavTripCount.classList.add('hidden');
  }
}

function updateBudgetDisplay() {
  const activitiesPrice = getActivityTotalPrice();
  dom.budgetActivities.textContent = formatCurrency(activitiesPrice);
  const total = getTotalBudget();
  dom.budgetTotal.textContent = formatCurrency(total);
}

function renderChecklist() {
  const checkboxes = dom.checklist.querySelectorAll('.checklist-checkbox');
  checkboxes.forEach(cb => {
    const key = cb.dataset.checklist;
    cb.checked = state.checklist[key] || false;
  });
}

function updateFilterUI() {
  // Desktop filter tabs
  dom.desktopFilters.querySelectorAll('.filter-tab').forEach(tab => {
    const filter = tab.dataset.filter;
    if (filter === state.currentStyleFilter) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  // Mobile filter tabs
  dom.mobileFilters.querySelectorAll('.filter-tab-mobile').forEach(tab => {
    const filter = tab.dataset.filter;
    if (filter === state.currentStyleFilter) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  // Sheet chips
  dom.sheetStyleFilters.querySelectorAll('.sheet-filter-chip').forEach(chip => {
    const style = chip.dataset.styleFilter;
    if (state.currentStyleFilter === style) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });
  dom.sheetBudgetFilters.querySelectorAll('.sheet-filter-chip').forEach(chip => {
    const budget = chip.dataset.budgetFilter;
    if (state.currentBudgetFilter === budget) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });
  dom.sheetDurationFilters.querySelectorAll('.sheet-filter-chip').forEach(chip => {
    const dur = chip.dataset.durationFilter;
    if (state.currentDurationFilter === dur) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });
}

// ===================== MODAL FUNCTIONS =====================

function openDestinationModal(destinationId) {
  const dest = getDestinationById(destinationId);
  if (!dest) return;

  state.selectedDestinationId = destinationId;
  const isSaved = state.savedDestinations.includes(destinationId);

  dom.destinationModalTitle.textContent = dest.name;
  dom.destinationModalBody.innerHTML = `
    <img src="${dest.image}" alt="${dest.name}" class="w-full h-48 object-cover rounded-xl mb-4" onerror="this.src='assets/images/hero.jpg'">
    <p class="text-muted">${dest.country}</p>
    <div class="grid grid-cols-2 gap-4 my-4">
      <div><p class="text-xs text-muted uppercase">Best Time</p><p class="font-medium">${dest.bestTime}</p></div>
      <div><p class="text-xs text-muted uppercase">Recommended</p><p class="font-medium">${dest.recommendedDays}</p></div>
      <div><p class="text-xs text-muted uppercase">Budget</p><p class="font-medium">${formatCurrency(dest.estimatedBudget)}</p></div>
      <div><p class="text-xs text-muted uppercase">Style</p><p class="font-medium">${dest.style.join(', ')}</p></div>
    </div>
    <div class="mb-4">
      <p class="text-xs text-muted uppercase mb-1">Highlights</p>
      <p>${dest.highlights}</p>
    </div>
    <div class="mb-4">
      <p class="text-xs text-muted uppercase mb-1">Things To Do</p>
      <p>${dest.thingsToDo}</p>
    </div>
    <div class="flex flex-col sm:flex-row gap-3 mt-6">
      <button id="modal-save-btn" class="flex-1 inline-flex items-center justify-center gap-2 border border-deepgreen text-deepgreen px-5 py-3.5 rounded-full font-semibold hover:bg-sky transition-all min-h-[48px]">
        <span>${isSaved ? '♥ Saved' : '♡ Save'}</span>
      </button>
      <button id="modal-add-trip-btn" class="flex-1 bg-deepgreen text-white px-5 py-3.5 rounded-full font-semibold hover:bg-ink transition-all min-h-[48px]">
        Add to My Trip
      </button>
    </div>
  `;

  dom.destinationModal.classList.add('active');

  // Save button
  document.getElementById('modal-save-btn').addEventListener('click', () => {
    toggleSaveDestination(destinationId);
    // update button text
    const btn = document.getElementById('modal-save-btn');
    const isNowSaved = state.savedDestinations.includes(destinationId);
    btn.querySelector('span').textContent = isNowSaved ? '♥ Saved' : '♡ Save';
  });

  // Add to trip button
  document.getElementById('modal-add-trip-btn').addEventListener('click', () => {
    addDestinationToTrip(destinationId);
    closeDestinationModal();
  });
}

function closeDestinationModal() {
  dom.destinationModal.classList.remove('active');
  state.selectedDestinationId = null;
}

function openAddTripModal(activityId) {
  if (!state.itinerary) {
    alert('Please create a trip first. Choose a destination and add it to My Trip.');
    return;
  }
  state.addActivityId = activityId;
  const days = getTripDaysArray();
  dom.addTripBody.innerHTML = `
    <p class="text-sm text-muted mb-4">Add to which day?</p>
    <div class="grid grid-cols-3 gap-2">
      ${days.map(day => `
        <button class="day-pick-btn bg-cream border border-border rounded-lg py-3 px-2 font-medium hover:bg-sky transition-all" data-day="${day}">Day ${day}</button>
      `).join('')}
    </div>
  `;
  dom.addTripModal.classList.add('active');
  dom.addTripBody.querySelectorAll('.day-pick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const day = parseInt(btn.dataset.day);
      addActivityToDay(activityId, day);
      closeAddTripModal();
    });
  });
}

function closeAddTripModal() {
  dom.addTripModal.classList.remove('active');
  state.addActivityId = null;
}

function openMoveActivityModal(activityId, currentDay) {
  if (!state.itinerary) return;
  const days = getTripDaysArray().filter(d => d !== currentDay);
  if (days.length === 0) {
    alert('No other days available.');
    return;
  }
  dom.addTripBody.innerHTML = `
    <p class="text-sm text-muted mb-4">Move activity to day:</p>
    <div class="grid grid-cols-3 gap-2">
      ${days.map(day => `
        <button class="day-pick-btn bg-cream border border-border rounded-lg py-3 px-2 font-medium hover:bg-sky transition-all" data-day="${day}">Day ${day}</button>
      `).join('')}
    </div>
  `;
  dom.addTripModal.classList.add('active');
  dom.addTripBody.querySelectorAll('.day-pick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const newDay = parseInt(btn.dataset.day);
      moveActivity(activityId, currentDay, newDay);
      closeAddTripModal();
    });
  });
}

// ===================== ACTION FUNCTIONS =====================

function toggleSaveDestination(destId) {
  const index = state.savedDestinations.indexOf(destId);
  if (index > -1) {
    state.savedDestinations.splice(index, 1);
  } else {
    state.savedDestinations.push(destId);
  }
  saveState();
  renderDestinations();
  // if modal open, update button
  if (state.selectedDestinationId === destId && dom.destinationModal.classList.contains('active')) {
    const btn = document.getElementById('modal-save-btn');
    if (btn) {
      const isSaved = state.savedDestinations.includes(destId);
      btn.querySelector('span').textContent = isSaved ? '♥ Saved' : '♡ Save';
    }
  }
}

function addDestinationToTrip(destId) {
  const dest = getDestinationById(destId);
  if (!dest) return;
  // Create new itinerary
  state.itinerary = {
    destinationId: destId,
    days: {
      1: [],
      2: [],
      3: [],
      4: [],
      5: []
    },
    budget: {
      accommodation: 3000000,
      transport: 1500000,
      food: 1000000
    }
  };
  saveState();
  renderTripDashboard();
  renderDestinations(); // update save hearts maybe
  // scroll to my trip section
  document.getElementById('my-trip').scrollIntoView({ behavior: 'smooth' });
}

function addActivityToDay(activityId, day) {
  if (!state.itinerary) return;
  if (!state.itinerary.days[day]) {
    state.itinerary.days[day] = [];
  }
  if (!state.itinerary.days[day].includes(activityId)) {
    state.itinerary.days[day].push(activityId);
    saveState();
    renderTripDashboard();
    renderItinerary(); // already called by renderTripDashboard
    updateBudgetDisplay();
  } else {
    alert('Activity already in this day.');
  }
}

function removeActivityFromDay(activityId, day) {
  if (!state.itinerary || !state.itinerary.days[day]) return;
  const index = state.itinerary.days[day].indexOf(activityId);
  if (index > -1) {
    state.itinerary.days[day].splice(index, 1);
    saveState();
    renderTripDashboard();
    updateBudgetDisplay();
  }
}

function moveActivity(activityId, fromDay, toDay) {
  if (!state.itinerary) return;
  removeActivityFromDay(activityId, fromDay);
  addActivityToDay(activityId, toDay);
}

function clearTrip() {
  if (confirm('Are you sure you want to clear your trip?')) {
    state.itinerary = null;
    saveState();
    renderTripDashboard();
    renderDestinations();
  }
}

function shareTrip() {
  if (!state.itinerary) return;
  const dest = getDestinationById(state.itinerary.destinationId);
  const destName = dest ? dest.name : 'Destination';
  const days = getTripDaysArray();
  let summary = `AURELIA TRIP\n\nDestination: ${destName}\nDuration: ${days.length} Days\n\n`;
  days.forEach(day => {
    const acts = state.itinerary.days[day] || [];
    const actNames = acts.map(id => {
      const act = getActivityById(id);
      return act ? act.name : '';
    }).filter(Boolean).join(', ');
    summary += `Day ${day}: ${actNames || 'No activities'}\n`;
  });
  const totalBudget = getTotalBudget();
  summary += `\nEstimated Budget: ${formatCurrency(totalBudget)}`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(summary).then(() => {
      alert('Trip summary copied to clipboard!');
    }).catch(() => {
      fallbackCopy(summary);
    });
  } else {
    fallbackCopy(summary);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('Trip summary copied to clipboard!');
}

function sendWhatsApp() {
  if (!state.itinerary) {
    alert('Please plan a trip first.');
    return;
  }
  const dest = getDestinationById(state.itinerary.destinationId);
  const destName = dest ? dest.name : 'Not set';
  const days = getTripDaysArray().length;
  const style = dest ? dest.style.join(', ') : 'Any';
  const budget = formatCurrency(getTotalBudget());
  const message = `Halo AURELIA, saya ingin berkonsultasi tentang perjalanan.\n\nDestinasi: ${destName}\nDurasi: ${days} Days\nTravel Style: ${style}\nEstimasi Budget: ${budget}`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// ===================== EVENT HANDLERS =====================

function setupEventListeners() {
  // Mobile menu
  dom.hamburgerBtn.addEventListener('click', () => {
    state.mobileMenuOpen = !state.mobileMenuOpen;
    dom.mobileMenu.classList.toggle('hidden', !state.mobileMenuOpen);
    dom.hamburgerBtn.classList.toggle('active', state.mobileMenuOpen);
    dom.hamburgerBtn.setAttribute('aria-expanded', state.mobileMenuOpen);
  });

  dom.mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      state.mobileMenuOpen = false;
      dom.mobileMenu.classList.add('hidden');
      dom.hamburgerBtn.classList.remove('active');
      dom.hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      dom.navbar.classList.add('scrolled');
    } else {
      dom.navbar.classList.remove('scrolled');
    }
  });

  // Search input realtime
  dom.searchInput.addEventListener('input', (e) => {
    state.searchDestination = e.target.value;
    renderDestinations();
  });
  dom.searchMonth.addEventListener('change', (e) => {
    state.searchMonth = e.target.value;
    renderDestinations();
  });
  dom.searchStyle.addEventListener('change', (e) => {
    state.searchStyle = e.target.value;
    renderDestinations();
  });
  dom.searchBtn.addEventListener('click', () => {
    document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
  });

  // Desktop filter tabs
  dom.desktopFilters.addEventListener('click', (e) => {
    const tab = e.target.closest('.filter-tab');
    if (!tab) return;
    const filter = tab.dataset.filter;
    state.currentStyleFilter = filter;
    updateFilterUI();
    renderDestinations();
  });

  // Mobile filter tabs (horizontal)
  dom.mobileFilters.addEventListener('click', (e) => {
    const tab = e.target.closest('.filter-tab-mobile');
    if (!tab) return;
    const filter = tab.dataset.filter;
    state.currentStyleFilter = filter;
    updateFilterUI();
    renderDestinations();
  });

  // Mobile filter button -> open sheet
  dom.mobileFilterBtn.addEventListener('click', () => {
    openFilterSheet();
  });

  // Filter sheet
  dom.filterSheetBackdrop.addEventListener('click', closeFilterSheet);
  dom.filterSheetClose.addEventListener('click', closeFilterSheet);

  // Sheet style chips
  dom.sheetStyleFilters.addEventListener('click', (e) => {
    const chip = e.target.closest('.sheet-filter-chip');
    if (!chip) return;
    const style = chip.dataset.styleFilter;
    if (state.currentStyleFilter === style) {
      state.currentStyleFilter = 'All';
    } else {
      state.currentStyleFilter = style;
    }
    updateFilterUI();
  });

  // Sheet budget chips
  dom.sheetBudgetFilters.addEventListener('click', (e) => {
    const chip = e.target.closest('.sheet-filter-chip');
    if (!chip) return;
    const budget = chip.dataset.budgetFilter;
    if (state.currentBudgetFilter === budget) {
      state.currentBudgetFilter = null;
    } else {
      state.currentBudgetFilter = budget;
    }
    updateFilterUI();
  });

  // Sheet duration chips
  dom.sheetDurationFilters.addEventListener('click', (e) => {
    const chip = e.target.closest('.sheet-filter-chip');
    if (!chip) return;
    const duration = chip.dataset.durationFilter;
    if (state.currentDurationFilter === duration) {
      state.currentDurationFilter = null;
    } else {
      state.currentDurationFilter = duration;
    }
    updateFilterUI();
  });

  dom.sheetApply.addEventListener('click', () => {
    renderDestinations();
    closeFilterSheet();
  });

  dom.sheetReset.addEventListener('click', () => {
    state.currentStyleFilter = 'All';
    state.currentBudgetFilter = null;
    state.currentDurationFilter = null;
    updateFilterUI();
    renderDestinations();
    closeFilterSheet();
  });

  // Travel style cards -> set style filter
  dom.travelStyleGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.travel-style-card');
    if (!card) return;
    const style = card.dataset.style;
    state.currentStyleFilter = style;
    updateFilterUI();
    renderDestinations();
    document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
  });

  // Featured accordion
  dom.featuredAccordion.addEventListener('click', (e) => {
    const header = e.target.closest('.accordion-header');
    if (!header) return;
    const item = header.parentElement;
    const body = item.querySelector('.accordion-body');
    const isActive = item.classList.contains('active');
    // close all
    dom.featuredAccordion.querySelectorAll('.accordion-item').forEach(i => {
      i.classList.remove('active');
      i.querySelector('.accordion-body').classList.add('hidden');
    });
    if (!isActive) {
      item.classList.add('active');
      body.classList.remove('hidden');
    }
  });

  // Activity grid add buttons
  dom.activityGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('.add-activity-btn');
    if (!btn) return;
    const activityId = parseInt(btn.dataset.activityId);
    openAddTripModal(activityId);
  });

  // Itinerary remove/move buttons (delegated)
  dom.itineraryDays.addEventListener('click', (e) => {
    const removeBtn = e.target.closest('.remove-activity-btn');
    if (removeBtn) {
      const activityId = parseInt(removeBtn.dataset.activityId);
      const day = parseInt(removeBtn.dataset.day);
      removeActivityFromDay(activityId, day);
      return;
    }
    const moveBtn = e.target.closest('.move-activity-btn');
    if (moveBtn) {
      const activityId = parseInt(moveBtn.dataset.activityId);
      const currentDay = parseInt(moveBtn.dataset.currentDay);
      openMoveActivityModal(activityId, currentDay);
    }
  });

  // Budget inputs change
  ['budgetAccommodation', 'budgetTransport', 'budgetFood'].forEach(id => {
    dom[id].addEventListener('input', () => {
      if (!state.itinerary) return;
      const value = parseInt(dom[id].value) || 0;
      const key = id.replace('budget', '').toLowerCase(); // 'accommodation', 'transport', 'food'
      state.itinerary.budget[key] = value;
      saveState();
      updateBudgetDisplay();
    });
  });

  // Clear trip
  dom.clearTripBtn.addEventListener('click', clearTrip);

  // Share trip
  dom.shareTripBtn.addEventListener('click', shareTrip);

  // Checklist
  dom.checklist.addEventListener('change', (e) => {
    const checkbox = e.target;
    if (checkbox.classList.contains('checklist-checkbox')) {
      const key = checkbox.dataset.checklist;
      state.checklist[key] = checkbox.checked;
      saveState();
    }
  });

  // Mood cards
  dom.moodGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.mood-card');
    if (!card) return;
    const mood = card.dataset.mood;
    showMoodRecommendation(mood);
  });

  // Tip cards
  dom.tipCards.forEach(card => {
    card.addEventListener('click', () => {
      const tipType = card.dataset.tip;
      openTipModal(tipType);
    });
  });

  // Tip modal close
  dom.tipModalClose.forEach(btn => {
    btn.addEventListener('click', closeTipModal);
  });
  dom.tipModal.addEventListener('click', (e) => {
    if (e.target === dom.tipModal) closeTipModal();
  });

  // Destination modal close
  dom.destinationModalClose.addEventListener('click', closeDestinationModal);
  dom.destinationModal.addEventListener('click', (e) => {
    if (e.target === dom.destinationModal) closeDestinationModal();
  });

  // Add trip modal close
  dom.addTripClose.forEach(btn => btn.addEventListener('click', closeAddTripModal));
  dom.addTripModal.addEventListener('click', (e) => {
    if (e.target === dom.addTripModal) closeAddTripModal();
  });

  // WhatsApp
  dom.whatsappBtn.addEventListener('click', sendWhatsApp);
  dom.footerWhatsapp.addEventListener('click', (e) => {
    e.preventDefault();
    sendWhatsApp();
  });

  // Keyboard: Escape closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDestinationModal();
      closeAddTripModal();
      closeTipModal();
      closeFilterSheet();
    }
  });

  // Reveal on scroll
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealElements.forEach(el => revealObserver.observe(el));
}

function openFilterSheet() {
  dom.filterSheet.classList.remove('hidden');
  dom.filterSheet.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeFilterSheet() {
  dom.filterSheet.classList.remove('active');
  dom.filterSheet.classList.add('hidden');
  document.body.style.overflow = '';
}

function showMoodRecommendation(mood) {
  const resultDiv = dom.moodResult;
  let recommendations = [];
  switch (mood) {
    case 'relax':
      recommendations = ['Bali', 'Swiss Alps'];
      resultDiv.innerHTML = `<p class="font-medium mb-2">Perfect for slowing down:</p><p>🌿 ${recommendations.join(' & ')} — serene nature, gentle pace.</p>`;
      break;
    case 'explore':
      recommendations = ['Istanbul', 'Swiss Alps'];
      resultDiv.innerHTML = `<p class="font-medium mb-2">For the explorer in you:</p><p>⛰️ ${recommendations.join(' & ')} — rich history and adventure.</p>`;
      break;
    case 'eat':
      recommendations = ['Istanbul', 'Kyoto'];
      resultDiv.innerHTML = `<p class="font-medium mb-2">Foodie paradise:</p><p>🍜 ${recommendations.join(' & ')} — culinary journeys await.</p>`;
      break;
    case 'disconnect':
      recommendations = ['Bali', 'Swiss Alps'];
      resultDiv.innerHTML = `<p class="font-medium mb-2">Disconnect to reconnect:</p><p>🌊 ${recommendations.join(' & ')} — off-grid nature retreats.</p>`;
      break;
  }
  resultDiv.classList.remove('hidden');
  resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function openTipModal(tipType) {
  const tips = {
    when: {
      title: 'When to Go',
      body: 'Timing can transform your experience. For Bali, visit April–October for dry season. Kyoto shines in spring (March–May) for cherry blossoms. Istanbul is ideal April–June and September–November. Swiss Alps are best June–September for hiking.'
    },
    pack: {
      title: 'What to Pack',
      body: 'Pack light, layer smart. For beach destinations, bring quick-dry clothing. For cities, comfortable walking shoes. For mountains, include a warm layer and rain jacket. Always carry a universal adapter, reusable water bottle, and basic first aid.'
    },
    etiquette: {
      title: 'Local Etiquette',
      body: 'Respect local customs: In Japan, bow slightly and avoid eating while walking. In Bali, dress modestly when visiting temples and use your right hand for giving/receiving. In Türkiye, remove shoes before entering mosques. Learn a few basic phrases — it goes a long way.'
    },
    around: {
      title: 'Getting Around',
      body: 'Use public transport when possible — it’s often faster and cheaper. In Japan, get a Suica or Icoca card. In Istanbul, use the Istanbulkart for trams and ferries. In Switzerland, the Swiss Travel Pass covers trains, buses, and boats. Download offline maps before you go.'
    }
  };
  const tip = tips[tipType];
  if (!tip) return;
  dom.tipModalTitle.textContent = tip.title;
  dom.tipModalBody.innerHTML = `<p class="text-muted leading-relaxed">${tip.body}</p>`;
  dom.tipModal.classList.add('active');
}

function closeTipModal() {
  dom.tipModal.classList.remove('active');
}

// ===================== INITIALIZATION =====================

function init() {
  renderDestinations();
  renderActivityGrid();
  renderTripDashboard();
  renderChecklist();
  updateFilterUI();
  setupEventListeners();
  // Update reveal elements already visible
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('visible');
    }
  });
}

document.addEventListener('DOMContentLoaded', init);