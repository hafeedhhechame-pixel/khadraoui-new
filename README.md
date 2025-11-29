# Khadraoui — خضراوي

A professional, scalable e-commerce website for selling fruit trees and agricultural products in Algeria. Built with Vite, React, and Tailwind CSS.

## Project Overview

- **Brand**: Khadraoui (خضراوي)
- **Stack**: React (Vite), Tailwind CSS, React Router, React Helmet Async
- **Features**:
  - Responsive Design (Mobile First)
  - SEO Optimized (Meta tags, Open Graph, JSON-LD)
  - Product Catalog & Details
  - Contact Form
  - Floating WhatsApp Button
  - Dark/Light Mode Ready (Tailwind configured)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/khadraoui-website.git
    cd khadraoui-website
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) in your browser.

## Building for Production

To create a production-ready build:

```bash
npm run build
```

This will generate a `dist` folder containing the static assets.

## Deployment

This project is ready to be deployed on Vercel, Netlify, or any static hosting service.

### Vercel (Recommended)

1.  Install Vercel CLI: `npm i -g vercel`
2.  Run `vercel` in the project root.
3.  Follow the prompts.

See `deploy-instructions.txt` for more details.

## Content Management

Product data is currently stored in `src/data/products.json`. You can easily replace this with a Headless CMS like Sanity or Strapi in the future.

## License

All rights reserved © 2025 Khadraoui.
