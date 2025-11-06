const metaConfig = {
   "reffection": {
      cityIn: "в Москве",
      city: "Москва",
      address: "ул. Большая Новодмитровская, дом 23, строение 2, БЦ Стрелецкая Слобода, 4 этаж, Москва",
      phone: "+7 (495) 023-17-47",
      domain: ''  // Домен добавлен
   },
   "spb": {
      cityIn: "в Санкт-Петербурге",
      city: "Санкт-Петербург",
      address: "Трезубец, ул. Ефимова, 4А, Санкт-Петербург",
      phone: "+7 (812) 214-50-50",
      domain: 'spb.'  // Домен добавлен
   },
   "novosibirsk": {
      cityIn: "в Новосибирске",
      city: "Новосибирск",
      address: "ул. Фрунзе, 5, Новосибирск",
      phone: "+7 (383) 235-98-97",
      domain: 'novosibirsk.'  // Домен добавлен
   },
   "ekaterinburg": {
      cityIn: "в Екатеринбурге",
      city: "Екатеринбург",
      address: "ул. Малышева, 51, Екатеринбург",
      phone: "+7 (343) 226-47-77",
      domain: 'ekaterinburg.'  // Домен добавлен
   },
   "kazan": {
      cityIn: "в Казани",
      city: "Казань",
      address: "Московская ул., 31, Казань",
      phone: "+7 (843) 254-58-59",
      domain: 'kazan.'  // Домен добавлен
   },
   "nn": {
      cityIn: "в Нижнем Новгороде",
      city: "Нижний Новгород",
      address: "ул. Нартова, 6, корп. 6, Нижний Новгород",
      phone: "+7 (831) 238-93-91",
      domain: 'nn.'  // Домен добавлен
   },
   "krasnoyarsk": {
      cityIn: "в Красноярске",
      city: "Красноярск",
      address: "ул. Алексеева, 49, Красноярск",
      phone: "+7 (391) 216-94-04",
      domain: 'krasnoyarsk.'  // Домен добавлен
   },
   "chelyabinsk": {
      cityIn: "в Челябинске",
      city: "Челябинск",
      address: "просп. Ленина, 21В, Челябинск",
      phone: "+7 (351) 200-79-78",
      domain: 'chelyabinsk.'  // Домен добавлен
   },
   "samara": {
      cityIn: "в Самаре",
      city: "Самара",
      address: "Московское ш., 55, Самара",
      phone: "+7 (846) 233-42-41",
      domain: 'samara.'  // Домен добавлен
   },
   "ufa": {
      cityIn: "в Уфе",
      city: "Уфа",
      address: "ул. Мира, 14, Уфа",
      phone: "+7 (347) 214-92-29",
      domain: 'ufa.'  // Домен добавлен
   },
   "rostov": {
      cityIn: "в Ростове-на-Дону",
      city: "Ростов-на-Дону",
      address: "Социалистическая ул., 74, Ростов-на-Дону",
      phone: "+7 (863) 209-75-76",
      domain: 'rostov.'  // Домен добавлен
   },
   "krasnodar": {
      cityIn: "в Краснодаре",
      city: "Краснодар",
      address: "ул. Коммунаров, 268А, микрорайон Центральный, Центральный внутригородской округ, Краснодар",
      phone: "+7 (861) 201-88-11",
      domain: 'krasnodar.'  // Домен добавлен
   },
   "omsk": {
      cityIn: "в Омске",
      city: "Омск",
      address: "проспект Карла Маркса, 41/1, Омск",
      phone: "+7 (381) 267-82-92",
      domain: 'omsk.'  // Домен добавлен
   },
   "voronezh": {
      cityIn: "в Воронеже",
      city: "Воронеж",
      address: "Ленинский просп., 15, Воронеж",
      phone: "+7 (473) 201-68-65",
      domain: 'voronezh.'  // Домен добавлен
   },
   "perm": {
      cityIn: "в Перми",
      city: "Пермь",
      address: "ул. Чернышевского, 28, Пермь",
      phone: "+7 (342) 248-63-64",
      domain: 'perm.'  // Домен добавлен
   },
   "volgograd": {
      cityIn: "в Волгограде",
      city: "Волгоград",
      address: "ул. Рокоссовского, 62, Волгоград",
      phone: "+7 (844) 261-29-39",
      domain: 'volgograd.'  // Домен добавлен
   },
};

module.exports = {
   getConfigArray: () => metaConfig,

   getMetaConfig: (domain) => {
      return metaConfig[domain] || {
         cityIn: "",
         city: "Город не найден",
         address: "Адрес не найден",
         phone: "Телефон не найден",
         domain: domain,
      };
   }
};
