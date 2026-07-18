import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { posts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog IPTV Portugal — Guias e Dicas",
  description:
    "Guias IPTV Portugal: melhor IPTV player, IPTV Smarters, Smart TV IPTV, Android e Apple TV. Dicas de instalação e streaming 4K.",
};

export default function BlogPage() {
  return (
    <div className="section-shell py-16 md:py-24">
      <Breadcrumbs
        items={[
          { name: "Início", path: "/" },
          { name: "Blog IPTV", path: "/blog" },
        ]}
      />
      <p className="label">Journal</p>
      <h1 className="mt-4 text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
        Blog IPTV Portugal
      </h1>
      <p className="mt-4 max-w-2xl text-[16px] text-slate">
        Guias de instalação, melhores apps IPTV e dicas para Smart TV, Android e Apple TV.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <div className="img-frame relative aspect-[16/9]">
              <Image
                src={post.cover}
                alt={post.title}
                title={post.title}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <p className="mt-4 text-[13px] text-muted">
              {post.date} · {post.minutes} min de leitura
            </p>
            <h2 className="mt-2 text-[24px] text-white group-hover:text-slate">{post.title}</h2>
            <p className="mt-2 text-[14px] text-slate">{post.excerpt}</p>
          </Link>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap gap-3">
        <Link href="/subscriptions" className="btn btn-solid" aria-label="Ver Planos IPTV">
          Ver Planos
        </Link>
        <Link href="/installation-guides" className="btn btn-ghost">
          Guias de instalação
        </Link>
      </div>
    </div>
  );
}
