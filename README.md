# Nutriplan Website

Proyek ini adalah aplikasi web untuk perhitungan kalori dan rekomendasi nutrisi.

## Teknologi
- **Backend**: ASP.NET Core
- **Frontend**: React.js

## Fitur Utama
- Input tinggi badan, berat badan, dan jenis kelamin untuk menghitung kalori.
- Rekomendasi makanan dan minuman berdasarkan kebutuhan kalori.
- Rekomendasi olahraga untuk membakar kalori.
- Dashboard untuk memantau hasil dan progress.

## Prasyarat
Sebelum menjalankan proyek ini, pastikan perangkat Anda telah terinstal:
- **Node.js** versi 16 atau lebih baru.
- **.NET SDK** versi 6.0 atau lebih baru.
- **Git** untuk pengelolaan kode.

## Cara Menjalankan Proyek
### Backend (ASP.NET):
1. Buka folder `backend` di Visual Studio.
2. Pilih file solusi (solution file) dengan ekstensi `.sln`.
3. Jalankan proyek menggunakan tombol **Start** di Visual Studio atau tekan `Ctrl + F5`.

### Frontend (React.js):
1. Pindah ke folder `frontend` di terminal:
   ```bash
   cd frontend
   ```
2. Install dependensi yang dibutuhkan:
   ```bash
   npm install
   ```
3. Bangun proyek untuk produksi:
   ```bash
   npm run build
   ```
4. Upload folder hasil build (`/build`) ke Netlify dengan mengikuti panduan di situs Netlify.

## Struktur Proyek
```
/
├── backend/         # Kode sumber untuk ASP.NET (backend)
├── frontend/        # Kode sumber untuk React.js (frontend)
├── .gitignore       # File untuk mengabaikan file yang tidak diperlukan
└── README.md        # Dokumentasi proyek
```

## Kontribusi
Kami menerima kontribusi! Jika ingin membantu, silakan lakukan langkah berikut:
1. Fork repository ini.
2. Buat branch baru:
   ```bash
   git checkout -b fitur-baru
   ```
3. Commit perubahan:
   ```bash
   git commit -m "Menambahkan fitur baru"
   ```
4. Push ke branch tersebut:
   ```bash
   git push origin fitur-baru
   ```
5. Kirimkan **Pull Request**.

