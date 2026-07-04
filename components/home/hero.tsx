import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto flex flex-col items-center text-center gap-8 max-w-3xl">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">Malayalam AI</span>
          <span className="rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">Open Source</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Know Kerala. Build Kerala.</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Open-source AI, built on native Malayalam brain — learn Kerala&apos;s art, culture, story deep. Then turn that knowledge into real venture, with open data and open path for all.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
      </div>
    </section>
  );
}
