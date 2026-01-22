import React from "react";

const PricingInfo: React.FC = () => {
  return (
    <section className="bg-linear-to-r from-yellow-400 to-red-400 text-white p-10 rounded-3xl shadow-xl transform transition hover:scale-105 hover:shadow-2xl animate-fadeInUp">
      <h2 className="text-3xl font-bold mb-4">Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white text-black p-6 rounded-2xl shadow-md hover:scale-105 transition">
          <h3 className="font-bold text-xl mb-2">Basic</h3>
          <p className="mb-2">$0 / month</p>
          <p>Limited product listings</p>
        </div>
        <div className="bg-white text-black p-6 rounded-2xl shadow-md hover:scale-105 transition">
          <h3 className="font-bold text-xl mb-2">Pro</h3>
          <p className="mb-2">$19 / month</p>
          <p>Unlimited products + analytics</p>
        </div>
        <div className="bg-white text-black p-6 rounded-2xl shadow-md hover:scale-105 transition">
          <h3 className="font-bold text-xl mb-2">Premium</h3>
          <p className="mb-2">$49 / month</p>
          <p>Featured listings + priority support</p>
        </div>
      </div>
    </section>
  );
};

export default PricingInfo;
