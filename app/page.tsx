import { AppLayout } from "@/components/app";
import { JsonLd } from "@/components/shared";
import { Hero, Features, Faqs, Cta } from "@/components/home";

export default function Home() {
  return (
    <AppLayout>
      <JsonLd />
      <Hero />
      <Features />
      <Faqs />
      <Cta />
    </AppLayout>
  );
}
