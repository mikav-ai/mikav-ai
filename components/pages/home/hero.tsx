import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full flex flex-col items-center text-center gap-6 sm:gap-8 max-w-4xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="rounded-full bg-primary/10 text-primary border border-primary/20 px-3 py-1 text-xs font-medium">Malayalam AI</span>
          <span className="rounded-full bg-primary/10 text-primary border border-primary/20 px-3 py-1 text-xs font-medium">Open Source</span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary">
          Know Kerala. Build Kerala.
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Open-source AI, built on native Malayalam brain — learn Kerala&apos;s art, culture, story deep. Then turn that knowledge into real venture, with open data and open path for all.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <Button size="lg" className="w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow">Get Started</Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">Learn More</Button>
        </div>
      </div>
    </section>
  );
}
