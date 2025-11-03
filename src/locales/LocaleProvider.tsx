"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import en from "@/locales/en.json";
import az from "@/locales/az.json";
import ru from "@/locales/ru.json";

type Locale = "en" | "az" | "ru";

interface LocaleContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: string) => string;
}

const messages: Record<Locale, Record<string, string>> = { en, az, ru };

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
    const [locale, setLocale] = useState<Locale>("en");

    const t = (key: string) => messages[locale][key] || key;

    return (
        <LocaleContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LocaleContext.Provider>
    );
};

export const useLocale = () => {
    const context = useContext(LocaleContext);
    if (!context) throw new Error("useLocale must be used within LocaleProvider");
    return context;
};
