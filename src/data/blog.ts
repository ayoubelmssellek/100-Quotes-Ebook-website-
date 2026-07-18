export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  minutes: number;
  cover: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "how-to-choose-streaming-subscription-2026",
    title: "Como escolher o melhor IPTV em Portugal (2026)",
    excerpt:
      "Checklist prático: estabilidade, dispositivos, desporto e custo total antes de escolher um serviço IPTV.",
    date: "2026-03-12",
    minutes: 7,
    cover:
      "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Escolher o melhor IPTV em Portugal em 2026 depende mais de estabilidade e dispositivos do que de listas intermináveis de canais.",
      "Compare uptime, número de ligações e se precisa de IPTV for Smart TV, Android ou IPTV Apple TV no mesmo plano.",
      "Veja planos únicos versus renovação, políticas de IPTV trial ou reembolso, e qualidade do EPG antes de noites de jogo.",
      "Teste a instalação no ecrã que mais usa — Fire Stick, Smart TV ou telemóvel — porque a fricção de setup afasta utilizadores.",
    ],
  },
  {
    slug: "top-apps-for-firestick-2026",
    title: "Melhores apps IPTV: IPTV Smarters e players (2026)",
    excerpt:
      "IPTV Smarters Pro, Smart IPTV e outras opções estáveis para Fire Stick, Android e Smart TV.",
    date: "2026-02-28",
    minutes: 6,
    cover:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1400&q=80",
    content: [
      "O Fire Stick continua a ser uma forma económica de ver IPTV online no ecrã grande.",
      "Procure o best IPTV app com login Xtream, EPG sólido e controlos parentais se partilhar a sala.",
      "IPTV Smarters e IPTV Smarters Pro são opções populares; limpe a cache se o IPTV player ficar lento.",
      "Numa final importante, prefira ethernet ou 5 GHz para um IPTV stream mais estável.",
    ],
  },
  {
    slug: "best-live-tv-streaming-2026",
    title: "IPTV stream em direto: hábitos para 2026",
    excerpt:
      "Dicas de buffering, bitrate e guia TV para desporto e notícias em 4K IPTV.",
    date: "2026-01-18",
    minutes: 8,
    cover:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Muitos problemas de IPTV stream vêm da rede de casa, não só do serviço IPTV.",
      "Procure ~20 Mbps estáveis, Wi‑Fi 5 GHz e evite downloads durante o jogo.",
      "Se congelar, mude de categoria e volte — muitos players recuperam mais rápido do que um restart completo.",
      "Use catch-up com cuidado para não esgotar ligações num plano de uma conexão.",
    ],
  },
  {
    slug: "setup-streaming-on-iphone-ipad",
    title: "Como instalar IPTV no iPhone, iPad e Apple TV",
    excerpt:
      "Guia simples: IPTV Apple TV e iOS — instalar o player, iniciar sessão e AirPlay.",
    date: "2026-04-02",
    minutes: 5,
    cover:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Em iOS, instale um IPTV player na App Store e conceda permissões de rede.",
      "Para IPTV Apple TV, o fluxo é semelhante: app compatível, credenciais Xtream e qualidade adequada à ligação.",
      "AirPlay para a TV quando tiver convidados; baixe para 720p em dados móveis fracos.",
      "O modo de poupança de energia pode limitar a descodificação — desative-o em sessões 4K longas.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
