/* ============================================
   AHMAD WILDAN — ACADEMIC PORTFOLIO
   JavaScript Vanilla — Full Interactivity
   ============================================ */

(function () {
    'use strict';

    /* ===== DOM REFERENCES ===== */
    const htmlElement = document.documentElement;
    const body = document.body;
    const header = document.querySelector('.site-header');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const themeToggle = document.getElementById('themeToggle');
    const langToggle = document.getElementById('langToggle');
    const langDropdown = document.getElementById('langDropdown');
    const langCurrent = document.getElementById('langCurrent');
    const langOptions = document.querySelectorAll('.lang-option');
    const certModal = document.getElementById('certModal');
    const certModalClose = document.getElementById('certModalClose');
    const certModalBody = document.getElementById('certModalBody');
    const certModalTitle = document.getElementById('certModalTitle');
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');
    const currentYearSpan = document.getElementById('currentYear');
    const certificatesGrid = document.getElementById('certificatesGrid');

    /* ===== STATE ===== */
    let currentLanguage = 'id';
    let isDarkMode = localStorage.getItem('aw-dark-mode') === 'true';
    let isModalOpen = false;

    /* ===== TRANSLATIONS ===== */
    const translations = {
        id: {
            // Navigation
            navName: 'Ahmad Wildan',
            navHome: 'Beranda',
            navAbout: 'Tentang',
            navHighlights: 'Prestasi',
            navEducation: 'Pendidikan',
            navLanguages: 'Bahasa',
            navInternational: 'Internasional',
            navCertificates: 'Sertifikat',
            navContact: 'Kontak',
            skipLink: 'Lewati ke konten utama',

            // Hero
            heroLabel: 'Portofolio Akademik',
            heroSubtitle: 'Academic Portfolio',
            heroDescription: 'Pembelajar multidisiplin yang berfokus pada studi Arab, bahasa, pengembangan akademik, dan keterampilan digital — dengan aspirasi internasional.',
            heroCtaContact: 'Hubungi Saya',
            heroCtaHighlights: 'Lihat Prestasi',

            // Stats
            statAcademic: 'Rata-rata Akademik',
            statSemester: 'Rata-rata Kelas 12 Semester 1',
            statToefl: 'TOEFL',
            statGpa: 'IPK Diploma Syariah',

            // About
            aboutEyebrow: 'Profil',
            aboutTitle: 'Tentang Saya',
            aboutP1: 'Saya adalah lulusan MA Al Irsyad PIAT 7 dengan fokus pada pengembangan akademik, bahasa, dan keterampilan digital. Perjalanan akademik saya dibangun di atas fondasi studi Islam yang kuat, diperluas dengan kompetisi sains dan bahasa, serta diperkaya dengan pembelajaran teknologi.',
            aboutP2: 'Saat ini saya mengikuti program Diploma Syariah di Markaz Ulum, belajar melalui Zad Academy, serta telah diterima di University of Sousse untuk program Sastra Arab. Fokus saya adalah membangun profil akademik yang kuat untuk studi internasional dan kontribusi di bidang pendidikan bahasa Arab.',
            aboutP3: 'Saya juga aktif mengembangkan kemampuan bahasa — Arab, Inggris, Mandarin, Korea, dan Jepang — serta mempelajari dasar-dasar pengembangan web melalui Rumah IT Indonesia. Saya percaya pada pembelajaran berkelanjutan dan persiapan yang matang untuk setiap langkah.',
            aboutCardTitle: 'Fokus Pengembangan',
            aboutList1: 'Studi Arab & Literatur Arab',
            aboutList2: 'Pembelajaran Multibahasa',
            aboutList3: 'Pengembangan Akademik Berkelanjutan',
            aboutList4: 'Dasar Pengembangan Web',
            aboutList5: 'Persiapan Studi Internasional',

            // Highlights
            highlightsEyebrow: 'Pencapaian',
            highlightsTitle: 'Academic Highlights',
            highlightAcademic: 'Rata-rata Akademik',
            highlightAcademicDetail: 'MA Al Irsyad PIAT 7',
            highlightSemester: 'Rata-rata Kelas 12 Semester 1',
            highlightSemesterDetail: 'Nilai tertinggi akademik',
            highlightUts: 'Markaz Ulum UTS',
            highlightUtsDetail: 'Diploma Syariah',
            highlightGpa: 'IPK — Diploma Syariah',
            highlightGpaDetail: 'Summa Cum Laude',
            highlightToefl: 'TOEFL',
            highlightToeflDetail: 'English Proficiency',
            highlightArabic: 'Bahasa Arab — Hamzah',
            highlightArabicDetail: 'Sertifikasi Resmi',

            // Education
            educationEyebrow: 'Perjalanan',
            educationTitle: 'Pendidikan',
            eduSchool: 'MA Al Irsyad PIAT 7',
            eduSchoolStatus: 'Lulus',
            eduSchoolDesc: 'Fokus pada pengembangan akademik, kompetisi sains dan bahasa',
            eduCompetition: 'Kompetisi & Pengembangan Akademik',
            eduCompetitionStatus: 'Prestasi Nasional & Regional',
            eduCompetitionDesc: 'KSN IPA, Olimpiade Bahasa Arab tingkat daerah dan provinsi',
            eduMarkaz: 'Markaz Ulum',
            eduMarkazStatus: 'Sedang Berlangsung',
            eduMarkazDesc: 'Diploma Syariah — IPK 4,00 — Summa Cum Laude',
            eduZad: 'Zad Academy',
            eduZadStatus: 'Sedang Berlangsung',
            eduZadDesc: 'Sedang mengikuti pembelajaran',
            eduSousse: 'University of Sousse',
            eduSousseStatus: 'ACCEPTED',
            eduSousseDesc: 'Program Sastra Arab / Arabic Literature',
            eduFuture: 'International Academic Development',
            eduFutureStatus: 'Berkelanjutan',
            eduFutureDesc: 'Persiapan studi internasional dan pengembangan profesional',

            // Competitions
            compEyebrow: 'Kompetisi',
            compTitle: 'Pengalaman Kompetisi',
            compKsnBadge: 'KSN — IPA',
            compKsnTitle: 'Kompetisi Sains Nasional',
            compKsnLevel: 'Tingkat MTs — Bidang IPA',
            compKsnResult: 'Juara Harapan 2',
            compObaBadge: 'OBA',
            compObaTitle: 'Olimpiade Bahasa Arab',
            compObaLevel: 'Tingkat SMA',
            compObaResult: 'Juara 2 — Batu',
            compObaProvBadge: 'OBA Provinsi',
            compObaProvTitle: 'Olimpiade Bahasa Arab',
            compObaProvLevel: 'Tingkat Provinsi',
            compObaProvResult: 'Peringkat 5',
            resultLabel: 'Hasil:',

            // Languages
            langEyebrow: 'Komunikasi',
            langTitle: 'Languages',
            langSubtitle: 'Language & International Communication',
            langMandarin: 'Basic',
            langBasic: 'Basic',

            // International
            intlEyebrow: 'Global',
            intlTitle: 'International Direction',
            intlSousseDesc: 'Diterima untuk program Sastra Arab di Tunisia',
            intlProgressBadge: 'Application in Progress',
            intlSaudiTitle: 'Study in Saudi',
            intlSaudiSubtitle: 'Dalam proses pemberkasan',
            intlSaudiDesc: 'Persiapan dokumen dan persyaratan',
            intlLangBadge: 'Languages',
            intlLangTitle: 'Multilingual',
            intlLangDesc: 'Pengembangan kemampuan komunikasi internasional',

            // Skills
            skillsEyebrow: 'Teknologi',
            skillsTitle: 'Digital Skills',
            skillsFoundation: 'Learning Foundation — Rumah IT Indonesia',
            skillsNote: 'Foundational Web Development',

            // Certificates
            certEyebrow: 'Bukti',
            certTitle: 'Certificates & Credentials',
            certPlaceholder: 'Certificate image will be added',
            certModalTitle: 'Sertifikat',

            // CV
            cvEyebrow: 'Curriculum Vitae',
            cvTitle: 'CV Saya',
            cvView: 'Lihat CV',

            // Contact
            contactEyebrow: 'Kontak',
            contactTitle: 'Mari Terhubung',
            contactInfoTitle: 'Informasi Kontak',
            contactWhatsapp: 'WhatsApp',
            formName: 'Nama',
            formNamePlaceholder: 'Masukkan nama Anda',
            formEmail: 'Email',
            formEmailPlaceholder: 'Masukkan alamat email Anda',
            formMessage: 'Pesan',
            formMessagePlaceholder: 'Tulis pesan Anda di sini...',
            formSubmit: 'Kirim Pesan',
            formSending: 'Mengirim...',
            formSuccess: 'Pesan berhasil dikirim! Terima kasih telah menghubungi saya.',
            formError: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.',
            formValidationName: 'Nama minimal 2 karakter.',
            formValidationEmail: 'Masukkan alamat email yang valid.',
            formValidationMessage: 'Pesan minimal 10 karakter.',

            // Footer
            footerTagline: 'Multilingual Academic Learner · International Education',
            footerRights: 'Semua hak dilindungi.',
            modalClose: 'Tutup modal',
        },

        en: {
            // Navigation
            navName: 'Ahmad Wildan',
            navHome: 'Home',
            navAbout: 'About',
            navHighlights: 'Highlights',
            navEducation: 'Education',
            navLanguages: 'Languages',
            navInternational: 'International',
            navCertificates: 'Certificates',
            navContact: 'Contact',
            skipLink: 'Skip to main content',

            // Hero
            heroLabel: 'Academic Portfolio',
            heroSubtitle: 'Academic Portfolio',
            heroDescription: 'A multidisciplinary learner focused on Arabic studies, languages, academic development, and digital skills — with international aspirations.',
            heroCtaContact: 'Contact Me',
            heroCtaHighlights: 'View Highlights',

            // Stats
            statAcademic: 'Academic Average',
            statSemester: 'Grade 12 Semester 1 Average',
            statToefl: 'TOEFL',
            statGpa: 'GPA — Diploma Syariah',

            // About
            aboutEyebrow: 'Profile',
            aboutTitle: 'About Me',
            aboutP1: 'I am a graduate of MA Al Irsyad PIAT 7 with a focus on academic development, languages, and digital skills. My academic journey is built on a strong foundation of Islamic studies, expanded through science and language competitions, and enriched with technology learning.',
            aboutP2: 'I am currently enrolled in the Diploma Syariah program at Markaz Ulum, studying through Zad Academy, and have been accepted to the University of Sousse for the Arabic Literature program. My focus is building a strong academic profile for international study and contribution in Arabic language education.',
            aboutP3: 'I am also actively developing language skills — Arabic, English, Mandarin, Korean, and Japanese — and learning the fundamentals of web development through Rumah IT Indonesia. I believe in continuous learning and thorough preparation for every step.',
            aboutCardTitle: 'Development Focus',
            aboutList1: 'Arabic Studies & Literature',
            aboutList2: 'Multilingual Learning',
            aboutList3: 'Continuous Academic Development',
            aboutList4: 'Web Development Fundamentals',
            aboutList5: 'International Study Preparation',

            // Highlights
            highlightsEyebrow: 'Achievements',
            highlightsTitle: 'Academic Highlights',
            highlightAcademic: 'Academic Average',
            highlightAcademicDetail: 'MA Al Irsyad PIAT 7',
            highlightSemester: 'Grade 12 Semester 1 Average',
            highlightSemesterDetail: 'Highest academic achievement',
            highlightUts: 'Markaz Ulum UTS',
            highlightUtsDetail: 'Diploma Syariah',
            highlightGpa: 'GPA — Diploma Syariah',
            highlightGpaDetail: 'Summa Cum Laude',
            highlightToefl: 'TOEFL',
            highlightToeflDetail: 'English Proficiency',
            highlightArabic: 'Arabic — Hamzah',
            highlightArabicDetail: 'Official Certification',

            // Education
            educationEyebrow: 'Journey',
            educationTitle: 'Education',
            eduSchool: 'MA Al Irsyad PIAT 7',
            eduSchoolStatus: 'Graduated',
            eduSchoolDesc: 'Focus on academic development, science and language competitions',
            eduCompetition: 'Competitions & Academic Development',
            eduCompetitionStatus: 'National & Regional Achievements',
            eduCompetitionDesc: 'KSN IPA, Arabic Language Olympiad at district and provincial level',
            eduMarkaz: 'Markaz Ulum',
            eduMarkazStatus: 'In Progress',
            eduMarkazDesc: 'Diploma Syariah — GPA 4.00 — Summa Cum Laude',
            eduZad: 'Zad Academy',
            eduZadStatus: 'In Progress',
            eduZadDesc: 'Currently enrolled in learning',
            eduSousse: 'University of Sousse',
            eduSousseStatus: 'ACCEPTED',
            eduSousseDesc: 'Arabic Literature Program',
            eduFuture: 'International Academic Development',
            eduFutureStatus: 'Ongoing',
            eduFutureDesc: 'International study preparation and professional development',

            // Competitions
            compEyebrow: 'Competitions',
            compTitle: 'Competition Experience',
            compKsnBadge: 'KSN — IPA',
            compKsnTitle: 'National Science Competition',
            compKsnLevel: 'MTs Level — Science Field',
            compKsnResult: '3rd Place (Harapan 2)',
            compObaBadge: 'OBA',
            compObaTitle: 'Arabic Language Olympiad',
            compObaLevel: 'High School Level',
            compObaResult: '2nd Place — Batu',
            compObaProvBadge: 'OBA Provincial',
            compObaProvTitle: 'Arabic Language Olympiad',
            compObaProvLevel: 'Provincial Level',
            compObaProvResult: '5th Place',
            resultLabel: 'Result:',

            // Languages
            langEyebrow: 'Communication',
            langTitle: 'Languages',
            langSubtitle: 'Language & International Communication',
            langMandarin: 'Basic',
            langBasic: 'Basic',

            // International
            intlEyebrow: 'Global',
            intlTitle: 'International Direction',
            intlSousseDesc: 'Accepted for Arabic Literature program in Tunisia',
            intlProgressBadge: 'Application in Progress',
            intlSaudiTitle: 'Study in Saudi',
            intlSaudiSubtitle: 'Document processing in progress',
            intlSaudiDesc: 'Preparing documents and requirements',
            intlLangBadge: 'Languages',
            intlLangTitle: 'Multilingual',
            intlLangDesc: 'Developing international communication skills',

            // Skills
            skillsEyebrow: 'Technology',
            skillsTitle: 'Digital Skills',
            skillsFoundation: 'Learning Foundation — Rumah IT Indonesia',
            skillsNote: 'Foundational Web Development',

            // Certificates
            certEyebrow: 'Evidence',
            certTitle: 'Certificates & Credentials',
            certPlaceholder: 'Certificate image will be added',
            certModalTitle: 'Certificate',

            // CV
            cvEyebrow: 'Curriculum Vitae',
            cvTitle: 'My CV',
            cvView: 'View CV',

            // Contact
            contactEyebrow: 'Contact',
            contactTitle: "Let's Connect",
            contactInfoTitle: 'Contact Information',
            contactWhatsapp: 'WhatsApp',
            formName: 'Name',
            formNamePlaceholder: 'Enter your name',
            formEmail: 'Email',
            formEmailPlaceholder: 'Enter your email address',
            formMessage: 'Message',
            formMessagePlaceholder: 'Write your message here...',
            formSubmit: 'Send Message',
            formSending: 'Sending...',
            formSuccess: 'Message sent successfully! Thank you for reaching out.',
            formError: 'An error occurred while sending your message. Please try again.',
            formValidationName: 'Name must be at least 2 characters.',
            formValidationEmail: 'Please enter a valid email address.',
            formValidationMessage: 'Message must be at least 10 characters.',

            // Footer
            footerTagline: 'Multilingual Academic Learner · International Education',
            footerRights: 'All rights reserved.',
            modalClose: 'Close modal',
        },

        ar: {
            // Navigation
            navName: 'أحمد ولدان الشفاء',
            navHome: 'الرئيسية',
            navAbout: 'نبذة',
            navHighlights: 'الإنجازات',
            navEducation: 'التعليم',
            navLanguages: 'اللغات',
            navInternational: 'دولي',
            navCertificates: 'الشهادات',
            navContact: 'اتصال',
            skipLink: 'تخطي إلى المحتوى الرئيسي',

            // Hero
            heroLabel: 'الملف الأكاديمي',
            heroSubtitle: 'الملف الأكاديمي',
            heroDescription: 'متعلم متعدد التخصصات يركز على الدراسات العربية واللغات والتطوير الأكاديمي والمهارات الرقمية — مع طموحات دولية.',
            heroCtaContact: 'اتصل بي',
            heroCtaHighlights: 'عرض الإنجازات',

            // Stats
            statAcademic: 'المعدل الأكاديمي',
            statSemester: 'معدل الصف 12 الفصل 1',
            statToefl: 'TOEFL',
            statGpa: 'المعدل — دبلوم الشريعة',

            // About
            aboutEyebrow: 'الملف الشخصي',
            aboutTitle: 'نبذة عني',
            aboutP1: 'أنا خريج MA Al Irsyad PIAT 7 مع التركيز على التطوير الأكاديمي واللغات والمهارات الرقمية. رحلتي الأكاديمية مبنية على أساس قوي من الدراسات الإسلامية، موسعة من خلال المسابقات العلمية واللغوية، ومثراة بتعلم التكنولوجيا.',
            aboutP2: 'أنا حالياً مسجل في برنامج دبلوم الشريعة في Markaz Ulum، وأدرس عبر Zad Academy، وتم قبولي في جامعة سوسة لبرنامج الأدب العربي. تركيزي هو بناء ملف أكاديمي قوي للدراسة الدولية والمساهمة في تعليم اللغة العربية.',
            aboutP3: 'أنا أيضاً أطور بنشاط مهارات اللغة — العربية والإنجليزية والصينية والكورية واليابانية — وأتعلم أساسيات تطوير الويب من خلال Rumah IT Indonesia. أؤمن بالتعلم المستمر والتحضير الشامل لكل خطوة.',
            aboutCardTitle: 'مجالات التطوير',
            aboutList1: 'الدراسات العربية والأدب',
            aboutList2: 'التعلم متعدد اللغات',
            aboutList3: 'التطوير الأكاديمي المستمر',
            aboutList4: 'أساسيات تطوير الويب',
            aboutList5: 'التحضير للدراسة الدولية',

            // Highlights
            highlightsEyebrow: 'الإنجازات',
            highlightsTitle: 'أبرز الإنجازات الأكاديمية',
            highlightAcademic: 'المعدل الأكاديمي',
            highlightAcademicDetail: 'MA Al Irsyad PIAT 7',
            highlightSemester: 'معدل الصف 12 الفصل 1',
            highlightSemesterDetail: 'أعلى إنجاز أكاديمي',
            highlightUts: 'Markaz Ulum UTS',
            highlightUtsDetail: 'دبلوم الشريعة',
            highlightGpa: 'المعدل — دبلوم الشريعة',
            highlightGpaDetail: 'Summa Cum Laude',
            highlightToefl: 'TOEFL',
            highlightToeflDetail: 'الكفاءة في الإنجليزية',
            highlightArabic: 'العربية — حمزة',
            highlightArabicDetail: 'شهادة رسمية',

            // Education
            educationEyebrow: 'الرحلة',
            educationTitle: 'التعليم',
            eduSchool: 'MA Al Irsyad PIAT 7',
            eduSchoolStatus: 'تخرج',
            eduSchoolDesc: 'التركيز على التطوير الأكاديمي والمسابقات العلمية واللغوية',
            eduCompetition: 'المسابقات والتطوير الأكاديمي',
            eduCompetitionStatus: 'إنجازات وطنية وإقليمية',
            eduCompetitionDesc: 'KSN IPA، أولمبياد اللغة العربية على مستوى المنطقة والمحافظة',
            eduMarkaz: 'Markaz Ulum',
            eduMarkazStatus: 'قيد التنفيذ',
            eduMarkazDesc: 'دبلوم الشريعة — المعدل 4.00 — Summa Cum Laude',
            eduZad: 'Zad Academy',
            eduZadStatus: 'قيد التنفيذ',
            eduZadDesc: 'مسجل حالياً في التعلم',
            eduSousse: 'جامعة سوسة',
            eduSousseStatus: 'مقبول',
            eduSousseDesc: 'برنامج الأدب العربي',
            eduFuture: 'التطوير الأكاديمي الدولي',
            eduFutureStatus: 'مستمر',
            eduFutureDesc: 'التحضير للدراسة الدولية والتطوير المهني',

            // Competitions
            compEyebrow: 'المسابقات',
            compTitle: 'خبرة المسابقات',
            compKsnBadge: 'KSN — علوم',
            compKsnTitle: 'المسابقة الوطنية للعلوم',
            compKsnLevel: 'مستوى MTs — مجال العلوم',
            compKsnResult: 'المركز 3 (Harapan 2)',
            compObaBadge: 'OBA',
            compObaTitle: 'أولمبياد اللغة العربية',
            compObaLevel: 'مستوى الثانوية',
            compObaResult: 'المركز 2 — Batu',
            compObaProvBadge: 'OBA المحافظة',
            compObaProvTitle: 'أولمبياد اللغة العربية',
            compObaProvLevel: 'مستوى المحافظة',
            compObaProvResult: 'المركز 5',
            resultLabel: 'النتيجة:',

            // Languages
            langEyebrow: 'التواصل',
            langTitle: 'اللغات',
            langSubtitle: 'اللغة والتواصل الدولي',
            langMandarin: 'أساسي',
            langBasic: 'أساسي',

            // International
            intlEyebrow: 'عالمي',
            intlTitle: 'الاتجاه الدولي',
            intlSousseDesc: 'مقبول لبرنامج الأدب العربي في تونس',
            intlProgressBadge: 'الطلب قيد التقدم',
            intlSaudiTitle: 'الدراسة في السعودية',
            intlSaudiSubtitle: 'معالجة المستندات قيد التقدم',
            intlSaudiDesc: 'تحضير المستندات والمتطلبات',
            intlLangBadge: 'اللغات',
            intlLangTitle: 'متعدد اللغات',
            intlLangDesc: 'تطوير مهارات التواصل الدولي',

            // Skills
            skillsEyebrow: 'التقنية',
            skillsTitle: 'المهارات الرقمية',
            skillsFoundation: 'أساس التعلم — Rumah IT Indonesia',
            skillsNote: 'تطوير الويب الأساسي',

            // Certificates
            certEyebrow: 'الأدلة',
            certTitle: 'الشهادات والمؤهلات',
            certPlaceholder: 'سيتم إضافة صورة الشهادة',
            certModalTitle: 'شهادة',

            // CV
            cvEyebrow: 'السيرة الذاتية',
            cvTitle: 'سيرتي الذاتية',
            cvView: 'عرض السيرة الذاتية',

            // Contact
            contactEyebrow: 'اتصال',
            contactTitle: 'لنتواصل',
            contactInfoTitle: 'معلومات الاتصال',
            contactWhatsapp: 'واتساب',
            formName: 'الاسم',
            formNamePlaceholder: 'أدخل اسمك',
            formEmail: 'البريد الإلكتروني',
            formEmailPlaceholder: 'أدخل عنوان بريدك الإلكتروني',
            formMessage: 'الرسالة',
            formMessagePlaceholder: 'اكتب رسالتك هنا...',
            formSubmit: 'إرسال الرسالة',
            formSending: 'جارٍ الإرسال...',
            formSuccess: 'تم إرسال الرسالة بنجاح! شكراً لتواصلك معي.',
            formError: 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.',
            formValidationName: 'الاسم يجب أن يكون حرفين على الأقل.',
            formValidationEmail: 'يرجى إدخال عنوان بريد إلكتروني صالح.',
            formValidationMessage: 'الرسالة يجب أن تكون 10 أحرف على الأقل.',

            // Footer
            footerTagline: 'متعلم أكاديمي متعدد اللغات · تعليم دولي',
            footerRights: 'جميع الحقوق محفوظة.',
            modalClose: 'إغلاق النافذة',
        },

        zh: {
            // Navigation
            navName: 'Ahmad Wildan',
            navHome: '首页',
            navAbout: '关于',
            navHighlights: '成就',
            navEducation: '教育',
            navLanguages: '语言',
            navInternational: '国际',
            navCertificates: '证书',
            navContact: '联系',
            skipLink: '跳到主要内容',

            // Hero
            heroLabel: '学术作品集',
            heroSubtitle: '学术作品集',
            heroDescription: '多学科学习者，专注于阿拉伯研究、语言、学术发展和数字技能——具有国际抱负。',
            heroCtaContact: '联系我',
            heroCtaHighlights: '查看成就',

            // Stats
            statAcademic: '学术平均分',
            statSemester: '12年级第1学期平均分',
            statToefl: 'TOEFL',
            statGpa: 'GPA — 伊斯兰法学文凭',

            // About
            aboutEyebrow: '简介',
            aboutTitle: '关于我',
            aboutP1: '我是MA Al Irsyad PIAT 7的毕业生，专注于学术发展、语言和数字技能。我的学术旅程建立在坚实的伊斯兰研究基础上，通过科学和语言竞赛拓展，并通过技术学习丰富。',
            aboutP2: '我目前正在Markaz Ulum就读伊斯兰法学文凭课程，通过Zad Academy学习，并已被University of Sousse的阿拉伯文学专业录取。我的重点是建立强大的学术背景，为国际学习和阿拉伯语教育做出贡献。',
            aboutP3: '我还积极发展阿拉伯语、英语、中文、韩语和日语能力，并通过Rumah IT Indonesia学习Web开发基础知识。我相信持续学习和为每一步做好充分准备。',
            aboutCardTitle: '发展方向',
            aboutList1: '阿拉伯研究与文学',
            aboutList2: '多语言学习',
            aboutList3: '持续学术发展',
            aboutList4: 'Web开发基础',
            aboutList5: '国际学习准备',

            // Highlights
            highlightsEyebrow: '成就',
            highlightsTitle: '学术亮点',
            highlightAcademic: '学术平均分',
            highlightAcademicDetail: 'MA Al Irsyad PIAT 7',
            highlightSemester: '12年级第1学期平均分',
            highlightSemesterDetail: '最高学术成就',
            highlightUts: 'Markaz Ulum期中考试',
            highlightUtsDetail: '伊斯兰法学文凭',
            highlightGpa: 'GPA — 伊斯兰法学文凭',
            highlightGpaDetail: 'Summa Cum Laude',
            highlightToefl: 'TOEFL',
            highlightToeflDetail: '英语能力',
            highlightArabic: '阿拉伯语 — Hamzah',
            highlightArabicDetail: '官方认证',

            // Education
            educationEyebrow: '旅程',
            educationTitle: '教育',
            eduSchool: 'MA Al Irsyad PIAT 7',
            eduSchoolStatus: '已毕业',
            eduSchoolDesc: '专注于学术发展、科学和语言竞赛',
            eduCompetition: '竞赛与学术发展',
            eduCompetitionStatus: '国家与地区成就',
            eduCompetitionDesc: 'KSN IPA、阿拉伯语奥林匹克竞赛地区及省级',
            eduMarkaz: 'Markaz Ulum',
            eduMarkazStatus: '进行中',
            eduMarkazDesc: '伊斯兰法学文凭 — GPA 4.00 — Summa Cum Laude',
            eduZad: 'Zad Academy',
            eduZadStatus: '进行中',
            eduZadDesc: '正在学习中',
            eduSousse: 'University of Sousse',
            eduSousseStatus: '已录取',
            eduSousseDesc: '阿拉伯文学专业',
            eduFuture: '国际学术发展',
            eduFutureStatus: '持续进行',
            eduFutureDesc: '国际学习准备和专业发展',

            // Competitions
            compEyebrow: '竞赛',
            compTitle: '竞赛经验',
            compKsnBadge: 'KSN — 科学',
            compKsnTitle: '国家科学竞赛',
            compKsnLevel: 'MTs级 — 科学领域',
            compKsnResult: '第3名 (Harapan 2)',
            compObaBadge: 'OBA',
            compObaTitle: '阿拉伯语奥林匹克',
            compObaLevel: '高中级',
            compObaResult: '第2名 — Batu',
            compObaProvBadge: 'OBA省级',
            compObaProvTitle: '阿拉伯语奥林匹克',
            compObaProvLevel: '省级',
            compObaProvResult: '第5名',
            resultLabel: '结果:',

            // Languages
            langEyebrow: '沟通',
            langTitle: '语言',
            langSubtitle: '语言与国际沟通',
            langMandarin: '基础',
            langBasic: '基础',

            // International
            intlEyebrow: '全球',
            intlTitle: '国际方向',
            intlSousseDesc: '被突尼斯阿拉伯文学专业录取',
            intlProgressBadge: '申请进行中',
            intlSaudiTitle: '沙特留学',
            intlSaudiSubtitle: '材料处理中',
            intlSaudiDesc: '准备文件和材料',
            intlLangBadge: '语言',
            intlLangTitle: '多语言',
            intlLangDesc: '发展国际沟通能力',

            // Skills
            skillsEyebrow: '技术',
            skillsTitle: '数字技能',
            skillsFoundation: '学习基础 — Rumah IT Indonesia',
            skillsNote: 'Web开发基础',

            // Certificates
            certEyebrow: '证据',
            certTitle: '证书与资质',
            certPlaceholder: '证书图片将添加',
            certModalTitle: '证书',

            // CV
            cvEyebrow: '简历',
            cvTitle: '我的简历',
            cvView: '查看简历',

            // Contact
            contactEyebrow: '联系',
            contactTitle: '让我们联系',
            contactInfoTitle: '联系信息',
            contactWhatsapp: '微信',
            formName: '姓名',
            formNamePlaceholder: '请输入您的姓名',
            formEmail: '电子邮箱',
            formEmailPlaceholder: '请输入您的电子邮箱',
            formMessage: '留言',
            formMessagePlaceholder: '在此写下您的留言...',
            formSubmit: '发送留言',
            formSending: '发送中...',
            formSuccess: '留言发送成功！感谢您的联系。',
            formError: '发送留言时发生错误。请重试。',
            formValidationName: '姓名至少2个字符。',
            formValidationEmail: '请输入有效的电子邮箱地址。',
            formValidationMessage: '留言至少10个字符。',

            // Footer
            footerTagline: '多语言学术学习者 · 国际教育',
            footerRights: '版权所有。',
            modalClose: '关闭弹窗',
        },

        ko: {
            // Navigation
            navName: 'Ahmad Wildan',
            navHome: '홈',
            navAbout: '소개',
            navHighlights: '성과',
            navEducation: '교육',
            navLanguages: '언어',
            navInternational: '국제',
            navCertificates: '자격증',
            navContact: '연락처',
            skipLink: '주요 콘텐츠로 건너뛰기',

            // Hero
            heroLabel: '학술 포트폴리오',
            heroSubtitle: '학술 포트폴리오',
            heroDescription: '아랍 연구, 언어, 학술 개발 및 디지털 기술에 초점을 맞춘 다학제적 학습자 — 국제적 열망을 가진.',
            heroCtaContact: '연락하기',
            heroCtaHighlights: '성과 보기',

            // Stats
            statAcademic: '학업 평균',
            statSemester: '12학년 1학기 평균',
            statToefl: 'TOEFL',
            statGpa: 'GPA — 샤리아 디플로마',

            // About
            aboutEyebrow: '프로필',
            aboutTitle: '소개',
            aboutP1: '저는 MA Al Irsyad PIAT 7 졸업생으로 학술 개발, 언어, 디지털 기술에 중점을 두고 있습니다. 이슬람 연구의 탄탄한 기초 위에 과학 및 언어 대회를 통해 확장하고 기술 학습으로 풍부해진 학업 여정입니다.',
            aboutP2: '현재 Markaz Ulum에서 샤리아 디플로마 프로그램을 수강하고 있으며, Zad Academy를 통해 학습하고, University of Sousse 아랍문학 프로그램에 합격했습니다. 국제 학습과 아랍어 교육 기여를 위한 강력한 학술 프로필 구축에 집중하고 있습니다.',
            aboutP3: '아랍어, 영어, 중국어, 한국어, 일본어 능력을 적극적으로 개발하고 있으며 Rumah IT Indonesia를 통해 웹 개발 기초를 학습하고 있습니다. 지속적인 학습과 모든 단계의 철저한 준비를 믿습니다.',
            aboutCardTitle: '개발 중점',
            aboutList1: '아랍 연구 및 문학',
            aboutList2: '다국어 학습',
            aboutList3: '지속적인 학술 개발',
            aboutList4: '웹 개발 기초',
            aboutList5: '국제 학습 준비',

            // Highlights
            highlightsEyebrow: '성과',
            highlightsTitle: '학술 하이라이트',
            highlightAcademic: '학업 평균',
            highlightAcademicDetail: 'MA Al Irsyad PIAT 7',
            highlightSemester: '12학년 1학기 평균',
            highlightSemesterDetail: '최고 학업 성취',
            highlightUts: 'Markaz Ulum 중간고사',
            highlightUtsDetail: '샤리아 디플로마',
            highlightGpa: 'GPA — 샤리아 디플로마',
            highlightGpaDetail: 'Summa Cum Laude',
            highlightToefl: 'TOEFL',
            highlightToeflDetail: '영어 능력',
            highlightArabic: '아랍어 — Hamzah',
            highlightArabicDetail: '공식 인증',

            // Education
            educationEyebrow: '여정',
            educationTitle: '교육',
            eduSchool: 'MA Al Irsyad PIAT 7',
            eduSchoolStatus: '졸업',
            eduSchoolDesc: '학술 개발, 과학 및 언어 대회에 중점',
            eduCompetition: '대회 및 학술 개발',
            eduCompetitionStatus: '국가 및 지역 성과',
            eduCompetitionDesc: 'KSN IPA, 지역 및 도 단위 아랍어 올림피아드',
            eduMarkaz: 'Markaz Ulum',
            eduMarkazStatus: '진행 중',
            eduMarkazDesc: '샤리아 디플로마 — GPA 4.00 — Summa Cum Laude',
            eduZad: 'Zad Academy',
            eduZadStatus: '진행 중',
            eduZadDesc: '현재 학습 중',
            eduSousse: 'University of Sousse',
            eduSousseStatus: '합격',
            eduSousseDesc: '아랍문학 프로그램',
            eduFuture: '국제 학술 개발',
            eduFutureStatus: '지속 중',
            eduFutureDesc: '국제 학습 준비 및 전문 개발',

            // Competitions
            compEyebrow: '대회',
            compTitle: '대회 경험',
            compKsnBadge: 'KSN — 과학',
            compKsnTitle: '전국 과학 대회',
            compKsnLevel: 'MTs 수준 — 과학 분야',
            compKsnResult: '3위 (Harapan 2)',
            compObaBadge: 'OBA',
            compObaTitle: '아랍어 올림피아드',
            compObaLevel: '고등학교 수준',
            compObaResult: '2위 — Batu',
            compObaProvBadge: 'OBA 도',
            compObaProvTitle: '아랍어 올림피아드',
            compObaProvLevel: '도 수준',
            compObaProvResult: '5위',
            resultLabel: '결과:',

            // Languages
            langEyebrow: '소통',
            langTitle: '언어',
            langSubtitle: '언어 및 국제 소통',
            langMandarin: '기초',
            langBasic: '기초',

            // International
            intlEyebrow: '글로벌',
            intlTitle: '국제 방향',
            intlSousseDesc: '튀니지 아랍문학 프로그램 합격',
            intlProgressBadge: '신청 진행 중',
            intlSaudiTitle: '사우디 유학',
            intlSaudiSubtitle: '서류 처리 중',
            intlSaudiDesc: '서류 및 요건 준비',
            intlLangBadge: '언어',
            intlLangTitle: '다국어',
            intlLangDesc: '국제 소통 능력 개발',

            // Skills
            skillsEyebrow: '기술',
            skillsTitle: '디지털 스킬',
            skillsFoundation: '학습 기초 — Rumah IT Indonesia',
            skillsNote: '웹 개발 기초',

            // Certificates
            certEyebrow: '증빙',
            certTitle: '자격증 및 자격',
            certPlaceholder: '자격증 이미지가 추가될 예정',
            certModalTitle: '자격증',

            // CV
            cvEyebrow: '이력서',
            cvTitle: '내 이력서',
            cvView: '이력서 보기',

            // Contact
            contactEyebrow: '연락처',
            contactTitle: '연결합시다',
            contactInfoTitle: '연락처 정보',
            contactWhatsapp: 'WhatsApp',
            formName: '이름',
            formNamePlaceholder: '이름을 입력하세요',
            formEmail: '이메일',
            formEmailPlaceholder: '이메일 주소를 입력하세요',
            formMessage: '메시지',
            formMessagePlaceholder: '여기에 메시지를 작성하세요...',
            formSubmit: '메시지 보내기',
            formSending: '보내는 중...',
            formSuccess: '메시지가 성공적으로 전송되었습니다! 연락해 주셔서 감사합니다.',
            formError: '메시지 전송 중 오류가 발생했습니다. 다시 시도해 주세요.',
            formValidationName: '이름은 최소 2자 이상이어야 합니다.',
            formValidationEmail: '유효한 이메일 주소를 입력하세요.',
            formValidationMessage: '메시지는 최소 10자 이상이어야 합니다.',

            // Footer
            footerTagline: '다국어 학술 학습자 · 국제 교육',
            footerRights: '모든 권리 보유.',
            modalClose: '모달 닫기',
        },

        ja: {
            // Navigation
            navName: 'Ahmad Wildan',
            navHome: 'ホーム',
            navAbout: '概要',
            navHighlights: '実績',
            navEducation: '教育',
            navLanguages: '言語',
            navInternational: '国際',
            navCertificates: '証明書',
            navContact: '連絡先',
            skipLink: 'メインコンテンツへスキップ',

            // Hero
            heroLabel: '学術ポートフォリオ',
            heroSubtitle: '学術ポートフォリオ',
            heroDescription: 'アラブ研究、言語、学術開発、デジタルスキルに焦点を当てた多分野学習者 — 国際的な志を持つ。',
            heroCtaContact: '連絡する',
            heroCtaHighlights: '実績を見る',

            // Stats
            statAcademic: '学業平均',
            statSemester: '12年生第1学期平均',
            statToefl: 'TOEFL',
            statGpa: 'GPA — シャリーア・ディプロマ',

            // About
            aboutEyebrow: 'プロフィール',
            aboutTitle: '私について',
            aboutP1: '私はMA Al Irsyad PIAT 7の卒業生で、学術開発、言語、デジタルスキルに焦点を当てています。イスラム研究の強固な基盤の上に構築され、科学・言語コンペティションを通じて拡張され、テクノロジー学習で豊かになった学術の旅です。',
            aboutP2: '現在、Markaz Ulumでシャリーア・ディプロマプログラムに在籍し、Zad Academyで学び、University of Sousseのアラビア文学プログラムに合格しました。国際学習とアラビア語教育への貢献のための強力な学術プロフィール構築に焦点を当てています。',
            aboutP3: 'アラビア語、英語、中国語、韓国語、日本語の能力を積極的に開発し、Rumah IT Indonesiaを通じてウェブ開発の基礎を学んでいます。継続的な学習と各ステップの徹底的な準備を信じています。',
            aboutCardTitle: '開発焦点',
            aboutList1: 'アラブ研究と文学',
            aboutList2: '多言語学習',
            aboutList3: '継続的な学術開発',
            aboutList4: 'ウェブ開発基礎',
            aboutList5: '国際学習準備',

            // Highlights
            highlightsEyebrow: '実績',
            highlightsTitle: '学術ハイライト',
            highlightAcademic: '学業平均',
            highlightAcademicDetail: 'MA Al Irsyad PIAT 7',
            highlightSemester: '12年生第1学期平均',
            highlightSemesterDetail: '最高学業達成',
            highlightUts: 'Markaz Ulum中間試験',
            highlightUtsDetail: 'シャリーア・ディプロマ',
            highlightGpa: 'GPA — シャリーア・ディプロマ',
            highlightGpaDetail: 'Summa Cum Laude',
            highlightToefl: 'TOEFL',
            highlightToeflDetail: '英語能力',
            highlightArabic: 'アラビア語 — Hamzah',
            highlightArabicDetail: '公式認証',

            // Education
            educationEyebrow: '旅',
            educationTitle: '教育',
            eduSchool: 'MA Al Irsyad PIAT 7',
            eduSchoolStatus: '卒業',
            eduSchoolDesc: '学術開発、科学・言語コンペティションに焦点',
            eduCompetition: 'コンペティションと学術開発',
            eduCompetitionStatus: '国・地域の実績',
            eduCompetitionDesc: 'KSN IPA、地区・県レベルのアラビア語オリンピアード',
            eduMarkaz: 'Markaz Ulum',
            eduMarkazStatus: '進行中',
            eduMarkazDesc: 'シャリーア・ディプロマ — GPA 4.00 — Summa Cum Laude',
            eduZad: 'Zad Academy',
            eduZadStatus: '進行中',
            eduZadDesc: '現在学習中',
            eduSousse: 'University of Sousse',
            eduSousseStatus: '合格',
            eduSousseDesc: 'アラビア文学プログラム',
            eduFuture: '国際学術開発',
            eduFutureStatus: '継続中',
            eduFutureDesc: '国際学習準備と専門開発',

            // Competitions
            compEyebrow: 'コンペティション',
            compTitle: 'コンペティション経験',
            compKsnBadge: 'KSN — 科学',
            compKsnTitle: '全国科学コンペティション',
            compKsnLevel: 'MTsレベル — 科学分野',
            compKsnResult: '3位 (Harapan 2)',
            compObaBadge: 'OBA',
            compObaTitle: 'アラビア語オリンピアード',
            compObaLevel: '高等学校レベル',
            compObaResult: '2位 — Batu',
            compObaProvBadge: 'OBA県',
            compObaProvTitle: 'アラビア語オリンピアード',
            compObaProvLevel: '県レベル',
            compObaProvResult: '5位',
            resultLabel: '結果:',

            // Languages
            langEyebrow: 'コミュニケーション',
            langTitle: '言語',
            langSubtitle: '言語と国際コミュニケーション',
            langMandarin: '基礎',
            langBasic: '基礎',

            // International
            intlEyebrow: 'グローバル',
            intlTitle: '国際方向',
            intlSousseDesc: 'チュニジアのアラビア文学プログラムに合格',
            intlProgressBadge: '申請進行中',
            intlSaudiTitle: 'サウジ留学',
            intlSaudiSubtitle: '書類処理中',
            intlSaudiDesc: '書類と要件の準備',
            intlLangBadge: '言語',
            intlLangTitle: '多言語',
            intlLangDesc: '国際コミュニケーション能力の開発',

            // Skills
            skillsEyebrow: 'テクノロジー',
            skillsTitle: 'デジタルスキル',
            skillsFoundation: '学習基盤 — Rumah IT Indonesia',
            skillsNote: 'ウェブ開発基礎',

            // Certificates
            certEyebrow: '証拠',
            certTitle: '証明書と資格',
            certPlaceholder: '証明書画像が追加されます',
            certModalTitle: '証明書',

            // CV
            cvEyebrow: '履歴書',
            cvTitle: '私の履歴書',
            cvView: '履歴書を見る',

            // Contact
            contactEyebrow: '連絡先',
            contactTitle: '繋がりましょう',
            contactInfoTitle: '連絡先情報',
            contactWhatsapp: 'WhatsApp',
            formName: '名前',
            formNamePlaceholder: 'お名前を入力してください',
            formEmail: 'メールアドレス',
            formEmailPlaceholder: 'メールアドレスを入力してください',
            formMessage: 'メッセージ',
            formMessagePlaceholder: 'ここにメッセージを書いてください...',
            formSubmit: 'メッセージを送信',
            formSending: '送信中...',
            formSuccess: 'メッセージが正常に送信されました！ご連絡ありがとうございます。',
            formError: 'メッセージの送信中にエラーが発生しました。もう一度お試しください。',
            formValidationName: '名前は最低2文字以上である必要があります。',
            formValidationEmail: '有効なメールアドレスを入力してください。',
            formValidationMessage: 'メッセージは最低10文字以上である必要があります。',

            // Footer
            footerTagline: '多言語学術学習者 · 国際教育',
            footerRights: '全著作権所有。',
            modalClose: 'モーダルを閉じる',
        },
    };

    /* ===== CERTIFICATES DATA (UPDATED) ===== */
    const certificatesData = [
        {
            name: 'Hamzah — C1',
            issuer: 'Arabic Language Certification',
            imageSrc: 'assets/certificates/hamzah.png',
        },
        {
            name: 'Diploma Syariah — Markaz Ulum',
            issuer: 'Markaz Ulum',
            imageSrc: 'assets/certificates/markaz_ulum.png',
        },
        {
            name: 'Daurah Al Miskah',
            issuer: 'Daurah',
            imageSrc: 'assets/certificates/miskah.png',
        },
        {
            name: 'Daurah Risalatul Jamiah Mazhab Syafi\'i',
            issuer: 'Daurah',
            imageSrc: 'assets/certificates/jamiah.png',
        },
        {
            name: 'Daurah Arbain An Nawawi',
            issuer: 'Daurah',
            imageSrc: 'assets/certificates/arbain.png',
        },
        {
            name: 'Daurah Tajwid Tuhfatul Athfal',
            issuer: 'Daurah',
            imageSrc: 'assets/certificates/athfal.png',
        },
    ];

    /* ===== INITIALIZATION ===== */
    function init() {
        applyTheme();
        renderCertificates();
        setupEventListeners();
        updateYear();
        initRevealAnimations();
        initNumberAnimations();
    }

    /* ===== THEME ===== */
    function applyTheme() {
        if (isDarkMode) {
            htmlElement.setAttribute('data-theme', 'dark');
        } else {
            htmlElement.removeAttribute('data-theme');
        }
    }

    function toggleTheme() {
        isDarkMode = !isDarkMode;
        localStorage.setItem('aw-dark-mode', isDarkMode);
        applyTheme();
    }

    /* ===== LANGUAGE ===== */
    function setLanguage(lang) {
        currentLanguage = lang;

        // Update HTML lang attribute
        htmlElement.setAttribute('lang', lang);

        // Set RTL for Arabic
        if (lang === 'ar') {
            htmlElement.setAttribute('dir', 'rtl');
        } else {
            htmlElement.setAttribute('dir', 'ltr');
        }

        // Update lang current display
        const langMap = {
            id: 'ID',
            en: 'EN',
            ar: 'AR',
            zh: 'ZH',
            ko: 'KO',
            ja: 'JA',
        };
        langCurrent.textContent = langMap[lang];

        // Update active class on lang options
        langOptions.forEach((option) => {
            if (option.dataset.lang === lang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });

        // Apply translations
        applyTranslations(lang);

        // Save to localStorage
        localStorage.setItem('aw-language', lang);

        // Close dropdown
        closeLangDropdown();
    }

    function applyTranslations(lang) {
        const t = translations[lang];
        if (!t) return;

        // Update all elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const key = element.getAttribute('data-i18n');
            if (t[key]) {
                element.textContent = t[key];
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (t[key]) {
                element.setAttribute('placeholder', t[key]);
            }
        });

        // Update aria labels
        document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
            const key = element.getAttribute('data-i18n-aria');
            if (t[key]) {
                element.setAttribute('aria-label', t[key]);
            }
        });

        // Update document title based on language
        if (lang === 'en') {
            document.title = 'Ahmad Wildan — Academic Portfolio';
        } else if (lang === 'ar') {
            document.title = 'أحمد ولدان الشفاء — الملف الأكاديمي';
        } else if (lang === 'zh') {
            document.title = 'Ahmad Wildan — 学术作品集';
        } else if (lang === 'ko') {
            document.title = 'Ahmad Wildan — 학술 포트폴리오';
        } else if (lang === 'ja') {
            document.title = 'Ahmad Wildan — 学術ポートフォリオ';
        } else {
            document.title = 'Ahmad Wildan — Academic Portfolio';
        }
    }

    function openLangDropdown() {
        langDropdown.classList.add('open');
        langToggle.setAttribute('aria-expanded', 'true');
    }

    function closeLangDropdown() {
        langDropdown.classList.remove('open');
        langToggle.setAttribute('aria-expanded', 'false');
    }

    /* ===== CERTIFICATES RENDERING ===== */
    function renderCertificates() {
        if (!certificatesGrid) return;

        certificatesGrid.innerHTML = '';

        certificatesData.forEach((cert, index) => {
            const card = document.createElement('article');
            card.className = 'certificate-card reveal';
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'button');
            card.setAttribute('aria-label', `${cert.name} — ${cert.issuer}`);
            card.dataset.certIndex = index;

            card.innerHTML = `
                <div class="certificate-image-wrapper">
                    <img 
                        src="${cert.imageSrc}" 
                        alt="${cert.name} — ${cert.issuer}" 
                        loading="lazy"
                        onerror="this.style.display='none'; this.parentElement.querySelector('.certificate-placeholder').style.display='flex';"
                    >
                    <div class="certificate-placeholder" style="display:none;">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                        </svg>
                        <span data-i18n="certPlaceholder">Certificate image will be added</span>
                    </div>
                </div>
                <div class="certificate-info">
                    <h3 class="certificate-name">${cert.name}</h3>
                    <p class="certificate-issuer">${cert.issuer}</p>
                </div>
            `;

            certificatesGrid.appendChild(card);

            // Add click handler for modal
            card.addEventListener('click', () => openCertModal(cert));
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openCertModal(cert);
                }
            });
        });

        // Re-trigger reveal animations for new elements
        initRevealAnimations();
    }

    /* ===== MODAL — CERTIFICATE ===== */
    function openCertModal(cert) {
        const t = translations[currentLanguage];

        certModalTitle.textContent = `${cert.name}`;

        if (cert.imageSrc) {
            certModalBody.innerHTML = `
                <img 
                    src="${cert.imageSrc}" 
                    alt="${cert.name} — ${cert.issuer}" 
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                >
                <div style="display:none; padding: 2rem; color: var(--color-text-muted); text-align: center;">
                    ${t.certPlaceholder || 'Certificate image will be added'}
                </div>
            `;
        }

        certModal.classList.add('open');
        certModal.setAttribute('aria-hidden', 'false');
        isModalOpen = true;
        document.body.style.overflow = 'hidden';
    }

    function closeCertModal() {
        certModal.classList.remove('open');
        certModal.setAttribute('aria-hidden', 'true');
        isModalOpen = false;
        document.body.style.overflow = '';
    }

    /* ===== CONTACT FORM ===== */
    function validateField(input, errorElement, validationFn, errorMessageKey) {
        const t = translations[currentLanguage];
        const value = input.value.trim();
        const isValid = validationFn(value);

        if (!isValid) {
            errorElement.textContent = t[errorMessageKey] || errorMessageKey;
            errorElement.classList.add('visible');
            input.classList.add('error');
            input.setAttribute('aria-invalid', 'true');
            return false;
        } else {
            errorElement.textContent = '';
            errorElement.classList.remove('visible');
            input.classList.remove('error');
            input.removeAttribute('aria-invalid');
            return true;
        }
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        const t = translations[currentLanguage];

        const nameInput = document.getElementById('formName');
        const emailInput = document.getElementById('formEmail');
        const messageInput = document.getElementById('formMessage');
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');

        const isNameValid = validateField(
            nameInput,
            nameError,
            (v) => v.length >= 2,
            'formValidationName'
        );
        const isEmailValid = validateField(
            emailInput,
            emailError,
            (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
            'formValidationEmail'
        );
        const isMessageValid = validateField(
            messageInput,
            messageError,
            (v) => v.length >= 10,
            'formValidationMessage'
        );

        if (!isNameValid || !isEmailValid || !isMessageValid) {
            return;
        }

        // Disable button and show loading
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        submitBtn.querySelector('.submit-text').textContent = t.formSending || 'Sending...';
        formStatus.className = 'form-status';
        formStatus.textContent = '';
        formStatus.style.display = 'none';

        const formData = new FormData(contactForm);

        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok');
            })
            .then(() => {
                // Success
                submitBtn.disabled = false;
                submitBtn.classList.remove('loading');
                submitBtn.querySelector('.submit-text').textContent = t.formSubmit || 'Send Message';
                formStatus.className = 'form-status success';
                formStatus.textContent = t.formSuccess;
                formStatus.style.display = 'block';

                // Reset form
                contactForm.reset();

                // Hide success after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                    formStatus.textContent = '';
                    formStatus.className = 'form-status';
                }, 5000);
            })
            .catch(() => {
                // Error
                submitBtn.disabled = false;
                submitBtn.classList.remove('loading');
                submitBtn.querySelector('.submit-text').textContent = t.formSubmit || 'Send Message';
                formStatus.className = 'form-status error';
                formStatus.textContent = t.formError;
                formStatus.style.display = 'block';

                // Hide error after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                    formStatus.textContent = '';
                    formStatus.className = 'form-status';
                }, 5000);
            });
    }

    /* ===== REVEAL ANIMATIONS ===== */
    function initRevealAnimations() {
        const revealElements = document.querySelectorAll('.reveal:not(.reveal-visible)');

        if (revealElements.length === 0) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            revealElements.forEach((el) => {
                el.classList.add('reveal-visible');
            });
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -40px 0px',
            }
        );

        revealElements.forEach((el) => {
            observer.observe(el);
        });
    }

    /* ===== NUMBER ANIMATION ===== */
    function initNumberAnimations() {
        const numberElements = document.querySelectorAll('.stat-number[data-target]');

        if (numberElements.length === 0) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateNumber(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        numberElements.forEach((el) => {
            observer.observe(el);
        });
    }

    function animateNumber(element) {
        const target = parseFloat(element.dataset.target);
        const decimal = parseInt(element.dataset.decimal || '0', 10);
        const suffix = element.dataset.suffix || '';
        const duration = 1500;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic

            const currentValue = target * eased;

            if (decimal > 0) {
                element.textContent = currentValue.toFixed(decimal).replace('.', ',') + suffix;
            } else {
                element.textContent = Math.round(currentValue) + suffix;
            }

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                // Final value
                if (decimal > 0) {
                    element.textContent = target.toFixed(decimal).replace('.', ',') + suffix;
                } else {
                    element.textContent = Math.round(target) + suffix;
                }
            }
        }

        requestAnimationFrame(update);
    }

    /* ===== YEAR ===== */
    function updateYear() {
        const year = new Date().getFullYear();
        if (currentYearSpan) {
            currentYearSpan.textContent = year;
        }
    }

    /* ===== EVENT LISTENERS ===== */
    function setupEventListeners() {
        // Mobile nav toggle
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('open');
        });

        // Close mobile nav when clicking a link
        document.querySelectorAll('.nav-link').forEach((link) => {
            link.addEventListener('click', () => {
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('open');
            });
        });

        // Theme toggle
        themeToggle.addEventListener('click', toggleTheme);

        // Language toggle
        langToggle.addEventListener('click', () => {
            const isExpanded = langToggle.getAttribute('aria-expanded') === 'true';
            if (isExpanded) {
                closeLangDropdown();
            } else {
                openLangDropdown();
            }
        });

        // Language options
        langOptions.forEach((option) => {
            option.addEventListener('click', () => {
                setLanguage(option.dataset.lang);
            });
            option.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setLanguage(option.dataset.lang);
                }
            });
        });

        // Close language dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-switcher')) {
                closeLangDropdown();
            }
        });

        // Certificate modal close
        certModalClose.addEventListener('click', closeCertModal);
        certModal.addEventListener('click', (e) => {
            if (e.target === certModal) {
                closeCertModal();
            }
        });

        // Contact form
        contactForm.addEventListener('submit', handleFormSubmit);

        // Real-time validation
        const nameInput = document.getElementById('formName');
        const emailInput = document.getElementById('formEmail');
        const messageInput = document.getElementById('formMessage');

        nameInput.addEventListener('blur', () => {
            validateField(
                nameInput,
                document.getElementById('nameError'),
                (v) => v.length >= 2,
                'formValidationName'
            );
        });

        emailInput.addEventListener('blur', () => {
            validateField(
                emailInput,
                document.getElementById('emailError'),
                (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
                'formValidationEmail'
            );
        });

        messageInput.addEventListener('blur', () => {
            validateField(
                messageInput,
                document.getElementById('messageError'),
                (v) => v.length >= 10,
                'formValidationMessage'
            );
        });

        // Keyboard Escape for modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (certModal.classList.contains('open')) {
                    closeCertModal();
                }
            }
        });

        // Header shadow on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                header.style.boxShadow = 'var(--shadow-md)';
            } else {
                header.style.boxShadow = 'none';
            }
        });
    }

    /* ===== START ===== */
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Restore saved language
    const savedLang = localStorage.getItem('aw-language');
    if (savedLang && translations[savedLang]) {
        currentLanguage = savedLang;
        // Apply after DOM ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setLanguage(savedLang);
            });
        } else {
            setLanguage(savedLang);
        }
    }
})();

/* ===== WILDAN AI CHATBOT ===== */
(function() {
    'use strict';

    // ===== DOM Elements =====
    const widget = document.getElementById('wildan-ai');
    const toggleBtn = document.getElementById('chatbot-toggle');
    const closeBtn = document.getElementById('chatbot-close');
    const clearBtn = document.getElementById('chatbot-clear');
    const messagesContainer = document.getElementById('chatbot-messages');
    const quickQuestionsContainer = document.getElementById('chatbot-quick-questions');
    const inputField = document.getElementById('chatbot-input');
    const sendBtn = document.getElementById('chatbot-send');

    // ===== Knowledge Base =====
    const knowledgeBase = [
        {
            keywords: ['siapa', 'tentang', 'ahmad', 'profil', 'biografi'],
            answer: 'Ahmad Wildan Al-Shifa adalah lulusan MA Al Irsyad PIAT 7 dengan fokus pada pengembangan akademik, bahasa, dan keterampilan digital. Ia saat ini menempuh Diploma Syariah di Markaz Ulum, belajar di Zad Academy, dan telah diterima di University of Sousse untuk program Sastra Arab.'
        },
        {
            keywords: ['sekolah', 'al irsyad', 'ma al irsyad', 'piat'],
            answer: 'Ahmad Wildan adalah lulusan MA Al Irsyad PIAT 7. Selama di sekolah, ia aktif mengikuti kompetisi sains dan bahasa.'
        },
        {
            keywords: ['markaz', 'ulum', 'diploma', 'syariah', 'uts', 'ipk', 'summa', 'cum laude', 'gpa'],
            answer: 'Ahmad Wildan sedang mengikuti program Diploma Syariah di Markaz Ulum dengan pencapaian UTS 97,76 dan IPK 4,00 (predikat Summa Cum Laude).'
        },
        {
            keywords: ['toefl', 'english', 'inggris', '607'],
            answer: 'Ahmad Wildan memiliki skor TOEFL 607. Sertifikat fisiknya belum diambil.'
        },
        {
            keywords: ['arab', 'hamzah', 'c1', 'sertifikasi bahasa arab'],
            answer: 'Ahmad Wildan memiliki sertifikasi Bahasa Arab Hamzah level C1.'
        },
        {
            keywords: ['mandarin', 'chinese', 'bahasa mandarin'],
            answer: 'Bahasa Mandarin Ahmad Wildan masih pada tingkat basic.'
        },
        {
            keywords: ['korea', 'korean', 'bahasa korea'],
            answer: 'Bahasa Korea Ahmad Wildan masih pada tingkat basic.'
        },
        {
            keywords: ['jepang', 'japanese', 'bahasa jepang'],
            answer: 'Bahasa Jepang Ahmad Wildan masih pada tingkat basic.'
        },
        {
            keywords: ['ksn', 'ipa', 'sains', 'kompetisi sains'],
            answer: 'Ahmad Wildan meraih Juara Harapan 2 dalam Kompetisi Sains Nasional (KSN) bidang IPA tingkat MTs.'
        },
        {
            keywords: ['oba', 'olimpiade bahasa arab', 'juara 2', 'batu', 'provinsi', 'peringkat 5'],
            answer: 'Dalam Olimpiade Bahasa Arab (OBA), Ahmad Wildan meraih Juara 2 di Batu. Di tingkat provinsi, ia meraih Peringkat 5.'
        },
        {
            keywords: ['html', 'css', 'javascript', 'web', 'pemrograman', 'coding', 'digital', 'git', 'github'],
            answer: 'Ahmad Wildan memiliki pengetahuan dasar dalam HTML, CSS, JavaScript, Git, dan GitHub. Ia belajar melalui Rumah IT Indonesia.'
        },
        {
            keywords: ['zad academy', 'zad'],
            answer: 'Ahmad Wildan sedang mengikuti pembelajaran di Zad Academy.'
        },
        {
            keywords: ['sousse', 'university', 'sastra arab', 'arabic literature', 'kuliah', 'kampus', 'studi'],
            answer: 'Ahmad Wildan telah diterima di University of Sousse untuk program Sastra Arab (Arabic Literature). Selain itu, ia juga sedang menempuh Diploma Syariah di Markaz Ulum dan belajar di Zad Academy.'
        },
        {
            keywords: ['saudi', 'study in saudi', 'pemberkasan'],
            answer: 'Study in Saudi untuk Ahmad Wildan saat ini masih dalam proses pemberkasan (Application in Progress).'
        },
        {
            keywords: ['kontak', 'whatsapp', 'linkedin', 'email', 'hubungi'],
            answer: 'Kontak Ahmad Wildan:\n- WhatsApp: 081259730289\n- GitHub: github.com/ahmadwildanasy2356-cell\n- LinkedIn: linkedin.com/in/ahmad-wildan-assyifa'
        },
        {
            keywords: ['bahasa', 'language', 'languages'],
            answer: 'Ahmad Wildan mempelajari Bahasa Arab, Inggris, Mandarin, Korea, dan Jepang. Ia memiliki sertifikasi Hamzah C1 untuk Bahasa Arab dan skor TOEFL 607 untuk Bahasa Inggris. Mandarin, Korea, dan Jepang masih pada tingkat basic.'
        },
        {
            keywords: ['pencapaian', 'prestasi', 'nilai', 'akademik', 'rata-rata'],
            answer: 'Pencapaian akademik Ahmad Wildan meliputi:\n- Rata-rata akademik: 95,00\n- Rata-rata kelas 12 semester 1: 97,10\n- TOEFL: 607\n- IPK Diploma Syariah: 4,00 (Summa Cum Laude)\n- UTS Markaz Ulum: 97,76'
        },
        {
            keywords: ['ranking', 'peringkat', 'rank', 'juara kelas', 'juara 1', 'peringkat 1'],
            answer: 'Informasi mengenai peringkat tidak tercantum dalam profil Ahmad Wildan.'
        }
    ];

    const fallbackAnswer = 'Maaf, informasi tersebut belum tersedia dalam profil Ahmad Wildan.';

    // ===== Stopwords untuk pencocokan =====
    const stopwords = new Set([
        'apa', 'berapa', 'bagaimana', 'dimana', 'kapan', 'siapa', 'yang', 'di', 'ke', 'dari',
        'untuk', 'dan', 'atau', 'apakah', 'tolong', 'saya', 'kamu', 'anda', 'ai', 'wildan',
        'tentang', 'itu', 'ini', 'adalah', 'mohon', 'ceritakan', 'jelaskan', 'sebutkan',
        'the', 'is', 'are', 'what', 'where', 'who', 'how', 'does', 'do', 'did', 'about',
        'tell', 'me', 'please', 'info', 'information'
    ]);

    // ===== State =====
    let isOpen = false;
    const STORAGE_KEY = 'wildan_ai_chat_history';

    // ===== Welcome Message =====
    const welcomeMessage = 'Halo, saya Wildan AI. Saya dapat membantu Anda mengenal perjalanan akademik, pendidikan, kemampuan bahasa, pencapaian, dan kompetensi Ahmad Wildan.';

    // ===== Helper Functions =====
    function toggleChat() {
        isOpen = !isOpen;
        widget.classList.toggle('open', isOpen);
        widget.setAttribute('aria-hidden', !isOpen);
        if (isOpen) {
            inputField.focus();
        }
    }

    function closeChat() {
        isOpen = false;
        widget.classList.remove('open');
        widget.setAttribute('aria-hidden', 'true');
    }

    function clearChat() {
        localStorage.removeItem(STORAGE_KEY);
        messagesContainer.innerHTML = '';
        addBotMessage(welcomeMessage, true);
        saveHistory();
    }

    function saveHistory() {
        const messages = [];
        const messageElements = messagesContainer.querySelectorAll('.chatbot-message');
        messageElements.forEach((el) => {
            const role = el.classList.contains('user') ? 'user' : 'bot';
            const text = el.querySelector('.message-content').textContent;
            messages.push({ role, text });
        });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }

    function loadHistory() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            try {
                const messages = JSON.parse(stored);
                messages.forEach((msg) => {
                    if (msg.role === 'user') {
                        addUserMessage(msg.text, false);
                    } else {
                        addBotMessage(msg.text, false);
                    }
                });
                // Scroll to bottom after load
                setTimeout(() => {
                    messagesContainer.scrollTop = messagesContainer.scrollHeight;
                }, 100);
                return true;
            } catch (e) {
                console.error('Failed to load chat history', e);
            }
        }
        return false;
    }

    function addUserMessage(text, save = true) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chatbot-message user';
        messageDiv.innerHTML = `<div class="message-content">${escapeHtml(text)}</div>`;
        messagesContainer.appendChild(messageDiv);
        scrollToBottom();
        if (save) saveHistory();
    }

    function addBotMessage(text, save = true) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chatbot-message bot';
        messageDiv.innerHTML = `<div class="message-content">${escapeHtml(text).replace(/\n/g, '<br>')}</div>`;
        messagesContainer.appendChild(messageDiv);
        scrollToBottom();
        if (save) saveHistory();
    }

    function showTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'chatbot-message bot';
        indicator.innerHTML = `
            <div class="typing-indicator">
                <span></span><span></span><span></span>
            </div>
        `;
        indicator.id = 'typing-indicator';
        messagesContainer.appendChild(indicator);
        scrollToBottom();
    }

    function removeTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) indicator.remove();
    }

    function scrollToBottom() {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function normalizeQuestion(text) {
        return text.toLowerCase().replace(/[^\w\s]/g, ' ').trim();
    }

    function getBotResponse(question) {
        const normalized = normalizeQuestion(question);
        const words = normalized.split(/\s+/).filter(word => !stopwords.has(word));

        let bestMatch = null;
        let bestScore = 0;

        for (const item of knowledgeBase) {
            let score = 0;
            for (const keyword of item.keywords) {
                // Check if keyword appears as a whole word or phrase
                if (normalized.includes(keyword)) {
                    score += 2; // higher weight for phrase match
                } else {
                    // Individual word match
                    const keywordWords = keyword.split(/\s+/);
                    for (const kw of keywordWords) {
                        if (words.includes(kw)) {
                            score += 1;
                        }
                    }
                }
            }
            if (score > bestScore) {
                bestScore = score;
                bestMatch = item;
            }
        }

        return bestMatch ? bestMatch.answer : fallbackAnswer;
    }

    function handleSend() {
        const question = inputField.value.trim();
        if (!question) return;

        // Add user message
        addUserMessage(question);
        inputField.value = '';
        inputField.focus();

        // Show typing indicator
        showTypingIndicator();

        // Simulate thinking delay (500ms - 1000ms)
        const delay = 500 + Math.random() * 500;
        setTimeout(() => {
            removeTypingIndicator();
            const answer = getBotResponse(question);
            addBotMessage(answer);
        }, delay);
    }

    // ===== Event Listeners =====
    toggleBtn.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', closeChat);
    clearBtn.addEventListener('click', clearChat);

    sendBtn.addEventListener('click', handleSend);
    inputField.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    });

    quickQuestionsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.chatbot-quick-btn');
        if (btn) {
            const question = btn.dataset.question;
            inputField.value = question;
            handleSend();
        }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) {
            closeChat();
        }
    });

    // Click outside to close (optional)
    document.addEventListener('click', (e) => {
        if (isOpen && !widget.contains(e.target)) {
            closeChat();
        }
    });

    // ===== Initialization =====
    function initChatbot() {
        // Load history or show welcome
        const hasHistory = loadHistory();
        if (!hasHistory) {
            addBotMessage(welcomeMessage, true);
        }
    }

    // Start when DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChatbot);
    } else {
        initChatbot();
    }
})();