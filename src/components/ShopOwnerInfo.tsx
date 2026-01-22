import React from "react";

const ShopOwnerInfo: React.FC = () => {
  return (
    <section className="bg-white p-10 rounded-3xl shadow-xl border-l-8 border-pink-500 transform transition hover:scale-105 hover:shadow-2xl animate-fadeInUp">
      <h2 className="text-3xl font-bold mb-4 text-pink-500">For Shop Owners</h2>
      <p className="mb-2 text-gray-700 text-lg">
        Showcase your products to a fashion-savvy audience actively planning
        outfits.
      </p>
      <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
        <li>Create stunning product listings with images & details</li>
        <li>Reach users in the right moment to boost sales</li>
        <li>Get analytics on engagement and trends</li>
      </ul>
    </section>
  );
};

export default ShopOwnerInfo;
