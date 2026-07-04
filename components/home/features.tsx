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
    <section id="features" className="py-24 px-6 bg-muted/40">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Features</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
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
