import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section id="cta" className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto flex flex-col items-center text-center gap-6 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold">CTA</h2>
        <p className="text-lg opacity-90">
        </p>
        <Button size="lg" variant="secondary">Get Started</Button>
      </div>
    </section>
  );
}
