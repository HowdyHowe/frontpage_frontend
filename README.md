# Frontend Service - Next.js (TypeScript)

## 📘 Deskripsi Proyek
Proyek ini merupakan antarmuka pengguna (frontend) yang dibangun menggunakan **Next.js** dengan **TypeScript**.  
Aplikasi ini berfungsi sebagai tampilan utama yang berkomunikasi dengan layanan backend melalui API.

## 🧩 Teknologi yang Digunakan
- Node.js v22+
- Next.js 14+
- TypeScript
- React
- Tailwind CSS
- Axios (untuk komunikasi API)

## 📂 Struktur Direktori Utama
frontend/
├── src/
│   ├── pages/
│   ├── components/
│   ├── styles/
│   └── utils/
├── package.json
├── tsconfig.json
└── next.config.js

## ⚙️ Langkah Instalasi

### 1. Persiapan Lingkungan
Pastikan telah menginstal:
- Node.js (versi 22 atau lebih baru)
- npm (biasanya sudah terinstal bersama Node.js)

### 2. Kloning Repositori
git clone <url-repositori>
cd frontend

### 3. Instalasi Dependensi
npm install

### 4. Menjalankan Server (Mode Pengembangan)
npm run dev

Aplikasi akan berjalan di:
http://localhost:3000

## 🧱 Menjalankan Mode Produksi

### 1. Build Aplikasi
npm run build

### 2. Jalankan Aplikasi Produksi
npm start

Aplikasi akan berjalan di port default 3000.

## 🧠 Skrip NPM
Perintah          | Deskripsi
------------------|----------------------------------
npm run dev       | Menjalankan server pengembangan
npm run build     | Membangun aplikasi untuk produksi
npm start         | Menjalankan aplikasi hasil build

## 🧾 Lisensi
Proyek ini dikembangkan untuk keperluan pembelajaran dan pengembangan sistem frontend berbasis Next.js.
