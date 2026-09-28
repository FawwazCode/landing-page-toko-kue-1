"use client";

import { CustomerInfo } from "@/types/order";

interface CustomerFormProps {
  value: CustomerInfo;
  onChange: (value: CustomerInfo) => void;
}

export function CustomerForm({
  value,
  onChange,
}: CustomerFormProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#30231e]">
          Nama
        </label>

        <input
          value={value.name}
          onChange={(event) =>
            onChange({
              ...value,
              name: event.target.value,
            })
          }
          placeholder="Nama kamu"
          className="w-full rounded-2xl border border-[#dfd2c9] bg-white px-4 py-3 text-sm outline-none transition-colors duration-200 ease-out hover:border-[#b99a84] focus:border-[#6f4938] focus-visible:ring-2 focus-visible:ring-[#9a6b52]/40"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-[#30231e]">
          Tipe Order
        </label>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() =>
              onChange({
                ...value,
                orderType: "pickup",
              })
            }
            className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/50 focus-visible:ring-offset-2 ${
              value.orderType === "pickup"
                ? "border-[#6f4938] bg-[#f3e4d5] hover:border-[#4c3024] hover:bg-[#ead6c4]"
                : "border-[#dfd2c9] bg-white hover:border-[#9a6b52] hover:bg-[#f1e7df] hover:text-[#6f4938]"
            }`}
          >
            Pickup
          </button>

          <button
            type="button"
            onClick={() =>
              onChange({
                ...value,
                orderType: "delivery",
              })
            }
            className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/50 focus-visible:ring-offset-2 ${
              value.orderType === "delivery"
                ? "border-[#6f4938] bg-[#f3e4d5] hover:border-[#4c3024] hover:bg-[#ead6c4]"
                : "border-[#dfd2c9] bg-white hover:border-[#9a6b52] hover:bg-[#f1e7df] hover:text-[#6f4938]"
            }`}
          >
            Delivery
          </button>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-[#30231e]">
          Catatan
        </label>

        <textarea
          value={value.note}
          onChange={(event) =>
            onChange({
              ...value,
              note: event.target.value,
            })
          }
          placeholder="Contoh: Mohon dikemas dengan hati-hati..."
          rows={4}
          className="w-full resize-none rounded-2xl border border-[#dfd2c9] bg-white px-4 py-3 text-sm outline-none transition-colors duration-200 ease-out hover:border-[#b99a84] focus:border-[#6f4938] focus-visible:ring-2 focus-visible:ring-[#9a6b52]/40"
        />
      </div>
    </div>
  );
}