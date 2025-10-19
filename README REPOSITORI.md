**Website Cuaca Real-time Sederhana**

Website cuaca real-time sederhana yang menampilkan informasi cuaca terkini dan prakiraan cuaca 24 jam ke depan untuk berbagai kota di dunia.
________________________________________________________________________

Tim Pengembang (Kelompok 8)

Dani Firos Al Fitrah Habibullah (24091397168)

I Made Agus Mahayasa (24091397165)

Moch. Izzul Maulana H. (24091397160)

Program Studi D4 Manajemen Informatika -
Fakultas Vokasi - Universitas Negeri Surabaya
2025
________________________________________________________________________

Deskripsi Proyek
Website ini dikembangkan sebagai aplikasi web responsif yang dapat menampilkan:

☀️ Informasi cuaca terkini untuk beberapa kota populer

🔍 Fitur pencarian kota

📊 Prediksi cuaca 24 jam ke depan (interval 3 jam)

🌙 Mode gelap (Dark Mode)

⏰ Tampilan waktu dan tanggal real-time

🌡️ Informasi iklim dan kualitas udara
________________________________________________________________________

Cara Melihat Website
Metode 1: Membuka Langsung di Browser (Recommended)

1. Download atau Clone Repository

https://github.com/username/repository-name.git

2. Buka Folder Proyek

Navigasikan ke folder tempat Anda menyimpan file proyek


3. Buka File HTML di Browser

- Cari file index.html di folder proyek
- Klik kanan pada file index.html
- Pilih "Open with" → Pilih browser favorit Anda (Chrome, Firefox, Edge, Safari)
Atau cukup double-click file index.html

4. Aplikasi Siap Digunakan!
________________________________________________________________________

Metode 2: Menggunakan Live Server (Untuk Developer)
Jika Anda menggunakan Visual Studio Code:

1. Install Extension Live Server

- Buka VS Code
- Pergi ke Extensions (Ctrl+Shift+X)
- Cari "Live Server"
- Install extension oleh Ritwick Dey


2. Jalankan Live Server

- Buka folder proyek di VS Code
- Klik kanan pada file index.html
- Pilih "Open with Live Server"
- Browser akan otomatis terbuka di http://localhost:5500
________________________________________________________________________

Metode 3: Deploy Online (GitHub Pages)

1. Push ke GitHub Repository

   git add .
   git commit -m "Deploy website cuaca"
   git push origin main

2. Aktifkan GitHub Pages

- Buka repository di GitHub
- Pergi ke Settings → Pages
- Pada bagian "Source", pilih branch main
- Pilih folder / (root)
- Klik Save


3. Akses Website Online

Website akan tersedia di: https://username.github.io/repository-name/
________________________________________________________________________

Struktur File
<img width="652" height="369" alt="image" src="https://github.com/user-attachments/assets/2fbe3266-02f3-4610-8af9-8a03369db175" />
<img width="178" height="274" alt="image" src="https://github.com/user-attachments/assets/6954772a-8fc9-4948-a04a-ede56306af6a" />

________________________________________________________________________

Fitur-Fitur Website
1. Halaman Utama (Home)

- Menampilkan menu pilihan: Aktivitas, Kualitas Udara, Iklim
- Daftar kota populer dengan cuaca terkini
- Kolom pencarian untuk kota lain
- Tombol "Lihat Detail" untuk prakiraan lengkap

2. Halaman Detail Cuaca

- Prakiraan cuaca per 3 jam selama 24 jam
- Informasi suhu, kelembapan, dan kondisi cuaca
- Ikon cuaca yang representatif

3. Halaman Iklim

- Informasi iklim global
- Pencarian kondisi iklim berdasarkan kota

4. Halaman Kualitas Udara

- Indeks Kualitas Udara (AQI)
- Kategori kualitas udara (Baik, Sedang, Berbahaya, dll)

5. Fitur Tambahan

- Dark Mode: Toggle untuk mode gelap/terang
- Waktu Real-time: Menampilkan jam, tanggal, hari secara live
- Responsive Design: Tampilan menyesuaikan ukuran layar
________________________________________________________________________

Setup API Key
Website ini menggunakan OpenWeather API. Untuk menggunakan aplikasi:

1. Dapatkan API Key Gratis

- Kunjungi OpenWeatherMap
- Daftar akun gratis
- Copy API key Anda


2. Ganti API Key di File JavaScript

- Buka file index.js, detail.js, iklim.js, dan kualitas.js
- Cari baris: const apiKey = "YOUR_API_KEY_HERE";
- Ganti dengan API key Anda:



const apiKey = "api_key_anda_disini";
________________________________________________________________________

Output
<img width="1919" height="694" alt="Screenshot 2025-10-19 002112" src="https://github.com/user-attachments/assets/d59f50cd-44c8-4740-adf5-f8b83b2edcad" />
<img width="1918" height="670" alt="Screenshot 2025-10-19 002142" src="https://github.com/user-attachments/assets/65ed951f-f650-4d58-99ba-793b319235a4" />
<img width="1919" height="1024" alt="Screenshot 2025-10-19 002303" src="https://github.com/user-attachments/assets/fae1aba1-012c-4269-896b-321e5170eb62" />
<img width="1919" height="462" alt="Screenshot 2025-10-19 002205" src="https://github.com/user-attachments/assets/57154370-b3cc-42f5-bbf8-82dfff8d2782" />
<img width="1919" height="510" alt="Screenshot 2025-10-19 002228" src="https://github.com/user-attachments/assets/a38ab1d8-f247-4891-a515-491792fd96b9" />
________________________________________________________________________

**Selamat Menggunakan**

Made by kelompok 8 JOSJIS
