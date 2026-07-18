export type ResolvedPlan = {
  id: string;
  label: string;
  productName: string;
  price: number;
  connections: number;
};

export function resolvePlan(planId?: string | null, connectionsParam?: string | null): ResolvedPlan {
  const connections = Number(connectionsParam) === 2 ? 2 : Number(connectionsParam) === 3 ? 3 : 1;

  if (planId === "3conn" || connections === 3) {
    return {
      id: "3conn",
      label: "1 Year",
      productName: "1 Year PortugalIPTV Plan · 3 Connections",
      price: 120,
      connections: 3,
    };
  }

  const map: Record<string, { label: string; price1: number; price2: number }> = {
    "1m": { label: "1 Month", price1: 15, price2: 25 },
    "1m2": { label: "1 Month", price1: 15, price2: 25 },
    "3m": { label: "3 Months", price1: 35.99, price2: 49.99 },
    "3m2": { label: "3 Months", price1: 35.99, price2: 49.99 },
    "6m": { label: "6 Months", price1: 40, price2: 65 },
    "6m2": { label: "6 Months", price1: 40, price2: 65 },
    "1y": { label: "1 Year", price1: 70, price2: 99 },
    "1y2": { label: "1 Year", price1: 70, price2: 99 },
    "2y": { label: "2 Years", price1: 120, price2: 170 },
    "2y2": { label: "2 Years", price1: 120, price2: 170 },
  };

  const selected = map[planId || "1y"] || map["1y"];
  const price = connections === 2 ? selected.price2 : selected.price1;

  return {
    id: planId || "1y",
    label: selected.label,
    productName: `${selected.label} PortugalIPTV Plan`,
    price,
    connections,
  };
}

export function formatMoney(amount: number) {
  return `$${amount.toFixed(2)}`;
}

export const checkoutBenefits = [
  "35,000+ Live Channels",
  "All US & Canada & UK Channels",
  "All PPV Events",
  "140,000+ Movies & TV Shows (VOD)",
  "TV Guide (EPG)",
  "99.9% Uptime",
  "4K / FHD / HD Quality",
  "Works on Any Device",
  "Catch-Up TV",
  "Xtream Codes / M3U / MAG",
  "Free Player Application",
  "Instant Service Activation",
];
