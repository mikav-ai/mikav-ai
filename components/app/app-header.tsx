import Image from "next/image";
import Link from "next/link";

export function AppHeader() {
  return (
    <header id="app-header" className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl mx-auto flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/icons/app/icon-dark.png" alt="Mikav" width={28} height={28} />
          <span className="text-lg sm:text-xl font-bold text-primary">Mikav</span>
        </Link>
      </div>
    </header>
  );
}
