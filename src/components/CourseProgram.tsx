"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type SectionConfig = {
  key: string;
  itemCount: number;
  hasSubtitle: boolean;
};

const sections: SectionConfig[] = [
  { key: "section1", itemCount: 4, hasSubtitle: false },
  { key: "section2", itemCount: 3, hasSubtitle: true },
  { key: "section3", itemCount: 3, hasSubtitle: false },
  { key: "section4", itemCount: 2, hasSubtitle: false },
];

export default function CourseProgram() {
  const t = useTranslations("courseProgram");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="program" className="py-20 md:py-28 bg-dark-lighter">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="space-y-4">
          {sections.map((section, index) => {
            const isOpen = openIndex === index;
            const items = Array.from({ length: section.itemCount }, (_, i) =>
              t(`${section.key}.item${i + 1}`)
            );

            return (
              <div
                key={section.key}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-dark-card border-gold/30 shadow-[0_5px_30px_rgba(200,168,78,0.08)]"
                    : "bg-dark-card/50 border-dark-border hover:border-dark-border/80"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                >
                  <h3 className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? "text-gold" : ""}`}>
                    {t(`${section.key}.title`)}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gold shrink-0 ml-4 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    {section.hasSubtitle && (
                      <p className="text-gold/80 text-sm font-medium mb-4">
                        {t(`${section.key}.subtitle`)}
                      </p>
                    )}
                    <ul className="space-y-3">
                      {items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-text-muted">
                          <span className="w-6 h-6 rounded-full bg-gold/10 text-gold text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
