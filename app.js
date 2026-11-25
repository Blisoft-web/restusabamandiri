const SHEET_CSV_URLS = {
  config: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQVdMFTGPIxhKrAPAY41tPcqgOCAqQ-3MS5Oi-VvcvaCwDMA_e5WipUNhIYBxgWLtZdTiAbLKEB1xGi/pub?gid=0&single=true&output=csv',
  nav: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTimg8PKYwN5285OXJaZjpGaaSPUThktHE6RMla2pztes7cenPNAbZJ6GtSZTuDiodmeGYZce9dH3Y2/pub?gid=0&single=true&output=csv',
  sections: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSvtx5qFgj6Kket-UM_QzoGPPBfQdhXtfv2Qdddc0--TXokKUcj2LHnDhN32UwSb9vNpuW-oQKqn-OG/pub?gid=0&single=true&output=csv',
  services: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRvdqOqp4OCgY9CyxzTHob4aVtsEIxyk4imw6AWhBwAP8wS3qMHWfSEJgtTzDRxKIwTYruU7ltleKYj/pub?gid=0&single=true&output=csv',
  team: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2I4VoJ8KYK7WXtwfgwV7v09EOWaZWGokhI01KT5fS5rTSdh8u2qMrCXkzSEVjq0hI74MiAAyY0x_-/pub?gid=0&single=true&output=csv'
};

const FALLBACK_DATA = {
  config: {
    nama_perusahaan: 'CV. Restu Saba Mandiri',
    tagline: 'Solusi Kebersihan Bangunan, Pemulihan Material Daur Ulang & Pengelolaan Limbah Non-B3 Berstandar K3',
    url_logo: 'https://res.cloudinary.com/nj31ul1n/image/upload/v1795599625/5f69ce85-2dab-423a-abfb-afa58f32df3a.jpg',
    primary_color: '#0F4C3A',
    accent_color: '#B58938',
    bg_surface: '#F8FAFC',
    nomor_wa: '6289602782482',
    pesan_wa_umum: 'Halo CV. Restu Saba Mandiri, kami ingin berkonsultasi terkait penawaran layanan kebersihan bangunan atau pemulihan material.',
    email: 'restu.groupsm@gmail.com',
    alamat: 'KP. Gelam Pabuaran RT 002 RW 001, Kel. Kuta Jaya, Kec. Pasar Kemis, Kab. Tangerang, Provinsi Banten 15560',
    jam_operasional: 'Senin – Jumat, 07.00 – 17.00 WIB. Sabtu, 07.00 - 12.00. Minggu, Libur',
    url_maps_embed: 'https://www.google.com/maps?q=KP.+Gelam+Pabuaran+RT+002+RW+001+Kuta+Jaya+Pasar+Kemis+Kabupaten+Tangerang+Banten+15560&output=embed',
    teks_cta_header: 'Ajukan Penawaran',
    teks_footer: '© 2026 CV. Restu Saba Mandiri. Hak Cipta Dilindungi Undang-Undang.',
    tampilkan_tim: 'FALSE'
  },
  nav: [
    { urutan: '1', label: 'Beranda', target_id: 'beranda' },
    { urutan: '2', label: 'Profil', target_id: 'tentang' },
    { urutan: '3', label: 'Layanan KBLI', target_id: 'layanan' },
    { urutan: '4', label: 'Legalitas', target_id: 'legalitas' },
    { urutan: '5', label: 'Kontak', target_id: 'kontak' }
  ],
  sections: {
    beranda: {
      kicker: 'MITRA OPERASIONAL KAWASAN INDUSTRI & GEDUNG KOMERSIAL',
      judul: 'Solusi Kebersihan Bangunan, Pemulihan Material Daur Ulang & Pengelolaan Limbah Non-B3 Berstandar K3',
      subjudul: 'Mendukung kepatuhan lingkungan, efisiensi pengelolaan fasilitas, dan rantai pasok material sirkular bagi korporasi serta pabrik di Kabupaten Tangerang dan Provinsi Banten.',
      deskripsi: 'CV. Restu Saba Mandiri beroperasi dengan legalitas NIB 2907260104934 (PMDN) yang terverifikasi sistem OSS RBA, mengintegrasikan layanan kebersihan umum gedung, pemulihan logam dan plastik industri, serta penanganan limbah padat non-B3 secara terdokumentasi.',
      kutipan: '',
      url_gambar: 'https://res.cloudinary.com/nj31ul1n/image/upload/v1795599625/5f69ce85-2dab-423a-abfb-afa58f32df3a.jpg'
    },
    tentang: {
      kicker: 'PROFIL PERUSAHAAN',
      judul: 'Tata Kelola Operasional yang Terukur untuk Klien Industri & Komersial',
      subjudul: 'Berbasis di Kecamatan Pasar Kemis, Kabupaten Tangerang, CV. Restu Saba Mandiri hadir menjawab kebutuhan mitra korporat dan panitia pengadaan terhadap penyedia jasa pemeliharaan gedung serta pengelolaan material daur ulang non-B3 yang patuh regulasi.',
      deskripsi: 'Didirikan dan terdaftar resmi melalui sistem Online Single Submission (OSS RBA) dengan Nomor Induk Berusaha 2907260104934 tertanggal 29 Juli 2026 sebagai badan usaha Penanaman Modal Dalam Negeri (PMDN), kami menjalankan setiap kontrak kerja berbasis Standar Operasional Prosedur (SOP), pengawasan Keselamatan dan Kesehatan Kerja (K3), serta berita acara pencatatan kuantitas yang transparan.',
      kutipan: '“Ketertiban sanitasi bangunan dan akuntabilitas pemulihan material sisa produksi adalah fondasi efisiensi fasilitas industri modern.”',
      url_gambar: ''
    },
    visi_misi: {
      kicker: 'ARAH KERJA & STANDAR MUTU',
      judul: 'Visi, Misi & Pilar Standar Operasional K3',
      subjudul: 'Komitmen pelaksanaan kerja yang menjamin keselamatan personel, kebersihan fasilitas, dan ketertiban administrasi.',
      deskripsi: 'Menjadi penyedia jasa kebersihan bangunan dan pemulihan material non-B3 yang paling tepercaya di Kabupaten Tangerang dan Provinsi Banten melalui kepatuhan regulasi, keselamatan kerja K3, serta transparansi pelaporan kepada setiap mitra usaha.',
      kutipan: '',
      url_gambar: ''
    },
    kontak: {
      kicker: 'KONTAK RESMI & KOORDINASI SURVEI',
      judul: 'Hubungi Tim Pengadaan & Operasional',
      subjudul: 'Sampaikan kebutuhan pemeliharaan gedung, penjadwalan penarikan material logam/plastik, atau undangan tender kepada kantor kami.',
      deskripsi: 'Tim kami siap melakukan peninjauan lokasi di wilayah Kabupaten Tangerang dan Provinsi Banten untuk menyusun proposal teknis serta penawaran harga yang sesuai dengan spesifikasi fasilitas Anda.',
      kutipan: '',
      url_gambar: ''
    }
  },
  services: [
    {
      tipe: 'layanan',
      urutan: '1',
      badge: 'KBLI 81210',
      status_izin: 'Aktif Beroperasi',
      judul: 'Jasa Kebersihan Umum Bangunan',
      ringkasan: 'Pemeliharaan kebersihan menyeluruh untuk gedung perkantoran, fasilitas industri, kawasan komersial, dan area publik dengan prosedur kerja terukur serta standar K3.',
      poin_list: 'Pembersihan rutin ruang kerja, lobi, koridor, dan sanitasi gedung bertingkat|Perawatan lantai gudang, kaca interior, serta area operasional non-produksi|Penempatan tenaga kerja terlatih lengkap dengan APD dan supervisi lapangan',
      anchor_id: 'layanan-kebersihan-bangunan'
    },
    {
      tipe: 'layanan',
      urutan: '2',
      badge: 'KBLI 38301',
      status_izin: 'Aktif Beroperasi',
      judul: 'Pemulihan Material Barang Logam',
      ringkasan: 'Pemilahan, pemrosesan mekanis, dan pemulihan scrap maupun residu logam industri menjadi bahan baku sekunder bernilai ekonomi tinggi dengan pencatatan transparan.',
      poin_list: 'Pengumpulan dan pemilahan sisa produksi besi, baja, tembaga, aluminium, dan logam campuran|Klasifikasi mutu serta pemadatan material sesuai standar pabrik peleburan|Berita acara penimbangan dan dokumentasi serah terima yang akuntabel untuk audit',
      anchor_id: 'layanan-pemulihan-logam'
    },
    {
      tipe: 'layanan',
      urutan: '3',
      badge: 'KBLI 38302',
      status_izin: 'Aktif Beroperasi',
      judul: 'Pemulihan Material Barang Plastik',
      ringkasan: 'Daur ulang dan pemulihan limbah polimer serta kemasan plastik industri menjadi material siap olah kembali guna mendukung rantai pasok sirkular kawasan industri.',
      poin_list: 'Sortasi jenis polimer industri (HDPE, PP, PET, LDPE, dan plastik kemasan pabrik)|Pencacahan, pembersihan, dan pengemasan ulang material plastik non-B3 siap distribusi|Penjadwalan pengambilan rutin langsung dari area penyimpanan limbah kering klien',
      anchor_id: 'layanan-pemulihan-plastik'
    },
    {
      tipe: 'layanan',
      urutan: '4',
      badge: 'KBLI 81290',
      status_izin: 'Verifikasi OSS',
      judul: 'Pengendalian Vektor & Hama Bangunan',
      ringkasan: 'Program pencegahan dan pengendalian hama terpadu untuk menjaga higienitas gudang logistik, area pabrik, dan gedung perkantoran sesuai standar sanitasi.',
      poin_list: 'Inspeksi titik rawan dan pemetaan jalur masuk vektor pada bangunan maupun gudang|Pengendalian tikus, kecoa, rayap, dan serangga dengan prosedur aman berstandar K3|Laporan monitoring berkala untuk kelengkapan dokumen audit kebersihan fasilitas',
      anchor_id: 'layanan-pengendalian-hama'
    },
    {
      tipe: 'layanan',
      urutan: '5',
      badge: 'KBLI 38219',
      status_izin: 'Verifikasi OSS',
      judul: 'Pengolahan & Pembuangan Limbah Non-B3',
      ringkasan: 'Pengangkutan terjadwal, pemilahan, dan pengelolaan limbah padat tidak berbahaya (non-B3) komersial maupun industri secara tertib regulasi lingkungan.',
      poin_list: 'Pengangkutan residu operasional dan sampah padat non-B3 kawasan Tangerang & Banten|Pemisahan fraksi material bernilai guna sebelum penyaluran akhir ke fasilitas berizin|Pencatatan volume angkut berkala untuk pelaporan pengelolaan lingkungan perusahaan',
      anchor_id: 'layanan-pengolahan-limbah'
    },
    {
      tipe: 'keunggulan',
      urutan: '1',
      badge: 'I',
      status_izin: '',
      judul: 'Kepatuhan OSS RBA & KBLI',
      ringkasan: 'Legalitas NIB 2907260104934 terverifikasi untuk proses prakualifikasi vendor korporat maupun tender pengadaan.',
      poin_list: ''
    },
    {
      tipe: 'keunggulan',
      urutan: '2',
      badge: 'II',
      status_izin: '',
      judul: 'Disiplin Keselamatan K3',
      ringkasan: 'Penerapan penggunaan Alat Pelindung Diri (APD) wajib dan induksi keselamatan area sebelum penempatan personel.',
      poin_list: ''
    },
    {
      tipe: 'keunggulan',
      urutan: '3',
      badge: 'III',
      status_izin: '',
      judul: 'Berita Acara & Timbangan Jelas',
      ringkasan: 'Setiap penarikan scrap logam, plastik, dan residu non-B3 dilengkapi bukti timbang serta dokumen serah terima.',
      poin_list: ''
    },
    {
      tipe: 'keunggulan',
      urutan: '4',
      badge: 'IV',
      status_izin: '',
      judul: 'Armada & Respons Tangerang',
      ringkasan: 'Lokasi kantor operasional di Pasar Kemis mempercepat mobilisasi tim dan penjadwalan angkut di kawasan industri Tangerang.',
      poin_list: ''
    },
    {
      tipe: 'legalitas',
      urutan: '1',
      badge: 'NIB 2907260104934',
      status_izin: 'Terverifikasi',
      judul: 'Nomor Induk Berusaha — Terbit 29 Juli 2026 (OSS RBA)',
      ringkasan: '',
      poin_list: ''
    },
    {
      tipe: 'legalitas',
      urutan: '2',
      badge: 'Status Modal',
      status_izin: 'Aktif',
      judul: 'PMDN (Penanaman Modal Dalam Negeri)',
      ringkasan: '',
      poin_list: ''
    },
    {
      tipe: 'legalitas',
      urutan: '3',
      badge: 'KBLI 81210',
      status_izin: 'Aktif Beroperasi',
      judul: 'Aktivitas Kebersihan Umum Bangunan',
      ringkasan: '',
      poin_list: ''
    },
    {
      tipe: 'legalitas',
      urutan: '4',
      badge: 'KBLI 38301',
      status_izin: 'Aktif Beroperasi',
      judul: 'Pemulihan Material Barang Logam',
      ringkasan: '',
      poin_list: ''
    },
    {
      tipe: 'legalitas',
      urutan: '5',
      badge: 'KBLI 38302',
      status_izin: 'Aktif Beroperasi',
      judul: 'Pemulihan Material Barang Plastik',
      ringkasan: '',
      poin_list: ''
    },
    {
      tipe: 'legalitas',
      urutan: '6',
      badge: 'KBLI 81290',
      status_izin: 'Verifikasi OSS',
      judul: 'Aktivitas Kebersihan Bangunan dan Industri Lainnya (Pengendalian Hama)',
      ringkasan: '',
      poin_list: ''
    },
    {
      tipe: 'legalitas',
      urutan: '7',
      badge: 'KBLI 38219',
      status_izin: 'Verifikasi OSS',
      judul: 'Pengolahan dan Pembuangan Sampah Tidak Berbahaya Lainnya',
      ringkasan: '',
      poin_list: ''
    }
  ],
  team: []
};

const SVG_FALLBACK_LOGO = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">' +
  '<rect width="120" height="120" rx="12" fill="#0F4C3A"/>' +
  '<rect x="10" y="10" width="100" height="100" rx="8" fill="none" stroke="#B58938" stroke-width="2"/>' +
  '<text x="60" y="66" text-anchor="middle" font-family="sans-serif" font-size="26" font-weight="700" fill="#FFFFFF">RSM</text>' +
  '</svg>'
);

function getLoadingScreen() {
  return document.getElementById('loading-screen');
}

function showLogoLoader() {
  const loader = getLoadingScreen();
  if (loader) {
    loader.classList.remove('is-hidden');
  }
}

function hideLogoLoader() {
  const loader = getLoadingScreen();
  if (loader) {
    loader.classList.add('is-hidden');
  }
}

function sanitizePublicText(value) {
  if (value === null || value === undefined) return '';
  return String(value).replace(/1000000008290172/g, '[Terverifikasi]').trim();
}

function slugifyText(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function resolveServiceAnchorId(item, index) {
  if (item.anchor_id) return item.anchor_id;
  const combined = `${item.badge || ''} ${item.judul || ''}`.toLowerCase();
  if (combined.includes('81210') || combined.includes('kebersihan umum')) return 'layanan-kebersihan-bangunan';
  if (combined.includes('38301') || combined.includes('logam')) return 'layanan-pemulihan-logam';
  if (combined.includes('38302') || combined.includes('plastik')) return 'layanan-pemulihan-plastik';
  if (combined.includes('81290') || combined.includes('hama')) return 'layanan-pengendalian-hama';
  if (combined.includes('38219') || combined.includes('limbah')) return 'layanan-pengolahan-limbah';
  const slug = slugifyText(item.judul);
  return slug ? `layanan-${slug}` : `layanan-${index + 1}`;
}

function optimizeMediaUrl(rawUrl) {
  const url = String(rawUrl || '').trim();
  if (!url) return '';

  if (url.includes('res.cloudinary.com') && url.includes('/upload/') && !url.includes('/upload/f_auto')) {
    return url.replace('/upload/', '/upload/f_auto,q_auto/');
  }

  const driveFileMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (driveFileMatch && driveFileMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${driveFileMatch[1]}`;
  }

  const driveOpenMatch = url.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);
  if (driveOpenMatch && driveOpenMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${driveOpenMatch[1]}`;
  }

  return url;
}

function parseCsvRows(csvText) {
  const cleanText = String(csvText || '').replace(/^\uFEFF/, '');
  if (!cleanText.trim()) return [];

  const rows = [];
  let currentRow = [];
  let currentField = '';
  let inQuotes = false;

  for (let i = 0; i < cleanText.length; i++) {
    const char = cleanText[i];
    const nextChar = cleanText[i + 1];

    if (inQuotes) {
      if (char === '"' && nextChar === '"') {
        currentField += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        currentField += char;
      }
    } else if (char === '"') {
      inQuotes = true;
    } else if (char === ',') {
      currentRow.push(currentField);
      currentField = '';
    } else if (char === '\r' && nextChar === '\n') {
      currentRow.push(currentField);
      rows.push(currentRow);
      currentRow = [];
      currentField = '';
      i++;
    } else if (char === '\n' || char === '\r') {
      currentRow.push(currentField);
      rows.push(currentRow);
      currentRow = [];
      currentField = '';
    } else {
      currentField += char;
    }
  }

  if (currentField.length > 0 || currentRow.length > 0) {
    currentRow.push(currentField);
    rows.push(currentRow);
  }

  if (rows.length < 2) return [];

  const headers = rows[0].map((header) =>
    String(header || '')
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '_')
  );

  const records = [];
  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    if (!row || row.every((cell) => !String(cell || '').trim())) continue;

    const obj = {};
    for (let c = 0; c < headers.length; c++) {
      if (!headers[c]) continue;
      obj[headers[c]] = sanitizePublicText(row[c] || '');
    }
    records.push(obj);
  }

  return records;
}

async function fetchCsvWithRetry(url, retries = 2, timeoutMs = 5500) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetch(url, {
        method: 'GET',
        cache: 'no-cache',
        signal: controller.signal
      });
      clearTimeout(timer);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const text = await response.text();
      return parseCsvRows(text);
    } catch (error) {
      clearTimeout(timer);
      if (attempt === retries) {
        return [];
      }
      await new Promise((resolve) => setTimeout(resolve, 250 * (attempt + 1)));
    }
  }
  return [];
}

function buildWhatsappUrl(phoneNumber, message) {
  const digits = String(phoneNumber || '6289602782482').replace(/\D/g, '') || '6289602782482';
  const encodedMsg = encodeURIComponent(message || FALLBACK_DATA.config.pesan_wa_umum);
  return `https://wa.me/${digits}?text=${encodedMsg}`;
}

function applyThemeTokens(config) {
  const root = document.documentElement;
  if (config.primary_color) {
    root.style.setProperty('--primary-color', config.primary_color);
  }
  if (config.accent_color) {
    root.style.setProperty('--accent-color', config.accent_color);
  }
  if (config.bg_surface) {
    root.style.setProperty('--bg-surface', config.bg_surface);
  }
}

function applyConfig(config) {
  applyThemeTokens(config);

  const logoUrl = optimizeMediaUrl(config.url_logo) || FALLBACK_DATA.config.url_logo;
  ['loader-logo', 'header-logo', 'footer-logo'].forEach((id) => {
    const img = document.getElementById(id);
    if (img && logoUrl) {
      img.src = logoUrl;
    }
  });

  const companyName = config.nama_perusahaan || FALLBACK_DATA.config.nama_perusahaan;
  const headerNameEl = document.getElementById('header-company-name');
  const footerNameEl = document.getElementById('footer-company-name');
  if (headerNameEl) headerNameEl.textContent = companyName;
  if (footerNameEl) footerNameEl.textContent = companyName;

  const footerTaglineEl = document.getElementById('footer-tagline');
  if (footerTaglineEl && config.tagline) {
    footerTaglineEl.textContent = config.tagline;
  }

  const footerCopyEl = document.getElementById('footer-copy');
  if (footerCopyEl && config.teks_footer) {
    footerCopyEl.textContent = config.teks_footer;
  }

  const waUrl = buildWhatsappUrl(config.nomor_wa, config.pesan_wa_umum);
  const headerCta = document.getElementById('header-cta');
  if (headerCta) {
    headerCta.textContent = config.teks_cta_header || FALLBACK_DATA.config.teks_cta_header;
    headerCta.href = waUrl;
  }

  const heroWaCta = document.getElementById('hero-wa-cta');
  if (heroWaCta) heroWaCta.href = waUrl;

  const kontakWaBtn = document.getElementById('kontak-wa-btn');
  if (kontakWaBtn) kontakWaBtn.href = waUrl;

  const kontakWaLink = document.getElementById('kontak-wa-link');
  if (kontakWaLink) {
    kontakWaLink.href = waUrl;
    const rawDigits = String(config.nomor_wa || '6289602782482').replace(/\D/g, '');
    if (rawDigits.startsWith('62') && rawDigits.length >= 11) {
      kontakWaLink.textContent = `+62 ${rawDigits.slice(2, 5)}-${rawDigits.slice(5, 9)}-${rawDigits.slice(9)}`;
    }
  }

  const email = config.email || FALLBACK_DATA.config.email;
  const kontakEmailLink = document.getElementById('kontak-email-link');
  const kontakEmailBtn = document.getElementById('kontak-email-btn');
  if (kontakEmailLink) {
    kontakEmailLink.href = `mailto:${email}`;
    kontakEmailLink.textContent = email;
  }
  if (kontakEmailBtn) {
    kontakEmailBtn.href = `mailto:${email}?subject=${encodeURIComponent(`Permintaan Penawaran - ${companyName}`)}`;
  }

  const alamatEl = document.getElementById('kontak-alamat');
  if (alamatEl && config.alamat) {
    alamatEl.textContent = config.alamat;
  }

  const jamEl = document.getElementById('kontak-jam');
  const utilityHoursEl = document.getElementById('utility-hours');
  if (jamEl && config.jam_operasional) {
    jamEl.textContent = config.jam_operasional;
  }
  if (utilityHoursEl && config.jam_operasional) {
    utilityHoursEl.textContent = config.jam_operasional;
  }

  const mapsIframe = document.getElementById('kontak-maps-iframe');
  if (mapsIframe && config.url_maps_embed && config.url_maps_embed.startsWith('http')) {
    mapsIframe.src = config.url_maps_embed;
  }
}

function renderNavigation(navRows) {
  const rows = Array.isArray(navRows) && navRows.length > 0 ? navRows : FALLBACK_DATA.nav;
  const sorted = [...rows].sort((a, b) => Number(a.urutan || 0) - Number(b.urutan || 0));

  const headerList = document.getElementById('nav-list');
  const footerList = document.getElementById('footer-nav-list');

  if (headerList) {
    headerList.innerHTML = '';
    sorted.forEach((item) => {
      if (!item.label || !item.target_id) return;
      const target = item.target_id.startsWith('#') ? item.target_id : `#${item.target_id}`;
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = target;
      a.textContent = item.label;
      li.appendChild(a);
      headerList.appendChild(li);
    });
  }

  if (footerList) {
    footerList.innerHTML = '';
    sorted.forEach((item) => {
      if (!item.label || !item.target_id) return;
      const target = item.target_id.startsWith('#') ? item.target_id : `#${item.target_id}`;
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = target;
      a.textContent = item.label;
      li.appendChild(a);
      footerList.appendChild(li);
    });
  }
}

function applySections(sectionRows) {
  const merged = { ...FALLBACK_DATA.sections };

  if (Array.isArray(sectionRows)) {
    sectionRows.forEach((row) => {
      const key = String(row.section_id || '').trim().toLowerCase();
      if (!key) return;
      merged[key] = {
        ...merged[key],
        ...Object.fromEntries(Object.entries(row).filter(([, val]) => String(val || '').trim() !== ''))
      };
    });
  }

  const mappings = [
    { key: 'beranda', prefix: 'beranda' },
    { key: 'tentang', prefix: 'tentang' },
    { key: 'visi_misi', prefix: 'visi-misi' },
    { key: 'kontak', prefix: 'kontak' }
  ];

  mappings.forEach(({ key, prefix }) => {
    const data = merged[key];
    if (!data) return;

    const kickerEl = document.getElementById(`${prefix}-kicker`);
    const judulEl = document.getElementById(`${prefix}-judul`);
    const subjudulEl = document.getElementById(`${prefix}-subjudul`);
    const deskripsiEl = document.getElementById(`${prefix}-deskripsi`);
    const kutipanEl = document.getElementById(`${prefix}-kutipan`);
    const gambarEl = document.getElementById(`${prefix}-gambar`);

    if (kickerEl && data.kicker) kickerEl.textContent = data.kicker;
    if (judulEl && data.judul) judulEl.textContent = data.judul;
    if (subjudulEl && data.subjudul) subjudulEl.textContent = data.subjudul;
    if (deskripsiEl && data.deskripsi) deskripsiEl.textContent = data.deskripsi;
    if (kutipanEl && data.kutipan) kutipanEl.textContent = data.kutipan;
    if (gambarEl && data.url_gambar) {
      gambarEl.src = optimizeMediaUrl(data.url_gambar);
    }
  });
}

function renderServicesAndCompliance(serviceRows, config) {
  const source = Array.isArray(serviceRows) && serviceRows.length > 0 ? serviceRows : FALLBACK_DATA.services;

  const layananItems = source
    .filter((item) => String(item.tipe || '').toLowerCase() === 'layanan')
    .sort((a, b) => Number(a.urutan || 0) - Number(b.urutan || 0));

  const keunggulanItems = source
    .filter((item) => String(item.tipe || '').toLowerCase() === 'keunggulan')
    .sort((a, b) => Number(a.urutan || 0) - Number(b.urutan || 0));

  const legalitasItems = source
    .filter((item) => String(item.tipe || '').toLowerCase() === 'legalitas')
    .sort((a, b) => Number(a.urutan || 0) - Number(b.urutan || 0));

  const activeLayanan = layananItems.length > 0
    ? layananItems
    : FALLBACK_DATA.services.filter((item) => item.tipe === 'layanan');

  const servicesGrid = document.getElementById('services-grid');
  const segmentNavList = document.getElementById('segment-nav-list');
  const footerServicesList = document.getElementById('footer-services-list');

  if (servicesGrid) {
    servicesGrid.innerHTML = '';
    if (segmentNavList) segmentNavList.innerHTML = '';
    if (footerServicesList) footerServicesList.innerHTML = '';

    activeLayanan.forEach((item, index) => {
      const anchorId = resolveServiceAnchorId(item, index);
      const statusText = item.status_izin || 'Aktif Beroperasi';
      const isActiveStatus = statusText.toLowerCase().includes('aktif');

      const article = document.createElement('article');
      article.id = anchorId;
      article.className = 'service-card';

      const topBar = document.createElement('div');
      topBar.className = 'service-card-top';

      const kbliBadge = document.createElement('span');
      kbliBadge.className = 'kbli-badge';
      kbliBadge.textContent = item.badge || `LAYANAN ${index + 1}`;

      const statusBadge = document.createElement('span');
      statusBadge.className = `status-pill ${isActiveStatus ? 'status-active' : 'status-oss'}`;
      statusBadge.textContent = statusText;

      topBar.appendChild(kbliBadge);
      topBar.appendChild(statusBadge);
      article.appendChild(topBar);

      const title = document.createElement('h3');
      title.textContent = item.judul;
      article.appendChild(title);

      if (item.ringkasan) {
        const summary = document.createElement('p');
        summary.className = 'service-summary';
        summary.textContent = item.ringkasan;
        article.appendChild(summary);
      }

      const points = String(item.poin_list || '')
        .split('|')
        .map((point) => point.trim())
        .filter(Boolean);

      if (points.length > 0) {
        const ul = document.createElement('ul');
        ul.className = 'service-points';
        points.forEach((point) => {
          const li = document.createElement('li');
          li.textContent = point;
          ul.appendChild(li);
        });
        article.appendChild(ul);
      }

      const footerDiv = document.createElement('div');
      footerDiv.className = 'service-card-footer';

      const ctaLink = document.createElement('a');
      ctaLink.className = 'service-cta';
      const msg = `Halo ${config.nama_perusahaan || 'CV. Restu Saba Mandiri'}, kami ingin konsultasi layanan ${item.judul}${item.badge ? ` (${item.badge})` : ''}.`;
      ctaLink.href = buildWhatsappUrl(config.nomor_wa, msg);
      ctaLink.textContent = `Konsultasi ${item.badge || 'Layanan Ini'} →`;

      footerDiv.appendChild(ctaLink);
      article.appendChild(footerDiv);
      servicesGrid.appendChild(article);

      const shortLabel = item.badge ? `${item.judul} (${item.badge.replace('KBLI ', '')})` : item.judul;

      if (segmentNavList) {
        const segLi = document.createElement('li');
        const segA = document.createElement('a');
        segA.href = `#${anchorId}`;
        segA.textContent = shortLabel;
        segLi.appendChild(segA);
        segmentNavList.appendChild(segLi);
      }

      if (footerServicesList) {
        const fLi = document.createElement('li');
        const fA = document.createElement('a');
        fA.href = `#${anchorId}`;
        fA.textContent = shortLabel;
        fLi.appendChild(fA);
        footerServicesList.appendChild(fLi);
      }
    });
  }

  const activeKeunggulan = keunggulanItems.length > 0
    ? keunggulanItems
    : FALLBACK_DATA.services.filter((item) => item.tipe === 'keunggulan');

  const keunggulanGrid = document.getElementById('keunggulan-grid');
  if (keunggulanGrid) {
    keunggulanGrid.innerHTML = '';
    activeKeunggulan.forEach((item, index) => {
      const card = document.createElement('article');
      card.className = 'pillar-item';

      const num = document.createElement('span');
      num.className = 'pillar-num';
      num.textContent = item.badge || String(index + 1);

      const h3 = document.createElement('h3');
      h3.textContent = item.judul;

      const p = document.createElement('p');
      p.textContent = item.ringkasan;

      card.appendChild(num);
      card.appendChild(h3);
      card.appendChild(p);
      keunggulanGrid.appendChild(card);
    });
  }

  const activeLegalitas = legalitasItems.length > 0
    ? legalitasItems
    : FALLBACK_DATA.services.filter((item) => item.tipe === 'legalitas');

  const legalitasTbody = document.getElementById('legalitas-tbody');
  if (legalitasTbody) {
    legalitasTbody.innerHTML = '';
    activeLegalitas.forEach((item) => {
      const tr = document.createElement('tr');

      const tdCode = document.createElement('td');
      const strong = document.createElement('strong');
      strong.textContent = item.badge || '-';
      tdCode.appendChild(strong);

      const tdDesc = document.createElement('td');
      tdDesc.textContent = item.judul || item.ringkasan || '-';

      const tdStatus = document.createElement('td');
      const statusText = item.status_izin || 'Terverifikasi';
      const isPositive = /aktif|terverifikasi/i.test(statusText);
      const pill = document.createElement('span');
      pill.className = `status-pill ${isPositive ? 'status-active' : 'status-oss'}`;
      pill.textContent = statusText;
      tdStatus.appendChild(pill);

      tr.appendChild(tdCode);
      tr.appendChild(tdDesc);
      tr.appendChild(tdStatus);
      legalitasTbody.appendChild(tr);
    });
  }
}

function renderTeam(teamRows, config) {
  const teamSection = document.getElementById('tim');
  const teamGrid = document.getElementById('team-grid');
  if (!teamSection || !teamGrid) return;

  const shouldShow = String(config.tampilkan_tim || 'FALSE').trim().toUpperCase() === 'TRUE';
  const rows = Array.isArray(teamRows) ? teamRows.filter((item) => item.nama) : [];

  if (!shouldShow || rows.length === 0) {
    teamSection.hidden = true;
    return;
  }

  const sorted = [...rows].sort((a, b) => Number(a.urutan || 0) - Number(b.urutan || 0));
  teamGrid.innerHTML = '';

  sorted.forEach((member) => {
    const card = document.createElement('article');
    card.className = 'team-card';

    if (member.divisi) {
      const divisi = document.createElement('span');
      divisi.className = 'team-divisi';
      divisi.textContent = member.divisi;
      card.appendChild(divisi);
    }

    const name = document.createElement('h3');
    name.textContent = member.nama;
    card.appendChild(name);

    if (member.jabatan) {
      const role = document.createElement('p');
      role.textContent = member.jabatan;
      card.appendChild(role);
    }

    teamGrid.appendChild(card);
  });

  teamSection.hidden = false;
}

function scrollToHashTarget(hashValue, behavior = 'smooth') {
  const rawHash = String(hashValue || window.location.hash || '').trim();
  if (!rawHash || rawHash === '#') return;

  const targetId = rawHash.replace(/^#/, '');
  const targetElement = document.getElementById(targetId);
  if (!targetElement) return;

  targetElement.scrollIntoView({ behavior, block: 'start' });
}

function closeMobileNavigation() {
  const nav = document.getElementById('primary-nav');
  const toggle = document.getElementById('mobile-menu-toggle');
  if (nav) nav.classList.remove('is-open');
  if (toggle) toggle.setAttribute('aria-expanded', 'false');
}

function setupGlobalInteractions() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const primaryNav = document.getElementById('primary-nav');

  if (toggleBtn && primaryNav) {
    toggleBtn.addEventListener('click', () => {
      const nextState = !primaryNav.classList.contains('is-open');
      primaryNav.classList.toggle('is-open', nextState);
      toggleBtn.setAttribute('aria-expanded', String(nextState));
    });
  }

  document.addEventListener('click', (event) => {
    const anchor = event.target.closest('a[href]');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href) return;

    if (href.startsWith('#')) {
      if (href.length > 1) {
        const targetEl = document.getElementById(href.slice(1));
        if (targetEl) {
          event.preventDefault();
          closeMobileNavigation();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (window.history && window.history.pushState) {
            window.history.pushState(null, '', href);
          }
        }
      }
      return;
    }

    const isExternalProtocol = /^(https?:|mailto:|tel:)/i.test(href);
    if (!isExternalProtocol) return;

    let isSameOrigin = false;
    if (/^https?:/i.test(href)) {
      try {
        const parsed = new URL(href, window.location.origin);
        isSameOrigin = parsed.origin === window.location.origin;
      } catch {
        isSameOrigin = false;
      }
    }

    if (isSameOrigin) return;

    event.preventDefault();
    closeMobileNavigation();
    showLogoLoader();
    setTimeout(() => {
      window.location.href = href;
    }, 420);
  });

  document.addEventListener(
    'error',
    (event) => {
      const target = event.target;
      if (target && target.tagName === 'IMG' && !target.dataset.fallbackApplied) {
        target.dataset.fallbackApplied = 'true';
        target.src = SVG_FALLBACK_LOGO;
      }
    },
    true
  );
}

async function hydrateFromGoogleSheets() {
  const results = await Promise.allSettled([
    fetchCsvWithRetry(SHEET_CSV_URLS.config),
    fetchCsvWithRetry(SHEET_CSV_URLS.nav),
    fetchCsvWithRetry(SHEET_CSV_URLS.sections),
    fetchCsvWithRetry(SHEET_CSV_URLS.services),
    fetchCsvWithRetry(SHEET_CSV_URLS.team)
  ]);

  const configRows = results[0].status === 'fulfilled' ? results[0].value : [];
  const navRows = results[1].status === 'fulfilled' ? results[1].value : [];
  const sectionRows = results[2].status === 'fulfilled' ? results[2].value : [];
  const serviceRows = results[3].status === 'fulfilled' ? results[3].value : [];
  const teamRows = results[4].status === 'fulfilled' ? results[4].value : [];

  const mergedConfig = { ...FALLBACK_DATA.config };
  configRows.forEach((row) => {
    const key = String(row.key || '').trim().toLowerCase();
    const value = String(row.value || '').trim();
    if (key && value !== '') {
      mergedConfig[key] = value;
    }
  });

  applyConfig(mergedConfig);
  renderNavigation(navRows);
  applySections(sectionRows);
  renderServicesAndCompliance(serviceRows, mergedConfig);
  renderTeam(teamRows, mergedConfig);

  if (window.location.hash) {
    requestAnimationFrame(() => scrollToHashTarget(window.location.hash, 'auto'));
  }
}

window.addEventListener('pageshow', () => {
  hideLogoLoader();
});

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(hideLogoLoader, 280);
  setupGlobalInteractions();

  if (window.location.hash) {
    setTimeout(() => scrollToHashTarget(window.location.hash, 'auto'), 60);
  }

  hydrateFromGoogleSheets();
});
