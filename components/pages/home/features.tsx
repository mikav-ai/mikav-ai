import { MessageCircleQuestion, Languages, Database, Map, Rocket, Code } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    icon: MessageCircleQuestion,
    title: "Ask Anything About Kerala",
    description:
      "Type any question, get clear answer on Kerala's art, history, festival, culture. No search-hunt, just ask.",
  },
  {
    icon: Languages,
    title: "Native Malayalam AI",
    description:
      "Built from ground for Malayalam tongue, not translate-patch. Understand true word, idiom, script, meaning deep.",
  },
  {
    icon: Database,
    title: "Open Data, Free to All",
    description:
      "Culture dataset open, download free, use anywhere. Researcher, dev, curious mind — all welcome take.",
  },
  {
    icon: Map,
    title: "Explore Culture Map",
    description:
      "Visual journey through region, art form, artisan, festival calendar. Browse, wander, discover — not just chat-box.",
  },
  {
    icon: Rocket,
    title: "Ideas to Startup Bridge",
    description:
      "Turn culture passion into real venture. Connect to incubation program, grant, mentor — path from idea to action.",
  },
  {
    icon: Code,
    title: "Open Source, Built Together",
    description:
      "Code open, roadmap open, community drive. Anyone can join build, fix, grow this together — no wall, no lock.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Features</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Everything you need to explore, learn, and build on Kerala&apos;s cultural heritage.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="border bg-card/50 hover:bg-card hover:shadow-md transition-all duration-200">
              <CardHeader className="p-4 sm:p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-base sm:text-lg">{feature.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
