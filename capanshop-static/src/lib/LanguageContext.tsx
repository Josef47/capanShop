import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Lang } from "./types";
import { translate } from "./i18n";

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextValue>({
  lang: "nl",
  setLang: () => {},
  t: (k) => k,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("nl");

  useEffect(() => {
    const saved = window.localStorage.getItem("capan_lang");
    if (saved === "en" || saved === "nl") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("capan_lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: (k) => translate(k, lang) }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
