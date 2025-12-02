"use client";
import { useParams } from "next/navigation";
import { useLocale } from "@/locales/LocaleProvider";
import { ICONS, serviceCardKeys, urlToKey } from './serviceData';
import Head from "next/head";

export default function ServiceDetailPage() {
  const { service } = useParams();
  const { locale, t } = useLocale();

  const serviceParam = service?.toString();
  const key = serviceParam ? urlToKey[serviceParam] : undefined;

  if (!key) return <p className="text-center mt-10">{t("service.notFound")}</p>;

  const cards = serviceCardKeys[key];

  const title = t(`services.${key}.title`);
  const subtitle = t(`services.${key}.subtitle`);
  const description = t(`services.${key}.description`);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Sizin Şirkət",
      "url": "https://www.baincon.az"
    }
  };


  return (
    <>
      <Head>
        <title>{title} | Baincon</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${title}, ${subtitle}, xidmət`} />
        <link
          rel="canonical"
          href={`https://www.baincon.az/services/${serviceParam}`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold mb-2">{t(`services.${key}.title`)}</h1>
        <h2 className="text-xl text-orange-500 font-semibold mb-6">
          {t(`services.${key}.subtitle`)}
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          {t(`services.${key}.description`)}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="border rounded-2xl shadow-sm p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center gap-4 mb-4">
                {card.icons.map((iconKey, idx) => (
                  <div key={idx}>{ICONS[iconKey]}</div>
                ))}
              </div>

              <h3 className="text-lg font-bold mb-3">{t(card.title)}</h3>
              <p className="text-gray-600 text-sm mb-4">{t(card.text)}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
