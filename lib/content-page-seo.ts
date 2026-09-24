const siteUrl = "https://priworth.example";
export const contentDate = "2026-09-24";

export function contentMetadata({ title, description, path, keywords, type = "article" }: { title: string; description: string; path: string; keywords: string[]; type?: "article" | "website" }) {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: { type, url, title, description, siteName: "Priworth", publishedTime: contentDate, modifiedTime: contentDate },
    twitter: { card: "summary", title, description },
  } as const;
}

export function contentSchema({ name, description, path, current, type = "Article", keywords = [], extra = {} }: { name: string; description: string; path: string; current: string; type?: "Article" | "WebPage" | "ContactPage" | "AboutPage"; keywords?: string[]; extra?: Record<string, unknown> }) {
  const url = `${siteUrl}${path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": type, "@id": url, url, name, headline: name, description, datePublished: contentDate, dateModified: contentDate, keywords: keywords.join(", "), isPartOf: { "@id": `${siteUrl}#website` }, ...extra },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: current, item: url }] },
      { "@type": "WebSite", "@id": `${siteUrl}#website`, name: "Priworth", url: siteUrl, description: "AI meeting intelligence for modern teams." },
    ],
  };
}
