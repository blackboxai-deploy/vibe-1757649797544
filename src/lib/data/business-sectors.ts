export const businessSectors = {
  "Pertanian, Kehutanan & Perikanan": [
    "Tanaman pangan",
    "Hortikultura", 
    "Perkebunan",
    "Peternakan",
    "Perikanan",
    "Akuakultur",
    "Kehutanan"
  ],
  "Pertambangan dan Penggalian": [
    "Batu bara",
    "Minyak & gas",
    "Bijih logam (emas, tembaga, nikel)",
    "Batu kapur",
    "Pasir",
    "Garam",
    "Mineral non-logam"
  ],
  "Industri Pengolahan": [
    "Industri makanan & minuman",
    "Tekstil",
    "Kayu & furnitur", 
    "Kertas",
    "Pupuk & kimia",
    "Karet & plastik",
    "Semen",
    "Logam dasar",
    "Mesin",
    "Alat transportasi",
    "Elektronik"
  ],
  "Pengadaan Listrik Dan Gas": [
    "Pembangkit listrik",
    "Distribusi listrik",
    "Gas alam",
    "Jaringan distribusi gas"
  ],
  "Pengadaan Air, Pengelolaan Sampah, Limbah Dan Daur Ulang": [
    "Distribusi air bersih",
    "Pengolahan limbah cair",
    "Pengelolaan sampah",
    "Daur ulang"
  ],
  "Konstruksi": [
    "Gedung",
    "Sipil (jalan, jembatan, bandara)",
    "Energi (pembangkit, pipa)",
    "Jasa khusus (plumbing, finishing)"
  ],
  "Perdagangan Besar Dan Eceran, Reparasi Mobil Dan Motor": [
    "Perdagangan besar",
    "Perdagangan eceran",
    "E-commerce",
    "Reparasi kendaraan"
  ],
  "Transportasi Dan Pergudangan": [
    "Transportasi darat",
    "Transportasi laut",
    "Transportasi udara",
    "Pergudangan",
    "Jasa kurir & ekspedisi"
  ],
  "Penyediaan Akomodasi Dan Makan Minum": [
    "Hotel & resort",
    "Restoran",
    "Kafe",
    "Catering",
    "Bar"
  ],
  "Informasi Dan Komunikasi": [
    "Telekomunikasi",
    "Penyiaran",
    "Produksi film",
    "IT services",
    "Media online"
  ],
  "Jasa Keuangan Dan Asuransi": [
    "Perbankan",
    "Pasar modal",
    "Asuransi",
    "Fintech",
    "Pegadaian"
  ],
  "Real Estate": [
    "Pengembangan properti",
    "Real estate komersial",
    "Agen properti",
    "Sewa & pengelolaan gedung"
  ],
  "Jasa Perusahaan": [
    "Konsultansi",
    "Hukum & akuntansi",
    "R&D",
    "Outsourcing",
    "Keamanan & kebersihan"
  ],
  "Jasa Pendidikan": [
    "Pendidikan formal",
    "Pendidikan tinggi",
    "Kursus & pelatihan",
    "Bimbel",
    "Pendidikan nonformal"
  ],
  "Jasa Kesehatan Dan Kegiatan Sosial": [
    "Rumah sakit",
    "Klinik",
    "Lab kesehatan",
    "Apotek",
    "Kesehatan tradisional",
    "Panti asuhan/jompo"
  ],
  "Jasa Lainnya": [
    "Seni",
    "Hiburan",
    "Olahraga",
    "Perawatan pribadi",
    "Organisasi sosial & keagamaan"
  ],
  "Administrasi Pemerintahan, Pertahanan Dan Jaminan Sosial Wajib": [
    "Lembaga pemerintahan",
    "Pertahanan",
    "Kepolisian",
    "Layanan publik",
    "BPJS & jaminan sosial"
  ]
};

export const customerSegments = [
  "Pekerja",
  "Traveler",
  "Gamer",
  "Pelajar/Mahasiswa",
  "Ibu Rumah Tangga",
  "Pengusaha",
  "Investor",
  "Pensiunan",
  "Freelancer",
  "Content Creator"
];

export type BusinessSector = keyof typeof businessSectors;
export type CustomerSegment = typeof customerSegments[number];