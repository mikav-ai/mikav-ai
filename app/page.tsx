import { AppLayout } from "@/components/app";
import { Hero, Features, Faqs, Cta } from "@/components/home";

export default function Home() {
  return (
    <AppLayout>
      <Hero />
      <Features />
      <Faqs />
      <Cta />
    </AppLayout>
  );
}
