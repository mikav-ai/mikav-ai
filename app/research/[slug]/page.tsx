import { notFound } from "next/navigation";
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
}) {
  const { slug } = await params;
  const paper = getPaperBySlug(slug);
  if (!paper) return {};
  return {
    title: paper.meta.title,
    description: paper.meta.description,
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

  return (
    <AppLayout>
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
