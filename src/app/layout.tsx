import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

// Components
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const merriweather = Merriweather({ 
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Handy Pro - Professional Handyman Services in Mauritius",
    template: "%s | Handy Pro Mauritius",
  },
  description: "Professional multi-trade handyman services in Mauritius. Plumbing, electrical, painting, masonry, sewage systems, and general property maintenance. Licensed contractor Ikhlaas. Call +230 5797 1431.",
  keywords: [
    "handyman services Mauritius",
    "plumbing services Mauritius",
    "electrical services Mauritius",
    "painting services Mauritius",
    "masonry work Mauritius",
    "sewage systems Mauritius",
    "property maintenance Mauritius",
    "emergency handyman Mauritius",
    "licensed contractor Mauritius",
    "Ikhlaas handyman",
    "Handy Pro Mauritius",
  ],
  authors: [{ name: "Ikhlaas", url: "https://handypro.mu" }],
  creator: "Handy Pro",
  publisher: "Handy Pro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://handypro.mu"),
  alternates: {
    canonical: "https://handypro.mu",
  },
  openGraph: {
    title: "Handy Pro - Professional Handyman Services in Mauritius",
    description: "Reliable multi-trade handyman services including plumbing, electrical, painting, masonry, and general maintenance. Licensed contractor serving all of Mauritius.",
    url: "https://handypro.mu",
    siteName: "Handy Pro",
    images: [
      {
        url: "https://handypro.mu/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Handy Pro - Professional Handyman Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Handy Pro - Professional Handyman Services in Mauritius",
    description: "Reliable multi-trade handyman services including plumbing, electrical, painting, masonry, and general maintenance.",
    images: ["https://handypro.mu/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

// Schema.org structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Handy Pro",
  description: "Professional multi-trade handyman services in Mauritius",
  url: "https://handypro.mu",
  telephone: "+23057971431",
  email: "info@handypro.mu",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kalimaye Road, Petite Cabane",
    addressLocality: "Camp De Masque Pave",
    postalCode: "1404-03",
    addressCountry: "MU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -20.2444,
    longitude: 57.5736,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "00:00",
      closes: "23:59",
      description: "Emergency service only",
    },
  ],
  areaServed: [
    {
      "@type": "State",
      name: "Mauritius",
    },
  ],
  serviceType: [
    "Plumbing Services",
    "Electrical Services",
    "Painting Services",
    "Masonry Work",
    "Sewage System Services",
    "General Property Maintenance",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Handyman Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Plumbing Services",
          description: "Complete plumbing solutions including repairs, installations, and maintenance",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Electrical Work",
          description: "Professional electrical services from wiring to fixture installations",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Painting Services",
          description: "Interior and exterior painting services with premium materials",
        },
      },
    ],
  },
  founder: {
    "@type": "Person",
    name: "Ikhlaas",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
