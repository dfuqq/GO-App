import { Business, Images, Placemarks } from './types';

export const barsData: Business[] = [
	{
		slug: 'audit',
		name: 'Auditorium',
		subtitle: 'Клуб на Мира 31/1',
		description:
			'"Auditorium" знаком многим, как преемник "Biblioteca" — действительно легендарного бара, который закрылся в конце 2019 года. А затем явился в новом, ещё более привлекательном формате.\n\nЗдесь прекрасно всё: заводящая музыка от приглашённых DJ, которая заставляет двигаться даже самого ленивого человека, отличный дизайн, в котором хочется остаться на всю ночь (или даже на две), хорошая кухня и отпадный бар с настоящими мастерами своего дела.\n\nНе будем лгать: Вы просто обязаны там побывать. Выйти в ночь можно по адресу ниже.',
		descriptionHeader: 'В ритме ночи',
		address: 'Мира, 31/1',
		hours: 'Только Пт и Сб: 20:00 - 05:00',
		priceFrom: '800',
		priceTo: '1500',
		phone: '97-16-97',
		logo: 'https://sun9-51.userapi.com/-Kmb_WZCU1Kk1jHSBwTyM29ctNZ0e3rhnl_JGw/akw2pX06FJw.jpg',
		insta: '@auditorium_bar',
		instaHref: 'https://instagram.com/auditorium_bar',
		geo: [61.259651, 73.402797],
		categoryId: 1,
		// NOTE: Credits
		// <Footer>
		// 	За фото спасибо:{' '}
		// 	<Link href='https://vk.com/antoninkin' target='_blank'>
		// 		Антон Инкин
		// 	</Link>
		// 	.
		// </Footer>
	},
	{
		slug: 'bird',
		name: 'Спой, Птичка!',
		subtitle: 'Караоке-Бар на Мира 31/1',
		description:
			'"Эх! Гуляй душа!"\n\nКогда сердце так и рвётся, чтобы выдать свой вокальный талант, идите в "Спой, Птичка!".\nПочему именно туда? А потому, что это крутейший караоке-бар в Сургуте!\nКачественный звук и отличная караоке-система, собственные бек-вокалисты (!)\nи даже дуэты с приглашёнными артистами — вот что Вас ждёт в этом месте. Не любите петь? Тогда пускайтесь в пляс со всеми остальными гостями! А если проголодались, то быстро перекусите из обширного меню блюд, и снова в бой.\n\nЛетим в бар! Распеться можно по адресу ниже.',
		descriptionHeader: 'Вперёд и с песней',
		address: 'Мира, 31/1',
		hours: 'Ср, Чт, Вс: 20:00 - 03:00 (Пт, Сб: 19:00 - 05:00)',
		priceFrom: '700',
		priceTo: '1500',
		phone: '97-21-97',
		logo: 'https://sun9-67.userapi.com/OgH4ppSJzOMVl1CtJfexnFu5u4FxXS0ty1bTqA/5A6ooYN8t-g.jpg',
		insta: '@spoi_ptichka',
		instaHref: 'https://instagram.com/spoi_ptichka',
		geo: [61.259651, 73.402797],
		categoryId: 1,
		// NOTE: Credits
		// <Footer>
		// 	За фото спасибо:
		// 	<br />
		// 	<Link href='https://vk.com/antoninkin' target='_blank'>
		// 		Антон Инкин
		// 	</Link>
		// 	,&#13;
		// 	<Link href='https://vk.com/evgpro86' target='_blank'>
		// 		{' '}
		// 		Евгений Кирсанов
		// 	</Link>
		// 	.
		// </Footer>
	},
	{
		slug: 'dpub',
		name: 'The Dock Pub',
		subtitle: 'Паб на Университетской 9',
		description:
			'"Паб, каким он и должен быть."\n\nЛишь только Вы входите в заведение, как вдруг перед Вами меняются эпохи:\nиз современного Сургута Вы перемещаетесь в Нью-Йорк 50-60х годов и проникаетесь этим.\nК счастью, еда тут постоянно свежая и очень вкусная. Многообразие закусок к пенному, блюда на гриле и бургеры, а самое главное — широкий выбор пива — всё это не оставит Вас голодным и равнодушным.\n\nВозвращаемся в настоящее. Адрес заведения указан ниже.',
		descriptionHeader: 'Вперёд в прошлое',
		address: 'Университетская, 9',
		hours: '12:00 - 00:00 (Пт, Сб - до 02:00)',
		priceFrom: '1200',
		priceTo: '1700',
		phone: '77-27-23',
		logo: 'https://sun9-59.userapi.com/YJCR_u0sZSi_AEzMvl_K4WUrrUz-mt9p0DAsOQ/G6ODls_C3KY.jpg',
		insta: '@thedockpub',
		instaHref: 'https://instagram.com/thedockpub',
		geo: [61.246867, 73.417275],
		categoryId: 1,
	},
	{
		slug: 'frank',
		name: 'Frank Bar & Kitchen',
		subtitle: 'Бар на Мелик-Карамова 4/4',
		description:
			'Пользователи массово характеризуют "Frank Bar & Kitchen" как лучшее место для свиданий!\n\nИ честно говоря, мы придерживаемся этого мнения. Огромный выбор различных вин, хорошая кухня с пиццой, бургерами, салатами и мясными порциями — всё это отметит каждый, кто хоть раз побывает в этом заведении.\n\nБольшим плюсом можно выделить отличный дизайн и высококлассный персонал, которые оставляют приятное впечатление от визита.\n\nПопробуйте сами — посетить заведение можно по адресу ниже.',
		descriptionHeader: 'Идеальное свидание',
		address: 'Мелик-Карамова, 4/4',
		hours: '12:00 - 23:00 (Пт, Сб - до 02:00)',
		priceFrom: '900',
		priceTo: '1300',
		phone: '55-07-33',
		logo: 'https://sun9-49.userapi.com/6xo6WRxThel1qfItqfEu6c2cIleE463-TZan0A/-FDMQKDPPws.jpg',
		insta: '@frankbarwine',
		instaHref: 'https://instagram.com/frankbarwine',
		geo: [61.234299, 73.438364],
		categoryId: 1,
		// NOTE: Credits
		// <Footer>
		// 	За фото спасибо:{' '}
		// 	<Link href='https://vk.com/antoninkin' target='_blank'>
		// 		Антон Инкин
		// 	</Link>
		// 	.
		// </Footer>
	},
	{
		slug: 'hops',
		name: 'Hops Pub',
		subtitle: 'Паб на Мира 31/1',
		description:
			'Пиво, пиво, пиво.\n\nКажется, в "Hops Pub" знают всё о нём. Хотя оно и неудивительно — в этом пабе подают пиво со всех крафтовых пивоварен России и не только.\n\nЭто отличное место, чтобы провести вечер в тихой и уютной атмосфере, потягивая пенное вместе с друзьями. Сорта пива обновляются еженедельно, а приятным дополнением к нему будут бургеры от "Rock N Burger".\n\nДожидаемся вечера и выезжаем — вся информация указана ниже.',
		descriptionHeader: 'Классический паб',
		address: 'Мира, 31/1',
		hours: 'Вт-Чт, Вс: 15:00-23:00 (Пт, Сб - до 02:00)',
		priceFrom: '600',
		priceTo: '1000',
		phone: '60-85-04',
		logo: 'https://sun9-21.userapi.com/xRE-QWPwTIAYhQzua3vXvWTabbSg3dCdZp92hg/KXMDSSx6DNg.jpg',
		insta: '@hopspub_surgut',
		instaHref: 'https://instagram.com/hopspub_surgut',
		geo: [61.259638, 73.402769],
		categoryId: 1,
	},
	{
		slug: 'jaws',
		name: 'Jawsspot',
		subtitle: 'Паб на Юности 8',
		description:
			'Запомните раз и навсегда: "Джоус", а не "Джавс".\n\nЗапомнили? Тогда можете смело приходить в это заведение.\nЗдесь нет старых порядков и пафоса, что обычно показываются Вам в фильмах: только непринуждённая дружеская атмосфера, отличная музыка и крафтовое пиво. А ещё в пабе часто проводятся тусовки, так что можете влиться в компанию и познакомиться с новыми интересными людьми.\n\nДобро пожаловать в Jawsspot. Актуальные данные — ниже.',
		descriptionHeader: 'Центр андерграунда',
		address: 'Юности, 8',
		hours: 'Вс-Чт: 17:00 - 00:00 (Пт, Сб: до 02:00)',
		priceFrom: '500',
		priceTo: '1000',
		phone: '+7 (982) 413-35-45',
		logo: 'https://sun9-65.userapi.com/x8H0lEqbCjHRV8tI7HyHYD9pdLMAF4YHyGgkTQ/pYNOT6cdM6c.jpg',
		insta: '@jawsspot_sgt_',
		instaHref: 'https://instagram.com/jawsspot_sgt_',
		geo: [61.24848, 73.418264],
		categoryId: 1,
	},
	{
		slug: 'mars',
		name: 'Марс',
		subtitle: 'Клуб на Нефтеюганском ш. 27/1с4',
		description:
			'Не только клуб, но и бар нового формата.\n\n"Марс" буквально отсылает Вас на красную планету со своим космическим интерьером: громадная барная стойка, танцпол с причудливыми стенами и потолком и свет словно из фильма "Бегущий по Лезвию 2049".\n\nПоможет в Вашем путешествии музыка от крутых DJ, отличный звук, а также бар с большой коллекцией коктейлей (в том числе и авторских), кухня и кальяны.\n\nОдним словом — космос. Отправляемся по адресу ниже.',
		descriptionHeader: 'Ночь открытий',
		address: 'Нефтеюганское шоссе, 27/1с4',
		hours: 'Пт, Сб: 21:00 - 05:00',
		priceFrom: '700',
		priceTo: '1200',
		phone: '91-07-47',
		logo: 'https://sun9-10.userapi.com/5xqutv_9ySVYKy4C2GEelLQ6QwtryOyKElW-dQ/W6FFDB0HZQE.jpg',
		insta: '@nightbarmars',
		instaHref: 'https://instagram.com/nightbarmars',
		geo: [61.273842, 73.408996],
		categoryId: 1,
	},
	{
		slug: 'pints',
		name: 'Две Пинты',
		subtitle: 'Паб на Ленина 39',
		description:
			'Прямиком из заграницы — теперь в Сургуте.\n\n"Две Пинты" имеет в своём арсенале всё, чтобы влюбить в себя клиента.\nНапример, море пива из разных уголков мира, которое не оставит равнодушным даже искушённого гостя. Вкусные закуски, отличная кухня и приятная атмосфера, которые выливаются в одно — желание приходить снова и снова.\n\nЗа границу не выезжая из Сургута? Легко.\nДостаточно прийти по адресу ниже.',
		descriptionHeader: 'Двух не хватит',
		address: 'Ленина, 39',
		hours: '17:00 - 22:00 (Пт, Сб - до 02:00)',
		priceFrom: '700',
		priceTo: '1300',
		phone: '63-38-96',
		logo: 'https://sun9-70.userapi.com/zCXyc32tczkB12zfilAfnUmMM_manbhlQHmlrg/Bsgu8al1lK4.jpg',
		insta: '@two.pint.bar.surgut',
		instaHref: 'https://instagram.com/two.pint.bar.surgut',
		geo: [61.254515, 73.387993],
		categoryId: 1,
	},
	{
		slug: 'rnb',
		name: 'Rock N Burger',
		subtitle: 'Бар на Мелик-Карамова 4/4',
		description:
			'"Rock N Burger" обладает чуть ли не единственными в городе, действительно классными бургерами. Это отличное заведение, чтобы холодным вечером зайти в бар, заказать бургер с пивом, и просто наслаждаться.\nПомимо бургеров, Вы можете отведать пиццу и напитки собственного приготовления, салаты, а также изумительную картошку-фри, которая точно западёт Вам в душу и заставит заказать ещё одну порцию. По секрету: берите картошку с паприкой :)\n\nЗаинтересовались?\nВся информация о данном баре указана ниже.',
		descriptionHeader: 'Те самые бургеры',
		address: 'Мелик-Карамова, 4/4',
		hours: '12:00 - 23:00 (Пт - до 02:00)',
		priceFrom: '600',
		priceTo: '900',
		phone: '55-07-33',
		logo: 'https://sun9-13.userapi.com/1baYZMSy2v_rWw3L-txxR6fjBJ6dGNn110PLvw/NWXCxaGtz3w.jpg',
		insta: '@rockburger_bar',
		instaHref: 'https://instagram.com/rockburger_bar',
		geo: [61.234229, 73.438707],
		categoryId: 1,
	},
	{
		slug: 'off',
		name: 'ШашлыкoFF',
		subtitle: 'Сеть ресторанов',
		description:
			'Вкуснейшее мясо, доступное каждому.\nЭто "ШашлыкoFF" — заведение, что за малую сумму доставит Вам огромное удовольствие. Демократичность, хорошая кухня и отличное обслуживание сильно выделяют это заведение, ведь где ещё можно отведать вкусный и недорогой шашлык, кроме как не здесь?\nКроме шашлыка, тут подают отличные супы и бургеры, а также стейки. Всё готовится из охлаждённого мяса, ведь именно в нём сохраняется больше всего витаминов и полезных для организма веществ.\n\nКажется, запахло грилем. Встретимся по адресу ниже!',
		descriptionHeader: 'Райский гриль',
		address: 'Профсоюзов, 11\nЛенина 50/1',
		hours: '11:00 - 01:00 (Пт, Сб - до 03:00)',
		priceFrom: '400',
		priceTo: '800',
		phone: '94-56-00 (Профсоюзов 11)\n93-74-79 (Ленина 50/1)',
		logo: 'https://sun9-24.userapi.com/EC8ZBXY2fHTL3UfGtR1UspeNWTPPn7u9_sgtYQ/LqSyTccgFuI.jpg',
		insta: '@shashlikoff_surgut',
		instaHref: 'https://instagram.com/shashlikoff_surgut',
		geo: [61.262673, 73.385365],
		zoom: 13,
		categoryId: 1,
	},
];

export const barsImagesData: Images[] = [
	{
		src: 'https://sun9-37.userapi.com/OhsVJpeUISDBHlNXSqpQ0_0fRs2cLzAR6DxxCw/O4Pe5fwf-kM.jpg',
		alt: "Club's Logo",
		businessSlug: 'audit',
	},
	{
		src: 'https://sun9-24.userapi.com/v21DCRIzhH3Q7XFfmgRSSPpzk3OkVg2pnh61uA/PKdAWgTC8QU.jpg',
		alt: "Club's Interior",
		businessSlug: 'audit',
	},
	{
		src: 'https://sun9-61.userapi.com/j1-PKV95A0fTFHMpq1wEcANylCz5RiBsK1UOzw/nq8BD0z_SM4.jpg',
		alt: "Club's Interior",
		businessSlug: 'audit',
	},
	{
		src: 'https://sun9-30.userapi.com/iRrSv2ofN-b07v7sIjpG70VJj6hLPPVRErkBwg/V_jskuyeUYA.jpg',
		alt: "Club's Stuff",
		businessSlug: 'audit',
	},
	{
		src: 'https://sun9-57.userapi.com/x7MiTI0mXgzqYFkNsFi2m4XSMrwkJd76dd-SAw/JGTlUiFgd7w.jpg',
		alt: "Club's Atmosphere",
		businessSlug: 'audit',
	},
	{
		src: 'https://sun9-41.userapi.com/2T3VKhIT4fHjHsI-roWoKw72J2oauOFjRGSjnQ/aYYjzo72n7w.jpg',
		alt: "Club's Atmosphere",
		businessSlug: 'audit',
	},
	{
		src: 'https://sun9-45.userapi.com/p00rSf3iBP54bEUA-WAkG6RQs-S-zETeK18Esg/xAunOoN8n3s.jpg',
		alt: "Bar's Logo",
		businessSlug: 'bird',
	},
	{
		src: 'https://sun9-65.userapi.com/F_EJLKxtV98EQRTKvRzt7zXt1RquVGapPNnSOA/lJShnKHtCv4.jpg',
		alt: "Bar's Interior",
		businessSlug: 'bird',
	},
	{
		src: 'https://sun9-41.userapi.com/VWKVO6ElQXgM-pxVgxWmuDHATco_XBbGj4qViw/tctsj6onN_g.jpg',
		alt: "Bar's Interior",
		businessSlug: 'bird',
	},
	{
		src: 'https://sun9-50.userapi.com/JkarduqzT9wspdPwWlObLVkTPLiSia0FrpaF2g/xRz3Ez-xn_0.jpg',
		alt: "Bar's Interior",
		businessSlug: 'bird',
	},
	{
		src: 'https://sun9-22.userapi.com/oNaAZzhQROZZNrSNmmzyUEdDXkqIV4ObAh1t-g/QxzSmUyqH8E.jpg',
		alt: "Bar's Staff",
		businessSlug: 'bird',
	},
	{
		src: 'https://sun9-9.userapi.com/Tt5SYVzD0kuMoBcJI-k-j2XJGG1KFRsYludrwg/Ex1NA6RqpdM.jpg',
		alt: "Bar's Atmosphere",
		businessSlug: 'bird',
	},
	{
		src: 'https://sun9-8.userapi.com/DcgFCsYouzrEtjOo4WZG6BsvX2HPwFfjXW6XMg/Dl45zNUX03g.jpg',
		alt: "Bar's Atmosphere",
		businessSlug: 'bird',
	},
	{
		src: 'https://sun9-67.userapi.com/sHDZSg-XXmEqeupF8y7BqujZqCY8XtRd9Pd_xA/l6FsBafeNR8.jpg',
		alt: "Bar's Outside",
		businessSlug: 'dpub',
	},
	{
		src: 'https://sun9-47.userapi.com/e0uraE1se3-l9jTwzDv-JksYQ_ZNNrSGN2EvSQ/6T1vlmS_H50.jpg',
		alt: "Bar's Interior",
		businessSlug: 'dpub',
	},
	{
		src: 'https://sun9-72.userapi.com/sBGaBuY7xO8ZNYZNuFtjnD2iOLUfxcnF8_ZBrw/xK8bOOmuUOk.jpg',
		alt: "Bar's Food",
		businessSlug: 'dpub',
	},
	{
		src: 'https://sun9-10.userapi.com/st91LrtpUpHMd5lsX04eQlM58EMg7hR1Q2iFEQ/8yfz1ad0kWA.jpg',
		alt: "Bar's Food",
		businessSlug: 'dpub',
	},
	{
		src: 'https://sun9-52.userapi.com/UBX7QGFzocB8EkqgFxakJd6d6ytVDWJt2HdGLQ/-anfUCrYRyQ.jpg',
		alt: "Bar's Interior",
		businessSlug: 'frank',
	},
	{
		src: 'https://sun9-33.userapi.com/9VLrhDgELzwgRmq8HzD8kxXmy-Dow4J7IyonzA/jMz0aBE5y5s.jpg',
		alt: "Bar's Interior",
		businessSlug: 'frank',
	},
	{
		src: 'https://sun9-9.userapi.com/NLzEo7vcamSLsp4KytTguGbiqamyeGekn3sCZg/8LgJp5Yfz38.jpg',
		alt: "Bar's Interior",
		businessSlug: 'frank',
	},
	{
		src: 'https://sun9-51.userapi.com/JFKAQIpBziwPPtUtJTXoaL6j0Jcyn1cBiHYPtg/QEIIYyLk_TQ.jpg',
		alt: "Bar's Cocktail",
		businessSlug: 'frank',
	},
	{
		src: 'https://sun9-71.userapi.com/VfH58K4EEAkNmY59Toe9D9whSPFPaP20NkoH0w/iGlvAr_0wds.jpg',
		alt: "Bar's Food",
		businessSlug: 'frank',
	},
	{
		src: 'https://sun9-21.userapi.com/HlQw-l3dOCLhMzsrAUYmGxyns02Aw7U2Rz1lXw/obEzEX5SUPQ.jpg',
		alt: "Bar's Food",
		businessSlug: 'frank',
	},
	{
		src: 'https://sun9-40.userapi.com/Zm0K7GO0CqeWgTtTg1uCSElJGn2zL9zMybgh3w/4l4YzSvssu8.jpg',
		alt: "Bar's Interior",
		businessSlug: 'hops',
	},
	{
		src: 'https://sun9-75.userapi.com/RbIQoQU0k2W_oWztDNtsdG2KUmmTQr5zwCFO2A/xU2U3jDXO-E.jpg',
		alt: "Bar's Interior",
		businessSlug: 'hops',
	},
	{
		src: 'https://sun9-10.userapi.com/wcxG_rfMHrZ7jkP2RM7qNrBElgWnQ4Y8KMflPA/VhdguYO5qpI.jpg',
		alt: "Bar's Interior",
		businessSlug: 'jaws',
	},
	{
		src: 'https://sun9-71.userapi.com/Ru9dPOeJK5IFKadJ6KNFsvFOuYyOM5hixhx1zg/qyi8Ku-uvzM.jpg',
		alt: "Bar's Atmosphere",
		businessSlug: 'jaws',
	},
	{
		src: 'https://sun9-69.userapi.com/QyPyK5UQntMdE15SeCTyLodJdLDWUZsNjwZPEQ/LO40zhOLp6o.jpg',
		alt: "Bar's Atmosphere",
		businessSlug: 'jaws',
	},
	{
		src: 'https://sun9-11.userapi.com/kXaPkNZiGXMEBy-w-coxZb-v0DpoAOOoivFcYg/QV4Qm8l1p0k.jpg',
		alt: "Bar's Interior",
		businessSlug: 'mars',
	},
	{
		src: 'https://sun9-57.userapi.com/koK6nTefNb1w4QhGfxXc4ZQE_ANR2QpaIQHBPA/v53AOW6cI90.jpg',
		alt: "Bar's Interior",
		businessSlug: 'mars',
	},
	{
		src: 'https://sun9-9.userapi.com/Ku2qqKGDq1MhUp340QYZpmb1VFBj_i_XTg8vnQ/-UioFkpQjlU.jpg',
		alt: "Bar's Interior",
		businessSlug: 'mars',
	},
	{
		src: 'https://sun9-32.userapi.com/Sy2WVFeCqRIIjnNMY0xEGdECqpVsaO3sOWO4rQ/4isMomrkqRk.jpg',
		alt: "Bar's Staff",
		businessSlug: 'mars',
	},
	{
		src: 'https://sun9-23.userapi.com/-UubROenkc0MDt1UHhUBK_JtPlTXyWuj4fOG6g/xVwQYdiNZRA.jpg',
		alt: "Bar's Atmosphere",
		businessSlug: 'mars',
	},
	{
		src: 'https://sun9-55.userapi.com/IDVG_KMsV-XBy9_AHEpVgHlkDXhFv1Vp2jklWQ/IkQ7_VWwaQA.jpg',
		alt: "Bar's Atmosphere",
		businessSlug: 'mars',
	},
	{
		src: 'https://sun9-60.userapi.com/ixjE4kWMUtGlNFWQd-Cxuu00VVyXEcuskI8Zrg/-VLyzgVYhcs.jpg',
		alt: "Pub's Staff",
		businessSlug: 'pints',
	},
	{
		src: 'https://sun9-26.userapi.com/Fd3n7yxN083rLiD6dmLIraS-gGcDscLVGeOyJQ/JPqRbLdjxFA.jpg',
		alt: "Pub's Food",
		businessSlug: 'pints',
	},
	{
		src: 'https://sun9-50.userapi.com/hwj4yPUzvEwh_i4b2xUsFhFLWiu2woCpUHINOw/p8VFQvIpaDc.jpg',
		alt: "Pub's Guests",
		businessSlug: 'pints',
	},
	{
		src: 'https://sun9-70.userapi.com/e3KsXNE5g85Nbhi_-GZnawNhE143ybPFWNFTcw/xn8FNk73KGY.jpg',
		alt: "Pub's Guests",
		businessSlug: 'pints',
	},
	{
		src: 'https://sun9-71.userapi.com/3wx3TAvXPPDA2y_zJEDzbLlFZjmEUBTM9FzR8g/UIW5iuyB9AY.jpg',
		alt: "Pub's Food",
		businessSlug: 'pints',
	},
	{
		src: 'https://sun9-13.userapi.com/IzAZvYZ_9RAzEtSk8b66ZqVZa2eMgrVVtH4_aw/CV11ABHW_fk.jpg',
		alt: "Pub's Food",
		businessSlug: 'pints',
	},
	{
		src: 'https://sun9-66.userapi.com/GET0Fv4Bw0cqYyYHXlOEuXd2OpfgYDWx8lgggA/hMKWmc_Qg9g.jpg',
		alt: "Bar's Logo",
		businessSlug: 'rnb',
	},
	{
		src: 'https://sun9-72.userapi.com/9v0iYoUM3gjFv3_OsaTEmIuJ-BjobJkG8PZe5w/G1nIU51Y3To.jpg',
		alt: "Bar's Food",
		businessSlug: 'rnb',
	},
	{
		src: 'https://sun9-22.userapi.com/7t0I7OwVtKSMBAmVfSTob7GHIbpOb47INrP1rg/HDfF4gdbu-Q.jpg',
		alt: "Bar's Food",
		businessSlug: 'rnb',
	},
	{
		src: 'https://sun9-64.userapi.com/LH_SfyMZebO30kn7yvxs1COFVaFscmjuhCc5mw/ZhV8O_WpMjc.jpg',
		alt: "Bar's Food",
		businessSlug: 'rnb',
	},
	{
		src: 'https://sun9-69.userapi.com/kbDeVoU5aVpX4zP6SA0Yn74gRBqfwlRUuAq3yA/uBtHctfOmlU.jpg',
		alt: "Restaraunt's Interior",
		businessSlug: 'off',
	},
	{
		src: 'https://sun9-21.userapi.com/vctODSRjK4cPgZyN5RtvmsBrpJ8Lawe7JQkjtw/gfp2q0LLqXA.jpg',
		alt: "Restaraunt's Food",
		businessSlug: 'off',
	},
	{
		src: 'https://sun9-73.userapi.com/1gdAd88L9hz7S449Kk_HEvTEZrKh7HI4Yalv0w/P5TUBUomP_o.jpg',
		alt: "Restaraunt's Food",
		businessSlug: 'off',
	},
	{
		src: 'https://sun9-14.userapi.com/fiVyqWqfVhDrM8lMMvy7KNLB_4oAbUqfrrhuyA/dXIT_O1lrxE.jpg',
		alt: "Restaraunt's Food",
		businessSlug: 'off',
	},
];

export const barsPlacemarksData: Placemarks[] = [
	{
		latitude: 61.269424,
		longitude: 73.382403,
		businessSlug: 'off',
	},
	{
		latitude: 61.255827,
		longitude: 73.388001,
		businessSlug: 'off',
	},
];
