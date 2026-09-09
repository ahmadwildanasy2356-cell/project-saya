/* ==========================================
   AERA HEALTH — script.js (REVISED FINAL)
   Perbaikan: updateAppointmentStepVisibility
   agar setiap tombol next di step yang sesuai
   diatur status disabled‑nya.
========================================== */

// ============ DEFAULT DATA (tidak berubah) ============
const defaultDoctors = [
    {
        id: 'doc-01',
        name: 'Dr. Maya Pratama',
        specialty: 'General Practitioner',
        experience: 12,
        rating: 4.8,
        location: 'Jakarta Selatan',
        availability: 'available',
        languages: ['Indonesia', 'English'],
        education: 'Universitas Indonesia',
        fee: 250000,
        image: 'assets/images/doctor-01.jpg',
        schedule: ['09:00', '10:00', '13:00', '15:00']
    },
    {
        id: 'doc-02',
        name: 'Dr. Adrian Wijaya',
        specialty: 'Cardiology',
        experience: 15,
        rating: 4.9,
        location: 'Jakarta Pusat',
        availability: 'available',
        languages: ['Indonesia', 'English'],
        education: 'Universitas Gadjah Mada',
        fee: 450000,
        image: 'assets/images/doctor-02.jpg',
        schedule: ['09:30', '10:30', '14:00', '16:00']
    },
    {
        id: 'doc-03',
        name: 'Dr. Nadia Putri',
        specialty: 'Dermatology',
        experience: 9,
        rating: 4.7,
        location: 'Tangerang',
        availability: 'unavailable',
        languages: ['Indonesia'],
        education: 'Universitas Airlangga',
        fee: 350000,
        image: 'assets/images/doctor-03.jpg',
        schedule: ['10:00', '11:00', '14:30', '15:30']
    },
    {
        id: 'doc-04',
        name: 'Dr. Raka Santoso',
        specialty: 'Orthopedics',
        experience: 14,
        rating: 4.9,
        location: 'Jakarta Selatan',
        availability: 'available',
        languages: ['Indonesia', 'English'],
        education: 'Universitas Indonesia',
        fee: 400000,
        image: 'assets/images/doctor-04.jpg',
        schedule: ['09:00', '10:30', '13:30', '15:00']
    },
    {
        id: 'doc-05',
        name: 'Dr. Clara Mahendra',
        specialty: 'Pediatrics',
        experience: 11,
        rating: 4.8,
        location: 'Jakarta Pusat',
        availability: 'available',
        languages: ['Indonesia', 'English'],
        education: 'Universitas Padjadjaran',
        fee: 300000,
        image: 'assets/images/doctor-05.jpg',
        schedule: ['09:30', '10:00', '13:00', '14:30']
    },
    {
        id: 'doc-06',
        name: 'Dr. Farhan Akbar',
        specialty: 'Internal Medicine',
        experience: 13,
        rating: 4.7,
        location: 'Tangerang',
        availability: 'available',
        languages: ['Indonesia'],
        education: 'Universitas Diponegoro',
        fee: 380000,
        image: 'assets/images/doctor-06.jpg',
        schedule: ['10:00', '11:30', '14:00', '16:30']
    }
];

const defaultServices = [
    {
        id: 'svc-01',
        name: 'General Consultation',
        icon: '🩺',
        description: 'Konsultasi kesehatan umum untuk berbagai keluhan.',
        conditions: ['Flu', 'Demam', 'Sakit kepala', 'Check-up rutin'],
        treatmentOverview: 'Pemeriksaan fisik, diagnosis awal, dan rekomendasi perawatan.',
        recommendedSpecialist: 'General Practitioner',
        preparation: 'Tidak ada persiapan khusus. Bawa catatan kesehatan jika ada.'
    },
    {
        id: 'svc-02',
        name: 'Cardiology',
        icon: '❤️',
        description: 'Perawatan jantung dan pembuluh darah.',
        conditions: ['Hipertensi', 'Penyakit jantung koroner', 'Aritmia', 'Gagal jantung'],
        treatmentOverview: 'Pemeriksaan EKG, ekokardiografi, dan konsultasi kardiovaskular.',
        recommendedSpecialist: 'Cardiology',
        preparation: 'Hindari kafein 4 jam sebelum pemeriksaan.'
    },
    {
        id: 'svc-03',
        name: 'Dermatology',
        icon: '🧴',
        description: 'Kesehatan kulit, rambut, dan kuku.',
        conditions: ['Jerawat', 'Eksim', 'Psoriasis', 'Alergi kulit'],
        treatmentOverview: 'Pemeriksaan kulit, terapi topikal, dan saran perawatan.',
        recommendedSpecialist: 'Dermatology',
        preparation: 'Jangan gunakan produk kulit berlebihan sebelum kunjungan.'
    },
    {
        id: 'svc-04',
        name: 'Pediatrics',
        icon: '👶',
        description: 'Kesehatan anak dari bayi hingga remaja.',
        conditions: ['Imunisasi', 'Demam', 'Gangguan tumbuh kembang', 'Alergi'],
        treatmentOverview: 'Pemeriksaan tumbuh kembang, imunisasi, dan penanganan penyakit anak.',
        recommendedSpecialist: 'Pediatrics',
        preparation: 'Bawa buku KIA dan riwayat imunisasi anak.'
    },
    {
        id: 'svc-05',
        name: 'Orthopedics',
        icon: '🦴',
        description: 'Gangguan tulang, sendi, dan otot.',
        conditions: ['Patah tulang', 'Osteoarthritis', 'Cedera ligamen', 'Nyeri punggung'],
        treatmentOverview: 'Pemeriksaan muskuloskeletal, rontgen, dan fisioterapi.',
        recommendedSpecialist: 'Orthopedics',
        preparation: 'Kenakan pakaian longgar untuk memudahkan pemeriksaan.'
    },
    {
        id: 'svc-06',
        name: 'Preventive Care',
        icon: '🛡️',
        description: 'Pencegahan penyakit dan promosi kesehatan.',
        conditions: ['Skrining kesehatan', 'Vaksinasi', 'Manajemen berat badan', 'Cek kolesterol'],
        treatmentOverview: 'Penilaian risiko kesehatan dan program pencegahan personal.',
        recommendedSpecialist: 'General Practitioner',
        preparation: 'Puasa 8-10 jam untuk pemeriksaan darah (jika diperlukan).'
    }
];

const defaultWellness = [
    {
        id: 'wll-01',
        title: 'Healthy Sleep',
        excerpt: 'Tidur berkualitas untuk tubuh yang optimal.',
        content: 'Tidur 7-9 jam per malam membantu regenerasi sel, meningkatkan konsentrasi, dan menjaga sistem imun. Tetapkan jadwal tidur teratur, hindari layar elektronik 1 jam sebelum tidur, dan ciptakan lingkungan kamar yang gelap dan sejuk.'
    },
    {
        id: 'wll-02',
        title: 'Better Nutrition',
        excerpt: 'Makan cerdas untuk energi seimbang.',
        content: 'Konsumsi makanan bervariasi dengan porsi seimbang: sayur, buah, protein, dan karbohidrat kompleks. Batasi gula dan garam berlebih. Minum air putih minimal 8 gelas sehari.'
    },
    {
        id: 'wll-03',
        title: 'Stress Management',
        excerpt: 'Kelola stres sebelum stres mengelolamu.',
        content: 'Teknik pernapasan dalam, meditasi singkat, dan aktivitas fisik ringan dapat menurunkan hormon stres. Luangkan waktu untuk hobi dan interaksi sosial yang positif.'
    },
    {
        id: 'wll-04',
        title: 'Preventive Checkups',
        excerpt: 'Deteksi dini menyelamatkan hidup.',
        content: 'Lakukan pemeriksaan kesehatan rutin minimal setahun sekali, termasuk tekanan darah, gula darah, kolesterol, dan skrining sesuai usia. Pencegahan selalu lebih baik daripada pengobatan.'
    }
];

const defaultPackages = [
    {
        id: 'pkg-01',
        name: 'Essential Checkup',
        price: 750000,
        description: 'Pemeriksaan dasar lengkap untuk menjaga kesehatan.',
        features: ['Cek darah lengkap', 'Kolesterol', 'Gula darah', 'Konsultasi dokter umum']
    },
    {
        id: 'pkg-02',
        name: 'Complete Wellness',
        price: 1500000,
        description: 'Evaluasi menyeluruh dengan analisis risiko kesehatan.',
        features: ['Semua fitur Essential', 'EKG', 'Rontgen dada', 'Konsultasi spesialis']
    },
    {
        id: 'pkg-03',
        name: "Women's Wellness",
        price: 1200000,
        description: 'Perawatan khusus untuk kesehatan wanita.',
        features: ['Pap smear', 'USG payudara', 'Konsultasi kandungan', 'Vitamin & suplemen']
    },
    {
        id: 'pkg-04',
        name: 'Family Care',
        price: 2500000,
        description: 'Paket lengkap untuk seluruh anggota keluarga.',
        features: ['Semua fitur Complete', 'Pemeriksaan anak', 'Skrining orang tua', 'Home visit']
    }
];

const defaultTestimonials = [
    { name: 'Rina K.', rating: 5, comment: 'Pelayanan sangat ramah dan profesional. Proses booking mudah, tidak perlu antre lama. Dokternya komunikatif.' },
    { name: 'Budi S.', rating: 4.8, comment: 'Aplikasi web-nya modern, cepat, dan informatif. Saya bisa memilih dokter sesuai spesialisasi dengan mudah.' },
    { name: 'Amelia W.', rating: 5, comment: 'Lingkungan klinik bersih dan tenang. Dokter anak sangat sabar dengan anak saya. Sangat direkomendasikan.' },
    { name: 'Dedi P.', rating: 4.9, comment: 'Sistem appointment-nya bagus, ada konfirmasi dan pengingat. Layanan jantung sangat lengkap.' }
];

const defaultFaqs = [
    { question: 'How do I book an appointment?', answer: 'Klik "Book Appointment" di navbar atau bagian appointment, pilih dokter, tanggal, waktu, isi data diri, lalu konfirmasi. Anda akan menerima ID appointment.' },
    { question: 'Can I choose my doctor?', answer: 'Ya, Anda dapat mencari dokter berdasarkan nama, spesialisasi, atau lokasi. Anda juga bisa menyimpan dokter favorit.' },
    { question: 'Can I reschedule?', answer: 'Untuk versi demo ini, Anda dapat membatalkan appointment dan membuat janji baru. Fitur reschedule akan datang.' },
    { question: 'What should I bring?', answer: 'Bawa kartu identitas, nomor appointment, dan catatan medis jika ada. Datang 15 menit lebih awal.' },
    { question: 'Do you accept walk-ins?', answer: 'Kami menerima walk-in tergantung ketersediaan dokter. Namun, disarankan untuk membuat appointment terlebih dahulu.' },
    { question: 'How can I contact AERA?', answer: 'Anda dapat menghubungi kami melalui telepon +62 21 555 0123, WhatsApp +62 812 0000 0000, atau email hello@aera-health.example.' }
];

// ============ INITIAL STATE ============
function getDefaultState() {
    return {
        doctors: defaultDoctors,
        services: defaultServices,
        appointments: [],
        savedDoctors: [],
        profile: {
            name: 'Pasien Demo',
            email: 'pasien@example.com',
            phone: '+62 812 0000 0000'
        },
        wellness: defaultWellness,
        packages: defaultPackages,
        testimonials: defaultTestimonials,
        faqs: defaultFaqs,
        notifications: [],
        searchQuery: '',
        filters: {
            specialty: '',
            location: '',
            availability: ''
        },
        activeModal: null,
        appointmentState: {
            doctor: null,
            date: null,
            time: null,
            patient: { name: '', email: '', phone: '', dob: '' },
            reason: '',
            step: 0
        },
        galleryImages: {
            'facility': 'assets/images/facility.jpg',
            'clinic': 'assets/images/clinic.jpg',
            'wellness': 'assets/images/wellness.jpg'
        }
    };
}

// ============ STATE MANAGEMENT ============
let appState = loadState();

function loadState() {
    const saved = localStorage.getItem('aeraHealthState');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            const defaults = getDefaultState();
            const merged = {
                ...defaults,
                ...parsed,
                doctors: parsed.doctors || defaults.doctors,
                services: parsed.services || defaults.services,
                appointments: parsed.appointments || [],
                savedDoctors: parsed.savedDoctors || [],
                profile: { ...defaults.profile, ...(parsed.profile || {}) },
                wellness: parsed.wellness || defaults.wellness,
                packages: parsed.packages || defaults.packages,
                testimonials: parsed.testimonials || defaults.testimonials,
                faqs: parsed.faqs || defaults.faqs,
                filters: { ...defaults.filters, ...(parsed.filters || {}) },
                appointmentState: { ...defaults.appointmentState, ...(parsed.appointmentState || {}) },
                galleryImages: { ...defaults.galleryImages, ...(parsed.galleryImages || {}) }
            };
            if (typeof merged.appointmentState.step === 'undefined') {
                merged.appointmentState.step = 0;
            }
            return merged;
        } catch (e) {
            console.warn('State parse error, using defaults', e);
        }
    }
    return getDefaultState();
}

function saveState() {
    try {
        const stateToSave = {
            doctors: appState.doctors,
            services: appState.services,
            appointments: appState.appointments,
            savedDoctors: appState.savedDoctors,
            profile: appState.profile,
            wellness: appState.wellness,
            packages: appState.packages,
            testimonials: appState.testimonials,
            faqs: appState.faqs,
            notifications: appState.notifications,
            searchQuery: appState.searchQuery,
            filters: appState.filters,
            appointmentState: appState.appointmentState,
            galleryImages: appState.galleryImages
        };
        localStorage.setItem('aeraHealthState', JSON.stringify(stateToSave));
    } catch (e) {
        console.error('Failed to save state', e);
    }
}

// ============ DOM REFS ============
const modalRoot = document.getElementById('modalRoot');
const toastContainer = document.getElementById('toastContainer');
const body = document.body;

// ============ MODAL REGISTRY ============
const modalRegistry = {};
const modalCleanupFns = {};

function registerModal(name, openFn, closeFn) {
    modalRegistry[name] = { openFn, closeFn };
}

function openModal(name, options = {}) {
    closeAllModals();
    const modal = modalRegistry[name];
    if (!modal) {
        console.warn(`Modal "${name}" not registered`);
        return;
    }
    appState.activeModal = name;
    saveState();
    modal.openFn(options);
    body.classList.add('modal-open');
}

function closeModal(name) {
    if (!name) {
        if (appState.activeModal) {
            closeModal(appState.activeModal);
        }
        return;
    }
    const modal = modalRegistry[name];
    if (modal && modal.closeFn) {
        modal.closeFn();
    }
    if (appState.activeModal === name) {
        appState.activeModal = null;
        saveState();
        body.classList.remove('modal-open');
    }
}

function closeAllModals() {
    Object.keys(modalRegistry).forEach(name => {
        const modal = modalRegistry[name];
        if (modal && modal.closeFn) {
            modal.closeFn();
        }
    });
    appState.activeModal = null;
    body.classList.remove('modal-open');
    saveState();
}

// ============ ESCAPE KEY HANDLER ============
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && appState.activeModal) {
        closeModal(appState.activeModal);
    }
});

// ============ TOAST SYSTEM ============
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.setAttribute('role', 'status');
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => {
        if (toast.parentNode) {
            toast.remove();
        }
    }, 3000);
}

// ============ IMAGE FALLBACK ============
function handleImageError(img) {
    img.style.display = 'none';
    const fallback = img.nextElementSibling;
    if (fallback && (fallback.classList.contains('doctor-image-fallback') || fallback.classList.contains('facility-fallback'))) {
        fallback.style.display = 'flex';
    }
}

// ============ UTILITY FUNCTIONS ============
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
}

function generateAppointmentId() {
    const count = appState.appointments.length + 1;
    return `AERA-2026-${String(count).padStart(3, '0')}`;
}

function getDoctorById(id) {
    return appState.doctors.find(d => d.id === id);
}

// ============ RENDER FUNCTIONS ============
function renderDoctors() {
    const grid = document.getElementById('doctorsGrid');
    const noMsg = document.getElementById('noDoctorsMessage');
    if (!grid || !noMsg) return;

    const query = appState.searchQuery.toLowerCase().trim();
    const { specialty, location, availability } = appState.filters;
    
    const filtered = appState.doctors.filter(doc => {
        const matchesQuery = 
            doc.name.toLowerCase().includes(query) ||
            doc.specialty.toLowerCase().includes(query) ||
            doc.location.toLowerCase().includes(query);
        const matchesSpecialty = !specialty || doc.specialty === specialty;
        const matchesLocation = !location || doc.location === location;
        const matchesAvailability = !availability || doc.availability === availability;
        return matchesQuery && matchesSpecialty && matchesLocation && matchesAvailability;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '';
        noMsg.hidden = false;
        return;
    }
    noMsg.hidden = true;

    grid.innerHTML = filtered.map(doc => {
        const isSaved = appState.savedDoctors.includes(doc.id);
        return `
            <article class="doctor-card" data-doctor-id="${doc.id}">
                <div class="doctor-image">
                    <img src="${doc.image}" alt="Foto ${doc.name}" loading="lazy" onerror="handleImageError(this)">
                    <div class="doctor-image-fallback" style="display:none;">${doc.name.charAt(0)}</div>
                </div>
                <div class="doctor-info">
                    <h3 class="doctor-name">${doc.name}</h3>
                    <p class="doctor-specialty">${doc.specialty}</p>
                    <div class="doctor-meta">
                        <span>⭐ ${doc.rating}</span>
                        <span>${doc.experience} thn</span>
                        <span>📍 ${doc.location}</span>
                    </div>
                    <div class="doctor-availability">
                        <span class="availability-badge ${doc.availability}">
                            ${doc.availability === 'available' ? 'Tersedia Hari Ini' : 'Tidak Tersedia'}
                        </span>
                    </div>
                    <div class="doctor-actions">
                        <button class="btn btn-outline btn-sm" data-action="view-doctor" data-doctor-id="${doc.id}">View Profile</button>
                        <button class="btn btn-primary btn-sm" data-action="book-doctor" data-doctor-id="${doc.id}">Book</button>
                        <button class="save-doctor-btn ${isSaved ? 'saved' : ''}" data-action="toggle-save" data-doctor-id="${doc.id}" aria-label="${isSaved ? 'Hapus dari simpan' : 'Simpan dokter'}">
                            ${isSaved ? '✓' : '♡'}
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

function renderServices() {
    const list = document.getElementById('servicesList');
    if (!list) return;
    list.innerHTML = appState.services.map(svc => `
        <div class="service-item" data-action="view-service" data-service-id="${svc.id}">
            <div class="service-icon" aria-hidden="true">${svc.icon}</div>
            <h3 class="service-name">${svc.name}</h3>
            <p class="service-desc">${svc.description}</p>
            <span class="service-link">Learn More →</span>
        </div>
    `).join('');
}

function renderAppointments() {
    const container = document.getElementById('myAppointmentsList');
    const noMsg = document.getElementById('noAppointmentsMessage');
    if (!container || !noMsg) return;

    if (appState.appointments.length === 0) {
        container.innerHTML = '';
        noMsg.hidden = false;
        return;
    }
    noMsg.hidden = true;

    const upcoming = appState.appointments.filter(a => a.status === 'upcoming');
    const history = appState.appointments.filter(a => a.status !== 'upcoming');

    let html = '';
    if (upcoming.length) {
        html += '<h3 style="font-weight:700;margin-bottom:12px;">Upcoming</h3>';
        html += upcoming.map(renderAppointmentCard).join('');
    }
    if (history.length) {
        html += '<h3 style="font-weight:700;margin:20px 0 12px;">History</h3>';
        html += history.map(renderAppointmentCard).join('');
    }
    container.innerHTML = html;
}

function renderAppointmentCard(appt) {
    const doc = getDoctorById(appt.doctorId);
    const doctorName = doc ? doc.name : 'Dokter tidak ditemukan';
    const specialty = doc ? doc.specialty : '';
    const statusClass = appt.status === 'upcoming' ? 'upcoming' : appt.status === 'completed' ? 'completed' : 'cancelled';
    const statusLabel = appt.status === 'upcoming' ? 'Upcoming' : appt.status === 'completed' ? 'Completed' : 'Cancelled';
    
    return `
        <div class="appointment-card" data-appointment-id="${appt.id}">
            <div class="appointment-card-header">
                <span class="appointment-id">${appt.id}</span>
                <span class="appointment-status ${statusClass}">${statusLabel}</span>
            </div>
            <div class="appointment-doctor">${doctorName}</div>
            <div class="appointment-specialty">${specialty}</div>
            <div class="appointment-details">
                <span>📅 ${formatDate(appt.date)}</span>
                <span>🕒 ${appt.time}</span>
                <span>👤 ${appt.patient.name}</span>
            </div>
            <div class="appointment-actions">
                <button class="btn btn-outline btn-sm" data-action="view-appointment" data-appointment-id="${appt.id}">Details</button>
                ${appt.status === 'upcoming' ? `<button class="btn btn-outline btn-sm" style="color:var(--error);border-color:var(--error);" data-action="cancel-appointment" data-appointment-id="${appt.id}">Cancel</button>` : ''}
            </div>
        </div>
    `;
}

function renderSavedDoctors() {
    const list = document.getElementById('savedDoctorsList');
    const noMsg = document.getElementById('noSavedDoctorsMessage');
    if (!list || !noMsg) return;

    const savedDocs = appState.savedDoctors.map(id => getDoctorById(id)).filter(Boolean);
    if (savedDocs.length === 0) {
        list.innerHTML = '';
        noMsg.hidden = false;
        return;
    }
    noMsg.hidden = true;

    list.innerHTML = savedDocs.map(doc => `
        <div class="saved-doctor-card">
            <div class="saved-doctor-image">
                <img src="${doc.image}" alt="${doc.name}" onerror="handleImageError(this)">
            </div>
            <div class="saved-doctor-info">
                <div class="saved-doctor-name">${doc.name}</div>
                <div class="saved-doctor-specialty">${doc.specialty}</div>
            </div>
            <button class="remove-saved-btn" data-action="remove-saved" data-doctor-id="${doc.id}">Hapus</button>
        </div>
    `).join('');
}

function renderProfile() {
    const container = document.getElementById('profileContainer');
    if (!container) return;
    const profile = appState.profile;
    const upcomingCount = appState.appointments.filter(a => a.status === 'upcoming').length;
    const historyCount = appState.appointments.filter(a => a.status !== 'upcoming').length;
    const savedCount = appState.savedDoctors.length;

    container.innerHTML = `
        <div class="profile-header">
            <div class="profile-avatar">${profile.name.charAt(0)}</div>
            <div>
                <div class="profile-name">${profile.name}</div>
                <div class="profile-email">${profile.email}</div>
                <div class="profile-email">${profile.phone}</div>
            </div>
            <div class="profile-actions">
                <button class="btn btn-outline btn-sm" data-action="edit-profile">Edit Profile</button>
            </div>
        </div>
        <div class="profile-sections">
            <div class="profile-section-card">
                <div class="profile-section-title">Upcoming Appointment</div>
                <p>${upcomingCount} janji temu mendatang</p>
                <a href="#myAppointments" class="link-primary" style="font-size:0.9rem;">Lihat jadwal</a>
            </div>
            <div class="profile-section-card">
                <div class="profile-section-title">Appointment History</div>
                <p>${historyCount} janji temu selesai/dibatalkan</p>
                <a href="#myAppointments" class="link-primary" style="font-size:0.9rem;">Lihat riwayat</a>
            </div>
            <div class="profile-section-card">
                <div class="profile-section-title">Saved Doctors</div>
                <p>${savedCount} dokter tersimpan</p>
                <a href="#savedDoctors" class="link-primary" style="font-size:0.9rem;">Lihat tersimpan</a>
            </div>
        </div>
    `;
}

function renderWellness() {
    const list = document.getElementById('wellnessList');
    if (!list) return;
    list.innerHTML = appState.wellness.map(w => `
        <div class="wellness-item" data-action="view-wellness" data-wellness-id="${w.id}">
            <div class="wellness-title">${w.title}</div>
            <div class="wellness-excerpt">${w.excerpt}</div>
        </div>
    `).join('');
}

function renderPackages() {
    const grid = document.getElementById('packagesList');
    if (!grid) return;
    grid.innerHTML = appState.packages.map(pkg => `
        <div class="package-card">
            <div class="package-name">${pkg.name}</div>
            <div class="package-price">Rp ${pkg.price.toLocaleString('id-ID')}</div>
            <p class="package-desc">${pkg.description}</p>
            <button class="btn btn-outline btn-sm" data-action="view-package" data-package-id="${pkg.id}">Detail Paket</button>
        </div>
    `).join('');
}

function renderStats() {
    const container = document.getElementById('statsContainer');
    if (!container) return;
    const stats = [
        { value: '50+', label: 'Specialists' },
        { value: '15+', label: 'Medical Services' },
        { value: '20K+', label: 'Patients Served' },
        { value: '4.9/5', label: 'Patient Rating' }
    ];
    container.innerHTML = stats.map(s => `
        <div class="stat-item">
            <div class="stat-value">${s.value}</div>
            <div class="stat-label">${s.label}</div>
        </div>
    `).join('');
}

function renderTestimonials() {
    const container = document.getElementById('testimonialsContainer');
    if (!container) return;
    container.innerHTML = appState.testimonials.map(t => `
        <div class="testimonial-card">
            <div class="testimonial-rating">${'★'.repeat(Math.round(t.rating))}</div>
            <p class="testimonial-comment">"${t.comment}"</p>
            <div class="testimonial-name">— ${t.name}</div>
        </div>
    `).join('');
}

function renderFaq() {
    const list = document.getElementById('faqList');
    if (!list) return;
    list.innerHTML = appState.faqs.map((faq, idx) => `
        <div class="faq-item" data-faq-index="${idx}">
            <button class="faq-question" aria-expanded="false" data-action="toggle-faq" data-faq-index="${idx}">
                ${faq.question}
                <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer"><p>${faq.answer}</p></div>
        </div>
    `).join('');
}

// ============ MODAL IMPLEMENTATIONS ============
function createModalTemplate(content, extraClass = '') {
    return `
        <div class="modal-overlay ${extraClass}" role="dialog" aria-modal="true" aria-hidden="true">
            <div class="modal-backdrop" data-modal-backdrop></div>
            <div class="modal-content">
                <button class="modal-close-btn" data-modal-close aria-label="Tutup">✕</button>
                ${content}
            </div>
        </div>
    `;
}

// Doctor Detail Modal
function openDoctorDetail(doctorId) {
    const doc = getDoctorById(doctorId);
    if (!doc) return;
    const isSaved = appState.savedDoctors.includes(doc.id);
    const modalHtml = createModalTemplate(`
        <h2 class="modal-title">${doc.name}</h2>
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
            <img src="${doc.image}" alt="${doc.name}" style="width:80px;height:80px;border-radius:50%;object-fit:cover;" onerror="this.style.display='none'">
            <div>
                <p style="font-weight:700;color:var(--navy);">${doc.specialty}</p>
                <p style="color:var(--muted);">⭐ ${doc.rating} · ${doc.experience} tahun · ${doc.location}</p>
            </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:0.9rem;">
            <div><strong>Education</strong><br>${doc.education}</div>
            <div><strong>Languages</strong><br>${doc.languages.join(', ')}</div>
            <div><strong>Consultation Fee</strong><br>Rp ${doc.fee.toLocaleString('id-ID')}</div>
            <div><strong>Schedule</strong><br>${doc.schedule.join(', ')}</div>
        </div>
        <div style="display:flex;gap:12px;margin-top:24px;">
            <button class="btn btn-primary btn-full" data-action="book-from-detail" data-doctor-id="${doc.id}">Book Appointment</button>
            <button class="btn btn-outline" style="min-width:100px;" data-action="toggle-save-from-detail" data-doctor-id="${doc.id}">${isSaved ? 'Saved ✓' : 'Save'}</button>
        </div>
    `);
    modalRoot.innerHTML = modalHtml;
    const overlay = modalRoot.querySelector('.modal-overlay');
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');

    modalCleanupFns['doctorDetail'] = () => {
        if (overlay) {
            overlay.classList.remove('open');
            overlay.setAttribute('aria-hidden', 'true');
        }
    };
}

// Service Detail Modal
function openServiceDetail(serviceId) {
    const svc = appState.services.find(s => s.id === serviceId);
    if (!svc) return;
    const modalHtml = createModalTemplate(`
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
            <div style="width:48px;height:48px;background:var(--ice-blue);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;">${svc.icon}</div>
            <h2 class="modal-title" style="margin:0;">${svc.name}</h2>
        </div>
        <p style="color:var(--muted);margin-bottom:16px;">${svc.description}</p>
        <h4 style="margin-bottom:6px;">Conditions</h4>
        <ul style="list-style:disc;padding-left:20px;margin-bottom:16px;color:var(--charcoal);">${svc.conditions.map(c => `<li>${c}</li>`).join('')}</ul>
        <h4 style="margin-bottom:6px;">Treatment Overview</h4>
        <p style="color:var(--muted);margin-bottom:12px;">${svc.treatmentOverview}</p>
        <h4 style="margin-bottom:6px;">Recommended Specialist</h4>
        <p style="margin-bottom:12px;">${svc.recommendedSpecialist}</p>
        <h4 style="margin-bottom:6px;">Preparation</h4>
        <p style="color:var(--muted);margin-bottom:20px;">${svc.preparation}</p>
        <button class="btn btn-primary btn-full" data-action="find-doctor-from-service">Find a Doctor</button>
    `);
    modalRoot.innerHTML = modalHtml;
    const overlay = modalRoot.querySelector('.modal-overlay');
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    modalCleanupFns['serviceDetail'] = () => {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
    };
}

// Appointment Modal (Step-based)
function openAppointmentModal(doctorId = null) {
    const defaultAppt = {
        doctor: null,
        date: null,
        time: null,
        patient: { name: '', email: '', phone: '', dob: '' },
        reason: '',
        step: 0
    };
    if (doctorId) {
        appState.appointmentState = { ...defaultAppt, doctor: doctorId };
    } else {
        appState.appointmentState = { ...defaultAppt };
    }

    const steps = ['Choose Doctor', 'Choose Date', 'Choose Time', 'Patient Info', 'Review'];
    const currentStep = appState.appointmentState.step;

    const modalHtml = createModalTemplate(`
        <h2 class="modal-title">Buat Janji Temu</h2>
        <div class="step-indicator">
            ${steps.map((label, i) => `
                <span class="step-dot ${i < currentStep ? 'completed' : i === currentStep ? 'active' : ''}"></span>
                <span class="step-label">${label}</span>
                ${i < steps.length - 1 ? '<span style="color:var(--border)">→</span>' : ''}
            `).join('')}
        </div>
        <div class="appointment-step ${currentStep === 0 ? 'active' : ''}" data-step="0">
            <p style="margin-bottom:12px;">Pilih dokter untuk janji temu Anda.</p>
            <div id="appointmentDoctorList" style="display:flex;flex-direction:column;gap:8px;">
                ${appState.doctors.map(doc => `
                    <label style="display:flex;align-items:center;gap:12px;padding:12px;border:1px solid var(--border);border-radius:12px;cursor:pointer;">
                        <input type="radio" name="apptDoctor" value="${doc.id}" ${appState.appointmentState.doctor === doc.id ? 'checked' : ''} data-action="select-appt-doctor">
                        <div>
                            <strong>${doc.name}</strong>
                            <div style="font-size:0.8rem;color:var(--muted);">${doc.specialty} · ${doc.location}</div>
                        </div>
                    </label>
                `).join('')}
            </div>
            <div style="margin-top:16px;">
                <button class="btn btn-primary btn-full" data-action="next-step" ${!appState.appointmentState.doctor ? 'disabled' : ''}>Lanjut</button>
            </div>
        </div>
        <div class="appointment-step ${currentStep === 1 ? 'active' : ''}" data-step="1">
            <p style="margin-bottom:12px;">Pilih tanggal yang tersedia.</p>
            <div class="date-selector-grid">
                ${generateDemoDates().map(d => `
                    <div class="date-card ${appState.appointmentState.date === d.value ? 'selected' : ''}" data-action="select-date" data-date="${d.value}">
                        <span>${d.label}</span>
                    </div>
                `).join('')}
            </div>
            <div style="display:flex;gap:12px;">
                <button class="btn btn-outline" data-action="prev-step">Kembali</button>
                <button class="btn btn-primary btn-full" data-action="next-step" ${!appState.appointmentState.date ? 'disabled' : ''}>Lanjut</button>
            </div>
        </div>
        <div class="appointment-step ${currentStep === 2 ? 'active' : ''}" data-step="2">
            <p style="margin-bottom:12px;">Pilih waktu yang diinginkan.</p>
            <div class="time-selector-grid">
                ${getDoctorSchedule(appState.appointmentState.doctor).map(t => `
                    <div class="time-slot ${appState.appointmentState.time === t ? 'selected' : ''}" data-action="select-time" data-time="${t}">${t}</div>
                `).join('')}
            </div>
            <div style="display:flex;gap:12px;">
                <button class="btn btn-outline" data-action="prev-step">Kembali</button>
                <button class="btn btn-primary btn-full" data-action="next-step" ${!appState.appointmentState.time ? 'disabled' : ''}>Lanjut</button>
            </div>
        </div>
        <div class="appointment-step ${currentStep === 3 ? 'active' : ''}" data-step="3">
            <div class="form-group">
                <label for="apptName">Full Name *</label>
                <input type="text" id="apptName" value="${appState.appointmentState.patient.name}" required>
                <span class="error-message" id="apptNameError"></span>
            </div>
            <div class="form-group">
                <label for="apptEmail">Email *</label>
                <input type="email" id="apptEmail" value="${appState.appointmentState.patient.email}" required>
                <span class="error-message" id="apptEmailError"></span>
            </div>
            <div class="form-group">
                <label for="apptPhone">Phone *</label>
                <input type="tel" id="apptPhone" value="${appState.appointmentState.patient.phone}" required>
                <span class="error-message" id="apptPhoneError"></span>
            </div>
            <div class="form-group">
                <label for="apptDob">Date of Birth *</label>
                <input type="date" id="apptDob" value="${appState.appointmentState.patient.dob}" required>
                <span class="error-message" id="apptDobError"></span>
            </div>
            <div class="form-group">
                <label for="apptReason">Reason for Visit *</label>
                <textarea id="apptReason" rows="3" required>${appState.appointmentState.reason}</textarea>
                <span class="error-message" id="apptReasonError"></span>
            </div>
            <div style="display:flex;gap:12px;margin-top:8px;">
                <button class="btn btn-outline" data-action="prev-step">Kembali</button>
                <button class="btn btn-primary btn-full" data-action="next-step">Lanjut</button>
            </div>
        </div>
        <div class="appointment-step ${currentStep === 4 ? 'active' : ''}" data-step="4">
            <div class="appointment-summary">
                <div class="summary-item"><span class="summary-label">Doctor</span><span class="summary-value">${getDoctorById(appState.appointmentState.doctor)?.name || '-'}</span></div>
                <div class="summary-item"><span class="summary-label">Specialty</span><span class="summary-value">${getDoctorById(appState.appointmentState.doctor)?.specialty || '-'}</span></div>
                <div class="summary-item"><span class="summary-label">Date</span><span class="summary-value">${formatDate(appState.appointmentState.date)}</span></div>
                <div class="summary-item"><span class="summary-label">Time</span><span class="summary-value">${appState.appointmentState.time}</span></div>
                <div class="summary-item"><span class="summary-label">Patient</span><span class="summary-value">${appState.appointmentState.patient.name}</span></div>
                <div class="summary-item"><span class="summary-label">Reason</span><span class="summary-value">${appState.appointmentState.reason}</span></div>
            </div>
            <div style="display:flex;gap:12px;">
                <button class="btn btn-outline" data-action="prev-step">Kembali</button>
                <button class="btn btn-primary btn-full" data-action="confirm-appointment">Confirm Appointment</button>
            </div>
        </div>
    `);
    modalRoot.innerHTML = modalHtml;
    const overlay = modalRoot.querySelector('.modal-overlay');
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    modalCleanupFns['appointment'] = () => {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
    };
    updateAppointmentStepVisibility();
}

function getCurrentStepIndex() {
    return appState.appointmentState.step || 0;
}

// ========== PERBAIKAN UTAMA ==========
function updateAppointmentStepVisibility() {
    const steps = modalRoot.querySelectorAll('.appointment-step');
    const current = getCurrentStepIndex();
    
    // Update active class untuk semua step
    steps.forEach((step, idx) => {
        step.classList.toggle('active', idx === current);
    });

    // Update indikator
    const dots = modalRoot.querySelectorAll('.step-dot');
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === current);
        dot.classList.toggle('completed', idx < current);
    });

    // Perbarui tombol "Next" pada setiap step sesuai kondisinya
    const nextButtons = modalRoot.querySelectorAll('[data-action="next-step"]');
    nextButtons.forEach(btn => {
        const parentStep = btn.closest('.appointment-step');
        if (!parentStep) return;
        const stepIndex = parseInt(parentStep.dataset.step, 10);
        
        // Tentukan status disabled berdasarkan stepIndex
        if (stepIndex === 0) btn.disabled = !appState.appointmentState.doctor;
        else if (stepIndex === 1) btn.disabled = !appState.appointmentState.date;
        else if (stepIndex === 2) btn.disabled = !appState.appointmentState.time;
        else if (stepIndex === 3) btn.disabled = false; // validasi dilakukan saat klik
        // Step 4 tidak memiliki tombol next, abaikan
    });

    // Pastikan tombol next di step 4 (jika ada) disembunyikan
    const reviewNextBtn = modalRoot.querySelector('.appointment-step[data-step="4"] [data-action="next-step"]');
    if (reviewNextBtn) reviewNextBtn.style.display = 'none';

    // Tampilkan tombol confirm hanya di step 4
    const confirmBtn = modalRoot.querySelector('[data-action="confirm-appointment"]');
    if (confirmBtn) {
        confirmBtn.style.display = current === 4 ? 'inline-flex' : 'none';
    }
}

function generateDemoDates() {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
        const d = new Date(today);
        d.setDate(d.getDate() + i);
        const value = d.toISOString().split('T')[0];
        const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        const label = `${dayNames[d.getDay()]} ${d.getDate()}`;
        dates.push({ value, label });
    }
    return dates;
}

function getDoctorSchedule(doctorId) {
    const doc = getDoctorById(doctorId);
    return doc ? doc.schedule : ['09:00', '09:30', '10:00', '10:30', '13:00', '13:30', '14:00', '15:00'];
}

// Appointment Detail Modal
function openAppointmentDetail(appointmentId) {
    const appt = appState.appointments.find(a => a.id === appointmentId);
    if (!appt) return;
    const doc = getDoctorById(appt.doctorId);
    const modalHtml = createModalTemplate(`
        <h2 class="modal-title">Appointment Detail</h2>
        <p style="font-weight:700;color:var(--navy);">${appt.id}</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0;font-size:0.9rem;">
            <div><strong>Doctor</strong><br>${doc?.name || '-'}</div>
            <div><strong>Specialty</strong><br>${doc?.specialty || '-'}</div>
            <div><strong>Date</strong><br>${formatDate(appt.date)}</div>
            <div><strong>Time</strong><br>${appt.time}</div>
            <div><strong>Patient</strong><br>${appt.patient.name}</div>
            <div><strong>Status</strong><br>${appt.status}</div>
        </div>
        ${appt.status === 'upcoming' ? `<button class="btn btn-outline" style="border-color:var(--error);color:var(--error);" data-action="cancel-appointment-from-detail" data-appointment-id="${appt.id}">Cancel Appointment</button>` : ''}
    `);
    modalRoot.innerHTML = modalHtml;
    const overlay = modalRoot.querySelector('.modal-overlay');
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    modalCleanupFns['appointmentDetail'] = () => {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
    };
}

// Cancel Confirmation Modal
function openCancelConfirmation(appointmentId) {
    const modalHtml = createModalTemplate(`
        <h2 class="modal-title">Cancel Appointment?</h2>
        <p style="color:var(--muted);margin-bottom:20px;">Are you sure you want to cancel this appointment?</p>
        <div style="display:flex;gap:12px;">
            <button class="btn btn-outline" data-action="keep-appointment">Keep Appointment</button>
            <button class="btn btn-primary" style="background-color:var(--error);border-color:var(--error);" data-action="confirm-cancel" data-appointment-id="${appointmentId}">Cancel Appointment</button>
        </div>
    `);
    modalRoot.innerHTML = modalHtml;
    const overlay = modalRoot.querySelector('.modal-overlay');
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    modalCleanupFns['cancelConfirmation'] = () => {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
    };
}

// Profile Edit Modal
function openProfileEdit() {
    const profile = appState.profile;
    const modalHtml = createModalTemplate(`
        <h2 class="modal-title">Edit Profile</h2>
        <div class="form-group">
            <label for="editName">Nama</label>
            <input type="text" id="editName" value="${profile.name}" required>
            <span class="error-message" id="editNameError"></span>
        </div>
        <div class="form-group">
            <label for="editEmail">Email</label>
            <input type="email" id="editEmail" value="${profile.email}" required>
            <span class="error-message" id="editEmailError"></span>
        </div>
        <div class="form-group">
            <label for="editPhone">Phone</label>
            <input type="tel" id="editPhone" value="${profile.phone}" required>
            <span class="error-message" id="editPhoneError"></span>
        </div>
        <button class="btn btn-primary btn-full" data-action="save-profile">Simpan Perubahan</button>
    `);
    modalRoot.innerHTML = modalHtml;
    const overlay = modalRoot.querySelector('.modal-overlay');
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    modalCleanupFns['profileEdit'] = () => {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
    };
}

// Wellness Detail Modal
function openWellnessDetail(wellnessId) {
    const item = appState.wellness.find(w => w.id === wellnessId);
    if (!item) return;
    const modalHtml = createModalTemplate(`
        <h2 class="modal-title">${item.title}</h2>
        <p style="color:var(--muted);">${item.content}</p>
    `);
    modalRoot.innerHTML = modalHtml;
    const overlay = modalRoot.querySelector('.modal-overlay');
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    modalCleanupFns['wellnessDetail'] = () => {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
    };
}

// Package Detail Modal
function openPackageDetail(packageId) {
    const pkg = appState.packages.find(p => p.id === packageId);
    if (!pkg) return;
    const modalHtml = createModalTemplate(`
        <h2 class="modal-title">${pkg.name}</h2>
        <p class="package-price" style="font-size:1.5rem;color:var(--teal);">Rp ${pkg.price.toLocaleString('id-ID')}</p>
        <p style="color:var(--muted);margin-bottom:12px;">${pkg.description}</p>
        <h4 style="margin-bottom:8px;">Includes:</h4>
        <ul style="list-style:disc;padding-left:20px;color:var(--charcoal);">${pkg.features.map(f => `<li>${f}</li>`).join('')}</ul>
        <button class="btn btn-primary btn-full" style="margin-top:20px;" data-action="book-package" data-package-id="${pkg.id}">Book Package</button>
    `);
    modalRoot.innerHTML = modalHtml;
    const overlay = modalRoot.querySelector('.modal-overlay');
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    modalCleanupFns['packageDetail'] = () => {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
    };
}

// Gallery Lightbox
function openGallery(imageKey) {
    const src = appState.galleryImages[imageKey];
    if (!src) return;
    const modalHtml = `
        <div class="modal-overlay lightbox-modal" role="dialog" aria-modal="true" aria-hidden="true">
            <div class="modal-backdrop" data-modal-backdrop></div>
            <div class="modal-content" style="background:var(--navy);display:flex;align-items:center;justify-content:center;min-height:70vh;">
                <button class="modal-close-btn" data-modal-close style="position:absolute;top:16px;right:16px;background:white;color:var(--navy);border-radius:50%;">✕</button>
                <img src="${src}" alt="Galeri AERA HEALTH" class="lightbox-image" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
                <div style="display:none;color:white;font-weight:600;">Gambar tidak tersedia</div>
            </div>
        </div>
    `;
    modalRoot.innerHTML = modalHtml;
    const overlay = modalRoot.querySelector('.modal-overlay');
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    modalCleanupFns['galleryLightbox'] = () => {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
    };
}

// Mobile Drawer
function openMobileDrawer() {
    const drawer = document.getElementById('mobileDrawer');
    if (drawer) {
        drawer.classList.add('open');
        drawer.setAttribute('aria-hidden', 'false');
        body.classList.add('modal-open');
        appState.activeModal = 'mobileDrawer';
        saveState();
    }
}

function closeMobileDrawer() {
    const drawer = document.getElementById('mobileDrawer');
    if (drawer) {
        drawer.classList.remove('open');
        drawer.setAttribute('aria-hidden', 'true');
        body.classList.remove('modal-open');
        appState.activeModal = null;
        saveState();
    }
}

// ============ REGISTER MODALS ============
registerModal('doctorDetail', openDoctorDetail, () => modalCleanupFns['doctorDetail']?.());
registerModal('serviceDetail', openServiceDetail, () => modalCleanupFns['serviceDetail']?.());
registerModal('appointment', openAppointmentModal, () => modalCleanupFns['appointment']?.());
registerModal('appointmentDetail', openAppointmentDetail, () => modalCleanupFns['appointmentDetail']?.());
registerModal('cancelConfirmation', openCancelConfirmation, () => modalCleanupFns['cancelConfirmation']?.());
registerModal('profileEdit', openProfileEdit, () => modalCleanupFns['profileEdit']?.());
registerModal('wellnessDetail', openWellnessDetail, () => modalCleanupFns['wellnessDetail']?.());
registerModal('packageDetail', openPackageDetail, () => modalCleanupFns['packageDetail']?.());
registerModal('galleryLightbox', openGallery, () => modalCleanupFns['galleryLightbox']?.());
registerModal('mobileDrawer', openMobileDrawer, closeMobileDrawer);

// ============ EVENT DELEGATION ============
document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-action]');
    if (!target) return;

    const action = target.dataset.action;
    const doctorId = target.dataset.doctorId;
    const serviceId = target.dataset.serviceId;
    const wellnessId = target.dataset.wellnessId;
    const packageId = target.dataset.packageId;
    const appointmentId = target.dataset.appointmentId;
    const faqIndex = target.dataset.faqIndex;
    const date = target.dataset.date;
    const time = target.dataset.time;
    const galleryKey = target.dataset.gallery;

    switch (action) {
        case 'view-doctor':
            openModal('doctorDetail', doctorId);
            break;
        case 'book-doctor':
            openModal('appointment', doctorId);
            break;
        case 'toggle-save':
            toggleSaveDoctor(doctorId);
            break;
        case 'toggle-save-from-detail':
            toggleSaveDoctor(doctorId);
            if (appState.activeModal === 'doctorDetail') {
                const saveBtn = modalRoot.querySelector('[data-action="toggle-save-from-detail"]');
                if (saveBtn) {
                    saveBtn.textContent = appState.savedDoctors.includes(doctorId) ? 'Saved ✓' : 'Save';
                }
            }
            break;
        case 'book-from-detail':
            closeModal('doctorDetail');
            openModal('appointment', doctorId);
            break;
        case 'remove-saved':
            removeSavedDoctor(doctorId);
            break;

        case 'view-service':
            openModal('serviceDetail', serviceId);
            break;
        case 'find-doctor-from-service':
            closeModal('serviceDetail');
            document.getElementById('doctors')?.scrollIntoView({ behavior: 'smooth' });
            break;

        case 'start-appointment':
        case 'book-appointment':
            openModal('appointment');
            break;
        case 'select-appt-doctor':
            appState.appointmentState.doctor = doctorId;
            saveState();
            updateAppointmentStepVisibility();
            break;
        case 'next-step':
            handleNextStep();
            break;
        case 'prev-step':
            handlePrevStep();
            break;
        case 'select-date':
            appState.appointmentState.date = date;
            saveState();
            updateAppointmentStepVisibility();
            break;
        case 'select-time':
            appState.appointmentState.time = time;
            saveState();
            updateAppointmentStepVisibility();
            break;
        case 'confirm-appointment':
            confirmAppointment();
            break;
        case 'view-appointment':
            openModal('appointmentDetail', appointmentId);
            break;
        case 'cancel-appointment':
            openModal('cancelConfirmation', appointmentId);
            break;
        case 'cancel-appointment-from-detail':
            closeModal('appointmentDetail');
            openModal('cancelConfirmation', appointmentId);
            break;
        case 'keep-appointment':
            closeModal('cancelConfirmation');
            break;
        case 'confirm-cancel':
            cancelAppointment(appointmentId);
            break;

        case 'edit-profile':
            openModal('profileEdit');
            break;
        case 'save-profile':
            saveProfile();
            break;

        case 'view-wellness':
            openModal('wellnessDetail', wellnessId);
            break;

        case 'view-package':
            openModal('packageDetail', packageId);
            break;
        case 'book-package':
            closeModal('packageDetail');
            showToast('Fitur booking paket akan segera hadir', 'info');
            break;

        case 'gallery':
            if (galleryKey) {
                openModal('galleryLightbox', galleryKey);
            }
            break;

        case 'toggle-faq':
            toggleFaq(faqIndex);
            break;

        case 'find-doctor':
            document.getElementById('doctors')?.scrollIntoView({ behavior: 'smooth' });
            break;
        case 'view-services':
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            break;
        case 'my-appointments':
            document.getElementById('myAppointments')?.scrollIntoView({ behavior: 'smooth' });
            break;

        case 'drawer-close':
            closeMobileDrawer();
            break;
        default:
            break;
    }
});

// Handle modal close
document.addEventListener('click', (e) => {
    const closeBtn = e.target.closest('[data-modal-close]');
    if (closeBtn) {
        closeModal(appState.activeModal);
        return;
    }
    const backdrop = e.target.closest('[data-modal-backdrop]');
    if (backdrop && e.target === backdrop) {
        closeModal(appState.activeModal);
        return;
    }
    if (e.target.id === 'drawerBackdrop') {
        closeMobileDrawer();
    }
});

// ============ EVENT LISTENERS ============
function initializeStaticEvents() {
    const searchInput = document.getElementById('doctorSearchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            appState.searchQuery = e.target.value;
            saveState();
            renderDoctors();
        });
    }

    const filterSpecialty = document.getElementById('filterSpecialty');
    const filterLocation = document.getElementById('filterLocation');
    const filterAvailability = document.getElementById('filterAvailability');
    const clearFiltersBtn = document.getElementById('clearFilters');
    if (filterSpecialty) {
        filterSpecialty.addEventListener('change', (e) => {
            appState.filters.specialty = e.target.value;
            saveState();
            renderDoctors();
        });
    }
    if (filterLocation) {
        filterLocation.addEventListener('change', (e) => {
            appState.filters.location = e.target.value;
            saveState();
            renderDoctors();
        });
    }
    if (filterAvailability) {
        filterAvailability.addEventListener('change', (e) => {
            appState.filters.availability = e.target.value;
            saveState();
            renderDoctors();
        });
    }
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', () => {
            appState.filters = { specialty: '', location: '', availability: '' };
            appState.searchQuery = '';
            if (filterSpecialty) filterSpecialty.value = '';
            if (filterLocation) filterLocation.value = '';
            if (filterAvailability) filterAvailability.value = '';
            if (searchInput) searchInput.value = '';
            saveState();
            renderDoctors();
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }

    const menuToggle = document.getElementById('menuToggle');
    const drawerClose = document.getElementById('drawerClose');
    const drawerFindDoctor = document.getElementById('drawerFindDoctor');
    const drawerLinks = document.querySelectorAll('[data-drawer-close]');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            if (appState.activeModal === 'mobileDrawer') {
                closeMobileDrawer();
            } else {
                openMobileDrawer();
            }
        });
    }
    if (drawerClose) drawerClose.addEventListener('click', closeMobileDrawer);
    if (drawerFindDoctor) {
        drawerFindDoctor.addEventListener('click', () => {
            closeMobileDrawer();
            document.getElementById('doctors')?.scrollIntoView({ behavior: 'smooth' });
        });
    }
    drawerLinks.forEach(link => {
        link.addEventListener('click', closeMobileDrawer);
    });

    const mobileSearchBtn = document.getElementById('mobileSearchBtn');
    if (mobileSearchBtn) {
        mobileSearchBtn.addEventListener('click', () => {
            document.getElementById('doctors')?.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                const searchInput = document.getElementById('doctorSearchInput');
                if (searchInput) searchInput.focus();
            }, 400);
        });
    }

    const navFindDoctor = document.getElementById('navFindDoctor');
    if (navFindDoctor) {
        navFindDoctor.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('doctors')?.scrollIntoView({ behavior: 'smooth' });
        });
    }

    const startAppointmentBtn = document.getElementById('startAppointment');
    if (startAppointmentBtn) {
        startAppointmentBtn.addEventListener('click', () => {
            openModal('appointment');
        });
    }

    const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
    if (bottomNavItems.length) {
        bottomNavItems.forEach(item => {
            item.addEventListener('click', function() {
                bottomNavItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
}

// ============ APPOINTMENT FUNCTIONS ============
function handleNextStep() {
    const current = getCurrentStepIndex();
    if (current === 0 && !appState.appointmentState.doctor) {
        showToast('Pilih dokter terlebih dahulu', 'error');
        return;
    }
    if (current === 1 && !appState.appointmentState.date) {
        showToast('Pilih tanggal', 'error');
        return;
    }
    if (current === 2 && !appState.appointmentState.time) {
        showToast('Pilih waktu', 'error');
        return;
    }
    if (current === 3) {
        const name = document.getElementById('apptName')?.value.trim();
        const email = document.getElementById('apptEmail')?.value.trim();
        const phone = document.getElementById('apptPhone')?.value.trim();
        const dob = document.getElementById('apptDob')?.value;
        const reason = document.getElementById('apptReason')?.value.trim();
        let valid = true;
        if (!name) {
            document.getElementById('apptNameError').textContent = 'Nama wajib diisi';
            valid = false;
        } else {
            document.getElementById('apptNameError').textContent = '';
        }
        if (!email || !email.includes('@')) {
            document.getElementById('apptEmailError').textContent = 'Email tidak valid';
            valid = false;
        } else {
            document.getElementById('apptEmailError').textContent = '';
        }
        if (!phone || phone.replace(/\D/g, '').length < 9) {
            document.getElementById('apptPhoneError').textContent = 'Nomor telepon tidak valid';
            valid = false;
        } else {
            document.getElementById('apptPhoneError').textContent = '';
        }
        if (!dob) {
            document.getElementById('apptDobError').textContent = 'Tanggal lahir wajib diisi';
            valid = false;
        } else {
            document.getElementById('apptDobError').textContent = '';
        }
        if (!reason) {
            document.getElementById('apptReasonError').textContent = 'Alasan kunjungan wajib diisi';
            valid = false;
        } else {
            document.getElementById('apptReasonError').textContent = '';
        }
        if (!valid) return;
        appState.appointmentState.patient = { name, email, phone, dob };
        appState.appointmentState.reason = reason;
        saveState();
    }
    if (current < 4) {
        appState.appointmentState.step = current + 1;
        saveState();
        updateAppointmentStepVisibility();
    }
}

function handlePrevStep() {
    const current = getCurrentStepIndex();
    if (current > 0) {
        appState.appointmentState.step = current - 1;
        saveState();
        updateAppointmentStepVisibility();
    }
}

function confirmAppointment() {
    if (!appState.appointmentState.doctor || !appState.appointmentState.date || 
        !appState.appointmentState.time || !appState.appointmentState.patient.name) {
        showToast('Data belum lengkap', 'error');
        return;
    }
    const newAppt = {
        id: generateAppointmentId(),
        doctorId: appState.appointmentState.doctor,
        date: appState.appointmentState.date,
        time: appState.appointmentState.time,
        patient: { ...appState.appointmentState.patient },
        reason: appState.appointmentState.reason,
        status: 'upcoming',
        createdAt: new Date().toISOString()
    };
    appState.appointments.unshift(newAppt);
    saveState();
    closeModal('appointment');
    renderAppointments();
    renderProfile();
    showToast('Appointment confirmed!', 'success');
    document.getElementById('myAppointments')?.scrollIntoView({ behavior: 'smooth' });
}

function cancelAppointment(appointmentId) {
    const appt = appState.appointments.find(a => a.id === appointmentId);
    if (appt) {
        appt.status = 'cancelled';
        saveState();
        closeModal('cancelConfirmation');
        renderAppointments();
        renderProfile();
        showToast('Appointment cancelled', 'info');
    }
}

// ============ PROFILE FUNCTIONS ============
function saveProfile() {
    const name = document.getElementById('editName')?.value.trim();
    const email = document.getElementById('editEmail')?.value.trim();
    const phone = document.getElementById('editPhone')?.value.trim();
    let valid = true;
    if (!name) {
        document.getElementById('editNameError').textContent = 'Nama wajib diisi';
        valid = false;
    } else {
        document.getElementById('editNameError').textContent = '';
    }
    if (!email || !email.includes('@')) {
        document.getElementById('editEmailError').textContent = 'Email tidak valid';
        valid = false;
    } else {
        document.getElementById('editEmailError').textContent = '';
    }
    if (!phone) {
        document.getElementById('editPhoneError').textContent = 'Telepon wajib diisi';
        valid = false;
    } else {
        document.getElementById('editPhoneError').textContent = '';
    }
    if (valid) {
        appState.profile = { name, email, phone };
        saveState();
        closeModal('profileEdit');
        renderProfile();
        showToast('Profile updated!', 'success');
    }
}

// ============ SAVED DOCTORS FUNCTIONS ============
function toggleSaveDoctor(doctorId) {
    const index = appState.savedDoctors.indexOf(doctorId);
    if (index >= 0) {
        appState.savedDoctors.splice(index, 1);
        showToast('Doctor removed', 'info');
    } else {
        appState.savedDoctors.push(doctorId);
        showToast('Doctor saved', 'success');
    }
    saveState();
    renderDoctors();
    renderSavedDoctors();
    renderProfile();
}

function removeSavedDoctor(doctorId) {
    const index = appState.savedDoctors.indexOf(doctorId);
    if (index >= 0) {
        appState.savedDoctors.splice(index, 1);
        saveState();
        renderSavedDoctors();
        renderDoctors();
        renderProfile();
        showToast('Doctor removed', 'info');
    }
}

// ============ FAQ TOGGLE ============
function toggleFaq(index) {
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems[index]) {
        const isOpen = faqItems[index].classList.contains('open');
        faqItems.forEach(item => item.classList.remove('open'));
        if (!isOpen) {
            faqItems[index].classList.add('open');
            faqItems[index].querySelector('.faq-question').setAttribute('aria-expanded', 'true');
        } else {
            faqItems[index].querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
    }
}

// ============ CONTACT FORM ============
function handleContactSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('contactName')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const message = document.getElementById('contactMessage')?.value.trim();
    let valid = true;
    if (!name) {
        document.getElementById('contactNameError').textContent = 'Nama wajib diisi';
        valid = false;
    } else {
        document.getElementById('contactNameError').textContent = '';
    }
    if (!email || !email.includes('@')) {
        document.getElementById('contactEmailError').textContent = 'Email tidak valid';
        valid = false;
    } else {
        document.getElementById('contactEmailError').textContent = '';
    }
    if (!message) {
        document.getElementById('contactMessageError').textContent = 'Pesan wajib diisi';
        valid = false;
    } else {
        document.getElementById('contactMessageError').textContent = '';
    }
    if (valid) {
        showToast('Message sent!', 'success');
        e.target.reset();
    }
}

// ============ INITIALIZATION ============
function init() {
    initializeStaticEvents();
    renderDoctors();
    renderServices();
    renderAppointments();
    renderSavedDoctors();
    renderProfile();
    renderWellness();
    renderPackages();
    renderStats();
    renderTestimonials();
    renderFaq();
    
    const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
    if (bottomNavItems.length) {
        bottomNavItems[0].classList.add('active');
    }
    
    if (window.location.hash === '#doctors') {
        document.getElementById('doctors')?.scrollIntoView();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}