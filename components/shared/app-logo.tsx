"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function AppLogo({ size = 28 }: { size?: number }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const src = mounted && theme === "dark"
    ? "/icons/app/icon-light.png"
    : "/icons/app/icon-dark.png";

  return <Image src={src} alt="Mikav" width={size} height={size} />;
}
