import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ChannelCategories from "@/components/channels/ChannelCategories";
import ChannelsFinalCta from "@/components/channels/ChannelsFinalCta";
import ChannelsHero from "@/components/channels/ChannelsHero";
import ChannelsStats from "@/components/channels/ChannelsStats";
import FeaturedPortugueseChannels from "@/components/channels/FeaturedPortugueseChannels";
import InternationalChannels from "@/components/channels/InternationalChannels";
import PortugueseSports from "@/components/channels/PortugueseSports";
import StreamingPlatforms from "@/components/channels/StreamingPlatforms";
import WhyLibrary from "@/components/channels/WhyLibrary";
import { channelLogos, entertainmentBrands, sportsBrands } from "@/data/media";

export const metadata: Metadata = {
  title: "Canais IPTV Portugal — Melhor IPTV Português | PortugalIPTV",
  description:
    "Canais IPTV Portugal: RTP, SIC, TVI, IPTV Sport TV e Liga Portugal. Comprar IPTV Portugal com entretenimento premium. O melhor IPTV PT para quem vive em Portugal.",
};

const portugueseChannels = channelLogos.filter((channel) =>
  ["RTP1", "RTP2", "SIC", "TVI", "CM TV", "CNN Portugal", "Sport TV", "Benfica TV"].includes(channel.entity),
);

const heroLogos = channelLogos.filter((channel) =>
  ["RTP1", "SIC", "TVI", "Sport TV", "CNN Portugal", "Benfica TV", "CM TV", "RTP2"].includes(channel.entity),
);

export default function ChannelsPage() {
  return (
    <main>
      <div className="section-shell pt-8 md:pt-10">
        <Breadcrumbs
          items={[
            { name: "Início", path: "/" },
            { name: "Canais IPTV Portugal", path: "/channels" },
          ]}
        />
      </div>

      <ChannelsHero floatingLogos={heroLogos} />
      <ChannelCategories />
      <FeaturedPortugueseChannels channels={portugueseChannels} />
      <PortugueseSports sportsLogos={sportsBrands} channelLogos={channelLogos} />
      <StreamingPlatforms platforms={entertainmentBrands} />
      <InternationalChannels />
      <ChannelsStats />
      <WhyLibrary />
      <ChannelsFinalCta />
    </main>
  );
}
