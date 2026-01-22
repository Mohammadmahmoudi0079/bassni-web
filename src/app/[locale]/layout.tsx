import type { Metadata } from "next";
import "../globals.css";
import NavBar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import { Provider } from "../I18nProvider";
import PageWrapper from "../../components/layout/PageWrapper";

export const metadata: Metadata = {
  title: "Newky - The Digital Key of Physical World",
  description:
    "Newky is the digital key of physical world that matches vehicles, doors, devices, and folders with users through its cyber security software. Newky prevents fraud, abuse, and damage to your valuables and unauthorized use by others.",
  keywords: [
    "newky",
    "tech",
    "technology",
    "vehicles",
    "doors",
    "devices",
    "folder",
    "cybersecurity",
    "software",
  ],
};

// Generate static params for supported locales
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'tr' }];
}

// This tells Next.js that this is a dynamic route
export const dynamicParams = false;

// Make the layout async and await params
export default async function LocalLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Await the params promise
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'en';
  
  // Validate locale
  const supportedLocales = ['en', 'tr'];
  const validLocale = supportedLocales.includes(locale) ? locale : 'en';
  
  return (
    <html lang={validLocale}>
      <body className="bg-white mx-auto">
        <Provider locale={validLocale}>
          <NavBar />
          <PageWrapper>{children}</PageWrapper>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}