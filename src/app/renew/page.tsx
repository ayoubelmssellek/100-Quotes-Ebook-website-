import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import RenewForm from "@/components/RenewForm";

export const metadata: Metadata = {
  title: "Renovar IPTV Portugal",
  description:
    "Renove o seu serviço IPTV Portugal ou compre IPTV de novo. Veja o IPTV preço atual e continue a ver canais IPTV PT.",
};

export default function RenewPage() {
  return (
    <div className="section-shell py-16 md:py-24">
      <Breadcrumbs
        items={[
          { name: "Início", path: "/" },
          { name: "Renovar IPTV", path: "/renew" },
        ]}
      />
      <p className="label">Renovar</p>
      <h1 className="mt-4 text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
        Renovar o seu IPTV Portugal
      </h1>
      <p className="mt-4 max-w-2xl text-[16px] text-slate">
        Introduza o email ou utilizador para prolongar o acesso. Se preferir, pode comprar IPTV de novo na página de
        planos e ver o IPTV preço atualizado.
      </p>
      <RenewForm />
    </div>
  );
}
