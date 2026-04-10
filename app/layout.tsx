import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Você Digital Propaganda | Marketing Digital para vender mais",
    template: "%s | Você Digital Propaganda",
  },
  description:
    "Agência de marketing digital focada em posicionamento, geração de leads e crescimento de vendas para marcas que querem se destacar no digital.",
  keywords: [
    "agência de marketing digital",
    "geração de leads",
    "marketing digital",
    "Você Digital Propaganda",
    "vendas online",
    "tráfego pago",
    "landing page",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Você Digital Propaganda | Marketing Digital para vender mais",
    description:
      "Posicionamento, campanhas e experiências digitais para transformar atenção em leads e vendas.",
    url: "/",
    siteName: "Você Digital Propaganda",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Landing page da Você Digital Propaganda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Você Digital Propaganda | Marketing Digital para vender mais",
    description:
      "Sua marca com mais presença, mais desejo e mais resultado no digital.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${plusJakartaSans.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
