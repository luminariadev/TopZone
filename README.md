# TopZone ? Gaming Top Up & Gear Store ??

**TopZone** adalah platform e-commerce gaming bertema **Neubrutalism** yang dibangun dengan **Astro** + **Tailwind CSS v4**. Mendukung top-up game dan pembelian gaming gear dengan sistem autentikasi lokal dan opsi Supabase.

## ? Fitur

### ?? User
- **Katalog Game & Gear** ? Lihat daftar game top-up dan gaming gear
- **Detail Produk** ? Halaman detail dengan paket top-up / spesifikasi
- **Keranjang Belanja** ? Tambah/hapus item, update quantity
- **Checkout & Pesanan** ? Form checkout, riwayat pesanan per-user
- **Voucher Diskon** ? Welcome voucher 10% untuk pengguna baru
- **Profil** ? Poin belanja, pengaturan akun, riwayat pesanan, voucher

### ?? Autentikasi
- **Login/Register** ? Dukungan Supabase Auth + localStorage fallback
- **Pemisahan Data** ? Pesanan per-user (tidak tercampur antar akun)
- **Voucher** ? Generate otomatis saat register baru

### ?? Admin Panel
- **Dashboard** ? Login khusus admin (admin@topzone.com / admin123)
- **CRUD Games** ? Tambah/edit/hapus game + paket top-up
- **CRUD Gear** ? Tambah/edit/hapus gear + spesifikasi
- **Manajemen Orders** ? Lihat semua pesanan, ubah status (pending ? diproses ? selesai/dibatalkan)
- **Laporan & Export CSV** ? Statistik transaksi, download laporan

### ?? Tema
- **Neubrutalism** ? Border hitam tebal, warna neon (hijau, pink, kuning), shadow heavy
- **Responsive** ? Mobile-friendly dengan hamburger menu

## ?? Tech Stack

| Teknologi | Kegunaan |
|-----------|----------|
| [Astro](https://astro.build) | Static site generator |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling dengan tema neubrutalism |
| [Nanostores](https://github.com/nanostores/nanostores) | State management (cart, auth) |
| [Supabase](https://supabase.com) | Backend opsional (auth + database) |
| [TypeScript](https://typescriptlang.org) | Type safety |

## ?? Instalasi

```bash
# Clone project
git clone https://github.com/luminariadev/TopZone.git
cd TopZone

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build
```

## ?? Konfigurasi Supabase (Opsional)

Buat file `.env` di root project:

```env
PUBLIC_SUPABASE_URL=https://xxxxxx.supabase.co
PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...
```

Tanpa `.env`, semua data otomatis pakai localStorage fallback.

## ?? Struktur Branch

```
main
??? develop
    ??? feature/setup-project
    ??? feature/tailwind-setup
    ??? feature/neubrutalism-theme
    ??? feature/homepage
    ??? feature/pages-and-interactivity
    ??? feature/supabase-setup
    ??? feature/database-schema
    ??? feature/auth
    ??? feature/product-data
    ??? feature/checkout
    ??? feature/order-history
    ??? feature/admin-crud
    ??? feature/admin-security
    ??? feature/reports-vouchers
    ??? feature/user-reviews
    ??? feature/approval-flow
    ??? feature/fix-checkout-login-flow
```

## ?? Akun Demo

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@topzone.com | admin123 |
| User | (register baru) | min 6 karakter |

## ?? Lisensi

MIT ? bebas digunakan untuk pembelajaran dan portfolio.
