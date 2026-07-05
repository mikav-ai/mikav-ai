import { AppLayout } from "@/components/app";
import Link from "next/link";

export default function NotFound() {
  return (
    <AppLayout>
      <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center flex flex-col items-center gap-6 max-w-md">
          <h1 className="text-6xl sm:text-8xl font-bold text-primary">404</h1>
          <h2 className="text-xl sm:text-2xl font-semibold">Page not found</h2>
          <p className="text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </section>
    </AppLayout>
  );
}
