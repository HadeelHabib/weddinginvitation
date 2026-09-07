import type { Metadata, Viewport } from "next";
import { Amiri, Tajawal, Great_Vibes, Playfair_Display, Cairo } from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vibes",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#fdfaf0",
};

export const metadata: Metadata = {
  title: "أفراح آل الشاعر | زفاف المهندس أسامة",
  description: "يتشرف السيد أجود جميل الشاعر بدعوتكم لحضور حفل زفاف ابنه المهندس أسامة — يوم السبت ١٢ أيلول ٢٠٢٦ في مزرعة طل القمر",
  keywords: ["زفاف", "دعوة زفاف", "أفراح آل الشاعر", "المهندس أسامة", "حفل زفاف"],
  authors: [{ name: "عائلة آل الشاعر" }],
  openGraph: {
    title: "أفراح آل الشاعر — زفاف المهندس أسامة",
    description: "يتشرف السيد أجود جميل الشاعر بدعوتكم لحضور حفل زفاف ابنه المهندس أسامة",
    type: "website",
    locale: "ar_SA",
    siteName: "أفراح آل الشاعر",
  },
  twitter: {
    card: "summary_large_image",
    title: "أفراح آل الشاعر — زفاف المهندس أسامة",
    description: "دعوة زفاف فاخرة — يوم السبت ١٢/٩/٢٠٢٦",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${amiri.variable} ${tajawal.variable} ${cairo.variable} ${greatVibes.variable} ${playfairDisplay.variable}`}
    >
      <body className="min-h-screen antialiased text-gold-900">{children}</body>
    </html>
  );
}
