"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function FeedbackForm() {
  return (
    <form className="space-y-4 w-full max-w-md">
      <div className="space-y-2">
        <Label htmlFor="feedback-name">Name</Label>
        <Input id="feedback-name" placeholder="Your name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="feedback-email">Email</Label>
        <Input id="feedback-email" type="email" placeholder="you@example.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="feedback-message">Feedback</Label>
        <Textarea id="feedback-message" placeholder="Share your thoughts..." rows={4} required />
      </div>
      <Button type="submit" className="w-full">Submit Feedback</Button>
    </form>
  );
}
