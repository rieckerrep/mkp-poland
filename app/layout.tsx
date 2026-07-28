import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin", "latin-ext"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "MKP Polska — The ManKind Project",
  description:
    "Męskie kręgi i trening inicjacyjny NWTA. Odbuduj swoją siłę we wspólnocie. The ManKind Project Polska.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={rubik.variable}>
      <body>{children}</body>
    </html>
  );
}
