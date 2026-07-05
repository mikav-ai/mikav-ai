import Link from "next/link";
import { AppLogo } from "@/components/shared";

export function AppFooter() {
  return (
    <footer id="app-footer" className="border-t bg-muted/40">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <Link href="/" className="flex items-center gap-2">
          <AppLogo size={24} />
          <span className="text-base sm:text-lg font-bold text-primary">Mikav</span>
        </Link>
        <p className="text-xs sm:text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Mikav. All rights reserved.
        </p>
        <nav className="flex items-center gap-4">
          <a href="/legal/privacy" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
          <a href="/legal/terms" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
          <a href="/legal/cookies" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">Cookies</a>
        </nav>
      </div>
    </footer>
  );
}
