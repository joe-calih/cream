import Link from "next/link";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { ReactionButtons } from "@/components/reaction-buttons";

export type ContentSection = {
  heading?: string;
  paragraphs: React.ReactNode[];
};

type ContentPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  current: string;
  sections: ContentSection[];
  structuredData: Record<string, unknown>;
  beforeSections?: React.ReactNode;
  children?: React.ReactNode;
};

export function ContentPage({ eyebrow, title, intro, current, sections, structuredData, beforeSections, children }: ContentPageProps) {
  return (
    <>
      <LpNavbar1 />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <article className="bg-background section-padding-y border-b">
          <div className="container-padding-x container mx-auto max-w-4xl">
            <nav aria-label="Breadcrumb" className="text-muted-foreground mb-10 text-sm">
              <Link href="/" className="hover:text-foreground">Home</Link>
              <span className="mx-2">/</span>
              <span aria-current="page">{current}</span>
            </nav>
            <header className="flex flex-col gap-6">
              <Tagline>{eyebrow}</Tagline>
              <h1 className="heading-xl text-foreground">{title}</h1>
              <p className="text-muted-foreground max-w-2xl text-lg">{intro}</p>
            </header>
            {beforeSections}
            <div className="mt-12 max-w-none text-base leading-8 text-foreground">
              {sections.map((section) => (
                <section key={section.heading ?? "opening"}>
                  {section.heading ? <h2 className="heading-md mt-12 mb-4">{section.heading}</h2> : null}
                  {section.paragraphs.map((paragraph, index) => <p key={index} className="mb-6">{paragraph}</p>)}
                </section>
              ))}
              <p className="mb-6">Priworth publishes this page to make an important part of the product, company, or service easier to understand before you take the next step. Information can change as the service develops, so the current page and any linked agreement should be read together. If you need clarification, have found an outdated detail, or want to discuss how this information applies to your team, please use the Contact page. We value questions that help people make informed, responsible decisions.</p>
              {children}
            </div>
            <div className="mt-12 border-t pt-8"><ReactionButtons /></div>
          </div>
        </article>
      </main>
      <Footer1 />
    </>
  );
}
