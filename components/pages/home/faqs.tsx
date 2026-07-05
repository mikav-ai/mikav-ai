import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Mikav AI?",
    answer:
      "Mikav AI is an open-source Malayalam AI platform built to help people learn, explore, and build on Kerala's rich art, culture, and history.",
  },
  {
    question: "Is Mikav free to use?",
    answer:
      "Yes. Mikav is completely free and open source. All datasets, tools, and the platform itself are available at no cost.",
  },
  {
    question: "How is this different from using a translator?",
    answer:
      "Mikav is built natively for Malayalam — it understands idioms, context, and cultural meaning rather than translating from English.",
  },
  {
    question: "Can I contribute to the project?",
    answer:
      "Absolutely. The codebase, datasets, and roadmap are all open. You can contribute code, data, documentation, or ideas through our community.",
  },
  {
    question: "How can I use Mikav for my startup idea?",
    answer:
      "Mikav connects culture enthusiasts to incubation programs, grants, and mentors. Explore the Ideas to Startup Bridge feature to get started.",
  },
];

export function Faqs() {
  return (
    <section id="faqs" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            <a href="#faqs" className="hover:text-primary/80 transition-colors">#</a> FAQs
          </h2>
        </div>
        <Accordion className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-sm sm:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
