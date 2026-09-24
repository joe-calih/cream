"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { CareerRole } from "@/lib/career-roles";

export function CareerRoleForm({ role }: { role: CareerRole }) {
  const [submitted, setSubmitted] = useState(false);
  return <form className="mt-10 grid gap-5 rounded-xl border bg-muted/30 p-6 md:grid-cols-2 md:p-8" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}><div className="flex flex-col gap-2"><Label htmlFor="applicant-name">Name</Label><Input id="applicant-name" name="name" required /></div><div className="flex flex-col gap-2"><Label htmlFor="applicant-email">Email</Label><Input id="applicant-email" name="email" type="email" required /></div><div className="flex flex-col gap-2 md:col-span-2"><Label htmlFor="applicant-link">Portfolio or LinkedIn</Label><Input id="applicant-link" name="link" type="url" placeholder="https://" /></div><div className="flex flex-col gap-2 md:col-span-2"><Label htmlFor="applicant-cv">CV or resume</Label><Input id="applicant-cv" name="cv" type="file" accept=".pdf,.doc,.docx" required /></div><div className="flex flex-col gap-2 md:col-span-2"><Label htmlFor="applicant-note">Why this role?</Label><Textarea id="applicant-note" name="note" className="min-h-28" placeholder={`Tell us why ${role.title} is a good fit.`} /></div><div className="flex flex-col items-start gap-3 md:col-span-2"><Button type="submit">Submit application</Button>{submitted ? <p className="text-muted-foreground text-sm" role="status">Thanks. Your application is ready for the Priworth team to review.</p> : null}</div></form>;
}
