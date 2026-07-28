import { RootShell } from "@/components/RootShell";

export { viewport } from "@/lib/metadata";

export default function UkLayout({ children }: { children: React.ReactNode }) {
  return <RootShell locale="uk">{children}</RootShell>;
}
