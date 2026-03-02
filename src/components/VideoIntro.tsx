import { useTranslations } from "next-intl";
import YouTubeEmbed from "./YouTubeEmbed";

export default function VideoIntro() {
  const t = useTranslations("videoIntro");

  return (
    <section className="py-20 md:py-28 bg-dark-lighter">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 max-w-3xl mx-auto">
          {t("title")}
        </h2>

        <div className="max-w-3xl mx-auto">
          <YouTubeEmbed videoId="47DG_qW76kY" title="Imagine School" />
        </div>
      </div>
    </section>
  );
}
