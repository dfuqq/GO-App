import React, { Fragment } from 'react';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Cell,
	List,
	Header,
	Placeholder,
	Div,
	Button,
	Gallery,
	Group,
	Separator,
	FixedLayout,
} from '@vkontakte/vkui';

import Icon56InfoOutline from '@vkontakte/icons/dist/56/info_outline';

const Places = ({
	id,
	changePanel,
	area,
	openFilters,
	openAreaFilters,
	parksFilter,
	museumsFilter,
	monumentsFilter,
	entertaimentFilter,
	architectureFilter,
}) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				Места
			</PanelHeader>
			{area === 'cntr' && (
				<Fragment>
					<Div>
						<Button size='xl' mode='primary' onClick={openFilters}>
							Фильтры
						</Button>
					</Div>
					<Header
						style={{
							userSelect: 'none',
							msUserSelect: 'none',
							MozUserSelect: 'none',
							KhtmlUserSelect: 'none',
							WebkitUserSelect: 'none',
							WebkitTouchCallout: 'none',
						}}>
						Центральный Район
					</Header>
					{parksFilter && (
						<List>
							<Cell
								expandable
								onClick={changePanel}
								data-to='agaz'
								description='Небольшая аллея со скульптурами'>
								Аллея "Газовиков"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='gpkio'
								description='Один из первых парков города'>
								Городской Парк Культуры и Отдыха
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='kedr'
								description='Популярный городской парк'>
								Парк "Кедровый Лог"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='sdet'
								description='Популярный городской сквер'>
								Сквер "Детства"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='snarod'
								description='Популярный городской сквер'>
								Сквер "Дружбы Народов"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='slav'
								description='Популярный городской сквер'>
								Сквер "Мемориал Славы"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='smld'
								description='Популярный городской сквер'>
								Сквер "Молодёжный"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='sstar'
								description='Крупнейший сквер города'>
								Сквер "Старожилов Сургута"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='scentr'
								description='Популярный городской сквер'>
								Сквер "Центральный"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='sener'
								description='Популярный городской сквер'>
								Сквер "Энергетиков"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='cplos'
								description='Новая городская площадь'>
								Центральная городская площадь
							</Cell>
						</List>
					)}
					{museumsFilter && (
						<List>
							<Cell
								expandable
								onClick={changePanel}
								data-to='sterh'
								description='Дом современного искусства'>
								Галерея Современного Искусства "Стерх"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='kupec'
								description='Памятник архитектуры XIX века'>
								Дом Купца Г.С. Клепикова
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='port'
								description='Площадка для различных мероприятий'>
								Культурный Центр "Порт"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='gzprm'
								description='Музей развития нефтяной промышленности'>
								Музей Истории "Газпрома"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='kuzn'
								description='Уникальная городская кузница'>
								Обская Кузница
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='ssur'
								description='Историко-культурный центр'>
								Старый Сургут
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='patr'
								description='Единственный центр патриотической тематики'>
								Центр Патриотического Наследия
							</Cell>
						</List>
					)}
					{monumentsFilter && (
						<List>
							<Cell
								expandable
								onClick={changePanel}
								data-to='mperv'
								description='Монумент первопроходцам Севера'>
								Монумент "Первым Строителям Нового Города"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='mneft'
								description='Монумент в честь нефтяных работников'>
								Монумент "Трудовому Подвигу Нефтяников"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='voinam'
								description='Монумент погибшим при исполнении долга'>
								Памятник "Воинам-Интернационалистам"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='dock'
								description='Монумент герою детских сказок'>
								Памятник "Доктору Айболиту"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='narod'
								description='Монумент в честь дружбы народов'>
								Памятник "Дружбы Народов"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='pgaz'
								description='Монумент работникам газодобычи'>
								Памятник "Землякам-Газовикам"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='zahar'
								description='Монумент известному журналисту'>
								Памятник Ивану Захарову
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='osnov'
								description='Главный монумент города'>
								Памятник Основателям
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='pstro'
								description='Монумент в честь строителей'>
								Памятник "Строителю"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='taras'
								description='Монумент украинскому поэту'>
								Памятник Тарасу Шевченко
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='uchit'
								description='Монумент работникам образования'>
								Памятник "Учительнице"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='lis'
								description='Монумент символу города'>
								Памятник Чёрному Лису
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='human'
								description='Копия зарубежной скульптуры'>
								Скульптура "Гуманоиды"
							</Cell>
						</List>
					)}
					{entertaimentFilter && (
						<List>
							<Cell
								expandable
								onClick={changePanel}
								data-to='bibl'
								description='Главная библиотека Сургута'>
								Библиотека им. А.С. Пушкина
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='dneft'
								description='Крупнейший концертный зал города'>
								ДИ "Нефтяник"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='snezh'
								description='Спортивное ядро города'>
								Стадион "Снежинка"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='filarm'
								description='Главный концертный зал города'>
								Сургутская филармония
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='tsgu'
								description='Один из главных театров города'>
								Театр СурГУ
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='cmoll'
								description='Один из крупных городских ТЦ'>
								ТЦ "Сити Молл"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='ckid'
								description='Популярный концертный зал'>
								ЦКИД "Камертон"
							</Cell>
						</List>
					)}
					{architectureFilter && (
						<List>
							<Cell
								expandable
								onClick={changePanel}
								data-to='bben'
								description='Школа изучения иностранных языков'>
								Биг-Бен
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='gperer'
								description='Недостроенный офис'>
								"Газпром Переработка"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='gtrans'
								description='Офис градообразующей компании'>
								"Газпром Трансгаз"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='zags'
								description='Городской ЗАГС'>
								Дворец Торжеств
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='sng'
								description='Офис градообразующей компании'>
								ПАО "Сургутнефтегаз"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='centr'
								description='Известная точка города'>
								ТЦ "City Centre"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='surgu'
								description='Главный университет города'>
								Университет
							</Cell>
						</List>
					)}
					{!parksFilter &&
						!museumsFilter &&
						!monumentsFilter &&
						!entertaimentFilter &&
						!architectureFilter && (
							<List>
								<Cell
									expandable
									onClick={changePanel}
									data-to='agaz'
									description='Небольшая аллея со скульптурами'>
									Аллея "Газовиков"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='bibl'
									description='Главная библиотека Сургута'>
									Библиотека им. А.С. Пушкина
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='bben'
									description='Школа изучения иностранных языков'>
									Биг-Бен
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='gperer'
									description='Недостроенный офис'>
									"Газпром Переработка"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='gtrans'
									description='Офис градообразующей компании'>
									"Газпром Трансгаз"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='sterh'
									description='Дом современного искусства'>
									Галерея Современного Искусства "Стерх"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='gpkio'
									description='Один из первых парков города'>
									Городской Парк Культуры и Отдыха
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='zags'
									description='Городской ЗАГС'>
									Дворец Торжеств
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='dneft'
									description='Крупнейший концертный зал города'>
									ДИ "Нефтяник"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='kupec'
									description='Памятник архитектуры XIX века'>
									Дом Купца Г.С. Клепикова
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='port'
									description='Площадка для различных мероприятий'>
									Культурный Центр "Порт"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='mperv'
									description='Монумент первопроходцам Севера'>
									Монумент "Первым Строителям Нового Города"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='mneft'
									description='Монумент в честь нефтяных работников'>
									Монумент "Трудовому Подвигу Нефтяников"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='gzprm'
									description='Музей развития нефтяной промышленности'>
									Музей Истории "Газпрома"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='kuzn'
									description='Уникальная городская кузница'>
									Обская Кузница
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='voinam'
									description='Монумент погибшим при исполнении долга'>
									Памятник "Воинам-Интернационалистам"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='narod'
									description='Монумент в честь дружбы народов'>
									Памятник "Дружбы Народов"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='dock'
									description='Монумент герою детских сказок'>
									Памятник "Доктору Айболиту"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='pgaz'
									description='Монумент работникам газодобычи'>
									Памятник "Землякам-Газовикам"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='zahar'
									description='Монумент известному журналисту'>
									Памятник Ивану Захарову
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='osnov'
									description='Главный монумент города'>
									Памятник Основателям
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='pstro'
									description='Монумент в честь строителей'>
									Памятник "Строителю"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='taras'
									description='Монумент украинскому поэту'>
									Памятник Тарасу Шевченко
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='uchit'
									description='Монумент работникам образования'>
									Памятник "Учительнице"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='lis'
									description='Монумент символу города'>
									Памятник Чёрному Лису
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='kedr'
									description='Популярный городской парк'>
									Парк "Кедровый Лог"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='sng'
									description='Офис градообразующей компании'>
									ПАО "Сургутнефтегаз"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='sdet'
									description='Популярный городской сквер'>
									Сквер "Детства"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='snarod'
									description='Популярный городской сквер'>
									Сквер "Дружбы Народов"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='slav'
									description='Популярный городской сквер'>
									Сквер "Мемориал Славы"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='smld'
									description='Популярный городской сквер'>
									Сквер "Молодёжный"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='sstar'
									description='Крупнейший сквер города'>
									Сквер "Старожилов Сургута"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='scentr'
									description='Популярный городской сквер'>
									Сквер "Центральный"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='sener'
									description='Популярный городской сквер'>
									Сквер "Энергетиков"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='human'
									description='Копия зарубежной скульптуры'>
									Скульптура "Гуманоиды"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='snezh'
									description='Спортивное ядро города'>
									Стадион "Снежинка"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='ssur'
									description='Историко-культурный центр'>
									Старый Сургут
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='filarm'
									description='Главный концертный зал города'>
									Сургутская филармония
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='tsgu'
									description='Один из главных театров города'>
									Театр СурГУ
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='centr'
									description='Известная точка города'>
									ТЦ "City Centre"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='cmoll'
									description='Один из крупных городских ТЦ'>
									ТЦ "Сити Молл"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='surgu'
									description='Главный университет города'>
									Университет
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='patr'
									description='Единственный центр патриотической тематики'>
									Центр Патриотического Наследия
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='cplos'
									description='Новая городская площадь'>
									Центральная городская площадь
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='ckid'
									description='Популярный концертный зал'>
									ЦКИД "Камертон"
								</Cell>
							</List>
						)}
					<Div>
						<Div>
							<Div>
								<FixedLayout vertical='bottom'>
									<Div>
										<Button size='xl' mode='primary' onClick={openAreaFilters}>
											Выбрать район
										</Button>
									</Div>
								</FixedLayout>
							</Div>
						</Div>
					</Div>
				</Fragment>
			)}
			{area === 'west' && (
				<Fragment>
					<Div>
						<Button size='xl' mode='primary' onClick={openFilters}>
							Фильтры
						</Button>
					</Div>
					<Header
						style={{
							userSelect: 'none',
							msUserSelect: 'none',
							MozUserSelect: 'none',
							KhtmlUserSelect: 'none',
							WebkitUserSelect: 'none',
							WebkitTouchCallout: 'none',
						}}>
						Восточный Район
					</Header>
					{parksFilter && (
						<List>
							<Cell
								expandable
								onClick={changePanel}
								data-to='nab'
								description='Территория бывшего речного вокзала'>
								Набережная Речпорта
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='pgeo'
								description='Парк на юго-востоке города'>
								Парк "Геологов"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='saima'
								description='Главный парк города'>
								Парк "За Саймой"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='sgeo'
								description='Сквер в юго-восточной части города'>
								Сквер "Геологов-Первопроходцев"
							</Cell>
						</List>
					)}
					{museumsFilter && (
						<List>
							<Cell
								expandable
								onClick={changePanel}
								data-to='salm'
								description='Дом-музей первооткрывателя Сибирской нефти'>
								Музей Ф.К. Салманова
							</Cell>
						</List>
					)}
					{monumentsFilter && (
						<List>
							<Cell
								expandable
								onClick={changePanel}
								data-to='obel'
								description='Памятный обелиск воинам ВОВ'>
								Обелиск "Ушедшим на Фронт"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='budda'
								description='Монумент в честь будизма'>
								Памятник Будде
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='repres'
								description='Монумент в честь спецпереселенцов'>
								Памятник "Жертвам Репрессий"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='btrud'
								description='Монумент в честь рыбокомбината'>
								Памятник "Мужеству Рыбаков"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='nerozh'
								description='Копия зарубежной скульптуры'>
								Памятник "Нерождённым Детям"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='rib'
								description='Монумент в честь работников тыла'>
								Памятник "Труженикам Рыбокомбината"
							</Cell>
						</List>
					)}
					{entertaimentFilter && (
						<List>
							<Cell
								expandable
								onClick={changePanel}
								data-to='stroit'
								description='Популярный концертный зал'>
								Городской Культурный Центр
							</Cell>
						</List>
					)}
					{architectureFilter && (
						<List>
							<Cell
								expandable
								onClick={changePanel}
								data-to='univ'
								description='Популярная улица Сургута'>
								Университетская
							</Cell>
						</List>
					)}
					{!parksFilter &&
						!museumsFilter &&
						!monumentsFilter &&
						!entertaimentFilter &&
						!architectureFilter && (
							<List>
								<Cell
									expandable
									onClick={changePanel}
									data-to='stroit'
									description='Популярный концертный зал'>
									Городской Культурный Центр
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='salm'
									description='Дом-музей первооткрывателя Сибирской нефти'>
									Музей Ф.К. Салманова
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='nab'
									description='Территория бывшего речного вокзала'>
									Набережная Речпорта
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='obel'
									description='Памятный обелиск воинам ВОВ'>
									Обелиск "Ушедшим на Фронт"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='budda'
									description='Монумент в честь будизма'>
									Памятник Будде
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='repres'
									description='Монумент в честь спецпереселенцов'>
									Памятник "Жертвам Репрессий"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='btrud'
									description='Монумент в честь рыбокомбината'>
									Памятник "Мужеству Рыбаков"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='nerozh'
									description='Копия зарубежной скульптуры'>
									Памятник "Нерождённым Детям"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='rib'
									description='Монумент в честь работников тыла'>
									Памятник "Труженикам Рыбокомбината"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='univ'
									description='Популярная улица Сургута'>
									Университетская
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='pgeo'
									description='Парк на юго-востоке города'>
									Парк "Геологов"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='saima'
									description='Главный парк города'>
									Парк "За Саймой"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='sgeo'
									description='Сквер в юго-восточной части города'>
									Сквер "Геологов-Первопроходцев"
								</Cell>
							</List>
						)}
					<Div>
						<Div>
							<Div>
								<FixedLayout vertical='bottom'>
									<Div>
										<Button size='xl' mode='primary' onClick={openAreaFilters}>
											Выбрать район
										</Button>
									</Div>
								</FixedLayout>
							</Div>
						</Div>
					</Div>
				</Fragment>
			)}
			{area === 'nwl' && (
				<Fragment>
					<List>
						<Header
							style={{
								userSelect: 'none',
								msUserSelect: 'none',
								MozUserSelect: 'none',
								KhtmlUserSelect: 'none',
								WebkitUserSelect: 'none',
								WebkitTouchCallout: 'none',
							}}>
							Северо-Восточный Жилой Район
						</Header>
						<Cell
							expandable
							onClick={changePanel}
							data-to='musclx'
							description='Крупный музейный комплекс'>
							Музейный Центр
						</Cell>
						<Cell
							expandable
							onClick={changePanel}
							data-to='pmed'
							description='Монумент в честь врачей'>
							Памятник "Медсестре"
						</Cell>
						<Cell
							expandable
							onClick={changePanel}
							data-to='smile'
							description='Монумент в честь эмоции'>
							Памятник "Улыбке"
						</Cell>
						<Cell
							expandable
							onClick={changePanel}
							data-to='vershina'
							description='Популярный городской ТЦ'>
							ТЦ "Вершина"
						</Cell>
						<Cell
							expandable
							onClick={changePanel}
							data-to='sgusch'
							description='Монумент популярного продукта'>
							Памятник Сгущёнке
						</Cell>
						<FixedLayout vertical='bottom'>
							<Div>
								<Button size='xl' mode='primary' onClick={openAreaFilters}>
									Выбрать район
								</Button>
							</Div>
						</FixedLayout>
					</List>
				</Fragment>
			)}
			{area === 'nl' && (
				<Fragment>
					<Div>
						<Button size='xl' mode='primary' onClick={openFilters}>
							Фильтры
						</Button>
					</Div>
					<Header
						style={{
							userSelect: 'none',
							msUserSelect: 'none',
							MozUserSelect: 'none',
							KhtmlUserSelect: 'none',
							WebkitUserSelect: 'none',
							WebkitTouchCallout: 'none',
						}}>
						Северный Жилой Район
					</Header>
					{parksFilter && (
						<List>
							<Cell
								expandable
								onClick={changePanel}
								data-to='pkey'
								description='Новый популярный парк'>
								Парк "Новые Ключи"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='chaes'
								description='Сквер в честь ликвидаторов аварии'>
								Сквер "Памяти Чернобыльцев"
							</Cell>
						</List>
					)}
					{museumsFilter && (
						<List>
							<Cell
								expandable
								onClick={changePanel}
								data-to='brmsm'
								description='Музей создания моста'>
								Музей Югорского Моста
							</Cell>
						</List>
					)}
					{monumentsFilter && (
						<List>
							<Cell
								expandable
								onClick={changePanel}
								data-to='pavia'
								description='Монумент Сургутскому авиаотряду'>
								Памятник "Авиаторам Сибири"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='poezd'
								description='Монумент первому тепловозу в городе'>
								Памятник "Первому поезду"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='polet'
								description='Скульптура на северном въезде'>
								Стела "Полёт"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='surgut'
								description='Скульптура на западном въезде'>
								Стела "Сургут"
							</Cell>
						</List>
					)}
					{entertaimentFilter && (
						<List>
							<Cell
								expandable
								onClick={changePanel}
								data-to='smdt'
								description='Популярный городской театр'>
								Сургусткий Музыкально-Драматический Театр
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='agora'
								description='Популярный городской ТЦ'>
								ТЦ "Агора"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='aura'
								description='Один из крупных городских ТЦ'>
								ТЦ "Аура"
							</Cell>
						</List>
					)}
					{architectureFilter && (
						<List>
							<Cell
								expandable
								onClick={changePanel}
								data-to='aerop'
								description='Сургутский аэровокзал'>
								Аэропорт
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='trakt'
								description='Транспортная артерия города'>
								Тюменский Тракт
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='bridge'
								description='Важнейший транспортный узел Сургута'>
								Югорский Мост
							</Cell>
						</List>
					)}
					{!parksFilter &&
						!museumsFilter &&
						!monumentsFilter &&
						!entertaimentFilter &&
						!architectureFilter && (
							<List>
								<Cell
									expandable
									onClick={changePanel}
									data-to='aerop'
									description='Сургутский аэровокзал'>
									Аэропорт
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='bridge'
									description='Важнейший транспортный узел Сургута'>
									Мост через Обь
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='brmsm'
									description='Музей создания моста'>
									Музей Югорского Моста
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='pavia'
									description='Монумент Сургутскому авиаотряду'>
									Памятник "Авиаторам Сибири"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='poezd'
									description='Монумент первому тепловозу в городе'>
									Памятник "Первому Поезду"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='pkey'
									description='Новый популярный парк'>
									Парк "Новые Ключи"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='chaes'
									description='Сквер в честь ликвидаторов аварии'>
									Сквер "Памяти Чернобыльцев"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='polet'
									description='Скульптура на северном въезде'>
									Стела "Полёт"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='surgut'
									description='Скульптура на западном въезде'>
									Стела "Сургут"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='smdt'
									description='Популярный городской театр'>
									Сургутский Музыкально-Драматический Театр
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='agora'
									description='Популярный городской ТЦ'>
									ТЦ "Агора"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='aura'
									description='Один из крупных городских ТЦ'>
									ТЦ "Аура"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='trakt'
									description='Транспортная артерия города'>
									Тюменский Тракт
								</Cell>
							</List>
						)}
					<Div>
						<Div>
							<Div>
								<FixedLayout vertical='bottom'>
									<Div>
										<Button size='xl' mode='primary' onClick={openAreaFilters}>
											Выбрать район
										</Button>
									</Div>
								</FixedLayout>
							</Div>
						</Div>
					</Div>
				</Fragment>
			)}
			{area === 'all' && (
				<Fragment>
					<Div>
						<Button size='xl' mode='primary' onClick={openFilters}>
							Фильтры
						</Button>
					</Div>
					<Header
						style={{
							userSelect: 'none',
							msUserSelect: 'none',
							MozUserSelect: 'none',
							KhtmlUserSelect: 'none',
							WebkitUserSelect: 'none',
							WebkitTouchCallout: 'none',
						}}>
						Все Районы
					</Header>
					{parksFilter && (
						<List>
							<Cell
								expandable
								onClick={changePanel}
								data-to='agaz'
								description='Небольшая аллея со скульптурами'>
								Аллея "Газовиков"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='gpkio'
								description='Один из первых парков города'>
								Городской Парк Культуры и Отдыха
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='nab'
								description='Территория бывшего речного вокзала'>
								Набережная Речпорта
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='pgeo'
								description='Парк на юго-востоке города'>
								Парк "Геологов"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='saima'
								description='Главный парк города'>
								Парк "За Саймой"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='kedr'
								description='Популярный городской парк'>
								Парк "Кедровый Лог"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='pkey'
								description='Новый популярный парк'>
								Парк "Новые Ключи"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='sgeo'
								description='Сквер в юго-восточной части города'>
								Сквер "Геологов-Первопроходцев"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='sdet'
								description='Популярный городской сквер'>
								Сквер "Детства"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='snarod'
								description='Популярный городской сквер'>
								Сквер "Дружбы Народов"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='slav'
								description='Популярный городской сквер'>
								Сквер "Мемориал Славы"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='smld'
								description='Популярный городской сквер'>
								Сквер "Молодёжный"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='chaes'
								description='Сквер в честь ликвидаторов аварии'>
								Сквер "Памяти Чернобыльцев"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='sstar'
								description='Крупнейший сквер города'>
								Сквер "Старожилов Сургута"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='scentr'
								description='Популярный городской сквер'>
								Сквер "Центральный"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='sener'
								description='Популярный городской сквер'>
								Сквер "Энергетиков"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='cplos'
								description='Новая городская площадь'>
								Центральная городская площадь
							</Cell>
						</List>
					)}
					{museumsFilter && (
						<List>
							<Cell
								expandable
								onClick={changePanel}
								data-to='sterh'
								description='Дом современного искусства'>
								Галерея Современного Искусства "Стерх"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='kupec'
								description='Памятник архитектуры XIX века'>
								Дом Купца Г.С. Клепикова
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='port'
								description='Площадка для различных мероприятий'>
								Культурный Центр "Порт"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='gzprm'
								description='Музей развития нефтяной промышленности'>
								Музей Истории "Газпрома"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='brmsm'
								description='Музей создания моста'>
								Музей Югорского Моста
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='salm'
								description='Дом-музей первооткрывателя Сибирской нефти'>
								Музей Ф.К. Салманова
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='musclx'
								description='Крупный музейный комплекс'>
								Музейный Комплекс
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='kuzn'
								description='Уникальная городская кузница'>
								Обская Кузница
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='ssur'
								description='Историко-культурный центр'>
								Старый Сургут
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='patr'
								description='Единственный центр патриотической тематики'>
								Центр Патриотического Наследия
							</Cell>
						</List>
					)}
					{monumentsFilter && (
						<List>
							<Cell
								expandable
								onClick={changePanel}
								data-to='mneft'
								description='Монумент в честь нефтяных работников'>
								Монумент "Трудовому Подвигу Нефтяников"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='mperv'
								description='Монумент первопроходцам Севера'>
								Монумент "Первым Строителям Нового Города"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='obel'
								description='Памятный обелиск воинам ВОВ'>
								Обелиск "Ушедшим на Фронт"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='pavia'
								description='Монумент Сургутскому авиаотряду'>
								Памятник "Авиаторам Сибири"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='budda'
								description='Монумент в честь будизма'>
								Памятник Будде
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='voinam'
								description='Монумент погибшим при исполнении долга'>
								Памятник "Воинам-Интернационалистам"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='dock'
								description='Монумент герою детских сказок'>
								Памятник "Доктору Айболиту"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='narod'
								description='Монумент в честь дружбы народов'>
								Памятник "Дружбы Народов"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='repres'
								description='Монумент в честь спецпереселенцов'>
								Памятник "Жертвам Репрессий"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='pgaz'
								description='Монумент работникам газодобычи'>
								Памятник "Землякам-Газовикам"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='zahar'
								description='Монумент известному журналисту'>
								Памятник Ивану Захарову
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='pmed'
								description='Монумент в честь врачей'>
								Памятник "Медсестре"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='btrud'
								description='Монумент в честь рыбокомбината'>
								Памятник "Мужеству Рыбаков"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='nerozh'
								description='Копия зарубежной скульптуры'>
								Памятник "Нерождённым Детям"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='osnov'
								description='Главный монумент города'>
								Памятник Основателям
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='poezd'
								description='Монумент первому тепловозу в городе'>
								Памятник "Первому Поезду"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='sgusch'
								description='Монумeнт популярного продукта'>
								Памятник Сгущёнке
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='pstro'
								description='Монумент в честь строителей'>
								Памятник "Строителю"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='taras'
								description='Монумент украинскому поэту'>
								Памятник Тарасу Шевченко
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='rib'
								description='Монумент в честь работников тыла'>
								Памятник "Труженикам Рыбокомбината"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='smile'
								description='Монумент в честь эмоции'>
								Памятник "Улыбке"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='uchit'
								description='Монумент работникам образования'>
								Памятник "Учительнице"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='lis'
								description='Монумент символу города'>
								Памятник Чёрному Лису
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='human'
								description='Копия зарубежной скульптуры'>
								Скульптура "Гуманоиды"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='polet'
								description='Скульптура на северном въезде'>
								Стела "Полёт"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='surgut'
								description='Скульптура на западном въезде'>
								Стела "Сургут"
							</Cell>
						</List>
					)}
					{entertaimentFilter && (
						<List>
							<Cell
								expandable
								onClick={changePanel}
								data-to='bibl'
								description='Главная библиотека Сургута'>
								Библиотека им. А.С. Пушкина
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='stroit'
								description='Популярный концертный зал'>
								Городской Культурный Центр
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='dneft'
								description='Крупнейший концертный зал города'>
								ДИ "Нефтяник"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='snezh'
								description='Спортивное ядро города'>
								Стадион "Снежинка"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='smdt'
								description='Популярный городской театр'>
								Сургутский Музыкально-Драматический Театр
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='filarm'
								description='Главный концертный зал города'>
								Сургутская филармония
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='tsgu'
								description='Один из главных театров города'>
								Театр СурГУ
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='agora'
								description='Популярный городской ТЦ'>
								ТЦ "Агора"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='aura'
								description='Один из крупных городских ТЦ'>
								ТЦ "Аура"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='vershina'
								description='Популярный городской ТЦ'>
								ТЦ "Вершина"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='cmoll'
								description='Один из крупных городских ТЦ'>
								ТЦ "Сити Молл"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='ckid'
								description='Популярный концертный зал'>
								ЦКИД "Камертон"
							</Cell>
						</List>
					)}
					{architectureFilter && (
						<List>
							<Cell
								expandable
								onClick={changePanel}
								data-to='aerop'
								description='Сургутский аэровокзал'>
								Аэропорт
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='bben'
								description='Школа изучения иностранных языков'>
								Биг-Бен
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='gperer'
								description='Недостроенный офис'>
								"Газпром Переработка"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='gtrans'
								description='Офис градообразующей компании'>
								"Газпром Трансгаз"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='zags'
								description='Городской ЗАГС'>
								Дворец Торжеств
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='bridge'
								description='Важнейший транспортный узел Сургута'>
								Мост через Обь
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='sng'
								description='Офис градообразующей компании'>
								ПАО "Сургутнефтегаз"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='centr'
								description='Известная точка города'>
								ТЦ "City Centre"
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='trakt'
								description='Транспортная артерия города'>
								Тюменский Тракт
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='surgu'
								description='Главный университет города'>
								Университет
							</Cell>
							<Cell
								expandable
								onClick={changePanel}
								data-to='univ'
								description='Популярная улица Сургута'>
								Университетская
							</Cell>
						</List>
					)}
					{!parksFilter &&
						!museumsFilter &&
						!monumentsFilter &&
						!entertaimentFilter &&
						!architectureFilter && (
							<List>
								<Cell
									expandable
									onClick={changePanel}
									data-to='agaz'
									description='Небольшая аллея со скульптурами'>
									Аллея "Газовиков"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='aerop'
									description='Сургутский аэровокзал'>
									Аэропорт
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='bibl'
									description='Главная библиотека Сургута'>
									Библиотека им. А.С. Пушкина
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='bben'
									description='Школа изучения иностранных языков'>
									Биг-Бен
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='gperer'
									description='Недостроенный офис'>
									"Газпром Переработка"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='gtrans'
									description='Офис градообразующей компании'>
									"Газпром Трансгаз"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='sterh'
									description='Дом современного искусства'>
									Галерея Современного Искусства "Стерх"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='stroit'
									description='Популярный концертный зал'>
									Городской Культурный Центр
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='gpkio'
									description='Один из первых парков города'>
									Городской Парк Культуры и Отдыха
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='zags'
									description='Городской ЗАГС'>
									Дворец Торжеств
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='dneft'
									description='Крупнейший концертный зал города'>
									ДИ "Нефтяник"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='kupec'
									description='Памятник архитектуры XIX века'>
									Дом Купца Г.С. Клепикова
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='port'
									description='Площадка для различных мероприятий'>
									Культурный Центр "Порт"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='mperv'
									description='Монумент первопроходцам Севера'>
									Монумент "Первым Строителям Нового Города"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='mneft'
									description='Монумент в честь нефтяных работников'>
									Монумент "Трудовому Подвигу Нефтяников"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='bridge'
									description='Важнейший транспортный узел Сургута'>
									Мост через Обь
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='gzprm'
									description='Музей развития нефтяной промышленности'>
									Музей Истории "Газпрома"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='musclx'
									description='Крупный музейный комплекс'>
									Музейный Комплекс
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='brmsm'
									description='Музей создания моста'>
									Музей Югорского Моста
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='salm'
									description='Дом-музей первооткрывателя Сибирской нефти'>
									Музей Ф.К. Салманова
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='nab'
									description='Территория бывшего речного вокзала'>
									Набережная Речпорта
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='obel'
									description='Памятный обелиск воинам ВОВ'>
									Обелиск "Ушедшим на Фронт"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='kuzn'
									description='Уникальная городская кузница'>
									Обская Кузница
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='pavia'
									description='Монумент Сургутскому авиаотряду'>
									Памятник "Авиаторам Сибири"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='budda'
									description='Монумент в честь будизма'>
									Памятник Будде
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='voinam'
									description='Монумент погибшим при исполнении долга'>
									Памятник "Воинам-Интернационалистам"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='dock'
									description='Монумент герою детских сказок'>
									Памятник "Доктору Айболиту"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='narod'
									description='Монумент в честь дружбы народов'>
									Памятник "Дружбы Народов"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='repres'
									description='Монумент в честь спецпереселенцов'>
									Памятник "Жертвам Репрессий"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='pgaz'
									description='Монумент работникам газодобычи'>
									Памятник "Землякам-Газовикам"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='zahar'
									description='Монумент известному журналисту'>
									Памятник Ивану Захарову
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='pmed'
									description='Монумент в честь врачей'>
									Памятник "Медсестре"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='btrud'
									description='Монумент в честь рыбокомбината'>
									Памятник "Мужеству Рыбаков"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='nerozh'
									description='Копия зарубежной скульптуры'>
									Памятник "Нерождённым Детям"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='osnov'
									description='Главный монумент города'>
									Памятник Основателям
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='poezd'
									description='Монумент первому тепловозу в городе'>
									Памятник "Первому Поезду"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='sgusch'
									description='Монумент популярного продукта'>
									Памятник Сгущёнке
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='pstro'
									description='Монумент в честь строителей'>
									Памятник "Строителю"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='taras'
									description='Монумент украинскому поэту'>
									Памятник Тарасу Шевченко
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='rib'
									description='Монумент в честь работников тыла'>
									Памятник "Труженикам Рыбокомбината"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='smile'
									description='Монумент в честь эмоции'>
									Памятник "Улыбке"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='uchit'
									description='Монумент работникам образования'>
									Памятник "Учительнице"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='lis'
									description='Монумент символу города'>
									Памятник Чёрному Лису
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='sng'
									description='Офис градообразующей компании'>
									ПАО "Сургутнефтегаз"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='pgeo'
									description='Парк на юго-востоке города'>
									Парк "Геологов"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='saima'
									description='Главный парк города'>
									Парк "За Саймой"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='kedr'
									description='Популярный городской парк'>
									Парк "Кедровый Лог"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='pkey'
									description='Новый популярный парк'>
									Парк "Новые Ключи"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='sgeo'
									description='Сквер в юго-восточной части города'>
									Сквер "Геологов-Первопроходцев"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='sdet'
									description='Популярный городской сквер'>
									Сквер "Детства"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='snarod'
									description='Популярный городской сквер'>
									Сквер "Дружбы Народов"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='slav'
									description='Популярный городской сквер'>
									Сквер "Мемориал Славы"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='smld'
									description='Популярный городской сквер'>
									Сквер "Молодёжный"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='chaes'
									description='Сквер в честь ликвидаторов аварии'>
									Сквер "Памяти Чернобыльцев"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='sstar'
									description='Крупнейший сквер города'>
									Сквер "Старожилов Сургута"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='scentr'
									description='Популярный городской сквер'>
									Сквер "Центральный"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='sener'
									description='Популярный городской сквер'>
									Сквер "Энергетиков"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='human'
									description='Копия зарубежной скульптуры'>
									Скульптура "Гуманоиды"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='snezh'
									description='Спортивное ядро города'>
									Стадион "Снежинка"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='ssur'
									description='Историко-культурный центр'>
									Старый Сургут
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='polet'
									description='Скульптура на северном въезде'>
									Стела "Полёт"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='surgut'
									description='Скульптура на западном въезде'>
									Стела "Сургут"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='smdt'
									description='Популярный городской театр'>
									Сургутский Музыкально-Драматический Театр
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='filarm'
									description='Главный концертный зал города'>
									Сургутская филармония
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='tsgu'
									description='Один из главных театров города'>
									Театр СурГУ
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='centr'
									description='Известная точка города'>
									ТЦ "City Centre"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='agora'
									description='Популярный городской ТЦ'>
									ТЦ "Агора"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='aura'
									description='Один из крупных городских ТЦ'>
									ТЦ "Аура"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='vershina'
									description='Популярный городской ТЦ'>
									ТЦ "Вершина"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='cmoll'
									description='Один из крупных городских ТЦ'>
									ТЦ "Сити Молл"
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='trakt'
									description='Транспортная артерия города'>
									Тюменский Тракт
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='surgu'
									description='Главный университет города'>
									Университет
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='univ'
									description='Популярная улица Сургута'>
									Университетская
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='patr'
									description='Единственный центр патриотической тематики'>
									Центр Патриотического Наследия
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='cplos'
									description='Новая городская площадь'>
									Центральная городская площадь
								</Cell>
								<Cell
									expandable
									onClick={changePanel}
									data-to='ckid'
									description='Популярный концертный зал'>
									ЦКИД "Камертон"
								</Cell>
							</List>
						)}
					<Div>
						<Div>
							<Div>
								<FixedLayout vertical='bottom'>
									<Div>
										<Button size='xl' mode='primary' onClick={openAreaFilters}>
											Выбрать район
										</Button>
									</Div>
								</FixedLayout>
							</Div>
						</Div>
					</Div>
				</Fragment>
			)}
			{area === null && (
				<Fragment>
					<Header
						mode='secondary'
						style={{
							userSelect: 'none',
							msUserSelect: 'none',
							MozUserSelect: 'none',
							KhtmlUserSelect: 'none',
							WebkitUserSelect: 'none',
							WebkitTouchCallout: 'none',
						}}>
						Наши Фавориты
					</Header>
					<Gallery slideWidth='92%' style={{ height: 200 }} align='center'>
						<img
							src='https://sun9-55.userapi.com/yTKHn4Y6ptM-Jz-Y9A0HD-C8gZFMHaZuwS-K7g/KdONUzkzZM4.jpg'
							style={{
								objectFit: 'contain',
								borderRadius: '20px',
								margin: '0 3px',
								width: '90vw',
								backgroundColor: '#000',
							}}
							alt='osnovcrd'
							onClick={changePanel}
							data-to='osnovcrd'
						/>
						<img
							src='https://sun9-44.userapi.com/I-UM88WCVwVhh5QpE8FGmogz6aKLdxmBc4bq0A/mgk6RgOq5c0.jpg'
							style={{
								objectFit: 'contain',
								borderRadius: '20px',
								margin: '0 3px',
								width: '90vw',
								backgroundColor: '#000',
							}}
							alt='ssurcrd'
							onClick={changePanel}
							data-to='ssurcrd'
						/>
						<img
							src='https://sun9-54.userapi.com/BnecEL2jHbz1VyNwTq5eKfqX_oUGImiu-rgMdQ/Z4cL14qo8xQ.jpg'
							style={{
								objectFit: 'contain',
								borderRadius: '20px',
								margin: '0 3px',
								width: '90vw',
								backgroundColor: '#000',
							}}
							alt='kedrcrd'
							onClick={changePanel}
							data-to='kedrcrd'
						/>
						<img
							src='https://sun9-40.userapi.com/CPi8dmJxIXPbYDobKqlhAscmGyTrZ-9E9dgE9g/KLVlFRaqlC4.jpg'
							style={{
								objectFit: 'contain',
								borderRadius: '20px',
								margin: '0 3px',
								width: '90vw',
								backgroundColor: '#000',
							}}
							alt='saimacrd'
							onClick={changePanel}
							data-to='saimacrd'
						/>
						<img
							src='https://sun9-75.userapi.com/g7zQFq8An0RZorOQSd67af_OJRQ6OzGK-2OhvQ/EX39HRhSuf0.jpg'
							style={{
								objectFit: 'contain',
								borderRadius: '20px',
								margin: '0 3px',
								width: '90vw',
								backgroundColor: '#000',
							}}
							alt='univcrd'
							onClick={changePanel}
							data-to='univcrd'
						/>
					</Gallery>

					<Separator
						wide
						style={{ paddingBottom: '10px', marginTop: '10px' }}
					/>

					<Group>
						<Placeholder
							icon={<Icon56InfoOutline />}
							header='Выберите район'
							action={
								<Button size='xl' mode='primary' onClick={openAreaFilters}>
									Выбрать
								</Button>
							}>
							Чтобы показать Вам места, Вы должны выбрать желаемый район
						</Placeholder>
					</Group>
				</Fragment>
			)}
		</Panel>
	);
};

export default Places;
