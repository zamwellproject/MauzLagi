MAUZLAGI — WEBSITE SIAP PAKAI

ISI FOLDER
- index.html          Beranda (hero rasa otomatis, keunggulan, ajakan pesan)
- katalog.html        Katalog 4 varian: filter rasa + urutkan (populer / termurah / rekomendasi chef)
- kustomisasi.html    Atur porsi, topping, jumlah, catatan -> masuk keranjang
- checkout.html       Keranjang, data penerima, kirim pesanan via WhatsApp
- kebijakan.html      Privasi + Syarat & Ketentuan
- mauzlagi.css        Seluruh gaya (tanpa Tailwind/CDN), mengikuti DESIGN.md
- products.js         SUMBER DATA: nama, harga, gambar, deskripsi, opsi porsi/topping
- cart.js             Keranjang (localStorage, sinkron antar tab)
- mauzlagi-ui.js      Menu mobile, notifikasi, animasi, fallback gambar
- mauzlagi-pages.js   Logika tiap halaman
- config.js           Nomor WhatsApp admin
- favicon.svg         Ikon situs
- DESIGN.md           Design system acuan (tidak diubah)

LANGKAH WAJIB SEBELUM PUBLISH
1. Buka config.js, ganti GANTI_DENGAN_NOMOR_WA_ADMIN dengan nomor WhatsApp bisnis.
   Format bebas: 0812xxxxxxx / +62812xxxxxxx / 62812xxxxxxx.
2. Cek products.js: harga, nama, berat, dan teks deskripsi.
3. Cek klaim di index.html (Lumajang Premium, 12 jam tahan, suhu saji 65°C, 5–7 menit,
   rasio 1:1 topping). Klaim ini berasal dari file sumber; pastikan benar sebelum tayang.
4. Baca kebijakan.html dan sesuaikan dengan praktik usahamu.
5. Gambar produk masih memakai URL lh3.googleusercontent.com dari file sumber.
   URL semacam ini bisa kedaluwarsa. Untuk jangka panjang, unduh gambarnya, simpan di folder
   images/, lalu ganti nilai "image" di products.js.

CARA MENJALANKAN
- Lokal: buka terminal di folder ini, jalankan  python -m http.server 8000
  lalu buka http://localhost:8000
- Online: unggah seluruh isi folder ke hosting statis (Netlify, Vercel, Cloudflare Pages,
  GitHub Pages, atau hosting biasa). Jangan memisahkan file.
- Koneksi internet diperlukan untuk Google Fonts (Inter, Plus Jakarta Sans, Material Symbols)
  dan gambar produk.

ALUR PEMESANAN
Beranda -> Katalog -> Kustomisasi -> Keranjang -> Checkout -> WhatsApp admin.
Setiap pesanan memuat kode unik (MZL-YYMMDD-XXXX) agar mudah dilacak.
Ongkir, ketersediaan, dan metode bayar dikonfirmasi admin lewat WhatsApp.

CATATAN
- Nama file kustomisasi diperbaiki dari "kustomasi.html" menjadi "kustomisasi.html".
- Menambah produk: tambahkan satu objek di products.js; katalog, hero, dan kustomisasi ikut otomatis
  (tambahkan juga tombol filter di katalog.html bila ingin filter per rasa).
