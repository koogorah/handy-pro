# Handy Pro - Professional Handyman Services Website

A modern, responsive single-page website for Handy Pro, a professional handyman services company in Mauritius. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion for smooth animations.

## 🚀 Features

- **Modern Design**: Clean, professional design with custom color palette
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Complete meta tags, schema markup, sitemap, and robots.txt
- **Fast Performance**: Optimized with Next.js 15 and Turbopack
- **Smooth Animations**: Framer Motion animations and transitions
- **WhatsApp Integration**: One-click WhatsApp contact throughout the site
- **Accessibility**: Semantic HTML5 structure and ARIA labels
- **TypeScript**: Type-safe development with full TypeScript support

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom configuration
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather Icons)
- **SEO**: Built-in Next.js SEO optimization with structured data
- **Deployment**: Ready for Vercel/Netlify deployment

## 📋 Business Information

- **Business Name**: Handy Pro
- **Contractor**: Ikhlaas
- **Business Registration**: 125002639
- **Location**: Kalimaye Road, Petite Cabane, Camp De Masque Pave, 1404-03, Mauritius
- **Contact**: +230 5797 1431 (WhatsApp & Phone)
- **Services**: Plumbing, Electrical, Painting, Masonry, Sewage Systems, General Maintenance

## 🎯 Key Sections

1. **Hero Section**: Eye-catching hero with call-to-action buttons
2. **About Section**: Company introduction and business details
3. **Services Section**: Grid layout showcasing all services with WhatsApp CTAs
4. **Testimonials**: Customer reviews and social proof
5. **Contact Section**: Multiple contact methods and business information
6. **Navigation**: Sticky header with smooth scrolling
7. **Footer**: Quick links and contact information
8. **Floating WhatsApp**: Always-visible WhatsApp contact button

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd handy-pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
handy-pro/
├── public/                 # Static assets
│   ├── robots.txt         # SEO robots file
│   └── sitemap.xml        # SEO sitemap
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout with SEO
│   │   └── page.tsx       # Homepage
│   └── components/        # React components
│       ├── Navigation.tsx # Sticky navigation
│       ├── Hero.tsx       # Hero section
│       ├── About.tsx      # About section
│       ├── Services.tsx   # Services grid
│       ├── Testimonials.tsx # Customer reviews
│       ├── Contact.tsx    # Contact information
│       ├── Footer.tsx     # Site footer
│       └── FloatingWhatsApp.tsx # WhatsApp button
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## 🎨 Customization

### Color Palette
The website uses a custom color palette defined in `tailwind.config.ts`:
- Primary Blue: `#2E86C1` (primary-100)
- Accent Yellow: `#FFC300` (accent-100)
- Text Colors: `#333333` (text-100), `#5c5c5c` (text-200)
- Background: `#F5F5F5` (bg-100)

### Business Information
Update business details in:
- `src/app/layout.tsx` - SEO metadata
- `src/components/About.tsx` - Business information section
- `src/components/Contact.tsx` - Contact details

### WhatsApp Number
Change the WhatsApp number throughout the components:
- Search for `23057971431` and replace with your number
- Update in Navigation, Hero, Services, Contact, and FloatingWhatsApp components

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `handy-pro` folder
   - Or connect to your GitHub repository

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload files**
   - Upload the `out` or `.next` folder to your web server
   - Configure your server to serve the static files

## 🔧 Performance Optimization

The website is already optimized with:
- **Next.js 15**: Latest version with Turbopack for fast development
- **Image Optimization**: Ready for Next.js Image component
- **Code Splitting**: Automatic code splitting by Next.js
- **Lazy Loading**: Components load as needed
- **Minification**: CSS and JavaScript are minified in production

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first design approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly navigation
- Optimized typography for all screen sizes

## 🔍 SEO Features

- **Semantic HTML5**: Proper heading hierarchy (H1, H2, H3)
- **Meta Tags**: Complete meta tags for social media and search engines
- **Schema Markup**: LocalBusiness structured data
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Proper crawling instructions
- **Open Graph**: Social media preview cards
- **Twitter Cards**: Twitter-specific meta tags

## 📞 Contact & Support

For questions or support:
- **WhatsApp**: +230 5797 1431
- **Email**: info@handypro.mu
- **Business Hours**: Mon-Sat 8:00-18:00, Sun Emergency Only

## 📄 License

This project is created for Handy Pro business use. All rights reserved.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- React Icons for the icon library

---

**Made with ❤️ for Handy Pro - Professional Handyman Services in Mauritius**
