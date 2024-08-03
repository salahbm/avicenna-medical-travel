"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import useTranslation from "@/hooks/useTranslation";

const LanguageSelector = () => {
  const t = useTranslations();
  const { locales, currentLocale, handleLocale } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const flags: Record<string, string> = {
    en: "🇺🇸",
    ru: "🇷🇺",
    uz: "🇺🇿",
  };

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (locale: string) => {
    handleLocale(locale);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button onClick={handleSelectClick} className="flex w-8 items-center">
        {isOpen ? (
          <p className="ml-3 text-2xl text-red-500">X</p>
        ) : (
          <>
            <span className="mr-1">{flags[currentLocale]}</span>
            <span className="uppercase">{currentLocale}</span>
          </>
        )}
      </button>
      {isOpen && (
        <div className="absolute -right-8 mt-2 w-48 transform rounded border border-gray-300 bg-white shadow-lg  transition duration-500 dark:bg-black">
          {locales.map((locale) => {
            const isActive = locale === currentLocale;

            return (
              <div
                key={locale}
                onClick={() => handleOptionClick(locale)}
                className={`${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-900 dark:text-gray-100"
                }
                  'cursor-pointer hover:bg-gray-100' px-4 py-2`}
              >
                <span className="mr-2">{flags[locale]}</span>
                {t(`Header.languages.${locale}`)}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
