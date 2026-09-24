import type { Metadata } from "next";
import Link from "next/link";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { ReactionButtons } from "@/components/reaction-buttons";

const pageUrl = "https://priworth.example/disclaimer";
const published = "2026-09-23";

export const metadata: Metadata = {
  title: "Disclaimer | Priworth",
  description: "Read the Priworth website disclaimer covering informational content, AI-generated meeting insights, third-party links, and user responsibility.",
  keywords: ["Priworth disclaimer", "AI meeting notes disclaimer", "meeting transcription disclaimer", "website terms information"],
  alternates: { canonical: "/disclaimer" },
  openGraph: { type: "article", url: pageUrl, title: "Disclaimer | Priworth", description: "Important information about Priworth content, AI-generated insights, and third-party resources.", siteName: "Priworth", publishedTime: published },
  twitter: { card: "summary", title: "Priworth Disclaimer", description: "Important information about Priworth website content and AI-generated meeting insights." },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", "@id": pageUrl, url: pageUrl, headline: "Priworth Disclaimer", description: "Important information about Priworth website content and AI-generated meeting insights.", datePublished: published, dateModified: published, author: { "@type": "Organization", name: "Priworth" }, publisher: { "@type": "Organization", name: "Priworth" }, mainEntityOfPage: pageUrl },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://priworth.example" }, { "@type": "ListItem", position: 2, name: "Disclaimer", item: pageUrl }] },
  ],
};

export default function DisclaimerPage() {
  return (
    <>
      <LpNavbar1 />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <article className="bg-background section-padding-y border-b">
          <div className="container-padding-x container mx-auto max-w-4xl">
            <nav aria-label="Breadcrumb" className="text-muted-foreground mb-10 text-sm"><Link href="/" className="hover:text-foreground">Home</Link><span className="mx-2">/</span><span aria-current="page">Disclaimer</span></nav>
            <div className="flex flex-col gap-6"><Tagline>Legal information</Tagline><h1 className="heading-xl text-foreground">Priworth disclaimer</h1><p className="text-muted-foreground max-w-2xl text-lg">Please read this information carefully before relying on content published on the Priworth website or insights produced by the service.</p></div>
            <div className="mt-12 max-w-none text-base leading-8 text-foreground">
              <p>Last updated: September 23, 2026</p>
              <h2 className="heading-md mt-12 mb-4">Informational content</h2>
              <p>The content on this website is provided for general informational purposes. It is intended to explain Priworth&apos;s product, features, and approach, but it does not constitute legal, financial, medical, security, or professional advice. You should evaluate information in the context of your own requirements and obtain advice from a qualified professional when appropriate.</p>
              <h2 className="heading-md mt-12 mb-4">AI-generated meeting insights</h2>
              <p>Priworth uses automated systems to transcribe conversations, summarize discussions, identify possible decisions, and suggest action items. These outputs are designed to support review and productivity. They may contain omissions, inaccuracies, or misunderstandings, especially when audio quality is poor, speakers overlap, terminology is specialized, or a conversation includes ambiguity.</p>
              <p>Always review generated transcripts, summaries, and action items before using them as a business record or making a consequential decision. Priworth does not guarantee that an AI-generated output is complete, error-free, or suitable for a particular purpose. Users remain responsible for checking content, confirming decisions, and protecting sensitive information.</p>
              <h2 className="heading-md mt-12 mb-4">Third-party services and links</h2>
              <p>Priworth may describe or link to third-party platforms, integrations, websites, or resources. Those references are provided for convenience and do not mean Priworth endorses or controls the third party. Availability, content, security, and practices are governed by the third party&apos;s own terms and policies. Review those materials before connecting an account or sharing information.</p>
              <h2 className="heading-md mt-12 mb-4">Use of the website</h2>
              <p>Website content may change as Priworth evolves. We make reasonable efforts to keep information current, but we do not promise that every statement will always reflect the latest product behavior, availability, pricing, or documentation. For current product details, review the <Link href="/#pricing" className="text-primary underline">pricing section</Link>, read the <Link href="/#faq" className="text-primary underline">FAQ</Link>, or contact the Priworth team.</p>
              <p>By using this website, you acknowledge this disclaimer and understand that you are responsible for how you interpret and apply information found here. Nothing in this page limits rights or protections that cannot be limited under applicable law.</p>
            </div>
            <div className="mt-12 border-t pt-8"><ReactionButtons /></div>
          </div>
        </article>
      </main>
      <Footer1 />
    </>
  );
}
