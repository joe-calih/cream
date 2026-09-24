"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function LegalFaqs({ kind }: { kind: "licenses" | "terms" }) {
  const items = kind === "licenses" ? [
    ["Does Priworth use open source software?", "Yes. Priworth uses open source libraries and tools under their respective licenses. We maintain dependency records and preserve required notices and attribution."],
    ["Where can I ask about a third-party notice?", "Use the Contact page to report an incomplete notice, ask about a dependency, or share updated licensing information from an upstream maintainer."],
    ["Do company logos transfer ownership?", "No. Product names and logos identify integrations or references only. Ownership remains with the respective trademark holders."],
  ] : [
    ["Do I need permission to record a meeting?", "You are responsible for providing notices and obtaining permissions required by applicable law and the expectations of meeting participants before processing meeting content."],
    ["Are AI summaries guaranteed to be accurate?", "No. Automated transcripts, summaries, and action items can contain errors. Review generated content before relying on it as a business record or making a consequential decision."],
    ["Where can I ask questions about these terms?", "Use the Contact page for questions about the agreement, product responsibilities, account use, or a specific plan or order document."],
  ];

  return <section className="mt-16 border-t pt-10" aria-labelledby="legal-faq-heading"><h2 id="legal-faq-heading" className="heading-md mb-6">Frequently asked questions</h2><Accordion type="single" collapsible>{items.map(([question, answer], index) => <AccordionItem key={question} value={`${kind}-${index}`}><AccordionTrigger className="text-left">{question}</AccordionTrigger><AccordionContent>{answer}</AccordionContent></AccordionItem>)}</Accordion></section>;
}
