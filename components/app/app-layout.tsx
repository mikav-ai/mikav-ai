import { AppHeader } from "./app-header";
import { AppFooter } from "./app-footer";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppHeader />
      <main id="app-main" className="flex-1">
        {children}
      </main>
      <AppFooter />
    </>
  );
}
