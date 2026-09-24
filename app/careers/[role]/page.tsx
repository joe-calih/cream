import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CareerRoleForm } from "@/components/career-role-form";
import { ContentPage } from "@/components/content-page";
import { careerRoles, type CareerRoleSlug } from "@/lib/career-roles";
import { contentMetadata, contentSchema } from "@/lib/content-page-seo";

type RolePageProps = { params: Promise<{ role: string }> };

export function generateStaticParams() { return Object.keys(careerRoles).map((role) => ({ role })); }

export async function generateMetadata({ params }: RolePageProps): Promise<Metadata> {
  const { role: slug } = await params;
  const role = careerRoles[slug as CareerRoleSlug];
  if (!role) return {};
  return contentMetadata({ title: `${role.title} Careers | Priworth`, description: role.summary, path: `/careers/${slug}`, keywords: [role.title, "Priworth careers", "AI startup jobs", "remote technology jobs"] });
}

export default async function CareerRolePage({ params }: RolePageProps) {
  const { role: slug } = await params;
  const role = careerRoles[slug as CareerRoleSlug];
  if (!role) notFound();
  const description = role.summary;
  const structuredData = contentSchema({ name: `${role.title} at Priworth`, description, path: `/careers/${slug}`, current: role.title, keywords: [role.title, "Priworth careers", "remote technology role"], extra: { mainEntity: { "@type": "JobPosting", title: role.title, description: role.description, datePosted: "2026-09-24", employmentType: "FULL_TIME", hiringOrganization: { "@type": "Organization", name: "Priworth", sameAs: "https://priworth.example" }, jobLocationType: "TELECOMMUTE" } } });
  return <ContentPage eyebrow="Open role" title={role.title} intro={role.summary} current={role.title} structuredData={structuredData} sections={[{ paragraphs: [<>{role.description}</>, <>This is a remote, full-time opportunity. You will work with teammates who value clear communication, practical decisions, and a calm, accessible product experience. Learn more about the <Link href="/team" className="text-primary underline">Priworth team</Link> or read about <Link href="/careers" className="text-primary underline">working here</Link>.</>] }, { heading: "What you will do", paragraphs: [<ul className="mb-6 list-disc space-y-2 pl-6">{role.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>] }, { heading: "What we are looking for", paragraphs: [<ul className="mb-6 list-disc space-y-2 pl-6">{role.requirements.map((item) => <li key={item}>{item}</li>)}</ul>] }]}><CareerRoleForm role={role} /></ContentPage>;
}
