import type { Metadata } from "next";
import Link from "next/link";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { ReactionButtons } from "@/components/reaction-buttons";

const pageUrl = "https://priworth.example/about";
const published = "2026-09-23";

export const metadata: Metadata = {
  title: "About Priworth | AI Meeting Intelligence for Better Teams",
  description: "Learn how Priworth helps teams capture meeting knowledge, find decisions, and turn conversations into clear next steps.",
  keywords: ["about Priworth", "AI meeting notes", "meeting intelligence", "team productivity", "meeting transcription"],
  alternates: { canonical: "/about" },
  openGraph: { type: "website", url: pageUrl, title: "About Priworth | AI Meeting Intelligence for Better Teams", description: "Discover the mission behind Priworth and our approach to making team knowledge easier to use.", siteName: "Priworth" },
  twitter: { card: "summary", title: "About Priworth", description: "Meet Priworth, the AI meeting intelligence workspace for modern teams." },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${pageUrl}#organization`, name: "Priworth", url: "https://priworth.example", description: "AI meeting intelligence for teams." },
    { "@type": "AboutPage", "@id": pageUrl, url: pageUrl, name: "About Priworth", datePublished: published, dateModified: published, isPartOf: { "@id": "https://priworth.example#website" }, about: { "@id": `${pageUrl}#organization` } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://priworth.example" }, { "@type": "ListItem", position: 2, name: "About", item: pageUrl }] },
    { "@type": "WebSite", "@id": "https://priworth.example#website", name: "Priworth", url: "https://priworth.example" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <LpNavbar1 />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <section className="bg-background section-padding-y border-b">
          <div className="container-padding-x container mx-auto max-w-4xl">
            <nav aria-label="Breadcrumb" className="text-muted-foreground mb-10 text-sm"><Link href="/" className="hover:text-foreground">Home</Link><span className="mx-2">/</span><span aria-current="page">About</span></nav>
            <div className="flex flex-col gap-6"><Tagline>About Priworth</Tagline><h1 className="heading-xl text-foreground">Better meetings start with better memory</h1><p className="text-muted-foreground max-w-2xl text-lg">Priworth helps teams preserve the thinking behind their work, so conversations become progress instead of disappearing into calendars and chat threads.</p></div>
            <div className="prose prose-neutral mt-12 max-w-none text-base leading-8 text-foreground">
              <p>Modern teams make important decisions in meetings every day. A customer insight changes a roadmap, a design review uncovers a risk, or a planning conversation creates a dozen actions. Yet the useful context from those moments is often scattered across notes, inboxes, recordings, and individual memory. Priworth was created to make that knowledge available to the people who need it, when they need it.</p>
              <p>Our approach combines accurate meeting transcription with thoughtful organization and search. Priworth captures the shape of a conversation, identifies decisions and action items, and makes the result simple to review. The goal is not to add another noisy dashboard to a team&apos;s workflow. It is to remove the repeated work of remembering, rewriting, and searching so people can spend more time doing the work that requires their judgment.</p>
              <h2 className="heading-md mt-12 mb-4">Designed for useful context</h2>
              <p>Priworth is built around a practical belief: meeting intelligence should support people rather than replace them. Teams remain in control of what they share, what they keep, and how they use their records. Clear summaries help absent teammates catch up. Search helps project owners find the reasoning behind a decision. Tags and insights help leaders see themes without turning every conversation into a performance score.</p>
              <p>We care about clarity, responsible product design, and a calm user experience. That is why Priworth fits into the tools teams already use and keeps the path from conversation to action short. Explore the <Link href="/#features" className="text-primary underline">product features</Link>, see <Link href="/#how-it-works" className="text-primary underline">how it works</Link>, or review common questions in the <Link href="/#faq" className="text-primary underline">FAQ</Link>.</p>
              <h2 className="heading-md mt-12 mb-4">A clearer way forward</h2>
              <p>Whether your team is distributed, growing quickly, or simply tired of losing decisions between meetings, Priworth gives your shared knowledge a dependable home. We are building a workspace where the best parts of a conversation remain useful long after the call ends.</p>
            </div>
            <div className="mt-12 border-t pt-8"><ReactionButtons /></div>
          </div>
        </section>
      </main>
      <Footer1 />
    </>
  );
}
