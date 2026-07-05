import type { Metadata } from "next";
import { AppLayout } from "@/components/app";
import { About, Team, Brand, Contact } from "@/components/pages/company";

export const metadata: Metadata = {
  title: "Company",
};

export default function CompanyPage() {
  return (
    <AppLayout>
      <About />
      <Team />
      <Brand />
      <Contact />
    </AppLayout>
  );
}
