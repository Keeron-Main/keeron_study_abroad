"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // Force default to light and do not auto-follow OS theme.
    // If you want to respect the user's OS preference, set enableSystem to true.
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
