import type { Metadata } from "next";
import { Landing } from "@/components/Landing";

export const metadata: Metadata = {
  title: "MKP Polsko — The ManKind Project",
  description:
    "Mužské kruhy a iniciační trénink NWTA. Obnov svou sílu ve společenství. The ManKind Project Polsko.",
};

export default function Page() {
  return <Landing locale="cs" />;
}
