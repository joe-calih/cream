"use client";

import Image from "next/image";
import { ArrowRight, Check, Search, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

const workflowTabs = [
	{ value: "capture", label: "Capture", icon: Sparkles, image: "/ai-meeting-notes.png", alt: "AI meeting notes dashboard", title: "Every important detail, captured automatically", description: "Priworth turns live conversations into clear notes, decisions, and next steps while your team stays focused.", list: ["Real-time transcription", "AI summaries in seconds", "Action items assigned to owners"] },
	{ value: "discover", label: "Discover", icon: Search, image: "/universal-search.png", alt: "Universal search dashboard", title: "Find the context behind every decision", description: "Search across every conversation and surface the exact moment, project, or person you need.", list: ["Search across all meetings", "Filter by topic or teammate", "Keep knowledge easy to revisit"] },
	{ value: "align", label: "Align", icon: Users, image: "/team-insights.png", alt: "Team insights dashboard", title: "Turn conversations into team momentum", description: "See what is moving forward, where collaboration is getting stuck, and how your team can make the next meeting count.", list: ["Track participation trends", "Spot recurring themes", "Share insights with confidence"] },
	{ value: "organize", label: "Organize", icon: Sparkles, image: "/smart-tags.png", alt: "Smart tags dashboard", title: "Keep every project easy to follow", description: "Group conversations by project, topic, or customer so important threads never disappear.", list: ["Group notes by project", "Keep recurring topics visible", "Share a source of truth"] },
	{ value: "review", label: "Review", icon: Search, image: "/ai-meeting-notes.png", alt: "Meeting review dashboard", title: "Review the moments that matter", description: "Return to decisions and action items without replaying an entire meeting.", list: ["Jump to key moments", "Scan decisions quickly", "Keep reviews focused"] },
	{ value: "share", label: "Share", icon: Users, image: "/team-insights.png", alt: "Team insights dashboard", title: "Share progress without another status meeting", description: "Give teammates the right context with clear summaries and useful insights.", list: ["Send concise recaps", "Highlight decisions and owners", "Build team memory"] },
] as const;

const teamTabs = [
	{ value: "focus", label: "Focus", icon: Sparkles, image: "/smart-tags.png", alt: "Smart tags dashboard", title: "Keep every project pointed at the right priorities", description: "Smart tags keep projects, topics, and customers connected from the start.", list: ["Create shared project views", "Keep follow-ups connected", "Reduce context switching"] },
	{ value: "share", label: "Share", icon: Users, image: "/team-insights.png", alt: "Team insights dashboard", title: "Share progress without another status meeting", description: "Make progress visible across the organization with clear summaries and lightweight insights.", list: ["Send concise meeting recaps", "Highlight decisions and owners", "Build searchable memory"] },
	{ value: "listen", label: "Listen", icon: Search, image: "/universal-search.png", alt: "Universal search dashboard", title: "Hear the patterns across your work", description: "Connect related conversations and uncover the themes shaping your team.", list: ["Find repeated questions", "Spot emerging themes", "Bring evidence to planning"] },
	{ value: "plan", label: "Plan", icon: Sparkles, image: "/ai-meeting-notes.png", alt: "AI meeting notes dashboard", title: "Start the next meeting with context", description: "Move from recap to preparation with decisions and next steps ready to go.", list: ["Carry actions forward", "Prepare from prior notes", "Keep owners clear"] },
	{ value: "measure", label: "Measure", icon: Search, image: "/team-insights.png", alt: "Team insights dashboard", title: "Understand how collaboration is changing", description: "Use practical team signals to see what is helping work move forward.", list: ["See participation trends", "Identify blockers", "Make informed improvements"] },
	{ value: "act", label: "Act", icon: Users, image: "/smart-tags.png", alt: "Smart tags dashboard", title: "Turn every conversation into action", description: "Make the next step obvious with an accountable, searchable record of the work.", list: ["Assign clear owners", "Track action themes", "Share momentum"] },
] as const;

function SplitSection({ image, alt, eyebrow, title, description, list, reversed = false }: { image: string; alt: string; eyebrow: string; title: string; description: string; list: readonly string[]; reversed?: boolean }) {
	return (
		<section className="bg-background section-padding-y border-b">
			<div className={`container-padding-x container mx-auto grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
				<Card className="overflow-hidden py-0 rounded-xl border shadow-sm"><Image src={image} alt={alt} width={813} height={480} className="h-auto w-full object-cover" /></Card>
				<div className="flex flex-col items-start gap-6">
					<Tagline>{eyebrow}</Tagline><h2 className="heading-lg text-foreground">{title}</h2><p className="text-muted-foreground text-base">{description}</p>
					<ul className="flex flex-col gap-3">{list.map((item) => <li key={item} className="text-foreground flex items-center gap-3 text-sm font-medium"><span className="bg-primary/10 text-primary flex size-6 shrink-0 items-center justify-center rounded-full"><Check className="size-3.5" /></span>{item}</li>)}</ul>
					<Button asChild><a href="#pricing">See how it works <ArrowRight /></a></Button>
				</div>
			</div>
		</section>
	);
}

function TabbedSection({ id, title, description, tabs, muted = false }: { id: string; title: string; description: string; tabs: typeof workflowTabs | typeof teamTabs; muted?: boolean }) {
	return (
		<section className={`${muted ? "bg-secondary" : "bg-background"} section-padding-y border-b`} id={id}>
			<div className="container-padding-x container  mx-auto flex flex-col gap-10 md:gap-12">
				<div className="section-title-gap-lg mx-auto flex max-w-2xl flex-col items-center text-center"><Tagline>One workspace, every conversation</Tagline><h2 className="heading-lg text-foreground">{title}</h2><p className="text-muted-foreground">{description}</p></div>
				<Tabs defaultValue={tabs[0].value} className="w-full">
					<TabsList className="mx-auto grid h-auto w-full max-w-2xl grid-cols-3 gap-1 rounded-xl bg-muted/70 p-1 sm:grid-cols-6">
						{tabs.map((tab) => { const Icon = tab.icon; return <TabsTrigger key={tab.value} value={tab.value} className="h-9 min-w-0 rounded-lg px-2 py-0 text-[11px] sm:text-xs"><Icon className="size-3.5" />{tab.label}</TabsTrigger>; })}
					</TabsList>
					  {tabs.map((tab) => <TabsContent key={tab.value} value={tab.value} className="mt-8"><motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: "easeOut" }}><Card className="overflow-hidden rounded-xl border bg-background shadow-sm"><div className="grid items-center lg:grid-cols-2"><Image src={tab.image} alt={tab.alt} width={813} height={480} className="h-full w-full object-cover" /><CardContent className="flex flex-col items-start gap-5 p-6 md:p-10"><Badge variant="secondary">{tab.label} your knowledge</Badge><h3 className="heading-sm text-foreground">{tab.title}</h3><p className="text-muted-foreground">{tab.description}</p><ul className="flex flex-col gap-3">{tab.list.map((item) => <li key={item} className="text-foreground flex items-center gap-3 text-sm"><Check className="text-primary size-4" />{item}</li>)}</ul></CardContent></div></Card></motion.div></TabsContent>)}
				</Tabs>
			</div>
		</section>
	);
}

export function HomepageStorySections() {
	return <><SplitSection image="/smart-tags.png" alt="Smart tags dashboard" eyebrow="Organize" title="Make every meeting easier to act on" description="Bring structure to the conversation with smart tags that keep projects, topics, and follow-ups connected." list={["Group notes by project", "Keep recurring topics visible", "Share a source of truth"]} /><SplitSection image="/team-insights.png" alt="Team insights dashboard" eyebrow="Understand" title="Give your team a clearer view of what matters" description="Turn meeting patterns into useful team intelligence, so every conversation builds on the one before it." list={["See participation at a glance", "Identify momentum and blockers", "Make better decisions together"]} reversed /><TabbedSection id="workflow" title="From meeting capture to team clarity" description="Choose a workflow and see how Priworth helps your team move from talking to doing." tabs={workflowTabs} muted /><TabbedSection id="team-workflows" title="Make the work after the meeting simpler" description="Use focused views to turn shared notes into momentum everyone can see." tabs={teamTabs} /></>;
}
