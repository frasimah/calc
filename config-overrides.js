const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const path = require('path');

// Подключаем конфигурацию мета-данных
const metaConfig = require('./src/config/metaConfig');

// Генерация мета-данных для каждого домена

module.exports = function override(config, env) {
   const domains = Object.keys(metaConfig.getConfigArray()); // Список всех доменов

   // Очистка стандартных плагинов, чтобы добавить свой HtmlWebpackPlugin
   config.plugins = config.plugins.filter(
      (plugin) => !(plugin instanceof HtmlWebpackPlugin)
   );

   config.plugins.push(
      new HtmlWebpackPlugin({
         template: './public/index.html', // Ваш основной шаблон
         filename: `./index.html`, // Генерация страницы для домена
      })
   );

   // Добавляем плагин HtmlWebpackPlugin для каждого домена
   domains.forEach((domain) => {
      const meta = metaConfig.getMetaConfig(domain);

      const jsonLD = `{
         "@context": "http://schema.org",
         "@type": "Organization",
         "name": "Reffection",
         "telephone": ${meta.phone},
         "address": {
            "@type": "PostalAddress",
            "streetAddress": ${meta.address},
            "addressLocality": ${meta.city},
            "addressCountry": "RU"
         }
      }`
      const metaInject = `
         <link rel="canonical" href="https://${meta.domain}reffection.ru/" />
         <title>Лидогенерация для бизнеса ${meta.cityIn} - Reffection</title>
         <meta name="title" content="Лидогенерация для бизнеса ${meta.cityIn} - Reffection" />
         <meta name="description" content="Лидогенерация для бизнеса ${meta.cityIn}. Reffection - MarTech платформа с технологией Big Data и собственной DMP платформой. Подробности на сайте." />
         <meta property="og:url" content="https://${meta.domain}reffection.ru/" />
         <meta property="og:title" content="Лидогенерация для бизнеса ${meta.cityIn} - Reffection" />
         <meta property="og:description" content="Лидогенерация для бизнеса ${meta.cityIn}. Reffection - MarTech платформа с технологией Big Data и собственной DMP платформой. Подробности на сайте." />
         <meta property="twitter:url" content="https://${meta.domain}reffection.ru/" />
         <meta property="twitter:title" content="Лидогенерация для бизнеса ${meta.cityIn} - Reffection" />
         <meta property="twitter:description" content="Лидогенерация для бизнеса ${meta.cityIn}. Reffection - MarTech платформа с технологией Big Data и собственной DMP платформой. Подробности на сайте." />
      `

      config.plugins.push(
         new HtmlWebpackPlugin({
            template: './src/template.html', // Ваш основной шаблон
            filename: `./staticPage/${domain}/index.html`, // Генерация страницы для домена

            inject: 'head', // Вставляем скрипт в body
            scriptLoading: 'blocking', // Убираем defer
            templateParameters: {
               jsonLD,
               metaInject, // Передаем JSON-данные как параметр шаблона
            }
         })
      );
   });

   return config;
};
