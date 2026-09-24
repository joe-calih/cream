import React from "react";

type Integration = {
  name: string;
  category: string;
  logo: string;
};

const integrations: Integration[] = [
  { name: "Salesforce", category: "CRM", logo: "bg-blue-500" },
  { name: "Slack", category: "Communication", logo: "bg-purple-500" },
  { name: "HubSpot", category: "Marketing", logo: "bg-orange-500" },
  { name: "Stripe", category: "Payments", logo: "bg-indigo-500" },
  { name: "Shopify", category: "E-commerce", logo: "bg-green-500" },
  { name: "Zoom", category: "Video", logo: "bg-blue-600" },
  { name: "QuickBooks", category: "Accounting", logo: "bg-green-600" },
  { name: "Microsoft Teams", category: "Collaboration", logo: "bg-blue-700" },
  { name: "Mailchimp", category: "Email", logo: "bg-yellow-500" },
  { name: "Asana", category: "Project Management", logo: "bg-red-500" },
];

export function HomepageIntegrationGrid() {
  return (
    <section className="bg-background py-6" aria-labelledby="integration-heading">
      <div className="container-padding-x container mx-auto">
        <div className="mb-8 flex flex-col gap-2 text-center">
          <p className="text-primary text-sm font-medium">Integrations</p>
          <h2 id="integration-heading" className="heading-sm">
            Works with the tools your team already uses
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="flex min-h-32 items-center justify-center rounded-xl  px-4 py-6 text-center"
            >
              <div className="flex flex-col items-center gap-3">
                <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-lg ${integration.logo}`}>
                  <div className="h-6 w-6 rounded bg-white/20" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <h3 className="text-foreground text-sm font-semibold leading-tight">{integration.name}</h3>
                  <p className="text-muted-foreground text-[11px] leading-none">{integration.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}