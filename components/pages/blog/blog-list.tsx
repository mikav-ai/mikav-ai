"use client";

import { useState } from "react";
import { BlogSearch } from "./blog-search";
import { BlogGrid } from "./blog-grid";
import type { BlogPost } from "./blog-card";

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const [filtered, setFiltered] = useState(posts);

  function handleSearch(query: string) {
    const q = query.toLowerCase();
    if (!q) {
      setFiltered(posts);
      return;
    }
    setFiltered(
      posts.filter(
        (post) =>
          post.title.toLowerCase().includes(q) ||
          post.description.toLowerCase().includes(q) ||
          post.tags.some((tag) => tag.toLowerCase().includes(q))
      )
    );
  }

  return (
    <div className="space-y-8">
      <BlogSearch onSearch={handleSearch} />
      <BlogGrid posts={filtered} />
    </div>
  );
}
