"use client";

import { MotionConfig } from "framer-motion";

// reducedMotion="user" makes every framer-motion animation respect the
// OS-level prefers-reduced-motion setting; CSS animations are handled in globals.css.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
