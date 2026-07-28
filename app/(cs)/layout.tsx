import { RootShell } from "@/components/RootShell";

export { viewport } from "@/lib/metadata";

export default function CsLayout({ children }: { children: React.ReactNode }) {
  return <RootShell locale="cs">{children}</RootShell>;
}
