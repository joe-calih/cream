"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form className="mt-12 grid gap-5 rounded-xl border bg-muted/30 p-6 md:grid-cols-2 md:p-8" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
      <div className="flex flex-col gap-2"><Label htmlFor="contact-name">Name</Label><Input id="contact-name" name="name" required placeholder="Your name" /></div>
      <div className="flex flex-col gap-2"><Label htmlFor="contact-email">Work email</Label><Input id="contact-email" name="email" type="email" required placeholder="you@company.com" /></div>
      <div className="flex flex-col gap-2 md:col-span-2"><Label htmlFor="contact-topic">Topic</Label><Input id="contact-topic" name="topic" required placeholder="How can we help?" /></div>
      <div className="flex flex-col gap-2 md:col-span-2"><Label htmlFor="contact-message">Message</Label><Textarea id="contact-message" name="message" required placeholder="Tell us a little more" className="min-h-32" /></div>
      <div className="flex flex-col items-start gap-3 md:col-span-2"><Button type="submit">Send message</Button>{submitted ? <p className="text-muted-foreground text-sm" role="status">Thanks. Your message is ready for the Priworth team.</p> : null}</div>
    </form>
  );
}
