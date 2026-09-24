"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThumbsDown, ThumbsUp } from "lucide-react";

export function ReactionButtons() {
  const [reaction, setReaction] = useState<"helpful" | "not-helpful" | null>(null);

  return (
    <div className="flex flex-wrap items-center gap-3" aria-label="Was this page helpful?">
      <span className="text-muted-foreground text-sm">Was this helpful?</span>
      <Button
        type="button"
        size="sm"
        variant={reaction === "helpful" ? "default" : "outline"}
        onClick={() => setReaction("helpful")}
        aria-pressed={reaction === "helpful"}
      >
        <ThumbsUp /> Yes
      </Button>
      <Button
        type="button"
        size="sm"
        variant={reaction === "not-helpful" ? "default" : "outline"}
        onClick={() => setReaction("not-helpful")}
        aria-pressed={reaction === "not-helpful"}
      >
        <ThumbsDown /> Not yet
      </Button>
    </div>
  );
}
