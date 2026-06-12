# 🎮 TopZone — Gaming Top Up & Gear Store

[![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Developer](https://img.shields.io/badge/Developer-luminariadev-neon?style=for-the-badge&color=000000&labelColor=FF007F)](https://github.com/luminariadev)

Welcome to **TopZone**, a premium storefront for gaming top-ups and physical gaming gears. This platform features a high-performance architecture built on Astro, Supabase, and Tailwind CSS, coupled with a bold, high-contrast **Neubrutalism** design system.

---

## 🎨 UI/UX Design System: Neubrutalism

TopZone implements a distinct Neubrutalism aesthetic, characterized by high-contrast elements, thick dark borders, and hard-edged offset shadows to create an engaging and premium digital storefront.

| Attribute | Specification | Tailwind / CSS Utility |
| :--- | :--- | :--- |
| **Borders** | Thick solid black | `border-4 border-black` |
| **Shadows** | Hard, solid, non-blurry offset shadows | `shadow-[4px_4px_0px_0px_#000000]` |
| **Accent Colors** | High-saturation neon colors | Neon Green (`#39FF14`), Neon Pink (`#FF007F`), Neon Yellow (`#FFFF00`) |
| **Base Colors** | Pure High Contrast Black & White | `#000000` & `#FFFFFF` |
| **Typography** | Heavy sans-serif, bold headings | Font-weights `font-black` (`900`) and `font-bold` (`700`) |
| **Transitions** | Sharp, snappy hover movements | Active clicks shift elements down-right: `active:translate-x-1 active:translate-y-1 active:shadow-none` |

---

## 🚀 Key Features

- **Instant Gaming Top-Up:** Select packages for popular games with secure ID verification and instant delivery processing.
- **Physical Gear Storefront:** Browse and filter premium physical gaming hardware and apparel.
- **Dynamic Shopping Cart:** Fast client-side cart management for seamless multi-item checkouts.
- **Secure Authentication:** Integrated user signup, login, and session management powered by Supabase Auth.
- **Interactive Admin Dashboard:** Real-time metrics, order status tracking, and inventory control.
- **Responsive Layout:** Pixel-perfect layout optimized across desktop, tablet, and mobile displays.

---

## 🛠️ Getting Started

Follow these instructions to set up and run the TopZone platform locally.

### 1. Prerequisites

Make sure you have Node.js installed on your machine (version `>=22.12.0`).

### 2. Install Dependencies

Clone the repository and install the project dependencies:

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory of your project:

```env
PUBLIC_SUPABASE_URL=your_supabase_project_url
PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run Development Server

Launch the development server locally:

```bash
npm run dev
```

Open `http://localhost:4321` in your browser to view the application in action.

### 5. Build and Deployment

To compile a production-ready static build of the application:

```bash
npm run build
```

The compiled output will be generated in the `./dist/` directory, ready to be hosted on any static web server or CDN.
