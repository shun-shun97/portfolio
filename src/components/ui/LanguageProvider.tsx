"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import { profiles, type Language } from "@/data/profile";

const storageKey = "slz-portfolio-language";
const changeEvent = "slz-language-change";
let memoryLanguage: Language = "en";
function getSnapshot(): Language {
  try {
    const saved = window.localStorage.getItem(storageKey);
    return saved === "ja" || saved === "en" ? saved : memoryLanguage;
  } catch { return memoryLanguage; }
}
function subscribe(notify: () => void) {
  window.addEventListener("storage", notify);
  window.addEventListener(changeEvent, notify);
  return () => {
    window.removeEventListener("storage", notify);
    window.removeEventListener(changeEvent, notify);
  };
}
function setLanguage(language: Language) {
  memoryLanguage = language;
  try { window.localStorage.setItem(storageKey, language); } catch { /* Selection still works when storage is unavailable. */ }
  window.dispatchEvent(new Event(changeEvent));
}
const LanguageContext = createContext({ language: "en" as Language, profile: profiles.en, setLanguage });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, () => "en" as Language);
  const profile = profiles[language];
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = profile.seo.title;
    const tags = [
      ['meta[name="description"]', profile.seo.description],
      ['meta[property="og:title"]', profile.seo.title],
      ['meta[property="og:description"]', profile.seo.description],
      ['meta[name="twitter:title"]', profile.seo.title],
      ['meta[name="twitter:description"]', profile.seo.description],
    ];
    tags.forEach(([selector, content]) => document.querySelector(selector)?.setAttribute("content", content));
  }, [language, profile]);
  return <LanguageContext.Provider value={{ language, profile, setLanguage }}>
    <a className="skip-link" href="#main-content">{profile.ui.skip}</a>{children}
  </LanguageContext.Provider>;
}
export function usePortfolio() { return useContext(LanguageContext); }
