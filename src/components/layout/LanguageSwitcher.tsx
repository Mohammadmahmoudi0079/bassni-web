"use client";
import { useChangeLocale, useCurrentLocale } from "@/src/locales/client";

export function LanguageSwitcher() {
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale(); // reactive

  const toggleLocale = () => {
    const newLocale = currentLocale === "en" ? "tr" : "en";
    changeLocale(newLocale);
    document.documentElement.lang = newLocale;
    localStorage.setItem("locale", newLocale);
  };

  return (
    <button onClick={toggleLocale}>
      {currentLocale?.toUpperCase() || "EN"}
    </button>
  );
}
