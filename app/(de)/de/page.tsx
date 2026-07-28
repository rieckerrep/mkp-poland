import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { Landing } from "@/components/Landing";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata("de");

export default function Page() {
  return (
    <>
      <JsonLd locale="de" />
      <Landing locale="de" />
    </>
  );
}
