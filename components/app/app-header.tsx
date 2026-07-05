"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/research", label: "Research" },
  { href: "/resources/blog", label: "Blogs" },
  { href: "/company", label: "Company" },
];

export function AppHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header id="app-header" className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl mx-auto flex h-14 sm:h-16 items-center gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/icons/app/icon-dark.png" alt="Mikav" width={28} height={28} />
          <span className="text-lg sm:text-xl font-bold text-primary">Mikav</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          className="ml-auto sm:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="sm:hidden border-t px-4 py-3 space-y-2 bg-background">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-1.5"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
