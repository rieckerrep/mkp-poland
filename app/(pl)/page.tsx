import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { Landing } from "@/components/Landing";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata("pl");

export default function Page() {
  return (
    <>
      <JsonLd locale="pl" />
      <Landing locale="pl" />
    </>
  );
}
