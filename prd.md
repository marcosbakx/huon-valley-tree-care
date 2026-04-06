# Huon Valley Tree Care — Product Requirements Document

## Overview
A simple static website for Huon Valley Tree Care, a professional arborist business owned and operated by Marcos Bakx (AQF Level 5 Arboriculture). The site will be built with plain HTML/CSS/JS, hosted via GitHub Pages, and maintained through a GitHub repository.

## Business Information
- **Owner:** Marcos Bakx
- **Qualification:** AQF Level 5 Arboriculture
- **Experience:** 12+ years
- **Status:** Qualified and insured
- **Service Areas:** Huon Valley, Kingborough, Hobart (southern suburbs)

## Contact Details
- **Phone:** 0417 745 525
- **Email:** huonvalleytc@gmail.com
- **Facebook:** https://www.facebook.com/share/1a9xhsfDcF/
- **Address:** Mobile only (no physical address)
- **ABN:** Not displayed

## Site Structure
Single-page website with anchor-linked sections in the following order:

### 1. Header
- Logo
- Navigation with anchor links to each section
- "Call Now" button
- Phone number visible on desktop

### 2. Hero / Introduction
- Full-width background image: wood chipper action shot with Huon Valley panorama (provided)
- Dark overlay for text readability
- Business name and tagline/intro copy
- "Free Quotes" prominently highlighted
- Key selling points: qualified, insured, 12+ years experience
- Primary CTA button: "Call Now" (tel: link to 0417 745 525)
- Secondary CTA: "Get a Free Quote" linking to contact form section

### 2a. About
- Short section about Marcos Bakx — background, qualifications (AQF Level 5), experience, passion for the work
- Tone: friendly, professional, local
- Reinforces trust: qualified, insured, local operator

### 3. Services
Card layout, each with optional image, title, and description:
- Tree removal and felling
- Tree pruning
- Habitat creation
- Cable bracing
- Tree maintenance

### 5. Areas We Service
SEO-optimised section listing every suburb/locality individually as a DOM element for search indexing.

**Huon Valley Council:**
Huonville, Ranelagh, Franklin, Cygnet, Geeveston, Dover, Southport, Glen Huon, Grove, Mountain River, Lucaston, Crabtree, Judbury, Port Huon, Castle Forbes Bay, Surges Bay, Gardners Bay, Glaziers Bay, Petcheys Bay, Verona Sands, Randalls Bay, Nicholls Rivulet, Cradoc, Lymington, Deep Bay, Abels Bay, Cairns Bay, Eggs and Bacon Bay, Police Point, Waterloo, Pelverata, Lonnavale, Hastings, Ida Bay, Strathblane, Catamaran, Recherche, Cockle Creek

**Kingborough Council:**
Kingston, Kingston Beach, Blackmans Bay, Taroona, Bonnet Hill, Huntingfield, Howden, Margate, Snug, Lower Snug, Kettering, Woodbridge, Electrona, Coningham, Leslie Vale, Longley, Allens Rivulet, Sandfly, Middleton, Oyster Cove, Tinderbox, Birchs Bay, Flowerpot, Gordon, Neika, Barretta

**Hobart (Southern Suburbs):**
Sandy Bay, South Hobart, Dynnyrne, Fern Tree, Mount Nelson, Tolmans Hill, Ridgeway

> **NOTE: Review needed** — Marcos to confirm whether Bruny Island localities (Adventure Bay, Alonnah, Lunawanna, etc.) and far south Huon (Cockle Creek, Recherche, Ida Bay) are within realistic service range. Remove any that aren't.

### 4. Gallery
- 10–20 photos of completed work
- Images stored in repo (`/images/` folder), compressed for web (200–400KB each)
- Responsive grid layout with click-to-enlarge lightbox
- No categories or filtering

### 6. Google Reviews
- Embedded widget via Elfsight
- Google Business Profile exists
- **Action required:** Set up Elfsight account and generate embed code

### 7. Contact
- Contact form via Web3Forms (account set up, access key: `7d8df943-24f1-4fe5-93db-6b4b848f04af`)
- **Fields:**
  - Name (required)
  - Phone (required)
  - Email (required)
  - Suburb/Location (required, dropdown populated from the Areas We Service list)
  - Message (required)
- Phone number displayed prominently alongside form
- Email address displayed alongside form

### 8. Footer
- Social links: Facebook, Email
- Phone number
- Copyright notice
- "Free Quotes" reiterated

## Domain
- **Target domain:** huonvalleytreecare.com.au (not yet purchased)
- **Temporary URL:** GitHub Pages default URL until domain is set up
- **Action required:** Purchase domain and configure DNS to point to GitHub Pages
- **Frontend:** Static HTML, CSS, JavaScript
- **Hosting:** GitHub Pages
- **Source Control:** GitHub repository
- **Form Backend:** Web3Forms
- **Reviews Widget:** Elfsight
- **CI/CD:** GitHub Pages auto-deploy on push to main branch

## Design
- **Colour Palette:** Black, white, dark forest green (accent for buttons, links, CTAs)
- **Style:** Clean, professional, minimal
- **Typography:** Clean sans-serif (e.g. system fonts or Google Fonts — Inter, Open Sans, or similar)
- **Logo:** Black and white tree silhouette in circle (provided)

## SEO & Technical Optimisation

### Meta Tags
- Page title: "Huon Valley Tree Care | Professional Arborist Services | Huon Valley, Kingborough & Hobart"
- Meta description targeting local search terms
- Canonical URL

### Open Graph (Facebook/Social Sharing)
- `og:title` — business name and tagline
- `og:description` — short pitch
- `og:image` — hero image (resized to 1200x630 for social)
- `og:url` — canonical URL
- `og:type` — website
- `og:locale` — en_AU

### Twitter Card
- `twitter:card` — summary_large_image
- `twitter:title`, `twitter:description`, `twitter:image`

### Schema.org Structured Data (JSON-LD)
- `LocalBusiness` schema including:
  - Business name, description, phone, email
  - Service area (Huon Valley, Kingborough, Hobart)
  - Owner (Marcos Bakx)
  - Services offered
  - Opening hours (if applicable)
  - Image, logo
- `Service` schema for each service offered

### Robots & Indexing
- `robots.txt` — allow all crawlers
- `sitemap.xml` — single-page sitemap
- Meta robots: `index, follow`

### AI & Bot Optimisation
- `llms.txt` file in root — plain-text summary of the business for LLM crawlers (name, services, areas, contact)
- Clean semantic HTML (proper heading hierarchy, landmark elements like `<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`)
- Alt text on all images (descriptive, keyword-aware)
- Structured data as above (consumed by AI search engines like Google SGE, Bing Copilot, Perplexity)

### Performance
- Compressed images (WebP where supported, JPEG fallback)
- Minimal CSS/JS (no framework overhead)
- Lazy loading on gallery images
- Responsive design (mobile-first)
- Favicon (derived from logo)

## Copywriting
- **Tone:** Friendly, professional, straightforward — sounds like a real local tradesperson, not corporate
- **Free quotes** highlighted in hero and contact sections
- Service descriptions to be drafted by Claude (Marcos to review)
- About section copy to be drafted by Claude (Marcos to review)

## Open Questions
- Marcos to review suburb list and remove any outside realistic service area (especially Bruny Island and far south Huon)
- Elfsight widget setup still required
- Domain purchase still required (huonvalleytreecare.com.au)
- Gallery photos to be provided and compressed for web
