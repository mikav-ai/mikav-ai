"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      accept();
    }, 10000);
    return () => clearTimeout(timer);
  }, [visible]);

  function accept() {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookies-accepted", "false");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="rounded-lg border bg-background px-4 py-3 shadow-lg flex items-center gap-4">
        <p className="text-sm text-muted-foreground whitespace-nowrap">
          We use cookies and caching to enhance your experience.{" "}
          <Link href="/legal/cookies" className="text-primary underline underline-offset-2">
            Learn more
          </Link>
        </p>
        <Button size="sm" variant="outline" onClick={decline}>Decline</Button>
        <Button size="sm" onClick={accept}>Accept</Button>
      </div>
    </div>
  );
}
