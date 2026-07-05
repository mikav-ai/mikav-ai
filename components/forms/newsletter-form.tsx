"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  return (
    <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <Input type="email" placeholder="you@example.com" required className="flex-1" />
      <Button type="submit">Subscribe</Button>
    </form>
  );
}
