import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section id="cta" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl bg-primary p-8 sm:p-12 md:p-16 text-primary-foreground text-center flex flex-col items-center gap-4 sm:gap-6 shadow-xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Ready to explore Kerala?</h2>
          <p className="text-base sm:text-lg opacity-90 max-w-xl">
            Join the open community building the future of Malayalam AI and Kerala&apos;s culture platform.
          </p>
          <Button size="lg" variant="secondary" className="w-full sm:w-auto shadow-md">Get Started</Button>
        </div>
      </div>
    </section>
  );
}
