import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-muted/40">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Features</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle></CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
