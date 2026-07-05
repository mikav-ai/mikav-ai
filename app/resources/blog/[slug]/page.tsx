import { notFound } from "next/navigation";
import { AppLayout } from "@/components/app";
import { getPostBySlug, getAllPosts } from "@/lib/blog";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <AppLayout>
      <article className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 text-primary px-2 py-0.5 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              {post.meta.title}
            </h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{post.meta.author}</span>
              <span>·</span>
              <time dateTime={post.meta.date}>
                {new Date(post.meta.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
          <div className="space-y-6 [&_h2]:text-xl [&_h2]:sm:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:leading-relaxed [&_p]:text-foreground/80 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:text-foreground/80 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_strong]:font-semibold">
            {post.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return <h2 key={i}>{block.replace("## ", "")}</h2>;
              }
              if (block.startsWith("- ")) {
                const items = block.split("\n").map((l) => l.replace(/^- /, ""));
                return (
                  <ul key={i}>
                    {items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                );
              }
              if (block.startsWith("**")) {
                const parts = block.split("**");
                return (
                  <p key={i}>
                    {parts.map((part, j) =>
                      j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                    )}
                  </p>
                );
              }
              return <p key={i}>{block}</p>;
            })}
          </div>
        </div>
      </article>
    </AppLayout>
  );
}
