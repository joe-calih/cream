import type { Metadata } from "next";
import { AuthPanel } from "@/components/auth-panel";
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
export const metadata: Metadata = { title: "Create an Account | Priworth", description: "Create a Priworth account and start organizing the knowledge inside your meetings.", robots: { index: false, follow: false } };
export default function SignupPage() { return <><LpNavbar1 /><main className="flex min-h-[70vh] items-center justify-center bg-secondary px-4 py-10"><AuthPanel mode="signup" /></main><Footer1 /></>; }
