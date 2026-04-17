# Sandik Technologies — Website
## Version 3.0 | Multi-Page Static Website

---

## 📁 Project Structure

```
sandik_website/
├── html/                     ← All HTML pages
│   ├── index.html            ← Homepage (Hero, Products, Applications, Why Sandik, CTA)
│   ├── about.html            ← About Us (Story, Mission, German Partnership)
│   ├── products.html         ← Products (Sidebar + Dynamic Grid, 8 categories, 30+ series)
│   ├── applications.html     ← Applications (6 industry sectors with use cases)
│   ├── service-support.html  ← Service & Support (Services, Process, AMC Table)
│   ├── career.html           ← Career (Perks, Job Listings, Application Form)
│   └── contact.html          ← Contact (Cards, Form, Google Maps, Hours)
│
├── css/
│   ├── main.css              ← Global styles, variables, typography, header, footer, buttons
│   ├── components.css        ← Page-specific components (hero, product cards, forms, etc.)
│   ├── animations.css        ← Scroll reveal, stagger animations, keyframes
│   └── responsive.css        ← Breakpoints for tablet & mobile
│
├── js/
│   ├── main.js               ← Navigation, scroll, reveal, toast, form validation, counter
│   └── products.js           ← Complete ET System product catalog, sidebar, dynamic grid
│
└── assets/
    └── images/
        └── logo.jpeg         ← Sandik Technologies logo
```

---

## 🚀 How to Open

### Option 1 — Direct browser (simplest)
1. Unzip the folder
2. Open `html/index.html` in any modern browser (Chrome, Firefox, Edge, Safari)
3. Navigate between pages using the navbar

### Option 2 — Local web server (recommended for full features)
```bash
# Using Python 3
cd sandik_website
python3 -m http.server 8080
# Open: http://localhost:8080/html/index.html

# Using Node.js (npx)
npx serve .
# Open the provided localhost URL
```

### Option 3 — VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click `html/index.html` → "Open with Live Server"

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--red` | `#C0000C` | Primary brand, accents, CTAs |
| `--red-dk` | `#8B0009` | Hover states |
| `--black` | `#080808` | Backgrounds, hero |
| `--dark-1` | `#0f0f0f` | Sidebar, cards |
| `--mid` | `#666666` | Body text |
| `--border` | `#e2e2e2` | Card borders |
| `--light` | `#f4f4f4` | Alt sections |
| Display Font | `Bebas Neue` | Headings, stats, hero |
| Heading Font | `Barlow Condensed` | Nav, labels, subheadings |
| Body Font | `Barlow` | Body text, descriptions |

---

## 📄 Pages Overview

### 1. Home (`index.html`)
- Split-screen hero with animated grid and product teaser cards
- Scrolling feature ribbon
- 8 product category cards with hover effects
- About teaser with German partnership badge
- 6 application cards (2-col grid, hover dark effect)
- Why Sandik section (dark, 6 cards with number watermarks)
- CTA section with "POWER" background text
- Partner strip

### 2. Products (`products.html`)
- Sticky sidebar with expandable category tree (8 categories, 30+ subcategories)
- Dynamic product grid (JS-powered, 50+ products from ET System catalog)
- Sticky topbar with breadcrumb and count
- Animated card entrance on category switch
- Each card: model, series badge, specs list, Quote/ET System buttons

### 3. Applications (`applications.html`)
- Overview card grid (6 industries)
- Detailed alternating sections for each industry:
  - EV & eMobility
  - Renewable Energy & Grid
  - Aerospace & Defence
  - R&D Laboratories
  - Industrial Automation
  - Consumer Electronics
- Relevant product tags per application
- Use case checklist items

### 4. Service & Support (`service-support.html`)
- 6 service cards with animated left-border effect
- 5-step process timeline
- AMC comparison table (Basic / Comprehensive / Premium)
- Quick contact panel
- Emergency support CTA

### 5. Career (`career.html`)
- 6 perk cards (grid layout)
- 3 job listings (accordion expand/collapse)
- Full application form with file upload
- Open application callout

### 6. About (`about.html`)
- Company story + 4-block stats grid
- ET System info panel
- Mission / Vision / Values (3 cards)
- German partnership section (dark background)
- Global references (Airbus, BMW, NASA, etc.)

### 7. Contact (`contact.html`)
- 4 contact method cards (office, phone, email, WhatsApp)
- Enquiry form with type selector (radio), product dropdown
- Google Maps embed
- Business hours card
- Quick action buttons (Call, WhatsApp, Directions)

---

## 🔧 Key Technical Features

- **Scroll Reveal**: `IntersectionObserver` based — elements fade/slide in on scroll
- **Product Catalog**: Full ET System product data in `products.js` — categories + subcategories + specs
- **Form Validation**: Client-side validation with visual error highlighting
- **Header**: Transparent → opaque on scroll with blur backdrop
- **Mobile**: Hamburger menu with animated state, all layouts stack to 1 column
- **WhatsApp FAB**: Fixed floating button linking to +91 97405 70119
- **Counter Animation**: Stat numbers animate when they scroll into view
- **Toast Notifications**: Non-blocking success/error messages

---

## 📞 Contact Information (Live)

| Field | Value |
|-------|-------|
| Phone | +91 99726 07819 |
| Email | sales@san-dik.com |
| WhatsApp | +91 97405 70119 |
| Address | 134, 1st Floor, 2nd Main Road, East of NGEF Layout, Kasturi Nagar, Bangalore – 560043 |

---

## 🔗 Connecting to Laravel / CMS

This site is built as plain HTML/CSS/JS and maps directly to Laravel Blade:

1. Convert `.html` files → `.blade.php` files in `resources/views/`
2. Extract the nav/footer into `resources/views/partials/nav.blade.php` and `footer.blade.php`
3. Replace product arrays in `products.js` with `@json($products)` from controller
4. Replace form `action=""` with `action="{{ route('contact.send') }}"` + `@csrf`
5. Add `@extends('layouts.app')` and `@section('content')` wrappers

---

*Generated for Sandik Technologies Pvt. Ltd. · April 2026*
