import type { PayLocale } from "@/lib/payment-handoff";

export type SuccessCopy = {
  titlePaid: string;
  titleOrder: string;
  bodyPaid: string;
  bodyOrder: string;
  orderLabel: string;
  nameLabel: string;
  emailLabel: string;
  receiptTitle: string;
  sendReceipt: string;
  footer: string;
  headerBrand: string;
  headerStep: string;
  loading: string;
};

const COPY: Record<PayLocale, SuccessCopy> = {
  pt: {
    titlePaid: "Pagamento recebido",
    titleOrder: "Encomenda recebida",
    bodyPaid:
      "Obrigado. Envie o recibo no WhatsApp para confirmarmos o pagamento e ativarmos a conta.",
    bodyOrder:
      "A encomenda está registada. Envie o recibo no WhatsApp para avançarmos com o pagamento ou a ativação.",
    orderLabel: "Encomenda",
    nameLabel: "Nome",
    emailLabel: "Email",
    receiptTitle: "Enviar recibo",
    sendReceipt: "Enviar recibo no WhatsApp",
    footer: "Pode fechar este separador. Não há mais páginas neste ecrã de pagamento.",
    headerBrand: "Pagamento seguro",
    headerStep: "Confirmação",
    loading: "A carregar…",
  },
  es: {
    titlePaid: "Pago recibido",
    titleOrder: "Pedido recibido",
    bodyPaid:
      "Gracias. Envía el recibo por WhatsApp para que confirmemos el pago y activemos la cuenta.",
    bodyOrder:
      "El pedido está registrado. Envía el recibo por WhatsApp para continuar con el pago o la activación.",
    orderLabel: "Pedido",
    nameLabel: "Nombre",
    emailLabel: "Email",
    receiptTitle: "Enviar recibo",
    sendReceipt: "Enviar recibo por WhatsApp",
    footer: "Puedes cerrar esta pestaña. No hay más páginas en esta pantalla de pago.",
    headerBrand: "Pago seguro",
    headerStep: "Confirmación",
    loading: "Cargando…",
  },
  fr: {
    titlePaid: "Paiement reçu",
    titleOrder: "Commande reçue",
    bodyPaid:
      "Merci. Envoyez le reçu sur WhatsApp pour que nous confirmions le paiement et activions le compte.",
    bodyOrder:
      "La commande est enregistrée. Envoyez le reçu sur WhatsApp pour poursuivre le paiement ou l’activation.",
    orderLabel: "Commande",
    nameLabel: "Nom",
    emailLabel: "Email",
    receiptTitle: "Envoyer le reçu",
    sendReceipt: "Envoyer le reçu sur WhatsApp",
    footer: "Vous pouvez fermer cet onglet. Aucune autre page sur cet écran de paiement.",
    headerBrand: "Paiement sécurisé",
    headerStep: "Confirmation",
    loading: "Chargement…",
  },
  nl: {
    titlePaid: "Betaling ontvangen",
    titleOrder: "Bestelling ontvangen",
    bodyPaid:
      "Bedankt. Stuur het betalingsbewijs via WhatsApp zodat we de betaling kunnen bevestigen en je account activeren.",
    bodyOrder:
      "Je bestelling is geregistreerd. Stuur het bewijs via WhatsApp om door te gaan met betalen of activatie.",
    orderLabel: "Bestelling",
    nameLabel: "Naam",
    emailLabel: "E-mail",
    receiptTitle: "Bewijs sturen",
    sendReceipt: "Bewijs sturen via WhatsApp",
    footer: "Je kunt dit tabblad sluiten. Er is niets meer te bekijken op dit betaalscherm.",
    headerBrand: "Veilig betalen",
    headerStep: "Bevestiging",
    loading: "Laden…",
  },
  en: {
    titlePaid: "Payment received",
    titleOrder: "Order received",
    bodyPaid:
      "Thanks. Send the receipt on WhatsApp so we can confirm payment and activate your account.",
    bodyOrder:
      "Your order is registered. Send the receipt on WhatsApp to continue with payment or activation.",
    orderLabel: "Order",
    nameLabel: "Name",
    emailLabel: "Email",
    receiptTitle: "Send receipt",
    sendReceipt: "Send receipt on WhatsApp",
    footer: "You can close this tab. There is nothing else to browse on this payment page.",
    headerBrand: "Secure checkout",
    headerStep: "Confirmation",
    loading: "Loading…",
  },
};

export function getSuccessCopy(lang: PayLocale): SuccessCopy {
  return COPY[lang] || COPY.en;
}

/** Prefill: customer telling you they paid (receipt), not a generic support ask. */
export function buildReceiptWhatsAppMessage(
  lang: PayLocale,
  input: {
    order: string;
    planName: string;
    priceLabel: string;
    connections: number;
    name: string;
    email: string;
    paid: boolean;
  },
): string {
  const lines: string[] = [];

  if (lang === "pt") {
    lines.push(input.paid ? "Olá, já paguei ✅" : "Olá, fiz uma encomenda no site.");
    lines.push("");
    lines.push("Recibo:");
  } else if (lang === "es") {
    lines.push(input.paid ? "Hola, ya he pagado ✅" : "Hola, he hecho un pedido en el sitio.");
    lines.push("");
    lines.push("Recibo:");
  } else if (lang === "fr") {
    lines.push(input.paid ? "Bonjour, j’ai déjà payé ✅" : "Bonjour, j’ai passé une commande sur le site.");
    lines.push("");
    lines.push("Reçu :");
  } else if (lang === "nl") {
    lines.push(input.paid ? "Hoi, ik heb al betaald ✅" : "Hoi, ik heb een bestelling geplaatst op de site.");
    lines.push("");
    lines.push("Bewijs:");
  } else {
    lines.push(input.paid ? "Hi, I already paid ✅" : "Hi, I placed an order on the site.");
    lines.push("");
    lines.push("Receipt:");
  }

  lines.push(`• ${label(lang, "order")}: #${input.order}`);
  lines.push(`• ${label(lang, "plan")}: ${input.planName}`);
  lines.push(`• ${label(lang, "connections")}: ${input.connections}`);
  lines.push(`• ${label(lang, "price")}: ${input.priceLabel}`);
  if (input.name) lines.push(`• ${label(lang, "name")}: ${input.name}`);
  if (input.email) lines.push(`• ${label(lang, "email")}: ${input.email}`);
  lines.push("");
  lines.push(activateLine(lang));

  return lines.join("\n");
}

function label(
  lang: PayLocale,
  key: "order" | "plan" | "connections" | "price" | "name" | "email",
): string {
  const map: Record<PayLocale, Record<typeof key, string>> = {
    pt: {
      order: "Encomenda",
      plan: "Plano",
      connections: "Ligações",
      price: "Preço",
      name: "Nome",
      email: "Email",
    },
    es: {
      order: "Pedido",
      plan: "Plan",
      connections: "Conexiones",
      price: "Precio",
      name: "Nombre",
      email: "Email",
    },
    fr: {
      order: "Commande",
      plan: "Forfait",
      connections: "Connexions",
      price: "Prix",
      name: "Nom",
      email: "Email",
    },
    nl: {
      order: "Bestelling",
      plan: "Abonnement",
      connections: "Verbindingen",
      price: "Prijs",
      name: "Naam",
      email: "E-mail",
    },
    en: {
      order: "Order",
      plan: "Plan",
      connections: "Connections",
      price: "Price",
      name: "Name",
      email: "Email",
    },
  };
  return map[lang][key];
}

function activateLine(lang: PayLocale): string {
  switch (lang) {
    case "pt":
      return "Por favor, confirmem o pagamento e enviem os dados de ativação.";
    case "es":
      return "Por favor, confirmen el pago y envíen los datos de activación.";
    case "fr":
      return "Merci de confirmer le paiement et d’envoyer les identifiants d’activation.";
    case "nl":
      return "Bevestig alstublieft de betaling en stuur de activatiegegevens.";
    default:
      return "Please confirm the payment and send the activation details.";
  }
}
