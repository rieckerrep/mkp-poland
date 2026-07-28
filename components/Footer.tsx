import type { Copy } from "@/content/copy";

export function Footer({ t }: { t: Copy }) {
  return (
    <footer className="border-t border-white/10 bg-night-950 text-slate-400">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
          {t.footer.mission}
        </p>
        <p className="mt-2 text-sm text-slate-500">{t.footer.missionSrc}</p>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-baseline gap-2 text-white">
            <span className="font-bold">MKP</span>
            <span className="text-sm text-slate-400">Polska</span>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {t.footer.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-6 text-xs text-slate-600">{t.footer.note}</p>
      </div>
    </footer>
  );
}
