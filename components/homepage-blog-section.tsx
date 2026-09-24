"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogCard } from "@/components/blog-components";
import { blogPosts } from "@/lib/blog-posts";
import { Button } from "@/components/ui/button";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function HomepageBlogSection() {
  const [visibleCount, setVisibleCount] = useState(3);
  const visiblePosts = blogPosts.slice(0, visibleCount);

  return <section className="bg-background section-padding-y border-b" aria-labelledby="homepage-blog-heading"><div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12"><div className="flex flex-col items-center gap-5 text-center"><Tagline>From the journal</Tagline><h2 id="homepage-blog-heading" className="heading-lg text-foreground">Ideas for clearer, more considered work</h2><p className="text-muted-foreground max-w-2xl">Practical guides, product thinking, and useful workflows for teams building what comes next.</p></div><div className="grid gap-6 md:grid-cols-3">{visiblePosts.map((post) => <BlogCard key={post.slug} post={post} />)}</div><div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"><Button asChild variant="outline"><Link href="/blog">Visit the blog <ArrowRight /></Link></Button>{visibleCount < blogPosts.length ? <Button type="button" variant="secondary" onClick={() => setVisibleCount((count) => Math.min(count + 3, blogPosts.length))}>Load more posts</Button> : null}</div></div></section>;
}
