import { ResearchCard } from "./research-card";
import type { Paper } from "@/lib/paper";

export function ResearchGrid({ papers }: { papers: Paper[] }) {
  if (papers.length === 0) {
    return (
      <p className="text-center text-muted-foreground py-12">
        No papers found.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      {papers.map((paper) => (
        <ResearchCard key={paper.slug} paper={paper} />
      ))}
    </div>
  );
}
