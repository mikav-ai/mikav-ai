import { AppLayout } from "@/components/app";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppLayout>
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto space-y-6 [&_h1]:text-3xl [&_h1]:sm:text-4xl [&_h1]:font-bold [&_h1]:mb-2 [&_h2]:text-xl [&_h2]:sm:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:leading-relaxed [&_p]:text-foreground/80 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:text-foreground/80 [&_li]:leading-relaxed [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-primary/80 [&_table]:w-full [&_table]:border-collapse [&_table]:mt-4 [&_th]:text-left [&_th]:border-b [&_th]:pb-2 [&_th]:font-medium [&_td]:py-2 [&_td]:border-b [&_td]:border-border [&_strong]:font-semibold">
          {children}
        </article>
      </section>
    </AppLayout>
  );
}
