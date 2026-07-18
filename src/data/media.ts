import type { StaticImageData } from "next/image";

import benficaTv from "@/assets/channels/benfica-tv-transactional.png";
import cmTv from "@/assets/channels/cm-tv-informational.png";
import cnn from "@/assets/channels/cnn-informational.svg";
import cnnPortugal from "@/assets/channels/cnn-portugal-informational.png";
import rtp1 from "@/assets/channels/rtp1-informational.jpg";
import rtp2 from "@/assets/channels/rtp2-informational.webp";
import sic from "@/assets/channels/sic-informational.png";
import sportTv2 from "@/assets/channels/sport-tv-2-transactional.jpeg";
import sportTv from "@/assets/channels/sport-tv-transactional.png";
import tvi from "@/assets/channels/tvi-informational.png";

import appleTvPlus from "@/assets/entertainment-brands/apple-tv-plus-commercial.jpg";
import dazn from "@/assets/entertainment-brands/dazn-commercial.png";
import disneyPlus from "@/assets/entertainment-brands/disney-plus-commercial.jpg";
import hboMax from "@/assets/entertainment-brands/hbo-max-commercial.jpg";
import primeVideo from "@/assets/entertainment-brands/prime-video-commercial.jpg";
import rtpPlay from "@/assets/entertainment-brands/rtp-play-commercial.jpg";
import skyshowtime from "@/assets/entertainment-brands/skyshowtime-commercial.jpg";

import avatarTheWayOfWater from "@/assets/movies/avatar-the-way-of-water-informational.jpg";
import barbie from "@/assets/movies/barbie-informational.jpg";
import deadpoolWolverine from "@/assets/movies/deadpool-wolverine-informational.jpg";
import dunePartTwo from "@/assets/movies/dune-part-two-informational.jpg";
import gladiatorIi from "@/assets/movies/gladiator-ii-informational.jpg";
import insideOut2 from "@/assets/movies/inside-out-2-informational.jpg";
import johnWickChapter4 from "@/assets/movies/john-wick-chapter-4-informational.jpg";
import oppenheimer from "@/assets/movies/oppenheimer-informational.jpg";
import spiderManNoWayHome from "@/assets/movies/spider-man-no-way-home-informational.jpg";
import topGunMaverick from "@/assets/movies/top-gun-maverick-informational.jpg";

import championsLeague from "@/assets/sports-brands/champions-league-commercial.jpg";
import formula1 from "@/assets/sports-brands/formula-1-commercial.jpg";
import laLiga from "@/assets/sports-brands/la-liga-commercial.jpg";
import ligaPortugalBetclic from "@/assets/sports-brands/liga-portugal-betclic-commercial.jpg";
import nba from "@/assets/sports-brands/nba-commercial.jpg";
import premierLeague from "@/assets/sports-brands/premier-league-commercial.jpg";
import ufc from "@/assets/sports-brands/ufc-commercial.jpg";

import betterCallSaul from "@/assets/tv-shows/better-call-saul-informational.jpg";
import breakingBad from "@/assets/tv-shows/breaking-bad-informational.jpg";
import gameOfThrones from "@/assets/tv-shows/game-of-thrones-informational.jpg";
import houseOfTheDragon from "@/assets/tv-shows/house-of-the-dragon-informational.jpg";
import laCasaDePapel from "@/assets/tv-shows/la-casa-de-papel-informational.jpg";
import squidGame from "@/assets/tv-shows/squid-game-informational.jpg";
import strangerThings from "@/assets/tv-shows/stranger-things-informational.jpg";

export type SeoKeyword = "informational" | "commercial" | "transactional";

export type SeoImage = {
  src: StaticImageData;
  alt: string;
  title: string;
  keyword: SeoKeyword;
  entity: string;
};

export const channelLogos: SeoImage[] = [
  {
    src: rtp1,
    alt: "RTP1 Portugal Canal de Televisão",
    title: "RTP1 Portugal",
    keyword: "informational",
    entity: "RTP1",
  },
  {
    src: rtp2,
    alt: "RTP2 Portugal Canal de Televisão",
    title: "RTP2 Portugal",
    keyword: "informational",
    entity: "RTP2",
  },
  {
    src: sic,
    alt: "SIC Portugal Canal de Televisão",
    title: "SIC Portugal",
    keyword: "informational",
    entity: "SIC",
  },
  {
    src: tvi,
    alt: "TVI Portugal Canal de Televisão",
    title: "TVI Portugal",
    keyword: "informational",
    entity: "TVI",
  },
  {
    src: cmTv,
    alt: "CM TV Portugal Canal de Notícias",
    title: "CM TV Portugal",
    keyword: "informational",
    entity: "CM TV",
  },
  {
    src: cnnPortugal,
    alt: "CNN Portugal Canal de Notícias",
    title: "CNN Portugal",
    keyword: "informational",
    entity: "CNN Portugal",
  },
  {
    src: cnn,
    alt: "CNN International News Channel Logo",
    title: "CNN",
    keyword: "informational",
    entity: "CNN",
  },
  {
    src: sportTv,
    alt: "Sport TV Portugal IPTV — SportTV IPTV",
    title: "Sport TV Portugal",
    keyword: "transactional",
    entity: "Sport TV",
  },
  {
    src: sportTv2,
    alt: "Sport TV 2 Portugal Canal Desportivo",
    title: "Sport TV 2 Portugal",
    keyword: "transactional",
    entity: "Sport TV 2",
  },
  {
    src: benficaTv,
    alt: "Benfica TV BTV Portugal Canal Oficial",
    title: "Benfica TV Portugal",
    keyword: "transactional",
    entity: "Benfica TV",
  },
];

export const entertainmentBrands: SeoImage[] = [
  {
    src: primeVideo,
    alt: "Prime Video IPTV Portugal",
    title: "Prime Video Portugal",
    keyword: "commercial",
    entity: "Prime Video",
  },
  {
    src: disneyPlus,
    alt: "Comprar IPTV Online — Disney Plus Streaming",
    title: "Disney Plus Portugal",
    keyword: "commercial",
    entity: "Disney Plus",
  },
  {
    src: hboMax,
    alt: "HBO Max Portugal Streaming Platform",
    title: "HBO Max Portugal",
    keyword: "commercial",
    entity: "HBO Max",
  },
  {
    src: appleTvPlus,
    alt: "IPTV Apple TV Plus Portugal",
    title: "Apple TV Plus Portugal",
    keyword: "commercial",
    entity: "Apple TV+",
  },
  {
    src: skyshowtime,
    alt: "SkyShowtime Portugal Streaming Platform",
    title: "SkyShowtime Portugal",
    keyword: "commercial",
    entity: "SkyShowtime",
  },
  {
    src: dazn,
    alt: "DAZN Portugal Sports Streaming Platform",
    title: "DAZN Portugal",
    keyword: "commercial",
    entity: "DAZN",
  },
  {
    src: rtpPlay,
    alt: "RTP Play Portugal Streaming Platform",
    title: "RTP Play Portugal",
    keyword: "commercial",
    entity: "RTP Play",
  },
];

export const sportsBrands: SeoImage[] = [
  {
    src: championsLeague,
    alt: "4K IPTV Portugal — Champions League",
    title: "UEFA Champions League",
    keyword: "commercial",
    entity: "UEFA Champions League",
  },
  {
    src: ligaPortugalBetclic,
    alt: "Liga Portugal Betclic Football",
    title: "Liga Portugal Betclic",
    keyword: "commercial",
    entity: "Liga Portugal Betclic",
  },
  {
    src: premierLeague,
    alt: "Premium IPTV Subscription — Premier League",
    title: "Premier League",
    keyword: "commercial",
    entity: "Premier League",
  },
  {
    src: laLiga,
    alt: "La Liga Live Football Spain",
    title: "La Liga",
    keyword: "commercial",
    entity: "La Liga",
  },
  {
    src: formula1,
    alt: "Formula 1 IPTV",
    title: "Formula 1",
    keyword: "commercial",
    entity: "Formula 1",
  },
  {
    src: ufc,
    alt: "UFC Mixed Martial Arts Events",
    title: "UFC",
    keyword: "commercial",
    entity: "UFC",
  },
  {
    src: nba,
    alt: "NBA Basketball Live Games",
    title: "NBA",
    keyword: "commercial",
    entity: "NBA",
  },
];

export const moviePosters: SeoImage[] = [
  {
    src: barbie,
    alt: "Barbie Movie Poster",
    title: "Barbie",
    keyword: "informational",
    entity: "Barbie",
  },
  {
    src: oppenheimer,
    alt: "Oppenheimer Movie Poster",
    title: "Oppenheimer",
    keyword: "informational",
    entity: "Oppenheimer",
  },
  {
    src: dunePartTwo,
    alt: "Dune Part Two Movie Poster",
    title: "Dune Part Two",
    keyword: "informational",
    entity: "Dune Part Two",
  },
  {
    src: deadpoolWolverine,
    alt: "Deadpool and Wolverine Movie Poster",
    title: "Deadpool & Wolverine",
    keyword: "informational",
    entity: "Deadpool & Wolverine",
  },
  {
    src: avatarTheWayOfWater,
    alt: "Avatar The Way of Water Movie Poster",
    title: "Avatar The Way of Water",
    keyword: "informational",
    entity: "Avatar The Way of Water",
  },
  {
    src: topGunMaverick,
    alt: "Top Gun Maverick Movie Poster",
    title: "Top Gun Maverick",
    keyword: "informational",
    entity: "Top Gun Maverick",
  },
  {
    src: spiderManNoWayHome,
    alt: "Spider-Man No Way Home Movie Poster",
    title: "Spider-Man No Way Home",
    keyword: "informational",
    entity: "Spider-Man No Way Home",
  },
  {
    src: johnWickChapter4,
    alt: "John Wick Chapter 4 Movie Poster",
    title: "John Wick Chapter 4",
    keyword: "informational",
    entity: "John Wick Chapter 4",
  },
  {
    src: gladiatorIi,
    alt: "Gladiator II Movie Poster",
    title: "Gladiator II",
    keyword: "informational",
    entity: "Gladiator II",
  },
  {
    src: insideOut2,
    alt: "Inside Out 2 Movie Poster",
    title: "Inside Out 2",
    keyword: "informational",
    entity: "Inside Out 2",
  },
];

export const tvShowPosters: SeoImage[] = [
  {
    src: strangerThings,
    alt: "Stranger Things TV Series Poster",
    title: "Stranger Things",
    keyword: "informational",
    entity: "Stranger Things",
  },
  {
    src: breakingBad,
    alt: "Breaking Bad TV Series Poster",
    title: "Breaking Bad",
    keyword: "informational",
    entity: "Breaking Bad",
  },
  {
    src: gameOfThrones,
    alt: "Game of Thrones TV Series Poster",
    title: "Game of Thrones",
    keyword: "informational",
    entity: "Game of Thrones",
  },
  {
    src: houseOfTheDragon,
    alt: "House of the Dragon TV Series Poster",
    title: "House of the Dragon",
    keyword: "informational",
    entity: "House of the Dragon",
  },
  {
    src: laCasaDePapel,
    alt: "La Casa de Papel Money Heist TV Series Poster",
    title: "La Casa de Papel",
    keyword: "informational",
    entity: "La Casa de Papel",
  },
  {
    src: squidGame,
    alt: "Squid Game TV Series Poster",
    title: "Squid Game",
    keyword: "informational",
    entity: "Squid Game",
  },
  {
    src: betterCallSaul,
    alt: "Better Call Saul TV Series Poster",
    title: "Better Call Saul",
    keyword: "informational",
    entity: "Better Call Saul",
  },
];

/** Editorial + VOD grid posters (movies + series mix). */
export const posterImages: SeoImage[] = [
  moviePosters[0],
  moviePosters[1],
  moviePosters[2],
  tvShowPosters[0],
  tvShowPosters[1],
  moviePosters[3],
];

export const featuredChannelImage = channelLogos[0];
export const featuredSportsImage = sportsBrands[0];
