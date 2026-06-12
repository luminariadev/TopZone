# 🎮 TopZone — Gaming Top Up & Gear Store

[![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Developer](https://img.shields.io/badge/Developer-luminariadev-neon?style=for-the-badge&color=000000&labelColor=FF007F)](https://github.com/luminariadev)

Welcome to **TopZone**, a premium Gaming Top Up and Gear Store. This project is built using a modern stack and featuring a bold, high-contrast **Neubrutalism** UI/UX design.

---

## 🎨 UI/UX Design System: Neubrutalism

Neubrutalism rejects traditional soft design trends in favor of raw, high-contrast, and geometric layouts. Use the following specifications throughout the application:

| Attribute | Specification | Tailwind / CSS Utility |
| :--- | :--- | :--- |
| **Borders** | Thick solid black | `border-4 border-black` |
| **Shadows** | Hard, solid, non-blurry offset shadows | `shadow-[4px_4px_0px_0px_#000000]` or custom utility |
| **Accent Colors** | High-saturation neon colors | Neon Green (`#39FF14`), Neon Pink (`#FF007F`), Neon Yellow (`#FFFF00`) |
| **Base Color** | Pure High Contrast Black & White | `#000000` & `#FFFFFF` |
| **Typography** | Heavy sans-serif, bold headings | Font-weights `font-black` (`900`) and `font-bold` (`700`) |
| **Transitions** | Sharp, snappy hover movements | Active clicks shift elements down-right: `active:translate-x-1 active:translate-y-1 active:shadow-none` |

---

## 🏗️ Git Workflow & Branching Strategy

Our development workflow uses `main` as the production branch, `develop` as the integration branch, and dedicated feature branches.

```txt
main (Production)
└── develop (Integration)
    ├── feature/setup-project
    ├── feature/neubrutalism-ui
    ├── feature/product-catalog
    ├── feature/supabase-auth
    ├── feature/order-checkout
    ├── feature/admin-dashboard
    └── feature/order-history
```

### Git Command Command Flow for Features:

Always ensure you are building on top of the latest development state:

```bash
# 1. Sync local develop branch with remote
git checkout develop
git pull origin develop

# 2. Create a new isolated feature branch
git checkout -b feature/nama-fitur

# 3. [Coding Process]
git add .
git commit -m "action: detailed description"

# 4. Push to Github and open a Pull Request to develop
git push origin feature/nama-fitur
```

---

## 📅 4-Week Development Roadmap

### 📦 Week 1 — Project Foundation

* **Hari 1: Project Setup**
  * **Branch:** `feature/setup-project`
  * **Commits:**
    * `init astro project`
    * `setup project structure`
    * `add basic README`
  * **PR Title:** `Setup initial Astro project`

* **Hari 2: Style Integration**
  * **Branch:** `feature/tailwind-setup`
  * **Commits:**
    * `install tailwindcss`
    * `configure global styles`
    * `add base layout`
  * **PR Title:** `Setup TailwindCSS and base layout`

* **Hari 3: Design Token Setup**
  * **Branch:** `feature/neubrutalism-theme`
  * **Commits:**
    * `add neubrutalism design tokens`
    * `create button component`
    * `create card component`
  * **PR Title:** `Add neubrutalism UI foundation`

* **Hari 4: Storefront Landing Page**
  * **Branch:** `feature/homepage`
  * **Commits:**
    * `create hero section`
    * `add featured games section`
    * `add promo banner`
  * **PR Title:** `Build landing page sections`

---

### 🛒 Week 2 — Catalog & Storefront

* **Hari 5: Game Section Core**
  * **Branch:** `feature/game-catalog`
  * **Commits:**
    * `add game catalog page`
    * `create game card component`
    * `add dummy game data`
  * **PR Title:** `Add game catalog page`

* **Hari 6: Top Up Mechanics**
  * **Branch:** `feature/topup-packages`
  * **Commits:**
    * `add top up package data`
    * `create package selection component`
    * `add game detail page`
  * **PR Title:** `Add top up package selection`

* **Hari 7: Physical Gear Store**
  * **Branch:** `feature/gaming-gear-catalog`
  * **Commits:**
    * `add gaming gear catalog`
    * `create gear product cards`
    * `add product category filter`
  * **PR Title:** `Add gaming gear catalog`

---

### ⚡ Week 3 — Supabase Integration

* **Hari 8: SDK Connection**
  * **Branch:** `feature/supabase-setup`
  * **Commits:**
    * `install supabase client`
    * `add environment example`
    * `create supabase config helper`
  * **PR Title:** `Setup Supabase integration`

* **Hari 9: Schema Architecture**
  * **Branch:** `feature/database-schema`
  * **Commits:**
    * `add database schema documentation`
    * `create products table plan`
    * `create orders table plan`
  * **PR Title:** `Document Supabase database schema`

* **Hari 10: Authentication Engine**
  * **Branch:** `feature/auth`
  * **Commits:**
    * `add login page`
    * `add register page`
    * `connect auth with supabase`
  * **PR Title:** `Add Supabase authentication`

* **Hari 11: Data Fetching**
  * **Branch:** `feature/product-data`
  * **Commits:**
    * `fetch games from supabase`
    * `fetch gear products from supabase`
    * `replace dummy data with database data`
  * **PR Title:** `Connect product catalog to Supabase`

---

### 💼 Week 4 — Checkout & Admin

* **Hari 12: Cart State Management**
  * **Branch:** `feature/cart`
  * **Commits:**
    * `create cart store`
    * `add item quantity controls`
    * `show cart summary`
  * **PR Title:** `Add shopping cart system`

* **Hari 13: Transaction Process**
  * **Branch:** `feature/checkout`
  * **Commits:**
    * `create checkout page`
    * `add order form`
    * `save order to supabase`
  * **PR Title:** `Add checkout flow`

* **Hari 14: User Transactions**
  * **Branch:** `feature/order-history`
  * **Commits:**
    * `add user order history page`
    * `create order detail view`
    * `show order status badge`
  * **PR Title:** `Add order history page`

* **Hari 15: Admin Control Panel**
  * **Branch:** `feature/admin-dashboard`
  * **Commits:**
    * `create admin dashboard layout`
    * `add order management table`
    * `add product management table`
  * **PR Title:** `Add basic admin dashboard`

---

## 🛠️ Commit Quality Guide

Commits should be atomic, describing exactly what has changed under a clear context action prefix.

### ✅ Allowed Commit Style:
* `add game card component`
* `fix responsive navbar`
* `update checkout layout`
* `add supabase order insert`
* `improve product filter UI`

### ❌ Prohibited Commit Style:
* `final`
* `update`
* `fix`
* `project selesai`

---

## 📝 Pull Request Design Template

When sending code reviews, copy and use this description template:

```markdown
## Summary
- Added ...
- Updated ...
- Fixed ...

## Screenshot
<!-- Add visual screenshots here -->

## Notes
This PR is part of the TopZone Astro + Supabase learning track.
```

---

## 🚀 Getting Started (Quick Run)

Once project initialization is complete, you can run the following to begin development:

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
Create a `.env` file in the root directory:
```env
PUBLIC_SUPABASE_URL=your_supabase_project_url
PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:4321` to see your site in action!
