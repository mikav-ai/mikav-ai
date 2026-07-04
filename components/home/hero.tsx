import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="py-24 md:py-32 px-6">
      <div className="container mx-auto flex flex-col items-center text-center gap-8 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Hero
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
      </div>
    </section>
  );
}
