import { Places, Images } from './types';

export const placesNwlData: Places[] = [
	{
		slug: 'musclx',
		name: 'Музейный Центр',
		subtitle: 'Крупный музейный комплекс',
		areaSlug: 'NWL',
		area: 'Северо-Восточный Жилой Район',
		descriptionHeader: 'Главное здание Сургутского краеведческого музея',
		description:
			'В здании разместились Сургутский краеведческий и художественный музеи. Каждый готов показать посетителю богатую историю города и округа, а современные системы, такие как "Виртуальный музей" и "Интерактивная карта", помогут увидеть все экспонаты музея без затруднений.',
		address: '30 Лет Победы, 21/2',
		hours: '10:00 - 17:00 (Сб, Вс - до 17:30; Чт: 12:00 - 19:00; Пн, Вт - выходной)',
		price: 'Для детей от 4 до 6 лет – 30 руб. \n Для детей от 7 до 18 лет – 50 руб. \n Взрослый – 100 руб.',
		site: 'skmuseum.ru',
		siteHref: 'https://skmuseum.ru/museum-center',
		categoryId: 4,
	},
	{
		slug: 'pmed',
		name: 'Памятник "Медсестре"',
		subtitle: 'Монумент в честь врачей',
		areaSlug: 'NWL',
		area: 'Северо-Восточный Жилой Район',
		descriptionHeader: 'Монумент в честь медицинских работников',
		description:
			'Памятник установлен в 2007 году. Инициатива по возведению принадлежит главному врачу Сергею Тарасенко, а установлен монумент был на средства предприятий и медицинских работников. Отлит в Екатеринбурге из 600 кг бронзы.\nОлицетворяет собой медицинскую сестру, что запечатлена "в движении", готовая всегда прийти на помощь больному.',
		address: 'Нефтеюганское ш., 20',
		categoryId: 3,
	},
	{
		slug: 'sgusch',
		name: 'Памятник Сгущёнке',
		subtitle: 'Монумент популярного продукта',
		areaSlug: 'NWL',
		area: 'Северо-Восточный Жилой Район',
		descriptionHeader: 'Копия металлической банки сгущёнки',
		description:
			'Памятник установлен в 2013 году. Идея монумента пришла из-за всемирной известности советского продукта, который до сих пор у многих ассоциируется со знаком качества.',
		address: 'Быстринская, 22',
		categoryId: 3,
	},
	{
		slug: 'smile',
		name: 'Памятник "Улыбке"',
		subtitle: 'Монумент в честь эмоции',
		areaSlug: 'NWL',
		area: 'Северо-Восточный Жилой Район',
		descriptionHeader: 'Монумент в честь исчезающего явления',
		description:
			'Установлен в 2006 году. В основе лежит легенда о сургутской рыбе, которая развлекала жителей реки, а русалка пересказывала анекдоты людям, смеша всех вокруг.\nПризван обратить внимание людей, что в суматохе города они забывают следить за своим настроением.',
		address: '30 Лет Победы, 21/2',
		categoryId: 3,
	},
	{
		slug: 'vershina',
		name: 'ТЦ "Вершина"',
		subtitle: 'Популярный городской ТЦ',
		areaSlug: 'NWL',
		area: 'Северо-Восточный Жилой Район',
		descriptionHeader: 'Узнаваемый ТЦ города',
		description:
			'Расположен в северо-восточной части города, содержит в себе множество магазинов и кафе. Примечателен футуристичный дизайн ТЦ, который приковывает к себе внимание.',
		address: 'Генерала Иванова, 1',
		hours: 'Магазины: 10:00 - 22:00\nКинотеатр "Вершина": 10:00 - 02:00',
		site: 'vershina1.ru',
		siteHref: 'https://vershina1.ru',
		utility: 'Есть подземный паркинг\nЕсть велопарковка\n39 магазинов',
		categoryId: 2,
	},
];

export const placesNwlImagesData: Images[] = [
	{
		src: 'https://sun9-32.userapi.com/GTM-WsYj3Y5aR9O5Nx_G5So3xTxT66XHAxKzbw/CEV0WPXnhI4.jpg',
		alt: 'musclx',
		placeSlug: 'musclx',
	},
	{
		src: 'https://sun9-60.userapi.com/ZT7BeTJE-yYtEj0gzYUD28BxTVxMocDhGHnHkA/jBUSv0dbbWc.jpg',
		alt: 'musclx',
		placeSlug: 'musclx',
	},
	{
		src: 'https://sun9-61.userapi.com/AABA8R8BGlPiu_9JUbHfEQudOMiWKg3-yQJxpQ/FKcUAs6EnUE.jpg',
		alt: 'musclx',
		placeSlug: 'musclx',
	},
	{
		src: 'https://sun9-25.userapi.com/-20lQTsa5TKbaXMQ1enc62OHOmo2nfiy3d3noA/YBSKUMkKCP0.jpg',
		alt: 'musclx',
		placeSlug: 'musclx',
	},
	{
		src: 'https://sun9-57.userapi.com/MOV6tpUykPIXYm236rMvW2_sJlcuBGCG4qv_dA/3zve2_ejO9c.jpg',
		alt: 'pmed',
		placeSlug: 'pmed',
	},
	{
		src: 'https://sun9-31.userapi.com/s280qfnpxa2T-zausqfp14HPwZijnneH_alRbw/E_fceV3AfXA.jpg',
		alt: 'pmed',
		placeSlug: 'pmed',
	},
	{
		src: 'https://sun9-4.userapi.com/CiZFpcxkwjDJsbH_naSeFrHH5N2zSm6Jg_73FQ/NTC4o6sVyLg.jpg',
		alt: 'sgusch',
		placeSlug: 'sgusch',
	},
	{
		src: 'https://sun9-28.userapi.com/EkalgLg08oFQF7rOpXDX6glCH7Yz0hFqMIJzBA/0ju_4-Bueu8.jpg',
		alt: 'sgusch',
		placeSlug: 'sgusch',
	},
	{
		src: 'https://sun9-25.userapi.com/NpWM36yQm3nMN1QqUTqmHQSkV7fvGNZfXuri-Q/AHbVC3FyT-I.jpg',
		alt: 'smile',
		placeSlug: 'smile',
	},
	{
		src: 'https://sun9-7.userapi.com/vg7gqGxYnYerpc7TB8a_gi7SsVmRfYRlAGk5-Q/yMQeMSuq04c.jpg',
		alt: 'smile',
		placeSlug: 'smile',
	},
	{
		src: 'https://sun9-38.userapi.com/J_zTBa3PLiANcxw2GoTi1ivyUtdTlY_xQ0I1xw/C9sYzX1EMUc.jpg',
		alt: 'Vershina',
		placeSlug: 'vershina',
	},
	{
		src: 'https://sun9-58.userapi.com/0d-e7L2uYZf4u-pXplD9im73apVYPq6cLZvoVQ/0LXqXvlkZsM.jpg',
		alt: 'Vershina',
		placeSlug: 'vershina',
	},
	{
		src: 'https://sun9-67.userapi.com/KE_pO54gdF7ws69w_-Y7IAq8T_EUa9abWpshNQ/830KxumhPp4.jpg',
		alt: 'Vershina',
		placeSlug: 'vershina',
	},
	{
		src: 'https://sun9-7.userapi.com/2Vmq8KqRTwDNdujTzj9E0pckZ0O7_c9K_xUsXQ/TF8YVH5zYKw.jpg',
		alt: 'Vershina',
		placeSlug: 'vershina',
	},
];
