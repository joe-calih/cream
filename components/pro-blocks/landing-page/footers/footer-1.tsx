"use client";

import { Logo } from "@/components/pro-blocks/logo";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer1() {
  return (
    <footer
      className="bg-background section-padding-y"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-12 lg:gap-16">
        {/* Top Section */}
        <div className="flex w-full flex-col items-center gap-12 text-center">
          {/* Logo Section */}
          <Link href="/" aria-label="Go to homepage">
            <Logo />
          </Link>

          {/* Main Navigation */}
          <nav
            className="flex flex-col items-center gap-6 text-sm md:flex-row md:gap-8"
            aria-label="Footer navigation"
          >
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/team"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Team
            </Link>
            <Link
              href="/careers"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/changelog"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Changelog
            </Link>
            <Link
              href="/membership"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Membership
            </Link>
            <Link
              href="/licenses"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Licenses
            </Link>
            <Link
              href="/#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              How it works
            </Link>
            <Link
              href="https://www.priworth.tech/pro-blocks"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/faq"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/pricing"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
          </nav>
        </div>

        {/* Section Divider */}
        <Separator role="presentation" />

        {/* Bottom Section */}
        <div className="flex w-full flex-col-reverse items-center gap-12 text-sm lg:flex-row lg:justify-between lg:gap-6">
          {/* Copyright Text */}
          <p className="text-muted-foreground text-center lg:text-left">
            Built with{" "}
            <Link
              href="https://www.priworth.tech/pro-blocks"
              className="underline"
              target="_blank"
            >
              Priworth
            </Link>{" "}
            by{" "}
            <Link
              href="https://www.priworth.tech/"
              className="underline"
              target="_blank"
            >
              priworth.tech
            </Link>
            . All rights reserved.
          </p>

          {/* Legal Navigation */}
          <nav
            className="flex flex-col items-center gap-6 text-sm md:flex-row md:gap-8"
            aria-label="Legal links"
          >
            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/disclaimer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Disclaimer
            </Link>
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="https://www.priworth.tech/pro-blocks"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookies Settings
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
