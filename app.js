const SHEET_CSV_URLS = {
  config: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQVdMFTGPIxhKrAPAY41tPcqgOCAqQ-3MS5Oi-VvcvaCwDMA_e5WipUNhIYBxgWLtZdTiAbLKEB1xGi/pub?gid=0&single=true&output=csv',
  nav: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTimg8PKYwN5285OXJaZjpGaaSPUThktHE6RMla2pztes7cenPNAbZJ6GtSZTuDiodmeGYZce9dH3Y2/pub?gid=0&single=true&output=csv',
  sections: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSvtx5qFgj6Kket-UM_QzoGPPBfQdhXtfv2Qdddc0--TXokKUcj2LHnDhN32UwSb9vNpuW-oQKqn-OG/pub?gid=0&single=true&output=csv',
  services: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRvdqOqp4OCgY9CyxzTHob4aVtsEIxyk4imw6AWhBwAP8wS3qMHWfSEJgtTzDRxKIwTYruU7ltleKYj/pub?gid=0&single=true&output=csv',
  team: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2I4VoJ8KYK7WXtwfgwV7v09EOWaZWGokhI01KT5fS5rTSdh8u2qMrCXkzSEVjq0hI74MiAAyY0x_-/pub?gid=0&single=true&output=csv'
};

const FALLBACK_STATE = {
  config: {
    nama_perusahaan: 'CV. Restu Saba Mandiri',
    tagline: 'Solusi Kebersihan Bangunan, Pemulihan Material Daur Ulang & Pengelolaan Limbah Non-B3 Berstandar K3',
    url_logo: 'https://res.cloudinary.com/nj31ul1n/image/upload/v1795599625/5f69ce85-2dab-423a-abfb-afa58f32df3a.jpg',
    primary_color: '#0F4C3A',
    accent_color: '#B58938',
    nomor_wa: '6281993446088',
    pesan_wa_umum: 'Halo CV. Restu Saba Mandiri, kami ingin meminta penawaran kerja sama operasional.',
    email: 'restu.groupsm@gmail.com',
    alamat: 'KP. Gelam Pabuaran RT 002 RW 001, Kel. Kuta Jaya, Kec. Pasar Kemis, Kab. Tangerang, Provinsi Banten 15560',
    jam_operasional: 'Senin – Jumat, 07.00 – 17.00 WIB. Sabtu, 07.00 - 12.00. Minggu, Libur',
    url_maps_embed: 'https://www.google.com/maps?q=Kuta+Jaya,+Pasar+Kemis,+Kabupaten+Tangerang,+Banten+15560&output=embed',
    teks_cta_header: 'Ajukan Penawaran',
    teks_footer: 'Mitra resmi jasa kebersihan umum bangunan (KBLI 81210), pemulihan material logam & plastik (KBLI 38301 & 38302), pengendalian hama, serta pengelolaan limbah non-B3 berstandar K3 di Kab. Tangerang, Banten.',
    tampilkan_tim: 'FALSE'
  },
  nav: [
    { urutan: '1', label: 'Beranda', target_id: 'beranda' },
    { urutan: '2', label: 'Tentang', target_id: 'tentang' },
    { urutan: '3', label: 'Layanan KBLI', target_id: 'layanan' },
    { urutan: '4', label: 'Legalitas', target_id: 'legalitas' },
    { urutan: '5', label: 'Kontak', target_id: 'kontak' }
  ],
  sections: {
    beranda: {
      kicker: 'MITRA OPERASIONAL B2B & PENGADAAN KORPORAT',
      judul: 'Solusi Kebersihan Bangunan, Pemulihan Material Daur Ulang & Pengelolaan Limbah Non-B3 Berstandar K3',
      subjudul: 'Mendukung efisiensi operasional pabrik, kawasan industri, dan gedung komersial di Kabupaten Tangerang serta Provinsi Banten melalui tata kelola terukur, penimbangan transparan, dan kepatuhan izin OSS RBA.',
      deskripsi: '',
      kutipan: '',
      url_gambar: 'https://res.cloudinary.com/nj31ul1n/image/upload/v1795599625/5f69ce85-2dab-423a-abfb-afa58f32df3a.jpg'
    },
    tentang: {
      kicker: 'PROFIL PERUSAHAAN',
      judul: 'Tata Kelola Kebersihan Fasilitas & Pemulihan Material Industri yang Akuntabel',
      subjudul: 'CV. Restu Saba Mandiri hadir sebagai mitra kerja B2B bagi pengelola gedung, pergudangan logistik, dan pabrik manufaktur yang membutuhkan kepastian legalitas serta kedisiplinan standar Kesehatan dan Keselamatan Kerja (K3).',
      deskripsi: 'Berbasis di Kecamatan Pasar Kemis, Kabupaten Tangerang, kami mengintegrasikan layanan pemeliharaan kebersihan bangunan dengan pemilahan serta pemulihan material sisa produksi non-B3 (logam dan plastik). Pendekatan terpadu ini membantu klien menjaga higienitas lingkungan kerja sekaligus mengoptimalkan nilai ekonomis residu industri secara tertib administrasi.',
      kutipan: '“Ketertiban prosedur lapangan, kejelasan timbangan material, dan kelengkapan berita acara menjadi fondasi setiap kontrak kerja sama kami dengan klien korporat.”',
      url_gambar: ''
    },
    visi_misi: {
      kicker: 'VISI & MISI',
      judul: 'Mitra Tepercaya Pengelolaan Fasilitas & Ekonomi Sirkular Industri',
      subjudul: 'Standar Eksekusi Terukur di Setiap Lokasi Klien',
      deskripsi: 'Menjadi perusahaan penyedia jasa kebersihan bangunan, pemulihan material daur ulang, dan pengelolaan limbah non-B3 yang unggul dalam kepatuhan regulasi, keselamatan kerja, dan transparansi layanan di Provinsi Banten.',
      kutipan: 'Menjalankan seluruh kegiatan operasional sesuai standar K3 dan prosedur keselamatan area industri klien.|Menyediakan pencatatan volume pemulihan material logam dan plastik yang transparan serta dapat diaudit.|Membangun hubungan kontrak jangka panjang yang responsif bagi kebutuhan pengadaan swasta maupun tender.',
      url_gambar: ''
    },
    kontak: {
      kicker: 'HUBUNGI KAMI',
      judul: 'Kantor Operasional & Layanan Konsultasi B2B',
      subjudul: '',
      deskripsi: 'Hubungi tim kami untuk penjadwalan survei lokasi, estimasi volume pemulihan material, atau diskusi kebutuhan kontrak kebersihan fasilitas Anda.',
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
      ringkasan: 'Pemeliharaan kebersihan menyeluruh untuk gedung perkantoran, fasilitas industri, pabrik, gudang logistik, dan area komersial dengan pengawasan berkala.',
      poin_list: 'Pembersihan harian area kerja, lobi, koridor, ruang rapat, dan sanitasi gedung|Perawatan lantai industri, area gudang, serta pembersihan kaca fasad|Penempatan tenaga kerja terlatih dengan perlengkapan APD standar K3|Laporan inspeksi kebersihan harian dan supervisi rutin untuk manajemen gedung'
    },
    {
      tipe: 'layanan',
      urutan: '2',
      badge: 'KBLI 38301',
      status_izin: 'Aktif Beroperasi',
      judul: 'Pemulihan Material Barang Logam',
      ringkasan: 'Pemilahan, pemrosesan awal, dan pemulihan sisa material logam non-B3 dari aktivitas manufaktur dan konstruksi menjadi bahan baku sekunder bernilai guna.',
      poin_list: 'Pemilahan gram, potongan besi, baja, aluminium, tembaga, dan logam non-ferrous|Penimbangan transparan menggunakan timbangan terkalibrasi di lokasi klien|Pencatatan berita acara serah terima material untuk kebutuhan audit internal|Pengangkutan terjadwal menuju fasilitas pemrosesan logam berizin'
    },
    {
      tipe: 'layanan',
      urutan: '3',
      badge: 'KBLI 38302',
      status_izin: 'Aktif Beroperasi',
      judul: 'Pemulihan Material Barang Plastik',
      ringkasan: 'Pengelolaan dan pemulihan residu kemasan serta komponen plastik industri non-B3 (HDPE, PP, PET, LDPE) untuk mendukung target ekonomi sirkular perusahaan.',
      poin_list: 'Klasifikasi jenis polimer plastik industri dan kemasan bekas pakai non-B3|Pemadatan dan pengemasan material untuk efisiensi ruang penyimpanan pabrik|Dokumentasi volume pemulihan material berkala bagi laporan keberlanjutan|Penjemputan rutin langsung dari area industri sesuai jadwal operasional'
    },
    {
      tipe: 'layanan',
      urutan: '4',
      badge: 'KBLI 81290',
      status_izin: 'Verifikasi OSS',
      judul: 'Pengendalian Vektor & Hama Bangunan',
      ringkasan: 'Program pencegahan dan pengendalian hama terpadu untuk menjaga higienitas gudang logistik, pabrik, dan bangunan komersial sesuai standar keselamatan kerja.',
      poin_list: 'Inspeksi titik rawan infestasi tikus, kecoa, rayap, dan serangga terbang|Penjadwalan tindakan preventif di luar jam operasional utama fasilitas|Penggunaan formulasi sesuai lembar data keselamatan bahan (MSDS)|Peta pemantauan umpan dan evaluasi efektivitas pasca-tindakan'
    },
    {
      tipe: 'layanan',
      urutan: '5',
      badge: 'KBLI 38219',
      status_izin: 'Verifikasi OSS',
      judul: 'Pengolahan & Pembuangan Limbah Non-B3',
      ringkasan: 'Penanganan, pengangkutan, dan penyaluran limbah padat non-B3 domestik maupun sisa aktivitas industri ke fasilitas pengolahan akhir sesuai regulasi lingkungan.',
      poin_list: 'Pemisahan limbah residu non-B3 dari material yang masih dapat dipulihkan|Armada pengangkutan tertutup dengan jadwal penarikan yang disepakati kontrak|Penerbitan logbook dan berita acara internal serah terima limbah non-B3|Kepatuhan penuh terhadap tata tertib kawasan industri dan standar K3'
    },
    {
      tipe: 'keunggulan',
      urutan: '1',
      badge: '01',
      status_izin: '',
      judul: 'Legalitas OSS RBA Terverifikasi',
      ringkasan: 'Terdaftar resmi dengan NIB 2907260104934 (terbit 29 Juli 2026) berstatus PMDN untuk memenuhi persyaratan administrasi pengadaan maupun tender korporat.',
      poin_list: ''
    },
    {
      tipe: 'keunggulan',
      urutan: '2',
      badge: '02',
      status_izin: '',
      judul: 'Prosedur Kerja Berstandar K3',
      ringkasan: 'Personel lapangan dilengkapi Alat Pelindung Diri (APD), memahami induksi keselamatan pabrik, serta bekerja sesuai SOP pengawasan area industri.',
      poin_list: ''
    },
    {
      tipe: 'keunggulan',
      urutan: '3',
      badge: '03',
      status_izin: '',
      judul: 'Pelaporan & Timbangan Transparan',
      ringkasan: 'Setiap serah terima material daur ulang dan limbah non-B3 dilengkapi berita acara resmi, dokumentasi foto, serta rekapitulasi berat yang akurat.',
      poin_list: ''
    },
    {
      tipe: 'keunggulan',
      urutan: '4',
      badge: '04',
      status_izin: '',
      judul: 'Respons Cepat Wilayah Banten',
      ringkasan: 'Berlokasi strategis di Pasar Kemis, Kabupaten Tangerang, memastikan mobilisasi tim dan armada penjemputan berjalan tepat waktu.',
      poin_list: ''
    },
    {
      tipe: 'legalitas',
      urutan: '1',
      badge: 'NIB Perusahaan',
      status_izin: 'Terbit & Berlaku',
      judul: '2907260104934 (Terbit 29 Juli 2026)',
      ringkasan: '',
      poin_list: ''
    },
    {
      tipe: 'legalitas',
      urutan: '2',
      badge: 'Status Modal',
      status_izin: 'Terverifikasi OSS',
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
      judul: 'Pengolahan dan Pembuangan Limbah Tidak Berbahaya Lainnya',
      ringkasan: '',
      poin_list: ''
    }
  ],
  team: []
};

const SENSITIVE_PATTERN = /(1000000008290172|npwp|nik\s*:?\s*\d{12,})/i;

const IMAGE_FALLBACK_SVG =
  'data:image/svg+xml;charset=UTF-8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="240" height="160" viewBox="0 0 240 160">' +
      '<rect width="240" height="160" fill="#EBF3F0"/>' +
      '<rect x="12" y="12" width="216" height="136" rx="8" fill="none" stroke="#0F4C3A" stroke-width="2"/>' +
      '<text x="120" y="76" font-family="sans-serif" font-size="14" font-weight="700" fill="#0F4C3A" text-anchor="middle">CV. RESTU SABA MANDIRI</text>' +
      '<text x="120" y="98" font-family="sans-serif" font-size="11" fill="#475569" text-anchor="middle">NIB 2907260104934</text>' +
    '</svg>'
  );

function getLoaderElement() {
  return document.getElementById('loading-screen');
}

function showLogoLoader() {
  const loader = getLoaderElement();
  if (!loader) return;
  loader.classList.remove('is-hidden');
  loader.setAttribute('aria-hidden', 'false');
}

function hideLogoLoader() {
  const loader = getLoaderElement();
  if (!loader) return;
  loader.classList.add('is-hidden');
  loader.setAttribute('aria-hidden', 'true');
}

function parseRFC4180CSV(rawText) {
  if (!rawText || typeof rawText !== 'string') return [];
  const cleanText = rawText.replace(/^\uFEFF/, '');
  const rows = [];
  let currentRow = [];
  let currentField = '';
  let insideQuotes = false;

  for (let i = 0; i < cleanText.length; i += 1) {
    const char = cleanText[i];
    const nextChar = cleanText[i + 1];

    if (insideQuotes) {
      if (char === '"' && nextChar === '"') {
        currentField += '"';
        i += 1;
      } else if (char === '"') {
        insideQuotes = false;
      } else {
        currentField += char;
      }
    } else if (char === '"') {
      insideQuotes = true;
    } else if (char === ',') {
      currentRow.push(currentField.trim());
      currentField = '';
    } else if (char === '\r' && nextChar === '\n') {
      currentRow.push(currentField.trim());
      rows.push(currentRow);
      currentRow = [];
      currentField = '';
      i += 1;
    } else if (char === '\n' || char === '\r') {
      currentRow.push(currentField.trim());
      rows.push(currentRow);
      currentRow = [];
      currentField = '';
    } else {
      currentField += char;
    }
  }

  if (currentField.length > 0 || currentRow.length > 0) {
    currentRow.push(currentField.trim());
    rows.push(currentRow);
  }

  if (rows.length < 2) return [];

  const headers = rows[0].map((header) => header.toLowerCase().trim());
  const records = [];

  for (let r = 1; r < rows.length; r += 1) {
    const cells = rows[r];
    if (cells.every((cell) => cell === '')) continue;
    const item = {};
    for (let c = 0; c < headers.length; c += 1) {
      const key = headers[c];
      if (!key) continue;
      const val = cells[c] || '';
      item[key] = SENSITIVE_PATTERN.test(val) ? '' : val;
    }
    records.push(item);
  }

  return records;
}

async function fetchCsvWithRetry(url, retries = 1) {
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 5500);
    try {
      const response = await fetch(url, {
        method: 'GET',
        cache: 'no-cache',
        signal: controller.signal
      });
      window.clearTimeout(timeoutId);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const text = await response.text();
      if (text.trim().startsWith('<!DOCTYPE') || text.trim().startsWith('<html')) {
        throw new Error('Unexpected HTML response');
      }
      return parseRFC4180CSV(text);
    } catch (error) {
      window.clearTimeout(timeoutId);
      if (attempt === retries) throw error;
    }
  }
  return [];
}

function optimizeImageUrl(rawUrl) {
  if (!rawUrl || typeof rawUrl !== 'string') return '';
  const trimmed = rawUrl.trim();
  if (!trimmed) return '';

  if (trimmed.includes('res.cloudinary.com') && trimmed.includes('/upload/') && !trimmed.includes('f_auto')) {
    return trimmed.replace('/upload/', '/upload/f_auto,q_auto/');
  }

  const driveFileMatch = trimmed.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if (driveFileMatch && driveFileMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${driveFileMatch[1]}`;
  }

  const driveOpenMatch = trimmed.match(/drive\.google\.com\/open\?id=([^&]+)/);
  if (driveOpenMatch && driveOpenMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${driveOpenMatch[1]}`;
  }

  return trimmed;
}

function attachImageFallback(imgElement) {
  if (!imgElement || imgElement.dataset.fallbackBound === 'true') return;
  imgElement.dataset.fallbackBound = 'true';
  imgElement.setAttribute('referrerpolicy', 'no-referrer');
  imgElement.addEventListener('error', () => {
    if (imgElement.src !== IMAGE_FALLBACK_SVG) {
      imgElement.src = IMAGE_FALLBACK_SVG;
    }
  });
}

function sanitizeHexColor(value, fallbackHex) {
  if (!value) return fallbackHex;
  const cleaned = value.trim();
  return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(cleaned) ? cleaned : fallbackHex;
}

function formatWhatsAppDisplay(rawDigits) {
  const digits = String(rawDigits || '').replace(/\D/g, '');
  if (digits.startsWith('62') && digits.length >= 11) {
    const rest = digits.slice(2);
    return `+62 ${rest.slice(0, 3)}-${rest.slice(3, 7)}-${rest.slice(7)}`;
  }
  return digits ? `+${digits}` : '+62 819-9344-6088';
}

function buildWhatsAppUrl(phoneDigits, messageText) {
  const cleanPhone = String(phoneDigits || '6281993446088').replace(/\D/g, '') || '6281993446088';
  const encodedMsg = encodeURIComponent(messageText || FALLBACK_STATE.config.pesan_wa_umum);
  return `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
}

function resolveServiceAnchorId(serviceRow, index) {
  const combined = `${serviceRow.badge || ''} ${serviceRow.judul || ''}`.toLowerCase();
  if (combined.includes('81210') || combined.includes('kebersihan umum')) {
    return 'layanan-kebersihan-bangunan';
  }
  if (combined.includes('38301') || combined.includes('logam')) {
    return 'layanan-pemulihan-logam';
  }
  if (combined.includes('38302') || combined.includes('plastik')) {
    return 'layanan-pemulihan-plastik';
  }
  if (combined.includes('81290') || combined.includes('hama')) {
    return 'layanan-pengendalian-hama';
  }
  if (combined.includes('38219') || combined.includes('limbah')) {
    return 'layanan-pengolahan-limbah';
  }
  const slug = (serviceRow.judul || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return slug ? `layanan-${slug}` : `layanan-${index + 1}`;
}

function isStatusActive(statusText) {
  const normalized = String(statusText || '').toLowerCase();
  return normalized.includes('aktif') || normalized.includes('terbit') || normalized.includes('terverifikasi');
}

function applyThemeAndConfig(cfg) {
  const root = document.documentElement;
  const primaryColor = sanitizeHexColor(cfg.primary_color, FALLBACK_STATE.config.primary_color);
  const accentColor = sanitizeHexColor(cfg.accent_color, FALLBACK_STATE.config.accent_color);
  root.style.setProperty('--primary-color', primaryColor);
  root.style.setProperty('--accent-color', accentColor);

  const companyName = cfg.nama_perusahaan || FALLBACK_STATE.config.nama_perusahaan;
  const optimizedLogo = optimizeImageUrl(cfg.url_logo || FALLBACK_STATE.config.url_logo);
  const waPhone = cfg.nomor_wa || FALLBACK_STATE.config.nomor_wa;
  const waGeneralMsg = cfg.pesan_wa_umum || FALLBACK_STATE.config.pesan_wa_umum;
  const waUrl = buildWhatsAppUrl(waPhone, waGeneralMsg);
  const emailAddr = cfg.email || FALLBACK_STATE.config.email;
  const addressText = cfg.alamat || FALLBACK_STATE.config.alamat;
  const hoursText = cfg.jam_operasional || FALLBACK_STATE.config.jam_operasional;

  ['header-logo', 'footer-logo', 'loader-logo'].forEach((id) => {
    const imgEl = document.getElementById(id);
    if (imgEl && optimizedLogo) {
      imgEl.src = optimizedLogo;
      imgEl.alt = `Logo ${companyName}`;
      attachImageFallback(imgEl);
    }
  });

  const brandNameIds = ['header-brand-name', 'footer-brand-name', 'loader-brand'];
  brandNameIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = companyName;
  });

  const headerCta = document.getElementById('header-cta');
  if (headerCta) {
    headerCta.textContent = cfg.teks_cta_header || FALLBACK_STATE.config.teks_cta_header;
    headerCta.href = waUrl;
  }

  const heroPrimaryCta = document.getElementById('hero-primary-cta');
  if (heroPrimaryCta) {
    heroPrimaryCta.href = waUrl;
  }

  const contactAddress = document.getElementById('contact-address');
  if (contactAddress) contactAddress.textContent = addressText;

  const footerAddress = document.getElementById('footer-address');
  if (footerAddress) footerAddress.textContent = addressText;

  const contactHours = document.getElementById('contact-hours');
  if (contactHours) contactHours.textContent = hoursText;

  const footerHours = document.getElementById('footer-hours');
  if (footerHours) footerHours.textContent = hoursText;

  const displayPhone = formatWhatsAppDisplay(waPhone);
  const contactWaLink = document.getElementById('contact-wa-link');
  if (contactWaLink) {
    contactWaLink.href = waUrl;
    contactWaLink.textContent = displayPhone;
  }

  const contactWaBtn = document.getElementById('contact-wa-btn');
  if (contactWaBtn) contactWaBtn.href = waUrl;

  const footerWa = document.getElementById('footer-wa');
  if (footerWa) {
    footerWa.href = waUrl;
    footerWa.textContent = `WA: ${displayPhone}`;
  }

  const contactEmailLink = document.getElementById('contact-email-link');
  if (contactEmailLink) {
    contactEmailLink.href = `mailto:${emailAddr}`;
    contactEmailLink.textContent = emailAddr;
  }

  const contactEmailBtn = document.getElementById('contact-email-btn');
  if (contactEmailBtn) contactEmailBtn.href = `mailto:${emailAddr}`;

  const footerEmail = document.getElementById('footer-email');
  if (footerEmail) {
    footerEmail.href = `mailto:${emailAddr}`;
    footerEmail.textContent = emailAddr;
  }

  const mapIframe = document.getElementById('contact-map-iframe');
  if (mapIframe && cfg.url_maps_embed) {
    mapIframe.src = cfg.url_maps_embed;
  }

  const footerSummary = document.getElementById('footer-summary');
  if (footerSummary && cfg.teks_footer) {
    footerSummary.textContent = cfg.teks_footer;
  }

  const footerCopyright = document.getElementById('footer-copyright');
  if (footerCopyright) {
    footerCopyright.textContent = `© 2026 ${companyName}. Seluruh hak cipta dilindungi undang-undang.`;
  }
}

function renderNavigation(navRows) {
  const validItems = (navRows && navRows.length > 0 ? navRows : FALLBACK_STATE.nav)
    .filter((item) => item.label && item.target_id)
    .sort((a, b) => Number(a.urutan || 99) - Number(b.urutan || 99));

  if (validItems.length === 0) return;

  const headerNavList = document.getElementById('nav-list');
  const footerNavList = document.getElementById('footer-nav-list');

  [headerNavList, footerNavList].forEach((listEl) => {
    if (!listEl) return;
    listEl.innerHTML = '';
    validItems.forEach((item) => {
      const cleanTarget = item.target_id.startsWith('#') ? item.target_id : `#${item.target_id}`;
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = cleanTarget;
      link.textContent = item.label;
      li.appendChild(link);
      listEl.appendChild(li);
    });
  });
}

function renderSections(sectionMap) {
  const beranda = sectionMap.beranda || FALLBACK_STATE.sections.beranda;
  const tentang = sectionMap.tentang || FALLBACK_STATE.sections.tentang;
  const visiMisi = sectionMap.visi_misi || FALLBACK_STATE.sections.visi_misi;
  const kontak = sectionMap.kontak || FALLBACK_STATE.sections.kontak;

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el && value) el.textContent = value;
  };

  setText('hero-kicker', beranda.kicker);
  setText('hero-title', beranda.judul);
  setText('hero-subtitle', beranda.subjudul || beranda.deskripsi);

  const heroImg = document.getElementById('hero-image');
  if (heroImg && beranda.url_gambar) {
    heroImg.src = optimizeImageUrl(beranda.url_gambar);
    attachImageFallback(heroImg);
  }

  setText('about-kicker', tentang.kicker);
  setText('about-title', tentang.judul);
  setText('about-subtitle', tentang.subjudul);
  setText('about-description', tentang.deskripsi);
  setText('about-quote', tentang.kutipan);

  setText('visi-title', visiMisi.judul);
  setText('visi-description', visiMisi.deskripsi);
  setText('misi-title', visiMisi.subjudul);

  const misiList = document.getElementById('misi-list');
  if (misiList && visiMisi.kutipan) {
    const points = visiMisi.kutipan.split('|').map((pt) => pt.trim()).filter(Boolean);
    if (points.length > 0) {
      misiList.innerHTML = '';
      points.forEach((pointText) => {
        const li = document.createElement('li');
        li.textContent = pointText;
        misiList.appendChild(li);
      });
    }
  }

  setText('contact-kicker', kontak.kicker);
  setText('contact-title', kontak.judul);
  setText('contact-description', kontak.deskripsi);
}

function renderServicesAndLegality(serviceRows, cfg) {
  const sourceRows = serviceRows && serviceRows.length > 0 ? serviceRows : FALLBACK_STATE.services;
  const waPhone = cfg.nomor_wa || FALLBACK_STATE.config.nomor_wa;
  const companyName = cfg.nama_perusahaan || FALLBACK_STATE.config.nama_perusahaan;

  const layananItems = sourceRows
    .filter((row) => (row.tipe || '').toLowerCase() === 'layanan' && row.judul)
    .sort((a, b) => Number(a.urutan || 99) - Number(b.urutan || 99));

  const keunggulanItems = sourceRows
    .filter((row) => (row.tipe || '').toLowerCase() === 'keunggulan' && row.judul)
    .sort((a, b) => Number(a.urutan || 99) - Number(b.urutan || 99));

  const legalitasItems = sourceRows
    .filter((row) => (row.tipe || '').toLowerCase() === 'legalitas' && row.judul)
    .sort((a, b) => Number(a.urutan || 99) - Number(b.urutan || 99));

  if (layananItems.length > 0) {
    const servicesGrid = document.getElementById('services-grid');
    const segmentNavList = document.getElementById('segment-nav-list');
    const footerServicesList = document.getElementById('footer-services-list');

    if (servicesGrid) servicesGrid.innerHTML = '';
    if (segmentNavList) segmentNavList.innerHTML = '';
    if (footerServicesList) footerServicesList.innerHTML = '';

    layananItems.forEach((item, index) => {
      const anchorId = resolveServiceAnchorId(item, index);
      const activeStatus = isStatusActive(item.status_izin);

      if (servicesGrid) {
        const article = document.createElement('article');
        article.id = anchorId;
        article.className = 'service-card';

        const topRow = document.createElement('div');
        topRow.className = 'service-card-top';

        const badge = document.createElement('span');
        badge.className = 'kbli-badge';
        badge.textContent = item.badge || `LAYANAN ${index + 1}`;
        topRow.appendChild(badge);

        if (item.status_izin) {
          const pill = document.createElement('span');
          pill.className = `status-pill ${activeStatus ? 'status-active' : 'status-pending'}`;
          pill.textContent = item.status_izin;
          topRow.appendChild(pill);
        }

        const titleEl = document.createElement('h3');
        titleEl.className = 'service-title';
        titleEl.textContent = item.judul;

        const summaryEl = document.createElement('p');
        summaryEl.className = 'service-summary';
        summaryEl.textContent = item.ringkasan || '';

        article.appendChild(topRow);
        article.appendChild(titleEl);
        article.appendChild(summaryEl);

        const points = (item.poin_list || '').split('|').map((pt) => pt.trim()).filter(Boolean);
        if (points.length > 0) {
          const ul = document.createElement('ul');
          ul.className = 'service-points';
          points.forEach((pt) => {
            const li = document.createElement('li');
            li.textContent = pt;
            ul.appendChild(li);
          });
          article.appendChild(ul);
        }

        const cta = document.createElement('a');
        cta.className = 'service-cta';
        cta.rel = 'noopener noreferrer';
        const badgeLabel = item.badge ? ` (${item.badge})` : '';
        cta.href = buildWhatsAppUrl(
          waPhone,
          `Halo ${companyName}, kami ingin berkonsultasi mengenai layanan ${item.judul}${badgeLabel}.`
        );
        cta.textContent = item.badge ? `Konsultasi ${item.badge}` : 'Minta Penawaran Layanan';
        article.appendChild(cta);

        servicesGrid.appendChild(article);
      }

      const shortCode = (item.badge || '').replace(/^KBLI\s+/i, '');
      const navLabel = shortCode ? `${item.judul} (${shortCode})` : item.judul;

      if (segmentNavList) {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${anchorId}`;
        link.textContent = navLabel;
        li.appendChild(link);
        segmentNavList.appendChild(li);
      }

      if (footerServicesList) {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${anchorId}`;
        link.textContent = item.badge ? `${item.judul} (${item.badge})` : item.judul;
        li.appendChild(link);
        footerServicesList.appendChild(li);
      }
    });
  }

  if (keunggulanItems.length > 0) {
    const pillarsGrid = document.getElementById('keunggulan-grid');
    if (pillarsGrid) {
      pillarsGrid.innerHTML = '';
      keunggulanItems.forEach((item, index) => {
        const card = document.createElement('article');
        card.className = 'pillar-item';

        const num = document.createElement('span');
        num.className = 'pillar-number';
        num.textContent = item.badge || String(index + 1).padStart(2, '0');

        const h4 = document.createElement('h4');
        h4.textContent = item.judul;

        const p = document.createElement('p');
        p.textContent = item.ringkasan || '';

        card.appendChild(num);
        card.appendChild(h4);
        card.appendChild(p);
        pillarsGrid.appendChild(card);
      });
    }
  }

  if (legalitasItems.length > 0) {
    const tbody = document.getElementById('legality-tbody');
    if (tbody) {
      tbody.innerHTML = '';
      legalitasItems.forEach((item) => {
        const tr = document.createElement('tr');

        const tdCode = document.createElement('td');
        const strong = document.createElement('strong');
        strong.textContent = item.badge || '-';
        tdCode.appendChild(strong);

        const tdDesc = document.createElement('td');
        tdDesc.textContent = item.judul || '';

        const tdStatus = document.createElement('td');
        const pill = document.createElement('span');
        const activeStatus = isStatusActive(item.status_izin);
        pill.className = `status-pill ${activeStatus ? 'status-active' : 'status-pending'}`;
        pill.textContent = item.status_izin || 'Terdaftar';
        tdStatus.appendChild(pill);

        tr.appendChild(tdCode);
        tr.appendChild(tdDesc);
        tr.appendChild(tdStatus);
        tbody.appendChild(tr);
      });
    }
  }
}

function renderTeam(teamRows, showFlag) {
  const teamSection = document.getElementById('tim');
  const teamGrid = document.getElementById('team-grid');
  if (!teamSection || !teamGrid) return;

  const isVisible = String(showFlag || '').trim().toUpperCase() === 'TRUE';
  const validMembers = (teamRows || [])
    .filter((member) => member.nama && member.jabatan)
    .sort((a, b) => Number(a.urutan || 99) - Number(b.urutan || 99));

  if (!isVisible || validMembers.length === 0) {
    teamSection.hidden = true;
    return;
  }

  teamGrid.innerHTML = '';
  validMembers.forEach((member) => {
    const card = document.createElement('article');
    card.className = 'team-card';

    if (member.divisi) {
      const divTag = document.createElement('span');
      divTag.className = 'team-division';
      divTag.textContent = member.divisi;
      card.appendChild(divTag);
    }

    const nameEl = document.createElement('h3');
    nameEl.className = 'team-name';
    nameEl.textContent = member.nama;

    const roleEl = document.createElement('p');
    roleEl.className = 'team-role';
    roleEl.textContent = member.jabatan;

    card.appendChild(nameEl);
    card.appendChild(roleEl);
    teamGrid.appendChild(card);
  });

  teamSection.hidden = false;
}

function scrollToHashTarget(hashString) {
  if (!hashString || hashString.length < 2) return;
  const targetId = decodeURIComponent(hashString.slice(1));
  const targetElement = document.getElementById(targetId);
  if (!targetElement) return;
  targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function setupGlobalLinkNavigation() {
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const primaryNav = document.getElementById('primary-nav');

  if (mobileToggle && primaryNav) {
    mobileToggle.addEventListener('click', () => {
      const expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', String(!expanded));
      primaryNav.classList.toggle('is-open', !expanded);
    });
  }

  document.addEventListener('click', (event) => {
    const anchor = event.target.closest('a[href]');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href) return;

    if (href.startsWith('#')) {
      event.preventDefault();
      if (mobileToggle && primaryNav && primaryNav.classList.contains('is-open')) {
        mobileToggle.setAttribute('aria-expanded', 'false');
        primaryNav.classList.remove('is-open');
      }
      if (href === '#top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        scrollToHashTarget(href);
      }
      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', href);
      }
      return;
    }

    const isExternalProtocol = /^(https?:|mailto:|tel:)/i.test(href);
    if (isExternalProtocol) {
      if (anchor.target === '_blank') return;
      event.preventDefault();
      showLogoLoader();
      window.setTimeout(() => {
        window.location.href = href;
      }, 420);
      // Reset loader if external app (WhatsApp/Email client) opens without unloading current tab
      window.setTimeout(() => {
        hideLogoLoader();
      }, 1800);
    }
  });
}

async function hydrateFromGoogleSheets() {
  const keys = Object.keys(SHEET_CSV_URLS);
  const results = await Promise.allSettled(
    keys.map((key) => fetchCsvWithRetry(SHEET_CSV_URLS[key], 1))
  );

  const parsedData = {};
  keys.forEach((key, index) => {
    const result = results[index];
    parsedData[key] = result.status === 'fulfilled' && Array.isArray(result.value) ? result.value : [];
  });

  const mergedConfig = { ...FALLBACK_STATE.config };
  parsedData.config.forEach((row) => {
    const k = (row.key || '').toLowerCase().trim();
    const v = (row.value || '').trim();
    if (k && v && !SENSITIVE_PATTERN.test(v)) {
      mergedConfig[k] = v;
    }
  });

  const mergedSections = { ...FALLBACK_STATE.sections };
  parsedData.sections.forEach((row) => {
    const sectionKey = (row.section_id || '').toLowerCase().trim();
    if (!sectionKey) return;
    const base = mergedSections[sectionKey] || {};
    mergedSections[sectionKey] = {
      kicker: row.kicker || base.kicker || '',
      judul: row.judul || base.judul || '',
      subjudul: row.subjudul || base.subjudul || '',
      deskripsi: row.deskripsi || base.deskripsi || '',
      kutipan: row.kutipan || base.kutipan || '',
      url_gambar: row.url_gambar || base.url_gambar || ''
    };
  });

  applyThemeAndConfig(mergedConfig);
  renderNavigation(parsedData.nav);
  renderSections(mergedSections);
  renderServicesAndLegality(parsedData.services, mergedConfig);
  renderTeam(parsedData.team, mergedConfig.tampilkan_tim);

  if (window.location.hash) {
    window.requestAnimationFrame(() => scrollToHashTarget(window.location.hash));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img').forEach(attachImageFallback);
  setupGlobalLinkNavigation();

  window.setTimeout(() => {
    hideLogoLoader();
  }, 280);

  if (window.location.hash) {
    window.setTimeout(() => scrollToHashTarget(window.location.hash), 320);
  }

  hydrateFromGoogleSheets();
});

// Restore page visibility when returning via browser back-forward cache (iOS Safari & Android Chrome)
window.addEventListener('pageshow', () => {
  hideLogoLoader();
});
