import { Places, Images } from './types';

export const placesWestData: Places[] = [
	{
		slug: 'btrud',
		name: 'Памятник "Мужеству Рыбаков"',
		subtitle: 'Монумент в честь рыбокомбината',
		areaSlug: 'WEST',
		area: 'Восточный Район',
		descriptionHeader: 'Барельеф в честь подвига сургутских рыбаков',
		description:
			'Был установлен в честь работников тыла, что трудились на рыбокомбинате и помогали фронту. Барельефы отражают собирательные образы рыбаков во время работы.',
		address: 'Около набережной Речпорта',
		categoryId: 3,
	},
	{
		slug: 'budda',
		name: 'Памятник Будде',
		subtitle: 'Монумент в честь будизма',
		areaSlug: 'WEST',
		area: 'Восточный Район',
		descriptionHeader: 'Монумент в честь основателя буддизма',
		description:
			'Установлен в 2014 году руководителем организации "Правоведы" Альбертом Леоновым. Представляет из себя небольшой участок, оформленный как молитвенное место.',
		address: 'Мелик-Карамова, 28/1',
		categoryId: 3,
	},
	{
		slug: 'nab',
		name: 'Набережная Речпорта',
		subtitle: 'Территория бывшего речного вокзала',
		areaSlug: 'WEST',
		area: 'Восточный Район',
		descriptionHeader: 'Любимое место для прогулок Сургутян',
		description:
			'Длина набережной около полутора километров. На её территории находятся скамейки, а также несколько монументов. Кроме того, летом отсюда ведутся речные прогулки.\nВ 2020 году на набережной появился самый длинный арт-объект Югры "Набережная Жизни", который растянулся на полкилометра в длину набережной.',
		address: 'Рыбников, 19',
		categoryId: 5,
	},
	{
		slug: 'nerozh',
		name: 'Памятник "Нерождённым Детям"',
		subtitle: 'Копия зарубежной скульптуры',
		areaSlug: 'WEST',
		area: 'Восточный Район',
		descriptionHeader: 'Копия Словакской скульптуры Мартина Худачека',
		description:
			'Установлен в 2013 году на территории храма в честь великомученника Георгия Победоносца, при центре помощи семье и детям.\nИнтересны материалы: бедная мать, выполненная из гранита, олицетворяет собой физическое тело, в то время, как дочь из прозрачной смолы — душа ребёнка.',
		address: 'Университетская, 12',
		categoryId: 3,
	},
	{
		slug: 'obel',
		name: 'Обелиск "Ушедшим на Фронт"',
		subtitle: 'Памятный обелиск воинам ВОВ',
		areaSlug: 'WEST',
		area: 'Восточный Район',
		descriptionHeader: 'Памятный обелиск воинам ВОВ',
		description:
			'Установлен в 1945 году в деревянном исполнении на территории речном вокзале, откуда воины отправлялись на фронт. В последущие годы памятник был утрачен, а в 1995 году восстановлен в каменном исполнении.\nСейчас это стела из белого мрамора весом 8 тонн, на которой размещена гранитная плита с высеченными словами в память о невернувшихся.',
		address: 'Набережная Речпорта',
		categoryId: 3,
	},
	{
		slug: 'pgeo',
		name: 'Парк "Геологов"',
		subtitle: 'Парк на юго-востоке города',
		areaSlug: 'WEST',
		area: 'Восточный Район',
		descriptionHeader: 'Крупный парк у берега пойменной части Оби',
		description:
			'Площадь парка 5,1 га. Он протянут вдоль всего берега, позволяя неспешно прогуляться, наслаждаясь свежим воздухом.\nНа территории есть скамейки, светильники и клумбы, а также пара монументов: памятник первым комсомольцам города и мемориал геологоразведчикам.',
		address: 'Мелик-Карамова, 92',
		categoryId: 5,
	},
	{
		slug: 'repres',
		name: 'Памятник "Жертвам Репрессий"',
		subtitle: 'Монумент в честь спецпереселенцов',
		areaSlug: 'WEST',
		area: 'Восточный Район',
		descriptionHeader: 'Монумент в честь "спецпереселенцев"',
		description:
			'Установлен в 2018 году на Набережной — место, откуда все переселенцы прибывали в Сургут.\nГлавной целью является сохранение памяти о людях, что помогали отстраивать город, а в непростое военное время и поддерживали его жизнеспособность.',
		address: 'Набережная речпорта',
		categoryId: 3,
	},
	{
		slug: 'rib',
		name: 'Памятник "Труженикам Рыбокомбината"',
		subtitle: 'Монумент в честь работников тыла',
		areaSlug: 'WEST',
		area: 'Восточный Район',
		descriptionHeader: 'Барельеф в честь подвига сургутских рыбаков',
		description:
			'Установлен в 1972 году на территории бывшего рыбокомбината. На монументе изображены солдат, рыбак и женщина-мать.\nВо времена ВОВ большинство работников рыбоконсервного завода были отправлены на фронт, когда остальные работали не покладая рук на комбинате. Сургут был одним из главных поставщиков продовольствия на фронт, и в честь победы и был установлен памятник.',
		address: 'Около набережной Речпорта',
		categoryId: 3,
	},
	{
		slug: 'saima',
		name: 'Парк "За Саймой"',
		subtitle: 'Главный парк города',
		areaSlug: 'WEST',
		area: 'Восточный Район',
		descriptionHeader: 'Главный парк города',
		description:
			'Общая площадь более 65 га. На территории находятся спортивные площадки и скейтпарк, набережная с лежаками, а также множество скамеек и детских площадок.\nВ начале 90-х годов был необустроен. В 2000 году на территории было решено разместить ботанический сад, однако проект пока не был реализован. Позднее, в 2013 году, появился план по обустройству парка, а в 2020 году начались первые работы по реконструкции.',
		address: 'Учебная, 4А\nИвана Кайдалова, 30\nУниверситетская, 12',
		categoryId: 5,
	},
	{
		slug: 'salm',
		name: 'Музей Ф.К. Салманова',
		subtitle: 'Дом-музей первооткрывателя Сибирской нефти',
		areaSlug: 'WEST',
		area: 'Восточный Район',
		descriptionHeader:
			'Дом первооткрывателя сибирской нефти Фармана Курбановича Салманова',
		description:
			'Открыт в сентябре 2007 года в честь 50-летия высадки первых геологоразведчиков в Сургут.\nНа территории мемориального комплекса расположен дом с личными вещами Салманова, а снаружи находится техника для нефтеразработки и образцы проб горных пород и нефти.',
		address: 'Терешковой, 49',
		hours: '10:00 - 17:00 (Сб, Вс - до 17:30; Чт: 12:00 - 19:00; Пн, Вт - выходной)',
		price: 'Для детей от 4 до 6 лет – 30 руб.\nДля детей от 7 до 18 лет – 50 руб.\nВзрослый – 100 руб.',
		site: 'skmuseum.ru',
		siteHref: 'https://skmuseum.ru/salmanov',
		categoryId: 4,
	},
	{
		slug: 'sgeo',
		name: 'Сквер "Геологов-Первопроходцев"',
		subtitle: 'Сквер в юго-восточной части города',
		areaSlug: 'WEST',
		area: 'Восточный Район',
		descriptionHeader: 'Небольшой сквер в восточном районе города',
		description:
			'Площадь 1,3 гектара была обустроена в 2007 году. На её территории находятся несколько детских площадок, площадка для локальных мероприятий и карманы со скамейками.',
		address: 'Фёдорова, 5/2',
		categoryId: 5,
	},
	{
		slug: 'stroit',
		name: 'Городской Культурный Центр',
		subtitle: 'Популярный концертный зал',
		areaSlug: 'WEST',
		area: 'Восточный Район',
		descriptionHeader: 'Популярный городской культурный центр',
		description:
			'Создан в 1969 году, с тех пор и по сей день радует горожан спектаклями, концертами и вечеринками. В 2019 году ГКЦ отметил 50 лет со дня основания!\nВ скором времени зданию предстоит реновация, в результате которой увеличится вместимость центра и повысится удобство для зрителей.',
		address: 'Сибирская, 2',
		hours: '08:00 - 21:00',
		site: 'gkc-surgut.ru',
		siteHref: 'https://gkc-surgut.ru',
		vkHref: 'https://vk.com/gkc86',
		categoryId: 2,
	},
	{
		slug: 'univ',
		name: 'Университетская',
		subtitle: 'Популярная улица Сургута',
		areaSlug: 'WEST',
		area: 'Восточный Район',
		descriptionHeader: 'Одна из самых ярких и загруженных улиц города',
		description:
			'Обилие многоквартирных новостроек делает город более современным, а находящиеся рядом парки и скверы создают комфортную для проживания среду.\nБольшинство горожан любит прогуливаться тут по вечерам.',
		address: 'Университетская',
		categoryId: 1,
	},
];

export const placesWestImagesData: Images[] = [
	{
		src: 'https://sun9-44.userapi.com/hU1zMOdhyme1awWlLU5QTIUDl5rp5t67OLsI8A/uEBWqkrJ5Gs.jpg',
		alt: 'Btrud',
		placeSlug: 'btrud',
	},
	{
		src: 'https://sun9-40.userapi.com/7XpTwMhthGmEDtD3BBnlPDwG7tJjAnZYg6GXug/FQPdmYyL0TU.jpg',
		alt: 'Btrud',
		placeSlug: 'btrud',
	},
	{
		src: 'https://sun9-25.userapi.com/lCSiK8ozCnjxRal1GcDlRD4JoMk0mAGyXD3tUg/SeOyONVF3OY.jpg',
		alt: 'Budda',
		placeSlug: 'budda',
	},
	{
		src: 'https://sun9-19.userapi.com/Qvcx02RfLeip9tjQBFK91DmVXHTZYMg5vyw9WQ/Coj0O2wrppE.jpg',
		alt: 'Budda',
		placeSlug: 'budda',
	},
	{
		src: 'https://sun9-56.userapi.com/VZMYtw_K_7Z1Nmb6MhHfXqfYeCvIsV0X6UGREw/C3A87SXbUn0.jpg',
		alt: 'Budda',
		placeSlug: 'budda',
	},
	{
		src: 'https://sun9-69.userapi.com/JYM4u9E7Eph8eMcFrEHA0FNiaxUitQ0McvRYKw/MeDUqjAKstk.jpg',
		alt: 'Nab',
		placeSlug: 'nab',
	},
	{
		src: 'https://sun9-31.userapi.com/VDLfRdBKWW_eGbxAq005rwv1aCVx2Bv6gdkLSQ/nvZj-ATH__c.jpg',
		alt: 'Nab',
		placeSlug: 'nab',
	},
	{
		src: 'https://sun9-8.userapi.com/jOyD5H2oTJTEuFcDqZD1FD4XVqnXolUn_JbUwg/9x4VZCLzbnE.jpg',
		alt: 'Nab',
		placeSlug: 'nab',
	},
	{
		src: 'https://sun9-46.userapi.com/7LDAr-kKMWXESR09K6OIoJ_A7tFkT9McXBQ6bw/1R6sdtFd34g.jpg',
		alt: 'Nab',
		placeSlug: 'nab',
	},
	{
		src: 'https://sun9-34.userapi.com/89glgis5W2wssM2-XZVh-_6jpzIPCGrSH8P7Kg/YQN-6z-yVXc.jpg',
		alt: 'Nerozh',
		placeSlug: 'nerozh',
	},
	{
		src: 'https://sun9-20.userapi.com/MiQlQ23p7XchOBe8zRRk1x8kV-VhE2tgVBmIjQ/fVIMWlmppE0.jpg',
		alt: 'Nerozh',
		placeSlug: 'nerozh',
	},
	{
		src: 'https://sun9-58.userapi.com/w-U0FlwsH55l0sQD0m0IiH-om7ZfZWOozaMV9Q/5FvZl-dPljs.jpg',
		alt: 'Nerozh',
		placeSlug: 'nerozh',
	},
	{
		src: 'https://sun9-30.userapi.com/AZCAb69-OWiarDcXDIQdM-9kGJ09w5Ob5jeDTQ/GTx8_xqytxw.jpg',
		alt: 'Obel',
		placeSlug: 'obel',
	},
	{
		src: 'https://sun9-53.userapi.com/WP2TF05AtTcEnmrT7tD7ym_tOqcp0xXkhQfDwQ/BngV5cRZvdk.jpg',
		alt: 'Obel',
		placeSlug: 'obel',
	},
	{
		src: 'https://sun9-21.userapi.com/Pj_0u07IwTzhYZapjcjQwfafKAVUHWpH47xZuA/43nD-BpQBig.jpg',
		alt: 'Pgeo',
		placeSlug: 'pgeo',
	},
	{
		src: 'https://sun9-58.userapi.com/NQ2ztDXyfe67eXTGHVzwFTen0Hb0K6kwKhbiFg/MxGF5GtylKs.jpg',
		alt: 'Pgeo',
		placeSlug: 'pgeo',
	},
	{
		src: 'https://sun9-16.userapi.com/PzREx5XViVODfO5KVb9dAh0TkcO6WfA20JBKeQ/JdY8i-rzjB0.jpg',
		alt: 'Repres',
		placeSlug: 'repres',
	},
	{
		src: 'https://sun9-73.userapi.com/FIGV7WYe33YcpHZRsYJzVuPgeDyhH0k7KUP1lA/Tg2jXDWMe4U.jpg',
		alt: 'Repres',
		placeSlug: 'repres',
	},
	{
		src: 'https://sun9-49.userapi.com/YxZQQS9HFVWRGBGNgd-q9zI4gjfTJ2WgkJWbfg/kPAWLLu9-TQ.jpg',
		alt: 'Repres',
		placeSlug: 'repres',
	},
	{
		src: 'https://sun9-16.userapi.com/feqL3kYXtUKYm00cOax0t2kMifBo0EzkhQxj8g/T7Qlp7yZsl4.jpg',
		alt: 'Rib',
		placeSlug: 'rib',
	},
	{
		src: 'https://sun9-4.userapi.com/q5O1V32omeoM7yAKweBEDSA-mcOoiJSI8_8r0A/zbGPyDApbCA.jpg',
		alt: 'Saima',
		placeSlug: 'saima',
	},
	{
		src: 'https://sun9-69.userapi.com/7yPqTRoGdAMIByl6pnD2IzpEsKGuo3omGCrokQ/xSnEtD4xG5o.jpg',
		alt: 'Saima',
		placeSlug: 'saima',
	},
	{
		src: 'https://sun9-56.userapi.com/CvAjSWzJhHRvHt29bX3BIclpslE781lW3S_igA/iMFxQKSKWBA.jpg',
		alt: 'Saima',
		placeSlug: 'saima',
	},
	{
		src: 'https://sun9-8.userapi.com/s-PrktZhWkrvPoYv7J7LQ08UP8OUYu0fdlubUw/63Y1MoQS44s.jpg',
		alt: 'Saima',
		placeSlug: 'saima',
	},
	{
		src: 'https://sun9-65.userapi.com/eIwlKF01iHAg-upq346yFT6ltQ3-6xsY4Hv2vA/15iNjEniFxw.jpg',
		alt: 'Saima',
		placeSlug: 'saima',
	},
	{
		src: 'https://sun9-58.userapi.com/_FcGFHnItXY7eh5tyMid0CDKckj0wYESXYQP-A/JHo1FUOvYLU.jpg',
		alt: 'Saima',
		placeSlug: 'saima',
	},
	{
		src: 'https://sun9-72.userapi.com/EgFpakwsl1ZrdLw6xFF_1kBEQ5XZhvJwA2yLXw/tSZEUgY2LqU.jpg',
		alt: 'Salm',
		placeSlug: 'salm',
	},
	{
		src: 'https://sun9-48.userapi.com/KQw-UiKJwhDL7dr5ztv02GJmqo1xXtX17vhaRg/yyeoYcBb0eU.jpg',
		alt: 'Salm',
		placeSlug: 'salm',
	},
	{
		src: 'https://sun9-23.userapi.com/GRSEEVrFjsBf9xhEzdGPVQXO4HsWeJrY8iLesw/pB9wzJYlvAM.jpg',
		alt: 'Salm',
		placeSlug: 'salm',
	},
	{
		src: 'https://sun9-9.userapi.com/lEmGl7Atp6TCkoj6Kp_vhTwRM3fgDYPip53agw/SKIbzTfJt-Q.jpg',
		alt: 'Sgeo',
		placeSlug: 'sgeo',
	},
	{
		src: 'https://sun9-34.userapi.com/k0Xp5J6nQfl_Nqky9uGORCpDhZ4ACSQP3fSe1A/aI8npsjhlO8.jpg',
		alt: 'Sgeo',
		placeSlug: 'sgeo',
	},
	{
		src: 'https://sun9-23.userapi.com/_io7S-R0B_pZAXK20dkLM0LwS-JIvnLek6KH3g/LWbqNtLh26A.jpg',
		alt: 'Sgeo',
		placeSlug: 'sgeo',
	},
	{
		src: 'https://sun9-72.userapi.com/-XVefPkREjR_TqNURojczmypfjjjm1muRYXezw/6QW-zhCt2gM.jpg',
		alt: 'Stroit',
		placeSlug: 'stroit',
	},
	{
		src: 'https://sun9-16.userapi.com/sI4Xu3YsiaktB3UvWFXLjKx5e3f9dNV7cps6wg/MuaoacNsJCE.jpg',
		alt: 'Stroit',
		placeSlug: 'stroit',
	},
	{
		src: 'https://sun9-53.userapi.com/KTYVpFaEtnhb7jIHKfX1etYgYK6lf1hGfBpENw/6KDly-cIdQk.jpg',
		alt: 'Univ',
		placeSlug: 'univ',
	},
	{
		src: 'https://sun9-50.userapi.com/iGYCB6KOhZqd2Bu6OWHnlAh7i_CYLYu5jmyf8Q/LBfEwyJHQQo.jpg',
		alt: 'Univ',
		placeSlug: 'univ',
	},
	{
		src: 'https://sun9-61.userapi.com/zrAxDLBHkuW2ci4WjlmjDNDoTYunomuzKtHJ7w/u6y5gWOk7wY.jpg',
		alt: 'Univ',
		placeSlug: 'univ',
	},
	{
		src: 'https://sun9-62.userapi.com/cFpwN_NIpodOvLLzi2sx3J9wlconVnPsfG-VlQ/ODze9iKoj0Q.jpg',
		alt: 'Univ',
		placeSlug: 'univ',
	},
];
