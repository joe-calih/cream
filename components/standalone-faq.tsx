"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

const questions = [
  ["How does Priworth join my meetings?", "Priworth connects through supported calendar and meeting integrations, then captures the conversation according to your workspace settings and participant permissions."],
  ["How accurate are AI meeting summaries?", "Summaries are designed to be useful starting points, but they should be reviewed before becoming a formal record. Audio quality, accents, technical language, and overlapping speakers can affect accuracy."],
  ["Can I edit or delete meeting content?", "Yes. Workspace members can review, edit, and delete content according to their permissions and retention settings."],
  ["What does the free plan include?", "The free plan provides a simple way to explore core meeting capture and summary features before choosing a broader plan."],
  ["Can my team change plans later?", "Plans can be reviewed as your needs change. Visit Pricing or contact the Priworth team for help choosing an appropriate option."],
  ["How does Priworth handle privacy?", "Priworth is designed with access, retention, and responsible review in mind. See the Privacy Policy for information about data handling and user choices."],
];

export function StandaloneFaq() { return <section className="bg-background section-padding-y border-b"><div className="container-padding-x container mx-auto max-w-5xl"><div className="mb-12 flex max-w-2xl flex-col gap-5"><Tagline>Frequently asked questions</Tagline><h2 className="heading-lg">Clear answers before you get started</h2><p className="text-muted-foreground">We collected the questions teams ask most often about meeting capture, accuracy, privacy, and plans.</p></div><Accordion type="single" collapsible>{questions.map(([question, answer], index) => <AccordionItem key={question} value={`faq-${index}`}><AccordionTrigger className="text-left text-base">{question}</AccordionTrigger><AccordionContent className="max-w-3xl text-base leading-7">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>; }
export { questions };
