import { getProductById } from "@/data/products";
import { formatPrice } from "./format-price";
import { CustomerInfo } from "@/types/order";
import { SelectedDonut } from "@/types/donut-box";
import { Product } from "@/types/product";

const WHATSAPP_NUMBER = "+6285939859097";

interface GenerateMessageParams {
  boxSize: number;
  selectedDonuts: SelectedDonut[];
  customer: CustomerInfo;
  total: number;
}

export function generateWhatsAppMessage({
  boxSize,
  selectedDonuts,
  customer,
  total,
}: GenerateMessageParams) {
  const cakeLines = selectedDonuts
    .map((item) => {
      const product = getProductById(item.productId);

      if (!product) return null;

      return `• ${product.name} × ${item.quantity}`;
    })
    .filter(Boolean)
    .join("\n");

  return `Halo Toko Kue! 👋

Saya ingin memesan pilihan cake berikut:

Pilihan cake - ${boxSize} pcs

${cakeLines}

Total: ${formatPrice(total)}

Nama: ${customer.name}
Tipe Order: ${
    customer.orderType === "pickup" ? "Pickup" : "Delivery"
  }

Catatan:
${customer.note || "-"}

Mohon konfirmasi pesanan saya.

Terima kasih!`;
}

export function generateSingleProductWhatsAppUrl(
  product: Product,
  quantity: number
) {
  const message = `Halo Sunqiest! 👋

Saya ingin memesan:

🍰 ${product.name} x${quantity}

Total: ${formatPrice(product.price * quantity)}

Mohon konfirmasi pesanan saya. Terima kasih!`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function generateWhatsAppUrl(params: GenerateMessageParams) {
  const message = generateWhatsAppMessage(params);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}