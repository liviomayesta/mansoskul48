// Pertanyaan PE diambil langsung dari Form PE BPS (Form Data Peak Experiences)
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
    presentationToolbar.hidden = true;
    document.body.classList.remove("presentation-mode");
    presentationToggle.textContent = "Mode Presentasi";
    return;
  }

  document.body.classList.add("presentation-mode");
  presentationToolbar.hidden = false;
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

setupEssayPromptOptions();
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
