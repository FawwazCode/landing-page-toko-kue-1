"use client";

import { useMemo, useState } from "react";
import { getProductById } from "@/data/products";
import { SelectedDonut } from "@/types/donut-box";

export function useDonutBox() {
  const [boxSize, setBoxSize] = useState(6);
  const [selectedDonuts, setSelectedDonuts] = useState<SelectedDonut[]>(
    []
  );

  const selectedCount = useMemo(() => {
    return selectedDonuts.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }, [selectedDonuts]);

  const addDonut = (productId: string) => {
    if (selectedCount >= boxSize) return;

    setSelectedDonuts((current) => {
      const existing = current.find(
        (item) => item.productId === productId
      );

      if (existing) {
        return current.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...current,
        {
          productId,
          quantity: 1,
        },
      ];
    });
  };

  const removeDonut = (productId: string) => {
    setSelectedDonuts((current) => {
      const existing = current.find(
        (item) => item.productId === productId
      );

      if (!existing) return current;

      if (existing.quantity === 1) {
        return current.filter(
          (item) => item.productId !== productId
        );
      }

      return current.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  const clearBox = () => {
    setSelectedDonuts([]);
  };

  const total = useMemo(() => {
    return selectedDonuts.reduce((sum, item) => {
      const product = getProductById(item.productId);

      if (!product) return sum;

      return sum + product.price * item.quantity;
    }, 0);
  }, [selectedDonuts]);

  return {
    boxSize,
    setBoxSize,
    selectedDonuts,
    selectedCount,
    addDonut,
    removeDonut,
    clearBox,
    total,
    isComplete: selectedCount === boxSize,
  };
}