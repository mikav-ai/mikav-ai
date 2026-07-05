"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function SupportForm() {
  return (
    <form className="space-y-4 w-full max-w-md">
      <div className="space-y-2">
        <Label htmlFor="support-name">Name</Label>
        <Input id="support-name" placeholder="Your name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="support-email">Email</Label>
        <Input id="support-email" type="email" placeholder="you@example.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="support-subject">Subject</Label>
        <Input id="support-subject" placeholder="Brief description of your issue" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="support-message">Message</Label>
        <Textarea id="support-message" placeholder="Describe your issue in detail..." rows={5} required />
      </div>
      <Button type="submit" className="w-full">Submit Request</Button>
    </form>
  );
}
