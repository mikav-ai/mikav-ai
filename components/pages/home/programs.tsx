import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const programs = [
  {
    title: "SparkX — Creative & Cultural Pre-Incubation",
    organizer: "Kerala Startup Mission (KSUM)",
    description:
      "A 45-day intensive pre-incubation program bridging cultural heritage and modern entrepreneurship. Masterclasses, mentorship, and residency week in Kochi & Kalamandalam.",
    status: "Selected",
  },
];

export function Programs() {
  return (
    <section id="programs" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Programs</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Incubation and growth programs we&apos;re part of.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {programs.map((program) => (
            <Card key={program.title} className="border bg-background hover:shadow-md transition-all duration-200">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="rounded-full bg-primary text-primary-foreground px-2.5 py-0.5 text-xs font-medium">
                    {program.status}
                  </span>
                </div>
                <CardTitle className="text-base sm:text-lg leading-snug">
                  {program.title}
                </CardTitle>
                <p className="text-xs text-muted-foreground mt-1 font-medium">{program.organizer}</p>
                <CardDescription className="text-sm leading-relaxed mt-2">
                  {program.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
