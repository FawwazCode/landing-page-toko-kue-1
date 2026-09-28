"use client";

import { useState } from "react";
import { useDonutBox } from "@/hooks/use-donut-box";
import { CustomerInfo } from "@/types/order";
import { BoxSizeSelector } from "./box-size-selector";
import { DonutSelector } from "./donut-selector";
import { CustomerForm } from "./customer-form";
import { OrderSummary } from "./order-summary";

export function DonutBoxBuilder() {
  const {
    boxSize,
    setBoxSize,
    selectedDonuts,
    selectedCount,
    addDonut,
    removeDonut,
    total,
  } = useDonutBox();

  const [customer, setCustomer] = useState<CustomerInfo>({
    name: "",
    orderType: "pickup",
    note: "",
  });

  const handleBoxSizeChange = (size: number) => {
    setBoxSize(size);
  };

  return (
    <section
      id="cake-selection"
      className="bg-[#f7f1eb] py-16 md:py-20 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a6b52]">
            Create your cake selection
          </p>

          <h2 className="mt-3 font-serif text-5xl font-bold leading-tight text-[#35241e]">
            A little cake for every sweet moment.
          </h2>

          <p className="mt-5 leading-8 text-[#75675f]">
            Choose a box size, then fill it with your favorite cake slices
            to share or enjoy at home.
          </p>
        </div>

        <div className="mt-10 grid gap-y-8 gap-x-10 lg:grid-cols-[1fr_380px] lg:gap-y-10">
          <div className="space-y-8">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-serif text-2xl font-bold text-[#30231e]">
                  01. Choose your box
                </h3>
              </div>

              <BoxSizeSelector
                value={boxSize}
                onChange={handleBoxSizeChange}
              />
            </div>

            <div>
              <div className="mb-4 flex items-end justify-between">
                <h3 className="font-serif text-2xl font-bold text-[#30231e]">
                  02. Choose your cakes
                </h3>

                <span className="text-sm text-[#897b72]">
                  {selectedCount}/{boxSize}
                </span>
              </div>

              <DonutSelector
                selectedDonuts={selectedDonuts}
                selectedCount={selectedCount}
                boxSize={boxSize}
                onAdd={addDonut}
                onRemove={removeDonut}
              />
            </div>

            <div>
              <h3 className="mb-4 font-serif text-2xl font-bold text-[#30231e]">
                03. Your information
              </h3>

              <div className="rounded-[2rem] border border-[#e3d7ce] bg-white p-6">
                <CustomerForm
                  value={customer}
                  onChange={setCustomer}
                />
              </div>
            </div>
          </div>

          <OrderSummary
            boxSize={boxSize}
            selectedCount={selectedCount}
            selectedDonuts={selectedDonuts}
            customer={customer}
            total={total}
          />
        </div>
      </div>
    </section>
  );
}