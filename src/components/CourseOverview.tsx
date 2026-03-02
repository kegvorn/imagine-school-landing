import { useTranslations } from "next-intl";

const statIcons = [
  <svg key="format" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
  <svg key="volume" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
  <svg key="speakers" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  <svg key="start" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
];

const statKeys = ["format", "volume", "speakers", "start"] as const;

export default function CourseOverview() {
  const t = useTranslations("courseOverview");

  return (
    <section id="course" className="py-20 md:py-28 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statKeys.map((key, index) => (
            <div
              key={key}
              className="relative p-6 rounded-2xl bg-dark-lighter border border-dark-border text-center group hover:border-gold/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                {statIcons[index]}
              </div>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-gold mb-2">
                {t(`${key}.label`)}
              </h3>
              <p className="text-text-primary font-medium">
                {t(`${key}.value`)}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <a
            href="#program"
            className="px-8 py-4 bg-gold hover:bg-gold-light text-dark font-bold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,168,78,0.3)]"
          >
            {t("ctaLearn")}
          </a>
          <a
            href="#pricing"
            className="px-8 py-4 border-2 border-gold text-gold hover:bg-gold/10 font-bold rounded-lg transition-all duration-300"
          >
            {t("ctaEnroll")}
          </a>
        </div>
      </div>
    </section>
  );
}
