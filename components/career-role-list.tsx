import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { careerRoles } from "@/lib/career-roles";

export function CareerRoleList() {
  return <section className="mt-12 flex flex-col gap-3" aria-labelledby="open-roles-heading"><div className="mb-3"><h2 id="open-roles-heading" className="heading-md">Open roles</h2><p className="text-muted-foreground mt-2">Explore a role and submit a focused application with your CV.</p></div>{Object.entries(careerRoles).map(([slug, role], index) => <article key={slug} className={`flex flex-col gap-4 rounded-xl border p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:flex-row sm:items-center sm:justify-between ${["bg-orange-50", "bg-blue-50", "bg-emerald-50", "bg-violet-50", "bg-rose-50"][index % 5]}`}><div className="flex min-w-0 items-center gap-4"><span className="bg-background text-primary flex size-10 shrink-0 items-center justify-center rounded-full border text-sm font-semibold">{String(index + 1).padStart(2, "0")}</span><div className="min-w-0"><h3 className="text-foreground text-lg font-semibold">{role.title}</h3><p className="text-muted-foreground mt-1 text-sm">{role.summary}</p></div></div><div className="flex shrink-0 items-center gap-3 sm:pl-4"><div className="hidden text-right sm:block"><Badge variant="secondary">{role.location}</Badge><p className="text-muted-foreground mt-1 text-xs">{role.type}</p></div><Button asChild variant="outline"><Link href={`/careers/${slug}`}>View role</Link></Button></div></article>)}</section>;
}
