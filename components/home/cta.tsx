import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section id="cta" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="rounded-2xl bg-primary p-12 md:p-16 text-primary-foreground text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to explore Kerala?</h2>
          <p className="text-lg opacity-90 max-w-xl">
            Join the open community building the future of Malayalam AI and Kerala&apos;s culture platform.
          </p>
          <Button size="lg" variant="secondary">Get Started</Button>
        </div>
      </div>
    </section>
  );
}
