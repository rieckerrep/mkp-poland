import { RootShell } from "@/components/RootShell";

export { viewport } from "@/lib/metadata";

export default function PlLayout({ children }: { children: React.ReactNode }) {
  return <RootShell locale="pl">{children}</RootShell>;
}
