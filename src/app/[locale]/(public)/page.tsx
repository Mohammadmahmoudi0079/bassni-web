import React from "react";
import AppInfo from "@/src/components/AppInfo";
import ShopOwnerInfo from "@/src/components/ShopOwnerInfo";
import PricingInfo from "@/src/components/PricingInfo";

export default function Home() {
  return (
    <main className="space-y-20"> 
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center bg-linear-to-r from-purple-500 via-pink-500 to-red-500 text-white overflow-hidden">
        <h1 className="text-6xl font-extrabold animate-pulse">Bassni</h1>
        <p className="mt-4 text-2xl animate-fadeIn">Smart wardrobe & outfit planning</p>
        <button className="mt-8 px-8 py-4 bg-white text-purple-600 font-bold rounded-full shadow-lg transform transition hover:scale-105 hover:shadow-2xl">
          Get Started
        </button>
        {/* Decorative floating circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full animate-bounceSlow"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white opacity-10 rounded-full animate-bounceSlow"></div>
      </section>

      {/* Sections */}
      <section className="px-10 space-y-16">
        <AppInfo />
        <ShopOwnerInfo />
        <PricingInfo />
      </section>
    </main>
  );
}