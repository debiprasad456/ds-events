# DS Events — Premium Event Planning Web Platform

**DS Events** (A Unit of Diverse Solutions) is a modern, premium Single Page Application (SPA) designed to showcase event planning, design, and execution services. It features a fully responsive design, custom card filters, interactive media gallery, and direct WhatsApp inquiry integration.

---

## 🚀 Key Features

*   **About Us**: Clean, elegant landing highlighting the company's brand statement, key event metrics (150+ events, 13 categories), core value propositions, and direct call-to-actions.
*   **Event Services Catalog**: Responsive grid with interactive filters categorizing 13 unique event services into **Corporate & Commercial**, **Social & Private**, and **Community & Public**.
*   **Media Gallery**: High-performance image grid equipped with categorization filters and an interactive custom lightbox viewer for full-screen media previews.
*   **Book Consultation Form**: Form that redirects booking inquiries directly to WhatsApp (+91 82600 54398) with pre-filled message formatting.

---

## 🛠️ Technology Stack

*   **Frontend Library**: React (v18+)
*   **Build Tooling & HMR**: Vite
*   **Routing**: React Router DOM (v6)
*   **Styling**: Pure CSS3 utilizing custom Variables, Flexbox/Grid layouts, and CSS transitions.

---

## 📁 Project Structure

```text
DS-Events/
├── public/                 # Static Assets (favicon, icons, etc.)
├── src/
│   ├── assets/             # Project assets & images
│   ├── components/         # Global shared components
│   │   ├── Navbar.jsx      # Navigation header with mobile support
│   │   ├── Footer.jsx      # Information footer with contact details
│   │   └── ScrollToTop.jsx # Page transition scroll resetting utility
│   ├── pages/              # SPA Route Page Components
│   │   ├── AboutUs.jsx     # Home / About route
│   │   ├── Services.jsx    # Categorized Services catalog
│   │   ├── Gallery.jsx     # Lightbox-supported media gallery
│   │   └── Contact.jsx     # Booking form with direct WhatsApp integration
│   ├── App.jsx             # Root Routing Router
│   ├── main.jsx            # React mounting entry point
│   └── index.css           # Global typography, colors & CSS variable declarations
├── package.json            # Manifest & script declarations
└── vite.config.js          # Vite configuration rules
```

---

## ⚙️ Setup & Installation

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher is recommended) along with `npm`.

### 2. Clone and Install
Clone or download the project folder, open your terminal in the directory, and install dependencies:
```bash
npm install
```

### 3. Running Locally
Run the development environment using:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your web browser.

### 4. Production Compilation
To build and test the production-ready optimized build:
```bash
npm run build
npm run preview
```
