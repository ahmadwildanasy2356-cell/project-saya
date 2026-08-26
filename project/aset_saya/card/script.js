
// ==========================================================================
// 1. MANAGEMENT KURSOR AURA LUXURY
// ==========================================================================
const kursorInti = document.getElementById('kursor-inti');
const kursorAura = document.getElementById('kursor-aura');

document.addEventListener('mousemove', function(e) {
    kursorInti.style.left = e.clientX + 'px';
    kursorInti.style.top = e.clientY + 'px';
    kursorAura.style.left = e.clientX + 'px';
    kursorAura.style.top = e.clientY + 'px';
});

// ==========================================================================
// 2. SISTEM SWITCH ANTAR TAB HALAMAN (ZERO RELOAD)
// ==========================================================================
window.pindahHalaman = function(idHalaman, tombolNav) {
    document.querySelectorAll('.halaman-web').forEach(hal => {
        hal.classList.remove('halaman-aktif');
    });
    document.querySelectorAll('.link-nav').forEach(btn => {
        btn.classList.remove('nav-aktif');
    });
    document.getElementById(idHalaman).classList.add('halaman-aktif');
    tombolNav.classList.add('nav-aktif');
};

// ==========================================================================
// 3. SEKSI LOGIKA MANAJEMEN DATA PENDAFTARAN
// ==========================================================================
const form = document.getElementById('formPendaftaran');
const inputNama = document.getElementById('nama');
const hitungKarakter = document.getElementById('hitungKarakter');
const tempatListPeserta = document.getElementById('tempatListPeserta');
const pesanKosong = document.getElementById('pesanKosong');
const notifSukses = document.getElementById('notifSukses');

const hitungAtas = document.getElementById('hitungAtas');
const statJS = document.getElementById('statJS');
const statWeb = document.getElementById('statWeb');
const statAI = document.getElementById('statAI');
const statUI = document.getElementById('statUI');
const btnHapusSemua = document.getElementById('btnHapusSemua');

let dataPeserta = [];

// Fitur hitung panjang karakter nama saat mulai mengetik
inputNama.addEventListener('input', function() {
    hitungKarakter.textContent = inputNama.value.length;
});

// Fungsi penangkap data saat tombol form dikirim (Submit)
form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const nama = inputNama.value;
    const email = document.getElementById('email').value;
    const eventPilihan = document.getElementById('event').value;

    const sekarang = new Date();
    const tanggal = sekarang.toLocaleDateString('id-ID');
    const jam = sekarang.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

    const pesertaBaru = {
        id: Date.now(),
        nama: nama,
        email: email,
        event: eventPilihan,
        waktuDaftar: `${tanggal} pada ${jam}`
    };

    dataPeserta.push(pesertaBaru);
    perbaruiTampilan();
    form.reset();
    hitungKarakter.textContent = "0";

    notifSukses.style.display = "block";
    setTimeout(() => { notifSukses.style.display = "none"; }, 3000);
});

// Fungsi utama cetak ulang data ke layar komputer
function perbaruiTampilan() {
    tempatListPeserta.innerHTML = "";

    if (dataPeserta.length === 0) {
        tempatListPeserta.appendChild(pesanKosong);
        pesanKosong.style.display = "block";
    } else {
        pesanKosong.style.display = "none";

        dataPeserta.forEach((peserta, indeks) => {
            const kartu = document.createElement('div');
            kartu.className = "kartu-peserta";
            kartu.innerHTML = `
                <div style="display: flex; align-items: center;">
                    <div class="nomor-urut">${indeks + 1}</div>
                    <div class="info-peserta">
                        <h3>${peserta.nama}</h3>
                        <p>📧 ${peserta.email}</p>
                        <p>📌 Event: <strong>${peserta.event}</strong></p>
                        <p>🕒 ${peserta.waktuDaftar}</p>
                    </div>
                </div>
                <button class="tombol-hapus" onclick="hapusPeserta(${peserta.id})">Hapus</button>
            `;
            tempatListPeserta.appendChild(kartu);
        });
    }

    hitungAtas.textContent = dataPeserta.length;

    statJS.textContent = dataPeserta.filter(p => p.event === "JS Workshop").length;
    statWeb.textContent = dataPeserta.filter(p => p.event === "Web Dev").length;
    statAI.textContent = dataPeserta.filter(p => p.event === "AI Engineering").length;
    statUI.textContent = dataPeserta.filter(p => p.event === "UI/UX Design").length;
}

// Fitur hapus data peserta satuan
window.hapusPeserta = function(idPeserta) {
    dataPeserta = dataPeserta.filter(p => p.id !== idPeserta);
    perbaruiTampilan();
};

// Fitur hapus bersih seluruh data pendaftar massal
btnHapusSemua.addEventListener('click', function() {
    if (confirm("Apakah Anda yakin ingin menghapus seluruh data peserta?")) {
        dataPeserta = [];
        perbaruiTampilan();
    }
});

// Penyelarasan hitung karakter jika tombol reset ditekan manual
document.getElementById('btnReset').addEventListener('click', function() {
    hitungKarakter.textContent = "0";
});
