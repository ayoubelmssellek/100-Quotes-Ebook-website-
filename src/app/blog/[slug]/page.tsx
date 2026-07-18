import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getPost, posts } from "@/data/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Artigo" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="section-shell py-16 md:py-24">
      <Breadcrumbs
        items={[
          { name: "Início", path: "/" },
          { name: "Blog IPTV", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <Link href="/blog" className="text-[14px] text-slate hover:text-white">
        ← Voltar ao blog
      </Link>
      <h1 className="mt-4 max-w-3xl text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
        {post.title}
      </h1>
      <p className="mt-3 text-[13px] text-muted">
        {post.date} · {post.minutes} min de leitura
      </p>
      <div className="img-frame relative mt-8 aspect-[21/9]">
        <Image
          src={post.cover}
          alt={post.title}
          title={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div className="mx-auto mt-10 max-w-3xl space-y-5 text-[16px] leading-[1.45] text-slate">
        {post.content.map((para) => (
          <p key={para.slice(0, 24)}>{para}</p>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        <Link href="/subscriptions" className="btn btn-solid" aria-label="Comprar IPTV Agora">
          Comprar Agora
        </Link>
        <Link href="/installation-guides" className="btn btn-ghost">
          Guias de instalação
        </Link>
      </div>
    </article>
  );
}
