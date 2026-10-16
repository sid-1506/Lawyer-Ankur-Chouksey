# ⚖️ Ankur Chouksey & Associates (ACA)
### *Company Secretaries in Practice | Corporate Legal & Regulatory Advisory*

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive Design](https://img.shields.io/badge/Responsive-Mobile--First-success?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
[![Compliance](https://img.shields.io/badge/Compliance-ICSI%20Guidelines%202020-blue?style=for-the-badge)](https://www.icsi.edu)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-0%20(Pure%20Vanilla)-brightgreen?style=for-the-badge)]()

---

## 📌 Overview

**Ankur Chouksey & Associates** is a premier corporate legal and company secretarial firm based in **Bhopal, Madhya Pradesh, India**. With extensive experience in corporate advisory, secretarial audits, statutory compliance, foreign exchange regulations, and commercial litigation support, the firm delivers trusted solutions for businesses, startups, and established corporate houses across India and internationally.

This repository houses the complete, production-grade official web portal of the firm. The website has been engineered to deliver a clean, corporate aesthetic with uncompromising performance, accessibility (A11y), and strict adherence to the regulatory guidelines laid down by the **Institute of Company Secretaries of India (ICSI)**.

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

- **⚡ Zero-Dependency Vanilla Architecture**
  - 100% framework-free stack (HTML5 + Vanilla CSS3 + Modern ES6+ JavaScript).
  - Ultra-fast load times, zero build overhead, and instantaneous page renders.
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
├── index.html         # Main semantic HTML5 single-page application structure
├── style.css          # Design system, CSS variables, typography, and responsive styles
├── script.js         # Core JS: Disclaimer modal, accordions, mobile menu, animations & form
├── img/               # Brand visual assets
│   ├── Logo.jpeg      # Official firm logo
│   └── Owner.jpeg     # Executive portrait / Founder profile photo
├── .gitignore         # Git ignore file (excludes OS temp files like .DS_Store)
└── README.md          # Comprehensive documentation & setup guide
```

---

## 🚀 Getting Started

No compilers, node modules, or bundlers are required. The project runs directly in any modern browser.

### 1. Clone the Repository
```bash
git clone https://github.com/sid-1506/Lawyer-Ankur-Chouksey.git
cd Lawyer-Ankur-Chouksey
```

### 2. Run Locally

#### Option A: Direct Browser Preview
Simply double-click `index.html` or open it with your favorite browser:
- **macOS:** `open index.html`
- **Linux:** `xdg-open index.html`
- **Windows:** `start index.html`

#### Option B: VS Code Live Server (Recommended)
1. Install the **Live Server** extension in VS Code.
2. Right-click on `index.html` and select **"Open with Live Server"**.
3. View the site at `http://127.0.0.1:5500`.

#### Option C: Python Simple HTTP Server
```bash
# Python 3.x
python3 -m http.server 8000
```
Open `http://localhost:8000` in your web browser.

#### Option D: Node.js `npx serve`
```bash
npx serve .
```

---

## 🌐 Deploying to GitHub Pages

You can host this website completely free of cost with GitHub Pages in less than a minute:

1. Push your repository to GitHub (see the [Git Push Guide](#-github-push-guide) below).
2. Go to your GitHub repository in your browser.
3. Click on **Settings** (⚙️) > **Pages** in the left sidebar.
4. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `main` (or `master`) and `/ (root)`
5. Click **Save**.
6. Within 1–2 minutes, your website will be live at:
   ```
   https://<your-username>.github.io/<repository-name>/
   ```

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
