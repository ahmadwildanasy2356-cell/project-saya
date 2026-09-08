"use strict";

/* ==========================================================
   LUMEN — JavaScript Application
   File: js/script.js
   ========================================================== */

/* ==================== 1. DATA ==================== */

const instructors = [
    {
        id: 1,
        name: "Andi Pratama",
        role: "Front-End Developer & Educator",
        bio: "Andi memiliki 8+ tahun pengalaman dalam web development. Ia percaya bahwa belajar coding seharusnya praktis, menyenangkan, dan langsung bisa dipraktikkan.",
        image: "assets/images/instructor-01.jpg"
    },
    {
        id: 2,
        name: "Sarah Chen",
        role: "UI/UX Designer",
        bio: "Sarah telah mendesain produk digital untuk berbagai startup di Asia. Fokus utamanya adalah membantu pemula memahami prinsip desain yang benar sejak awal.",
        image: "assets/images/instructor-02.jpg"
    },
    {
        id: 3,
        name: "Michael Tan",
        role: "Data Analyst",
        bio: "Michael bekerja sebagai data analyst di perusahaan e-commerce terbesar di Indonesia. Ia suka menjelaskan konsep data dengan cara yang mudah dipahami.",
        image: "assets/images/instructor-03.jpg"
    }
];

const courses = [
    {
        id: 1,
        title: "HTML & CSS dari Dasar",
        category: "Programming",
        level: "Beginner",
        duration: "6 jam",
        durationMinutes: 360,
        lessons: 24,
        rating: 4.9,
        students: 1240,
        price: 149000,
        instructorId: 1,
        image: "assets/images/course-01.jpg",
        description: "Pelajari dasar HTML dan CSS untuk membangun halaman web modern yang responsif dan menarik.",
        outcomes: [
            "Memahami struktur HTML semantic",
            "Menerapkan styling dengan CSS",
            "Membuat layout responsif",
            "Membangun landing page sederhana"
        ],
        modules: [
            {
                title: "Module 1: Pengenalan HTML",
                lessons: [
                    { title: "Mengenal struktur HTML", content: "HTML adalah fondasi dari setiap halaman web. Dalam pelajaran ini, kamu akan belajar tag-tag dasar seperti <html>, <head>, <body>, dan bagaimana menyusunnya dengan benar." },
                    { title: "Semantic HTML", content: "Semantic HTML menggunakan tag seperti <header>, <nav>, <main>, <section>, dan <footer> untuk memberikan makna pada struktur dokumen." },
                    { title: "Form dan Input", content: "Form adalah cara pengguna berinteraksi dengan website. Pelajari <form>, <input>, <label>, dan atribut pentingnya." },
                    { title: "Media Elements", content: "Menambahkan gambar, audio, dan video ke halaman web menggunakan tag <img>, <audio>, dan <video>." }
                ]
            },
            {
                title: "Module 2: CSS Dasar",
                lessons: [
                    { title: "Selectors dan Specificity", content: "CSS selectors menentukan elemen mana yang diberi style. Pelajari class, id, dan cara menghitung specificity." },
                    { title: "Box Model", content: "Setiap elemen HTML adalah kotak. Memahami margin, padding, border, dan content adalah kunci layout CSS." },
                    { title: "Flexbox", content: "Flexbox adalah sistem layout satu dimensi untuk mengatur elemen secara horizontal atau vertikal dengan mudah." },
                    { title: "CSS Grid", content: "CSS Grid adalah sistem layout dua dimensi yang powerful untuk membuat desain yang kompleks." },
                    { title: "Responsive Design", content: "Media queries memungkinkan website menyesuaikan tampilan berdasarkan ukuran layar pengguna." }
                ]
            },
            {
                title: "Module 3: Praktik",
                lessons: [
                    { title: "Membangun Landing Page", content: "Gabungkan semua yang telah dipelajari untuk membangun landing page modern dari nol." },
                    { title: "Deploy ke Hosting", content: "Pelajari cara mempublikasikan website kamu ke internet menggunakan GitHub Pages atau hosting lainnya." }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "JavaScript untuk Pemula",
        category: "Programming",
        level: "Beginner",
        duration: "10 jam",
        durationMinutes: 600,
        lessons: 36,
        rating: 4.8,
        students: 980,
        price: 199000,
        instructorId: 1,
        image: "assets/images/course-02.jpg",
        description: "Pelajari JavaScript dari nol dan mulai membuat website yang interaktif.",
        outcomes: [
            "Memahami variabel dan tipe data",
            "Menggunakan fungsi dan control flow",
            "Memanipulasi DOM",
            "Membuat event handling"
        ],
        modules: [
            {
                title: "Module 1: Dasar JavaScript",
                lessons: [
                    { title: "Variabel dan Tipe Data", content: "JavaScript memiliki let, const, dan var. Pelajari kapan menggunakan masing-masing dan tipe data primitif." },
                    { title: "Control Flow", content: "If-else, switch, dan ternary operator untuk membuat logika percabangan dalam program." },
                    { title: "Loop", content: "For, while, dan forEach untuk mengiterasi data." },
                    { title: "Fungsi", content: "Arrow functions, parameters, dan return values." }
                ]
            },
            {
                title: "Module 2: DOM Manipulation",
                lessons: [
                    { title: "Selecting Elements", content: "querySelector dan getElementById untuk mengambil elemen dari halaman." },
                    { title: "Event Handling", content: "AddEventListener untuk merespon interaksi pengguna seperti click, input, dan submit." }
                ]
            },
            {
                title: "Module 3: Proyek",
                lessons: [
                    { title: "Todo List App", content: "Membangun aplikasi todo list lengkap dengan add, delete, dan filter." },
                    { title: "Quiz App", content: "Membuat aplikasi kuis interaktif dengan scoring system." }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "UI Design Fundamentals",
        category: "Design",
        level: "Beginner",
        duration: "8 jam",
        durationMinutes: 480,
        lessons: 28,
        rating: 4.7,
        students: 850,
        price: 179000,
        instructorId: 2,
        image: "assets/images/course-03.jpg",
        description: "Pelajari prinsip dasar UI design dan mulai mendesain antarmuka yang indah.",
        outcomes: [
            "Memahami prinsip desain visual",
            "Menggunakan typography yang efektif",
            "Membangun design system sederhana",
            "Membuat prototype"
        ],
        modules: [
            {
                title: "Module 1: Prinsip Dasar",
                lessons: [
                    { title: "Visual Hierarchy", content: "Bagaimana mengatur elemen agar pengguna melihat yang paling penting terlebih dahulu." },
                    { title: "Color Theory", content: "Memahami roda warna, kontras, dan cara memilih palet warna yang harmonis." },
                    { title: "Typography", content: "Memilih font, ukuran, dan spacing untuk readability yang optimal." }
                ]
            },
            {
                title: "Module 2: Praktik Desain",
                lessons: [
                    { title: "Layout dan Grid", content: "Menggunakan grid system untuk mengatur layout yang konsisten." },
                    { title: "Component Design", content: "Mendesain button, input, card, dan komponen UI lainnya." }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Public Speaking",
        category: "Personal Development",
        level: "Beginner",
        duration: "4 jam",
        durationMinutes: 240,
        lessons: 16,
        rating: 4.6,
        students: 1120,
        price: 0,
        instructorId: 3,
        image: "assets/images/course-04.jpg",
        description: "Tingkatkan kepercayaan diri dan kemampuan berbicara di depan umum.",
        outcomes: [
            "Mengatasi rasa gugup",
            "Menyusun presentasi yang menarik",
            "Menggunakan bahasa tubuh yang efektif",
            "Berbicara dengan percaya diri"
        ],
        modules: [
            {
                title: "Module 1: Persiapan",
                lessons: [
                    { title: "Mengatasi Kecemasan", content: "Teknik pernapasan dan mindset shift untuk mengatasi rasa gugup." },
                    { title: "Struktur Presentasi", content: "Menyusun opening, body, dan closing yang efektif." }
                ]
            },
            {
                title: "Module 2: Delivery",
                lessons: [
                    { title: "Body Language", content: "Menggunakan gestur, eye contact, dan postur untuk memperkuat pesan." },
                    { title: "Vocal Variety", content: "Pitch, pace, dan pause untuk membuat presentasi lebih menarik." }
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Digital Marketing Dasar",
        category: "Marketing",
        level: "Beginner",
        duration: "5 jam",
        durationMinutes: 300,
        lessons: 20,
        rating: 4.5,
        students: 720,
        price: 129000,
        instructorId: 3,
        image: "assets/images/course-05.jpg",
        description: "Memahami dasar-dasar digital marketing untuk memulai karir di bidang ini.",
        outcomes: [
            "Memahami funnel marketing",
            "Menggunakan social media untuk marketing",
            "Dasar SEO dan SEM",
            "Membuat strategi konten"
        ],
        modules: [
            {
                title: "Module 1: Fondasi",
                lessons: [
                    { title: "Digital Marketing Landscape", content: "Overview channel digital marketing yang tersedia dan fungsinya." },
                    { title: "Customer Persona", content: "Mendefinisikan target audience untuk strategi marketing yang efektif." }
                ]
            },
            {
                title: "Module 2: Channel",
                lessons: [
                    { title: "Social Media Marketing", content: "Strategi konten dan engagement di platform sosial media." },
                    { title: "SEO Basics", content: "Dasar-dasar Search Engine Optimization untuk website." }
                ]
            }
        ]
    },
    {
        id: 6,
        title: "English Conversation",
        category: "Languages",
        level: "Intermediate",
        duration: "7 jam",
        durationMinutes: 420,
        lessons: 24,
        rating: 4.8,
        students: 650,
        price: 159000,
        instructorId: 2,
        image: "assets/images/course-06.jpg",
        description: "Praktik percakapan bahasa Inggris untuk situasi sehari-hari dan profesional.",
        outcomes: [
            "Berbicara dengan lebih natural",
            "Memahami idiom umum",
            "Meningkatkan listening",
            "Percaya diri dalam percakapan"
        ],
        modules: [
            {
                title: "Module 1: Everyday Conversation",
                lessons: [
                    { title: "Greetings & Small Talk", content: "Memulai percakapan santai dengan natural dan tepat." },
                    { title: "Ordering & Shopping", content: "Percakapan di restoran, toko, dan tempat umum lainnya." }
                ]
            },
            {
                title: "Module 2: Professional English",
                lessons: [
                    { title: "Meeting & Presentation", content: "Berpartisipasi dalam meeting dan presentasi menggunakan bahasa Inggris." },
                    { title: "Email Writing", content: "Menulis email profesional dengan tone yang tepat." }
                ]
            }
        ]
    },
    {
        id: 7,
        title: "Data Analysis Essentials",
        category: "Data",
        level: "Intermediate",
        duration: "12 jam",
        durationMinutes: 720,
        lessons: 40,
        rating: 4.9,
        students: 520,
        price: 249000,
        instructorId: 3,
        image: "assets/images/course-07.jpg",
        description: "Pelajari konsep dasar analisis data dan mulai menganalisis data dengan confidence.",
        outcomes: [
            "Memahami dasar statistik",
            "Menggunakan tools analisis data",
            "Membuat visualisasi data",
            "Mengambil insight dari data"
        ],
        modules: [
            {
                title: "Module 1: Data Fundamentals",
                lessons: [
                    { title: "Tipe Data", content: "Memahami tipe data, data cleaning, dan preparasi data." },
                    { title: "Statistik Deskriptif", content: "Mean, median, mode, dan standar deviasi untuk menganalisis data." }
                ]
            },
            {
                title: "Module 2: Visualisasi",
                lessons: [
                    { title: "Chart Types", content: "Memilih chart yang tepat untuk jenis data yang berbeda." },
                    { title: "Dashboard Design", content: "Membuat dashboard yang informatif dan mudah dipahami." }
                ]
            }
        ]
    },
    {
        id: 8,
        title: "Personal Productivity",
        category: "Personal Development",
        level: "Beginner",
        duration: "3 jam",
        durationMinutes: 180,
        lessons: 12,
        rating: 4.4,
        students: 890,
        price: 0,
        instructorId: 1,
        image: "assets/images/course-08.jpg",
        description: "Tingkatkan produktivitas dengan sistem manajemen waktu dan energi yang efektif.",
        outcomes: [
            "Mengelola waktu dengan lebih baik",
            "Membangun kebiasaan produktif",
            "Mengatasi prokrastinasi",
            "Menetapkan prioritas"
        ],
        modules: [
            {
                title: "Module 1: Time Management",
                lessons: [
                    { title: "Time Blocking", content: "Teknik time blocking untuk mengatur jadwal dan fokus pada prioritas." },
                    { title: "Eisenhower Matrix", content: "Memilah tugas berdasarkan urgensi dan kepentingan." }
                ]
            },
            {
                title: "Module 2: Habits",
                lessons: [
                    { title: "Atomic Habits", content: "Membangun kebiasaan kecil yang berdampak besar." },
                    { title: "Overcoming Procrastination", content: "Strategi praktis untuk mengatasi penundaan." }
                ]
            }
        ]
    },
    {
        id: 9,
        title: "Responsive Web Design",
        category: "Programming",
        level: "Intermediate",
        duration: "8 jam",
        durationMinutes: 480,
        lessons: 30,
        rating: 4.7,
        students: 430,
        price: 169000,
        instructorId: 1,
        image: "assets/images/course-09.jpg",
        description: "Mahir membuat website yang tampil sempurna di semua ukuran layar.",
        outcomes: [
            "Mobile-first design",
            "Media queries lanjutan",
            "Fluid layouts",
            "Responsive images"
        ],
        modules: [
            {
                title: "Module 1: Mobile-First",
                lessons: [
                    { title: "Mobile-First Mindset", content: "Mengapa mobile-first adalah pendekatan terbaik untuk responsive design." },
                    { title: "Fluid Grid", content: "Menggunakan persentase dan flexible units untuk layout yang adaptif." }
                ]
            },
            {
                title: "Module 2: Advanced Techniques",
                lessons: [
                    { title: "Responsive Images", content: "srcset dan sizes untuk mengoptimalkan gambar di berbagai device." },
                    { title: "Container Queries", content: "CSS container queries untuk komponen yang lebih adaptif." }
                ]
            }
        ]
    }
];

const learningPaths = [
    {
        id: 1,
        title: "Front-End Fundamentals",
        description: "Bangun fondasi solid sebagai front-end developer.",
        courseIds: [1, 2, 9, 3],
        icon: "💻"
    }
];

const testimonials = [
    { name: "Dewi Lestari", role: "UI Designer", rating: 5, comment: "Materinya terasa runtut dan saya selalu tahu apa yang harus dipelajari berikutnya. Sangat membantu!" },
    { name: "Budi Santoso", role: "Mahasiswa", rating: 5, comment: "Belajar HTML & CSS di LUMEN terasa menyenangkan. Instrukturnya menjelaskan dengan jelas dan sabar." },
    { name: "Rina Wijaya", role: "Marketing Specialist", rating: 4, comment: "Kursus Digital Marketing sangat praktis. Saya langsung bisa menerapkan ilmunya di pekerjaan." },
    { name: "Alex Pratama", role: "Freelancer", rating: 5, comment: "Progress tracking-nya bikin saya termotivasi. Melihat progress bar naik itu satisfying banget!" },
    { name: "Maya Sari", role: "Entrepreneur", rating: 4, comment: "Sistem learning path-nya membantu saya tahu harus mulai dari mana. Sangat terstruktur." },
    { name: "John Doe", role: "Software Engineer", rating: 5, comment: "JavaScript untuk Pemula adalah kursus terbaik untuk memulai coding. Highly recommended!" }
];

const faqs = [
    { question: "Apa itu LUMEN?", answer: "LUMEN adalah platform belajar online modern yang membantu kamu menemukan kursus, mempelajari materi, memantau progress, dan membangun kebiasaan belajar yang konsisten." },
    { question: "Apakah semua kursus berbayar?", answer: "Tidak. LUMEN menyediakan beberapa kursus gratis yang bisa kamu akses langsung. Kursus berbayar memiliki harga yang kompetitif dengan kualitas materi yang terjamin." },
    { question: "Bagaimana progress dihitung?", answer: "Progress dihitung berdasarkan jumlah lesson yang telah kamu selesaikan dibagi dengan total lesson dalam course tersebut. Setiap kali kamu menandai lesson sebagai selesai, progress akan diperbarui secara otomatis." },
    { question: "Apakah bisa belajar melalui smartphone?", answer: "Tentu! LUMEN didesain mobile-first, artinya pengalaman belajar di smartphone adalah prioritas utama kami. Kamu bisa belajar kapan saja dan di mana saja." },
    { question: "Apakah sertifikat tersedia?", answer: "Ya, setelah kamu menyelesaikan 100% course, kamu akan mendapatkan sertifikat penyelesaian. Sertifikat ini adalah simulasi untuk demo platform LUMEN." }
];

/* ==================== 2. STATE ==================== */

const DEFAULT_STATE = {
    currentUser: { name: "Student LUMEN", level: "Beginner" },
    savedCourses: [],
    myCourses: [],
    progress: {},
    completedLessons: {},
    learningStreak: 0,
    lastLearningDate: null,
    dailyGoal: { target: 30, completed: 0 },
    notifications: [],
    cart: [],
    currentCategory: null,
    filterLevel: null,
    filterPrice: null,
    filterDuration: null,
    sortBy: 'relevance',
    searchQuery: '',
    currentCourseId: null,
    currentLessonId: null
};

let appState = JSON.parse(JSON.stringify(DEFAULT_STATE));

const STORAGE_KEY = 'lumenAppState';

/* ==================== 3. LOCALSTORAGE ==================== */

function saveState() {
    try {
        const stateToSave = {
            savedCourses: appState.savedCourses,
            myCourses: appState.myCourses,
            progress: appState.progress,
            completedLessons: appState.completedLessons,
            learningStreak: appState.learningStreak,
            lastLearningDate: appState.lastLearningDate,
            dailyGoal: appState.dailyGoal,
            notifications: appState.notifications,
            cart: appState.cart
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    } catch (e) {
        console.warn('Failed to save state:', e);
    }
}

function loadState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            appState.savedCourses = Array.isArray(parsed.savedCourses) ? parsed.savedCourses : [];
            appState.myCourses = Array.isArray(parsed.myCourses) ? parsed.myCourses : [];
            appState.progress = typeof parsed.progress === 'object' && parsed.progress !== null ? parsed.progress : {};
            appState.completedLessons = typeof parsed.completedLessons === 'object' && parsed.completedLessons !== null ? parsed.completedLessons : {};
            appState.learningStreak = typeof parsed.learningStreak === 'number' ? parsed.learningStreak : 0;
            appState.lastLearningDate = parsed.lastLearningDate || null;
            appState.dailyGoal = typeof parsed.dailyGoal === 'object' && parsed.dailyGoal !== null ? parsed.dailyGoal : { target: 30, completed: 0 };
            appState.notifications = Array.isArray(parsed.notifications) ? parsed.notifications : [];
            appState.cart = Array.isArray(parsed.cart) ? parsed.cart : [];
        }
    } catch (e) {
        console.warn('Failed to load state, using defaults:', e);
        appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
    }
}

function resetState() {
    appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
    saveState();
    renderAll();
}

/* ==================== 4. UTILITY ==================== */

function formatPrice(price) {
    if (price === 0 || price === null || price === undefined) return 'GRATIS';
    return 'Rp' + new Intl.NumberFormat('id-ID').format(price);
}

function findCourseById(courseId) {
    const id = Number(courseId);
    return courses.find(c => c.id === id) || null;
}

function findInstructorById(instructorId) {
    const id = Number(instructorId);
    return instructors.find(i => i.id === id) || null;
}

function calculateProgress(courseId) {
    const course = findCourseById(courseId);
    if (!course) return 0;
    const completed = appState.completedLessons[courseId] || [];
    const totalLessons = getTotalLessons(course);
    if (totalLessons === 0) return 0;
    return Math.round((completed.length / totalLessons) * 100);
}

function getTotalLessons(course) {
    if (!course || !course.modules) return 0;
    return course.modules.reduce((sum, module) => sum + module.lessons.length, 0);
}

function getAllLessons(course) {
    if (!course || !course.modules) return [];
    const lessons = [];
    course.modules.forEach(module => {
        module.lessons.forEach(lesson => {
            lessons.push({ ...lesson, moduleTitle: module.title });
        });
    });
    return lessons;
}

function getCompletedLessonsForCourse(courseId) {
    return appState.completedLessons[courseId] || [];
}

function isLessonCompleted(courseId, lessonIndex) {
    return getCompletedLessonsForCourse(courseId).includes(lessonIndex);
}

function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function getCurrentDateString() {
    const now = new Date();
    return now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
}

function updateStreak() {
    const today = new Date().toDateString();
    if (appState.lastLearningDate === today) return;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (appState.lastLearningDate === yesterday) {
        appState.learningStreak += 1;
    } else {
        appState.learningStreak = 1;
    }
    appState.lastLearningDate = today;
}

/* ==================== 5. RENDER FUNCTIONS ==================== */

function renderCategories() {
    const container = document.getElementById('category-list');
    const categories = ['Semua', ...new Set(courses.map(c => c.category))];
    container.innerHTML = categories.map(cat => {
        const isActive = appState.currentCategory === cat || (!appState.currentCategory && cat === 'Semua');
        return `<button class="category-chip ${isActive ? 'active' : ''}" data-category="${cat}" aria-pressed="${isActive}">${cat}</button>`;
    }).join('');
    container.querySelectorAll('.category-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            appState.currentCategory = chip.dataset.category === 'Semua' ? null : chip.dataset.category;
            renderCategories();
            applyFiltersAndRender();
        });
    });
}

function renderFilters() {
    const levelContainer = document.getElementById('level-filter');
    const priceContainer = document.getElementById('price-filter');
    const durationContainer = document.getElementById('duration-filter');
    const levels = ['Semua', 'Beginner', 'Intermediate', 'Advanced'];
    const prices = ['Semua', 'Gratis', 'Di bawah Rp100.000', 'Rp100.000+'];
    const durations = ['Semua', '< 5 jam', '5–10 jam', '10+ jam'];
    levelContainer.innerHTML = `<span class="text-xs font-semibold text-muted self-center mr-1">Level:</span>` + levels.map(l => `<button class="filter-chip ${appState.filterLevel === l ? 'active' : ''}" data-level="${l}">${l}</button>`).join('');
    priceContainer.innerHTML = `<span class="text-xs font-semibold text-muted self-center mr-1">Harga:</span>` + prices.map(p => `<button class="filter-chip ${appState.filterPrice === p ? 'active' : ''}" data-price="${p}">${p}</button>`).join('');
    durationContainer.innerHTML = `<span class="text-xs font-semibold text-muted self-center mr-1">Durasi:</span>` + durations.map(d => `<button class="filter-chip ${appState.filterDuration === d ? 'active' : ''}" data-duration="${d}">${d}</button>`).join('');
    levelContainer.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            appState.filterLevel = chip.dataset.level === 'Semua' ? null : chip.dataset.level;
            renderFilters();
            applyFiltersAndRender();
        });
    });
    priceContainer.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            appState.filterPrice = chip.dataset.price === 'Semua' ? null : chip.dataset.price;
            renderFilters();
            applyFiltersAndRender();
        });
    });
    durationContainer.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            appState.filterDuration = chip.dataset.duration === 'Semua' ? null : chip.dataset.duration;
            renderFilters();
            applyFiltersAndRender();
        });
    });
}

function getFilteredCourses() {
    let filtered = [...courses];
    if (appState.searchQuery) {
        const query = appState.searchQuery.toLowerCase().trim();
        filtered = filtered.filter(course => 
            course.title.toLowerCase().includes(query) ||
            course.category.toLowerCase().includes(query) ||
            course.description.toLowerCase().includes(query) ||
            (findInstructorById(course.instructorId)?.name.toLowerCase().includes(query) || false)
        );
    }
    if (appState.currentCategory) {
        filtered = filtered.filter(course => course.category === appState.currentCategory);
    }
    if (appState.filterLevel) {
        filtered = filtered.filter(course => course.level === appState.filterLevel);
    }
    if (appState.filterPrice) {
        if (appState.filterPrice === 'Gratis') filtered = filtered.filter(course => course.price === 0);
        else if (appState.filterPrice === 'Di bawah Rp100.000') filtered = filtered.filter(course => course.price > 0 && course.price < 100000);
        else if (appState.filterPrice === 'Rp100.000+') filtered = filtered.filter(course => course.price >= 100000);
    }
    if (appState.filterDuration) {
        if (appState.filterDuration === '< 5 jam') filtered = filtered.filter(course => course.durationMinutes < 300);
        else if (appState.filterDuration === '5–10 jam') filtered = filtered.filter(course => course.durationMinutes >= 300 && course.durationMinutes <= 600);
        else if (appState.filterDuration === '10+ jam') filtered = filtered.filter(course => course.durationMinutes > 600);
    }
    if (appState.sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);
    else if (appState.sortBy === 'price-low') filtered.sort((a, b) => a.price - b.price);
    else if (appState.sortBy === 'newest') filtered.sort((a, b) => b.id - a.id);
    return filtered;
}

function applyFiltersAndRender() {
    renderCourses();
    renderRecommendations();
}

function createCourseCardHTML(course) {
    const instructor = findInstructorById(course.instructorId);
    const isSaved = appState.savedCourses.includes(course.id);
    const isFree = course.price === 0;
    const progress = appState.progress[course.id] || 0;
    const isEnrolled = appState.myCourses.includes(course.id);
    return `
        <div class="course-card" data-course-id="${course.id}" role="article">
            <div class="relative">
                <img src="${course.image}" alt="${escapeHTML(course.title)}" loading="lazy" class="course-card-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="course-card-image-fallback" style="display:none;">${escapeHTML(course.title.charAt(0))}</div>
                ${isEnrolled ? `<span class="absolute top-2 left-2 bg-success text-white text-[10px] font-bold px-2 py-1 rounded-full">ENROLLED</span>` : ''}
                ${progress > 0 && progress < 100 ? `<span class="absolute top-2 right-2 bg-lumen-navy text-white text-[10px] font-bold px-2 py-1 rounded-full">${progress}%</span>` : ''}
            </div>
            <div class="course-card-body">
                <span class="course-card-category">${escapeHTML(course.category)}</span>
                <h3 class="course-card-title">${escapeHTML(course.title)}</h3>
                ${instructor ? `<p class="course-card-instructor">${escapeHTML(instructor.name)}</p>` : ''}
                <div class="course-card-meta">
                    <span class="course-card-rating"><svg fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>${course.rating.toFixed(1)}</span>
                    <span>•</span><span>${course.students.toLocaleString('id-ID')} siswa</span>
                    <span>•</span><span>${course.duration}</span>
                    <span>•</span><span>${course.level}</span>
                </div>
                <div class="course-card-bottom">
                    <span class="course-card-price ${isFree ? 'free' : ''}">${formatPrice(course.price)}</span>
                    <button class="bookmark-btn ${isSaved ? 'saved' : ''}" data-course-id="${course.id}" aria-label="${isSaved ? 'Hapus dari tersimpan' : 'Simpan kursus'}" aria-pressed="${isSaved}">
                        <svg class="w-5 h-5" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderCourses() {
    const grid = document.getElementById('course-grid');
    const noResults = document.getElementById('no-courses');
    const searchInfo = document.getElementById('search-results-info');
    const filtered = getFilteredCourses();
    if (filtered.length === 0) {
        grid.innerHTML = '';
        noResults.classList.remove('hidden');
        searchInfo.textContent = '';
        return;
    }
    noResults.classList.add('hidden');
    searchInfo.textContent = `Menampilkan ${filtered.length} kursus`;
    grid.innerHTML = filtered.map(course => createCourseCardHTML(course)).join('');
    grid.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.bookmark-btn')) return;
            openCourseDetail(card.dataset.courseId);
        });
    });
    grid.querySelectorAll('.bookmark-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleBookmark(btn.dataset.courseId);
        });
    });
}

function renderMyCourses() {
    const container = document.getElementById('my-courses-container');
    const enrolledCourses = appState.myCourses.map(id => findCourseById(id)).filter(Boolean);
    if (enrolledCourses.length === 0) {
        container.innerHTML = `<div class="empty-state"><div class="empty-state-icon">📚</div><p class="empty-state-title">Belum ada kursus yang sedang dipelajari.</p><p class="empty-state-subtitle">Mulai belajar dengan menjelajahi kursus yang tersedia.</p><a href="#jelajahi" class="inline-block mt-4 px-5 py-2.5 bg-lumen-blue text-white text-sm font-semibold rounded-full hover:bg-lumen-navy transition-all">Jelajahi Kursus</a></div>`;
        return;
    }
    container.innerHTML = enrolledCourses.map(course => {
        const progress = appState.progress[course.id] || 0;
        const totalLessons = getTotalLessons(course);
        const completed = getCompletedLessonsForCourse(course.id).length;
        const lessons = getAllLessons(course);
        const currentLessonIndex = completed < totalLessons ? completed : totalLessons - 1;
        const currentLesson = lessons[currentLessonIndex] || { title: 'Selesai', moduleTitle: '' };
        return `
            <div class="bg-white border border-border-light rounded-2xl overflow-hidden mb-4">
                <div class="flex flex-col sm:flex-row">
                    <div class="sm:w-56 h-40 sm:h-auto flex-shrink-0">
                        <img src="${course.image}" alt="${escapeHTML(course.title)}" loading="lazy" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="hidden w-full h-full items-center justify-center bg-gradient-to-br from-lumen-navy to-lumen-blue text-white font-bold text-3xl" style="display:none;">${course.title.charAt(0)}</div>
                    </div>
                    <div class="flex-1 p-4 sm:p-5">
                        <h3 class="font-bold text-lumen-navy text-base sm:text-lg">${escapeHTML(course.title)}</h3>
                        <p class="text-sm text-muted mt-1">Lesson: ${escapeHTML(currentLesson.title)}</p>
                        <div class="mt-3 flex items-center gap-3">
                            <div class="flex-1 progress-bar-bg"><div class="progress-bar-fill ${progress >= 100 ? 'complete' : ''}" style="width: ${progress}%;"></div></div>
                            <span class="text-sm font-bold text-lumen-navy">${progress}%</span>
                        </div>
                        <button class="continue-course-btn mt-3 inline-flex items-center px-4 py-2 bg-lumen-blue text-white text-sm font-semibold rounded-full hover:bg-lumen-navy transition-all touch-target" data-course-id="${course.id}">${progress >= 100 ? 'Lihat Sertifikat' : 'Lanjutkan'}</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    container.querySelectorAll('.continue-course-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const courseId = Number(btn.dataset.courseId);
            const progress = appState.progress[courseId] || 0;
            if (progress >= 100) openCertificate(courseId);
            else openLessonPlayer(courseId);
        });
    });
}

function renderDashboard() {
    const container = document.getElementById('dashboard-stats');
    const activeCourses = appState.myCourses.filter(id => (appState.progress[id] || 0) < 100).length;
    const completedCourses = appState.myCourses.filter(id => (appState.progress[id] || 0) >= 100).length;
    const totalMinutes = appState.myCourses.reduce((sum, id) => {
        const course = findCourseById(id);
        const progress = appState.progress[id] || 0;
        if (course) return sum + Math.round((progress / 100) * course.durationMinutes);
        return sum;
    }, 0);
    const totalHours = Math.round(totalMinutes / 60);
    const avgProgress = appState.myCourses.length > 0 ? Math.round(appState.myCourses.reduce((sum, id) => sum + (appState.progress[id] || 0), 0) / appState.myCourses.length) : 0;
    const stats = [
        { label: 'Kursus Aktif', value: activeCourses, icon: '📖' },
        { label: 'Kursus Selesai', value: completedCourses, icon: '✅' },
        { label: 'Jam Belajar', value: `${totalHours} jam`, icon: '⏱️' },
        { label: 'Progress Rata-rata', value: `${avgProgress}%`, icon: '📊' }
    ];
    container.innerHTML = stats.map(stat => `<div class="bg-white border border-border-light rounded-2xl p-4 sm:p-5"><div class="text-2xl mb-2">${stat.icon}</div><p class="text-2xl sm:text-3xl font-extrabold text-lumen-navy">${stat.value}</p><p class="text-xs sm:text-sm text-muted mt-1">${stat.label}</p></div>`).join('');
}

function renderStreakAndGoal() {
    document.getElementById('streak-display').textContent = `🔥 ${appState.learningStreak} hari berturut-turut`;
    document.getElementById('daily-goal-completed').textContent = appState.dailyGoal.completed;
    document.getElementById('daily-goal-target').textContent = appState.dailyGoal.target;
    const percentage = Math.min((appState.dailyGoal.completed / appState.dailyGoal.target) * 100, 100);
    const bar = document.getElementById('daily-goal-bar');
    bar.style.width = `${percentage}%`;
    if (percentage >= 100) bar.classList.add('complete'); else bar.classList.remove('complete');
}

function renderLearningPath() {
    const container = document.getElementById('learning-path-container');
    container.innerHTML = learningPaths.map(path => {
        const pathCourses = path.courseIds.map(id => findCourseById(id)).filter(Boolean);
        const completedCount = pathCourses.filter(c => (appState.progress[c.id] || 0) >= 100).length;
        return `
            <div class="bg-white border border-border-light rounded-2xl p-5 sm:p-6 mb-4">
                <div class="flex items-center gap-3 mb-4">
                    <span class="text-2xl">${path.icon}</span>
                    <div><h3 class="font-bold text-lumen-navy text-lg">${path.title}</h3><p class="text-sm text-muted">${path.description}</p></div>
                    <span class="ml-auto text-sm font-bold text-lumen-blue">${completedCount} / ${pathCourses.length} selesai</span>
                </div>
                <div class="space-y-2">
                    ${pathCourses.map((course, index) => {
                        const progress = appState.progress[course.id] || 0;
                        const isComplete = progress >= 100;
                        const isEnrolled = appState.myCourses.includes(course.id);
                        return `
                            <button class="w-full flex items-center gap-3 p-3 rounded-xl border ${isComplete ? 'border-success bg-success/5' : isEnrolled ? 'border-lumen-blue bg-soft-blue' : 'border-border-light bg-white'} hover:opacity-80 transition-all text-left" data-course-id="${course.id}" data-path-course="true">
                                <span class="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${isComplete ? 'bg-success' : 'bg-lumen-navy'}">${index + 1}</span>
                                <div class="flex-1 min-w-0"><p class="font-semibold text-sm text-lumen-navy truncate">${course.title}</p><div class="w-full h-1.5 bg-border-light rounded-full mt-1 overflow-hidden"><div class="h-full bg-lumen-blue rounded-full" style="width: ${progress}%;"></div></div></div>
                                <span class="text-xs font-bold ${isComplete ? 'text-success' : 'text-muted'} flex-shrink-0">${isComplete ? '✓ Selesai' : `${progress}%`}</span>
                            </button>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');
    container.querySelectorAll('[data-path-course="true"]').forEach(btn => {
        btn.addEventListener('click', () => openCourseDetail(btn.dataset.courseId));
    });
}

function renderRecommendations() {
    const container = document.getElementById('recommendations-container');
    let recommendations = [];
    if (appState.myCourses.length > 0) {
        const enrolledCategories = appState.myCourses.map(id => findCourseById(id)?.category).filter(Boolean);
        const uniqueCategories = [...new Set(enrolledCategories)];
        recommendations = courses.filter(c => uniqueCategories.includes(c.category) && !appState.myCourses.includes(c.id));
    }
    if (recommendations.length < 3) {
        const savedCategories = appState.savedCourses.map(id => findCourseById(id)?.category).filter(Boolean);
        const uniqueSavedCategories = [...new Set(savedCategories)];
        const fromSaved = courses.filter(c => uniqueSavedCategories.includes(c.category) && !appState.myCourses.includes(c.id));
        recommendations = [...recommendations, ...fromSaved].filter((c, i, arr) => arr.indexOf(c) === i);
    }
    if (recommendations.length < 3) {
        const popular = courses.filter(c => !appState.myCourses.includes(c.id) && c.rating >= 4.7).sort((a, b) => b.students - a.students);
        recommendations = [...recommendations, ...popular].filter((c, i, arr) => arr.indexOf(c) === i);
    }
    recommendations = recommendations.slice(0, 4);
    if (recommendations.length === 0) recommendations = courses.slice(0, 4);
    container.innerHTML = recommendations.map(course => createCourseCardHTML(course)).join('');
    container.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.bookmark-btn')) return;
            openCourseDetail(card.dataset.courseId);
        });
    });
    container.querySelectorAll('.bookmark-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleBookmark(btn.dataset.courseId);
        });
    });
}

function renderAchievements() {
    const container = document.getElementById('achievements-container');
    const totalCompletedLessons = Object.values(appState.completedLessons).reduce((sum, arr) => sum + arr.length, 0);
    const totalCompletedCourses = appState.myCourses.filter(id => (appState.progress[id] || 0) >= 100).length;
    const streak = appState.learningStreak;
    const achievements = [
        { title: 'First Lesson', icon: '🎯', unlocked: totalCompletedLessons >= 1, description: 'Selesaikan lesson pertamamu' },
        { title: '3 Lessons Complete', icon: '📚', unlocked: totalCompletedLessons >= 3, description: 'Selesaikan 3 lesson' },
        { title: '5 Day Streak', icon: '🔥', unlocked: streak >= 5, description: 'Belajar 5 hari berturut-turut' },
        { title: 'First Course Complete', icon: '🏆', unlocked: totalCompletedCourses >= 1, description: 'Selesaikan kursus pertamamu' }
    ];
    container.innerHTML = achievements.map(a => `
        <div class="achievement-badge ${a.unlocked ? 'unlocked' : 'locked'}">
            <span class="achievement-icon">${a.icon}</span>
            <div><p class="font-semibold text-sm ${a.unlocked ? 'text-lumen-navy' : 'text-muted'}">${a.title}</p><p class="text-xs ${a.unlocked ? 'text-lumen-blue' : 'text-muted'}">${a.description}</p></div>
            ${a.unlocked ? '<span class="ml-auto text-success text-lg">✓</span>' : ''}
        </div>
    `).join('');
}

function renderInstructors() {
    const container = document.getElementById('instructors-container');
    container.innerHTML = instructors.map(instructor => {
        const courseCount = courses.filter(c => c.instructorId === instructor.id).length;
        return `
            <div class="bg-white border border-border-light rounded-2xl p-5 text-center cursor-pointer hover:border-lumen-blue transition-all" data-instructor-id="${instructor.id}" role="button" tabindex="0" aria-label="Lihat detail ${instructor.name}">
                <img src="${instructor.image}" alt="${escapeHTML(instructor.name)}" loading="lazy" class="w-20 h-20 rounded-full mx-auto mb-3 object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="hidden w-20 h-20 rounded-full mx-auto mb-3 items-center justify-center bg-lumen-navy text-white font-bold text-xl" style="display:none;">${instructor.name.charAt(0)}</div>
                <h3 class="font-bold text-lumen-navy">${escapeHTML(instructor.name)}</h3>
                <p class="text-sm text-lumen-blue font-medium">${escapeHTML(instructor.role)}</p>
                <p class="text-xs text-muted mt-1">${courseCount} kursus</p>
            </div>
        `;
    }).join('');
    container.querySelectorAll('[data-instructor-id]').forEach(el => {
        el.addEventListener('click', () => openInstructorDetail(el.dataset.instructorId));
        el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openInstructorDetail(el.dataset.instructorId); }
        });
    });
}

function renderTestimonials() {
    const container = document.getElementById('testimonials-container');
    container.innerHTML = testimonials.map(t => `
        <div class="bg-cream rounded-2xl p-5 min-w-[280px] sm:min-w-[300px] md:min-w-0 flex-shrink-0">
            <div class="flex items-center gap-1 mb-2">
                ${Array(5).fill(0).map((_, i) => `<svg class="w-4 h-4 ${i < t.rating ? 'text-warm-yellow' : 'text-border-light'}" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>`).join('')}
            </div>
            <p class="text-sm text-lumen-navy leading-relaxed">"${escapeHTML(t.comment)}"</p>
            <div class="mt-3"><p class="font-semibold text-sm text-lumen-navy">${escapeHTML(t.name)}</p><p class="text-xs text-muted">${escapeHTML(t.role)}</p></div>
        </div>
    `).join('');
}

function renderFAQ() {
    const container = document.getElementById('faq-container');
    container.innerHTML = faqs.map((faq, index) => `
        <div class="accordion-item">
            <button class="accordion-header" aria-expanded="false" aria-controls="faq-content-${index}" data-accordion-trigger>
                <span class="font-medium text-sm sm:text-base text-lumen-navy">${escapeHTML(faq.question)}</span>
                <svg class="accordion-icon w-5 h-5 text-muted flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div class="accordion-content" id="faq-content-${index}">
                <div class="px-4 pb-4 text-sm text-muted leading-relaxed">${escapeHTML(faq.answer)}</div>
            </div>
        </div>
    `).join('');
    container.querySelectorAll('[data-accordion-trigger]').forEach(trigger => {
        trigger.addEventListener('click', () => {
            const contentId = trigger.getAttribute('aria-controls');
            const content = document.getElementById(contentId);
            const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
            container.querySelectorAll('[data-accordion-trigger]').forEach(t => {
                t.setAttribute('aria-expanded', 'false');
                document.getElementById(t.getAttribute('aria-controls')).classList.remove('open');
                document.getElementById(t.getAttribute('aria-controls')).style.maxHeight = '0';
            });
            if (!isExpanded) {
                trigger.setAttribute('aria-expanded', 'true');
                content.classList.add('open');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
}

function renderSavedCourses() {
    const container = document.getElementById('saved-courses-container');
    const savedCourses = appState.savedCourses.map(id => findCourseById(id)).filter(Boolean);
    if (savedCourses.length === 0) {
        container.innerHTML = `<div class="col-span-full empty-state"><div class="empty-state-icon">🔖</div><p class="empty-state-title">Belum ada kursus yang disimpan.</p><p class="empty-state-subtitle">Simpan kursus yang menarik untuk dipelajari nanti.</p></div>`;
        return;
    }
    container.innerHTML = savedCourses.map(course => createCourseCardHTML(course)).join('');
    container.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.bookmark-btn')) return;
            openCourseDetail(card.dataset.courseId);
        });
    });
    container.querySelectorAll('.bookmark-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleBookmark(btn.dataset.courseId);
        });
    });
}

function renderNotifications() {
    const container = document.getElementById('notification-content');
    const badge = document.getElementById('notification-badge');
    if (appState.notifications.length === 0) {
        container.innerHTML = `<div class="text-center py-12 text-muted"><div class="text-3xl mb-2">🔔</div><p class="text-sm">Belum ada notifikasi.</p></div>`;
        badge.classList.remove('visible');
        return;
    }
    badge.textContent = appState.notifications.length;
    badge.classList.add('visible');
    container.innerHTML = appState.notifications.map((notif, index) => `
        <div class="flex items-start gap-3 p-3 rounded-xl bg-cream mb-2">
            <span class="text-lg flex-shrink-0">${notif.icon || '📢'}</span>
            <div class="flex-1"><p class="text-sm text-lumen-navy">${escapeHTML(notif.message)}</p><p class="text-xs text-muted mt-1">${escapeHTML(notif.date || '')}</p></div>
        </div>
    `).join('');
}

function renderProfile() {
    const container = document.getElementById('profile-content');
    const totalCompletedLessons = Object.values(appState.completedLessons).reduce((sum, arr) => sum + arr.length, 0);
    const totalCompletedCourses = appState.myCourses.filter(id => (appState.progress[id] || 0) >= 100).length;
    const activeCourses = appState.myCourses.filter(id => (appState.progress[id] || 0) < 100).length;
    container.innerHTML = `
        <div class="space-y-4">
            <div class="flex items-center justify-between p-4 bg-cream rounded-xl"><span class="text-sm text-muted">Kursus Selesai</span><span class="font-bold text-lumen-navy text-lg">${totalCompletedCourses}</span></div>
            <div class="flex items-center justify-between p-4 bg-cream rounded-xl"><span class="text-sm text-muted">Kursus Aktif</span><span class="font-bold text-lumen-navy text-lg">${activeCourses}</span></div>
            <div class="flex items-center justify-between p-4 bg-cream rounded-xl"><span class="text-sm text-muted">Lesson Selesai</span><span class="font-bold text-lumen-navy text-lg">${totalCompletedLessons}</span></div>
            <div class="flex items-center justify-between p-4 bg-cream rounded-xl"><span class="text-sm text-muted">Learning Streak</span><span class="font-bold text-lumen-navy text-lg">🔥 ${appState.learningStreak} hari</span></div>
            <div class="flex items-center justify-between p-4 bg-cream rounded-xl"><span class="text-sm text-muted">Level</span><span class="font-bold text-lumen-navy text-lg">${appState.currentUser.level}</span></div>
            <button id="reset-app-btn" class="w-full py-3 text-sm font-semibold text-error border border-error rounded-xl hover:bg-error/5 transition-all">Reset Data Aplikasi</button>
        </div>
    `;
    const resetBtn = document.getElementById('reset-app-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm('Apakah kamu yakin ingin mereset semua data? Progress dan bookmark akan dihapus.')) {
                localStorage.removeItem(STORAGE_KEY);
                resetState();
                closeProfileDrawer();
                renderAll();
            }
        });
    }
}

function renderCart() {
    const container = document.getElementById('cart-content');
    const cartCourses = appState.cart.map(id => findCourseById(id)).filter(Boolean);
    if (cartCourses.length === 0) {
        container.innerHTML = `<div class="empty-state"><div class="empty-state-icon">🛒</div><p class="empty-state-title">Enrollment kosong.</p><p class="empty-state-subtitle">Tambahkan kursus untuk mulai mendaftar.</p></div>`;
        return;
    }
    const total = cartCourses.reduce((sum, c) => sum + c.price, 0);
    container.innerHTML = `
        <div class="space-y-3">
            ${cartCourses.map(course => `
                <div class="flex items-center gap-3 p-3 bg-cream rounded-xl">
                    <img src="${course.image}" alt="${course.title}" class="w-16 h-12 object-cover rounded-lg" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="hidden w-16 h-12 rounded-lg items-center justify-center bg-lumen-navy text-white font-bold" style="display:none;">${course.title.charAt(0)}</div>
                    <div class="flex-1 min-w-0"><p class="text-sm font-semibold text-lumen-navy truncate">${course.title}</p><p class="text-xs text-muted">${formatPrice(course.price)}</p></div>
                    <button class="remove-from-cart w-8 h-8 flex items-center justify-center rounded-full hover:bg-white transition-colors text-error" data-course-id="${course.id}" aria-label="Hapus dari enrollment"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></button>
                </div>
            `).join('')}
            <div class="border-t border-border-light pt-3 mt-4"><div class="flex justify-between items-center"><span class="font-semibold text-lumen-navy">Subtotal</span><span class="font-bold text-lumen-navy text-lg">${formatPrice(total)}</span></div></div>
            <div class="bg-soft-blue p-4 rounded-xl mt-3">
                <p class="text-sm font-semibold text-lumen-blue mb-2">Simulasi Checkout</p>
                <input type="text" id="checkout-name" placeholder="Nama" class="w-full h-10 px-3 rounded-lg border border-border-light bg-white text-sm mb-2 focus:outline-none focus:ring-2 focus:ring-lumen-blue">
                <input type="email" id="checkout-email" placeholder="Email" class="w-full h-10 px-3 rounded-lg border border-border-light bg-white text-sm mb-2 focus:outline-none focus:ring-2 focus:ring-lumen-blue">
                <select id="checkout-method" class="w-full h-10 px-3 rounded-lg border border-border-light bg-white text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-lumen-blue">
                    <option value="bank">Bank Transfer</option>
                    <option value="ewallet">E-Wallet</option>
                    <option value="simulation">Simulasi</option>
                </select>
                <p class="text-xs text-muted mb-3">Ini adalah simulasi checkout untuk demo platform.</p>
                <button id="checkout-submit" class="w-full py-3 bg-lumen-blue text-white text-sm font-semibold rounded-xl hover:bg-lumen-navy transition-all">Selesaikan Enrollment</button>
            </div>
        </div>
    `;
    container.querySelectorAll('.remove-from-cart').forEach(btn => {
        btn.addEventListener('click', () => removeFromCart(Number(btn.dataset.courseId)));
    });
    const checkoutBtn = document.getElementById('checkout-submit');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            const name = document.getElementById('checkout-name').value.trim() || 'Student';
            const email = document.getElementById('checkout-email').value.trim() || 'student@lumen.id';
            completeEnrollment(name, email);
        });
    }
}

/* ==================== 6. MODAL SYSTEM ==================== */

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    void modal.offsetWidth;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        setTimeout(() => modal.classList.add('hidden'), 300);
    });
    document.body.style.overflow = '';
}

/* ==================== 7. COURSE DETAIL ==================== */

function openCourseDetail(courseId) {
    const course = findCourseById(courseId);
    if (!course) { alert('Kursus tidak ditemukan.'); return; }
    appState.currentCourseId = courseId;
    const container = document.getElementById('course-detail-content');
    document.getElementById('modal-course-title').textContent = course.title;
    const instructor = findInstructorById(course.instructorId);
    const isSaved = appState.savedCourses.includes(course.id);
    const isEnrolled = appState.myCourses.includes(course.id);
    const progress = appState.progress[course.id] || 0;
    const isFree = course.price === 0;
    container.innerHTML = `
        <div class="space-y-4">
            <img src="${course.image}" alt="${escapeHTML(course.title)}" class="w-full h-48 sm:h-64 object-cover rounded-xl" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="hidden w-full h-48 sm:h-64 rounded-xl items-center justify-center bg-gradient-to-br from-lumen-navy to-lumen-blue text-white font-bold text-3xl" style="display:none;">${course.title.charAt(0)}</div>
            <div><span class="text-xs font-semibold text-lumen-blue uppercase tracking-wide">${escapeHTML(course.category)}</span><h3 class="text-xl sm:text-2xl font-extrabold text-lumen-navy mt-1">${escapeHTML(course.title)}</h3>${instructor ? `<p class="text-sm text-muted mt-1">Oleh: ${escapeHTML(instructor.name)}</p>` : ''}</div>
            <div class="flex flex-wrap gap-3 text-sm text-muted">
                <span class="flex items-center gap-1"><svg class="w-4 h-4 text-warm-yellow" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>${course.rating.toFixed(1)}</span>
                <span>${course.students.toLocaleString('id-ID')} siswa</span><span>•</span><span>${course.duration}</span><span>•</span><span>${course.lessons} lesson</span><span>•</span><span>${course.level}</span>
            </div>
            <p class="text-sm sm:text-base text-muted leading-relaxed">${escapeHTML(course.description)}</p>
            <div><h4 class="font-bold text-lumen-navy mb-2">Yang akan kamu pelajari:</h4><ul class="space-y-1.5">${course.outcomes.map(o => `<li class="flex items-start gap-2 text-sm text-muted"><span class="text-success mt-0.5 flex-shrink-0">✓</span>${escapeHTML(o)}</li>`).join('')}</ul></div>
            <div><h4 class="font-bold text-lumen-navy mb-2">Kurikulum:</h4>${course.modules.map((module, mIdx) => `
                <div class="accordion-item mb-2">
                    <button class="accordion-header" aria-expanded="${mIdx === 0 ? 'true' : 'false'}" aria-controls="module-${course.id}-${mIdx}">
                        <span class="text-sm font-semibold text-lumen-navy">${escapeHTML(module.title)}</span>
                        <svg class="accordion-icon w-4 h-4 text-muted flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                    </button>
                    <div class="accordion-content ${mIdx === 0 ? 'open' : ''}" id="module-${course.id}-${mIdx}" style="${mIdx === 0 ? `max-height: ${module.lessons.length * 50}px` : 'max-height: 0;'}">
                        <div class="px-4 pb-3">${module.lessons.map((lesson, lIdx) => `<div class="flex items-center gap-2 py-1.5 text-sm text-muted"><span class="w-5 h-5 rounded-full bg-cream flex items-center justify-center text-[10px] flex-shrink-0">${lIdx + 1}</span>${escapeHTML(lesson.title)}</div>`).join('')}</div>
                    </div>
                </div>
            `).join('')}</div>
            <div class="flex flex-wrap items-center gap-3 pt-2">
                <span class="text-2xl font-extrabold ${isFree ? 'text-success' : 'text-lumen-navy'}">${formatPrice(course.price)}</span>
                <button class="bookmark-btn ${isSaved ? 'saved' : ''} ml-auto" data-course-id="${course.id}" aria-label="${isSaved ? 'Hapus dari tersimpan' : 'Simpan kursus'}" aria-pressed="${isSaved}">
                    <svg class="w-5 h-5" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
                </button>
            </div>
            <div class="flex flex-wrap gap-3">
                ${isEnrolled ? `<button id="continue-from-detail" class="flex-1 py-3.5 bg-lumen-blue text-white font-semibold rounded-full hover:bg-lumen-navy transition-all text-sm sm:text-base">${progress >= 100 ? 'Lihat Sertifikat' : 'Lanjutkan Kursus'}</button>` : (isFree ? `<button id="start-free-course" class="flex-1 py-3.5 bg-success text-white font-semibold rounded-full hover:opacity-80 transition-all text-sm sm:text-base">Mulai Kursus (Gratis)</button>` : `<button id="add-to-cart-btn" class="flex-1 py-3.5 bg-lumen-blue text-white font-semibold rounded-full hover:bg-lumen-navy transition-all text-sm sm:text-base">Tambah ke Enrollment</button>`)}
            </div>
        </div>
    `;
    // Bind accordions
    container.querySelectorAll('.accordion-header').forEach(trigger => {
        trigger.addEventListener('click', () => {
            const contentId = trigger.getAttribute('aria-controls');
            const content = document.getElementById(contentId);
            const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
            trigger.setAttribute('aria-expanded', String(!isExpanded));
            if (!isExpanded) { content.classList.add('open'); content.style.maxHeight = content.scrollHeight + 'px'; }
            else { content.classList.remove('open'); content.style.maxHeight = '0'; }
        });
    });
    // Bind bookmark
    const bookmarkBtn = container.querySelector('.bookmark-btn');
    if (bookmarkBtn) {
        bookmarkBtn.addEventListener('click', () => {
            toggleBookmark(bookmarkBtn.dataset.courseId);
            const isSaved = appState.savedCourses.includes(Number(bookmarkBtn.dataset.courseId));
            bookmarkBtn.classList.toggle('saved', isSaved);
            bookmarkBtn.querySelector('svg').setAttribute('fill', isSaved ? 'currentColor' : 'none');
            bookmarkBtn.setAttribute('aria-pressed', String(isSaved));
        });
    }
    // Bind action buttons
    const continueBtn = document.getElementById('continue-from-detail');
    if (continueBtn) continueBtn.addEventListener('click', () => { closeModal('course-detail-modal'); if (progress >= 100) openCertificate(courseId); else openLessonPlayer(courseId); });
    const startFreeBtn = document.getElementById('start-free-course');
    if (startFreeBtn) startFreeBtn.addEventListener('click', () => { enrollInCourse(courseId); closeModal('course-detail-modal'); openLessonPlayer(courseId); });
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    if (addToCartBtn) addToCartBtn.addEventListener('click', () => { addToCart(courseId); closeModal('course-detail-modal'); openModal('cart-modal'); renderCart(); });
    openModal('course-detail-modal');
}

/* ==================== 8. ENROLLMENT & CART ==================== */

function addToCart(courseId) {
    if (!appState.cart.includes(courseId)) {
        appState.cart.push(courseId);
        addNotification('📚', 'Kursus ditambahkan ke enrollment.');
        saveState();
        renderCart();
    }
}

function removeFromCart(courseId) {
    appState.cart = appState.cart.filter(id => id !== courseId);
    saveState();
    renderCart();
}

function enrollInCourse(courseId) {
    if (!appState.myCourses.includes(courseId)) {
        appState.myCourses.push(courseId);
        appState.progress[courseId] = 0;
        if (!appState.completedLessons[courseId]) appState.completedLessons[courseId] = [];
        updateStreak();
        addNotification('🎉', 'Selamat! Kamu terdaftar di kursus baru.');
        saveState();
        renderAll();
    }
}

function completeEnrollment(name, email) {
    const cartCourses = appState.cart.map(id => findCourseById(id)).filter(Boolean);
    cartCourses.forEach(course => {
        if (!appState.myCourses.includes(course.id)) {
            appState.myCourses.push(course.id);
            appState.progress[course.id] = 0;
            if (!appState.completedLessons[course.id]) appState.completedLessons[course.id] = [];
        }
    });
    appState.cart = [];
    updateStreak();
    addNotification('✅', 'Enrollment berhasil! Selamat belajar.');
    saveState();
    closeModal('cart-modal');
    renderAll();
    alert('Enrollment berhasil! Kursus telah ditambahkan ke My Learning.');
}

/* ==================== 9. LESSON PLAYER ==================== */

function openLessonPlayer(courseId) {
    const course = findCourseById(courseId);
    if (!course) return;
    appState.currentCourseId = courseId;
    const allLessons = getAllLessons(course);
    const completed = getCompletedLessonsForCourse(courseId);
    const currentIndex = completed.length < allLessons.length ? completed.length : allLessons.length - 1;
    appState.currentLessonId = currentIndex;
    renderLessonContent(courseId, currentIndex);
    openModal('lesson-modal');
}

function renderLessonContent(courseId, lessonIndex) {
    const course = findCourseById(courseId);
    if (!course) return;
    const allLessons = getAllLessons(course);
    if (lessonIndex < 0 || lessonIndex >= allLessons.length) lessonIndex = Math.max(0, Math.min(lessonIndex, allLessons.length - 1));
    const lesson = allLessons[lessonIndex];
    const isCompleted = isLessonCompleted(courseId, lessonIndex);
    const progress = calculateProgress(courseId);
    document.getElementById('modal-lesson-title').textContent = course.title;
    const container = document.getElementById('lesson-content');
    container.innerHTML = `
        <div class="space-y-4">
            <div class="flex items-center gap-3"><span class="text-xs font-semibold text-lumen-blue uppercase tracking-wide">${escapeHTML(course.category)}</span><span class="text-xs text-muted">•</span><span class="text-xs text-muted">Lesson ${lessonIndex + 1} dari ${allLessons.length}</span></div>
            <div class="flex items-center gap-3"><div class="flex-1 progress-bar-bg"><div class="progress-bar-fill ${progress >= 100 ? 'complete' : ''}" style="width: ${progress}%;"></div></div><span class="text-sm font-bold text-lumen-navy">${progress}%</span></div>
            <h3 class="text-lg sm:text-xl font-bold text-lumen-navy">${escapeHTML(lesson.moduleTitle)}</h3>
            <h4 class="text-base sm:text-lg font-semibold text-lumen-navy">${escapeHTML(lesson.title)}</h4>
            <div class="bg-cream rounded-xl p-4 sm:p-6"><p class="text-sm sm:text-base text-muted leading-relaxed">${escapeHTML(lesson.content)}</p></div>
            <div class="flex flex-wrap gap-3 pt-2">
                <button id="prev-lesson-btn" class="px-4 py-2.5 bg-white border border-border-light text-lumen-navy text-sm font-semibold rounded-full hover:bg-cream transition-all touch-target ${lessonIndex === 0 ? 'opacity-50 pointer-events-none' : ''}">← Sebelumnya</button>
                <button id="complete-lesson-btn" class="flex-1 py-2.5 ${isCompleted ? 'bg-success text-white' : 'bg-lumen-blue text-white'} text-sm font-semibold rounded-full hover:opacity-80 transition-all touch-target">${isCompleted ? '✓ Selesai' : '✓ Tandai Selesai'}</button>
                <button id="next-lesson-btn" class="px-4 py-2.5 bg-white border border-border-light text-lumen-navy text-sm font-semibold rounded-full hover:bg-cream transition-all touch-target ${lessonIndex >= allLessons.length - 1 ? 'opacity-50 pointer-events-none' : ''}">Berikutnya →</button>
            </div>
            ${progress >= 100 && allLessons.every((_, i) => isLessonCompleted(courseId, i)) ? `<div class="bg-success/10 border border-success rounded-xl p-4 text-center"><p class="font-bold text-success">🎉 Course Completed!</p><button id="view-certificate-btn" class="mt-2 px-4 py-2 bg-success text-white text-sm font-semibold rounded-full hover:opacity-80 transition-all">Lihat Sertifikat</button></div>` : ''}
        </div>
    `;
    const prevBtn = document.getElementById('prev-lesson-btn');
    if (prevBtn && lessonIndex > 0) prevBtn.addEventListener('click', () => renderLessonContent(courseId, lessonIndex - 1));
    const nextBtn = document.getElementById('next-lesson-btn');
    if (nextBtn && lessonIndex < allLessons.length - 1) nextBtn.addEventListener('click', () => renderLessonContent(courseId, lessonIndex + 1));
    const completeBtn = document.getElementById('complete-lesson-btn');
    if (completeBtn) completeBtn.addEventListener('click', () => { completeLesson(courseId, lessonIndex); renderLessonContent(courseId, lessonIndex); renderDashboard(); renderMyCourses(); renderAchievements(); renderStreakAndGoal(); });
    const certBtn = document.getElementById('view-certificate-btn');
    if (certBtn) certBtn.addEventListener('click', () => { closeModal('lesson-modal'); openCertificate(courseId); });
}

function completeLesson(courseId, lessonIndex) {
    if (!appState.completedLessons[courseId]) appState.completedLessons[courseId] = [];
    if (!appState.completedLessons[courseId].includes(lessonIndex)) {
        appState.completedLessons[courseId].push(lessonIndex);
        appState.dailyGoal.completed = Math.min(appState.dailyGoal.completed + 10, appState.dailyGoal.target * 2);
        updateStreak();
        const newProgress = calculateProgress(courseId);
        appState.progress[courseId] = newProgress;
        if (newProgress === 100) addNotification('🏆', `Selamat! Kamu menyelesaikan kursus ${findCourseById(courseId)?.title}!`);
        else if (newProgress >= 50 && newProgress < 55) addNotification('📈', `Progress kursusmu mencapai ${newProgress}%!`);
        saveState();
    }
}

/* ==================== 10. CERTIFICATE ==================== */

function openCertificate(courseId) {
    const course = findCourseById(courseId);
    if (!course) return;
    document.getElementById('certificate-course').textContent = course.title;
    document.getElementById('certificate-date').textContent = `Tanggal selesai: ${getCurrentDateString()}`;
    openModal('certificate-modal');
}

/* ==================== 11. BOOKMARK ==================== */

function toggleBookmark(courseId) {
    const id = Number(courseId);
    if (appState.savedCourses.includes(id)) {
        appState.savedCourses = appState.savedCourses.filter(sid => sid !== id);
        addNotification('🔖', 'Kursus dihapus dari tersimpan.');
    } else {
        appState.savedCourses.push(id);
        addNotification('🔖', 'Kursus disimpan.');
    }
    saveState();
    renderCourses();
    renderSavedCourses();
    renderRecommendations();
}

/* ==================== 12. NOTIFICATIONS ==================== */

function addNotification(icon, message) {
    appState.notifications.unshift({ icon, message, date: getCurrentDateString() });
    appState.notifications = appState.notifications.slice(0, 10);
    saveState();
    renderNotifications();
}

/* ==================== 13. INSTRUCTOR DETAIL ==================== */

function openInstructorDetail(instructorId) {
    const instructor = findInstructorById(instructorId);
    if (!instructor) return;
    const container = document.getElementById('instructor-modal-content');
    document.getElementById('instructor-modal-title').textContent = instructor.name;
    const instructorCourses = courses.filter(c => c.instructorId === instructor.id);
    container.innerHTML = `
        <div class="text-center">
            <img src="${instructor.image}" alt="${escapeHTML(instructor.name)}" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="hidden w-24 h-24 rounded-full mx-auto mb-4 items-center justify-center bg-lumen-navy text-white font-bold text-2xl" style="display:none;">${instructor.name.charAt(0)}</div>
            <h4 class="text-lg font-bold text-lumen-navy">${escapeHTML(instructor.name)}</h4>
            <p class="text-sm text-lumen-blue font-medium">${escapeHTML(instructor.role)}</p>
            <p class="text-sm text-muted mt-3 leading-relaxed">${escapeHTML(instructor.bio)}</p>
            <p class="text-xs text-muted mt-3">${instructorCourses.length} kursus</p>
        </div>
        ${instructorCourses.length > 0 ? `<div class="mt-4 space-y-2">${instructorCourses.map(course => `<button class="w-full text-left p-3 bg-cream rounded-xl hover:opacity-80 transition-all" data-course-id="${course.id}" data-instructor-course="true"><p class="text-sm font-semibold text-lumen-navy">${escapeHTML(course.title)}</p><p class="text-xs text-muted">${course.duration} • ${course.lessons} lesson</p></button>`).join('')}</div>` : ''}
    `;
    container.querySelectorAll('[data-instructor-course="true"]').forEach(btn => {
        btn.addEventListener('click', () => { closeModal('instructor-modal'); setTimeout(() => openCourseDetail(btn.dataset.courseId), 300); });
    });
    openModal('instructor-modal');
}

/* ==================== 14. EVENT BINDING ==================== */

function bindGlobalEvents() {
    const mainSearch = document.getElementById('main-search');
    mainSearch.addEventListener('input', () => { appState.searchQuery = mainSearch.value; applyFiltersAndRender(); });
    const mobileSearch = document.getElementById('mobile-search-input');
    mobileSearch.addEventListener('input', () => { appState.searchQuery = mobileSearch.value; mainSearch.value = mobileSearch.value; applyFiltersAndRender(); });
    document.getElementById('search-toggle').addEventListener('click', () => {
        const bar = document.getElementById('mobile-search');
        bar.classList.toggle('hidden');
        if (!bar.classList.contains('hidden')) mobileSearch.focus();
    });
    document.getElementById('sort-select').addEventListener('change', (e) => { appState.sortBy = e.target.value; applyFiltersAndRender(); });
    document.getElementById('notification-toggle').addEventListener('click', () => { openModal('notification-drawer'); renderNotifications(); });
    document.getElementById('profile-toggle').addEventListener('click', () => { openModal('profile-drawer'); renderProfile(); });
    document.getElementById('bottom-nav-profile').addEventListener('click', () => { openModal('profile-drawer'); renderProfile(); });
    document.getElementById('hero-continue-btn').addEventListener('click', () => {
        if (appState.myCourses.length > 0) document.getElementById('kursus-saya').scrollIntoView({ behavior: 'smooth' });
        else document.getElementById('jelajahi').scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('daily-goal-btn').addEventListener('click', () => {
        if (appState.myCourses.length > 0) {
            const firstCourseId = appState.myCourses[0];
            const course = findCourseById(firstCourseId);
            if (course) {
                const progress = appState.progress[firstCourseId] || 0;
                if (progress >= 100) openCertificate(firstCourseId);
                else openLessonPlayer(firstCourseId);
            }
        } else document.getElementById('jelajahi').scrollIntoView({ behavior: 'smooth' });
    });
    document.querySelectorAll('.bottom-nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.bottom-nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const section = btn.dataset.section;
            if (section === 'saved-section') document.getElementById('saved-section').scrollIntoView({ behavior: 'smooth' });
            else {
                const el = document.getElementById(section);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal-overlay');
            if (modal) closeModal(modal.id);
        });
    });
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal(overlay.id);
        });
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeModals = document.querySelectorAll('.modal-overlay.active');
            activeModals.forEach(modal => closeModal(modal.id));
        }
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href').replace('#', '');
            const el = document.getElementById(target);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

/* ==================== 15. RENDER ALL ==================== */

function renderAll() {
    renderCategories();
    renderFilters();
    renderCourses();
    renderMyCourses();
    renderDashboard();
    renderStreakAndGoal();
    renderLearningPath();
    renderRecommendations();
    renderAchievements();
    renderInstructors();
    renderTestimonials();
    renderFAQ();
    renderSavedCourses();
    renderNotifications();
    renderProfile();
    renderCart();
    const mainSearch = document.getElementById('main-search');
    const mobileSearch = document.getElementById('mobile-search-input');
    if (mainSearch) mainSearch.value = appState.searchQuery || '';
    if (mobileSearch) mobileSearch.value = appState.searchQuery || '';
}

/* ==================== 16. VALIDATION & INIT ==================== */

function validateState() {
    if (!Array.isArray(appState.savedCourses)) appState.savedCourses = [];
    if (!Array.isArray(appState.myCourses)) appState.myCourses = [];
    if (!Array.isArray(appState.cart)) appState.cart = [];
    if (!Array.isArray(appState.notifications)) appState.notifications = [];
    if (typeof appState.progress !== 'object' || appState.progress === null) appState.progress = {};
    if (typeof appState.completedLessons !== 'object' || appState.completedLessons === null) appState.completedLessons = {};
    if (typeof appState.learningStreak !== 'number') appState.learningStreak = 0;
    if (typeof appState.dailyGoal !== 'object' || appState.dailyGoal === null) appState.dailyGoal = { target: 30, completed: 0 };
    if (typeof appState.dailyGoal.target !== 'number') appState.dailyGoal.target = 30;
    if (typeof appState.dailyGoal.completed !== 'number') appState.dailyGoal.completed = 0;
    appState.myCourses.forEach(courseId => { appState.progress[courseId] = calculateProgress(courseId); });
}

function setupInitialUI() {
    document.getElementById('search-results-info').textContent = `Menampilkan ${courses.length} kursus`;
    document.getElementById('mobile-search').classList.add('hidden');
}

function initApp() {
    loadState();
    validateState();
    bindGlobalEvents();
    renderAll();
    setupInitialUI();
}

document.addEventListener('DOMContentLoaded', initApp);