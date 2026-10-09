import { Cormorant_Garamond, IBM_Plex_Sans_Arabic } from "next/font/google";

export const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-arabic",
  display: "swap",
});

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com";
