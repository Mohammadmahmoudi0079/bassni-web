import React from "react";

const AppInfo: React.FC = () => {
  return (
    <section className="bg-linear-to-r from-indigo-500 to-purple-600 text-white p-10 rounded-3xl shadow-xl transform transition hover:scale-105 hover:shadow-2xl animate-fadeInUp">
      <h2 className="text-3xl font-bold mb-4">About Bassni</h2>
      <p className="mb-2 text-lg">
        Organize your wardrobe, plan outfits, and get smart recommendations
        based on weather, occasion, and style.
      </p>
      <p className="text-lg">
        Never run out of ideas on what to wear. Bassni makes fashion fun and
        stress-free.
      </p>
    </section>
  );
};

export default AppInfo;
