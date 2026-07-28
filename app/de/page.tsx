import type { Metadata } from "next";
import { Landing } from "@/components/Landing";

export const metadata: Metadata = {
  title: "MKP Polen — The ManKind Project",
  description:
    "Männerkreise und das Initiationstraining NWTA. Bau deine Stärke wieder auf — in Gemeinschaft. The ManKind Project Polen.",
};

export default function Page() {
  return <Landing locale="de" />;
}
