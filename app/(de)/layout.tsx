import { RootShell } from "@/components/RootShell";

export { viewport } from "@/lib/metadata";

export default function DeLayout({ children }: { children: React.ReactNode }) {
  return <RootShell locale="de">{children}</RootShell>;
}
