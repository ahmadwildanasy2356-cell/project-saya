/* =========================================
   LŪMA RESORT — MAIN JAVASCRIPT
   ========================================= */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // =========================================
    // CONFIGURATION
    // =========================================
    const WHATSAPP_NUMBER = "6281234567890"; // Example: 628xxxxxxxxxx
    const TAX_RATE = 0.10; // 10% tax/service charge

    // =========================================
    // ROOM DATA (centralized)
    // =========================================
    const rooms = [
        {
            id: 1,
            name: "GARDEN ROOM",
            type: "Room",
            view: "Garden",
            size: 35,
            guests: 2,
            price: 2400000,
            image: "assets/images/room-01.jpg",
            interior: "assets/images/room-01-interior.jpg",
            detail: "assets/images/room-01-detail.jpg",
            viewImage: "assets/images/room-01-view.jpg",
            description: "A tranquil garden-facing room with natural textures and a private terrace, perfect for quiet mornings.",
            amenities: ["King Bed", "Private Bathroom", "Air Conditioning", "Wi-Fi", "Breakfast Available", "Mini Bar", "Bath Amenities", "Private Terrace"]
        },
        {
            id: 2,
            name: "OCEAN ROOM",
            type: "Room",
            view: "Ocean",
            size: 42,
            guests: 2,
            price: 3200000,
            image: "assets/images/room-02.jpg",
            interior: "assets/images/room-02-interior.jpg",
            detail: "assets/images/room-02-detail.jpg",
            viewImage: "assets/images/room-02-view.jpg",
            description: "Wake up to the sound of waves in this elegant room with partial ocean views and serene interiors.",
            amenities: ["King Bed", "Private Bathroom", "Air Conditioning", "Wi-Fi", "Breakfast Available", "Mini Bar", "Bath Amenities", "Ocean View"]
        },
        {
            id: 3,
            name: "JUNGLE VILLA",
            type: "Villa",
            view: "Jungle",
            size: 68,
            guests: 2,
            price: 4800000,
            image: "assets/images/room-03.jpg",
            interior: "assets/images/room-03-interior.jpg",
            detail: "assets/images/room-03-detail.jpg",
            viewImage: "assets/images/room-03-view.jpg",
            description: "A private villa nestled among tropical greenery, featuring a lush garden and outdoor relaxation space.",
            amenities: ["King Bed", "Private Bathroom", "Air Conditioning", "Wi-Fi", "Breakfast Available", "Mini Bar", "Bath Amenities", "Private Garden"]
        },
        {
            id: 4,
            name: "POOL VILLA",
            type: "Villa",
            view: "Garden",
            size: 82,
            guests: 2,
            price: 5800000,
            image: "assets/images/room-04.jpg",
            interior: "assets/images/room-04-interior.jpg",
            detail: "assets/images/room-04-detail.jpg",
            viewImage: "assets/images/room-04-view.jpg",
            description: "An exclusive villa with its own private pool, blending indoor-outdoor living with modern comfort.",
            amenities: ["King Bed", "Private Bathroom", "Air Conditioning", "Wi-Fi", "Breakfast Available", "Mini Bar", "Bath Amenities", "Private Pool"]
        },
        {
            id: 5,
            name: "OCEAN VILLA",
            type: "Villa",
            view: "Ocean",
            size: 95,
            guests: 2,
            price: 6500000,
            image: "assets/images/room-05.jpg",
            interior: "assets/images/room-05-interior.jpg",
            detail: "assets/images/room-05-detail.jpg",
            viewImage: "assets/images/room-05-view.jpg",
            description: "Perched above the ocean, this villa offers stunning panoramic views, a private pool, and direct beach access.",
            amenities: ["King Bed", "Private Bathroom", "Air Conditioning", "Wi-Fi", "Breakfast Available", "Mini Bar", "Bath Amenities", "Private Pool", "Ocean View"]
        },
        {
            id: 6,
            name: "LŪMA RESIDENCE",
            type: "Residence",
            view: "Ocean",
            size: 140,
            guests: 4,
            price: 9500000,
            image: "assets/images/room-06.jpg",
            interior: "assets/images/room-06-interior.jpg",
            detail: "assets/images/room-06-detail.jpg",
            viewImage: "assets/images/room-06-view.jpg",
            description: "The ultimate LŪMA experience: a spacious two-bedroom residence with private pool and sweeping ocean views.",
            amenities: ["2 Bedrooms", "King Bed", "Private Bathroom", "Air Conditioning", "Wi-Fi", "Breakfast Available", "Mini Bar", "Bath Amenities", "Private Pool", "Ocean View"]
        }
    ];

    // =========================================
    // STATE
    // =========================================
    let bookingState = {
        checkIn: '',
        checkOut: '',
        guests: 2,
        selectedRoomId: null,
        guestDetails: {
            fullName: '',
            email: '',
            whatsapp: '',
            specialRequest: ''
        },
        reservationId: ''
    };

    let currentFilters = {
        type: 'all',
        view: 'all',
        price: 'all'
    };

    // =========================================
    // DOM REFERENCES
    // =========================================
    const navbar = document.getElementById('navbar');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const stickyBookBtn = document.getElementById('sticky-book-btn');
    const bookingWidgetCheckIn = document.getElementById('check-in');
    const bookingWidgetCheckOut = document.getElementById('check-out');
    const bookingWidgetGuests = document.getElementById('guest-count');
    const checkAvailabilityBtn = document.getElementById('check-availability-btn');
    const roomGrid = document.getElementById('rooms-grid');
    const noRoomsFound = document.getElementById('no-rooms-found');
    const roomDetailModal = document.getElementById('room-detail-modal');
    const roomDetailContent = document.getElementById('room-detail-content');
    const roomDetailClose = document.getElementById('room-detail-close');
    const bookingModal = document.getElementById('booking-modal');
    const bookingModalContent = document.getElementById('booking-modal-content');
    const bookingModalClose = document.getElementById('booking-modal-close');
    const toast = document.getElementById('toast');

    // =========================================
    // UTILITY FUNCTIONS
    // =========================================
    function showToast(message, duration = 3000) {
        toast.textContent = message;
        toast.classList.add('show');
        toast.classList.remove('hidden');
        clearTimeout(toast._timeout);
        toast._timeout = setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.classList.add('hidden'), 500);
        }, duration);
    }

    function formatRupiah(amount) {
        return 'Rp ' + amount.toLocaleString('id-ID');
    }

    function calculateNights(checkIn, checkOut) {
        const start = new Date(checkIn);
        const end = new Date(checkOut);
        const diffTime = end - start;
        if (diffTime <= 0) return 0;
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    function getRoomById(id) {
        return rooms.find(room => room.id === id);
    }

    function getRoomPrice(room) {
        return room.price;
    }

    function getTaxAmount(subtotal) {
        return subtotal * TAX_RATE;
    }

    // Image fallback global handler
    document.addEventListener('error', function (e) {
        if (e.target.tagName === 'IMG') {
            e.target.onerror = null; // prevent infinite loop
            e.target.src = 'assets/images/hero.jpg';
        }
    }, true);

    // =========================================
    // NAVBAR SCROLL EFFECT
    // =========================================
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.style.borderBottom = '1px solid rgba(255,255,255,0.08)';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.borderBottom = '1px solid transparent';
        }
    }

    // =========================================
    // STICKY MOBILE BOOKING BUTTON
    // =========================================
    function toggleStickyButton() {
        if (window.innerWidth < 768) {
            if (window.scrollY > 400) {
                stickyBookBtn.classList.add('show');
            } else {
                stickyBookBtn.classList.remove('show');
            }
        } else {
            stickyBookBtn.classList.remove('show');
        }
    }

    // =========================================
    // MOBILE MENU
    // =========================================
    function openMobileMenu() {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('open');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 500);
        document.body.style.overflow = '';
    }

    // =========================================
    // ROOM CARD RENDERING
    // =========================================
    function renderRoomCards(filteredRooms) {
        if (!roomGrid) return;
        
        roomGrid.innerHTML = '';
        if (filteredRooms.length === 0) {
            noRoomsFound.classList.remove('hidden');
            return;
        }
        noRoomsFound.classList.add('hidden');

        filteredRooms.forEach(room => {
            const card = document.createElement('div');
            card.className = 'room-card group cursor-pointer';
            card.setAttribute('data-room-id', room.id);
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-label', `View details for ${room.name}`);
            
            const priceFormatted = formatRupiah(room.price);
            
            card.innerHTML = `
                <div class="room-card-image h-64 sm:h-72 overflow-hidden">
                    <img src="${room.image}" alt="${room.name} at LŪMA Resort" class="w-full h-full object-cover" loading="lazy" onerror="this.onerror=null;this.src='assets/images/hero.jpg'">
                </div>
                <div class="p-6">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-xs tracking-widest text-white/50 font-medium">ROOM ${room.id.toString().padStart(2, '0')}</span>
                        <span class="text-xs text-sand/70">${room.type.toUpperCase()}</span>
                    </div>
                    <h3 class="font-serif text-2xl text-white mb-1">${room.name}</h3>
                    <p class="text-sm text-white/50 mb-3">${room.view} · ${room.size} m² · ${room.guests} Guests · King Bed</p>
                    <div class="flex items-center justify-between">
                        <p class="text-white/70 text-sm">From <span class="text-white font-medium">${priceFormatted}</span> / night</p>
                        <span class="text-sand text-sm font-medium tracking-widest hover:text-white transition-colors duration-300">VIEW ROOM →</span>
                    </div>
                </div>
            `;
            
            card.addEventListener('click', () => openRoomDetail(room.id));
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openRoomDetail(room.id);
                }
            });
            
            roomGrid.appendChild(card);
        });
    }

    // =========================================
    // ROOM FILTERING
    // =========================================
    function applyFilters() {
        let filtered = [...rooms];
        
        // Filter by type
        if (currentFilters.type !== 'all') {
            filtered = filtered.filter(room => {
                if (currentFilters.type === 'room') return room.type === 'Room';
                if (currentFilters.type === 'villa') return room.type === 'Villa';
                if (currentFilters.type === 'residence') return room.type === 'Residence';
                return true;
            });
        }
        
        // Filter by view
        if (currentFilters.view !== 'all') {
            filtered = filtered.filter(room => {
                if (currentFilters.view === 'garden') return room.view === 'Garden';
                if (currentFilters.view === 'jungle') return room.view === 'Jungle';
                if (currentFilters.view === 'ocean') return room.view === 'Ocean';
                return true;
            });
        }
        
        // Filter by price (in millions)
        if (currentFilters.price !== 'all') {
            filtered = filtered.filter(room => {
                const priceInMillions = room.price / 1000000;
                if (currentFilters.price === 'under5') return priceInMillions < 5;
                if (currentFilters.price === '5to8') return priceInMillions >= 5 && priceInMillions <= 8;
                if (currentFilters.price === 'above8') return priceInMillions > 8;
                return true;
            });
        }
        
        renderRoomCards(filtered);
    }

    // =========================================
    // ROOM DETAIL MODAL
    // =========================================
    function openRoomDetail(roomId) {
        const room = getRoomById(roomId);
        if (!room) return;
        
        const priceFormatted = formatRupiah(room.price);
        
        roomDetailContent.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <div class="mb-4">
                        <img id="room-detail-main-image" src="${room.image}" alt="${room.name} main view" class="w-full h-80 sm:h-96 object-cover rounded-xl" onerror="this.onerror=null;this.src='assets/images/hero.jpg'">
                    </div>
                    <div class="flex gap-3 flex-wrap">
                        <img src="${room.image}" alt="${room.name} exterior" class="room-gallery-thumb active w-20 h-20 object-cover rounded-lg border-2 border-forest cursor-pointer" data-src="${room.image}" onclick="this.closest('.room-detail-content').querySelector('#room-detail-main-image').src='${room.image}'">
                        <img src="${room.interior}" alt="${room.name} interior" class="room-gallery-thumb w-20 h-20 object-cover rounded-lg border-2 border-transparent cursor-pointer" data-src="${room.interior}" onclick="this.closest('.room-detail-content').querySelector('#room-detail-main-image').src='${room.interior}'">
                        <img src="${room.detail}" alt="${room.name} detail" class="room-gallery-thumb w-20 h-20 object-cover rounded-lg border-2 border-transparent cursor-pointer" data-src="${room.detail}" onclick="this.closest('.room-detail-content').querySelector('#room-detail-main-image').src='${room.detail}'">
                        <img src="${room.viewImage}" alt="${room.name} view" class="room-gallery-thumb w-20 h-20 object-cover rounded-lg border-2 border-transparent cursor-pointer" data-src="${room.viewImage}" onclick="this.closest('.room-detail-content').querySelector('#room-detail-main-image').src='${room.viewImage}'">
                    </div>
                </div>
                <div>
                    <p class="text-xs tracking-widest text-terracotta font-medium mb-2">ROOM ${room.id.toString().padStart(2, '0')}</p>
                    <h2 class="font-serif text-3xl sm:text-4xl text-forest mb-4">${room.name}</h2>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="bg-forest/10 text-forest text-xs px-3 py-1.5 rounded-full">${room.size} M²</span>
                        <span class="bg-forest/10 text-forest text-xs px-3 py-1.5 rounded-full">${room.guests} GUESTS</span>
                        <span class="bg-forest/10 text-forest text-xs px-3 py-1.5 rounded-full">KING BED</span>
                        <span class="bg-forest/10 text-forest text-xs px-3 py-1.5 rounded-full">${room.view.toUpperCase()}</span>
                    </div>
                    <p class="text-charcoal/70 leading-relaxed mb-4">${room.description}</p>
                    <div class="mb-4">
                        <h3 class="text-xs tracking-widest text-charcoal/60 font-medium mb-2">AMENITIES</h3>
                        <div class="flex flex-wrap gap-2">
                            ${room.amenities.map(amenity => `<span class="bg-sand/30 text-charcoal text-xs px-3 py-1 rounded-full">${amenity}</span>`).join('')}
                        </div>
                    </div>
                    <div class="text-xl font-medium text-forest mb-4">FROM ${priceFormatted} / NIGHT</div>
                    <button id="room-detail-reserve-btn" class="bg-forest text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-widest w-full transition-all duration-300 hover:bg-charcoal cursor-pointer" data-room-id="${room.id}">
                        RESERVE THIS ROOM
                    </button>
                </div>
            </div>
        `;
        
        // Add click handler for gallery thumbs
        const thumbs = roomDetailContent.querySelectorAll('.room-gallery-thumb');
        const mainImage = roomDetailContent.querySelector('#room-detail-main-image');
        thumbs.forEach(thumb => {
            thumb.addEventListener('click', function() {
                thumbs.forEach(t => t.classList.remove('active', 'border-forest'));
                this.classList.add('active', 'border-forest');
                mainImage.src = this.dataset.src;
            });
        });
        
        // Reserve button
        const reserveBtn = roomDetailContent.querySelector('#room-detail-reserve-btn');
        reserveBtn.addEventListener('click', () => {
            bookingState.selectedRoomId = room.id;
            closeRoomDetail();
            openBookingModal(2); // go directly to step 2 (room already selected)
        });
        
        roomDetailModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeRoomDetail() {
        roomDetailModal.classList.remove('open');
        document.body.style.overflow = '';
    }

    // =========================================
    // BOOKING MODAL (Multi-step)
    // =========================================
    function openBookingModal(startStep = 1) {
        bookingModal.classList.add('open');
        document.body.style.overflow = 'hidden';
        renderBookingStep(startStep);
    }

    function closeBookingModal() {
        bookingModal.classList.remove('open');
        document.body.style.overflow = '';
        // Don't reset state, so user can resume if reopens? But better to reset after closing.
        // We'll reset after closing to avoid stale data.
        resetBookingState();
    }

    function resetBookingState() {
        bookingState = {
            checkIn: '',
            checkOut: '',
            guests: 2,
            selectedRoomId: null,
            guestDetails: {
                fullName: '',
                email: '',
                whatsapp: '',
                specialRequest: ''
            },
            reservationId: ''
        };
        // Keep widget values if they exist
        if (bookingWidgetCheckIn.value) bookingState.checkIn = bookingWidgetCheckIn.value;
        if (bookingWidgetCheckOut.value) bookingState.checkOut = bookingWidgetCheckOut.value;
        if (bookingWidgetGuests.value) bookingState.guests = parseInt(bookingWidgetGuests.value);
    }

    function renderBookingStep(step) {
        // Clear content
        bookingModalContent.innerHTML = '';
        
        // Add step indicator
        const stepNames = ['Dates', 'Room', 'Details', 'Review', 'Confirmation'];
        const stepIndicator = document.createElement('div');
        stepIndicator.className = 'booking-step-indicator';
        for (let i = 1; i <= 5; i++) {
            const dot = document.createElement('span');
            dot.className = 'step-dot';
            if (i === step) dot.classList.add('active');
            if (i < step) dot.classList.add('completed');
            stepIndicator.appendChild(dot);
        }
        bookingModalContent.appendChild(stepIndicator);
        
        if (step === 1) {
            renderStep1Dates();
        } else if (step === 2) {
            renderStep2Room();
        } else if (step === 3) {
            renderStep3GuestDetails();
        } else if (step === 4) {
            renderStep4Review();
        } else if (step === 5) {
            renderStep5Confirmation();
        }
    }

    // STEP 1: SELECT DATES
    function renderStep1Dates() {
        const container = document.createElement('div');
        container.innerHTML = `
            <h2 class="font-serif text-3xl text-forest mb-6 text-center">SELECT YOUR DATES</h2>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                    <label for="modal-check-in" class="block text-xs tracking-widest text-charcoal/60 font-medium mb-1.5">CHECK-IN</label>
                    <input type="date" id="modal-check-in" class="w-full border-0 border-b border-charcoal/20 focus:border-forest focus:ring-0 text-base py-2 bg-transparent cursor-pointer" value="${bookingState.checkIn}" min="${new Date().toISOString().split('T')[0]}">
                </div>
                <div>
                    <label for="modal-check-out" class="block text-xs tracking-widest text-charcoal/60 font-medium mb-1.5">CHECK-OUT</label>
                    <input type="date" id="modal-check-out" class="w-full border-0 border-b border-charcoal/20 focus:border-forest focus:ring-0 text-base py-2 bg-transparent cursor-pointer" value="${bookingState.checkOut}" min="${new Date().toISOString().split('T')[0]}">
                </div>
                <div>
                    <label for="modal-guests" class="block text-xs tracking-widest text-charcoal/60 font-medium mb-1.5">GUESTS</label>
                    <select id="modal-guests" class="w-full border-0 border-b border-charcoal/20 focus:border-forest focus:ring-0 text-base py-2 bg-transparent cursor-pointer">
                        <option value="1" ${bookingState.guests == 1 ? 'selected' : ''}>1 Guest</option>
                        <option value="2" ${bookingState.guests == 2 ? 'selected' : ''}>2 Guests</option>
                        <option value="3" ${bookingState.guests == 3 ? 'selected' : ''}>3 Guests</option>
                        <option value="4" ${bookingState.guests == 4 ? 'selected' : ''}>4 Guests</option>
                    </select>
                </div>
            </div>
            <div id="step1-errors" class="text-terracotta text-sm mt-3 text-center" role="alert"></div>
            <div class="mt-8 flex justify-end">
                <button id="step1-continue" class="bg-forest text-white px-8 py-3 rounded-full text-sm font-medium tracking-widest hover:bg-charcoal transition-all duration-300 cursor-pointer">CONTINUE</button>
            </div>
        `;
        bookingModalContent.appendChild(container);
        
        document.getElementById('step1-continue').addEventListener('click', () => {
            const checkIn = document.getElementById('modal-check-in').value;
            const checkOut = document.getElementById('modal-check-out').value;
            const guests = document.getElementById('modal-guests').value;
            const errors = document.getElementById('step1-errors');
            errors.textContent = '';
            
            if (!checkIn) {
                errors.textContent = 'Please select a check-in date.';
                return;
            }
            if (!checkOut) {
                errors.textContent = 'Please select a check-out date.';
                return;
            }
            if (new Date(checkOut) <= new Date(checkIn)) {
                errors.textContent = 'Check-out date must be after check-in date.';
                return;
            }
            
            bookingState.checkIn = checkIn;
            bookingState.checkOut = checkOut;
            bookingState.guests = parseInt(guests);
            
            // Also update widget inputs
            bookingWidgetCheckIn.value = checkIn;
            bookingWidgetCheckOut.value = checkOut;
            bookingWidgetGuests.value = guests;
            
            renderBookingStep(2);
        });
    }

    // STEP 2: SELECT ROOM
    function renderStep2Room() {
        const container = document.createElement('div');
        container.innerHTML = `
            <h2 class="font-serif text-3xl text-forest mb-6 text-center">SELECT YOUR ROOM</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-2">
                ${rooms.map(room => {
                    const isSelected = bookingState.selectedRoomId === room.id;
                    return `
                        <div class="booking-room-card ${isSelected ? 'selected border-forest bg-forest/5' : ''} border rounded-xl p-4 cursor-pointer transition-all duration-300 hover:border-forest" data-room-id="${room.id}">
                            <div class="flex items-center gap-3">
                                <img src="${room.image}" alt="${room.name}" class="w-20 h-20 object-cover rounded-lg" onerror="this.onerror=null;this.src='assets/images/hero.jpg'">
                                <div>
                                    <h3 class="font-serif text-lg text-forest">${room.name}</h3>
                                    <p class="text-xs text-charcoal/60">${room.type} · ${room.size} m² · ${room.guests} guests</p>
                                    <p class="text-sm font-medium text-forest mt-1">${formatRupiah(room.price)} / night</p>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
            <div class="mt-6 flex justify-between">
                <button id="step2-back" class="border border-forest text-forest px-6 py-3 rounded-full text-sm font-medium tracking-widest hover:bg-forest hover:text-white transition-all duration-300 cursor-pointer">BACK</button>
                <button id="step2-continue" class="bg-forest text-white px-8 py-3 rounded-full text-sm font-medium tracking-widest hover:bg-charcoal transition-all duration-300 cursor-pointer" ${!bookingState.selectedRoomId ? 'disabled' : ''}>CONTINUE</button>
            </div>
        `;
        bookingModalContent.appendChild(container);
        
        // Room card selection
        const roomCards = container.querySelectorAll('.booking-room-card');
        roomCards.forEach(card => {
            card.addEventListener('click', () => {
                roomCards.forEach(c => c.classList.remove('selected', 'border-forest', 'bg-forest/5'));
                card.classList.add('selected', 'border-forest', 'bg-forest/5');
                bookingState.selectedRoomId = parseInt(card.dataset.roomId);
                document.getElementById('step2-continue').disabled = false;
            });
        });
        
        document.getElementById('step2-back').addEventListener('click', () => renderBookingStep(1));
        document.getElementById('step2-continue').addEventListener('click', () => {
            if (!bookingState.selectedRoomId) {
                showToast('Please select a room');
                return;
            }
            renderBookingStep(3);
        });
    }

    // STEP 3: GUEST DETAILS
    function renderStep3GuestDetails() {
        const container = document.createElement('div');
        container.innerHTML = `
            <h2 class="font-serif text-3xl text-forest mb-6 text-center">GUEST DETAILS</h2>
            <div class="space-y-4">
                <div>
                    <label for="guest-name" class="block text-sm text-charcoal/70 mb-1">Full Name *</label>
                    <input type="text" id="guest-name" class="w-full border border-charcoal/20 rounded-lg px-4 py-3 focus:border-forest focus:ring-0 bg-white" value="${bookingState.guestDetails.fullName}" placeholder="Your full name">
                    <div id="guest-name-error" class="error-text mt-1 hidden">Please enter your full name.</div>
                </div>
                <div>
                    <label for="guest-email" class="block text-sm text-charcoal/70 mb-1">Email *</label>
                    <input type="email" id="guest-email" class="w-full border border-charcoal/20 rounded-lg px-4 py-3 focus:border-forest focus:ring-0 bg-white" value="${bookingState.guestDetails.email}" placeholder="your@email.com">
                    <div id="guest-email-error" class="error-text mt-1 hidden">Please enter a valid email address.</div>
                </div>
                <div>
                    <label for="guest-whatsapp" class="block text-sm text-charcoal/70 mb-1">WhatsApp Number *</label>
                    <input type="tel" id="guest-whatsapp" class="w-full border border-charcoal/20 rounded-lg px-4 py-3 focus:border-forest focus:ring-0 bg-white" value="${bookingState.guestDetails.whatsapp}" placeholder="e.g. 628123456789">
                    <div id="guest-whatsapp-error" class="error-text mt-1 hidden">Please enter a valid WhatsApp number.</div>
                </div>
                <div>
                    <label for="guest-special" class="block text-sm text-charcoal/70 mb-1">Special Request (optional)</label>
                    <textarea id="guest-special" class="w-full border border-charcoal/20 rounded-lg px-4 py-3 focus:border-forest focus:ring-0 bg-white" rows="3" placeholder="Any special requests...">${bookingState.guestDetails.specialRequest}</textarea>
                </div>
            </div>
            <div class="mt-8 flex justify-between">
                <button id="step3-back" class="border border-forest text-forest px-6 py-3 rounded-full text-sm font-medium tracking-widest hover:bg-forest hover:text-white transition-all duration-300 cursor-pointer">BACK</button>
                <button id="step3-continue" class="bg-forest text-white px-8 py-3 rounded-full text-sm font-medium tracking-widest hover:bg-charcoal transition-all duration-300 cursor-pointer">CONTINUE</button>
            </div>
        `;
        bookingModalContent.appendChild(container);
        
        document.getElementById('step3-back').addEventListener('click', () => renderBookingStep(2));
        document.getElementById('step3-continue').addEventListener('click', () => {
            const name = document.getElementById('guest-name').value.trim();
            const email = document.getElementById('guest-email').value.trim();
            const whatsapp = document.getElementById('guest-whatsapp').value.trim();
            const special = document.getElementById('guest-special').value.trim();
            
            // Reset errors
            document.querySelectorAll('.error-text').forEach(el => el.classList.add('hidden'));
            
            let valid = true;
            if (!name) {
                document.getElementById('guest-name-error').classList.remove('hidden');
                valid = false;
            }
            if (!email || !email.includes('@')) {
                document.getElementById('guest-email-error').classList.remove('hidden');
                valid = false;
            }
            if (!whatsapp || whatsapp.replace(/\D/g, '').length < 8) {
                document.getElementById('guest-whatsapp-error').classList.remove('hidden');
                valid = false;
            }
            if (!valid) return;
            
            bookingState.guestDetails = { fullName: name, email, whatsapp, specialRequest: special };
            renderBookingStep(4);
        });
    }

    // STEP 4: REVIEW
    function renderStep4Review() {
        const room = getRoomById(bookingState.selectedRoomId);
        const nights = calculateNights(bookingState.checkIn, bookingState.checkOut);
        const pricePerNight = room.price;
        const subtotal = pricePerNight * nights;
        const tax = getTaxAmount(subtotal);
        const total = subtotal + tax;
        
        const container = document.createElement('div');
        container.innerHTML = `
            <h2 class="font-serif text-3xl text-forest mb-6 text-center">REVIEW YOUR RESERVATION</h2>
            <div class="bg-white rounded-xl p-6 shadow-sm">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <p class="text-sm text-charcoal/50">ROOM</p>
                        <p class="font-medium text-forest">${room.name}</p>
                    </div>
                    <div class="text-right">
                        <p class="text-sm text-charcoal/50">PRICE</p>
                        <p class="font-medium text-forest">${formatRupiah(pricePerNight)} / night</p>
                    </div>
                </div>
                <div class="border-t border-charcoal/10 pt-4 space-y-2">
                    <div class="flex justify-between text-sm">
                        <span class="text-charcoal/60">Check-in</span>
                        <span class="font-medium">${bookingState.checkIn}</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-charcoal/60">Check-out</span>
                        <span class="font-medium">${bookingState.checkOut}</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-charcoal/60">Nights</span>
                        <span class="font-medium">${nights}</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-charcoal/60">Guests</span>
                        <span class="font-medium">${bookingState.guests}</span>
                    </div>
                </div>
                <div class="border-t border-charcoal/10 pt-4 space-y-2">
                    <div class="flex justify-between text-sm">
                        <span class="text-charcoal/60">Room total</span>
                        <span>${formatRupiah(subtotal)}</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-charcoal/60">Tax / service (10%)</span>
                        <span>${formatRupiah(tax)}</span>
                    </div>
                    <div class="flex justify-between text-lg font-medium pt-2">
                        <span class="text-forest">TOTAL</span>
                        <span class="text-forest">${formatRupiah(total)}</span>
                    </div>
                </div>
                <div class="mt-4 text-sm text-charcoal/50">
                    <p>Guest: ${bookingState.guestDetails.fullName}</p>
                    <p>Email: ${bookingState.guestDetails.email}</p>
                    <p>WhatsApp: ${bookingState.guestDetails.whatsapp}</p>
                    ${bookingState.guestDetails.specialRequest ? `<p>Special request: ${bookingState.guestDetails.specialRequest}</p>` : ''}
                </div>
            </div>
            <div class="mt-8 flex justify-between">
                <button id="step4-back" class="border border-forest text-forest px-6 py-3 rounded-full text-sm font-medium tracking-widest hover:bg-forest hover:text-white transition-all duration-300 cursor-pointer">BACK</button>
                <button id="step4-confirm" class="bg-terracotta text-white px-8 py-3 rounded-full text-sm font-medium tracking-widest hover:bg-charcoal transition-all duration-300 cursor-pointer">CONFIRM RESERVATION</button>
            </div>
        `;
        bookingModalContent.appendChild(container);
        
        document.getElementById('step4-back').addEventListener('click', () => renderBookingStep(3));
        document.getElementById('step4-confirm').addEventListener('click', () => {
            // Generate reservation ID
            const year = new Date().getFullYear();
            const random = Math.floor(1000 + Math.random() * 9000);
            bookingState.reservationId = `LUMA-${year}-${random}`;
            
            // Show confirmation
            renderBookingStep(5);
            showToast('Reservation confirmed!');
        });
    }

    // STEP 5: CONFIRMATION
    function renderStep5Confirmation() {
        const room = getRoomById(bookingState.selectedRoomId);
        const nights = calculateNights(bookingState.checkIn, bookingState.checkOut);
        const pricePerNight = room.price;
        const subtotal = pricePerNight * nights;
        const tax = getTaxAmount(subtotal);
        const total = subtotal + tax;
        
        const container = document.createElement('div');
        container.innerHTML = `
            <div class="text-center mb-6">
                <h2 class="font-serif text-3xl text-forest mb-2">YOUR STAY IS RESERVED.</h2>
                <p class="text-charcoal/60">Thank you, ${bookingState.guestDetails.fullName}.</p>
                <p class="text-charcoal/60 mt-2">Reservation ID: <span class="font-medium">${bookingState.reservationId}</span></p>
            </div>
            <div class="bg-white rounded-xl p-6 shadow-sm">
                <div class="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <p class="text-charcoal/50">ROOM</p>
                        <p class="font-medium text-forest">${room.name}</p>
                    </div>
                    <div>
                        <p class="text-charcoal/50">DATES</p>
                        <p class="font-medium">${bookingState.checkIn} to ${bookingState.checkOut}</p>
                    </div>
                    <div>
                        <p class="text-charcoal/50">GUESTS</p>
                        <p class="font-medium">${bookingState.guests}</p>
                    </div>
                    <div>
                        <p class="text-charcoal/50">TOTAL</p>
                        <p class="font-medium text-forest">${formatRupiah(total)}</p>
                    </div>
                </div>
            </div>
            <div class="mt-8 flex flex-col sm:flex-row gap-3">
                <button id="confirmation-whatsapp" class="flex-1 bg-green-600 text-white px-6 py-3 rounded-full text-sm font-medium tracking-widest hover:bg-green-700 transition-all duration-300 cursor-pointer">
                    CONTACT VIA WHATSAPP
                </button>
                <button id="confirmation-home" class="flex-1 bg-forest text-white px-6 py-3 rounded-full text-sm font-medium tracking-widest hover:bg-charcoal transition-all duration-300 cursor-pointer">
                    BACK TO HOME
                </button>
            </div>
        `;
        bookingModalContent.appendChild(container);
        
        document.getElementById('confirmation-whatsapp').addEventListener('click', () => {
            sendWhatsAppConfirmation();
        });
        
        document.getElementById('confirmation-home').addEventListener('click', () => {
            closeBookingModal();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // =========================================
    // WHATSAPP INTEGRATION
    // =========================================
    function sendWhatsAppConfirmation() {
        const room = getRoomById(bookingState.selectedRoomId);
        if (!room) return;
        const nights = calculateNights(bookingState.checkIn, bookingState.checkOut);
        const total = room.price * nights + getTaxAmount(room.price * nights);
        
        const message = `Hello LŪMA,\n\nI would like to confirm my reservation.\n\nName: ${bookingState.guestDetails.fullName}\nRoom: ${room.name}\nCheck-in: ${bookingState.checkIn}\nCheck-out: ${bookingState.checkOut}\nGuests: ${bookingState.guests}\nReservation ID: ${bookingState.reservationId}\nTotal: ${formatRupiah(total)}`;
        
        const encoded = encodeURIComponent(message);
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
        window.open(url, '_blank');
    }

    // =========================================
    // EVENT LISTENERS
    // =========================================
    
    // Navbar scroll
    window.addEventListener('scroll', () => {
        handleNavbarScroll();
        toggleStickyButton();
    });
    handleNavbarScroll();
    toggleStickyButton();
    
    // Mobile menu
    mobileMenuBtn.addEventListener('click', openMobileMenu);
    mobileMenuClose.addEventListener('click', closeMobileMenu);
    document.querySelectorAll('.mobile-menu-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    document.getElementById('mobile-menu-book').addEventListener('click', () => {
        closeMobileMenu();
        openBookingModal(1);
    });
    
    // Sticky button and hero/book buttons
    stickyBookBtn.addEventListener('click', () => openBookingModal(1));
    document.getElementById('hero-book-btn').addEventListener('click', () => openBookingModal(1));
    document.getElementById('desktop-book-btn').addEventListener('click', () => openBookingModal(1));
    
    // Booking widget
    checkAvailabilityBtn.addEventListener('click', () => {
        const checkIn = bookingWidgetCheckIn.value;
        const checkOut = bookingWidgetCheckOut.value;
        const guests = bookingWidgetGuests.value;
        
        let valid = true;
        // Reset errors
        document.getElementById('check-in-error').classList.add('hidden');
        document.getElementById('check-out-error').classList.add('hidden');
        document.getElementById('guest-error').classList.add('hidden');
        
        if (!checkIn) {
            document.getElementById('check-in-error').textContent = 'Please select a check-in date.';
            document.getElementById('check-in-error').classList.remove('hidden');
            valid = false;
        }
        if (!checkOut) {
            document.getElementById('check-out-error').textContent = 'Please select a check-out date.';
            document.getElementById('check-out-error').classList.remove('hidden');
            valid = false;
        }
        if (checkIn && checkOut && new Date(checkOut) <= new Date(checkIn)) {
            document.getElementById('check-out-error').textContent = 'Check-out must be after check-in.';
            document.getElementById('check-out-error').classList.remove('hidden');
            valid = false;
        }
        if (!valid) return;
        
        bookingState.checkIn = checkIn;
        bookingState.checkOut = checkOut;
        bookingState.guests = parseInt(guests);
        
        // Scroll to rooms and apply filters? Or open booking modal step 2? We'll open booking modal step 2 since dates are set.
        openBookingModal(2);
    });
    
    // Room filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const group = this.dataset.filterGroup;
            const value = this.dataset.filterType || this.dataset.filterView || this.dataset.filterPrice;
            
            // Deactivate all buttons in the same group
            document.querySelectorAll(`.filter-btn[data-filter-group="${group}"]`).forEach(b => {
                b.classList.remove('active-filter');
                b.setAttribute('aria-pressed', 'false');
            });
            
            // Activate this button
            this.classList.add('active-filter');
            this.setAttribute('aria-pressed', 'true');
            
            // Update current filters
            if (group === 'type') currentFilters.type = value;
            if (group === 'view') currentFilters.view = value;
            if (group === 'price') currentFilters.price = value;
            
            applyFilters();
        });
    });
    
    // Room detail close
    roomDetailClose.addEventListener('click', closeRoomDetail);
    roomDetailModal.querySelector('#room-detail-overlay')?.addEventListener('click', closeRoomDetail);
    
    // Booking modal close
    bookingModalClose.addEventListener('click', closeBookingModal);
    bookingModal.querySelector('#booking-overlay')?.addEventListener('click', closeBookingModal);
    
    // Contact links
    document.getElementById('contact-whatsapp')?.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello LŪMA, I have a question.')}`, '_blank');
    });
    document.getElementById('footer-whatsapp')?.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello LŪMA, I have a question.')}`, '_blank');
    });
    
    // =========================================
    // INITIAL RENDER
    // =========================================
    renderRoomCards(rooms);
    
    // Scroll reveal using Intersection Observer
    const revealElements = document.querySelectorAll('.scroll-reveal, .image-reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    revealElements.forEach(el => {
        observer.observe(el);
    });
    
    // Check for reduced motion and skip animations if set
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
        revealElements.forEach(el => el.classList.add('revealed'));
    }
    
    // Set min date for check-in and check-out inputs to today
    const today = new Date().toISOString().split('T')[0];
    bookingWidgetCheckIn.setAttribute('min', today);
    bookingWidgetCheckOut.setAttribute('min', today);
    
    // Prepopulate booking state from widget if any
    if (bookingWidgetCheckIn.value) bookingState.checkIn = bookingWidgetCheckIn.value;
    if (bookingWidgetCheckOut.value) bookingState.checkOut = bookingWidgetCheckOut.value;
    if (bookingWidgetGuests.value) bookingState.guests = parseInt(bookingWidgetGuests.value);
    
    console.log('LŪMA Resort — All systems ready.');
});