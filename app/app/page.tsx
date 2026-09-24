import type { Metadata } from "next";
import { AutomationApp } from "@/components/automation-app";
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";

export const metadata: Metadata = {
  title: "Automation Workspace | Priworth",
  description: "Create AI-powered automations, agents, chatbots, and connected workflows in Priworth.",
  robots: { index: false, follow: false },
};

export default function AppPage() {
  return <><LpNavbar1 /><AutomationApp /><Footer1 /></>;
}
