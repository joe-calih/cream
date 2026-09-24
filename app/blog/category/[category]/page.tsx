import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogListingPage } from "@/components/blog-listing-page";
import { blogCategorySlug, blogPosts, categories } from "@/lib/blog-posts";

export function generateStaticParams() { return categories.map((category) => ({ category: blogCategorySlug(category) })); }
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> { const { category } = await params; const name = categories.find((item) => blogCategorySlug(item) === decodeURIComponent(category).toLowerCase()); return name ? { title: `${name} Articles | Priworth Blog`, description: `Read Priworth ${name} articles, guides, and practical ideas.` } : {}; }
export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) { const { category } = await params; const name = categories.find((item) => blogCategorySlug(item) === decodeURIComponent(category).toLowerCase()); if (!name) notFound(); return <BlogListingPage title={`${name} articles`} intro={`Guides, ideas, and practical perspectives from the ${name.toLowerCase()} corner of the Priworth archive.`} active={blogCategorySlug(name)} posts={blogPosts.filter((post) => post.category === name)} metadata={{ title: `${name} Articles | Priworth Blog` }} />; }
