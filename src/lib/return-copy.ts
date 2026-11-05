import type { PayLocale } from "@/lib/payment-handoff";

export type ReturnCopy = {
  title: string;
  body: string;
  completePayment: string;
  backToPrices: string;
  needHelp: string;
  whatsapp: string;
  whatsappMessage: string;
  footer: string;
  headerBrand: string;
  headerStep: string;
};

const COPY: Record<PayLocale, ReturnCopy> = {
  pt: {
    title: "Pagamento não concluído",
    body: "Saiu da página de pagamento. Pode concluir o pagamento agora ou voltar aos preços da loja onde começou.",
    completePayment: "Concluir pagamento",
    backToPrices: "Voltar aos preços",
    needHelp: "Precisa de ajuda?",
    whatsapp: "Suporte WhatsApp",
    whatsappMessage: "Olá, preciso de ajuda com o meu pagamento / encomenda.",
    footer: "Apenas estado do pagamento — sem catálogo de produtos.",
    headerBrand: "Pagamento seguro",
    headerStep: "Pagamento",
  },
  es: {
    title: "Pago no completado",
    body: "Has salido de la página de pago. Puedes completar el pago ahora o volver a los precios de la tienda donde empezaste.",
    completePayment: "Completar pago",
    backToPrices: "Volver a precios",
    needHelp: "¿Necesitas ayuda?",
    whatsapp: "Soporte WhatsApp",
    whatsappMessage: "Hola, necesito ayuda con mi pago / pedido.",
    footer: "Solo estado del pago — sin catálogo de productos.",
    headerBrand: "Pago seguro",
    headerStep: "Pago",
  },
  fr: {
    title: "Paiement non terminé",
    body: "Vous avez quitté la page de paiement. Vous pouvez finaliser le paiement maintenant ou revenir aux tarifs de la boutique où vous avez commencé.",
    completePayment: "Finaliser le paiement",
    backToPrices: "Retour aux tarifs",
    needHelp: "Besoin d’aide ?",
    whatsapp: "Support WhatsApp",
    whatsappMessage: "Bonjour, j’ai besoin d’aide pour mon paiement / commande.",
    footer: "Statut du paiement uniquement — aucun catalogue.",
    headerBrand: "Paiement sécurisé",
    headerStep: "Paiement",
  },
  nl: {
    title: "Betaling niet voltooid",
    body: "Je hebt de betaalpagina verlaten. Je kunt de betaling nu afronden of terugkeren naar de prijzen van de winkel waar je begon.",
    completePayment: "Betaling afronden",
    backToPrices: "Terug naar prijzen",
    needHelp: "Hulp nodig?",
    whatsapp: "WhatsApp-support",
    whatsappMessage: "Hoi, ik heb hulp nodig bij mijn betaling / bestelling.",
    footer: "Alleen betaalstatus — geen productcatalogus.",
    headerBrand: "Veilig betalen",
    headerStep: "Betaling",
  },
  en: {
    title: "Payment not completed",
    body: "You left the payment page. You can complete payment now or go back to prices on the store where you started.",
    completePayment: "Complete payment",
    backToPrices: "Back to prices",
    needHelp: "Need help?",
    whatsapp: "WhatsApp support",
    whatsappMessage: "Hi, I need help with my payment / order.",
    footer: "Payment status only — no product catalog on this page.",
    headerBrand: "Secure checkout",
    headerStep: "Payment",
  },
};

export function getReturnCopy(lang: PayLocale): ReturnCopy {
  return COPY[lang] || COPY.en;
}
