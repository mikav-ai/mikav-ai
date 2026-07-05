export function Brand() {
  return (
    <section id="brand" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">Brand</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="rounded-xl border bg-card p-6">
            <p className="text-sm text-muted-foreground mb-1">Font</p>
            <p className="text-lg font-medium">Google Sans</p>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <p className="text-sm text-muted-foreground mb-2">Colors</p>
            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-full bg-primary" title="#c8242b" />
              <div className="h-8 w-8 rounded-full bg-secondary border" title="#fdf2e3" />
              <div className="h-8 w-8 rounded-full bg-foreground" title="#1a1a1a" />
              <div className="h-8 w-8 rounded-full bg-background border" title="#ffffff" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
