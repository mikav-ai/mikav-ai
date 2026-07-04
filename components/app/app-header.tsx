import { Button } from "@/components/ui/button";

export function AppHeader() {
  return (
    <header id="app-header" className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">Mikav</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#faqs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">FAQs</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  );
}
