import type { Metadata } from "next";
import { Inter, Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-noto-serif-sc",
  display: "swap",
});

const siteUrl = "https://kungfunoodlestempe.com";

export const metadata: Metadata = {
  title: "Kungfu Noodles | Hand-Pulled Lamian Noodles | Tempe & Chandler AZ",
  description:
    "Tempe and Chandler's most acclaimed hand-pulled noodle house. Seven noodle styles made fresh daily. Dumplings, Xiao Long Bao, boba, and authentic Chinese dishes. 4.5 stars · Two Valley locations.",
  keywords: [
    "hand-pulled noodles Tempe",
    "Chinese food near ASU",
    "dumplings Tempe",
    "lamian Arizona",
    "authentic Chinese Chandler",
    "Kungfu Noodles",
    "noodle house Tempe",
    "ramen Tempe AZ",
    "Chinese restaurant Tempe",
    "Xiao Long Bao Tempe",
  ],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Kungfu Noodles",
    title: "Kungfu Noodles | Hand-Pulled Lamian Noodles | Tempe & Chandler AZ",
    description:
      "Tempe and Chandler's most acclaimed hand-pulled noodle house. Seven noodle styles made fresh daily. Dumplings, Xiao Long Bao, boba, and authentic Chinese dishes.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kungfu Noodles — hand-pulled lamian noodles in Tempe and Chandler AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kungfu Noodles | Hand-Pulled Lamian | Tempe & Chandler AZ",
    description:
      "Seven hand-pulled noodle styles made fresh daily. Two Valley locations in Tempe & Chandler.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const localBusinessTempe = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${siteUrl}/#tempe`,
  name: "Kungfu Noodles",
  alternateName: "Kungfu Ramen",
  description:
    "Hand-pulled lamian noodle house near Arizona State University. Seven noodle styles made fresh daily. Authentic Chinese cuisine including dumplings, Xiao Long Bao, and boba.",
  url: siteUrl,
  telephone: "+14802687331",
  priceRange: "$",
  servesCuisine: ["Chinese", "Noodles", "Dumplings"],
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1845 E Broadway Rd Unit 127",
    addressLocality: "Tempe",
    addressRegion: "AZ",
    postalCode: "85282",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.4128,
    longitude: -111.9213,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
      opens: "11:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "11:00",
      closes: "22:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/kungfuarizona/",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "200",
  },
  image: `${siteUrl}/og-image.jpg`,
};

const localBusinessChandler = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${siteUrl}/#chandler`,
  name: "Kungfu Noodles Chandler",
  alternateName: "Kungfu Ramen Chandler",
  description:
    "Hand-pulled lamian noodle house in Chandler, AZ. Authentic Chinese cuisine including seven noodle styles, dumplings, Xiao Long Bao, and boba.",
  url: siteUrl,
  telephone: "+14802928142",
  priceRange: "$",
  servesCuisine: ["Chinese", "Noodles", "Dumplings"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "2886 N Alma School Rd Suite A",
    addressLocality: "Chandler",
    addressRegion: "AZ",
    postalCode: "85224",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.3077,
    longitude: -111.8413,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
      opens: "11:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "11:00",
      closes: "22:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/kungfuarizona/",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are hand-pulled noodles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hand-pulled noodles (lamian, 拉面) are made by stretching and folding a single piece of dough by hand until it becomes long uniform noodles. Unlike machine-cut or packaged noodles they have a springier, chewier texture that holds broth and sauce differently. We make ours fresh daily.",
      },
    },
    {
      "@type": "Question",
      name: "What noodle styles do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Seven hand-pulled noodle styles: Thin (细面), Regular (正常), Thick (粗面), Chive (韭叶), Wide (宽面), Extra Wide (大宽面), and Knife-Sliced (刀削面). Regular served by default — just add a note to your order.",
      },
    },
    {
      "@type": "Question",
      name: "Are you the same as Kungfu Ramen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we recently rebranded from Kungfu Ramen to Kungfu Noodles to better reflect what we've always been about. Same kitchen, same team, same noodles.",
      },
    },
    {
      "@type": "Question",
      name: "Do you use MSG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We do not use MSG in our cooking.",
      },
    },
    {
      "@type": "Question",
      name: "How many locations do you have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Two Valley locations — Tempe at 1845 E Broadway Rd and Chandler. We also operate a food truck at local markets. Follow @kungfuarizona on Instagram for food truck updates.",
      },
    },
    {
      "@type": "Question",
      name: "Are you near ASU?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — our Tempe location is conveniently located near Arizona State University at 1845 E Broadway Rd Unit 127, Tempe AZ 85282.",
      },
    },
    {
      "@type": "Question",
      name: "Do you take reservations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Walk-ins welcome at both locations. Online ordering available for pickup and delivery.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — order online via the buttons on our website for pickup or delivery.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessTempe) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessChandler) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${notoSerifSC.variable} antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
