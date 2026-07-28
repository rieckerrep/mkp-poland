import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { Landing } from "@/components/Landing";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata("uk");

export default function Page() {
  return (
    <>
      <JsonLd locale="uk" />
      <Landing locale="uk" />
    </>
  );
}
