import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AppLayout } from "@/components/app";
import { Markdown } from "@/components/shared";
import { getPostBySlug, getAllPosts } from "@/lib/blog";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `https://mikav.in/resources/blog/${slug}`;

  return {
    title: post.meta.title,
    description: post.meta.description,
    authors: [{ name: post.meta.author }],
    openGraph: {
      type: "article",
      title: post.meta.title,
      description: post.meta.description,
      url,
      siteName: "Mikav AI",
      publishedTime: post.meta.date,
      authors: [post.meta.author],
      tags: post.meta.tags,
    },
    twitter: {
      card: "summary",
      title: post.meta.title,
      description: post.meta.description,
    },
    alternates: {
      canonical: url,
    },
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.meta.title,
    description: post.meta.description,
    author: {
      "@type": "Person",
      name: post.meta.author,
    },
    datePublished: post.meta.date,
    publisher: {
      "@type": "Organization",
      name: "Mikav",
      url: "https://mikav.in",
    },
    url: `https://mikav.in/resources/blog/${slug}`,
    keywords: post.meta.tags.join(", "),
  };

  return (
    <AppLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
          <Markdown content={post.content} />
        </div>
      </article>
    </AppLayout>
  );
}
