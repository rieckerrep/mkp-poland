import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { Landing } from "@/components/Landing";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata("cs");

export default function Page() {
  return (
    <>
      <JsonLd locale="cs" />
      <Landing locale="cs" />
    </>
  );
}
