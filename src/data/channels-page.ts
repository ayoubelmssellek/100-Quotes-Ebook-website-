import type { LucideIcon } from "lucide-react";
import {
  Baby,
  Clapperboard,
  Film,
  Flag,
  Globe2,
  Headphones,
  Heart,
  Newspaper,
  Sparkles,
  Trophy,
  Tv,
  Zap,
} from "lucide-react";

export type ChannelCategory = {
  title: string;
  count: string;
  description: string;
  icon: LucideIcon;
};

export type LibraryFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ChannelStat = {
  value: string;
  label: string;
};

export type SportHighlight = {
  title: string;
  description: string;
};

/** Categories that matter to viewers in Portugal — not a world map. */
export const channelCategories: ChannelCategory[] = [
  {
    title: "Televisão Portuguesa",
    count: "180+",
    description: "RTP, SIC, TVI e os canais que as famílias em Portugal veem todos os dias.",
    icon: Flag,
  },
  {
    title: "Desporto PT",
    count: "2,000+",
    description: "Liga Portugal, Sport TV, Champions e os eventos que os fãs portugueses seguem.",
    icon: Trophy,
  },
  {
    title: "Filmes & Séries",
    count: "140K+",
    description: "Cinema e séries em HD e 4K — entretenimento premium num só serviço IPTV PT.",
    icon: Clapperboard,
  },
  {
    title: "Entretenimento",
    count: "2,400+",
    description: "Reality, drama e canais de lazer pensados para o dia a dia em Portugal.",
    icon: Sparkles,
  },
  {
    title: "Notícias",
    count: "850+",
    description: "CMTV, CNN Portugal e informação nacional e internacional.",
    icon: Newspaper,
  },
  {
    title: "Infantil",
    count: "600+",
    description: "Conteúdo seguro para crianças e famílias portuguesas.",
    icon: Baby,
  },
  {
    title: "Documentários",
    count: "450+",
    description: "Natureza, história e descoberta para quem gosta de aprender.",
    icon: Film,
  },
  {
    title: "Música",
    count: "320+",
    description: "Concertos, vídeos e canais musicais para todas as idades.",
    icon: Headphones,
  },
  {
    title: "Lifestyle",
    count: "700+",
    description: "Culinária, casa e bem-estar no ritmo da vida em Portugal.",
    icon: Heart,
  },
  {
    title: "Canais Internacionais",
    count: "Extra",
    description: "Pacotes da Europa e América como benefício extra para lares multilingues em Portugal.",
    icon: Globe2,
  },
];

export const portugueseSports: SportHighlight[] = [
  {
    title: "Liga Portugal",
    description: "Siga a Liga Portugal em direto — o desporto que os fãs portugueses não dispensam.",
  },
  {
    title: "Sport TV",
    description: "IPTV Sport TV para jogos, análises e a cobertura que importa em Portugal.",
  },
  {
    title: "Benfica TV",
    description: "O canal oficial dos encarnados, disponível no seu serviço IPTV Português.",
  },
  {
    title: "Champions League",
    description: "As noites europeias que as casas em Portugal vivem em conjunto.",
  },
  {
    title: "Premier League",
    description: "Futebol inglês em qualidade premium para quem acompanha além da Liga.",
  },
  {
    title: "Formula 1 & UFC",
    description: "Motores e combate nos ecrãs portugueses — em HD e 4K quando a ligação permite.",
  },
];

export const libraryFeatures: LibraryFeature[] = [
  {
    title: "Conteúdo Português",
    description: "Canais IPTV Portugal em destaque — RTP, SIC, TVI, Sport TV e mais.",
    icon: Flag,
  },
  {
    title: "Atualizado todos os dias",
    description: "Catálogo renovado para o melhor IPTV Portugal se manter sempre fresco.",
    icon: Sparkles,
  },
  {
    title: "HD / FHD / 4K",
    description: "Streaming em qualidade elevada para Smart TV e boxes em Portugal.",
    icon: Clapperboard,
  },
  {
    title: "Streams estáveis",
    description: "Feito para noites de Liga Portugal e binge sem interrupções.",
    icon: Zap,
  },
  {
    title: "Desporto que importa",
    description: "IPTV Liga Portugal, Champions e eventos que os portugueses acompanham.",
    icon: Trophy,
  },
  {
    title: "Entretenimento familiar",
    description: "Filmes, séries e kids — entretenimento para famílias em Portugal.",
    icon: Tv,
  },
];

export const heroStats: ChannelStat[] = [
  { value: "15,000+", label: "Canais em direto" },
  { value: "IPTV PT", label: "Foco Portugal" },
  { value: "4K", label: "Streaming" },
  { value: "99,9%", label: "Uptime" },
];

export const libraryStats: ChannelStat[] = [
  { value: "15,000+", label: "Canais em direto" },
  { value: "140K+", label: "Filmes & Séries" },
  { value: "4K", label: "Streaming Ultra HD" },
  { value: "Instantâneo", label: "Ativação" },
  { value: "24/7", label: "Suporte" },
  { value: "PT", label: "Feito para Portugal" },
];

export const platformDescriptions: Record<string, string> = {
  "Prime Video": "Filmes e exclusivos premium no seu IPTV Português.",
  "Disney Plus": "Família, Marvel e Pixar — entretenimento para casas em Portugal.",
  "HBO Max": "Séries de prestígio e cinema num só serviço IPTV PT.",
  "Apple TV+": "Produções premiadas para ver em Smart TV em Portugal.",
  "SkyShowtime": "Entretenimento europeu popular junto de famílias portuguesas.",
  DAZN: "Desporto em direto para fãs que vivem em Portugal.",
  "RTP Play": "Catch-up português e conteúdos RTP no ecossistema IPTV Portugal.",
};
