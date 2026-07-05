"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function WaitlistForm() {
  return (
    <form className="space-y-4 w-full max-w-md">
      <div className="space-y-2">
        <Label htmlFor="waitlist-name">Name</Label>
        <Input id="waitlist-name" placeholder="Your name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="waitlist-email">Email</Label>
        <Input id="waitlist-email" type="email" placeholder="you@example.com" required />
      </div>
      <Button type="submit" className="w-full">Join Waitlist</Button>
    </form>
  );
}
