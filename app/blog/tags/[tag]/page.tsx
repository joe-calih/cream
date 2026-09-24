import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogListingPage } from "@/components/blog-listing-page";
import { blogPosts, tags } from "@/lib/blog-posts";

export function generateStaticParams() { return tags.map((tag) => ({ tag: encodeURIComponent(tag.toLowerCase()) })); }
export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> { const { tag } = await params; const name = tags.find((item) => item.toLowerCase() === decodeURIComponent(tag)); return name ? { title: `${name} Articles | Priworth Blog`, description: `Priworth articles tagged ${name}.` } : {}; }
export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) { const { tag } = await params; const normalized = decodeURIComponent(tag); const name = tags.find((item) => item.toLowerCase() === normalized); if (!name) notFound(); return <BlogListingPage title={`Tagged “${name}”`} intro={`Explore Priworth stories connected to ${name}.`} posts={blogPosts.filter((post) => post.tags.includes(name))} metadata={{ title: `${name} Articles | Priworth Blog` }} />; }
