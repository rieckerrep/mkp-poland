import { RootShell } from "@/components/RootShell";

export { viewport } from "@/lib/metadata";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <RootShell locale="en">{children}</RootShell>;
}
