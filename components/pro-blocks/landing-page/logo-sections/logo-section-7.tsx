"use client";

import { PlaceholderLogo as AnthropicLogo } from "@/components/pro-blocks/company/anthropic-logo";
import { PlaceholderLogo as GrafanaLogo } from "@/components/pro-blocks/company/grafana-logo";
import { PlaceholderLogo as NotionLogo } from "@/components/pro-blocks/company/notion-logo";
import { PlaceholderLogo as RampLogo } from "@/components/pro-blocks/company/ramp-logo";
import { PlaceholderLogo as SigmaLogo } from "@/components/pro-blocks/company/sigma-logo";
import { PlaceholderLogo as VantaLogo } from "@/components/pro-blocks/company/vanta-logo";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

const logosData = [
  { id: "anthropic", component: AnthropicLogo },
  { id: "grafana", component: GrafanaLogo },
  { id: "notion", component: NotionLogo },
  { id: "ramp", component: RampLogo },
  { id: "sigma", component: SigmaLogo },
  { id: "vanta", component: VantaLogo },
];

export function LogoSection10() {
  return (
    <section className="bg-secondary border-b pb-16 lg:pb-24">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <div className="section-title-gap-lg flex max-w-xl flex-col items-center text-center">
            <Tagline variant="ghost">Trusted by 10K+ remote teams</Tagline>
          </div>

          <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent_0%,black_12.5%,black_87.5%,transparent_100%)]">
            <div className="animate-infinite-scroll flex w-max items-center">
              {[...logosData, ...logosData].map((logoItem, index) => {
                const LogoComponent = logoItem.component;
                const uniqueKey = `logo-wrapper-${logoItem.id}-${index}`;
                return (
                  <div
                    key={uniqueKey}
                    className="flex w-48 shrink-0 items-center justify-center"
                  >
                    <LogoComponent className="w-36" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50%));
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
