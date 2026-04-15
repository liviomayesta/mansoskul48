const essayPrompts = [
  {
    title: "Integritas dalam pengelolaan data",
    prompt:
      "Ceritakan pengalaman terbaik Anda saat harus menjaga integritas statistik atau kepatuhan proses, walaupun keputusan tersebut berpotensi menimbulkan resistensi atau memperberat pekerjaan tim.",
    template:
      "Situation: Saat itu saya menemukan kondisi yang berpotensi mengganggu integritas data/proses karena...\n\nTask: Peran saya adalah memastikan kepatuhan, kualitas, dan kepentingan organisasi tetap terjaga...\n\nAction: Saya mengklarifikasi fakta, menilai risiko, menjelaskan dasar aturan, lalu mengambil langkah...\n\nResult: Hasil yang dicapai adalah...\n\nReflection: Pengalaman ini menegaskan bahwa pada level Madya saya perlu...",
  },
  {
    title: "Kerja sama lintas tim",
    prompt:
      "Ceritakan pengalaman terbaik Anda ketika berhasil bekerja sama lintas tim atau lintas unit untuk menyelesaikan pekerjaan penting yang awalnya tidak mudah disepakati.",
    template:
      "Situation: Saya menghadapi pekerjaan yang menuntut kolaborasi antara...\n\nTask: Tanggung jawab saya adalah menyatukan tujuan dan memastikan pekerjaan tetap bergerak...\n\nAction: Saya membangun komunikasi, membagi peran, menjembatani perbedaan, lalu...\n\nResult: Kolaborasi tersebut menghasilkan...\n\nReflection: Hal yang saya pelajari tentang kerja sama strategis adalah...",
  },
  {
    title: "Komunikasi yang memengaruhi keputusan",
    prompt:
      "Ceritakan pengalaman terbaik Anda ketika harus menjelaskan data, ide, atau argumen kepada pihak lain sehingga terjadi perubahan pemahaman, dukungan, atau keputusan.",
    template:
      "Situation: Saat itu saya perlu menjelaskan isu penting kepada...\n\nTask: Saya harus memastikan pesan saya dipahami dan dapat ditindaklanjuti...\n\nAction: Saya menyusun pesan, memilih media dan bahasa yang tepat, lalu menyampaikan...\n\nResult: Dampak komunikasi tersebut adalah...\n\nReflection: Pengalaman ini memperkuat kemampuan saya dalam...",
  },
  {
    title: "Menjaga kualitas data dan publikasi",
    prompt:
      "Ceritakan pengalaman terbaik Anda saat menjaga kualitas data, publikasi, atau output statistik di tengah tekanan tenggat, keterbatasan sumber daya, atau perbedaan pandangan di tim.",
    template:
      "Situation: Saat itu tim saya menghadapi risiko pada kualitas data/publikasi karena...\n\nTask: Saya bertanggung jawab untuk memastikan output statistik tetap akurat dan tepat waktu...\n\nAction: Saya menelusuri akar masalah, menguatkan penerapan SOP, membagi peran, lalu berkoordinasi dengan pihak terkait untuk...\n\nResult: Dampaknya adalah... (cantumkan angka/perubahan nyata)\n\nReflection: Dari pengalaman itu saya belajar bahwa pada level Madya saya perlu...",
  },
  {
    title: "Koordinasi lintas satker atau stakeholder",
    prompt:
      "Ceritakan pengalaman ketika Anda harus menyatukan BPS provinsi, BPS kabupaten/kota, OPD, atau stakeholder lain yang memiliki kepentingan berbeda agar satu data, layanan statistik, atau program bersama tetap berjalan.",
    template:
      "Situation: Terdapat perbedaan kebutuhan atau persepsi antara...\n\nTask: Peran saya saat itu adalah menjaga agar koordinasi tetap produktif dan tujuan bersama tercapai...\n\nAction: Saya menyamakan definisi, memfasilitasi diskusi, membagi tindak lanjut, dan...\n\nResult: Kesepakatan yang dicapai menghasilkan...\n\nReflection: Pengalaman ini menunjukkan kemampuan saya dalam...",
  },
  {
    title: "Pelayanan statistik kepada pengguna",
    prompt:
      "Ceritakan pengalaman ketika Anda berhasil meningkatkan mutu layanan statistik atau respons konsultasi data sehingga pengguna memperoleh manfaat yang lebih baik.",
    template:
      "Situation: Pengguna layanan saat itu menghadapi kendala berupa...\n\nTask: Saya bertanggung jawab memastikan layanan tetap responsif, konsisten, dan akuntabel...\n\nAction: Saya memetakan masalah layanan, memperbaiki alur respons, melibatkan tim, lalu...\n\nResult: Perbaikan layanan tersebut menghasilkan...\n\nReflection: Dari pengalaman ini saya belajar bahwa pelayanan publik yang baik membutuhkan...",
  },
  {
    title: "Pengembangan diri dan orang lain",
    prompt:
      "Ceritakan pengalaman ketika Anda berhasil mengembangkan kompetensi diri sekaligus membantu rekan atau tim lain bertumbuh dalam pekerjaan.",
    template:
      "Situation: Pada saat itu tim/unit saya memerlukan peningkatan kapasitas pada aspek...\n\nTask: Saya mengambil peran untuk belajar, menguasai materi, dan menularkannya kepada tim...\n\nAction: Saya mempelajari hal baru, menyusun materi sederhana, memberi coaching atau pendampingan, lalu...\n\nResult: Hasil pengembangan tersebut terlihat dari...\n\nReflection: Hal yang saya pahami tentang pengembangan orang lain adalah...",
  },
  {
    title: "Mengelola perubahan cepat",
    prompt:
      "Ceritakan pengalaman saat Anda dan tim harus menyesuaikan diri secara cepat terhadap kebijakan, sistem, atau tuntutan kerja baru dan tetap berhasil menjaga hasil kerja.",
    template:
      "Situation: Terjadi perubahan yang menuntut penyesuaian cepat pada...\n\nTask: Saya bertanggung jawab membantu tim beradaptasi sambil menjaga target tetap tercapai...\n\nAction: Saya memetakan dampak perubahan, menyusun prioritas, menjelaskan alasan perubahan, lalu...\n\nResult: Adaptasi tersebut berdampak pada...\n\nReflection: Pengalaman ini menunjukkan kesiapan saya dalam...",
  },
  {
    title: "Keputusan sulit yang berintegritas",
    prompt:
      "Ceritakan pengalaman ketika Anda harus mengambil keputusan sulit yang berisiko menimbulkan resistensi, tetapi penting untuk menjaga integritas statistik, akuntabilitas proses, atau kepentingan publik.",
    template:
      "Situation: Pada saat itu saya menghadapi kondisi...\n\nTask: Saya harus memastikan bahwa kualitas data, kepatuhan, dan kepentingan organisasi tetap terjaga...\n\nAction: Saya mengumpulkan fakta, menilai risiko, berkonsultasi seperlunya, lalu memutuskan...\n\nResult: Keputusan tersebut berdampak pada...\n\nReflection: Hal yang saya pegang dan akan saya bawa ke peran Madya adalah...",
  },
  {
    title: "Perekat bangsa dalam kerja beragam",
    prompt:
      "Ceritakan pengalaman ketika Anda berhasil menjaga hubungan kerja yang harmonis dan produktif dengan rekan atau stakeholder yang memiliki latar belakang sosial, budaya, karakter, atau kepentingan yang beragam.",
    template:
      "Situation: Saya bekerja dengan pihak-pihak yang memiliki latar belakang atau kepentingan berbeda, yaitu...\n\nTask: Saya perlu memastikan kerja sama tetap harmonis dan tujuan organisasi tercapai...\n\nAction: Saya membangun rasa hormat, menyesuaikan pendekatan komunikasi, dan...\n\nResult: Hubungan kerja yang terjaga menghasilkan...\n\nReflection: Saya belajar bahwa sensitivitas sosial-kultural penting karena...",
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
  essayPromptText.textContent = selectedPrompt.prompt;
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
      label: "Ada peran atau tanggung jawab pribadi.",
      passed: normalized.includes("task") || normalized.includes("tanggung jawab") || normalized.includes("peran"),
    },
    {
      label: "Ada tindakan yang Anda lakukan.",
      passed: normalized.includes("action") || normalized.includes("langkah") || normalized.includes("saya melakukan"),
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
      passed: text.split(/\s+/).filter(Boolean).length >= 120,
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

  if (score >= 5) {
    resultSummary.textContent =
      "Cara berpikir Anda sudah dekat dengan ekspektasi level Madya: strategis, kolaboratif, dan tetap menjaga hasil. Ulangi sekali lagi sambil membaca pembahasan setiap soal.";
    return;
  }

  if (score >= 3) {
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
