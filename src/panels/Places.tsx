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

import { Icon56InfoOutline } from '@vkontakte/icons/';

interface Props {
	id: string;
	changePanel: (e: React.MouseEvent) => void;
	area: string;
	openFilters: () => void;
	openAreaFilters: () => void;
	parksFilter: boolean;
	museumsFilter: boolean;
	monumentsFilter: boolean;
	entertaimentFilter: boolean;
	architectureFilter: boolean;
}

export const Places = ({
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
}: Props) => {
	return (
		<Panel id={id}>
			<PanelHeader
				before={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				Места
			</PanelHeader>
			{area === 'cntr' && (
				<Fragment>
					<Div>
						<Button
							size='l'
							mode='primary'
							onClick={openFilters}>
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
								chevron='always'
								onClick={changePanel}
								data-to='agaz'
								subtitle='Небольшая аллея со скульптурами'>
								Аллея "Газовиков"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='gpkio'
								subtitle='Один из первых парков города'>
								Городской Парк Культуры и Отдыха
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='kedr'
								subtitle='Популярный городской парк'>
								Парк "Кедровый Лог"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='sdet'
								subtitle='Популярный городской сквер'>
								Сквер "Детства"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='snarod'
								subtitle='Популярный городской сквер'>
								Сквер "Дружбы Народов"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='slav'
								subtitle='Популярный городской сквер'>
								Сквер "Мемориал Славы"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='smld'
								subtitle='Популярный городской сквер'>
								Сквер "Молодёжный"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='sstar'
								subtitle='Крупнейший сквер города'>
								Сквер "Старожилов Сургута"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='scentr'
								subtitle='Популярный городской сквер'>
								Сквер "Центральный"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='sener'
								subtitle='Популярный городской сквер'>
								Сквер "Энергетиков"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='cplos'
								subtitle='Новая городская площадь'>
								Центральная городская площадь
							</Cell>
						</List>
					)}
					{museumsFilter && (
						<List>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='sterh'
								subtitle='Дом современного искусства'>
								Галерея Современного Искусства "Стерх"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='kupec'
								subtitle='Памятник архитектуры XIX века'>
								Дом Купца Г.С. Клепикова
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='port'
								subtitle='Площадка для различных мероприятий'>
								Культурный Центр "Порт"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='gzprm'
								subtitle='Музей развития нефтяной промышленности'>
								Музей Истории "Газпрома"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='kuzn'
								subtitle='Уникальная городская кузница'>
								Обская Кузница
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='ssur'
								subtitle='Историко-культурный центр'>
								Старый Сургут
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='patr'
								subtitle='Единственный центр патриотической тематики'>
								Центр Патриотического Наследия
							</Cell>
						</List>
					)}
					{monumentsFilter && (
						<List>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='mperv'
								subtitle='Монумент первопроходцам Севера'>
								Монумент "Первым Строителям Нового Города"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='mneft'
								subtitle='Монумент в честь нефтяных работников'>
								Монумент "Трудовому Подвигу Нефтяников"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='voinam'
								subtitle='Монумент погибшим при исполнении долга'>
								Памятник "Воинам-Интернационалистам"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='dock'
								subtitle='Монумент герою детских сказок'>
								Памятник "Доктору Айболиту"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='narod'
								subtitle='Монумент в честь дружбы народов'>
								Памятник "Дружбы Народов"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='pgaz'
								subtitle='Монумент работникам газодобычи'>
								Памятник "Землякам-Газовикам"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='zahar'
								subtitle='Монумент известному журналисту'>
								Памятник Ивану Захарову
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='osnov'
								subtitle='Главный монумент города'>
								Памятник Основателям
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='pstro'
								subtitle='Монумент в честь строителей'>
								Памятник "Строителю"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='taras'
								subtitle='Монумент украинскому поэту'>
								Памятник Тарасу Шевченко
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='uchit'
								subtitle='Монумент работникам образования'>
								Памятник "Учительнице"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='lis'
								subtitle='Монумент символу города'>
								Памятник Чёрному Лису
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='human'
								subtitle='Копия зарубежной скульптуры'>
								Скульптура "Гуманоиды"
							</Cell>
						</List>
					)}
					{entertaimentFilter && (
						<List>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='bibl'
								subtitle='Главная библиотека Сургута'>
								Библиотека им. А.С. Пушкина
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='dneft'
								subtitle='Крупнейший концертный зал города'>
								ДИ "Нефтяник"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='snezh'
								subtitle='Спортивное ядро города'>
								Стадион "Снежинка"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='filarm'
								subtitle='Главный концертный зал города'>
								Сургутская филармония
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='tsgu'
								subtitle='Один из главных театров города'>
								Театр СурГУ
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='cmoll'
								subtitle='Один из крупных городских ТЦ'>
								ТЦ "Сити Молл"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='ckid'
								subtitle='Популярный концертный зал'>
								ЦКИД "Камертон"
							</Cell>
						</List>
					)}
					{architectureFilter && (
						<List>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='bben'
								subtitle='Школа изучения иностранных языков'>
								Биг-Бен
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='gperer'
								subtitle='Недостроенный офис'>
								"Газпром Переработка"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='gtrans'
								subtitle='Офис градообразующей компании'>
								"Газпром Трансгаз"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='zags'
								subtitle='Городской ЗАГС'>
								Дворец Торжеств
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='sng'
								subtitle='Офис градообразующей компании'>
								ПАО "Сургутнефтегаз"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='centr'
								subtitle='Известная точка города'>
								ТЦ "City Centre"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='surgu'
								subtitle='Главный университет города'>
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
									chevron='always'
									onClick={changePanel}
									data-to='agaz'
									subtitle='Небольшая аллея со скульптурами'>
									Аллея "Газовиков"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='bibl'
									subtitle='Главная библиотека Сургута'>
									Библиотека им. А.С. Пушкина
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='bben'
									subtitle='Школа изучения иностранных языков'>
									Биг-Бен
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='gperer'
									subtitle='Недостроенный офис'>
									"Газпром Переработка"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='gtrans'
									subtitle='Офис градообразующей компании'>
									"Газпром Трансгаз"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='sterh'
									subtitle='Дом современного искусства'>
									Галерея Современного Искусства "Стерх"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='gpkio'
									subtitle='Один из первых парков города'>
									Городской Парк Культуры и Отдыха
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='zags'
									subtitle='Городской ЗАГС'>
									Дворец Торжеств
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='dneft'
									subtitle='Крупнейший концертный зал города'>
									ДИ "Нефтяник"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='kupec'
									subtitle='Памятник архитектуры XIX века'>
									Дом Купца Г.С. Клепикова
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='port'
									subtitle='Площадка для различных мероприятий'>
									Культурный Центр "Порт"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='mperv'
									subtitle='Монумент первопроходцам Севера'>
									Монумент "Первым Строителям Нового Города"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='mneft'
									subtitle='Монумент в честь нефтяных работников'>
									Монумент "Трудовому Подвигу Нефтяников"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='gzprm'
									subtitle='Музей развития нефтяной промышленности'>
									Музей Истории "Газпрома"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='kuzn'
									subtitle='Уникальная городская кузница'>
									Обская Кузница
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='voinam'
									subtitle='Монумент погибшим при исполнении долга'>
									Памятник "Воинам-Интернационалистам"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='narod'
									subtitle='Монумент в честь дружбы народов'>
									Памятник "Дружбы Народов"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='dock'
									subtitle='Монумент герою детских сказок'>
									Памятник "Доктору Айболиту"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='pgaz'
									subtitle='Монумент работникам газодобычи'>
									Памятник "Землякам-Газовикам"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='zahar'
									subtitle='Монумент известному журналисту'>
									Памятник Ивану Захарову
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='osnov'
									subtitle='Главный монумент города'>
									Памятник Основателям
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='pstro'
									subtitle='Монумент в честь строителей'>
									Памятник "Строителю"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='taras'
									subtitle='Монумент украинскому поэту'>
									Памятник Тарасу Шевченко
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='uchit'
									subtitle='Монумент работникам образования'>
									Памятник "Учительнице"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='lis'
									subtitle='Монумент символу города'>
									Памятник Чёрному Лису
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='kedr'
									subtitle='Популярный городской парк'>
									Парк "Кедровый Лог"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='sng'
									subtitle='Офис градообразующей компании'>
									ПАО "Сургутнефтегаз"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='sdet'
									subtitle='Популярный городской сквер'>
									Сквер "Детства"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='snarod'
									subtitle='Популярный городской сквер'>
									Сквер "Дружбы Народов"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='slav'
									subtitle='Популярный городской сквер'>
									Сквер "Мемориал Славы"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='smld'
									subtitle='Популярный городской сквер'>
									Сквер "Молодёжный"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='sstar'
									subtitle='Крупнейший сквер города'>
									Сквер "Старожилов Сургута"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='scentr'
									subtitle='Популярный городской сквер'>
									Сквер "Центральный"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='sener'
									subtitle='Популярный городской сквер'>
									Сквер "Энергетиков"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='human'
									subtitle='Копия зарубежной скульптуры'>
									Скульптура "Гуманоиды"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='snezh'
									subtitle='Спортивное ядро города'>
									Стадион "Снежинка"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='ssur'
									subtitle='Историко-культурный центр'>
									Старый Сургут
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='filarm'
									subtitle='Главный концертный зал города'>
									Сургутская филармония
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='tsgu'
									subtitle='Один из главных театров города'>
									Театр СурГУ
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='centr'
									subtitle='Известная точка города'>
									ТЦ "City Centre"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='cmoll'
									subtitle='Один из крупных городских ТЦ'>
									ТЦ "Сити Молл"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='surgu'
									subtitle='Главный университет города'>
									Университет
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='patr'
									subtitle='Единственный центр патриотической тематики'>
									Центр Патриотического Наследия
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='cplos'
									subtitle='Новая городская площадь'>
									Центральная городская площадь
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='ckid'
									subtitle='Популярный концертный зал'>
									ЦКИД "Камертон"
								</Cell>
							</List>
						)}
					<Div>
						<Div>
							<Div>
								<FixedLayout vertical='bottom'>
									<Div>
										<Button
											size='l'
											mode='primary'
											onClick={openAreaFilters}>
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
						<Button
							size='l'
							mode='primary'
							onClick={openFilters}>
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
								chevron='always'
								onClick={changePanel}
								data-to='nab'
								subtitle='Территория бывшего речного вокзала'>
								Набережная Речпорта
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='pgeo'
								subtitle='Парк на юго-востоке города'>
								Парк "Геологов"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='saima'
								subtitle='Главный парк города'>
								Парк "За Саймой"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='sgeo'
								subtitle='Сквер в юго-восточной части города'>
								Сквер "Геологов-Первопроходцев"
							</Cell>
						</List>
					)}
					{museumsFilter && (
						<List>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='salm'
								subtitle='Дом-музей первооткрывателя Сибирской нефти'>
								Музей Ф.К. Салманова
							</Cell>
						</List>
					)}
					{monumentsFilter && (
						<List>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='obel'
								subtitle='Памятный обелиск воинам ВОВ'>
								Обелиск "Ушедшим на Фронт"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='budda'
								subtitle='Монумент в честь будизма'>
								Памятник Будде
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='repres'
								subtitle='Монумент в честь спецпереселенцов'>
								Памятник "Жертвам Репрессий"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='btrud'
								subtitle='Монумент в честь рыбокомбината'>
								Памятник "Мужеству Рыбаков"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='nerozh'
								subtitle='Копия зарубежной скульптуры'>
								Памятник "Нерождённым Детям"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='rib'
								subtitle='Монумент в честь работников тыла'>
								Памятник "Труженикам Рыбокомбината"
							</Cell>
						</List>
					)}
					{entertaimentFilter && (
						<List>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='stroit'
								subtitle='Популярный концертный зал'>
								Городской Культурный Центр
							</Cell>
						</List>
					)}
					{architectureFilter && (
						<List>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='univ'
								subtitle='Популярная улица Сургута'>
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
									chevron='always'
									onClick={changePanel}
									data-to='stroit'
									subtitle='Популярный концертный зал'>
									Городской Культурный Центр
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='salm'
									subtitle='Дом-музей первооткрывателя Сибирской нефти'>
									Музей Ф.К. Салманова
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='nab'
									subtitle='Территория бывшего речного вокзала'>
									Набережная Речпорта
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='obel'
									subtitle='Памятный обелиск воинам ВОВ'>
									Обелиск "Ушедшим на Фронт"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='budda'
									subtitle='Монумент в честь будизма'>
									Памятник Будде
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='repres'
									subtitle='Монумент в честь спецпереселенцов'>
									Памятник "Жертвам Репрессий"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='btrud'
									subtitle='Монумент в честь рыбокомбината'>
									Памятник "Мужеству Рыбаков"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='nerozh'
									subtitle='Копия зарубежной скульптуры'>
									Памятник "Нерождённым Детям"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='rib'
									subtitle='Монумент в честь работников тыла'>
									Памятник "Труженикам Рыбокомбината"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='univ'
									subtitle='Популярная улица Сургута'>
									Университетская
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='pgeo'
									subtitle='Парк на юго-востоке города'>
									Парк "Геологов"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='saima'
									subtitle='Главный парк города'>
									Парк "За Саймой"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='sgeo'
									subtitle='Сквер в юго-восточной части города'>
									Сквер "Геологов-Первопроходцев"
								</Cell>
							</List>
						)}
					<Div>
						<Div>
							<Div>
								<FixedLayout vertical='bottom'>
									<Div>
										<Button
											size='l'
											mode='primary'
											onClick={openAreaFilters}>
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
							chevron='always'
							onClick={changePanel}
							data-to='musclx'
							subtitle='Крупный музейный комплекс'>
							Музейный Центр
						</Cell>
						<Cell
							chevron='always'
							onClick={changePanel}
							data-to='pmed'
							subtitle='Монумент в честь врачей'>
							Памятник "Медсестре"
						</Cell>
						<Cell
							chevron='always'
							onClick={changePanel}
							data-to='smile'
							subtitle='Монумент в честь эмоции'>
							Памятник "Улыбке"
						</Cell>
						<Cell
							chevron='always'
							onClick={changePanel}
							data-to='vershina'
							subtitle='Популярный городской ТЦ'>
							ТЦ "Вершина"
						</Cell>
						<Cell
							chevron='always'
							onClick={changePanel}
							data-to='sgusch'
							subtitle='Монумент популярного продукта'>
							Памятник Сгущёнке
						</Cell>
						<FixedLayout vertical='bottom'>
							<Div>
								<Button
									size='l'
									mode='primary'
									onClick={openAreaFilters}>
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
						<Button
							size='l'
							mode='primary'
							onClick={openFilters}>
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
								chevron='always'
								onClick={changePanel}
								data-to='pkey'
								subtitle='Новый популярный парк'>
								Парк "Новые Ключи"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='chaes'
								subtitle='Сквер в честь ликвидаторов аварии'>
								Сквер "Памяти Чернобыльцев"
							</Cell>
						</List>
					)}
					{museumsFilter && (
						<List>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='brmsm'
								subtitle='Музей создания моста'>
								Музей Югорского Моста
							</Cell>
						</List>
					)}
					{monumentsFilter && (
						<List>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='pavia'
								subtitle='Монумент Сургутскому авиаотряду'>
								Памятник "Авиаторам Сибири"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='poezd'
								subtitle='Монумент первому тепловозу в городе'>
								Памятник "Первому поезду"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='polet'
								subtitle='Скульптура на северном въезде'>
								Стела "Полёт"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='surgut'
								subtitle='Скульптура на западном въезде'>
								Стела "Сургут"
							</Cell>
						</List>
					)}
					{entertaimentFilter && (
						<List>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='smdt'
								subtitle='Популярный городской театр'>
								Сургусткий Музыкально-Драматический Театр
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='agora'
								subtitle='Популярный городской ТЦ'>
								ТЦ "Агора"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='aura'
								subtitle='Один из крупных городских ТЦ'>
								ТЦ "Аура"
							</Cell>
						</List>
					)}
					{architectureFilter && (
						<List>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='aerop'
								subtitle='Сургутский аэровокзал'>
								Аэропорт
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='trakt'
								subtitle='Транспортная артерия города'>
								Тюменский Тракт
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='bridge'
								subtitle='Важнейший транспортный узел Сургута'>
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
									chevron='always'
									onClick={changePanel}
									data-to='aerop'
									subtitle='Сургутский аэровокзал'>
									Аэропорт
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='bridge'
									subtitle='Важнейший транспортный узел Сургута'>
									Мост через Обь
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='brmsm'
									subtitle='Музей создания моста'>
									Музей Югорского Моста
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='pavia'
									subtitle='Монумент Сургутскому авиаотряду'>
									Памятник "Авиаторам Сибири"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='poezd'
									subtitle='Монумент первому тепловозу в городе'>
									Памятник "Первому Поезду"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='pkey'
									subtitle='Новый популярный парк'>
									Парк "Новые Ключи"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='chaes'
									subtitle='Сквер в честь ликвидаторов аварии'>
									Сквер "Памяти Чернобыльцев"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='polet'
									subtitle='Скульптура на северном въезде'>
									Стела "Полёт"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='surgut'
									subtitle='Скульптура на западном въезде'>
									Стела "Сургут"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='smdt'
									subtitle='Популярный городской театр'>
									Сургутский Музыкально-Драматический Театр
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='agora'
									subtitle='Популярный городской ТЦ'>
									ТЦ "Агора"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='aura'
									subtitle='Один из крупных городских ТЦ'>
									ТЦ "Аура"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='trakt'
									subtitle='Транспортная артерия города'>
									Тюменский Тракт
								</Cell>
							</List>
						)}
					<Div>
						<Div>
							<Div>
								<FixedLayout vertical='bottom'>
									<Div>
										<Button
											size='l'
											mode='primary'
											onClick={openAreaFilters}>
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
						<Button
							size='l'
							mode='primary'
							onClick={openFilters}>
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
								chevron='always'
								onClick={changePanel}
								data-to='agaz'
								subtitle='Небольшая аллея со скульптурами'>
								Аллея "Газовиков"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='gpkio'
								subtitle='Один из первых парков города'>
								Городской Парк Культуры и Отдыха
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='nab'
								subtitle='Территория бывшего речного вокзала'>
								Набережная Речпорта
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='pgeo'
								subtitle='Парк на юго-востоке города'>
								Парк "Геологов"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='saima'
								subtitle='Главный парк города'>
								Парк "За Саймой"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='kedr'
								subtitle='Популярный городской парк'>
								Парк "Кедровый Лог"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='pkey'
								subtitle='Новый популярный парк'>
								Парк "Новые Ключи"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='sgeo'
								subtitle='Сквер в юго-восточной части города'>
								Сквер "Геологов-Первопроходцев"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='sdet'
								subtitle='Популярный городской сквер'>
								Сквер "Детства"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='snarod'
								subtitle='Популярный городской сквер'>
								Сквер "Дружбы Народов"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='slav'
								subtitle='Популярный городской сквер'>
								Сквер "Мемориал Славы"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='smld'
								subtitle='Популярный городской сквер'>
								Сквер "Молодёжный"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='chaes'
								subtitle='Сквер в честь ликвидаторов аварии'>
								Сквер "Памяти Чернобыльцев"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='sstar'
								subtitle='Крупнейший сквер города'>
								Сквер "Старожилов Сургута"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='scentr'
								subtitle='Популярный городской сквер'>
								Сквер "Центральный"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='sener'
								subtitle='Популярный городской сквер'>
								Сквер "Энергетиков"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='cplos'
								subtitle='Новая городская площадь'>
								Центральная городская площадь
							</Cell>
						</List>
					)}
					{museumsFilter && (
						<List>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='sterh'
								subtitle='Дом современного искусства'>
								Галерея Современного Искусства "Стерх"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='kupec'
								subtitle='Памятник архитектуры XIX века'>
								Дом Купца Г.С. Клепикова
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='port'
								subtitle='Площадка для различных мероприятий'>
								Культурный Центр "Порт"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='gzprm'
								subtitle='Музей развития нефтяной промышленности'>
								Музей Истории "Газпрома"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='brmsm'
								subtitle='Музей создания моста'>
								Музей Югорского Моста
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='salm'
								subtitle='Дом-музей первооткрывателя Сибирской нефти'>
								Музей Ф.К. Салманова
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='musclx'
								subtitle='Крупный музейный комплекс'>
								Музейный Комплекс
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='kuzn'
								subtitle='Уникальная городская кузница'>
								Обская Кузница
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='ssur'
								subtitle='Историко-культурный центр'>
								Старый Сургут
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='patr'
								subtitle='Единственный центр патриотической тематики'>
								Центр Патриотического Наследия
							</Cell>
						</List>
					)}
					{monumentsFilter && (
						<List>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='mneft'
								subtitle='Монумент в честь нефтяных работников'>
								Монумент "Трудовому Подвигу Нефтяников"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='mperv'
								subtitle='Монумент первопроходцам Севера'>
								Монумент "Первым Строителям Нового Города"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='obel'
								subtitle='Памятный обелиск воинам ВОВ'>
								Обелиск "Ушедшим на Фронт"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='pavia'
								subtitle='Монумент Сургутскому авиаотряду'>
								Памятник "Авиаторам Сибири"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='budda'
								subtitle='Монумент в честь будизма'>
								Памятник Будде
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='voinam'
								subtitle='Монумент погибшим при исполнении долга'>
								Памятник "Воинам-Интернационалистам"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='dock'
								subtitle='Монумент герою детских сказок'>
								Памятник "Доктору Айболиту"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='narod'
								subtitle='Монумент в честь дружбы народов'>
								Памятник "Дружбы Народов"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='repres'
								subtitle='Монумент в честь спецпереселенцов'>
								Памятник "Жертвам Репрессий"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='pgaz'
								subtitle='Монумент работникам газодобычи'>
								Памятник "Землякам-Газовикам"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='zahar'
								subtitle='Монумент известному журналисту'>
								Памятник Ивану Захарову
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='pmed'
								subtitle='Монумент в честь врачей'>
								Памятник "Медсестре"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='btrud'
								subtitle='Монумент в честь рыбокомбината'>
								Памятник "Мужеству Рыбаков"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='nerozh'
								subtitle='Копия зарубежной скульптуры'>
								Памятник "Нерождённым Детям"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='osnov'
								subtitle='Главный монумент города'>
								Памятник Основателям
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='poezd'
								subtitle='Монумент первому тепловозу в городе'>
								Памятник "Первому Поезду"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='sgusch'
								subtitle='Монумeнт популярного продукта'>
								Памятник Сгущёнке
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='pstro'
								subtitle='Монумент в честь строителей'>
								Памятник "Строителю"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='taras'
								subtitle='Монумент украинскому поэту'>
								Памятник Тарасу Шевченко
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='rib'
								subtitle='Монумент в честь работников тыла'>
								Памятник "Труженикам Рыбокомбината"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='smile'
								subtitle='Монумент в честь эмоции'>
								Памятник "Улыбке"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='uchit'
								subtitle='Монумент работникам образования'>
								Памятник "Учительнице"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='lis'
								subtitle='Монумент символу города'>
								Памятник Чёрному Лису
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='human'
								subtitle='Копия зарубежной скульптуры'>
								Скульптура "Гуманоиды"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='polet'
								subtitle='Скульптура на северном въезде'>
								Стела "Полёт"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='surgut'
								subtitle='Скульптура на западном въезде'>
								Стела "Сургут"
							</Cell>
						</List>
					)}
					{entertaimentFilter && (
						<List>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='bibl'
								subtitle='Главная библиотека Сургута'>
								Библиотека им. А.С. Пушкина
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='stroit'
								subtitle='Популярный концертный зал'>
								Городской Культурный Центр
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='dneft'
								subtitle='Крупнейший концертный зал города'>
								ДИ "Нефтяник"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='snezh'
								subtitle='Спортивное ядро города'>
								Стадион "Снежинка"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='smdt'
								subtitle='Популярный городской театр'>
								Сургутский Музыкально-Драматический Театр
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='filarm'
								subtitle='Главный концертный зал города'>
								Сургутская филармония
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='tsgu'
								subtitle='Один из главных театров города'>
								Театр СурГУ
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='agora'
								subtitle='Популярный городской ТЦ'>
								ТЦ "Агора"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='aura'
								subtitle='Один из крупных городских ТЦ'>
								ТЦ "Аура"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='vershina'
								subtitle='Популярный городской ТЦ'>
								ТЦ "Вершина"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='cmoll'
								subtitle='Один из крупных городских ТЦ'>
								ТЦ "Сити Молл"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='ckid'
								subtitle='Популярный концертный зал'>
								ЦКИД "Камертон"
							</Cell>
						</List>
					)}
					{architectureFilter && (
						<List>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='aerop'
								subtitle='Сургутский аэровокзал'>
								Аэропорт
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='bben'
								subtitle='Школа изучения иностранных языков'>
								Биг-Бен
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='gperer'
								subtitle='Недостроенный офис'>
								"Газпром Переработка"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='gtrans'
								subtitle='Офис градообразующей компании'>
								"Газпром Трансгаз"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='zags'
								subtitle='Городской ЗАГС'>
								Дворец Торжеств
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='bridge'
								subtitle='Важнейший транспортный узел Сургута'>
								Мост через Обь
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='sng'
								subtitle='Офис градообразующей компании'>
								ПАО "Сургутнефтегаз"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='centr'
								subtitle='Известная точка города'>
								ТЦ "City Centre"
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='trakt'
								subtitle='Транспортная артерия города'>
								Тюменский Тракт
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='surgu'
								subtitle='Главный университет города'>
								Университет
							</Cell>
							<Cell
								chevron='always'
								onClick={changePanel}
								data-to='univ'
								subtitle='Популярная улица Сургута'>
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
									chevron='always'
									onClick={changePanel}
									data-to='agaz'
									subtitle='Небольшая аллея со скульптурами'>
									Аллея "Газовиков"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='aerop'
									subtitle='Сургутский аэровокзал'>
									Аэропорт
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='bibl'
									subtitle='Главная библиотека Сургута'>
									Библиотека им. А.С. Пушкина
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='bben'
									subtitle='Школа изучения иностранных языков'>
									Биг-Бен
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='gperer'
									subtitle='Недостроенный офис'>
									"Газпром Переработка"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='gtrans'
									subtitle='Офис градообразующей компании'>
									"Газпром Трансгаз"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='sterh'
									subtitle='Дом современного искусства'>
									Галерея Современного Искусства "Стерх"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='stroit'
									subtitle='Популярный концертный зал'>
									Городской Культурный Центр
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='gpkio'
									subtitle='Один из первых парков города'>
									Городской Парк Культуры и Отдыха
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='zags'
									subtitle='Городской ЗАГС'>
									Дворец Торжеств
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='dneft'
									subtitle='Крупнейший концертный зал города'>
									ДИ "Нефтяник"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='kupec'
									subtitle='Памятник архитектуры XIX века'>
									Дом Купца Г.С. Клепикова
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='port'
									subtitle='Площадка для различных мероприятий'>
									Культурный Центр "Порт"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='mperv'
									subtitle='Монумент первопроходцам Севера'>
									Монумент "Первым Строителям Нового Города"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='mneft'
									subtitle='Монумент в честь нефтяных работников'>
									Монумент "Трудовому Подвигу Нефтяников"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='bridge'
									subtitle='Важнейший транспортный узел Сургута'>
									Мост через Обь
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='gzprm'
									subtitle='Музей развития нефтяной промышленности'>
									Музей Истории "Газпрома"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='musclx'
									subtitle='Крупный музейный комплекс'>
									Музейный Комплекс
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='brmsm'
									subtitle='Музей создания моста'>
									Музей Югорского Моста
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='salm'
									subtitle='Дом-музей первооткрывателя Сибирской нефти'>
									Музей Ф.К. Салманова
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='nab'
									subtitle='Территория бывшего речного вокзала'>
									Набережная Речпорта
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='obel'
									subtitle='Памятный обелиск воинам ВОВ'>
									Обелиск "Ушедшим на Фронт"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='kuzn'
									subtitle='Уникальная городская кузница'>
									Обская Кузница
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='pavia'
									subtitle='Монумент Сургутскому авиаотряду'>
									Памятник "Авиаторам Сибири"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='budda'
									subtitle='Монумент в честь будизма'>
									Памятник Будде
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='voinam'
									subtitle='Монумент погибшим при исполнении долга'>
									Памятник "Воинам-Интернационалистам"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='dock'
									subtitle='Монумент герою детских сказок'>
									Памятник "Доктору Айболиту"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='narod'
									subtitle='Монумент в честь дружбы народов'>
									Памятник "Дружбы Народов"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='repres'
									subtitle='Монумент в честь спецпереселенцов'>
									Памятник "Жертвам Репрессий"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='pgaz'
									subtitle='Монумент работникам газодобычи'>
									Памятник "Землякам-Газовикам"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='zahar'
									subtitle='Монумент известному журналисту'>
									Памятник Ивану Захарову
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='pmed'
									subtitle='Монумент в честь врачей'>
									Памятник "Медсестре"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='btrud'
									subtitle='Монумент в честь рыбокомбината'>
									Памятник "Мужеству Рыбаков"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='nerozh'
									subtitle='Копия зарубежной скульптуры'>
									Памятник "Нерождённым Детям"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='osnov'
									subtitle='Главный монумент города'>
									Памятник Основателям
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='poezd'
									subtitle='Монумент первому тепловозу в городе'>
									Памятник "Первому Поезду"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='sgusch'
									subtitle='Монумент популярного продукта'>
									Памятник Сгущёнке
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='pstro'
									subtitle='Монумент в честь строителей'>
									Памятник "Строителю"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='taras'
									subtitle='Монумент украинскому поэту'>
									Памятник Тарасу Шевченко
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='rib'
									subtitle='Монумент в честь работников тыла'>
									Памятник "Труженикам Рыбокомбината"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='smile'
									subtitle='Монумент в честь эмоции'>
									Памятник "Улыбке"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='uchit'
									subtitle='Монумент работникам образования'>
									Памятник "Учительнице"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='lis'
									subtitle='Монумент символу города'>
									Памятник Чёрному Лису
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='sng'
									subtitle='Офис градообразующей компании'>
									ПАО "Сургутнефтегаз"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='pgeo'
									subtitle='Парк на юго-востоке города'>
									Парк "Геологов"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='saima'
									subtitle='Главный парк города'>
									Парк "За Саймой"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='kedr'
									subtitle='Популярный городской парк'>
									Парк "Кедровый Лог"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='pkey'
									subtitle='Новый популярный парк'>
									Парк "Новые Ключи"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='sgeo'
									subtitle='Сквер в юго-восточной части города'>
									Сквер "Геологов-Первопроходцев"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='sdet'
									subtitle='Популярный городской сквер'>
									Сквер "Детства"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='snarod'
									subtitle='Популярный городской сквер'>
									Сквер "Дружбы Народов"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='slav'
									subtitle='Популярный городской сквер'>
									Сквер "Мемориал Славы"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='smld'
									subtitle='Популярный городской сквер'>
									Сквер "Молодёжный"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='chaes'
									subtitle='Сквер в честь ликвидаторов аварии'>
									Сквер "Памяти Чернобыльцев"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='sstar'
									subtitle='Крупнейший сквер города'>
									Сквер "Старожилов Сургута"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='scentr'
									subtitle='Популярный городской сквер'>
									Сквер "Центральный"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='sener'
									subtitle='Популярный городской сквер'>
									Сквер "Энергетиков"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='human'
									subtitle='Копия зарубежной скульптуры'>
									Скульптура "Гуманоиды"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='snezh'
									subtitle='Спортивное ядро города'>
									Стадион "Снежинка"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='ssur'
									subtitle='Историко-культурный центр'>
									Старый Сургут
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='polet'
									subtitle='Скульптура на северном въезде'>
									Стела "Полёт"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='surgut'
									subtitle='Скульптура на западном въезде'>
									Стела "Сургут"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='smdt'
									subtitle='Популярный городской театр'>
									Сургутский Музыкально-Драматический Театр
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='filarm'
									subtitle='Главный концертный зал города'>
									Сургутская филармония
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='tsgu'
									subtitle='Один из главных театров города'>
									Театр СурГУ
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='centr'
									subtitle='Известная точка города'>
									ТЦ "City Centre"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='agora'
									subtitle='Популярный городской ТЦ'>
									ТЦ "Агора"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='aura'
									subtitle='Один из крупных городских ТЦ'>
									ТЦ "Аура"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='vershina'
									subtitle='Популярный городской ТЦ'>
									ТЦ "Вершина"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='cmoll'
									subtitle='Один из крупных городских ТЦ'>
									ТЦ "Сити Молл"
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='trakt'
									subtitle='Транспортная артерия города'>
									Тюменский Тракт
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='surgu'
									subtitle='Главный университет города'>
									Университет
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='univ'
									subtitle='Популярная улица Сургута'>
									Университетская
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='patr'
									subtitle='Единственный центр патриотической тематики'>
									Центр Патриотического Наследия
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='cplos'
									subtitle='Новая городская площадь'>
									Центральная городская площадь
								</Cell>
								<Cell
									chevron='always'
									onClick={changePanel}
									data-to='ckid'
									subtitle='Популярный концертный зал'>
									ЦКИД "Камертон"
								</Cell>
							</List>
						)}
					<Div>
						<Div>
							<Div>
								<FixedLayout vertical='bottom'>
									<Div>
										<Button
											size='l'
											mode='primary'
											onClick={openAreaFilters}>
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
					<Gallery
						slideWidth='92%'
						style={{ height: 200 }}
						align='center'>
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
						size='4xl'
						style={{ paddingBottom: '10px', marginTop: '10px' }}
					/>

					<Group>
						<Placeholder
							icon={<Icon56InfoOutline />}
							title='Выберите район'
							action={
								<Button
									size='l'
									mode='primary'
									onClick={openAreaFilters}>
									Выбрать
								</Button>
							}>
							Чтобы показать Вам места, Вы должны выбрать желаемый
							район
						</Placeholder>
					</Group>
				</Fragment>
			)}
		</Panel>
	);
};
