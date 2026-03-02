"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const localeLabels: Record<string, string> = {
  uk: "UA",
  ru: "RU",
  en: "EN",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function handleChange(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex items-center gap-1">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleChange(loc)}
          className={`px-2 py-1 text-sm font-medium rounded transition-colors cursor-pointer ${
            locale === loc
              ? "bg-gold text-dark"
              : "text-text-muted hover:text-text-primary"
          }`}
        >
          {localeLabels[loc]}
        </button>
      ))}
    </div>
  );
}
