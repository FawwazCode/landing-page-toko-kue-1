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
          className="w-full rounded-2xl border border-[#dfd2c9] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#6f4938]"
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
            className={`rounded-2xl border px-4 py-3 text-sm font-semibold ${
              value.orderType === "pickup"
                ? "border-[#6f4938] bg-[#f3e4d5]"
                : "border-[#dfd2c9] bg-white"
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
            className={`rounded-2xl border px-4 py-3 text-sm font-semibold ${
              value.orderType === "delivery"
                ? "border-[#6f4938] bg-[#f3e4d5]"
                : "border-[#dfd2c9] bg-white"
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
          className="w-full resize-none rounded-2xl border border-[#dfd2c9] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#6f4938]"
        />
      </div>
    </div>
  );
}