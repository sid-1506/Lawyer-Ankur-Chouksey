# ⚖️ Ankur Chouksey & Associates (ACA)
### *Company Secretaries in Practice | Corporate Legal & Regulatory Advisory*

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive Design](https://img.shields.io/badge/Responsive-Mobile--First-success?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
[![Compliance](https://img.shields.io/badge/Compliance-ICSI%20Guidelines%202020-blue?style=for-the-badge)](https://www.icsi.edu)

---

## 📌 Overview

**Ankur Chouksey & Associates** is a premier corporate legal and company secretarial firm based in **Bhopal, Madhya Pradesh, India**. With extensive experience in corporate advisory, secretarial audits, statutory compliance, foreign exchange regulations, and commercial litigation support, the firm delivers trusted solutions for businesses, startups, and established corporate houses across India and internationally.

This repository houses the complete, production-grade official web portal of the firm. Built using **React 19 + Vite** with modular components, the site retains the pure corporate aesthetic, accessibility (A11y), and strict adherence to the regulatory guidelines laid down by the **Institute of Company Secretaries of India (ICSI)**.

---

## ✨ Key Features

- **⚖️ ICSI 2020 Compliant Mandatory Disclaimer Modal**
  - Adheres strictly to the *ICSI Guidelines for Advertisement by Company Secretaries (2020)*.
  - Interactive modal dialog requiring user acknowledgement before accessing firm information.
  - Session-state persistence via `sessionStorage` (no repetitive prompts during the same session).
  - Accessible focus trapping and keyboard navigation safeguards.

- **🏛️ 10 Dedicated Practice Areas (Accordion UI)**
  - Expandable, accessible accordion cards detailing specialized service scopes:
    1. **Business Registration** (Private, Public, OPC, Section 8, NBFCs, Foreign subsidiaries)
    2. **Corporate Secretarial & Advisory** (MCA/ROC compliance, board governance, registers, minutes)
    3. **Foreign Exchange Management Act (FEMA)** (FDI, ODI, ECB, compounding, FLA returns)
    4. **Audit & Certifications** (Secretarial audit u/s 204, share reconciliation, due diligence)
    5. **Corporate Restructuring** (Mergers, demergers, amalgamations, fast-track schemes)
    6. **Financial Restructuring** (Capital reduction, debt reorganization, revival strategies)
    7. **SEBI & Listing Compliance** (LODR adherence, takeovers, insider trading codes)
    8. **CSR Consultancy** (Corporate Social Responsibility policy design, execution & reporting)
    9. **Tribunal & Authority Representation** (NCLT, Regional Director, ROC, RD, SEBI)
    10. **Legal Drafting & Commercial Contracts** (SHA, SPA, JV agreements, commercial deeds)

- **⚡ Modern Component-Driven Architecture (React 19 + Vite)**
  - Blazing-fast development server with instant Hot Module Replacement (HMR).
  - Highly organized modular structure (`layout/`, `sections/`, `ui/`, `hooks/`, `data/`).
  - Lightweight, hand-crafted inline SVG iconography (no bulky icon libraries).

- **📱 Fully Responsive & Cross-Browser Optimized**
  - Mobile-first responsive grid system and fluid typography.
  - Slide-in mobile drawer navigation with outside-click detection and focus control.
  - Sticky glassmorphic header with scroll-state transitions and active section tracking via `IntersectionObserver`.

- **🎨 Sophisticated Corporate Design System**
  - Curated executive color palette: Deep Corporate Navy (`#102B4E`), Warm Off-White (`#F8F7F3`), and Muted Champagne Gold (`#B38A4A`).
  - Editorial typography combining classic serif headings (**Cormorant Garamond**) with ultra-legible modern sans-serif body text (**Manrope**).
  - Scroll-triggered reveal animations with full fallback support for `prefers-reduced-motion`.

- **📩 Direct Client Enquiry Dispatcher**
  - Robust client-side validation (regex phone, email, name, service selection, message length).
  - Automated `mailto:` constructor that formats a structured briefing email directly ready in the client's email software.

- **🔍 Search Engine Optimization (SEO) & Schema.org**
  - Semantic HTML5 tags (`<main>`, `<header>`, `<nav>`, `<section>`, `<article>`, `<address>`).
  - Open Graph & Twitter Card metadata for rich previews on LinkedIn, WhatsApp, and Twitter.
  - Embedded JSON-LD structured data (`schema.org/ProfessionalService`) for Google Search & Maps visibility.

---

## 📂 Project Structure

```text
Lawyer-Ankur-Chouksey/
├── public/
│   ├── favicon.svg           # Scalable SVG favicon
│   ├── icons.svg             # Brand iconography
│   └── img/                  # Brand visual assets
│       ├── Logo.jpeg         # Official firm logo
│       └── Owner.jpeg        # Executive portrait / Founder profile photo
├── src/
│   ├── assets/               # Bundled static assets
│   ├── components/
│   │   ├── layout/           # Global structural components (Navbar, Footer)
│   │   ├── sections/         # Main landing sections (Hero, Services, About, etc.)
│   │   └── ui/               # Reusable UI widgets (ServiceCard, DisclaimerModal, etc.)
│   ├── data/                 # Static data sources (servicesData.js)
│   ├── hooks/                # Custom React hooks (useScrollReveal.js)
│   ├── styles/               # Global CSS stylesheet (style.css)
│   ├── App.jsx               # Main application component
│   └── main.jsx              # React DOM render root
├── .gitignore                # Root gitignore rules
├── .oxlintrc.json            # Oxlint configuration
├── index.html                # Vite HTML entry point with complete SEO metadata
├── LICENSE                   # MIT License
├── package.json              # NPM package dependencies and scripts
├── package-lock.json         # NPM dependency lockfile
├── README.md                 # Project documentation
└── vite.config.js            # Vite bundler configuration
```

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/sid-1506/Lawyer-Ankur-Chouksey.git
cd Lawyer-Ankur-Chouksey
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally (Development)
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploying to Vercel

This project is fully ready for zero-config deployment on **[Vercel](https://vercel.com)**:

1. Import the repository in your Vercel Dashboard.
2. Vercel automatically detects the **Vite** preset:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
3. Click **Deploy**. Your site will be live on an SSL-secured URL.

---

## 🛠️ GitHub Push Guide

To commit the new README and push updates to GitHub:

### If pushing to the existing repository:
```bash
# Check current status
git status

# Stage the README and changes
git add README.md

# Commit your changes
git commit -m "docs: add comprehensive project README"

# Push to your main branch
git push origin main
```

### If uploading to a brand new GitHub repository:
1. Create a new repository on [GitHub](https://github.com/new) (e.g., `Lawyer-Ankur-Chouksey`).
2. Link your local project to your new remote repository:
   ```bash
   # Rename default branch if needed
   git branch -M main

   # Update remote origin URL
   git remote set-url origin https://github.com/<YOUR-GITHUB-USERNAME>/<YOUR-REPO-NAME>.git

   # Push all code
   git push -u origin main
   ```

---

## 🏢 Office & Contact Information

| Detail | Information |
| :--- | :--- |
| **Firm Name** | Ankur Chouksey & Associates |
| **Designation** | Company Secretaries in Practice |
| **Proprietor** | CS Ankur Chouksey |
| **Office Address** | 5/12, Third Floor, Amer Complex, Infront of Punjab National Bank, M. P. Nagar Zone-2, Bhopal, Madhya Pradesh – 462011 |
| **Phone Numbers** | [+91 86027 82727](tel:+918602782727) / [+91 88391 06961](tel:+918839106961) |
| **Email Addresses** | [csankurchouksey@gmail.com](mailto:csankurchouksey@gmail.com) / [info@csankurchouksey.com](mailto:info@csankurchouksey.com) |

---

## ⚖️ Regulatory Notice & Disclaimer

> This website complies with the guidelines issued by the **Institute of Company Secretaries of India (ICSI)** regarding websites and public disclosures by Company Secretaries in Practice (Guidelines for Advertisement by Company Secretaries, 2020). The information provided on this website is solely for general informational purposes and does not constitute an advertisement, solicitation, legal advice, or invitation to engage.

---

## 📄 License

This project is created for **Ankur Chouksey & Associates**. All rights reserved. Code structure and web design templates are available for open educational and professional reference under the [MIT License](LICENSE).
