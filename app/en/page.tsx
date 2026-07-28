import type { Metadata } from "next";
import { Landing } from "@/components/Landing";

export const metadata: Metadata = {
  title: "MKP Poland — The ManKind Project",
  description:
    "Men's circles and the NWTA initiation training. Rebuild your strength in community. The ManKind Project Poland.",
};

export default function Page() {
  return <Landing locale="en" />;
}
