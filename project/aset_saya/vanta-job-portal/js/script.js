// js/script.js — VANTA Job Portal (Full)

// ========== DATA PERUSAHAAN ==========
const companiesData = [
    {
        id: 1,
        name: "Acme Digital",
        industry: "Technology",
        location: "Jakarta",
        description: "Acme Digital adalah perusahaan teknologi terdepan yang fokus pada pengembangan produk digital inovatif untuk berbagai industri.",
        openJobs: 4,
        size: "200-500 karyawan",
        logoColor: "#3867F2",
        logo: "assets/images/company-01.jpg",
    },
    {
        id: 2,
        name: "Northstar Labs",
        industry: "Data & AI",
        location: "Bandung",
        description: "Northstar Labs berfokus pada solusi data analytics dan kecerdasan buatan untuk membantu bisnis membuat keputusan lebih baik.",
        openJobs: 3,
        size: "50-200 karyawan",
        logoColor: "#7357E8",
        logo: "assets/images/company-02.jpg",
    },
    {
        id: 3,
        name: "Forma Studio",
        industry: "Design",
        location: "Jakarta",
        description: "Forma Studio adalah studio desain kreatif yang berdedikasi menciptakan pengalaman digital yang indah dan fungsional.",
        openJobs: 4,
        size: "20-50 karyawan",
        logoColor: "#36A269",
        logo: "assets/images/company-03.jpg",
    },
    {
        id: 4,
        name: "Nexa Commerce",
        industry: "E-Commerce",
        location: "Surabaya",
        description: "Nexa Commerce adalah platform e-commerce berkembang yang membantu brand lokal menjangkau pasar lebih luas.",
        openJobs: 4,
        size: "500+ karyawan",
        logoColor: "#D97706",
        logo: "assets/images/company-04.jpg",
    },
    {
        id: 5,
        name: "Orbit Systems",
        industry: "Software",
        location: "Remote",
        description: "Orbit Systems membangun software enterprise yang membantu perusahaan mengotomatiskan operasional dan meningkatkan produktivitas.",
        openJobs: 4,
        size: "100-200 karyawan",
        logoColor: "#7357E8",
        logo: "assets/images/company-05.jpg",
    },
    {
        id: 6,
        name: "Morrow Creative",
        industry: "Creative Agency",
        location: "Bali",
        description: "Morrow Creative adalah agency kreatif yang membantu brand menceritakan kisah mereka melalui konten, desain, dan strategi digital.",
        openJobs: 3,
        size: "10-50 karyawan",
        logoColor: "#D95C5C",
        logo: "assets/images/company-06.jpg",
    },
];

// ========== DATA PEKERJAAN ==========
const jobsData = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "Acme Digital",
        location: "Jakarta",
        salary: "Rp8–12 juta",
        salaryMin: 8,
        salaryMax: 12,
        type: "Full-time",
        workplace: "Hybrid",
        experience: "Junior",
        category: "Technology",
        description: "Kami mencari Frontend Developer yang passionate untuk membangun antarmuka web yang modern dan responsif menggunakan React dan Tailwind CSS.",
        responsibilities: [
            "Mengembangkan fitur frontend dengan HTML, CSS, dan JavaScript",
            "Mengoptimalkan performa web dan UX",
            "Berkolaborasi dengan tim desain dan backend",
            "Menulis kode yang bersih dan terdokumentasi",
        ],
        requirements: [
            "Menguasai HTML, CSS, JavaScript",
            "Pengalaman dengan React atau framework sejenis",
            "Memahami prinsip responsive design",
            "Portofolio yang menunjukkan kemampuan",
        ],
        skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
        posted: "2 hari lalu",
        postedDays: 2,
        logo: "assets/images/company-01.jpg",
        logoColor: "#3867F2",
    },
    {
        id: 2,
        title: "Backend Developer",
        company: "Acme Digital",
        location: "Jakarta",
        salary: "Rp10–15 juta",
        salaryMin: 10,
        salaryMax: 15,
        type: "Full-time",
        workplace: "Hybrid",
        experience: "Mid-level",
        category: "Technology",
        description: "Backend Developer yang akan membangun API dan layanan server yang robust dan scalable untuk platform kami.",
        responsibilities: [
            "Mendesain dan membangun REST API",
            "Mengelola database dan data pipeline",
            "Mengoptimalkan performa server",
            "Menjamin keamanan aplikasi",
        ],
        requirements: [
            "Pengalaman dengan Node.js, Python, atau Go",
            "Memahami SQL dan database relasional",
            "Pengalaman dengan cloud services",
            "Pemahaman tentang microservices",
        ],
        skills: ["Node.js", "Python", "SQL", "API", "Microservices"],
        posted: "1 minggu lalu",
        postedDays: 7,
        logo: "assets/images/company-01.jpg",
        logoColor: "#3867F2",
    },
    {
        id: 3,
        title: "UI/UX Designer",
        company: "Forma Studio",
        location: "Jakarta",
        salary: "Rp7–11 juta",
        salaryMin: 7,
        salaryMax: 11,
        type: "Full-time",
        workplace: "On-site",
        experience: "Junior",
        category: "Design",
        description: "Kami mencari UI/UX Designer yang memiliki mata tajam untuk detail dan passion menciptakan pengalaman pengguna yang luar biasa.",
        responsibilities: [
            "Mendesain antarmuka web dan mobile",
            "Membuat wireframe dan prototype",
            "Melakukan user research",
            "Berkolaborasi dengan developer",
        ],
        requirements: [
            "Menguasai Figma",
            "Portofolio desain yang kuat",
            "Memahami design system",
            "Kemampuan problem solving",
        ],
        skills: ["Figma", "UI Design", "UX Design", "Prototyping", "Design System"],
        posted: "3 hari lalu",
        postedDays: 3,
        logo: "assets/images/company-03.jpg",
        logoColor: "#36A269",
    },
    {
        id: 4,
        title: "Product Designer",
        company: "Forma Studio",
        location: "Jakarta",
        salary: "Rp9–14 juta",
        salaryMin: 9,
        salaryMax: 14,
        type: "Full-time",
        workplace: "On-site",
        experience: "Mid-level",
        category: "Design",
        description: "Product Designer yang akan memimpin desain dari konsep hingga implementasi untuk berbagai produk digital klien kami.",
        responsibilities: [
            "Memimpin proses desain end-to-end",
            "Membuat design system yang konsisten",
            "Melakukan usability testing",
            "Berkolaborasi dengan stakeholder",
        ],
        requirements: [
            "Pengalaman 2+ tahun di product design",
            "Portofolio yang menunjukkan problem solving",
            "Memahami HTML/CSS dasar",
            "Strong communication skills",
        ],
        skills: ["Figma", "Product Design", "Design System", "Usability Testing"],
        posted: "5 hari lalu",
        postedDays: 5,
        logo: "assets/images/company-03.jpg",
        logoColor: "#36A269",
    },
    {
        id: 5,
        title: "Product Manager",
        company: "Orbit Systems",
        location: "Remote",
        salary: "Rp12–18 juta",
        salaryMin: 12,
        salaryMax: 18,
        type: "Full-time",
        workplace: "Remote",
        experience: "Mid-level",
        category: "Product",
        description: "Product Manager yang akan memimpin pengembangan produk dari roadmap hingga peluncuran, bekerja dengan tim engineering dan design.",
        responsibilities: [
            "Membuat dan mengelola product roadmap",
            "Mengumpulkan dan menganalisis user feedback",
            "Mengkoordinasikan tim engineering dan design",
            "Mengukur product metrics dan iterasi",
        ],
        requirements: [
            "Pengalaman 2+ tahun sebagai PM",
            "Memahami agile methodology",
            "Data-driven mindset",
            "Excellent communication",
        ],
        skills: ["Product Strategy", "Agile", "Data Analysis", "Stakeholder Management"],
        posted: "1 hari lalu",
        postedDays: 1,
        logo: "assets/images/company-05.jpg",
        logoColor: "#7357E8",
    },
    {
        id: 6,
        title: "Data Analyst",
        company: "Northstar Labs",
        location: "Bandung",
        salary: "Rp8–12 juta",
        salaryMin: 8,
        salaryMax: 12,
        type: "Full-time",
        workplace: "Hybrid",
        experience: "Junior",
        category: "Data",
        description: "Data Analyst yang akan membantu klien kami mengubah data mentah menjadi insight yang actionable untuk pengambilan keputusan.",
        responsibilities: [
            "Mengumpulkan dan membersihkan data",
            "Membuat dashboard dan laporan",
            "Melakukan analisis statistik",
            "Menyajikan insight ke stakeholder",
        ],
        requirements: [
            "Menguasai SQL",
            "Pengalaman dengan Python atau R",
            "Memahami data visualization",
            "Analytical thinking",
        ],
        skills: ["SQL", "Python", "Data Visualization", "Statistics"],
        posted: "4 hari lalu",
        postedDays: 4,
        logo: "assets/images/company-02.jpg",
        logoColor: "#7357E8",
    },
    {
        id: 7,
        title: "Digital Marketing Specialist",
        company: "Nexa Commerce",
        location: "Surabaya",
        salary: "Rp6–10 juta",
        salaryMin: 6,
        salaryMax: 10,
        type: "Full-time",
        workplace: "Hybrid",
        experience: "Junior",
        category: "Marketing",
        description: "Kami mencari Digital Marketing Specialist untuk mengelola kampanye digital dan meningkatkan brand awareness Nexa Commerce.",
        responsibilities: [
            "Mengelola social media accounts",
            "Membuat konten marketing",
            "Mengoptimalkan SEO dan SEM",
            "Melacak performa kampanye",
        ],
        requirements: [
            "Pengalaman dengan digital marketing",
            "Memahami SEO/SEM",
            "Kreatif dan data-driven",
            "Familiar dengan Google Analytics",
        ],
        skills: ["SEO", "SEM", "Social Media", "Content Marketing"],
        posted: "2 minggu lalu",
        postedDays: 14,
        logo: "assets/images/company-04.jpg",
        logoColor: "#D97706",
    },
    {
        id: 8,
        title: "Content Strategist",
        company: "Morrow Creative",
        location: "Bali",
        salary: "Rp7–10 juta",
        salaryMin: 7,
        salaryMax: 10,
        type: "Full-time",
        workplace: "On-site",
        experience: "Junior",
        category: "Marketing",
        description: "Content Strategist yang akan merancang strategi konten kreatif untuk klien-klien Morrow Creative.",
        responsibilities: [
            "Membuat content strategy dan planning",
            "Menulis konten untuk berbagai platform",
            "Menganalisis performa konten",
            "Berkolaborasi dengan tim kreatif",
        ],
        requirements: [
            "Excellent writing skills",
            "Pengalaman di content creation",
            "Memahami content marketing",
            "Kreatif dan detail-oriented",
        ],
        skills: ["Content Strategy", "Copywriting", "Content Marketing"],
        posted: "6 hari lalu",
        postedDays: 6,
        logo: "assets/images/company-06.jpg",
        logoColor: "#D95C5C",
    },
    {
        id: 9,
        title: "Business Analyst",
        company: "Nexa Commerce",
        location: "Surabaya",
        salary: "Rp9–13 juta",
        salaryMin: 9,
        salaryMax: 13,
        type: "Full-time",
        workplace: "Hybrid",
        experience: "Mid-level",
        category: "Finance",
        description: "Business Analyst yang akan menganalisis proses bisnis dan mengidentifikasi peluang perbaikan untuk Nexa Commerce.",
        responsibilities: [
            "Menganalisis proses bisnis",
            "Membuat dokumentasi requirement",
            "Berkomunikasi dengan stakeholder",
            "Membantu pengambilan keputusan",
        ],
        requirements: [
            "Pengalaman di business analysis",
            "Strong analytical skills",
            "Memahami proses bisnis e-commerce",
            "Excellent communication",
        ],
        skills: ["Business Analysis", "Process Mapping", "Data Analysis"],
        posted: "1 minggu lalu",
        postedDays: 7,
        logo: "assets/images/company-04.jpg",
        logoColor: "#D97706",
    },
    {
        id: 10,
        title: "Graphic Designer",
        company: "Forma Studio",
        location: "Jakarta",
        salary: "Rp5–8 juta",
        salaryMin: 5,
        salaryMax: 8,
        type: "Full-time",
        workplace: "On-site",
        experience: "Intern",
        category: "Design",
        description: "Graphic Designer intern yang akan membantu tim menciptakan visual-visual menarik untuk berbagai proyek klien.",
        responsibilities: [
            "Membuat desain visual untuk media sosial",
            "Membantu produksi aset digital",
            "Berkolaborasi dengan tim desain",
            "Mengikuti brief dari klien",
        ],
        requirements: [
            "Menguasai Adobe Photoshop/Illustrator",
            "Portofolio desain",
            "Kreatif dan detail-oriented",
            "Mau belajar hal baru",
        ],
        skills: ["Photoshop", "Illustrator", "Visual Design"],
        posted: "3 hari lalu",
        postedDays: 3,
        logo: "assets/images/company-03.jpg",
        logoColor: "#36A269",
    },
    {
        id: 11,
        title: "Software Engineer",
        company: "Orbit Systems",
        location: "Remote",
        salary: "Rp11–16 juta",
        salaryMin: 11,
        salaryMax: 16,
        type: "Full-time",
        workplace: "Remote",
        experience: "Mid-level",
        category: "Technology",
        description: "Software Engineer yang akan membangun dan memelihara aplikasi enterprise untuk klien-klien Orbit Systems.",
        responsibilities: [
            "Mengembangkan aplikasi enterprise",
            "Melakukan code review",
            "Mengoptimalkan performa aplikasi",
            "Menulis unit test",
        ],
        requirements: [
            "Pengalaman dengan Java atau C#",
            "Memahami software architecture",
            "Pengalaman dengan agile",
            "Strong problem solving",
        ],
        skills: ["Java", "C#", "Agile", "Software Architecture"],
        posted: "5 hari lalu",
        postedDays: 5,
        logo: "assets/images/company-05.jpg",
        logoColor: "#7357E8",
    },
    {
        id: 12,
        title: "Finance Associate",
        company: "Nexa Commerce",
        location: "Surabaya",
        salary: "Rp7–10 juta",
        salaryMin: 7,
        salaryMax: 10,
        type: "Full-time",
        workplace: "On-site",
        experience: "Junior",
        category: "Finance",
        description: "Finance Associate yang akan membantu tim finance dalam pengelolaan keuangan dan pelaporan untuk Nexa Commerce.",
        responsibilities: [
            "Membuat laporan keuangan",
            "Mengelola invoice dan pembayaran",
            "Membantu budgeting",
            "Berkomunikasi dengan vendor",
        ],
        requirements: [
            "Latar belakang finance/accounting",
            "Menguasai Excel",
            "Detail-oriented",
            "Memahami prinsip akuntansi",
        ],
        skills: ["Accounting", "Excel", "Financial Analysis"],
        posted: "2 minggu lalu",
        postedDays: 14,
        logo: "assets/images/company-04.jpg",
        logoColor: "#D97706",
    },
    {
        id: 13,
        title: "HR Specialist",
        company: "Morrow Creative",
        location: "Bali",
        salary: "Rp6–9 juta",
        salaryMin: 6,
        salaryMax: 9,
        type: "Full-time",
        workplace: "On-site",
        experience: "Junior",
        category: "Human Resources",
        description: "HR Specialist yang akan mengelola proses rekrutmen dan pengembangan karyawan di Morrow Creative.",
        responsibilities: [
            "Mengelola proses rekrutmen",
            "Mengelola administrasi karyawan",
            "Membantu pengembangan karyawan",
            "Menjaga budaya perusahaan",
        ],
        requirements: [
            "Pengalaman di HR",
            "Excellent communication",
            "Memahami labor law dasar",
            "People-oriented",
        ],
        skills: ["Recruitment", "HR Administration", "Communication"],
        posted: "1 minggu lalu",
        postedDays: 7,
        logo: "assets/images/company-06.jpg",
        logoColor: "#D95C5C",
    },
    {
        id: 14,
        title: "English Tutor",
        company: "Morrow Creative",
        location: "Bali",
        salary: "Rp5–8 juta",
        salaryMin: 5,
        salaryMax: 8,
        type: "Part-time",
        workplace: "Remote",
        experience: "Junior",
        category: "Education",
        description: "English Tutor yang akan mengajarkan bahasa Inggris kepada karyawan dan membantu meningkatkan komunikasi bisnis.",
        responsibilities: [
            "Mengajar bahasa Inggris",
            "Membuat materi pembelajaran",
            "Melakukan evaluasi kemajuan",
            "Membantu presentasi bisnis",
        ],
        requirements: [
            "English proficiency excellent",
            "Pengalaman mengajar",
            "Sabar dan komunikatif",
            "Bisa bekerja remote",
        ],
        skills: ["English", "Teaching", "Communication"],
        posted: "10 hari lalu",
        postedDays: 10,
        logo: "assets/images/company-06.jpg",
        logoColor: "#D95C5C",
    },
    {
        id: 15,
        title: "Project Coordinator",
        company: "Orbit Systems",
        location: "Remote",
        salary: "Rp8–11 juta",
        salaryMin: 8,
        salaryMax: 11,
        type: "Contract",
        workplace: "Remote",
        experience: "Junior",
        category: "Project Management",
        description: "Project Coordinator yang akan membantu tim mengelola timeline, resource, dan komunikasi antar stakeholder.",
        responsibilities: [
            "Mengelola project timeline",
            "Mengoordinasikan tim",
            "Membuat laporan kemajuan",
            "Menjaga komunikasi stakeholder",
        ],
        requirements: [
            "Pengalaman di project management",
            "Strong organizational skills",
            "Menguasai project management tools",
            "Excellent communication",
        ],
        skills: ["Project Management", "Communication", "Organization"],
        posted: "4 hari lalu",
        postedDays: 4,
        logo: "assets/images/company-05.jpg",
        logoColor: "#7357E8",
    },
    {
        id: 16,
        title: "Mobile Developer",
        company: "Orbit Systems",
        location: "Remote",
        salary: "Rp10–14 juta",
        salaryMin: 10,
        salaryMax: 14,
        type: "Full-time",
        workplace: "Remote",
        experience: "Junior",
        category: "Technology",
        description: "Mobile Developer yang akan membangun aplikasi mobile native untuk klien-klien Orbit Systems.",
        responsibilities: [
            "Mengembangkan aplikasi mobile",
            "Mengoptimalkan performa aplikasi",
            "Melakukan testing",
            "Berkolaborasi dengan tim backend",
        ],
        requirements: [
            "Pengalaman dengan Flutter atau React Native",
            "Memahami mobile design pattern",
            "Portofolio aplikasi mobile",
            "Problem solving skills",
        ],
        skills: ["Flutter", "React Native", "Mobile Development"],
        posted: "3 hari lalu",
        postedDays: 3,
        logo: "assets/images/company-05.jpg",
        logoColor: "#7357E8",
    },
];

// ========== RESOURCES DATA ==========
const resourcesData = [
    {
        id: 1,
        title: "Resume Tips",
        category: "Career Preparation",
        description: "Cara membuat resume yang menarik perhatian recruiter dalam 7 detik pertama.",
        content: "Resume Anda harus ringkas, fokus pada pencapaian, dan disesuaikan dengan posisi yang dilamar. Gunakan format yang clean, maksimal 2 halaman untuk junior, dan sertakan angka konkret untuk setiap pencapaian. Gunakan action verbs seperti 'membangun', 'mengelola', 'meningkatkan' untuk memulai setiap bullet point. Pastikan resume Anda ATS-friendly dengan menggunakan format standar dan font yang mudah dibaca.",
    },
    {
        id: 2,
        title: "Interview Guide",
        category: "Interview Preparation",
        description: "Persiapan lengkap menghadapi interview kerja, dari screening hingga final interview.",
        content: "Riset perusahaan sebelum interview. Siapkan jawaban untuk pertanyaan umum seperti 'ceritakan tentang diri Anda'. Gunakan framework STAR (Situation, Task, Action, Result) untuk pertanyaan behavioral. Siapkan pertanyaan untuk interviewer tentang tim, budaya, dan ekspektasi. Latih jawaban Anda dengan teman atau di depan cermin. Jangan lupa berpakaian rapi dan datang 10-15 menit lebih awal.",
    },
    {
        id: 3,
        title: "Portfolio Guide",
        category: "Career Development",
        description: "Membangun portfolio yang meyakinkan untuk karier di bidang kreatif dan teknologi.",
        content: "Portfolio Anda adalah bukti nyata kemampuan Anda. Pilih 3-5 proyek terbaik yang relevan dengan posisi yang dilamar. Jelaskan proses di balik setiap proyek, bukan hanya hasil akhir. Sertakan studi kasus yang menunjukkan problem solving Anda. Pastikan portfolio Anda mudah diakses online, rapi, dan menceritakan kisah karier Anda dengan jelas.",
    },
    {
        id: 4,
        title: "Career Planning",
        category: "Professional Growth",
        description: "Strategi merencanakan karier jangka panjang dan mencapai tujuan profesional Anda.",
        content: "Mulailah dengan menetapkan tujuan karier jangka panjang (5 tahun) dan pecah menjadi milestone tahunan. Identifikasi skill gaps dan buat rencana pembelajaran. Bangun networking secara konsisten melalui LinkedIn dan event industri. Evaluasi kemajuan Anda setiap 6 bulan dan jangan takut untuk menyesuaikan rencana berdasarkan peluang baru dan minat yang berkembang.",
    },
];

// ========== DEFAULT PROFILE & NOTIFICATIONS ==========
const defaultProfile = {
    name: "Ahmad Wildan",
    headline: "Junior Front-End Developer",
    location: "Jakarta, Indonesia",
    bio: "Passionate front-end developer yang fokus pada clean code dan user experience. Berpengalaman dengan React, Tailwind CSS, dan JavaScript modern.",
    skills: ["HTML", "CSS", "JavaScript", "UI/UX", "Tailwind CSS"],
};

const defaultNotifications = [
    { id: 1, message: "Lamaran Frontend Developer sedang ditinjau.", read: false, type: "application" },
    { id: 2, message: "Profilmu sudah 80% lengkap.", read: false, type: "profile" },
    { id: 3, message: "2 pekerjaan baru sesuai dengan profilmu.", read: false, type: "job" },
];

// ========== STATE ==========
let appState = {
    jobs: [...jobsData],
    savedJobs: [],
    applications: [],
    profile: { ...defaultProfile },
    notifications: [...defaultNotifications],
    activeFilters: {
        location: "",
        categories: [],
        salary: "",
        types: [],
        workplaces: [],
        experiences: [],
    },
    searchQuery: "",
    sortBy: "relevance",
    currentJobId: null,
    currentCompanyId: null,
    currentResourceId: null,
};

// ========== LOCALSTORAGE ==========
const STORAGE_KEY = "vantaAppState";

function loadState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed && typeof parsed === "object") {
                appState = {
                    ...appState,
                    ...parsed,
                    jobs: [...jobsData],
                    profile: { ...defaultProfile, ...(parsed.profile || {}) },
                    notifications: Array.isArray(parsed.notifications)
                        ? parsed.notifications
                        : [...defaultNotifications],
                    savedJobs: Array.isArray(parsed.savedJobs) ? parsed.savedJobs : [],
                    applications: Array.isArray(parsed.applications) ? parsed.applications : [],
                    activeFilters: { ...appState.activeFilters, ...(parsed.activeFilters || {}) },
                };
            }
        } else {
            seedSampleApplications();
        }
    } catch (e) {
        console.warn("Failed to load state, using defaults.", e);
        seedSampleApplications();
    }
}

function saveState() {
    try {
        const stateToSave = {
            savedJobs: appState.savedJobs,
            applications: appState.applications,
            profile: appState.profile,
            notifications: appState.notifications,
            activeFilters: appState.activeFilters,
            searchQuery: appState.searchQuery,
            sortBy: appState.sortBy,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    } catch (e) {
        console.warn("Failed to save state.", e);
    }
}

function seedSampleApplications() {
    const now = Date.now();
    appState.applications = [
        {
            id: "app-1",
            jobId: 1,
            jobTitle: "Frontend Developer",
            company: "Acme Digital",
            appliedDate: new Date(now - 5 * 86400000).toISOString(),
            status: "Reviewing",
            fullName: "Ahmad Wildan",
            email: "ahmad@example.com",
            phone: "081234567890",
            cvFileName: "Ahmad_Wildan_CV.pdf",
            coverMessage: "Saya sangat antusias untuk posisi ini.",
        },
        {
            id: "app-2",
            jobId: 6,
            jobTitle: "Data Analyst",
            company: "Northstar Labs",
            appliedDate: new Date(now - 3 * 86400000).toISOString(),
            status: "Applied",
            fullName: "Ahmad Wildan",
            email: "ahmad@example.com",
            phone: "081234567890",
            cvFileName: "Ahmad_Wildan_CV.pdf",
            coverMessage: "Saya tertarik dengan analisis data.",
        },
    ];
    saveState();
}

// ========== MODAL MANAGER ==========
const modalRegistry = {
    jobDetail: { element: null, name: "jobDetail" },
    apply: { element: null, name: "apply" },
    filterDrawer: { element: null, name: "filterDrawer" },
    savedJobs: { element: null, name: "savedJobs" },
    applications: { element: null, name: "applications" },
    profile: { element: null, name: "profile" },
    profileEdit: { element: null, name: "profileEdit" },
    notifications: { element: null, name: "notifications" },
    companyDetail: { element: null, name: "companyDetail" },
    resourceDetail: { element: null, name: "resourceDetail" },
    mobileDrawer: { element: null, name: "mobileDrawer" },
};

let activeModalName = null;

// ========== PERBAIKAN: Inisialisasi element & event delegation ==========
function initModalRegistry() {
    // 1. Isi properti element untuk setiap modal
    Object.keys(modalRegistry).forEach((key) => {
        modalRegistry[key].element = document.getElementById(`modal-${key}`);
    });

    // 2. Event delegation untuk tombol close & backdrop
    document.addEventListener('click', function(e) {
        // Tombol close (atribut data-close)
        const closeBtn = e.target.closest('[data-close]');
        if (closeBtn) {
            const modalName = closeBtn.getAttribute('data-close');
            closeModal(modalName);
            return;
        }

        // Klik pada backdrop
        const backdrop = e.target.closest('.modal-backdrop');
        if (backdrop) {
            const overlay = backdrop.closest('.modal-overlay');
            if (overlay && overlay.hasAttribute('data-modal')) {
                const modalName = overlay.getAttribute('data-modal');
                closeModal(modalName);
            }
        }
    });
}
// ========== AKHIR PERBAIKAN ==========

function openModal(name) {
    closeAllModals();
    const modal = modalRegistry[name];
    if (!modal || !modal.element) {
        console.warn(`Modal "${name}" not found.`);
        return;
    }
    modal.element.classList.remove("hidden");
    modal.element.classList.add("active");
    modal.element.setAttribute("aria-hidden", "false");
    activeModalName = name;
    document.body.style.overflow = "hidden";

    if (name === "jobDetail" && appState.currentJobId) {
        renderJobDetail(appState.currentJobId);
    }
    if (name === "apply" && appState.currentJobId) {
        renderApplyForm(appState.currentJobId);
    }
    if (name === "filterDrawer") {
        renderFilterDrawer();
    }
    if (name === "savedJobs") {
        renderSavedJobs();
    }
    if (name === "applications") {
        renderApplications();
    }
    if (name === "profile") {
        renderProfile();
    }
    if (name === "profileEdit") {
        renderProfileEdit();
    }
    if (name === "notifications") {
        renderNotifications();
    }
    if (name === "companyDetail" && appState.currentCompanyId) {
        renderCompanyDetail(appState.currentCompanyId);
    }
    if (name === "resourceDetail" && appState.currentResourceId) {
        renderResourceDetail(appState.currentResourceId);
    }
}

function closeModal(name) {
    const modal = modalRegistry[name];
    if (!modal || !modal.element) return;
    modal.element.classList.remove("active");
    modal.element.classList.add("hidden");
    modal.element.setAttribute("aria-hidden", "true");
    if (activeModalName === name) {
        activeModalName = null;
        document.body.style.overflow = "";
    }
}

function closeAllModals() {
    Object.keys(modalRegistry).forEach((key) => {
        const modal = modalRegistry[key];
        if (modal && modal.element) {
            modal.element.classList.remove("active");
            modal.element.classList.add("hidden");
            modal.element.setAttribute("aria-hidden", "true");
        }
    });
    activeModalName = null;
    document.body.style.overflow = "";
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && activeModalName) {
        closeModal(activeModalName);
    }
});

// ========== TOAST SYSTEM ==========
function showToast(message) {
    const container = document.getElementById("toast-container");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    toast.setAttribute("role", "status");
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add("hide");
        setTimeout(() => {
            if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 300);
    }, 2500);
}

// ========== UTILITY FUNCTIONS ==========
function getCompanyByName(name) {
    return companiesData.find((c) => c.name === name) || null;
}

function getJobById(id) {
    return appState.jobs.find((j) => j.id === id) || null;
}

function getCompanyLogoHTML(companyName, logoColor, logoPath) {
    return `
        <div class="company-logo" style="background-color: ${logoColor};">
            <img src="${logoPath}" alt="Logo ${companyName}" 
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <span class="fallback-initial" style="display: none;">${companyName.charAt(0)}</span>
        </div>
    `;
}

function parseSalaryForSort(job, sortType) {
    if (sortType === "salary-high") return job.salaryMax || 0;
    if (sortType === "salary-low") return job.salaryMin || 999;
    if (sortType === "newest") return job.postedDays || 999;
    return 0;
}

function getFilteredJobs() {
    let filtered = [...appState.jobs];
    const filters = appState.activeFilters;

    if (appState.searchQuery.trim()) {
        const query = appState.searchQuery.toLowerCase().trim();
        filtered = filtered.filter((job) => {
            const searchable = [
                job.title,
                job.company,
                job.location,
                job.category,
                ...(job.skills || []),
            ]
                .join(" ")
                .toLowerCase();
            return searchable.includes(query);
        });
    }

    if (filters.location) {
        filtered = filtered.filter((job) => job.location === filters.location);
    }

    if (filters.categories && filters.categories.length > 0) {
        filtered = filtered.filter((job) => filters.categories.includes(job.category));
    }

    if (filters.salary) {
        const minSalary = parseInt(filters.salary, 10);
        filtered = filtered.filter((job) => job.salaryMin >= minSalary);
    }

    if (filters.types && filters.types.length > 0) {
        filtered = filtered.filter((job) => filters.types.includes(job.type));
    }

    if (filters.workplaces && filters.workplaces.length > 0) {
        filtered = filtered.filter((job) => filters.workplaces.includes(job.workplace));
    }

    if (filters.experiences && filters.experiences.length > 0) {
        filtered = filtered.filter((job) => filters.experiences.includes(job.experience));
    }

    if (appState.sortBy === "newest") {
        filtered.sort((a, b) => (a.postedDays || 999) - (b.postedDays || 999));
    } else if (appState.sortBy === "salary-high") {
        filtered.sort((a, b) => (b.salaryMax || 0) - (a.salaryMax || 0));
    } else if (appState.sortBy === "salary-low") {
        filtered.sort((a, b) => (a.salaryMin || 999) - (b.salaryMin || 999));
    }

    return filtered;
}

function getRecommendations() {
    const profile = appState.profile;
    const profileSkills = (profile.skills || []).map((s) => s.toLowerCase());
    const recommended = [];

    appState.jobs.forEach((job) => {
        let score = 0;
        const jobSkills = (job.skills || []).map((s) => s.toLowerCase());
        jobSkills.forEach((skill) => {
            if (profileSkills.includes(skill)) score += 2;
        });
        if (job.category === profile.headline) score += 1;
        if (job.experience === "Junior" && profile.headline.toLowerCase().includes("junior")) score += 1;
        if (score > 0) recommended.push({ job, score });
    });

    recommended.sort((a, b) => b.score - a.score);
    return recommended.slice(0, 6).map((r) => r.job);
}

function getProfileCompletion() {
    const p = appState.profile;
    let filled = 0;
    const total = 5;
    if (p.name) filled++;
    if (p.headline) filled++;
    if (p.location) filled++;
    if (p.bio) filled++;
    if (p.skills && p.skills.length > 0) filled++;
    return Math.round((filled / total) * 100);
}

function getInterviewCount() {
    return appState.applications.filter((a) => a.status === "Interview").length;
}

// ========== RENDER: FILTER OPTIONS ==========
function renderFilterOptions() {
    const categories = [...new Set(appState.jobs.map((j) => j.category))];
    const types = ["Full-time", "Part-time", "Contract", "Internship"];
    const workplaces = ["Remote", "Hybrid", "On-site"];
    const experiences = ["Intern", "Junior", "Mid-level", "Senior"];

    const catDesktop = document.getElementById("filter-category-desktop");
    if (catDesktop) {
        catDesktop.innerHTML = categories
            .map(
                (cat) => `
            <label class="filter-checkbox">
                <input type="checkbox" value="${cat}" data-filter="categories" ${appState.activeFilters.categories.includes(cat) ? "checked" : ""} />
                <span>${cat}</span>
            </label>
        `
            )
            .join("");
    }

    const typeDesktop = document.getElementById("filter-type-desktop");
    if (typeDesktop) {
        typeDesktop.innerHTML = types
            .map(
                (t) => `
            <label class="filter-checkbox">
                <input type="checkbox" value="${t}" data-filter="types" ${appState.activeFilters.types.includes(t) ? "checked" : ""} />
                <span>${t}</span>
            </label>
        `
            )
            .join("");
    }

    const workDesktop = document.getElementById("filter-workplace-desktop");
    if (workDesktop) {
        workDesktop.innerHTML = workplaces
            .map(
                (w) => `
            <label class="filter-checkbox">
                <input type="checkbox" value="${w}" data-filter="workplaces" ${appState.activeFilters.workplaces.includes(w) ? "checked" : ""} />
                <span>${w}</span>
            </label>
        `
            )
            .join("");
    }

    const expDesktop = document.getElementById("filter-experience-desktop");
    if (expDesktop) {
        expDesktop.innerHTML = experiences
            .map(
                (e) => `
            <label class="filter-checkbox">
                <input type="checkbox" value="${e}" data-filter="experiences" ${appState.activeFilters.experiences.includes(e) ? "checked" : ""} />
                <span>${e}</span>
            </label>
        `
            )
            .join("");
    }
}

function renderFilterDrawer() {
    const container = document.getElementById("filter-drawer-content");
    if (!container) return;

    const categories = [...new Set(appState.jobs.map((j) => j.category))];
    const types = ["Full-time", "Part-time", "Contract", "Internship"];
    const workplaces = ["Remote", "Hybrid", "On-site"];
    const experiences = ["Intern", "Junior", "Mid-level", "Senior"];

    container.innerHTML = `
        <div class="mb-5">
            <label class="form-label" for="drawer-location">Location</label>
            <select id="drawer-location" class="form-input">
                <option value="">Semua Lokasi</option>
                <option value="Jakarta" ${appState.activeFilters.location === "Jakarta" ? "selected" : ""}>Jakarta</option>
                <option value="Bandung" ${appState.activeFilters.location === "Bandung" ? "selected" : ""}>Bandung</option>
                <option value="Surabaya" ${appState.activeFilters.location === "Surabaya" ? "selected" : ""}>Surabaya</option>
                <option value="Remote" ${appState.activeFilters.location === "Remote" ? "selected" : ""}>Remote</option>
                <option value="Bali" ${appState.activeFilters.location === "Bali" ? "selected" : ""}>Bali</option>
            </select>
        </div>
        <div class="mb-5">
            <p class="form-label">Category</p>
            ${categories
                .map(
                    (cat) => `
                <label class="filter-checkbox">
                    <input type="checkbox" value="${cat}" data-filter="categories" ${appState.activeFilters.categories.includes(cat) ? "checked" : ""} />
                    <span>${cat}</span>
                </label>
            `
                )
                .join("")}
        </div>
        <div class="mb-5">
            <label class="form-label" for="drawer-salary">Salary Range</label>
            <select id="drawer-salary" class="form-input">
                <option value="">Semua Gaji</option>
                <option value="5" ${appState.activeFilters.salary === "5" ? "selected" : ""}>Di atas Rp5 juta</option>
                <option value="8" ${appState.activeFilters.salary === "8" ? "selected" : ""}>Di atas Rp8 juta</option>
                <option value="10" ${appState.activeFilters.salary === "10" ? "selected" : ""}>Di atas Rp10 juta</option>
                <option value="15" ${appState.activeFilters.salary === "15" ? "selected" : ""}>Di atas Rp15 juta</option>
            </select>
        </div>
        <div class="mb-5">
            <p class="form-label">Work Type</p>
            ${types
                .map(
                    (t) => `
                <label class="filter-checkbox">
                    <input type="checkbox" value="${t}" data-filter="types" ${appState.activeFilters.types.includes(t) ? "checked" : ""} />
                    <span>${t}</span>
                </label>
            `
                )
                .join("")}
        </div>
        <div class="mb-5">
            <p class="form-label">Workplace</p>
            ${workplaces
                .map(
                    (w) => `
                <label class="filter-checkbox">
                    <input type="checkbox" value="${w}" data-filter="workplaces" ${appState.activeFilters.workplaces.includes(w) ? "checked" : ""} />
                    <span>${w}</span>
                </label>
            `
                )
                .join("")}
        </div>
        <div class="mb-5">
            <p class="form-label">Experience</p>
            ${experiences
                .map(
                    (e) => `
                <label class="filter-checkbox">
                    <input type="checkbox" value="${e}" data-filter="experiences" ${appState.activeFilters.experiences.includes(e) ? "checked" : ""} />
                    <span>${e}</span>
                </label>
            `
                )
                .join("")}
        </div>
        <button id="clear-filters-drawer" class="w-full px-4 py-3 rounded-xl border border-border text-sm font-medium text-slate hover:bg-offwhite transition-colors min-h-[44px]" type="button">
            Clear All Filters
        </button>
    `;

    attachFilterEvents(container);
    const clearBtn = document.getElementById("clear-filters-drawer");
    if (clearBtn) {
        clearBtn.addEventListener("click", clearAllFilters);
    }
    const locationSelect = document.getElementById("drawer-location");
    if (locationSelect) {
        locationSelect.addEventListener("change", (e) => {
            appState.activeFilters.location = e.target.value;
            saveState();
            renderFilterDrawer();
            renderJobs();
            renderFilterOptions();
        });
    }
    const salarySelect = document.getElementById("drawer-salary");
    if (salarySelect) {
        salarySelect.addEventListener("change", (e) => {
            appState.activeFilters.salary = e.target.value;
            saveState();
            renderFilterDrawer();
            renderJobs();
            renderFilterOptions();
        });
    }
}

function attachFilterEvents(container) {
    container.querySelectorAll('input[type="checkbox"][data-filter]').forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            const filterKey = checkbox.getAttribute("data-filter");
            const value = checkbox.value;
            if (checkbox.checked) {
                if (!appState.activeFilters[filterKey].includes(value)) {
                    appState.activeFilters[filterKey].push(value);
                }
            } else {
                appState.activeFilters[filterKey] = appState.activeFilters[filterKey].filter(
                    (v) => v !== value
                );
            }
            saveState();
            renderJobs();
            renderFilterOptions();
            renderFilterDrawer();
        });
    });
}

function clearAllFilters() {
    appState.activeFilters = {
        location: "",
        categories: [],
        salary: "",
        types: [],
        workplaces: [],
        experiences: [],
    };
    saveState();
    renderJobs();
    renderFilterOptions();
    renderFilterDrawer();
    showToast("Filter direset.");
}

// ========== RENDER: JOBS ==========
function renderJobs() {
    const container = document.getElementById("jobs-container");
    const noResults = document.getElementById("no-results");
    if (!container) return;

    const jobs = getFilteredJobs();
    if (jobs.length === 0) {
        container.innerHTML = "";
        if (noResults) noResults.classList.remove("hidden");
        return;
    }
    if (noResults) noResults.classList.add("hidden");

    container.innerHTML = jobs
        .map((job) => {
            const isSaved = appState.savedJobs.includes(job.id);
            const company = getCompanyByName(job.company);
            const logoColor = company ? company.logoColor : "#3867F2";
            const logoPath = job.logo || company?.logo || "";
            const workplaceBadge =
                job.workplace === "Remote"
                    ? "badge-green"
                    : job.workplace === "Hybrid"
                        ? "badge-violet"
                        : "badge-orange";

            return `
            <article class="job-card" data-job-id="${job.id}" tabindex="0" role="button" aria-label="${job.title} di ${job.company}">
                <div class="flex items-start gap-3">
                    ${getCompanyLogoHTML(job.company, logoColor, logoPath)}
                    <div class="flex-1 min-w-0">
                        <h3 class="job-title truncate">${job.title}</h3>
                        <p class="job-company">${job.company}</p>
                    </div>
                    <button class="save-btn ${isSaved ? "saved" : ""}" data-save-id="${job.id}" aria-label="${isSaved ? "Hapus dari tersimpan" : "Simpan pekerjaan"}" type="button">
                        <svg class="w-5 h-5 ${isSaved ? "text-red fill-current" : "text-slate"}" fill="${isSaved ? "currentColor" : "none"}" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                        </svg>
                    </button>
                </div>
                <div class="flex flex-wrap gap-1.5 text-xs">
                    <span class="job-badge badge-softblue">${job.experience}</span>
                    <span class="job-badge badge-gray">${job.type}</span>
                    <span class="job-badge ${workplaceBadge}">${job.workplace}</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                    <span class="text-slate flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        ${job.location}
                    </span>
                    <span class="font-semibold text-ink">${job.salary}</span>
                </div>
                <div class="flex items-center justify-between text-xs text-slate">
                    <span>${job.posted}</span>
                    <button class="apply-btn px-4 py-2 bg-electric text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-colors min-h-[36px]" data-apply-id="${job.id}" type="button">
                        Apply
                    </button>
                </div>
            </article>
        `;
        })
        .join("");

    container.querySelectorAll(".job-card").forEach((card) => {
        card.addEventListener("click", (e) => {
            if (e.target.closest(".save-btn") || e.target.closest(".apply-btn")) return;
            const id = parseInt(card.getAttribute("data-job-id"), 10);
            appState.currentJobId = id;
            openModal("jobDetail");
        });
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                const id = parseInt(card.getAttribute("data-job-id"), 10);
                appState.currentJobId = id;
                openModal("jobDetail");
            }
        });
    });

    container.querySelectorAll(".save-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute("data-save-id"), 10);
            toggleSaveJob(id);
        });
    });

    container.querySelectorAll(".apply-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute("data-apply-id"), 10);
            appState.currentJobId = id;
            openModal("apply");
        });
    });
}

// ========== RENDER: JOB DETAIL ==========
function renderJobDetail(jobId) {
    const container = document.getElementById("job-detail-content");
    if (!container) return;
    const job = getJobById(jobId);
    if (!job) return;

    const isSaved = appState.savedJobs.includes(job.id);
    const company = getCompanyByName(job.company);
    const logoColor = company ? company.logoColor : "#3867F2";
    const logoPath = job.logo || company?.logo || "";

    container.innerHTML = `
        <div class="flex items-start justify-between mb-4">
            <div class="flex items-center gap-3">
                ${getCompanyLogoHTML(job.company, logoColor, logoPath)}
                <div>
                    <h3 class="font-bold text-lg text-ink leading-tight">${job.title}</h3>
                    <p class="text-sm text-slate">${job.company} — ${job.location}</p>
                </div>
            </div>
            <button class="modal-close-btn w-10 h-10 flex items-center justify-center text-slate hover:text-ink transition-colors rounded-xl focus:outline-none focus:ring-2 focus:ring-electric" data-close="jobDetail" type="button" aria-label="Tutup detail">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        </div>
        <div class="flex flex-wrap gap-2 mb-4">
            <span class="job-badge badge-softblue">${job.experience}</span>
            <span class="job-badge badge-gray">${job.type}</span>
            <span class="job-badge ${job.workplace === "Remote" ? "badge-green" : job.workplace === "Hybrid" ? "badge-violet" : "badge-orange"}">${job.workplace}</span>
            <span class="job-badge badge-gray">${job.salary}</span>
        </div>
        <div class="space-y-4 text-sm text-slate">
            <div>
                <h4 class="font-semibold text-ink mb-1">Deskripsi</h4>
                <p>${job.description}</p>
            </div>
            <div>
                <h4 class="font-semibold text-ink mb-1">Responsibilities</h4>
                <ul class="list-disc pl-5 space-y-0.5">
                    ${(job.responsibilities || []).map((r) => `<li>${r}</li>`).join("")}
                </ul>
            </div>
            <div>
                <h4 class="font-semibold text-ink mb-1">Requirements</h4>
                <ul class="list-disc pl-5 space-y-0.5">
                    ${(job.requirements || []).map((r) => `<li>${r}</li>`).join("")}
                </ul>
            </div>
            <div>
                <h4 class="font-semibold text-ink mb-1">Skills</h4>
                <div class="flex flex-wrap gap-2">
                    ${(job.skills || []).map((s) => `<span class="job-badge badge-softblue">${s}</span>`).join("")}
                </div>
            </div>
            <p class="text-xs text-slate">Diposting: ${job.posted}</p>
        </div>
        <div class="flex gap-3 mt-5">
            <button id="detail-save-btn" class="flex-1 px-4 py-3 rounded-xl border border-border text-sm font-semibold ${isSaved ? "text-red bg-red/5 border-red/30" : "text-slate hover:bg-offwhite"} transition-colors min-h-[44px]" type="button">
                ${isSaved ? "Unsave Job" : "Save Job"}
            </button>
            <button id="detail-apply-btn" class="flex-1 px-4 py-3 bg-electric text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors min-h-[44px]" type="button">
                Apply Now
            </button>
        </div>
    `;

    const saveBtn = container.querySelector("#detail-save-btn");
    if (saveBtn) {
        saveBtn.addEventListener("click", () => {
            toggleSaveJob(job.id);
            renderJobDetail(job.id);
        });
    }
    const applyBtn = container.querySelector("#detail-apply-btn");
    if (applyBtn) {
        applyBtn.addEventListener("click", () => {
            closeModal("jobDetail");
            openModal("apply");
        });
    }
}

// ========== RENDER: APPLY FORM ==========
function renderApplyForm(jobId) {
    const container = document.getElementById("apply-content");
    if (!container) return;
    const job = getJobById(jobId);
    if (!job) return;

    container.innerHTML = `
        <div class="flex items-center justify-between mb-4">
            <h3 class="font-bold text-lg">Apply — ${job.title}</h3>
            <button class="modal-close-btn w-10 h-10 flex items-center justify-center text-slate hover:text-ink transition-colors rounded-xl focus:outline-none focus:ring-2 focus:ring-electric" data-close="apply" type="button" aria-label="Tutup form">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        </div>
        <p class="text-sm text-slate mb-4">${job.company} — ${job.location}</p>
        <form id="apply-form" class="space-y-4" novalidate>
            <div>
                <label class="form-label" for="apply-name">Full Name *</label>
                <input id="apply-name" class="form-input" type="text" value="${appState.profile.name || ""}" required autocomplete="name" />
            </div>
            <div>
                <label class="form-label" for="apply-email">Email *</label>
                <input id="apply-email" class="form-input" type="email" required autocomplete="email" />
            </div>
            <div>
                <label class="form-label" for="apply-phone">Phone *</label>
                <input id="apply-phone" class="form-input" type="tel" required autocomplete="tel" />
            </div>
            <div>
                <label class="form-label" for="apply-cv">CV / Resume *</label>
                <input id="apply-cv" class="form-input" type="file" accept=".pdf,.doc,.docx" required />
                <p class="text-xs text-slate mt-1">Format: PDF, DOC, DOCX</p>
            </div>
            <div>
                <label class="form-label" for="apply-cover">Cover Message</label>
                <textarea id="apply-cover" class="form-input" rows="4" placeholder="Tulis pesan singkat..."></textarea>
            </div>
            <button type="submit" class="w-full px-4 py-3 bg-electric text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors min-h-[44px]">
                Submit Application
            </button>
        </form>
        <div id="apply-success" class="hidden text-center py-8">
            <div class="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            </div>
            <h4 class="font-bold text-lg text-ink mb-1">Application Submitted</h4>
            <p class="text-sm text-slate">Lamaran berhasil disimpan.</p>
            <p class="text-xs text-slate mt-2">Status: <span class="font-semibold text-electric">Applied</span></p>
        </div>
    `;

    const form = container.querySelector("#apply-form");
    const successDiv = container.querySelector("#apply-success");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = form.querySelector("#apply-name").value.trim();
            const email = form.querySelector("#apply-email").value.trim();
            const phone = form.querySelector("#apply-phone").value.trim();
            const cvFile = form.querySelector("#apply-cv").files[0];
            const cover = form.querySelector("#apply-cover").value.trim();

            if (!name || !email || !phone || !cvFile) {
                showToast("Mohon lengkapi semua field yang wajib diisi.");
                return;
            }
            if (!email.includes("@")) {
                showToast("Email tidak valid.");
                return;
            }

            const newApp = {
                id: "app-" + Date.now(),
                jobId: job.id,
                jobTitle: job.title,
                company: job.company,
                appliedDate: new Date().toISOString(),
                status: "Applied",
                fullName: name,
                email: email,
                phone: phone,
                cvFileName: cvFile.name,
                coverMessage: cover,
            };
            appState.applications.unshift(newApp);
            saveState();
            renderDashboard();
            form.classList.add("hidden");
            successDiv.classList.remove("hidden");
            showToast("Lamaran berhasil dikirim.");
        });
    }
}

// ========== RENDER: SAVED JOBS ==========
function renderSavedJobs() {
    const container = document.getElementById("saved-jobs-content");
    if (!container) return;

    const savedJobs = appState.savedJobs
        .map((id) => getJobById(id))
        .filter((job) => job !== null);

    container.innerHTML = `
        <div class="flex items-center justify-between mb-4">
            <h3 class="font-bold text-lg">Saved Jobs</h3>
            <button class="modal-close-btn w-10 h-10 flex items-center justify-center text-slate hover:text-ink transition-colors rounded-xl focus:outline-none focus:ring-2 focus:ring-electric" data-close="savedJobs" type="button" aria-label="Tutup">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        </div>
    `;

    if (savedJobs.length === 0) {
        container.innerHTML += `
            <div class="text-center py-12 text-slate">
                <p class="text-lg font-semibold mb-2">Belum ada pekerjaan tersimpan.</p>
                <p class="text-sm">Jelajahi lowongan dan simpan pekerjaan yang menarik.</p>
            </div>
        `;
        return;
    }

    savedJobs.forEach((job) => {
        const isSaved = appState.savedJobs.includes(job.id);
        const company = getCompanyByName(job.company);
        const logoColor = company ? company.logoColor : "#3867F2";
        const logoPath = job.logo || company?.logo || "";
        container.innerHTML += `
            <div class="flex items-center gap-3 py-3 border-b border-border last:border-0">
                <div class="company-logo w-10 h-10 text-sm" style="background-color: ${logoColor}; background-image: url('${logoPath}'); background-size: cover; background-position: center;" aria-label="Logo ${job.company}">
                    ${job.company.charAt(0)}
                </div>
                <div class="flex-1 min-w-0">
                    <p class="font-semibold text-sm text-ink truncate">${job.title}</p>
                    <p class="text-xs text-slate">${job.company} — ${job.location}</p>
                </div>
                <button class="save-btn saved" data-save-id="${job.id}" aria-label="Hapus dari tersimpan" type="button">
                    <svg class="w-5 h-5 text-red fill-current" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
                </button>
                <button class="text-xs font-semibold text-electric hover:underline whitespace-nowrap" data-view-job="${job.id}" type="button">Lihat</button>
            </div>
        `;
    });

    container.querySelectorAll(".save-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.getAttribute("data-save-id"), 10);
            toggleSaveJob(id);
            renderSavedJobs();
        });
    });
    container.querySelectorAll("[data-view-job]").forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.getAttribute("data-view-job"), 10);
            appState.currentJobId = id;
            closeModal("savedJobs");
            openModal("jobDetail");
        });
    });
}

// ========== RENDER: APPLICATIONS ==========
function renderApplications() {
    const container = document.getElementById("applications-content");
    if (!container) return;

    container.innerHTML = `
        <div class="flex items-center justify-between mb-4">
            <h3 class="font-bold text-lg">My Applications</h3>
            <button class="modal-close-btn w-10 h-10 flex items-center justify-center text-slate hover:text-ink transition-colors rounded-xl focus:outline-none focus:ring-2 focus:ring-electric" data-close="applications" type="button" aria-label="Tutup">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        </div>
    `;

    if (appState.applications.length === 0) {
        container.innerHTML += `
            <div class="text-center py-12 text-slate">
                <p class="text-lg font-semibold mb-2">Belum ada lamaran.</p>
                <p class="text-sm">Mulai melamar pekerjaan untuk melacak aplikasi Anda.</p>
            </div>
        `;
        return;
    }

    const statusSteps = ["Applied", "Reviewing", "Interview", "Offer"];
    appState.applications.forEach((app) => {
        const statusIndex = statusSteps.indexOf(app.status);
        const statusClass =
            app.status === "Applied"
                ? "status-applied"
                : app.status === "Reviewing"
                    ? "status-reviewing"
                    : app.status === "Interview"
                        ? "status-interview"
                        : app.status === "Offer"
                            ? "status-offer"
                            : "status-rejected";

        container.innerHTML += `
            <div class="border border-border rounded-xl p-4 mb-3">
                <div class="flex items-start justify-between mb-2">
                    <div>
                        <p class="font-semibold text-sm text-ink">${app.jobTitle}</p>
                        <p class="text-xs text-slate">${app.company}</p>
                    </div>
                    <span class="status-badge ${statusClass}">${app.status}</span>
                </div>
                <div class="flex items-center gap-2 mt-3">
                    ${statusSteps
                        .map((step, i) => {
                            const isDone = i < statusIndex || (app.status !== "Rejected" && i === statusIndex && app.status === step);
                            const isCurrent = i === statusIndex && app.status === step;
                            const isRejected = app.status === "Rejected";
                            return `
                                <div class="flex items-center gap-1 flex-1">
                                    <div class="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${isRejected && i > 0 ? "bg-gray-200 text-gray-400" : isDone || isCurrent ? "bg-green text-white" : "bg-gray-200 text-gray-400"}">
                                        ${isDone || isCurrent ? "✓" : i + 1}
                                    </div>
                                    ${i < statusSteps.length - 1 ? `<div class="flex-1 h-0.5 ${isDone && i < statusIndex ? "bg-green" : "bg-gray-200"}"></div>` : ""}
                                </div>
                            `;
                        })
                        .join("")}
                </div>
                <div class="flex justify-between mt-2">
                    <span class="text-[10px] text-slate">${stepLabel(statusSteps, statusIndex, app.status)}</span>
                    <span class="text-[10px] text-slate">${formatDate(app.appliedDate)}</span>
                </div>
            </div>
        `;
    });
}

function stepLabel(steps, index, status) {
    if (status === "Rejected") return "Lamaran ditolak";
    if (status === "Offer") return "Selamat! Anda mendapatkan offer!";
    return `Tahap: ${status}`;
}

function formatDate(dateStr) {
    try {
        const d = new Date(dateStr);
        return d.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
    } catch {
        return dateStr;
    }
}

// ========== RENDER: PROFILE ==========
function renderProfile() {
    const container = document.getElementById("profile-content");
    if (!container) return;

    const p = appState.profile;
    const completion = getProfileCompletion();
    const skillList = (p.skills || []).join(" • ");

    container.innerHTML = `
        <div class="flex items-center justify-between mb-4">
            <h3 class="font-bold text-lg">My Profile</h3>
            <button class="modal-close-btn w-10 h-10 flex items-center justify-center text-slate hover:text-ink transition-colors rounded-xl focus:outline-none focus:ring-2 focus:ring-electric" data-close="profile" type="button" aria-label="Tutup">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        </div>
        <div class="flex items-center gap-4 mb-5">
            <div class="w-16 h-16 bg-electric/10 rounded-full flex items-center justify-center text-2xl font-bold text-electric">
                ${(p.name || "?").charAt(0)}
            </div>
            <div>
                <h4 class="font-bold text-ink text-lg">${p.name || "Nama Anda"}</h4>
                <p class="text-sm text-slate">${p.headline || "Headline Anda"}</p>
                <p class="text-xs text-slate mt-0.5">${p.location || "Lokasi"}</p>
            </div>
        </div>
        <div class="mb-4">
            <div class="flex items-center justify-between mb-1">
                <span class="text-xs font-semibold text-slate">Profile Completion</span>
                <span class="text-xs font-bold text-green">${completion}%</span>
            </div>
            <div class="progress-track">
                <div class="progress-fill" style="width: ${completion}%"></div>
            </div>
        </div>
        <div class="space-y-3 text-sm text-slate">
            <div>
                <p class="font-semibold text-ink text-xs uppercase tracking-wider mb-1">Bio</p>
                <p>${p.bio || "Tambahkan bio Anda."}</p>
            </div>
            <div>
                <p class="font-semibold text-ink text-xs uppercase tracking-wider mb-1">Skills</p>
                <p>${skillList || "Belum ada skills."}</p>
            </div>
        </div>
        <button id="profile-edit-btn" class="mt-5 w-full px-4 py-3 bg-electric text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors min-h-[44px]" type="button">
            Edit Profile
        </button>
    `;

    const editBtn = container.querySelector("#profile-edit-btn");
    if (editBtn) {
        editBtn.addEventListener("click", () => {
            closeModal("profile");
            openModal("profileEdit");
        });
    }
}

// ========== RENDER: EDIT PROFILE ==========
function renderProfileEdit() {
    const container = document.getElementById("profile-edit-content");
    if (!container) return;

    const p = appState.profile;

    container.innerHTML = `
        <div class="flex items-center justify-between mb-4">
            <h3 class="font-bold text-lg">Edit Profile</h3>
            <button class="modal-close-btn w-10 h-10 flex items-center justify-center text-slate hover:text-ink transition-colors rounded-xl focus:outline-none focus:ring-2 focus:ring-electric" data-close="profileEdit" type="button" aria-label="Tutup">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        </div>
        <form id="profile-edit-form" class="space-y-4">
            <div>
                <label class="form-label" for="edit-name">Name</label>
                <input id="edit-name" class="form-input" type="text" value="${p.name || ""}" />
            </div>
            <div>
                <label class="form-label" for="edit-headline">Headline</label>
                <input id="edit-headline" class="form-input" type="text" value="${p.headline || ""}" />
            </div>
            <div>
                <label class="form-label" for="edit-location">Location</label>
                <input id="edit-location" class="form-input" type="text" value="${p.location || ""}" />
            </div>
            <div>
                <label class="form-label" for="edit-bio">Bio</label>
                <textarea id="edit-bio" class="form-input" rows="3">${p.bio || ""}</textarea>
            </div>
            <div>
                <label class="form-label" for="edit-skills">Skills (pisahkan dengan koma)</label>
                <input id="edit-skills" class="form-input" type="text" value="${(p.skills || []).join(", ")}" />
            </div>
            <button type="submit" class="w-full px-4 py-3 bg-electric text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors min-h-[44px]">
                Save Profile
            </button>
        </form>
    `;

    const form = container.querySelector("#profile-edit-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = form.querySelector("#edit-name").value.trim();
            const headline = form.querySelector("#edit-headline").value.trim();
            const location = form.querySelector("#edit-location").value.trim();
            const bio = form.querySelector("#edit-bio").value.trim();
            const skillsRaw = form.querySelector("#edit-skills").value.trim();

            if (!name || !headline) {
                showToast("Nama dan headline wajib diisi.");
                return;
            }

            const skills = skillsRaw
                ? skillsRaw.split(",").map((s) => s.trim()).filter((s) => s)
                : [];

            appState.profile = { ...appState.profile, name, headline, location, bio, skills };
            saveState();
            renderDashboard();
            closeModal("profileEdit");
            showToast("Profil berhasil diperbarui.");
        });
    }
}

// ========== RENDER: NOTIFICATIONS ==========
function renderNotifications() {
    const container = document.getElementById("notifications-content");
    if (!container) return;

    container.innerHTML = `
        <div class="flex items-center justify-between mb-4">
            <h3 class="font-bold text-lg">Notifications</h3>
            <button class="modal-close-btn w-10 h-10 flex items-center justify-center text-slate hover:text-ink transition-colors rounded-xl focus:outline-none focus:ring-2 focus:ring-electric" data-close="notifications" type="button" aria-label="Tutup">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        </div>
    `;

    if (appState.notifications.length === 0) {
        container.innerHTML += `<p class="text-sm text-slate text-center py-8">Tidak ada notifikasi.</p>`;
    } else {
        appState.notifications.forEach((notif) => {
            container.innerHTML += `
                <div class="flex items-start gap-3 py-3 border-b border-border last:border-0">
                    <div class="w-8 h-8 rounded-full bg-softblue flex items-center justify-center text-electric text-xs font-bold shrink-0 mt-0.5">
                        ${notif.type === "application" ? "A" : notif.type === "profile" ? "P" : "J"}
                    </div>
                    <p class="text-sm text-slate flex-1">${notif.message}</p>
                </div>
            `;
        });
    }

    appState.notifications.forEach((n) => (n.read = true));
    saveState();
    updateNotifBadge();
}

// ========== RENDER: COMPANY DETAIL ==========
function renderCompanyDetail(companyId) {
    const container = document.getElementById("company-detail-content");
    if (!container) return;
    const company = companiesData.find((c) => c.id === companyId);
    if (!company) return;

    const openJobs = appState.jobs.filter((j) => j.company === company.name);

    container.innerHTML = `
        <div class="flex items-center justify-between mb-4">
            <h3 class="font-bold text-lg">${company.name}</h3>
            <button class="modal-close-btn w-10 h-10 flex items-center justify-center text-slate hover:text-ink transition-colors rounded-xl focus:outline-none focus:ring-2 focus:ring-electric" data-close="companyDetail" type="button" aria-label="Tutup">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        </div>
        <div class="flex items-center gap-3 mb-4">
            ${getCompanyLogoHTML(company.name, company.logoColor, company.logo)}
            <div>
                <p class="font-semibold text-ink">${company.industry}</p>
                <p class="text-sm text-slate">${company.location} • ${company.size}</p>
            </div>
        </div>
        <p class="text-sm text-slate mb-4">${company.description}</p>
        <div>
            <h4 class="font-semibold text-ink text-sm mb-2">Open Positions (${openJobs.length})</h4>
            ${openJobs
                .map(
                    (job) => `
                <button class="w-full flex items-center justify-between py-3 border-b border-border last:border-0 hover:bg-offwhite transition-colors px-2 rounded-lg" data-company-job="${job.id}" type="button">
                    <span class="text-sm font-medium text-ink">${job.title}</span>
                    <span class="text-xs text-slate">${job.location}</span>
                </button>
            `
                )
                .join("")}
            ${openJobs.length === 0 ? '<p class="text-sm text-slate">Tidak ada lowongan terbuka saat ini.</p>' : ""}
        </div>
    `;

    container.querySelectorAll("[data-company-job]").forEach((btn) => {
        btn.addEventListener("click", () => {
            const jobId = parseInt(btn.getAttribute("data-company-job"), 10);
            appState.currentJobId = jobId;
            closeModal("companyDetail");
            openModal("jobDetail");
        });
    });
}

// ========== RENDER: RESOURCE DETAIL ==========
function renderResourceDetail(resourceId) {
    const container = document.getElementById("resource-detail-content");
    if (!container) return;
    const resource = resourcesData.find((r) => r.id === resourceId);
    if (!resource) return;

    container.innerHTML = `
        <div class="flex items-center justify-between mb-4">
            <h3 class="font-bold text-lg">${resource.title}</h3>
            <button class="modal-close-btn w-10 h-10 flex items-center justify-center text-slate hover:text-ink transition-colors rounded-xl focus:outline-none focus:ring-2 focus:ring-electric" data-close="resourceDetail" type="button" aria-label="Tutup">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        </div>
        <span class="job-badge badge-softblue mb-3">${resource.category}</span>
        <p class="text-sm text-slate mb-4">${resource.description}</p>
        <div class="text-sm text-slate leading-relaxed space-y-3">
            ${resource.content.split("\n").map((p) => `<p>${p}</p>`).join("")}
        </div>
    `;
}

// ========== RENDER: COMPANIES GRID ==========
function renderCompanies() {
    const container = document.getElementById("companies-container");
    if (!container) return;

    container.innerHTML = companiesData
        .map(
            (company) => `
        <button class="bg-white rounded-2xl border border-border p-5 text-left hover:shadow-md transition-shadow min-h-[44px]" data-company-id="${company.id}" type="button" aria-label="Lihat detail ${company.name}">
            <div class="flex items-center gap-3 mb-3">
                ${getCompanyLogoHTML(company.name, company.logoColor, company.logo)}
                <div>
                    <h4 class="font-semibold text-ink">${company.name}</h4>
                    <p class="text-xs text-slate">${company.industry} • ${company.location}</p>
                </div>
            </div>
            <p class="text-xs text-slate line-clamp-2 mb-2">${company.description}</p>
            <p class="text-xs font-semibold text-electric">${company.openJobs} lowongan terbuka</p>
        </button>
    `
        )
        .join("");

    container.querySelectorAll("[data-company-id]").forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.getAttribute("data-company-id"), 10);
            appState.currentCompanyId = id;
            openModal("companyDetail");
        });
    });
}

// ========== RENDER: RESOURCES GRID ==========
function renderResources() {
    const container = document.getElementById("resources-container");
    if (!container) return;

    container.innerHTML = resourcesData
        .map(
            (res) => `
        <button class="bg-white rounded-2xl border border-border p-5 text-left hover:shadow-md transition-shadow min-h-[44px]" data-resource-id="${res.id}" type="button" aria-label="Buka ${res.title}">
            <span class="job-badge badge-violet mb-2">${res.category}</span>
            <h4 class="font-semibold text-ink mb-1">${res.title}</h4>
            <p class="text-xs text-slate">${res.description}</p>
        </button>
    `
        )
        .join("");

    container.querySelectorAll("[data-resource-id]").forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.getAttribute("data-resource-id"), 10);
            appState.currentResourceId = id;
            openModal("resourceDetail");
        });
    });
}

// ========== RENDER: RECOMMENDATIONS ==========
function renderRecommendations() {
    const container = document.getElementById("recommendations-container");
    if (!container) return;

    const recommendations = getRecommendations();
    if (recommendations.length === 0) {
        container.innerHTML =
            '<p class="text-slate text-sm col-span-full text-center py-6">Belum ada rekomendasi. Lengkapi profil Anda.</p>';
        return;
    }

    container.innerHTML = recommendations
        .map((job) => {
            const isSaved = appState.savedJobs.includes(job.id);
            const company = getCompanyByName(job.company);
            const logoColor = company ? company.logoColor : "#3867F2";
            const logoPath = job.logo || company?.logo || "";
            return `
            <article class="job-card" data-job-id="${job.id}" tabindex="0" role="button" aria-label="${job.title} di ${job.company}">
                <div class="flex items-start gap-3">
                    ${getCompanyLogoHTML(job.company, logoColor, logoPath)}
                    <div class="flex-1 min-w-0">
                        <h3 class="job-title truncate">${job.title}</h3>
                        <p class="job-company">${job.company}</p>
                    </div>
                    <button class="save-btn ${isSaved ? "saved" : ""}" data-save-id="${job.id}" aria-label="${isSaved ? "Hapus dari tersimpan" : "Simpan pekerjaan"}" type="button">
                        <svg class="w-5 h-5 ${isSaved ? "text-red fill-current" : "text-slate"}" fill="${isSaved ? "currentColor" : "none"}" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
                    </button>
                </div>
                <div class="flex flex-wrap gap-1.5 text-xs">
                    <span class="job-badge badge-softblue">${job.experience}</span>
                    <span class="job-badge badge-gray">${job.type}</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                    <span class="text-slate">${job.location}</span>
                    <span class="font-semibold text-ink">${job.salary}</span>
                </div>
                <button class="apply-btn px-4 py-2 bg-electric text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-colors min-h-[36px] w-full" data-apply-id="${job.id}" type="button">
                    Apply
                </button>
            </article>
        `;
        })
        .join("");

    container.querySelectorAll(".job-card").forEach((card) => {
        card.addEventListener("click", (e) => {
            if (e.target.closest(".save-btn") || e.target.closest(".apply-btn")) return;
            const id = parseInt(card.getAttribute("data-job-id"), 10);
            appState.currentJobId = id;
            openModal("jobDetail");
        });
    });
    container.querySelectorAll(".save-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute("data-save-id"), 10);
            toggleSaveJob(id);
            renderRecommendations();
        });
    });
    container.querySelectorAll(".apply-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute("data-apply-id"), 10);
            appState.currentJobId = id;
            openModal("apply");
        });
    });
}

// ========== RENDER: DASHBOARD & NOTIF BADGE ==========
function renderDashboard() {
    const appCount = document.getElementById("dash-applications");
    const savedCount = document.getElementById("dash-saved");
    const profilePct = document.getElementById("dash-profile");
    const interviewCount = document.getElementById("dash-interviews");

    if (appCount) appCount.textContent = appState.applications.length;
    if (savedCount) savedCount.textContent = appState.savedJobs.length;
    if (profilePct) profilePct.textContent = getProfileCompletion() + "%";
    if (interviewCount) interviewCount.textContent = getInterviewCount();
}

function updateNotifBadge() {
    const badge = document.getElementById("notif-badge");
    if (!badge) return;
    const unread = appState.notifications.filter((n) => !n.read).length;
    if (unread > 0) {
        badge.textContent = unread;
        badge.classList.remove("hidden");
        badge.classList.add("flex");
    } else {
        badge.classList.add("hidden");
        badge.classList.remove("flex");
    }
}

// ========== ACTIONS ==========
function toggleSaveJob(jobId) {
    const index = appState.savedJobs.indexOf(jobId);
    if (index > -1) {
        appState.savedJobs.splice(index, 1);
        showToast("Job dihapus dari saved.");
    } else {
        appState.savedJobs.push(jobId);
        showToast("Job disimpan.");
    }
    saveState();
    renderJobs();
    renderDashboard();
    renderRecommendations();
}

function resetDemoData() {
    if (confirm("Reset semua data demo? Data Anda akan dihapus.")) {
        localStorage.removeItem(STORAGE_KEY);
        appState = {
            jobs: [...jobsData],
            savedJobs: [],
            applications: [],
            profile: { ...defaultProfile },
            notifications: [...defaultNotifications],
            activeFilters: {
                location: "",
                categories: [],
                salary: "",
                types: [],
                workplaces: [],
                experiences: [],
            },
            searchQuery: "",
            sortBy: "relevance",
            currentJobId: null,
            currentCompanyId: null,
            currentResourceId: null,
        };
        seedSampleApplications();
        closeAllModals();
        renderAll();
        showToast("Data demo direset.");
    }
}

// ========== EVENT SETUP ==========
function setupEvents() {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener("click", () => {
            openModal("mobileDrawer");
        });
    }

    const notifBtn = document.getElementById("notification-btn");
    if (notifBtn) {
        notifBtn.addEventListener("click", () => {
            openModal("notifications");
        });
    }

    const mobileSearchBtn = document.getElementById("mobile-search-btn");
    if (mobileSearchBtn) {
        mobileSearchBtn.addEventListener("click", () => {
            document.getElementById("jobs").scrollIntoView({ behavior: "smooth" });
            const searchInput = document.getElementById("hero-search-input");
            if (searchInput) searchInput.focus();
        });
    }

    const navApplications = document.getElementById("nav-applications");
    if (navApplications) {
        navApplications.addEventListener("click", () => openModal("applications"));
    }
    const navSaved = document.getElementById("nav-saved");
    if (navSaved) {
        navSaved.addEventListener("click", () => openModal("savedJobs"));
    }
    const navProfileDesktop = document.getElementById("nav-profile-desktop");
    if (navProfileDesktop) {
        navProfileDesktop.addEventListener("click", () => openModal("profile"));
    }

    document.querySelectorAll(".drawer-link").forEach((link) => {
        link.addEventListener("click", () => {
            const action = link.getAttribute("data-action");
            closeModal("mobileDrawer");
            if (action === "find-jobs") {
                document.getElementById("jobs").scrollIntoView({ behavior: "smooth" });
            } else if (action === "companies") {
                document.getElementById("companies").scrollIntoView({ behavior: "smooth" });
            } else if (action === "resources") {
                document.getElementById("resources").scrollIntoView({ behavior: "smooth" });
            } else if (action === "applications") {
                openModal("applications");
            } else if (action === "saved-jobs") {
                openModal("savedJobs");
            } else if (action === "profile") {
                openModal("profile");
            }
        });
    });

    document.querySelectorAll(".bottom-nav-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const action = btn.getAttribute("data-action");
            document.querySelectorAll(".bottom-nav-btn").forEach((b) => {
                b.classList.remove("text-electric");
                b.classList.add("text-slate");
            });
            btn.classList.add("text-electric");
            btn.classList.remove("text-slate");

            if (action === "home") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else if (action === "search") {
                document.getElementById("jobs").scrollIntoView({ behavior: "smooth" });
                const searchInput = document.getElementById("hero-search-input");
                if (searchInput) searchInput.focus();
            } else if (action === "saved") {
                openModal("savedJobs");
            } else if (action === "applications") {
                openModal("applications");
            } else if (action === "profile") {
                openModal("profile");
            }
        });
    });

    const heroForm = document.getElementById("hero-search-form");
    if (heroForm) {
        heroForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const searchInput = document.getElementById("hero-search-input");
            const locationInput = document.getElementById("hero-location-input");
            if (searchInput) appState.searchQuery = searchInput.value;
            if (locationInput && locationInput.value.trim()) {
                appState.activeFilters.location = locationInput.value.trim();
            }
            saveState();
            renderJobs();
            renderFilterOptions();
            document.getElementById("jobs").scrollIntoView({ behavior: "smooth" });
        });
    }

    document.querySelectorAll(".quick-cat").forEach((btn) => {
        btn.addEventListener("click", () => {
            const cat = btn.getAttribute("data-category");
            const searchInput = document.getElementById("hero-search-input");
            if (searchInput) searchInput.value = cat;
            appState.searchQuery = cat;
            saveState();
            renderJobs();
            document.getElementById("jobs").scrollIntoView({ behavior: "smooth" });
        });
    });

    const sortSelect = document.getElementById("sort-select");
    if (sortSelect) {
        sortSelect.addEventListener("change", () => {
            appState.sortBy = sortSelect.value;
            saveState();
            renderJobs();
        });
    }

    const mobileFilterBtn = document.getElementById("mobile-filter-btn");
    if (mobileFilterBtn) {
        mobileFilterBtn.addEventListener("click", () => {
            openModal("filterDrawer");
        });
    }

    const filterLocation = document.getElementById("filter-location");
    if (filterLocation) {
        filterLocation.addEventListener("change", () => {
            appState.activeFilters.location = filterLocation.value;
            saveState();
            renderJobs();
            renderFilterOptions();
        });
    }

    const filterSalary = document.getElementById("filter-salary");
    if (filterSalary) {
        filterSalary.addEventListener("change", () => {
            appState.activeFilters.salary = filterSalary.value;
            saveState();
            renderJobs();
            renderFilterOptions();
        });
    }

    const clearFiltersDesktop = document.getElementById("clear-filters-desktop");
    if (clearFiltersDesktop) {
        clearFiltersDesktop.addEventListener("click", clearAllFilters);
    }

    const resetBtn = document.getElementById("reset-demo");
    if (resetBtn) {
        resetBtn.addEventListener("click", resetDemoData);
    }

    document.addEventListener("change", (e) => {
        if (e.target.matches('input[type="checkbox"][data-filter]')) {
            const filterKey = e.target.getAttribute("data-filter");
            const value = e.target.value;
            if (e.target.checked) {
                if (!appState.activeFilters[filterKey].includes(value)) {
                    appState.activeFilters[filterKey].push(value);
                }
            } else {
                appState.activeFilters[filterKey] = appState.activeFilters[filterKey].filter(
                    (v) => v !== value
                );
            }
            saveState();
            renderJobs();
            renderFilterOptions();
        }
    });
}

// ========== RENDER ALL ==========
function renderAll() {
    renderJobs();
    renderFilterOptions();
    renderRecommendations();
    renderCompanies();
    renderResources();
    renderDashboard();
    updateNotifBadge();
}

// ========== INITIALIZATION ==========
function init() {
    loadState();
    initModalRegistry();
    setupEvents();
    renderAll();
    closeAllModals();
    document.body.style.overflow = "";
    console.log("VANTA — Find Work That Moves You.");
    console.log("Application initialized successfully.");
}

document.addEventListener("DOMContentLoaded", init);