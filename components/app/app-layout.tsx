import { AppHeader } from "./app-header";
import { AppFooter } from "./app-footer";
import { CookieBanner } from "@/components/shared";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppHeader />
      <main id="app-main" className="flex-1">
        {children}
      </main>
      <AppFooter />
      <CookieBanner />
    </>
  );
}
