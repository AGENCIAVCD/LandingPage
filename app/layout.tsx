import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Você Digital Propaganda | Landing Pages de Alta Conversão",
    template: "%s | Você Digital Propaganda",
  },
  description:
    "Landing pages rápidas, persuasivas e orientadas a leads para empreendedores e pequenas empresas venderem mais no digital.",
  keywords: [
    "landing page",
    "geração de leads",
    "marketing digital",
    "Next.js",
    "Você Digital Propaganda",
    "vendas online",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Você Digital Propaganda | Landing Pages de Alta Conversão",
    description:
      "Criação de páginas focadas em conversão, performance e SEO para transformar tráfego em oportunidades reais.",
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
    title: "Você Digital Propaganda | Landing Pages de Alta Conversão",
    description:
      "Design, performance e estratégia para captar mais leads e acelerar vendas online.",
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
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
