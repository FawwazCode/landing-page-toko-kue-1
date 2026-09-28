"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SelectedDonut } from "@/types/donut-box";
import { CustomerInfo } from "@/types/order";
import { SelectedDonuts } from "./selected-donuts";
import { formatPrice } from "@/lib/format-price";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

interface OrderSummaryProps {
  boxSize: number;
  selectedCount: number;
  selectedDonuts: SelectedDonut[];
  customer: CustomerInfo;
  total: number;
}

export function OrderSummary({
  boxSize,
  selectedCount,
  selectedDonuts,
  customer,
  total,
}: OrderSummaryProps) {
  const isComplete =
    selectedCount === boxSize && customer.name.trim().length > 0;

  const handleWhatsApp = () => {
    if (!isComplete) return;

    const url = generateWhatsAppUrl({
      boxSize,
      selectedDonuts,
      customer,
      total,
    });

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="sticky top-24 rounded-[2rem] bg-[#f7f1eb] p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6f4938] text-white">
          <ShoppingBag size={18} />
        </div>

        <div>
          <h3 className="font-serif text-2xl font-bold text-[#30231e]">
            Your Selection
          </h3>

          <p className="text-xs text-[#897b72]">
            {selectedCount} / {boxSize} cake slices selected
          </p>
        </div>
      </div>

      <div className="my-6 border-t border-[#e2d4ca]" />

      <SelectedDonuts selectedDonuts={selectedDonuts} />

      <div className="my-6 border-t border-[#e2d4ca]" />

      <div className="flex items-center justify-between">
        <span className="text-sm text-[#75675f]">
          Total
        </span>

        <span className="font-serif text-2xl font-bold text-[#6f4938]">
          {formatPrice(total)}
        </span>
      </div>

      <div className="mt-5">
        <Button
          onClick={handleWhatsApp}
          className="w-full"
          disabled={!isComplete}
        >
          Order via WhatsApp
        </Button>
      </div>

      {!isComplete && (
        <p className="mt-3 text-center text-xs leading-5 text-[#897b72]">
          {selectedCount !== boxSize
            ? `Pilih ${boxSize - selectedCount} cake lagi.`
            : "Isi nama sebelum melakukan order."}
        </p>
      )}
    </div>
  );
}