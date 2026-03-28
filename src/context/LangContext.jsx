import { useState } from "react";
import { LangContext } from "./langContextInstance";
import { translations } from "../i18n/translations";

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(
    () => localStorage.getItem("nicory_lang") || "en"
  );

  const toggleLang = () =>
    setLang((current) => {
      const next = current === "en" ? "pt" : "en";
      localStorage.setItem("nicory_lang", next);
      return next;
    });

  const t = (section, key) => translations[lang]?.[section]?.[key] ?? key;

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
};
