import type { Metadata } from "next";
import { AuthPanel } from "@/components/auth-panel";
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
export const metadata: Metadata = { title: "Log In | Priworth", description: "Log in to your Priworth meeting intelligence workspace.", robots: { index: false, follow: false } };
export default function LoginPage() { return <><LpNavbar1 /><main className="flex min-h-[70vh] items-center justify-center bg-secondary px-4 py-10"><AuthPanel mode="login" /></main><Footer1 /></>; }
