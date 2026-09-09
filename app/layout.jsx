import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata = {
  title: "SamGeronimo Group LLC | Business Strategy & Operations Consulting",
  description:
    "SamGeronimo Group LLC helps organizations improve performance through strategy, process optimization, KPI development, customer experience and operational excellence.",
  openGraph: {
    title: "SamGeronimo Group LLC",
    description:
      "Business strategy and operations consulting for organizations pursuing sustainable, measurable growth.",
    type: "website",
    locale: "es_US",
    alternateLocale: "en_US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SamGeronimo Group LLC",
  description:
    "Business strategy and operations consulting firm helping organizations improve performance through strategy, process optimization, KPI development, customer experience and operational excellence.",
  telephone: "+1-708-476-2658",
  address: {
    "@type": "PostalAddress",
    streetAddress: "810 W College Blvd, Apt 102",
    addressLocality: "Addison",
    addressRegion: "IL",
    postalCode: "60101",
    addressCountry: "US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${archivo.variable} ${plexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-display bg-ink text-off antialiased">
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
