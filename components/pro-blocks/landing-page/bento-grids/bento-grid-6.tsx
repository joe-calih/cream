"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function BentoGrid6() {
  return (
    <section className="bg-background section-padding-y border-b" id="features">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Title */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          {/* Tagline */}
          <Tagline>Features</Tagline>
          {/* Main Heading */}
          <h2 className="heading-lg">
            From product strategy to software that ships
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-3 md:gap-6 lg:grid-cols-3 lg:grid-rows-2">
          {/* Wide Feature Card - Top Left */}
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-2">
            <Image
              src="/ai-meeting-notes.png"
              alt="AI Meeting Notes"
              width={813}
              height={332}
              className="hidden h-auto w-full object-cover md:block md:h-83"
            />
            <Image
              src="/ai-meeting-notes_mobile.png"
              alt="AI Meeting Notes"
              width={480}
              height={332}
              className="block h-auto w-full md:hidden"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                Product foundations
              </h3>
              <p className="text-muted-foreground">
                Architecture, workflows, and interfaces designed for a strong launch.
              </p>
            </CardContent>
          </Card>
          {/* Regular Feature Card - Top Right */}
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-1">
            <Image
              src="/universal-search.png"
              alt="Universal Search"
              width={480}
              height={332}
              className="h-auto w-full object-cover md:h-83"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                SaaS platforms
              </h3>
              <p className="text-muted-foreground">
                Reliable products with the systems, permissions, and scale your business needs.
              </p>
            </CardContent>
          </Card>
          {/* Regular Feature Card - Bottom Left */}
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-1">
            <Image
              src="/smart-tags.png"
              alt="AI Meeting Notes"
              width={480}
              height={332}
              className="h-auto w-full object-cover md:h-83"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                AI systems
              </h3>
              <p className="text-muted-foreground">
                Applied intelligence that turns complex workflows into useful product experiences.
              </p>
            </CardContent>
          </Card>
          {/* Wide Feature Card - Bottom Right */}
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-2">
            <Image
              src="/team-insights.png"
              alt="Team Insights"
              width={813}
              height={332}
              className="hidden h-83 w-full object-cover md:block"
            />
            <Image
              src="/team-insights_mobile.png"
              alt="Team Insights"
              width={480}
              height={332}
              className="block h-auto w-full object-cover md:hidden md:h-83"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                Enterprise tools
              </h3>
              <p className="text-muted-foreground">
                Secure, maintainable software that helps teams operate with confidence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
