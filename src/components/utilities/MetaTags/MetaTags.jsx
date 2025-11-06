import React from "react";
import { Helmet } from "react-helmet";
import { getMetaConfig } from "../../../config/metaConfig";

const MetaTags = () => {
   const currentDomain = window.location.hostname.split('.');
   const { cityIn, domain } = getMetaConfig(currentDomain[0]);

   return (
      <Helmet>
         <link rel="canonical" href={`https://${domain !== 'reffection' && domain}reffection.ru/`} />
         <title>{`Лидогенерация под ключ для бизнеса ${cityIn} – купить лиды с оплатой за результат | Reffectionn`}</title>
         <meta name="title" content={`Лидогенерация под ключ для бизнеса ${cityIn} – купить лиды с оплатой за результат | Reffectionn`} />
         {/* <meta name="description"
            content={`Лидогенерация для бизнеса ${cityIn}. Reffection - MarTech платформа с технологией Big Data и собственной DMP платформой. Подробности на сайте.`} /> */}

         <meta property="og:url" content={`https://${domain !== 'reffection' && domain}reffection.ru/`} />
         <meta property="og:title" content={`Лидогенерация под ключ для бизнеса ${cityIn} – купить лиды с оплатой за результат | Reffectionn`} />
         {/* <meta property="og:description"
            content={`Лидогенерация для бизнеса ${cityIn}. Reffection - MarTech платформа с технологией Big Data и собственной DMP платформой. Подробности на сайте.`} /> */}

         <meta property="twitter:url" content={`https://${domain !== 'reffection' && domain}reffection.ru/`} />
         <meta property="twitter:title" content={`Лидогенерация под ключ для бизнеса ${cityIn} – купить лиды с оплатой за результат | Reffectionn`} />
         {/* <meta property="twitter:description"
            content={`Лидогенерация для бизнеса ${cityIn}. Reffection - MarTech платформа с технологией Big Data и собственной DMP платформой. Подробности на сайте.`} /> */}
      </Helmet>
   );
};

export default MetaTags;
