import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIVI Intelligence | Built for Bharat. Proven Before It's Promised.",
  description:
    "AIVI Intelligence is India's premier AI platform builder. HackMyWebsite audits site security, RankMind tracks generative search visibility, and Campus & Career OS turns students into hires.",
  keywords: [
    "AIVI Intelligence",
    "Hack My Website",
    "RankMind AI",
    "AIVI Career OS",
    "AIVI Campus OS",
    "Cybersecurity scanner India",
    "Generative Engine Optimization",
    "GEO AI search tracking",
    "DPIIT startup",
    "Gorakhpur AI startup",
    "Vernacular voice AI",
  ],
  authors: [{ name: "AIVI Intelligence Private Limited" }],
  creator: "AIVI Intelligence",
  publisher: "AIVI Intelligence",
  metadataBase: new URL("https://aivilabs.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AIVI Intelligence — Built for Bharat. Proven Before It's Promised.",
    description:
      "HackMyWebsite audits site security, RankMind tracks visibility in AI search, and Campus & Career OS turns students into hires.",
    url: "https://aivilabs.com",
    siteName: "AIVI Intelligence",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIVI Intelligence — Built for Bharat. Proven Before It's Promised.",
    description:
      "HackMyWebsite audits site security, RankMind tracks visibility in AI search, and Campus & Career OS turns students into hires.",
    creator: "@aivilabs",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "name": "AIVI Intelligence Private Limited",
                  "url": "https://aivilabs.com",
                  "logo": "https://aivilabs.com/brand/aivi-logo-horizontal.svg",
                  "description":
                    "DPIIT-recognized Indian technology company engineering high-impact AI platforms for cybersecurity, search visibility, career intelligence, law, and healthcare.",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Medical College Road, Basharatpur",
                    "addressLocality": "Gorakhpur",
                    "addressRegion": "Uttar Pradesh",
                    "postalCode": "273004",
                    "addressCountry": "IN",
                  },
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "Hack My Website",
                  "applicationCategory": "SecurityApplication",
                  "operatingSystem": "Web",
                  "url": "https://hackmywebsite.io",
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "AIVI Campus & Career OS",
                  "applicationCategory": "EducationalApplication",
                  "operatingSystem": "Web",
                  "url": "https://campus.aivilabs.com",
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "RankMind AI",
                  "applicationCategory": "BusinessApplication",
                  "operatingSystem": "Web",
                  "url": "https://aivisibilityinsights.com",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#FAFAF9] text-stone-900 antialiased selection:bg-accent-500 selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
