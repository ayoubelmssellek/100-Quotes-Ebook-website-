"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function RenewForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const field =
    "mt-2 w-full rounded-[4px] border border-line bg-transparent px-4 py-3 text-white outline-none focus:border-white/40";

  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-2">
      <form onSubmit={onSubmit} className="border border-line bg-deep p-6 md:p-8">
        <label className="block text-[14px] text-slate">
          Email ou utilizador
          <input required name="account" className={field} placeholder="voce@email.com" />
        </label>
        <label className="mt-4 block text-[14px] text-slate">
          Duração do plano atual
          <select name="duration" className={`${field} bg-black`}>
            <option>3 Meses</option>
            <option>6 Meses</option>
            <option>1 Ano</option>
            <option>2 Anos</option>
          </select>
        </label>
        <button type="submit" className="btn btn-solid mt-6 w-full" aria-label="Pedir renovação IPTV">
          Pedir renovação
        </button>
        {sent && (
          <p className="mt-4 border border-line px-4 py-3 text-[14px] text-slate">
            Pedido demo recebido — o suporte confirmaria a renovação por email em minutos.
          </p>
        )}
      </form>

      <div className="border border-line bg-surface p-6 md:p-8">
        <h2 className="text-[20px] text-white">Prefere comprar IPTV de novo?</h2>
        <p className="mt-3 text-[14px] text-slate">
          Comece com um plano completo se as credenciais expiraram ou se precisa de mais ligações. Compare o IPTV
          preço e escolha o melhor IPTV Portugal para si.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/subscriptions" className="btn btn-ghost" aria-label="Comprar IPTV Agora">
            Comprar Agora
          </Link>
          <Link href="/installation-guides" className="btn btn-solid">
            Guias de instalação
          </Link>
          <Link href="/#faq" className="text-[14px] text-slate hover:text-white">
            FAQ →
          </Link>
        </div>
      </div>
    </div>
  );
}
