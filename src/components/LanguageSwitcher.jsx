import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-2 py-1 rounded ${i18n.language === "en" ? "bg-indigo-500 text-white" : "bg-neutral-200 text-black"}`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("es")}
        className={`px-2 py-1 rounded ${i18n.language === "es" ? "bg-indigo-500 text-white" : "bg-neutral-200 text-black"}`}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;
