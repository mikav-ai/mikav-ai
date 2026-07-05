"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function RequestDemoForm() {
  return (
    <form className="space-y-4 w-full max-w-md">
      <div className="space-y-2">
        <Label htmlFor="demo-name">Name</Label>
        <Input id="demo-name" placeholder="Your name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="demo-email">Email</Label>
        <Input id="demo-email" type="email" placeholder="you@example.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="demo-organization">Organization</Label>
        <Input id="demo-organization" placeholder="Your organization (optional)" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="demo-message">What are you looking to explore?</Label>
        <Textarea id="demo-message" placeholder="Tell us about your use case..." rows={4} />
      </div>
      <Button type="submit" className="w-full">Request Demo</Button>
    </form>
  );
}
