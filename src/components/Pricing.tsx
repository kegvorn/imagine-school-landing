import { useTranslations } from "next-intl";
import YouTubeEmbed from "./YouTubeEmbed";

export default function Pricing() {
  const t = useTranslations("pricing");

  return (
    <section id="pricing" className="py-20 md:py-28 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(200,168,78,0.06)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold tracking-wider uppercase text-sm mb-4">
            {t("preTitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            {t("title")}
          </h2>
          <p className="text-text-muted">
            {t("programName")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <p className="text-sm font-semibold tracking-wider uppercase text-gold mb-4">
              {t("videoTitle")}
            </p>
            <YouTubeEmbed videoId="JXIjc9hzUYM" title={t("videoTitle")} />
          </div>

          <div className="flex justify-center">
            <div className="p-8 md:p-12 rounded-3xl bg-dark-card border border-gold/20 shadow-[0_0_60px_rgba(200,168,78,0.08)] text-center">
              <div className="mb-6">
                <span className="text-5xl md:text-7xl font-bold text-gold">
                  {t("price")}
                </span>
                <span className="text-2xl md:text-3xl text-text-muted ml-2">
                  {t("currency")}
                </span>
              </div>

              <a
                href="https://imagine-school.tilda.ws/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-gold hover:bg-gold-light text-dark font-bold text-lg rounded-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(200,168,78,0.4)] hover:scale-105"
              >
                {t("cta")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
