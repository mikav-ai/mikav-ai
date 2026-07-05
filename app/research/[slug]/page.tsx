import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AppLayout } from "@/components/app";
import { Markdown } from "@/components/shared";
import { getPaperBySlug, getAllPapers } from "@/lib/paper";

export async function generateStaticParams() {
  const papers = getAllPapers();
  return papers.map((paper) => ({ slug: paper.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const paper = getPaperBySlug(slug);
  if (!paper) return {};

  const url = `https://mikav.in/research/${slug}`;

  return {
    title: paper.meta.title,
    description: paper.meta.description,
    authors: paper.meta.authors.map((a) => ({ name: a })),
    openGraph: {
      type: "article",
      title: paper.meta.title,
      description: paper.meta.description,
      url,
      siteName: "Mikav AI",
      publishedTime: paper.meta.date,
      authors: paper.meta.authors,
      tags: paper.meta.tags,
    },
    twitter: {
      card: "summary",
      title: paper.meta.title,
      description: paper.meta.description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function PaperPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const paper = getPaperBySlug(slug);

  if (!paper) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: paper.meta.title,
    description: paper.meta.description,
    author: paper.meta.authors.map((name) => ({
      "@type": "Person",
      name,
    })),
    datePublished: paper.meta.date,
    publisher: {
      "@type": "Organization",
      name: "Mikav",
      url: "https://mikav.in",
    },
    url: `https://mikav.in/research/${slug}`,
    keywords: paper.meta.tags.join(", "),
    isAccessibleForFree: true,
    inLanguage: "en",
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
              {paper.meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 text-primary px-2 py-0.5 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
              {paper.meta.status === "draft" && (
                <span className="rounded-full bg-muted text-muted-foreground px-2 py-0.5 text-xs font-medium">
                  Draft
                </span>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 leading-tight">
              {paper.meta.title}
            </h1>
            <p className="text-muted-foreground mb-3">{paper.meta.description}</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{paper.meta.authors.join(", ")}</span>
              <span>·</span>
              <time dateTime={paper.meta.date}>
                {new Date(paper.meta.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
          <Markdown content={paper.content} />
        </div>
      </article>
    </AppLayout>
  );
}
