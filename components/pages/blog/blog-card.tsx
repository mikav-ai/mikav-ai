import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export interface BlogPost {
  title: string;
  slug: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/resources/blog/${post.slug}`}>
      <Card className="h-full border hover:shadow-md transition-shadow">
        <CardHeader className="p-4 sm:p-6">
          <div className="flex flex-wrap gap-2 mb-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/10 text-primary px-2 py-0.5 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <CardTitle className="text-base sm:text-lg leading-snug">
            {post.title}
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed mt-1">
            {post.description}
          </CardDescription>
          <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
            <span>{post.author}</span>
            <span>·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
