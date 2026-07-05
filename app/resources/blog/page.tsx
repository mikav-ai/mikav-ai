import type { Metadata } from "next";
import { AppLayout } from "@/components/app";
import { BlogList } from "@/components/pages/blog";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <AppLayout>
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">Blog</h1>
          <BlogList posts={posts} />
        </div>
      </section>
    </AppLayout>
  );
}
