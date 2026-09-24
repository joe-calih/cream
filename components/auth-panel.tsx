"use client";

import Link from "next/link";
import { Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AuthPanel({ mode }: { mode: "login" | "signup" | "forgot" }) {
  const isSignup = mode === "signup";
  const isForgot = mode === "forgot";
  return <div className="w-full max-w-md rounded-2xl border bg-background p-6 shadow-sm md:p-8"><div className="mb-8 text-center"><p className="text-primary text-sm font-medium">Priworth workspace</p><h1 className="heading-sm mt-3">{isForgot ? "Reset your password" : isSignup ? "Create your account" : "Welcome back"}</h1><p className="text-muted-foreground mt-3 text-sm">{isForgot ? "We&apos;ll help you get back into your workspace." : isSignup ? "Start turning important conversations into useful knowledge." : "Continue where your team left off."}</p></div>{!isForgot ? <div className="grid gap-3"><Button variant="outline" type="button"><GoogleIcon />Continue with Google</Button><Button variant="outline" type="button"><Github />Continue with GitHub</Button></div> : null}{!isForgot ? <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground"><span className="h-px flex-1 bg-border" />or continue with email<span className="h-px flex-1 bg-border" /></div> : null}<form className="grid gap-4"><div className="grid gap-2">{isSignup ? <><Label htmlFor="auth-name">Name</Label><Input id="auth-name" required /></> : null}<Label htmlFor="auth-email">Email</Label><Input id="auth-email" type="email" required /></div>{!isForgot ? <div className="grid gap-2"><Label htmlFor="auth-password">Password</Label><Input id="auth-password" type="password" required /></div> : null}<Button type="submit" className="mt-2">{isForgot ? "Send reset link" : isSignup ? "Create account" : "Log in"}</Button></form><div className="mt-6 text-center text-sm text-muted-foreground">{isForgot ? <Link href="/login" className="text-primary underline">Back to login</Link> : isSignup ? <>Already have an account? <Link href="/login" className="text-primary underline">Log in</Link></> : <>New to Priworth? <Link href="/signup" className="text-primary underline">Create an account</Link><br /><Link href="/forgot-password" className="mt-2 inline-block text-primary underline">Forgot password?</Link></>}</div></div>;
}
function GoogleIcon() { return <Mail className="size-4 text-primary" />; }
