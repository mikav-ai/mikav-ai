import { AppLayout } from "@/components/app";
import { JsonLd } from "@/components/shared";
import { Hero, Features, Programs, Faqs, Cta } from "@/components/pages/home";

export default function Home() {
  return (
    <AppLayout>
      <JsonLd />
      <Hero />
      <Features />
      <Programs />
      <Faqs />
      <Cta />
    </AppLayout>
  );
}
