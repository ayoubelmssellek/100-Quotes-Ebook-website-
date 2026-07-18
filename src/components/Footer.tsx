import Link from "next/link";
import { site } from "@/data/content";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-black">
      <div className="section-shell grid gap-12 py-16 md:grid-cols-4 md:gap-8">
        <div className="md:col-span-1">
          <p className="text-[16px] font-semibold text-white">StreamNova</p>
          <p className="mt-4 max-w-xs text-[13px] leading-[1.4] tracking-[-0.16px] text-slate">
            IPTV Portugal — o melhor serviço para comprar IPTV online, ver canais IPTV PT e desporto em 4K.
          </p>
          <p className="mt-4 text-[11px] leading-[1.4] text-footer">{site.demoNotice}</p>
        </div>

        <div>
          <p className="label mb-4">Páginas</p>
          <ul className="space-y-3 text-[14px] text-footer">
            <li>
              <Link href="/" className="hover:text-white">
                Início — IPTV Portugal
              </Link>
            </li>
            <li>
              <Link href="/subscriptions" className="hover:text-white">
                Comprar IPTV / Planos
              </Link>
            </li>
            <li>
              <Link href="/renew" className="hover:text-white">
                Renovar IPTV
              </Link>
            </li>
            <li>
              <Link href="/channels" className="hover:text-white">
                Lista de canais
              </Link>
            </li>
            <li>
              <Link href="/installation-guides" className="hover:text-white">
                Guias de instalação
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">
                Blog IPTV
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-white">
                FAQ IPTV
              </Link>
            </li>
            <li>
              <Link href="/why-us" className="hover:text-white">
                Porquê escolher-nos
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="label mb-4">Legal</p>
          <ul className="space-y-3 text-[14px] text-footer">
            <li>
              <Link href="/privacy-policy" className="hover:text-white">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Termos
              </Link>
            </li>
            <li>
              <Link href="/refund-policy" className="hover:text-white">
                Reembolsos
              </Link>
            </li>
            <li>
              <Link href="/dmca-policy" className="hover:text-white">
                DMCA
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:text-white">
                Aviso legal
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="label mb-4">Contacto</p>
          <ul className="space-y-3 text-[14px] text-footer">
            <li>{site.email}</li>
            <li>{site.phone}</li>
          </ul>
          <Link href="/subscriptions" className="btn btn-ghost mt-6" aria-label="Buy IPTV Now — Comprar IPTV Portugal">
            Comprar IPTV Agora
          </Link>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="section-shell flex flex-col gap-2 py-5 text-[13px] text-footer sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} StreamNova · IPTV PT</p>
          <p>Ativação rápida · garantia 7 dias (demo)</p>
        </div>
      </div>
    </footer>
  );
}
