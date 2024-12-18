"use client";

import { SpellsProvider } from "@/contexts/SpellsContext";

export default function ClientSpellsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SpellsProvider>{children}</SpellsProvider>;
}
