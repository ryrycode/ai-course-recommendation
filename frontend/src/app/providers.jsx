"use client";

import { StudentProvider } from "@/context/StudentContext";

export function Providers({ children }) {
  return <StudentProvider>{children}</StudentProvider>;
}