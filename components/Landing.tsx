import { copy, type Locale } from "@/content/copy";
import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Problem } from "./Problem";
import { Circles } from "./Circles";
import { Path } from "./Path";
import { Nwta } from "./Nwta";
import { Faq } from "./Faq";
import { Final } from "./Final";
import { Footer } from "./Footer";

export function Landing({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <>
      <Nav t={t} />
      <main>
        <Hero t={t} locale={locale} />
        <Problem t={t} />
        <Circles t={t} />
        <Path t={t} />
        <Nwta t={t} />
        <Faq t={t} />
        <Final t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
