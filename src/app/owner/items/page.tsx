"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/src/lib/api";
type Item = {
  id: number;
  companyName: string;
  originCountry: string;
  clothingCategory: string;
  clothingType: string;
  itemURL?: string;
  imageURL?: string;
  gender?: "m" | "f" | "u";
  design?: string;
  selectedColors: string[];
  createdAt: string;
};

export default function OwnerItemsPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadItems() {
      try {
        const data = await apiFetch("/owner/items");
        setItems(data.items);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadItems();
  }, []);

  if (loading) return <p>Loading items...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  if (items.length === 0) return <p>No items added yet.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">My Items</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 shadow-sm"
          >
            {item.imageURL && (
              <img
                src={item.imageURL}
                alt={item.clothingType}
                className="w-full h-48 object-cover rounded mb-3"
              />
            )}

            <h2 className="font-semibold text-lg">
              {item.clothingType}
            </h2>

            <p className="text-sm text-gray-600">
              {item.clothingCategory} • {item.gender}
            </p>

            <p className="text-sm">
              Design: {item.design || "-"}
            </p>

            <p className="text-sm">
              Origin: {item.originCountry}
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {item.selectedColors.map((color) => (
                <span
                  key={color}
                  className="text-xs px-2 py-1 border rounded"
                >
                  {color}
                </span>
              ))}
            </div>

            {item.itemURL && (
              <a
                href={item.itemURL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 text-sm mt-3"
              >
                View Item
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
