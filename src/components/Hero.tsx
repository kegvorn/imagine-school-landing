import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,168,78,0.08)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-block px-5 py-2.5 mb-10 text-sm font-semibold tracking-widest uppercase text-gold border border-gold/30 rounded-full">
          {t("badge")}
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
          {t("title")}
        </h1>

        <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto mb-12">
          {t("subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#course"
            className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-light text-dark font-bold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,168,78,0.3)] text-center"
          >
            {t("ctaLearn")}
          </a>
          <a
            href="#pricing"
            className="w-full sm:w-auto px-8 py-4 border-2 border-gold text-gold hover:bg-gold/10 font-bold rounded-lg transition-all duration-300 text-center"
          >
            {t("ctaEnroll")}
          </a>
        </div>

        <div className="mt-20 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
