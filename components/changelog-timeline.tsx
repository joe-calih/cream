import { CalendarDays, Sparkles, Wrench, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const releases = [
  { version: "2.4.0", date: "2026-09-24", label: "September 24, 2026", title: "A clearer workspace for shared knowledge", icon: Sparkles, color: "bg-orange-50", changes: ["Added richer meeting insight views", "Improved search across projects and participants", "Refined responsive layouts for smaller screens"] },
  { version: "2.3.0", date: "2026-08-18", label: "August 18, 2026", title: "Faster paths from notes to action", icon: Zap, color: "bg-blue-50", changes: ["Improved action item grouping", "Added more integration guidance", "Reduced loading work across content pages"] },
  { version: "2.2.1", date: "2026-07-29", label: "July 29, 2026", title: "Accessibility and reliability improvements", icon: Wrench, color: "bg-emerald-50", changes: ["Improved keyboard focus states", "Polished mobile navigation", "Fixed minor summary and display issues"] },
];

export function ChangelogTimeline() {
  return (
    <section className="mt-12" aria-labelledby="release-history-heading"><div className="mb-6 flex items-end justify-between gap-4"><div><p className="text-primary text-sm font-medium">Release history</p><h2 id="release-history-heading" className="heading-md">What&apos;s new in Priworth</h2></div><Badge variant="outline">Live updates</Badge></div><div className="grid gap-4">{releases.map((release) => { const Icon = release.icon; return <details key={release.version} className={`group rounded-xl border p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${release.color}`} open={release.version === "2.4.0"}><summary className="flex cursor-pointer list-none items-center gap-4"><span className="bg-background text-primary flex size-11 shrink-0 items-center justify-center rounded-full border"><Icon className="size-5" /></span><span className="min-w-0 flex-1"><span className="flex flex-wrap items-center gap-2"><Badge variant="secondary">v{release.version}</Badge><time className="text-muted-foreground text-xs" dateTime={release.date}>{release.label}</time></span><span className="text-foreground mt-2 block text-lg font-semibold">{release.title}</span></span><span className="text-primary text-xl transition group-open:rotate-45">+</span></summary><div className="mt-5 border-t border-black/10 pt-5 pl-15"><ul className="text-muted-foreground flex flex-col gap-2 text-sm">{release.changes.map((change) => <li key={change} className="flex gap-2"><span className="text-primary">•</span>{change}</li>)}</ul></div></details>; })}</div><div className="text-muted-foreground mt-4 flex items-center gap-2 text-xs"><CalendarDays className="size-3.5" />Updated with each meaningful product release</div></section>
  );
}
