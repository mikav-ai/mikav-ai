export function AppFooter() {
  return (
    <footer id="app-footer" className="border-t bg-muted/40">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-8">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">Mikav</span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Mikav. All rights reserved.
        </p>
        <nav className="flex items-center gap-4">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
        </nav>
      </div>
    </footer>
  );
}
