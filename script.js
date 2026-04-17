// ===================== DATA ANALISIS KASUS =====================
const caseScenarios = [
  {
    id: "cs1",
    title: "Kasus 1 – Krisis Data Menjelang Publikasi",
    category: "📊 Kualitas Data & Publikasi",
    duration: "45 menit",
    background: `BPS Provinsi X dijadwalkan menerbitkan Statistik Daerah dalam dua minggu. Saat verifikasi akhir, Anda menemukan bahwa data dari 3 kabupaten (dari total 7) belum tervalidasi penuh karena petugas penginput data di lapangan diganti mendadak. Data yang ada menunjukkan anomali pada beberapa variabel utama. Sementara itu, pimpinan provinsi sudah mengumumkan jadwal peluncuran ke publik dan media sudah dihubungi. Anda adalah koordinator tim publikasi.`,
    questions: [
      "Identifikasi masalah utama dan faktor-faktor yang memperumit situasi ini.",
      "Susun langkah-langkah konkret yang akan Anda ambil dalam 48 jam pertama.",
      "Bagaimana Anda mengkomunikasikan situasi ini kepada pimpinan dan pemangku kepentingan eksternal?",
      "Apa indikator keberhasilan penanganan krisis ini dan pembelajaran ke depan?"
    ],
    template: `IDENTIFIKASI MASALAH:
Masalah utama dalam kasus ini adalah ancaman terhadap kualitas dan integritas data publikasi statistik daerah, yang diperumit oleh tiga faktor: (1) data dari 3 dari 7 kabupaten belum tervalidasi, (2) terdapat anomali pada variabel utama, dan (3) tenggat publikasi sudah dikomunikasikan ke publik.

ANALISIS PENYEBAB:
Akar masalah bukan sekadar keterlambatan validasi, melainkan kerentanan proses suksesi petugas yang tidak memiliki protokol transfer tanggung jawab yang memadai. Faktor yang memperparah situasi: penggantian petugas mendadak tanpa briefing, tidak adanya buffer waktu validasi dalam jadwal publikasi, dan ketergantungan pada satu titik verifikasi.

USULAN SOLUSI:
Langkah yang saya ambil: (1) Menghentikan sementara proses finalisasi bagian terdampak, (2) membentuk tim verifikasi darurat yang fokus pada 3 kabupaten bermasalah, (3) menyiapkan dua skenario publikasi — publikasi penuh jika validasi selesai tepat waktu, atau publikasi parsial dengan catatan metodologis yang jelas.

RENCANA IMPLEMENTASI:
Jam 1-4: Koordinasi dengan kepala tim dan petugas pengganti untuk pemetaan cepat anomali. Hari 1-2: Verifikasi ulang data dengan sumber primer (laporan lapangan, CAWI backup). Hari 3: Rapat pimpinan untuk memilih skenario publikasi dan menetapkan komunikasi eksternal. Hari 4-10: Finalisasi dan review akhir sebelum rilis.

ANTISIPASI RISIKO:
Risiko utama: tekanan pimpinan untuk tetap menerbitkan sesuai jadwal. Mitigasi: sajikan dua opsi dengan konsekuensi masing-masing secara tertulis kepada pimpinan, agar keputusan terdokumentasi. Risiko kedua: kebocoran informasi ke media sebelum komunikasi resmi — mitigasi dengan briefing singkat kepada tim komunikasi.

INDIKATOR KEBERHASILAN:
Publikasi akhir memuat data yang tervalidasi penuh, atau bagian yang belum tervalidasi diberi penanda metodologis yang jelas. Tidak ada koreksi data signifikan pasca-publikasi. Prosedur suksesi petugas diperbarui dalam SOP unit dalam 30 hari ke depan.`,
    keywords: ["masalah", "anomali", "validasi", "tenggat", "risiko", "kualitas", "integritas", "penyebab", "faktor", "verifikasi", "koordinasi", "langkah", "strategi", "tahap", "waktu", "jadwal", "mitigasi", "antisipasi", "dampak", "indikator", "keberhasilan", "reputasi", "pembelajaran", "sop"]
  },
  {
    id: "cs2",
    title: "Kasus 2 – Konflik Definisi Indikator Lintas Instansi",
    category: "🤝 Koordinasi Statistik Sektoral",
    duration: "45 menit",
    background: `Dalam penyusunan profil pembangunan daerah tahunan, Anda mendapati bahwa tiga instansi menggunakan definisi dan metodologi berbeda untuk mengukur kemiskinan: BPS menggunakan Garis Kemiskinan resmi, Dinas Sosial menggunakan data DTKS, dan Bappeda menggunakan indeks komposit sendiri. Hal ini menyebabkan angka kemiskinan yang dilaporkan berbeda signifikan dan menimbulkan kebingungan di kalangan pengambil kebijakan. Pimpinan meminta Anda menjadi koordinator penyelesaian masalah ini.`,
    questions: [
      "Identifikasi akar masalah dan mengapa perbedaan ini bisa terjadi secara sistematis.",
      "Rancang strategi harmonisasi yang realistis dengan mempertimbangkan kepentingan setiap instansi.",
      "Bagaimana Anda membangun konsensus tanpa mengabaikan kebutuhan masing-masing instansi?",
      "Usulan mekanisme jangka panjang agar masalah serupa tidak terulang."
    ],
    template: `IDENTIFIKASI MASALAH:
Masalah utama adalah inkonsistensi definisi operasional antar instansi yang mengakibatkan data kemiskinan tidak dapat dibandingkan dan mengaburkan dasar pengambilan kebijakan. Ini bukan masalah teknis semata, melainkan masalah tata kelola statistik sektoral yang sistematis.

ANALISIS PENYEBAB:
Akar masalah: tidak adanya forum koordinasi statistik yang mengikat dan berulang antar instansi di tingkat daerah. Faktor pendorong: (1) masing-masing instansi memiliki mandat dan kepentingan pelaporan berbeda, (2) Satu Data Indonesia belum terimplementasi sepenuhnya di level kabupaten/kota, (3) tidak ada sanksi atau insentif untuk harmonisasi.

USULAN SOLUSI:
Saya akan mengusulkan pendekatan berbasis konsensus bertahap: pertama, dokumentasi dan visualisasi perbedaan yang ada secara transparan untuk semua pihak; kedua, fasilitasi forum teknis yang memisahkan "data untuk kebijakan" dari "data untuk manajemen internal instansi"; ketiga, penyusunan kamus data bersama yang mengakomodasi kebutuhan masing-masing.

RENCANA IMPLEMENTASI:
Minggu 1: Menyusun matriks perbedaan definisi secara tertulis dan mengundang perwakilan teknis tiga instansi. Minggu 2-3: Workshop harmonisasi dengan fasilitator netral. Minggu 4: Penyusunan draft kesepakatan bersama. Bulan 2: Piloting penggunaan definisi yang disepakati pada laporan berikutnya.

ANTISIPASI RISIKO:
Ego sektoral dan resistensi dari instansi yang merasa definisinya lebih akurat. Mitigasi: posisikan harmonisasi bukan sebagai "siapa yang benar" tetapi sebagai "bagaimana menghasilkan data yang berguna untuk semua". Libatkan Bappeda sebagai pihak pemakai data agar ada tekanan dari sisi permintaan.

INDIKATOR KEBERHASILAN:
Satu dokumen kamus data bersama yang ditandatangani ketiga instansi. Profil pembangunan daerah berikutnya menggunakan satu definisi yang sama. Forum koordinasi statistik terbentuk dan berjadwal minimal triwulanan.`,
    keywords: ["definisi", "metodologi", "berbeda", "inkonsistensi", "akar masalah", "sistematis", "kepentingan", "standar", "harmonisasi", "konsensus", "koordinasi", "mediasi", "forum", "pertemuan", "mekanisme", "kesepakatan", "resistensi", "ego sektoral", "konsistensi", "akuntabilitas", "satu data", "kamus"]
  },
  {
    id: "cs3",
    title: "Kasus 3 – Insiden Publikasi Data Keliru",
    category: "📢 Manajemen Krisis & Komunikasi",
    duration: "45 menit",
    background: `Sebuah tabel dalam publikasi BPS yang telah dirilis dua hari lalu mengandung kesalahan entri yang menyebabkan angka PDRB per kapita salah satu kabupaten terlalu tinggi sekitar 30%. Beberapa media daerah dan nasional sudah mengutip data ini. Seorang analis dari universitas lokal pertama kali mengingatkan kesalahan ini melalui media sosial. Saat ini publik belum terlalu ramai membicarakan, tetapi ada potensi menjadi viral. Anda adalah koordinator tim publikasi.`,
    questions: [
      "Apa langkah pertama yang harus segera diambil dalam 2 jam pertama setelah mengetahui masalah ini?",
      "Bagaimana strategi komunikasi kepada publik, media, dan pemangku kepentingan internal?",
      "Rancang mekanisme koreksi yang profesional dan menjaga kepercayaan publik.",
      "Apa perubahan prosedur yang perlu dilakukan agar insiden serupa tidak terulang?"
    ],
    template: `IDENTIFIKASI MASALAH:
Masalah utama adalah insiden kualitas data yang sudah sampai ke publik dan berpotensi mencoreng kepercayaan terhadap statistik BPS. Komponen kritis: (1) media sudah mengutip data salah, (2) ada tekanan waktu untuk koreksi sebelum isu menjadi viral, (3) reputasi institusi dan kredibilitas data statistik nasional dipertaruhkan.

ANALISIS PENYEBAB:
Sumber kesalahan perlu segera ditelusuri: apakah di level entri, pengolahan, atau pengecekan akhir. Kelemahan sistemik yang teridentifikasi: proses QC tidak memiliki verifikasi silang otomatis untuk nilai ekstrem (outlier), dan tidak ada mekanisme review final sebelum penerbitan di website.

USULAN SOLUSI:
Strategi dua jalur: (1) Koreksi data segera dan transparan dengan errata resmi, (2) Komunikasi krisis yang proaktif kepada media dan publik. Saya tidak akan menunggu — respons cepat dan jujur lebih baik daripada menunggu tekanan media meningkat.

RENCANA IMPLEMENTASI:
Jam 1-2: Verifikasi internal untuk memastikan kesalahan dan luasannya. Siapkan draft errata. Jam 2-4: Koordinasi dengan pimpinan dan bagian humas untuk menyepakati narasi komunikasi. Jam 4-6: Publikasikan errata di website, kirim siaran pers ke media yang mengutip, dan posting klarifikasi di media sosial BPS. Hari 2: Follow-up ke media untuk memastikan koreksi sudah tersampaikan.

ANTISIPASI RISIKO:
Risiko: media mengangkat "BPS salah" menjadi headline negatif. Mitigasi: framing komunikasi pada "integritas dan transparansi BPS dalam merespons temuan" — bukan defensif. Risiko kedua: tim internal merasa disalahkan. Mitigasi: fokus pada perbaikan sistem, bukan mencari kambing hitam.

INDIKATOR KEBERHASILAN:
Errata terbit dalam 24 jam. Semua media yang mengutip data salah telah menerbitkan koreksi. Tidak ada narasi negatif berkelanjutan di hari ke-3. SOP pengecekan akhir diperbarui dengan mekanisme deteksi outlier dalam 14 hari.`,
    keywords: ["kesalahan", "insiden", "media", "publik", "kepercayaan", "urgensi", "penyebab", "proses", "QC", "entri", "validasi", "SOP", "koreksi", "transparansi", "komunikasi", "errata", "segera", "langkah", "siaran pers", "koordinasi", "viral", "reputasi", "prosedur", "lesson learned", "humas"]
  },
  {
    id: "cs4",
    title: "Kasus 4 – Resistensi Digitalisasi Pengumpulan Data",
    category: "🔄 Manajemen Perubahan & Teknologi",
    duration: "45 menit",
    background: `BPS Kabupaten Y akan beralih dari kuesioner kertas ke CAPI (Computer-Assisted Personal Interviewing) untuk survei pertanian tahunan yang melibatkan 45 petugas lapangan. Pelatihan dasar sudah dilakukan, tetapi 60% petugas menyatakan belum siap dan meminta kembali ke sistem manual. Sebagian alasannya adalah infrastruktur jaringan yang lemah di wilayah terpencil, sebagian lagi adalah ketidaknyamanan dengan teknologi. Jadwal pengumpulan data tinggal 3 minggu lagi dan tidak bisa diundur.`,
    questions: [
      "Identifikasi jenis dan sumber resistensi yang dihadapi dan mana yang paling kritis.",
      "Rancang strategi untuk memastikan implementasi CAPI berjalan dalam 3 minggu.",
      "Bagaimana Anda mengelola ekspektasi dan memotivasi petugas yang masih ragu?",
      "Usulan pendekatan jangka panjang untuk meningkatkan kapasitas digital petugas lapangan."
    ],
    template: `IDENTIFIKASI MASALAH:
Masalah utama adalah ancaman kegagalan implementasi CAPI dalam tenggat ketat akibat resistensi yang meluas (60% petugas). Resistensi ini bersifat ganda: teknis (infrastruktur jaringan lemah) dan non-teknis (ketidaknyamanan psikologis terhadap perubahan). Keduanya memerlukan pendekatan berbeda.

ANALISIS PENYEBAB:
Resistensi teknis: wilayah terpencil memiliki konektivitas tidak stabil yang memunculkan kekhawatiran nyata tentang kehilangan data. Resistensi non-teknis: petugas merasa pelatihan dasar belum cukup, tidak ada waktu praktik mandiri sebelum survei nyata, dan tidak ada sistem peer support. Akar masalah: desain implementasi tidak memperhitungkan keragaman kesiapan petugas.

USULAN SOLUSI:
Strategi tiga lapis: (1) solusi teknis untuk wilayah tanpa jaringan (mode offline CAPI + sinkronisasi berkala), (2) sistem buddy/mentor: petugas yang sudah mahir mendampingi yang belum, (3) sesi latihan terfokus selama 3 hari dengan simulasi kondisi lapangan nyata. Tidak ada opsi kembali ke manual — ini akan menciptakan preseden negatif dan inkonsistensi data.

RENCANA IMPLEMENTASI:
Minggu 1: Pemetaan cepat 45 petugas ke dalam tiga kategori kesiapan (mahir, sedang, belum siap). Hari 1-3: Pelatihan intensif khusus kelompok belum siap dengan simulasi kasus nyata. Hari 4-7: Uji coba lapangan terbatas dengan pendampingan. Minggu 2-3: Implementasi penuh dengan sistem pelaporan harian dan helpdesk.

ANTISIPASI RISIKO:
Risiko utama: kehilangan data di wilayah tanpa jaringan. Mitigasi: konfirmasi fitur offline CAPI aktif di semua perangkat sebelum turun lapangan. Risiko kedua: petugas berbohong tentang kesiapan karena tekanan. Mitigasi: buat suasana aman untuk mengakui kesulitan, tanpa konsekuensi penilaian.

INDIKATOR KEBERHASILAN:
100% data berhasil terkumpul menggunakan CAPI. Tingkat kesalahan entri tidak lebih tinggi dari survei manual sebelumnya. Kurang dari 5% data yang perlu diinput ulang. Petugas melaporkan tingkat kepercayaan diri yang lebih tinggi pada akhir survei.`,
    keywords: ["resistensi", "hambatan", "infrastruktur", "kapasitas", "kesiapan", "teknologi", "teknis", "non-teknis", "wilayah", "jaringan", "kompetensi", "pendampingan", "pelatihan", "offline", "buddy", "jadwal", "prioritas", "supervisi", "monitoring", "tahap", "kegagalan", "data", "moral", "kapasitas jangka panjang", "CAPI", "offline mode"]
  },
  {
    id: "cs5",
    title: "Kasus 5 – Permintaan Akses Data Mikro Sensitif",
    category: "⚖️ Etika Data & Integritas Layanan",
    duration: "45 menit",
    background: `Sebuah lembaga penelitian swasta mengajukan permintaan resmi untuk mengakses data mikro survei sosial ekonomi yang belum dipublikasi. Mereka mengklaim membutuhkan data ini untuk penelitian kebijakan yang akan disampaikan dalam forum nasional bulan depan. Bersamaan dengan itu, ada komunikasi informal dari seorang pejabat daerah yang meminta Anda "membantu mempercepat proses" akses data tersebut. Regulasi akses data mikro cukup ketat dan proses normal membutuhkan 2–3 bulan. Anda adalah Kepala Seksi Layanan Statistik.`,
    questions: [
      "Identifikasi dimensi masalah dalam kasus ini: teknis, etis, dan politis.",
      "Bagaimana Anda menangani permintaan resmi lembaga penelitian sesuai prosedur yang berlaku?",
      "Bagaimana Anda merespons tekanan informal dari pejabat daerah dengan tetap menjaga integritas?",
      "Usulan mekanisme yang membuat layanan data mikro lebih responsif tanpa melanggar regulasi."
    ],
    template: `IDENTIFIKASI MASALAH:
Kasus ini memiliki tiga dimensi yang harus dikelola sekaligus: (1) teknis — permintaan data mikro yang prosesnya panjang vs. tenggat penelitian yang dekat, (2) etis — integritas dan kerahasiaan data responden, (3) politis — tekanan informal dari pejabat yang berpotensi menciptakan konflik kepentingan.

ANALISIS PENYEBAB:
Masalah mendasar adalah tidak adanya mekanisme fast-track yang sah untuk penelitian kebijakan yang memiliki urgensi tinggi. Celah ini membuka ruang tekanan informal. Faktor lain: komunikasi informal pejabat adalah pelanggaran protokol tata kelola yang perlu direspons dengan hati-hati namun tegas.

USULAN SOLUSI:
Dua jalur yang berjalan paralel: (1) Proses permintaan resmi dilanjutkan sesuai regulasi yang berlaku tanpa pengecualian. Saya akan membantu lembaga penelitian memahami regulasi dan mempercepat kelengkapan administrasi dari sisi mereka. (2) Tekanan informal direspons melalui saluran formal — saya akan melaporkan komunikasi ini kepada atasan sebagai tindakan perlindungan diri dan transparansi institusi.

RENCANA IMPLEMENTASI:
Hari 1: Balas permintaan resmi lembaga dengan panduan persyaratan lengkap dan timeline yang realistis. Hari 2: Sampaikan kepada atasan tentang komunikasi informal pejabat, dokumentasikan secara tertulis. Minggu 2-4: Fasilitasi proses pengajuan secara maksimal sesuai kewenangan yang ada — terutama verifikasi kelengkapan dokumen secepat mungkin. Jika ada layanan data agregat yang memenuhi kebutuhan penelitian, tawarkan sebagai alternatif.

ANTISIPASI RISIKO:
Risiko terbesar: tekanan pejabat menguat jika diabaikan. Mitigasi: respons formal yang sopan, terdokumentasi, dan merujuk pada regulasi — bukan penolakan personal. Risiko kedua: lembaga penelitian kecewa dan mempersoalkan prosedur BPS. Mitigasi: komunikasi transparan tentang alasan dan timeline dari awal.

INDIKATOR KEBERHASILAN:
Proses permintaan berjalan sesuai regulasi tanpa intervensi luar. Tidak ada data yang diakses di luar prosedur resmi. Atasan telah mendapatkan informasi tentang tekanan informal. Evaluasi terhadap kemungkinan layanan fast-track yang sah untuk kategori penelitian kebijakan publik.`,
    keywords: ["etika", "integritas", "regulasi", "tekanan", "sensitif", "prosedur", "dimensi", "teknis", "politis", "risiko", "kepentingan", "transparansi", "komunikasi", "formal", "SOP", "konflik kepentingan", "penyalahgunaan", "reputasi", "hukum", "kepercayaan", "tata kelola", "akuntabilitas"]
  }
];
// ==============================================================


const essayPrompts = [
  {
    title: "PE 1 – Integritas: Situasi Bertentangan dengan Nilai & Etika Organisasi",
    prompt:
      "Dalam Anda melaksanakan tugas pasti pernah mengalami situasi yang bertentangan dengan nilai, norma, dan etika organisasi. Ceritakan pengalaman terbaik Anda ketika berhasil menghadapi situasi tersebut! Jelaskan situasinya seperti apa, kendala yang dihadapi, peran Anda dan hasilnya seperti apa!",
    kompetensi: "Integritas",
    template:
      "SITUASI & TUGAS (siapa yang terlibat, konteks lengkap):\nPada saat itu saya menghadapi situasi yang bertentangan dengan nilai/norma organisasi, yaitu...\nPihak yang terlibat: ...\n\nKENDALA:\nKendala utama yang saya hadapi adalah...\n\nLANGKAH YANG SAYA AMBIL (dan alasannya):\nLangkah pertama yang saya ambil adalah... karena...\nLangkah selanjutnya...\n\nHASIL:\nHasil akhir dari kejadian ini adalah...\n\nREFLEKSI (pembelajaran untuk level Madya):\nDari pengalaman ini saya belajar bahwa...",
  },
  {
    title: "PE 2 – Kerja Sama: Bekerjasama dalam Tim",
    prompt:
      "Sepanjang perjalanan karir Anda pasti pernah bekerjasama dalam sebuah tim. Ceritakan pengalaman terbaik Anda ketika berhasil bekerjasama dalam tim untuk menyelesaikan suatu tugas pekerjaan! Jelaskan situasinya seperti apa, kendala yang dihadapi, peran Anda dan hasilnya seperti apa!",
    kompetensi: "Kerja Sama",
    template:
      "SITUASI & TUGAS (siapa yang terlibat, konteks lengkap):\nSaya terlibat dalam sebuah tim untuk menyelesaikan...\nAnggota tim yang terlibat: ...\n\nKENDALA:\nKendala yang saya temui dalam kerja sama tim ini adalah...\n\nLANGKAH YANG SAYA AMBIL (dan alasannya):\nPeran saya dalam tim adalah...\nLangkah yang saya ambil untuk mengatasi kendala...\n\nHASIL:\nHasil kerja sama tim ini adalah...\n\nREFLEKSI:\nPembelajaran yang saya bawa dari pengalaman ini adalah...",
  },
  {
    title: "PE 3 – Komunikasi: Menyatakan Pendapat, Ide, dan Argumen",
    prompt:
      "Ceritakan pengalaman terbaik Anda ketika berhasil dalam tugas pekerjaan yang menuntut kemampuan untuk berkomunikasi dengan orang lain (menyatakan pendapat, ide/gagasan, argumen, baik secara lisan maupun tertulis)! Jelaskan situasinya seperti apa, kendala yang dihadapi, peran Anda dan hasilnya seperti apa!",
    kompetensi: "Komunikasi",
    template:
      "SITUASI & TUGAS (siapa yang terlibat, konteks lengkap):\nSaya dihadapkan pada situasi yang menuntut kemampuan komunikasi, yaitu...\nPihak yang perlu saya komunikasikan: ...\n\nKENDALA:\nKendala komunikasi yang saya temui adalah...\n\nLANGKAH YANG SAYA AMBIL (dan alasannya):\nSaya memilih untuk menyampaikan... karena...\nCara/media komunikasi yang saya gunakan: ...\n\nHASIL:\nDampak komunikasi tersebut adalah...\n\nREFLEKSI:\nDari pengalaman ini saya belajar tentang komunikasi yang efektif bahwa...",
  },
  {
    title: "PE 4 – Orientasi Hasil: Menyelesaikan Tugas Sulit dengan Menjaga Kualitas",
    prompt:
      "Ceritakan pengalaman Anda ketika berhasil menyelesaikan tugas dalam situasi yang sulit dengan tetap berpegang pada kualitas hasil dan target kerja! Jelaskan situasinya seperti apa, kendala yang dihadapi, peran Anda dan hasilnya seperti apa!",
    kompetensi: "Orientasi pada Hasil",
    template:
      "SITUASI & TUGAS (siapa yang terlibat, konteks lengkap):\nSituasi sulit yang saya hadapi adalah...\nTarget kerja yang harus dicapai: ...\nPihak yang terlibat: ...\n\nKENDALA:\nKesulitan yang saya temui adalah...\n\nLANGKAH YANG SAYA AMBIL (dan alasannya):\nUntuk tetap menjaga kualitas dan target, saya mengambil langkah...\n\nHASIL:\nHasil akhir dari penugasan ini adalah... (cantumkan capaian terukur)\n\nREFLEKSI:\nPengalaman ini menunjukkan bahwa pada level Madya saya perlu...",
  },
  {
    title: "PE 5 – Pelayanan Publik: Memberikan Pelayanan Terbaik",
    prompt:
      "Ceritakan pengalaman Anda ketika berhasil memberikan pelayanan yang berhubungan dengan tugas Anda sehari-hari. Jelaskan situasinya seperti apa, kendala yang dihadapi, peran Anda dan hasilnya seperti apa!",
    kompetensi: "Pelayanan Publik",
    template:
      "SITUASI & TUGAS (siapa yang terlibat, konteks lengkap):\nSituasi pelayanan yang saya hadapi adalah...\nPengguna/pihak yang dilayani: ...\n\nKENDALA:\nKendala dalam memberikan pelayanan: ...\n\nLANGKAH YANG SAYA AMBIL (dan alasannya):\nLangkah yang saya ambil untuk meningkatkan kualitas pelayanan...\n\nHASIL:\nHasil dari pelayanan yang saya berikan adalah...\n\nREFLEKSI:\nDari pengalaman ini saya belajar bahwa pelayanan yang baik membutuhkan...",
  },
  {
    title: "PE 6 – Pengembangan Diri & Orang Lain",
    prompt:
      "Ceritakan pengalaman Anda ketika berhasil melakukan pengembangan diri dan juga orang lain yang terkait dengan pekerjaan Anda. Jelaskan situasinya seperti apa, kendala yang Anda hadapi, peran Anda saat itu dan seperti apa hasilnya!",
    kompetensi: "Pengembangan Diri dan Orang Lain",
    template:
      "SITUASI & TUGAS (siapa yang terlibat, konteks lengkap):\nKonteks pengembangan diri dan orang lain yang saya lakukan: ...\nPihak yang saya bantu kembangkan: ...\n\nKENDALA:\nKendala dalam pengembangan yang saya temui: ...\n\nLANGKAH YANG SAYA AMBIL (dan alasannya):\nUpaya pengembangan diri yang saya lakukan: ...\nCara saya membantu pengembangan orang lain: ...\n\nHASIL:\nHasil pengembangan tersebut terlihat dari...\n\nREFLEKSI:\nHal yang saya pahami tentang pentingnya pengembangan berkelanjutan adalah...",
  },
  {
    title: "PE 7 – Mengelola Perubahan: Penyesuaian Cepat dalam Tim",
    prompt:
      "Ceritakan pengalaman keberhasilan Anda ketika dihadapkan pada situasi yang menuntut Anda untuk berubah dengan cepat. Anda dan Tim kerja Anda harus melakukan penyesuaian secara cepat untuk menghadapi tuntutan perubahan tersebut! Jelaskan situasinya seperti apa, kendala yang Anda hadapi, peran Anda saat itu dan seperti apa hasilnya!",
    kompetensi: "Mengelola Perubahan",
    template:
      "SITUASI & TUGAS (siapa yang terlibat, konteks lengkap):\nPerubahan yang terjadi dan menuntut penyesuaian cepat: ...\nAnggota tim yang terlibat: ...\n\nKENDALA:\nKendala dalam melakukan penyesuaian cepat: ...\n\nLANGKAH YANG SAYA AMBIL (dan alasannya):\nLangkah yang saya ambil untuk memimpin adaptasi tim: ...\n\nHASIL:\nHasil penyesuaian tersebut berdampak pada...\n\nREFLEKSI:\nPengalaman ini menunjukkan kesiapan saya dalam mengelola perubahan karena...",
  },
  {
    title: "PE 8 – Pengambilan Keputusan: Memutuskan di Situasi Sulit",
    prompt:
      "Dalam menyelesaikan tugas sehari-hari tentu Anda pernah bertemu dengan situasi yang menyebabkan Anda harus mengambil keputusan diantara banyak pilihan situasi yang sulit. Ceritakan pengalaman keberhasilan Anda ketika menghadapi situasi tersebut! Jelaskan situasinya seperti apa, kendala yang Anda hadapi, peran Anda saat itu dan seperti apa hasilnya!",
    kompetensi: "Pengambilan Keputusan",
    template:
      "SITUASI & TUGAS (siapa yang terlibat, konteks lengkap):\nSituasi yang mengharuskan saya mengambil keputusan sulit: ...\nAlternatif pilihan yang tersedia: ...\nPihak yang terlibat: ...\n\nKENDALA:\nKesulitan dalam pengambilan keputusan ini: ...\n\nLANGKAH YANG SAYA AMBIL (dan alasannya):\nSaya memutuskan... karena pertimbangan...\nLangkah mitigasi risiko yang saya ambil: ...\n\nHASIL:\nKeputusan tersebut berdampak pada...\n\nREFLEKSI:\nHal yang saya pegang dalam pengambilan keputusan dan akan saya bawa ke peran Madya adalah...",
  },
  {
    title: "PE 9 – Perekat Bangsa: Hubungan Harmonis dengan Kolega Beragam",
    prompt:
      "Sepanjang perjalanan karir Anda tentu pernah atau bahkan sering berinteraksi dengan kolega, baik dari internal maupun eksternal organisasi, yang memiliki karakter dan latarbelakang yang beragam baik dari sisi agama, sifat, budaya, ataupun ras. Ceritakan pengalaman keberhasilan Anda dalam membina hubungan yang harmonis ketika bekerja dengan kolega dengan keberagaman tersebut! Jelaskan situasinya seperti apa, kendala yang Anda hadapi, peran Anda saat itu dan seperti apa hasilnya!",
    kompetensi: "Perekat dan Pemersatu Bangsa",
    template:
      "SITUASI & TUGAS (siapa yang terlibat, konteks lengkap):\nSaya bekerja dengan kolega/stakeholder dari latar belakang beragam, yaitu...\nKonteks keberagaman (agama, budaya, karakter): ...\n\nKENDALA:\nKendala dalam menjaga hubungan harmonis: ...\n\nLANGKAH YANG SAYA AMBIL (dan alasannya):\nPendekatan yang saya gunakan untuk membina hubungan harmonis: ...\n\nHASIL:\nHubungan kerja yang terbina menghasilkan...\n\nREFLEKSI:\nSaya belajar bahwa sensitivitas sosial-kultural penting karena...",
  },
];

const sjtQuestions = [
  {
    title: "Soal 1",
    stem:
      "Anda menjadi ketua tim publikasi di BPS. Menjelang tenggat terbit, Anda menemukan ada anggota tim yang melakukan penyuntingan data tidak sesuai SOP sehingga berpotensi memengaruhi kualitas publikasi. Apa tindakan paling tepat?",
    options: [
      "Tetap menerbitkan publikasi agar tenggat aman, lalu memperbaiki di edisi berikutnya bila diperlukan.",
      "Menghentikan proses sementara pada bagian terdampak, memverifikasi ulang data sesuai SOP, mengatur ulang pembagian kerja, dan mengomunikasikan risiko serta opsi waktu kepada pimpinan secara terbuka.",
      "Meminta anggota yang bersangkutan bertanggung jawab sendiri tanpa melibatkan tim lain agar proses tetap cepat.",
      "Menghapus bagian data yang bermasalah tanpa penjelasan agar publikasi tetap terbit tepat waktu."
    ],
    correct: 1,
    competency: "Integritas, orientasi hasil, dan kualitas data",
    feedback:
      "Pilihan terbaik menjaga integritas statistik sekaligus mengelola target publikasi secara profesional. Di BPS, kualitas output tidak boleh dikorbankan, tetapi risiko keterlambatan juga perlu dikelola secara terbuka dan terukur."
  },
  {
    title: "Soal 2",
    stem:
      "Dalam rapat pimpinan, Anda diminta menyiapkan ringkasan indikator strategis hari itu juga. Sebagian data dari kabupaten/kota belum tervalidasi penuh. Apa respons terbaik?",
    options: [
      "Mengirim data apa adanya agar tenggat terpenuhi, nanti diperbaiki jika ada masalah.",
      "Menunda pengiriman tanpa penjelasan rinci karena kualitas data lebih penting daripada tenggat.",
      "Menyampaikan laporan sementara dengan penanda yang jelas pada data yang masih perlu validasi, menyebutkan risiko, dan memberi komitmen waktu pembaruan final.",
      "Menghapus data yang belum valid agar laporan terlihat bersih dan rapi."
    ],
    correct: 2,
    competency: "Integritas dan komunikasi",
    feedback:
      "Pendekatan paling matang adalah transparan atas status data sambil tetap responsif pada kebutuhan pimpinan. Ini menunjukkan integritas, pengelolaan risiko, dan komunikasi yang bertanggung jawab."
  },
  {
    title: "Soal 3",
    stem:
      "Pada forum koordinasi statistik sektoral, perwakilan instansi lain cenderung defensif ketika BPS menyampaikan pentingnya standardisasi definisi dan metadata. Apa langkah paling tepat?",
    options: [
      "Menegaskan bahwa standar BPS harus langsung diikuti tanpa perlu diskusi lebih lanjut.",
      "Memetakan titik keberatan mereka, menjelaskan manfaat standardisasi dengan bahasa yang relevan bagi kebutuhan mereka, lalu menyepakati tindak lanjut bertahap.",
      "Menghindari pembahasan standar agar hubungan antarinstansi tetap nyaman.",
      "Menunggu pimpinan instansi lain yang menyelesaikan sendiri resistensi internal mereka."
    ],
    correct: 1,
    competency: "Komunikasi, kerja sama, dan perekat bangsa",
    feedback:
      "Pada konteks BPS, memimpin koordinasi eksternal perlu pendekatan persuasif dan berbasis manfaat. Kandidat Madya dinilai dari kemampuannya membangun kesepahaman, bukan sekadar memaksakan standar."
  },
  {
    title: "Soal 4",
    stem:
      "Pengguna layanan statistik mengeluhkan respons konsultasi data dari unit Anda lambat dan tidak seragam. Tim internal merasa beban kerja sedang tinggi sehingga keluhan itu dianggap tidak adil. Apa yang sebaiknya Anda lakukan terlebih dahulu?",
    options: [
      "Membela tim karena mereka sudah bekerja keras dan keluhan belum tentu objektif.",
      "Meminta pemangku kepentingan menunggu karena evaluasi internal butuh waktu lama.",
      "Mengumpulkan fakta dari kedua sisi, memetakan titik masalah layanan, lalu menyusun respons perbaikan yang terukur dan dikomunikasikan secara terbuka.",
      "Menerima semua kritik sebagai benar dan langsung mengganti prosedur lama."
    ],
    correct: 2,
    competency: "Pelayanan publik dan orientasi hasil",
    feedback:
      "Respons awal yang kuat adalah berbasis fakta dan diarahkan pada perbaikan layanan. Kandidat Madya perlu menunjukkan keseimbangan antara empati kepada pengguna dan objektivitas pada proses internal."
  },
  {
    title: "Soal 5",
    stem:
      "Tim Anda akan melakukan pembinaan statistik sektoral dan pendampingan metadata di wilayah dengan karakter sosial, budaya, dan kapasitas instansi yang beragam. Ada usulan memakai pendekatan komunikasi seragam agar lebih cepat. Apa sikap paling tepat?",
    options: [
      "Menerapkan pendekatan seragam agar kontrol program lebih mudah dilakukan.",
      "Menyesuaikan strategi komunikasi dengan konteks sosial setempat, sambil menjaga pesan inti dan tujuan program tetap sama.",
      "Menyerahkan seluruh komunikasi kepada tokoh lokal tanpa arahan lebih lanjut.",
      "Menghindari keterlibatan unsur budaya karena dikhawatirkan memperlambat program."
    ],
    correct: 1,
    competency: "Sosial kultural dan perekat bangsa",
    feedback:
      "Sensitivitas konteks sosial-kultural sangat penting. Jawaban terbaik menunjukkan kemampuan adaptif tanpa kehilangan arah kebijakan atau sasaran program."
  },
  {
    title: "Soal 6",
    stem:
      "Dalam proyek penguatan dashboard atau sistem data internal, dua anggota tim memiliki kinerja sangat berbeda. Satu orang unggul tetapi mulai kewalahan, sementara yang lain tertinggal dan kehilangan percaya diri. Apa tindakan paling tepat?",
    options: [
      "Memberikan seluruh pekerjaan penting kepada yang unggul agar target aman.",
      "Membiarkan mereka mengatur ritme masing-masing karena semua sudah dewasa.",
      "Membagi ulang beban secara proporsional, memberi coaching pada yang tertinggal, dan memastikan target proyek tetap dipantau ketat.",
      "Mengganti anggota yang tertinggal sesegera mungkin tanpa pembinaan."
    ],
    correct: 2,
    competency: "Pengembangan orang lain dan orientasi hasil",
    feedback:
      "Level Madya tidak hanya mengejar target, tetapi juga menjaga keberlanjutan kinerja tim. Jawaban terbaik menyeimbangkan hasil jangka pendek dan penguatan kapasitas anggota."
  },
  {
    title: "Soal 7",
    stem:
      "Anda melihat beberapa pegawai baru di unit pengolahan data masih sering bingung membaca alur validasi dan pengecekan konsistensi. Target pekerjaan tetap tinggi. Apa tindakan paling tepat?",
    options: [
      "Membiarkan mereka belajar sendiri agar cepat mandiri.",
      "Mengambil alih pekerjaan yang sulit agar target tetap aman.",
      "Menyusun panduan singkat, memberi coaching terfokus pada titik rawan, dan memantau kemajuan mereka sambil menjaga distribusi pekerjaan tetap realistis.",
      "Menunda semua pekerjaan baru sampai mereka benar-benar mahir."
    ],
    correct: 2,
    competency: "Pengembangan diri dan orang lain",
    feedback:
      "Kandidat Madya dinilai bukan hanya dari kinerja pribadi, tetapi juga dari kemampuannya mempercepat kematangan tim. Coaching yang terarah dan tetap menjaga target adalah pilihan paling seimbang."
  },
  {
    title: "Soal 8",
    stem:
      "BPS akan menerapkan aplikasi baru untuk dokumentasi metadata. Sebagian tim menolak karena merasa sistem lama lebih nyaman, sementara tenggat implementasi sudah ditetapkan. Apa langkah paling tepat?",
    options: [
      "Memaksa seluruh tim langsung memakai aplikasi baru tanpa penjelasan tambahan.",
      "Menunda implementasi sampai seluruh tim benar-benar siap.",
      "Mengidentifikasi titik resistensi, memberi contoh manfaat praktis, menyiapkan pendampingan singkat, dan menerapkan transisi bertahap dengan target yang jelas.",
      "Mengizinkan setiap orang memilih sistem yang mereka sukai agar tidak ada konflik."
    ],
    correct: 2,
    competency: "Mengelola perubahan",
    feedback:
      "Perubahan yang berhasil biasanya bukan sekadar diumumkan, tetapi dikelola. Pilihan terbaik menunjukkan kemampuan membaca resistensi, membina adopsi, dan tetap menjaga arah implementasi."
  },
  {
    title: "Soal 9",
    stem:
      "Anda diminta merekomendasikan apakah suatu tabel indikator sudah layak dipublikasikan. Sebagian indikator sudah stabil, tetapi satu komponen penting masih menunjukkan anomali yang belum terjelaskan. Apa keputusan paling tepat?",
    options: [
      "Tetap merekomendasikan publikasi karena sebagian besar data sudah stabil.",
      "Merekomendasikan penundaan sementara pada bagian terdampak sambil mempercepat penelusuran penyebab anomali dan menjelaskan konsekuensi setiap opsi kepada pimpinan.",
      "Mengganti nilai anomali dengan rata-rata periode sebelumnya agar tabel tampak konsisten.",
      "Membiarkan pimpinan memutuskan sendiri tanpa analisis Anda agar aman."
    ],
    correct: 1,
    competency: "Pengambilan keputusan dan integritas",
    feedback:
      "Pada level Madya, keputusan yang baik tetap harus dibangun di atas analisis risiko dan keberanian menjaga kualitas. Memberi opsi yang jelas kepada pimpinan lebih kuat daripada sekadar melempar masalah."
  },
  {
    title: "Soal 10",
    stem:
      "Dalam tim lintas wilayah, ada perbedaan gaya kerja dan komunikasi yang mulai menimbulkan salah paham. Jika dibiarkan, koordinasi kegiatan statistik lapangan bisa terganggu. Apa langkah paling tepat?",
    options: [
      "Meminta semua anggota mengikuti gaya komunikasi dari unit yang paling dominan.",
      "Menghindari pembicaraan tentang perbedaan agar situasi tidak makin sensitif.",
      "Membuka ruang dialog yang aman untuk menyamakan ekspektasi kerja, menyepakati norma kolaborasi, dan menekankan tujuan bersama di atas perbedaan gaya pribadi.",
      "Memisahkan anggota tim yang sering berbeda pendapat agar tidak saling bertemu."
    ],
    correct: 2,
    competency: "Perekat bangsa dan kerja sama",
    feedback:
      "Aspek sosial-kultural diukur dari kemampuan menjaga produktivitas di tengah keberagaman. Jawaban terbaik tidak menutupi perbedaan, melainkan mengelolanya menjadi kerja sama yang sehat."
  }
];

const essayPromptSelect = document.querySelector("#essayPrompt");
const essayPromptText = document.querySelector("#essayPromptText");
const essayAnswer = document.querySelector("#essayAnswer");
const essayChecklist = document.querySelector("#essayChecklist");
const essayFeedback = document.querySelector("#essayFeedback");
const essayScore = document.querySelector("#essayScore");
const analyzeEssayButton = document.querySelector("#analyzeEssay");
const loadTemplateButton = document.querySelector("#loadTemplate");
const printButton = document.querySelector("#printButton");
const presentationToggle = document.querySelector("#presentationToggle");

const questionTitle = document.querySelector("#questionTitle");
const questionStem = document.querySelector("#questionStem");
const questionOptions = document.querySelector("#questionOptions");
const questionFeedback = document.querySelector("#questionFeedback");
const progressText = document.querySelector("#progressText");
const resultScore = document.querySelector("#resultScore");
const resultSummary = document.querySelector("#resultSummary");
const prevQuestionButton = document.querySelector("#prevQuestion");
const nextQuestionButton = document.querySelector("#nextQuestion");
const presentationToolbar = document.querySelector("#presentationToolbar");
const presentationTitle = document.querySelector("#presentationTitle");
const presentationProgress = document.querySelector("#presentationProgress");
const presentationPrev = document.querySelector("#presentationPrev");
const presentationNext = document.querySelector("#presentationNext");
const presentationExit = document.querySelector("#presentationExit");
const slideSections = Array.from(document.querySelectorAll(".content > section"));

let currentQuestionIndex = 0;
const answers = new Array(sjtQuestions.length).fill(null);
let presentationMode = false;
let activeSlideIndex = 0;

function renderEssayPrompt() {
  const selectedPrompt = essayPrompts[essayPromptSelect.selectedIndex];
  essayPromptText.innerHTML = `<span style="display:inline-block;background:#f4a021;color:#fff;border-radius:4px;padding:2px 10px;font-size:0.78rem;font-weight:700;margin-bottom:8px;">Kompetensi: ${selectedPrompt.kompetensi}</span><br>${selectedPrompt.prompt}`;
}

function renderEssayChecklist(checks) {
  essayChecklist.innerHTML = "";

  checks.forEach((check) => {
    const item = document.createElement("li");
    item.className = check.passed ? "ready" : "missing";
    item.textContent = `${check.passed ? "Siap" : "Perlu dikuatkan"}: ${check.label}`;
    essayChecklist.appendChild(item);
  });
}

function analyzeEssay() {
  const text = essayAnswer.value.trim();
  const normalized = text.toLowerCase();
  const checks = [
    {
      label: "Ada konteks situasi yang jelas.",
      passed: normalized.includes("situation") || normalized.includes("situasi") || normalized.includes("konteks"),
    },
    {
      label: "Ada tugas, peran, atau deskripsi siapa yang terlibat.",
      passed: normalized.includes("task") || normalized.includes("tanggung jawab") || normalized.includes("peran") || normalized.includes("tugas") || normalized.includes("terlibat") || normalized.includes("kendala"),
    },
    {
      label: "Ada tindakan yang Anda lakukan.",
      passed: normalized.includes("action") || normalized.includes("langkah") || normalized.includes("saya melakukan") || normalized.includes("tindakan"),
    },
    {
      label: "Ada hasil yang terukur atau perubahan nyata.",
      passed:
        normalized.includes("result") ||
        normalized.includes("hasil") ||
        /\d+%|\d+\s*(hari|bulan|minggu|orang|unit|persen|kegiatan|dokumen)/.test(normalized),
    },
    {
      label: "Ada refleksi atau pembelajaran untuk level Madya.",
      passed: normalized.includes("reflection") || normalized.includes("pembelajaran") || normalized.includes("saya belajar"),
    },
    {
      label: "Jawaban cukup kaya dan tidak terlalu singkat.",
      passed: text.split(/\s+/).filter(Boolean).length >= 80,
    },
  ];

  const passedCount = checks.filter((item) => item.passed).length;
  const score = Math.round((passedCount / checks.length) * 100);

  renderEssayChecklist(checks);
  essayScore.textContent = `${score}%`;

  if (!text) {
    essayFeedback.innerHTML =
      "Jawaban masih kosong. Tulis kerangka pengalaman terbaik Anda dengan format <strong>STAR+R</strong>, lalu analisis lagi.";
    return;
  }

  const missingLabels = checks
    .filter((item) => !item.passed)
    .map((item) => item.label.toLowerCase());

  if (missingLabels.length === 0) {
    essayFeedback.innerHTML =
      "Jawaban Anda sudah kuat untuk latihan awal. Langkah berikutnya adalah mempertajam <strong>angka hasil</strong>, memperjelas <strong>peran pribadi</strong>, dan melatih penyampaian lisan maksimal 2 menit.";
    return;
  }

  essayFeedback.innerHTML = `Jawaban Anda sudah memiliki dasar yang baik, tetapi masih perlu dikuatkan pada bagian <strong>${missingLabels.join(
    ", "
  )}</strong>. Pastikan cerita Anda bergerak dari konteks, keputusan, hasil, lalu refleksi.`;
}

function renderQuestion() {
  const question = sjtQuestions[currentQuestionIndex];
  questionTitle.textContent = question.title;
  questionStem.innerHTML = `${question.stem}<br /><br /><strong>Kompetensi utama:</strong> ${question.competency}`;
  progressText.textContent = `${currentQuestionIndex + 1} / ${sjtQuestions.length}`;
  questionOptions.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-card";

    if (answers[currentQuestionIndex] === index) {
      button.classList.add("selected");
      button.classList.add(index === question.correct ? "correct" : "incorrect");
    }

    button.innerHTML = `<strong>${String.fromCharCode(65 + index)}.</strong> ${option}`;
    button.addEventListener("click", () => {
      answers[currentQuestionIndex] = index;
      renderQuestion();
      updateResults();
    });
    questionOptions.appendChild(button);
  });

  if (answers[currentQuestionIndex] === null) {
    questionFeedback.innerHTML = "Pilih jawaban yang paling tepat untuk melihat pembahasan.";
  } else {
    const isCorrect = answers[currentQuestionIndex] === question.correct;
    questionFeedback.innerHTML = `<strong>${isCorrect ? "Pilihan paling tepat." : "Masih bisa dipertajam."}</strong> ${question.feedback}`;
  }

  prevQuestionButton.disabled = currentQuestionIndex === 0;
  nextQuestionButton.textContent =
    currentQuestionIndex === sjtQuestions.length - 1 ? "Selesai" : "Berikutnya";
}

function updateResults() {
  const completed = answers.filter((answer) => answer !== null).length;
  const score = answers.reduce((total, answer, index) => {
    if (answer === sjtQuestions[index].correct) {
      return total + 1;
    }
    return total;
  }, 0);

  resultScore.textContent = `${score} / ${sjtQuestions.length}`;

  if (completed < sjtQuestions.length) {
    resultSummary.textContent =
      "Selesaikan seluruh soal untuk melihat ringkasan kekuatan dan area penguatan Anda.";
    return;
  }

  if (score >= 7) {
    resultSummary.textContent =
      "Cara berpikir Anda sudah dekat dengan ekspektasi level Madya: strategis, kolaboratif, dan tetap menjaga hasil. Ulangi sekali lagi sambil membaca pembahasan setiap soal.";
    return;
  }

  if (score >= 5) {
    resultSummary.textContent =
      "Dasar penilaian Anda sudah cukup baik, tetapi masih perlu memperkuat area integritas, layanan, dan pengelolaan stakeholder. Fokus pada alasan memilih tindakan, bukan hanya tindakannya.";
    return;
  }

  resultSummary.textContent =
    "Gunakan simulasi ini sebagai peta belajar. Bacalah kembali bagian strategi lulus, lalu kerjakan ulang dengan sudut pandang dampak, tata kelola, dan sensitivitas sosial-kultural.";
}

function getSlideTitle(section) {
  return (
    section.dataset.slideTitle ||
    section.querySelector("h2, h3, h4")?.textContent ||
    "Slide"
  );
}

function focusActiveSlide() {
  const activeSection = slideSections[activeSlideIndex];
  if (!activeSection) {
    return;
  }

  window.scrollTo(0, 0);
  activeSection.scrollIntoView({ behavior: "auto", block: "start" });
}

function renderPresentationState() {
  slideSections.forEach((section, index) => {
    section.classList.toggle("active-slide", presentationMode && index === activeSlideIndex);
  });

  if (!presentationMode) {
    // toolbar visibility controlled by CSS via body.presentation-mode class
    document.body.classList.remove("presentation-mode");
    presentationToggle.textContent = "Mode Presentasi";
    return;
  }

  document.body.classList.add("presentation-mode");
  // toolbar visibility controlled by CSS via body.presentation-mode class
  presentationTitle.textContent = getSlideTitle(slideSections[activeSlideIndex]);
  presentationProgress.textContent = `${activeSlideIndex + 1} / ${slideSections.length}`;
  presentationPrev.disabled = activeSlideIndex === 0;
  presentationNext.textContent =
    activeSlideIndex === slideSections.length - 1 ? "Selesai" : "Berikutnya";
  presentationToggle.textContent = "Keluar Presentasi";
  requestAnimationFrame(focusActiveSlide);
}

function setPresentationMode(enabled) {
  presentationMode = enabled;
  if (!enabled) {
    renderPresentationState();
    return;
  }

  activeSlideIndex = 0;
  renderPresentationState();
}

function goToSlide(nextIndex) {
  if (!presentationMode) {
    return;
  }

  if (nextIndex < 0 || nextIndex >= slideSections.length) {
    return;
  }

  activeSlideIndex = nextIndex;
  renderPresentationState();
}

function setupEssayPromptOptions() {
  essayPrompts.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.title;
    option.textContent = item.title;
    essayPromptSelect.appendChild(option);
  });
  renderEssayPrompt();
}

essayPromptSelect.addEventListener("change", renderEssayPrompt);
analyzeEssayButton.addEventListener("click", analyzeEssay);
loadTemplateButton.addEventListener("click", () => {
  const selectedPrompt = essayPrompts[essayPromptSelect.selectedIndex];
  essayAnswer.value = selectedPrompt.template;
  analyzeEssay();
});
printButton.addEventListener("click", () => window.print());
presentationToggle.addEventListener("click", () => {
  setPresentationMode(!presentationMode);
});

prevQuestionButton.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex -= 1;
    renderQuestion();
  }
});

nextQuestionButton.addEventListener("click", () => {
  if (currentQuestionIndex < sjtQuestions.length - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
    return;
  }

  updateResults();
  document.querySelector("#resultPanel").scrollIntoView({ behavior: "smooth", block: "nearest" });
});

presentationPrev.addEventListener("click", () => {
  goToSlide(activeSlideIndex - 1);
});

presentationNext.addEventListener("click", () => {
  if (activeSlideIndex === slideSections.length - 1) {
    setPresentationMode(false);
    return;
  }

  goToSlide(activeSlideIndex + 1);
});

presentationExit.addEventListener("click", () => {
  setPresentationMode(false);
});

document.addEventListener("keydown", (event) => {
  if (!presentationMode) {
    return;
  }

  if (event.key === "ArrowRight" || event.key === "PageDown") {
    event.preventDefault();
    goToSlide(Math.min(activeSlideIndex + 1, slideSections.length - 1));
  }

  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    goToSlide(Math.max(activeSlideIndex - 1, 0));
  }

  if (event.key === "Escape") {
    event.preventDefault();
    setPresentationMode(false);
  }
});

// ===================== SIMULASI ANALISIS KASUS =====================

const caseScenarioSelect = document.querySelector("#caseScenarioSelect");
const caseBackground = document.querySelector("#caseBackground");
const caseQuestionsList = document.querySelector("#caseQuestionsList");
const caseEssayAnswer = document.querySelector("#caseEssayAnswer");
const caseWordCount = document.querySelector("#caseWordCount");
const caseChecklist = document.querySelector("#caseChecklist");
const caseChecklistItems = document.querySelector("#caseChecklistItems");
const caseFeedbackText = document.querySelector("#caseFeedbackText");
const caseScore = document.querySelector("#caseScore");
const caseCategoryBadge = document.querySelector("#caseCategoryBadge");
const caseDurationBadge = document.querySelector("#caseDurationBadge");
const aiFeedbackResult = document.querySelector("#aiFeedbackResult");
const aiFeedbackContent = document.querySelector("#aiFeedbackContent");
const aiFeedbackLoading = document.querySelector("#aiFeedbackLoading");

function renderCaseScenario() {
  if (!caseScenarioSelect) return;
  const scenario = caseScenarios[caseScenarioSelect.selectedIndex];
  if (!scenario) return;

  caseCategoryBadge.textContent = scenario.category;
  caseDurationBadge.textContent = `⏱ ${scenario.duration}`;
  caseBackground.innerHTML = `<strong>Latar Belakang Kasus:</strong><br/><br/>${scenario.background}`;

  caseQuestionsList.innerHTML = "";
  scenario.questions.forEach((q) => {
    const li = document.createElement("li");
    li.textContent = q;
    caseQuestionsList.appendChild(li);
  });

  caseEssayAnswer.value = "";
  caseWordCount.textContent = "0 kata";
  caseChecklist.style.display = "none";
  aiFeedbackResult.style.display = "none";
  aiFeedbackLoading.style.display = "none";
}

function analyzeCaseEssay() {
  const text = caseEssayAnswer.value.trim();
  const normalized = text.toLowerCase();
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const scenario = caseScenarios[caseScenarioSelect.selectedIndex];

  const checks = [
    {
      label: "Identifikasi masalah utama secara spesifik.",
      passed: /identifikasi|masalah utama|inti masalah|permasalahan|masalah yang/.test(normalized),
    },
    {
      label: "Analisis penyebab atau akar masalah.",
      passed: /penyebab|akar masalah|faktor|mengapa|sistemik|latar belakang/.test(normalized),
    },
    {
      label: "Usulan solusi yang konkret dan beralasan.",
      passed: /solusi|langkah yang saya|usulan|strategi|rencana|saya akan|saya mengambil/.test(normalized),
    },
    {
      label: "Rencana implementasi dengan tahapan yang jelas.",
      passed: /implementasi|tahap|rencana|jadwal|minggu|hari ke|langkah \d|prioritas/.test(normalized),
    },
    {
      label: "Antisipasi risiko dan rencana mitigasinya.",
      passed: /risiko|mitigasi|antisipasi|kendala|hambatan|dampak negatif|konsekuensi/.test(normalized),
    },
    {
      label: "Indikator keberhasilan yang terukur.",
      passed: /indikator|keberhasilan|terukur|target|%|hasil akhir|dampak yang diharapkan/.test(normalized),
    },
    {
      label: "Mempertimbangkan pemangku kepentingan atau lintas unit.",
      passed: /pemangku kepentingan|stakeholder|pimpinan|tim|instansi|lintas|koordinasi|pihak/.test(normalized),
    },
    {
      label: "Jawaban cukup komprehensif (min. 200 kata).",
      passed: wordCount >= 200,
    },
  ];

  const passedCount = checks.filter((c) => c.passed).length;
  const scoreVal = Math.round((passedCount / checks.length) * 100);

  caseScore.textContent = `${scoreVal}%`;
  caseChecklistItems.innerHTML = "";
  checks.forEach((c) => {
    const li = document.createElement("li");
    li.className = c.passed ? "ready" : "missing";
    li.textContent = `${c.passed ? "✓ Sudah ada" : "○ Perlu ditambahkan"}: ${c.label}`;
    caseChecklistItems.appendChild(li);
  });

  const missingItems = checks.filter((c) => !c.passed).map((c) => c.label.toLowerCase());
  if (missingItems.length === 0) {
    caseFeedbackText.innerHTML = `<strong>Jawaban Anda sudah sangat lengkap!</strong> Pastikan setiap bagian ditulis dengan contoh konkret dan angka terukur — bukan hanya pola kalimat. Langkah berikutnya: latih penyampaian lisan dalam 3 menit.`;
  } else if (scoreVal >= 75) {
    caseFeedbackText.innerHTML = `Jawaban sudah kuat di sebagian besar dimensi. Perlu diperkuat pada: <strong>${missingItems.join(", ")}</strong>. Fokus pada penajaman bagian yang masih normatif.`;
  } else if (scoreVal >= 50) {
    caseFeedbackText.innerHTML = `Dasar analisis sudah ada, tetapi masih perlu dikembangkan pada: <strong>${missingItems.join(", ")}</strong>. Coba gunakan kerangka 6 blok: Masalah → Penyebab → Solusi → Implementasi → Risiko → Indikator.`;
  } else {
    caseFeedbackText.innerHTML = `Jawaban masih perlu pengembangan signifikan. Area yang belum terisi: <strong>${missingItems.join(", ")}</strong>. Mulailah dengan kerangka singkat sebelum menulis panjang.`;
  }

  caseChecklist.style.display = "block";
  aiFeedbackResult.style.display = "none";
}

async function getAIFeedback() {
  const apiKey = document.querySelector("#groqApiKey").value.trim();
  const text = caseEssayAnswer.value.trim();
  const scenario = caseScenarios[caseScenarioSelect.selectedIndex];

  if (!apiKey) {
    alert("Masukkan Groq API Key terlebih dahulu.");
    return;
  }
  if (!text || text.split(/\s+/).filter(Boolean).length < 50) {
    alert("Tulis jawaban analisis terlebih dahulu (minimal 50 kata) sebelum meminta umpan balik AI.");
    return;
  }

  aiFeedbackLoading.style.display = "block";
  aiFeedbackResult.style.display = "none";

  const systemPrompt = `Anda adalah asesor senior mansoskul (manajemen sosio-kultural) BPS yang berpengalaman mengevaluasi jawaban analisis kasus esai kandidat promosi ke Jabatan Fungsional Madya. Tugas Anda memberikan umpan balik yang konstruktif, spesifik, dan kontekstual terhadap BPS.

Evaluasi jawaban dengan memperhatikan:
1. Ketajaman identifikasi masalah (apakah masalah utama dirumuskan dengan presisi?)
2. Kedalaman analisis penyebab (apakah menyentuh akar masalah sistemik?)
3. Kualitas solusi (konkret, realistis, beralasan, bukan normatif?)
4. Kelayakan rencana implementasi (apakah mempertimbangkan sumber daya dan risiko?)
5. Antisipasi risiko (apakah ada mitigasi yang realistis?)
6. Indikator keberhasilan (apakah terukur dan relevan?)
7. Perspektif level Madya (apakah menunjukkan kepemimpinan strategis, bukan hanya operasional?)

Format respons dalam bahasa Indonesia yang profesional:
- Kekuatan Utama (2-3 poin spesifik)
- Area yang Perlu Diperkuat (2-3 poin dengan saran konkret)
- Satu Kalimat Pesan Kunci untuk kandidat`;

  const userPrompt = `SKENARIO KASUS: ${scenario.title}
LATAR BELAKANG: ${scenario.background}
PERTANYAAN: ${scenario.questions.join(" | ")}

JAWABAN KANDIDAT:
${text}

Berikan umpan balik yang spesifik dan kontekstual.`;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        max_tokens: 800,
        temperature: 0.4,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ]
      })
    });

    const data = await response.json();

    if (data.error) {
      aiFeedbackContent.innerHTML = `<strong>Error:</strong> ${data.error.message}. Periksa kembali API Key Anda.`;
    } else {
      const aiText = data.choices?.[0]?.message?.content || "Tidak ada respons dari AI.";
      aiFeedbackContent.innerHTML = aiText.replace(/\n/g, "<br/>");
    }

    aiFeedbackResult.style.display = "block";
  } catch (err) {
    aiFeedbackContent.innerHTML = `<strong>Gagal terhubung ke Groq API.</strong> Periksa koneksi internet dan validitas API Key.`;
    aiFeedbackResult.style.display = "block";
  } finally {
    aiFeedbackLoading.style.display = "none";
  }
}

function setupCaseSimulation() {
  if (!caseScenarioSelect) return;

  caseScenarios.forEach((scenario) => {
    const option = document.createElement("option");
    option.value = scenario.id;
    option.textContent = scenario.title;
    caseScenarioSelect.appendChild(option);
  });

  renderCaseScenario();

  caseScenarioSelect.addEventListener("change", renderCaseScenario);

  caseEssayAnswer.addEventListener("input", () => {
    const words = caseEssayAnswer.value.trim().split(/\s+/).filter(Boolean).length;
    const color = words >= 300 ? "var(--primary)" : words >= 150 ? "var(--sun)" : "var(--muted)";
    caseWordCount.textContent = `${words} kata`;
    caseWordCount.style.color = color;
  });

  document.querySelector("#analyzeCaseEssay")?.addEventListener("click", analyzeCaseEssay);

  document.querySelector("#loadCaseTemplate")?.addEventListener("click", () => {
    const scenario = caseScenarios[caseScenarioSelect.selectedIndex];
    caseEssayAnswer.value = scenario.template;
    caseEssayAnswer.dispatchEvent(new Event("input"));
    analyzeCaseEssay();
  });

  document.querySelector("#resetCaseEssay")?.addEventListener("click", () => {
    caseEssayAnswer.value = "";
    caseWordCount.textContent = "0 kata";
    caseChecklist.style.display = "none";
    aiFeedbackResult.style.display = "none";
  });

  document.querySelector("#getAIFeedback")?.addEventListener("click", getAIFeedback);
}

// ==============================================================

setupEssayPromptOptions();
setupCaseSimulation();
renderEssayChecklist([
  { label: "Ada konteks situasi yang jelas.", passed: false },
  { label: "Ada peran atau tanggung jawab pribadi.", passed: false },
  { label: "Ada tindakan yang Anda lakukan.", passed: false },
  { label: "Ada hasil yang terukur atau perubahan nyata.", passed: false },
  { label: "Ada refleksi atau pembelajaran untuk level Madya.", passed: false },
  { label: "Jawaban cukup kaya dan tidak terlalu singkat.", passed: false },
]);
renderQuestion();
updateResults();
renderPresentationState();
