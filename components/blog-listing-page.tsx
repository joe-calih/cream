import type { Metadata } from "next";
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { BlogCard, CategoryLinks } from "@/components/blog-components";
import { blogCategorySlug, type BlogPost } from "@/lib/blog-posts";

export function BlogListingPage({ title, intro, active, posts, metadata }: { title: string; intro: string; active?: string; posts: BlogPost[]; metadata: Metadata }) { return <><LpNavbar1 /><main><section className="bg-background section-padding-y"><div className="container-padding-x container mx-auto flex flex-col gap-10"><header className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center"><p className="text-primary text-sm font-medium">Priworth blog</p><h1 className="heading-xl text-foreground">{title}</h1><p className="text-muted-foreground text-lg">{intro}</p></header><CategoryLinks active={active} /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{posts.map((post) => <BlogCard key={post.slug} post={post} />)}</div></div></section></main><Footer1 /></>; }
