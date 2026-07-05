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
    <section id="programs" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Programs</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {programs.map((program) => (
            <Card key={program.title} className="border hover:shadow-md transition-shadow">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="rounded-full bg-primary/10 text-primary px-2 py-0.5 text-xs font-medium">
                    {program.status}
                  </span>
                </div>
                <CardTitle className="text-base sm:text-lg leading-snug">
                  {program.title}
                </CardTitle>
                <p className="text-xs text-muted-foreground mt-1">{program.organizer}</p>
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
