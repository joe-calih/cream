"use client";

import { useState } from "react";
import { ArrowRight, Check, ChevronLeft, ChevronRight, FileText, Github, Grip, Mail, MoreVertical, Play, Plus, Search, Sparkles, WandSparkles, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const starters = [
  { title: "Zap", detail: "Automated workflows", icon: Zap, color: "bg-orange-50 text-orange-600" },
  { title: "Agent", detail: "AI teammates", icon: WandSparkles, color: "bg-red-50 text-red-600" },
  { title: "Chatbot", detail: "AI-powered chatbot", icon: Sparkles, color: "bg-orange-50 text-orange-600" },
  { title: "MCP", detail: "AI tool integrations", icon: Grip, color: "bg-rose-50 text-rose-600" },
  { title: "Form", detail: "Automation-ready forms", icon: FileText, color: "bg-orange-50 text-orange-600" },
];

const recommendations = [
  { title: "Create study lead entries from paid social leads", apps: ["Facebook Lead Ads", "Webhooks by Zapier"], accent: "bg-[#f8f7ff]" },
  { title: "Add ad leads to your marketing subscriber list", apps: ["Facebook Lead Ads", "Mailchimp"], accent: "bg-white" },
  { title: "Create job email records in spreadsheet for analysis", apps: ["Gmail", "Google Sheets"], accent: "bg-white" },
  { title: "Send confirmation email to applicant after analyst submissions", apps: ["Google Forms", "Gmail"], accent: "bg-white" },
];

function AppIcon({ name }: { name: string }) {
  const styles: Record<string, string> = { "Facebook Lead Ads": "bg-[#1877f2]", "Webhooks by Zapier": "bg-orange-500", Mailchimp: "bg-black", Gmail: "bg-white border border-border", "Google Sheets": "bg-[#34a853]", "Google Forms": "bg-purple-700" };
  const short = name === "Facebook Lead Ads" ? "f" : name === "Webhooks by Zapier" ? "↯" : name === "Mailchimp" ? "◉" : name === "Gmail" ? "M" : name === "Google Sheets" ? "▦" : "▣";
  return <span title={name} className={`inline-flex size-4 items-center justify-center rounded-sm text-[10px] font-bold text-white ${styles[name] ?? "bg-muted text-foreground"}`}>{short}</span>;
}

function AppConnections({ apps }: { apps: string[] }) { return <div className="flex flex-wrap items-center gap-2">{apps.map((app) => <span key={app} className="text-muted-foreground inline-flex items-center gap-1 text-[10px]"><AppIcon name={app} />{app}</span>)}</div>; }

export function AutomationApp() {
  const [prompt, setPrompt] = useState("");
  const [submittedPrompt, setSubmittedPrompt] = useState("");
  const [dismissed, setDismissed] = useState(false);
  const [view, setView] = useState<"recent" | "draft">("recent");

  const submitPrompt = () => {
    if (prompt.trim()) {
      setSubmittedPrompt(prompt.trim());
      setPrompt("");
    }
  };

  return <main className="automation-workspace bg-background text-foreground">
    <div className="container-padding-x container mx-auto w-full max-w-6xl py-8 sm:py-10 md:py-14">
      <section className="mx-auto max-w-3xl">
        <h1 className="text-center text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">What&apos;s on your list today, Joecalih?</h1>
        <div className="mt-4 overflow-hidden rounded-xl border border-[#f2b6d8] bg-white shadow-[0_2px_8px_rgba(50,35,42,0.04)] focus-within:border-[#e878b3] focus-within:ring-2 focus-within:ring-[#f9d9e9]">
          <div className="flex items-center gap-2 border-b border-border px-5 py-3 text-sm font-medium"><span className="flex size-5 items-center justify-center rounded-full border border-primary text-[10px] text-primary">✦</span>Copilot</div>
          <textarea value={prompt} onChange={(event) => setPrompt(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); submitPrompt(); } }} placeholder="Enter an idea or app name to get started" className="min-h-28 w-full resize-none border-0 px-5 py-4 text-sm outline-none placeholder:text-muted-foreground" aria-label="Describe an automation" />
          <div className="flex items-center justify-between px-5 pb-3 text-xs text-muted-foreground"><span>Copilot is AI and can make mistakes. Please double-check responses.</span><Button type="button" size="icon" variant="ghost" className="size-8" onClick={submitPrompt} aria-label="Run prompt"><ArrowRight className="size-4" /></Button></div>
        </div>
        {submittedPrompt ? <div className="mt-2 flex items-center gap-2 text-xs text-emerald-700"><Check className="size-3" />Queued automation: “{submittedPrompt}”</div> : null}
      </section>

      <section className="mt-12" aria-labelledby="starter-heading"><h2 id="starter-heading" className="mb-3 text-xs font-semibold">Start from scratch</h2><div className="grid grid-cols-2 gap-2 sm:grid-cols-5">{starters.map((starter) => { const Icon = starter.icon; return <button key={starter.title} type="button" onClick={() => setPrompt(`Create a ${starter.title.toLowerCase()} for `)} className="flex min-h-12 items-center gap-2 rounded-md border border-[#e4ded9] bg-white px-2 text-left transition hover:border-[#f29bca] hover:bg-[#fff8fb] focus-visible:ring-2 focus-visible:ring-[#f4b7d5]"><span className={`flex size-7 shrink-0 items-center justify-center rounded-md ${starter.color}`}><Icon className="size-3.5" /></span><span className="min-w-0"><span className="block text-xs font-medium">{starter.title}</span><span className="block truncate text-[9px] text-[#8d8580]">{starter.detail}</span></span></button>; })}</div></section>

      <section className="mt-5" aria-labelledby="recommendation-heading"><div className="mb-3 flex items-center justify-between"><h2 id="recommendation-heading" className="text-xs font-semibold">Recommended for you</h2><button type="button" className="text-[#817874]" aria-label="Recommendation options"><MoreVertical className="size-3.5" /></button></div>{!dismissed ? <div className="mb-3 flex items-start gap-3 rounded-md border border-[#ddd8f6] bg-[#f8f7ff] p-3"><Sparkles className="mt-0.5 size-3.5 shrink-0 text-[#6653d6]" /><div className="min-w-0 flex-1"><p className="text-[10px] text-[#6653d6]">Top recommendation for you</p><p className="mt-2 text-xs font-medium">Create study lead entries from paid social leads</p><div className="mt-2"><AppConnections apps={recommendations[0].apps} /></div></div><button type="button" onClick={() => setDismissed(true)} aria-label="Dismiss recommendation" className="text-[#817874]"><X className="size-3" /></button></div> : null}<div className="grid gap-2 md:grid-cols-3">{recommendations.slice(1).map((recommendation) => <article key={recommendation.title} className={`flex min-h-24 flex-col justify-between rounded-md border border-[#e4ded9] p-3 ${recommendation.accent}`}><h3 className="pr-3 text-[11px] font-medium leading-snug">{recommendation.title}</h3><div><p className="mb-2 text-[9px] text-[#8d8580]">Works great with:</p><AppConnections apps={recommendation.apps} /></div></article>)}</div></section>

      <section className="mt-5" aria-labelledby="connections-heading"><div className="mb-3 flex items-center gap-2"><h2 id="connections-heading" className="text-xs font-semibold">Works well with</h2><AppConnections apps={["Facebook Lead Ads"]} /><span className="text-[10px] text-[#6653d6]">Browse apps</span></div><div className="grid gap-2 md:grid-cols-3">{recommendations.slice(0, 3).map((recommendation) => <article key={`connection-${recommendation.title}`} className="rounded-md border border-[#e4ded9] bg-white p-3"><h3 className="text-[11px] font-medium leading-snug">{recommendation.title}</h3><p className="mt-4 mb-2 text-[9px] text-[#8d8580]">Works great with:</p><AppConnections apps={recommendation.apps} /></article>)}</div></section>

      <section className="mt-7 grid gap-3 md:grid-cols-[200px_1fr]" aria-labelledby="jump-heading"><article className="relative rounded-md border border-[#e4ded9] bg-white p-3"><button type="button" aria-label="Close inspiration" className="absolute top-2 right-2 text-[#817874]"><X className="size-3" /></button><div className="flex h-24 items-center justify-center rounded-md bg-[#effbdc]"><div className="flex items-center gap-1"><span className="flex size-12 items-center justify-center rounded-xl bg-[#1877f2] text-3xl font-bold text-white">f</span><span className="h-10 w-8 rounded border-2 border-[#9ab98e]" /><span className="h-10 w-8 rounded border-2 border-[#9ab98e]" /></div></div><p className="mt-3 text-[9px] text-[#8d8580]">Based on your apps · 6 min</p><h3 className="mt-1 text-[10px] font-medium">6 ways to automate Facebook Lead Ads</h3><div className="mt-3 flex items-center justify-between"><Button variant="outline" size="sm" className="h-6 px-2 text-[9px]">Read the post</Button><span className="text-[9px] text-[#8d8580]">1 of 3 <ChevronLeft className="inline size-3" /><ChevronRight className="inline size-3" /></span></div></article><article className="rounded-md border border-[#e4ded9] bg-white"><div className="flex items-center justify-between border-b border-[#eee9e5] px-3 py-2"><h2 id="jump-heading" className="text-xs font-semibold">Jump back in</h2><div className="flex gap-1"><button type="button" onClick={() => setView("recent")} className={`rounded border px-2 py-1 text-[9px] ${view === "recent" ? "border-[#d7bff4] text-[#6653d6]" : "border-transparent text-[#8d8580]"}`}>Recent</button><button type="button" onClick={() => setView("draft")} className={`rounded border px-2 py-1 text-[9px] ${view === "draft" ? "border-[#d7bff4] text-[#6653d6]" : "border-transparent text-[#8d8580]"}`}>Draft</button></div></div><div className="flex items-center justify-between px-3 py-3"><div className="flex items-center gap-2"><span className="flex size-6 items-center justify-center rounded bg-orange-50 text-orange-500"><Zap className="size-3.5" /></span><span className="text-[10px] font-medium">{view === "recent" ? "Joecalih" : "Untitled automation"}</span></div><span className="text-[9px] text-[#8d8580]">{view === "recent" ? "Updated 5 months ago" : "Draft saved now"}</span></div><p className="border-t border-[#eee9e5] px-3 py-2 text-[9px] text-[#8d8580]">Data may be delayed by 5 minutes</p></article></section>
      <style jsx>{`
        .automation-workspace [aria-labelledby="starter-heading"] button {
          min-height: 4.5rem;
          padding: 0.75rem;
          gap: 0.75rem;
        }
        .automation-workspace [aria-labelledby="starter-heading"] button span span:first-child {
          font-size: 0.875rem;
        }
        .automation-workspace [aria-labelledby="starter-heading"] button span span:last-child {
          font-size: 0.6875rem;
        }
        .automation-workspace [aria-labelledby="recommendation-heading"] article,
        .automation-workspace [aria-labelledby="connections-heading"] article {
          min-height: 8rem;
          padding: 1rem;
        }
        .automation-workspace [aria-labelledby="recommendation-heading"] article h3,
        .automation-workspace [aria-labelledby="connections-heading"] article h3 {
          font-size: 0.875rem;
        }
        .automation-workspace [aria-labelledby="jump-heading"] article {
          padding: 1rem;
        }
        @media (max-width: 640px) {
          .automation-workspace [aria-labelledby="starter-heading"] button {
            min-height: 4.25rem;
          }
          .automation-workspace [aria-labelledby="recommendation-heading"] article,
          .automation-workspace [aria-labelledby="connections-heading"] article {
            min-height: 7rem;
          }
        }
      `}</style>
    </div>
  </main>;
}
