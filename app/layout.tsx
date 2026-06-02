import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistHeading = Geist({ subsets: ["latin"], variable: "--font-heading" });

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://henrilima.vercel.app"),
  title: "José Henrique | Portfólio",
  description:
    "Portfólio pessoal de José Henrique, graduando em Engenharia de Software e Desenvolvedor Web Full Stack.",
  keywords: [
    "José Henrique",
    "Desenvolvedor Full Stack",
    "Engenharia de Software",
    "Portfólio",
    "React",
    "Next.js",
  ],
  authors: [{ name: "José Henrique" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "José Henrique | Portfólio",
    description:
      "Portfólio pessoal de José Henrique, graduando em Engenharia de Software e Desenvolvedor Web Full Stack.",
    url: "https://henrilima.vercel.app",
    siteName: "José Henrique | Portfólio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "José Henrique | Portfólio",
    description:
      "Portfólio pessoal de José Henrique, graduando em Engenharia de Software e Desenvolvedor Web Full Stack.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn(
        "dark",
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        montserrat.variable,
        geistHeading.variable,
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
