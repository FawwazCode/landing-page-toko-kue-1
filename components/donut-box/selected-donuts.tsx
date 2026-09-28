import { getProductById } from "@/data/products";
import { SelectedDonut } from "@/types/donut-box";
import { formatPrice } from "@/lib/format-price";

interface SelectedDonutsProps {
  selectedDonuts: SelectedDonut[];
}

export function SelectedDonuts({
  selectedDonuts,
}: SelectedDonutsProps) {
  if (selectedDonuts.length === 0) {
    return (
      <p className="text-sm text-[#897b72]">
        Your selection is empty. Choose your favorite cakes below.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {selectedDonuts.map((item) => {
        const product = getProductById(item.productId);

        if (!product) return null;

        return (
          <div
            key={item.productId}
            className="flex items-center justify-between gap-4 text-sm"
          >
            <div>
              <span className="font-medium text-[#30231e]">
                {product.name}
              </span>

              <span className="ml-2 text-[#897b72]">
                × {item.quantity}
              </span>
            </div>

            <span className="font-semibold text-[#6f4938]">
              {formatPrice(product.price * item.quantity)}
            </span>
          </div>
        );
      })}
    </div>
  );
}