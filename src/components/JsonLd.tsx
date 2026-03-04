export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://imagine-school.org/#organization",
        name: "Imagine School",
        url: "https://imagine-school.org",
        logo: "https://imagine-school.org/favicon.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+380966814451",
          contactType: "customer service",
        },
        sameAs: ["https://imagine-decor.com.ua"],
      },
      {
        "@type": "Course",
        "@id": "https://imagine-school.org/#course",
        name: "Майстер Декоратор — курс декоративної штукатурки",
        description:
          "Онлайн-курс з декоративної штукатурки. 8 розділів, 17 уроків, понад 10 годин відео. Декоративна штукатурка, венеціанська штукатурка, фактурні покриття — навчання з нуля від майстрів Imagine Decor.",
        url: "https://imagine-school.org/uk",
        provider: {
          "@type": "Organization",
          "@id": "https://imagine-school.org/#organization",
        },
        educationalLevel: "Beginner",
        courseMode: "online",
        inLanguage: ["uk", "ru"],
        offers: {
          "@type": "Offer",
          price: "4900",
          priceCurrency: "UAH",
          availability: "https://schema.org/InStock",
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "online",
          courseWorkload: "PT10H",
        },
        about: [
          { "@type": "Thing", name: "декоративна штукатурка" },
          { "@type": "Thing", name: "венеціанська штукатурка" },
          { "@type": "Thing", name: "фактурні покриття" },
          { "@type": "Thing", name: "оздоблення стін" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://imagine-school.org/#website",
        url: "https://imagine-school.org",
        name: "Imagine School",
        publisher: {
          "@type": "Organization",
          "@id": "https://imagine-school.org/#organization",
        },
        inLanguage: ["uk", "ru", "en"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
