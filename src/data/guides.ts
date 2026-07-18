export type Guide = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  needs: string[];
  steps: { title: string; body: string }[];
  tips: string[];
};

export const guides: Guide[] = [
  {
    slug: "firestick",
    title: "Fire Stick / Android Box",
    short: "Instale IPTV Smarters Pro ou outro IPTV player no Fire Stick e inicie sessão.",
    intro:
      "Fire Stick e Android boxes são formas simples de usar IPTV Portugal no ecrã grande. Instale um IPTV smart player como IPTV Smarters e ligue com Xtream ou M3U.",
    needs: [
      "Fire Stick or Android box online",
      "Stable wifi (15–20 Mbps recommended)",
      "Active StreamNova demo credentials",
      "Downloader / Play Store access",
    ],
    steps: [
      {
        title: "Enable unknown sources (Fire Stick)",
        body: "Open Settings → My Fire TV → Developer Options and allow apps from unknown sources if you sideload a player.",
      },
      {
        title: "Install a player",
        body: "Install IPTV Smarters, TiviMate, or a similar player from the store or a trusted APK source.",
      },
      {
        title: "Add your account",
        body: "Choose Xtream Codes API, then enter server URL, username, and password from your confirmation email.",
      },
      {
        title: "Load the guide",
        body: "Wait for live categories and VOD shelves to populate, then pin favorites for quick access.",
      },
    ],
    tips: [
      "Use 5 GHz wifi when possible for 4K events.",
      "Clear the player cache if channels fail to refresh.",
      "Keep only one simultaneous stream per connection.",
    ],
  },
  {
    slug: "android",
    title: "Android Phones, Tablets & TVs",
    short: "Android app for IPTV: IPTV Smarters e IPTV app Android em telemóvel ou TV.",
    intro:
      "No Android, uma android app for IPTV ou IPTV app Android (como IPTV Smarters Pro) permite ver o serviço IPTV em minutos.",
    needs: [
      "Android 8+ device or Google TV",
      "Google Play access",
      "StreamNova username / password / server",
    ],
    steps: [
      {
        title: "Open Google Play",
        body: "Search for IPTV Smarters Pro, TiviMate, or IBO Player and install.",
      },
      {
        title: "Launch and select login type",
        body: "Pick Xtream Codes API for the best EPG and VOD organization.",
      },
      {
        title: "Enter credentials",
        body: "Paste server URL, username, and password exactly as emailed.",
      },
      {
        title: "Sync EPG",
        body: "Allow the guide to sync once, then create favorites for sports and primetime.",
      },
    ],
    tips: [
      "Android TV remotes work best in fullscreen player mode.",
      "Disable battery optimization for the player app on phones.",
    ],
  },
  {
    slug: "windows-mac",
    title: "Windows PCs / Macs",
    short: "IPTV Windows e IPTV PC: configure o IPTV player Windows no desktop.",
    intro:
      "IPTV Windows e IPTV PC são ideais para multitasking. Use um IPTV player Windows, importe as credenciais e mantenha o guia ao lado do trabalho.",
    needs: [
      "Windows 10/11 or macOS Monterey+",
      "Desktop player (Smarters, VLC, or similar)",
      "Your demo playlist or Xtream fields",
    ],
    steps: [
      {
        title: "Download a desktop player",
        body: "Install IPTV Smarters Desktop, or use VLC for M3U playback.",
      },
      {
        title: "Create a new playlist",
        body: "Add Xtream Codes details or paste the M3U URL from your welcome mail.",
      },
      {
        title: "Refresh categories",
        body: "Load live groups and VOD, then sort by country or genre.",
      },
      {
        title: "Hardware acceleration",
        body: "Enable GPU decoding in player settings for smoother 4K on capable machines.",
      },
    ],
    tips: [
      "Wired ethernet beats congested wifi for marathon sports days.",
      "Create separate favorites for work-safe daytime channels.",
    ],
  },
  {
    slug: "smart-tv",
    title: "Smart TVs (All Brands)",
    short: "IPTV for Smart TV: Samsung, LG, Android TV com Smart IPTV ou Smarters.",
    intro:
      "Smart TV IPTV funciona na maioria das marcas via loja oficial. Samsung, LG, Android TV e Google TV aceitam IPTV Smarters Pro, Smart IPTV e players semelhantes.",
    needs: [
      "Smart TV with store access",
      "15–20 Mbps internet",
      "Active credentials (Xtream or M3U)",
    ],
    steps: [
      {
        title: "Samsung (Tizen)",
        body: "Open the Samsung App Store, install IPTV Smarters Pro or IBO Player, then login with Xtream Codes.",
      },
      {
        title: "LG (webOS)",
        body: "Open LG Content Store, install a compatible player, and connect via Xtream or M3U.",
      },
      {
        title: "Android / Google TV",
        body: "Use Play Store → install TiviMate or Smarters → Xtream Codes → load EPG.",
      },
      {
        title: "Activation-based apps",
        body: "For IBO / Hot Player, copy the MAC / device ID, activate on the app website with your M3U, then refresh the TV app.",
      },
    ],
    tips: [
      "Xtream Codes usually loads faster than raw M3U on TVs.",
      "A Fire Stick is optional — many TVs already run players natively.",
    ],
  },
  {
    slug: "ios",
    title: "iPhone / iPad",
    short: "IPTV no iPhone e iPad com o melhor IPTV player da App Store.",
    intro:
      "No iPhone e iPad, instale um IPTV player compatível com Xtream e inicie sessão com os dados StreamNova.",
    needs: [
      "iOS 15+",
      "App Store account",
      "StreamNova credentials",
    ],
    steps: [
      {
        title: "Install a player",
        body: "Search the App Store for a playlist player that supports Xtream / M3U login.",
      },
      {
        title: "Allow network access",
        body: "Grant local network permissions if prompted so EPG can sync.",
      },
      {
        title: "Sign in",
        body: "Enter server, username, and password. Prefer cellular/wifi with strong signal for HD.",
      },
      {
        title: "Add to Home Screen",
        body: "Optional: create a Homescreen shortcut for one-tap launch.",
      },
    ],
    tips: [
      "Use LoF-fi mode on weak cellular and bump quality on wifi.",
      "AirPlay to a compatible TV when you want the big screen.",
    ],
  },
  {
    slug: "mag",
    title: "MAG Devices",
    short: "Quick MAC-based activation for MAG / Infomir boxes.",
    intro:
      "MAG boxes skip username/password apps. Your device MAC is authorized on the portal, then you set the portal URL once and reboot.",
    needs: [
      "MAG-bound STB online",
      "MAC address from the device menu",
      "Portal URL from support",
    ],
    steps: [
      {
        title: "Find your MAC",
        body: "Open Settings / System and copy the MAC address shown on the device.",
      },
      {
        title: "Send it to support",
        body: "Email or chat the MAC so the demo team can authorize the box.",
      },
      {
        title: "Set portal URL",
        body: "Paste the portal URL provided after activation into the MAG settings.",
      },
      {
        title: "Reboot and browse",
        body: "Restart the box. Live categories should appear automatically.",
      },
    ],
    tips: [
      "If you factory reset, re-send the MAC and re-enter the portal URL.",
      "Keep firmware current for better 4K stability.",
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
