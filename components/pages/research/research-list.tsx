"use client";

import { useState } from "react";
import { ResearchSearch } from "./research-search";
import { ResearchGrid } from "./research-grid";
import type { Paper } from "@/lib/paper";

export function ResearchList({ papers }: { papers: Paper[] }) {
  const [filtered, setFiltered] = useState(papers);

  function handleSearch(query: string) {
    const q = query.toLowerCase();
    if (!q) {
      setFiltered(papers);
      return;
    }
    setFiltered(
      papers.filter(
        (paper) =>
          paper.title.toLowerCase().includes(q) ||
          paper.description.toLowerCase().includes(q) ||
          paper.tags.some((tag) => tag.toLowerCase().includes(q)) ||
          paper.authors.some((author) => author.toLowerCase().includes(q))
      )
    );
  }

  return (
    <div className="space-y-8">
      <ResearchSearch onSearch={handleSearch} />
      <ResearchGrid papers={filtered} />
    </div>
  );
}
