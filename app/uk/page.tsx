import type { Metadata } from "next";
import { Landing } from "@/components/Landing";

export const metadata: Metadata = {
  title: "MKP Польща — The ManKind Project",
  description:
    "Чоловічі кола та ініціаційний тренінг NWTA. Віднови свою силу у спільноті. The ManKind Project Польща.",
};

export default function Page() {
  return <Landing locale="uk" />;
}
