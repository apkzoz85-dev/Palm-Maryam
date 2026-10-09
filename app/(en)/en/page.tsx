import type { Metadata } from "next";
import Landing from "@/components/Landing";
import { en } from "@/lib/content";
import { SITE_URL } from "@/lib/fonts";

export const metadata: Metadata = {
  title: en.seo.title,
  description: en.seo.description,
  keywords: en.seo.keywords,
  alternates: {
    canonical: "/en",
    languages: {
      "ar-EG": "/",
      en: "/en",
      "x-default": "/en",
    },
  },
  openGraph: {
    title: en.seo.title,
    description: en.seo.description,
    url: `${SITE_URL}/en`,
    siteName: "Palm Gardens at PX",
    locale: en.seo.ogLocale,
    type: "website",
    images: [{ url: "/images/hero.jpg", width: 2000, height: 1236, alt: "Palm Gardens at PX" }],
  },
  twitter: { card: "summary_large_image", title: en.seo.title, description: en.seo.description },
};

export default function EnglishPage() {
  return <Landing d={en} path="/en" />;
}
