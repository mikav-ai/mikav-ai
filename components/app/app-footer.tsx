import Image from "next/image";

export function AppFooter() {
  return (
    <footer id="app-footer" className="border-t bg-muted/40">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex items-center gap-2">
          <Image src="/icons/app/icon-dark.png" alt="Mikav" width={24} height={24} />
          <span className="text-base sm:text-lg font-bold text-primary">Mikav</span>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Mikav. All rights reserved.
        </p>
        <nav className="flex items-center gap-4">
          <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
        </nav>
      </div>
    </footer>
  );
}
