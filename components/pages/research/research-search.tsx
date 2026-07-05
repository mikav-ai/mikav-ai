"use client";

import { useState } from "react";

export function ResearchSearch({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) {
  const [query, setQuery] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  }

  return (
    <div className="w-full max-w-md">
      <input
        type="search"
        placeholder="Search research papers..."
        value={query}
        onChange={handleChange}
        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
      />
    </div>
  );
}
