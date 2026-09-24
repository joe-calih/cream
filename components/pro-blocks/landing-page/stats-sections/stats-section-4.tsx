"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function StatsSection4() {
  return (
    <section className="bg-background section-padding-y ">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>Why teams choose us</Tagline>
            <h2 className="heading-lg text-foreground">Engineering discipline that creates momentum</h2>
            <p className="text-muted-foreground">
              We bring practical product thinking, senior engineering judgment,
              and a bias toward software that reaches users.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 lg:flex-row">
            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">
                  Products shipped
                </h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  50+
                </span>

                <p className="text-muted-foreground text-base">
                  From first prototype to dependable production software.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Years of experience</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  10+
                </span>
                <p className="text-muted-foreground text-base">
                  Senior engineers who know how to make complex systems useful.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Core capabilities</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  5
                </span>
                <p className="text-muted-foreground text-base">
                  SaaS, AI, mobile, enterprise platforms, and custom software.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
