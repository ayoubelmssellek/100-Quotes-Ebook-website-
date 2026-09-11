import emailjs from "@emailjs/browser";
import {
  getProductById,
  getProductTypeLabel,
} from "@/features/products/data/catalog";
import { ORDER_EMAIL } from "@/lib/site";

function createOrderId(): string {
  const time = Date.now().toString(36).toUpperCase();
  const random =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID().slice(0, 8).toUpperCase()
      : Math.random().toString(36).slice(2, 10).toUpperCase();
  return `MH-${time}-${random}`;
}

export async function sendProductOrder(productId: string): Promise<void> {
  const product = getProductById(productId);
  if (!product || product.status !== "available") {
    throw new Error("This product is not available to order.");
  }

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim() ?? "";
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim() ?? "";
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim() ?? "";

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("Order email is not configured yet.");
  }

  const plan = getProductTypeLabel(product.type);
  const price = product.pricing.price;
  const orderId = createOrderId();
  const orderedAt = new Date();
  const orderDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
  }).format(orderedAt);

  const message = `New order request

Order ID: ${orderId}
Product: ${product.title}
Plan: ${plan}
Price: €${price.toFixed(2)} EUR
Order date: ${orderDate} UTC

Send payment instructions to the customer.

Order recipient: ${ORDER_EMAIL}`;

  await emailjs.send(
    serviceId,
    templateId,
    {
      to_email: ORDER_EMAIL,
      order_id: orderId,
      product_name: product.title,
      plan,
      price: `€${price.toFixed(2)} EUR`,
      order_date: `${orderDate} UTC`,
      message,
    },
    { publicKey },
  );
}
