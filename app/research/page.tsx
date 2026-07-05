import type { Metadata } from "next";
import { AppLayout } from "@/components/app";
import { ResearchList } from "@/components/pages/research";
import { getAllPapers } from "@/lib/paper";

export const metadata: Metadata = {
  title: "Research",
};

export default function ResearchPage() {
  const papers = getAllPapers();

  return (
    <AppLayout>
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">Research</h1>
          <ResearchList papers={papers} />
        </div>
      </section>
    </AppLayout>
  );
}
