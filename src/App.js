import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';

import '@vkontakte/vkui/dist/vkui.css';

import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Error from '@vkontakte/icons/dist/24/error';

import { Intro, Introdva, Introtri } from './intro/Exports_Intro';

import {
	View,
	Root,
	Snackbar,
	Avatar,
	ScreenSpinner,
	ModalRoot,
	ModalCard,
	Cell,
	ConfigProvider,
} from '@vkontakte/vkui';

import {
	Home,
	About,
	Projects,
	Credits,
	Attention,
	Places,
	Business,
	Cafes,
	Bars,
	Restaraunts,
	Hookah,
} from './panels/Exports_Panels';

import {
	Percicrd,
	Auditcrd,
	Nyccrd,
	Kedrcrd,
	Osnovcrd,
	Saimacrd,
	Ssurcrd,
	Univcrd,
} from './Exports_Cards';

import {
	Botanica,
	Cofein,
	Dovlatov,
	Endorf,
	Friends,
	Nyc,
	Trvls,
	Vkus,
	Zerno,
} from './business/cafes/Exports_Cafes';

import {
	Audit,
	Bird,
	Dpub,
	Frank,
	Hops,
	Jaws,
	Mars,
	Pints,
	Rnb,
	Off,
} from './business/bars/Exports_Bars';

import {
	Ajb,
	Ds,
	Hurma,
	Joint,
	Kitcha,
	Klkv,
	Mishka,
	Peoples,
	Perci,
	Pivo,
	Seven,
	Storia,
	Veranda,
	Visota,
	Wdn,
} from './business/restaraunts/Exports_Rests';

import {
	Aloft,
	Brutal,
	Bsb,
	HPlace,
	Jin,
	Light,
	Mint,
	Mrmld,
	Office,
	Pbar,
} from './business/hookah/Exports_Hookah';

import {
	Agaz,
	Bben,
	Bibl,
	Centr,
	Ckid,
	Cmoll,
	Cplos,
	Dneft,
	Dock,
	Filarm,
	Gperer,
	Gpkio,
	Gtrans,
	Gzprm,
	Human,
	Kedr,
	Kupec,
	Kuzn,
	Lis,
	Mneft,
	Mperv,
	Narod,
	Osnov,
	Patr,
	Pgaz,
	Port,
	Pstro,
	Scentr,
	Sdet,
	Sener,
	Slav,
	Smld,
	Snarod,
	Snezh,
	Sng,
	Sstar,
	Ssur,
	Sterh,
	Surgu,
	Taras,
	Tsgu,
	Uchit,
	Voinam,
	Zags,
	Zahar,
} from './places/cntr/Exports_Cntr';

import {
	Btrud,
	Budda,
	Nab,
	Nerozh,
	Obel,
	Pgeo,
	Repres,
	Rib,
	Saima,
	Salm,
	Sgeo,
	Stroit,
	Univ,
} from './places/west/Exports_West';

import {
	Aerop,
	Agora,
	Aura,
	Bridge,
	Brmsm,
	Chaes,
	Pavia,
	Pkey,
	Poezd,
	Polet,
	Smdt,
	Surgut,
	Trakt,
} from './places/nl/Exports_Nl';

import {
	Musclx,
	Pmed,
	Sgusch,
	Smile,
	Vershina,
} from './places/nwl/Exports_Nwl';

const STORAGE_KEYS = { STATUS: 'status' };

const App = ({ startPage }) => {
	const [activePanel, setActivePanel] = useState(startPage);
	const [activeModal, setActiveModal] = useState(null);
	const [fetchedUser, setUser] = useState(null);
	const [snackbar, setSnackbar] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [parksFilter, setParksFilter] = useState(false);
	const [museumsFilter, setMuseumsFilter] = useState(false);
	const [monumentsFilter, setMonumentsFilter] = useState(false);
	const [entertaimentFilter, setEntertaimentFilter] = useState(false);
	const [architectureFilter, setArchitectureFilter] = useState(false);
	const [area, setArea] = useState(null);
	const [history, setHistory] = useState(['home']);

	const changePanelToPlaces = (e) => {
		setParksFilter(false);
		setMuseumsFilter(false);
		setMonumentsFilter(false);
		setEntertaimentFilter(false);
		setArchitectureFilter(false);
		setArea(null);
		changePanel(e);
	};

	const shareButtonAction = async function () {
		// bridge.send на кнопке "Поделиться"
		try {
			await bridge.send('VKWebAppShare', {
				link: 'https://vk.com/app7614127',
			});
		} catch (error) {
			console.log('Отмена шера');
		}
	};

	const changePanel = (e) => {
		// Управление приложением, смена панелей
		window.history.pushState(
			{ panel: e.currentTarget.dataset.to },
			e.currentTarget.dataset.to
		);
		setActivePanel(e.currentTarget.dataset.to);
		history.push(e.currentTarget.dataset.to);
	};

	const changePanelWithSwipe = () => {
		// Функция для возврата по свайпу
		if (history.length > 1) {
			if (activeModal !== null) {
				setActiveModal(null); // Убираем модалки, если открыты
			}
			history.pop(); // Убираем из истории панель
			setActivePanel(history[history.length - 1]); // Меняем панель
		}
	};

	// Управление доступом к свайпу, блокируется при открытых модалках
	const [swipe, setSwipe] = useState(() => changePanelWithSwipe);

	const openFilters = () => {
		setActiveModal('filters');
		setSwipe(null);
	};

	const openAreaFilters = () => {
		setActiveModal('places');
		setSwipe(null);
	};

	const selectAreaInModal = (e) => {
		setArea(e.currentTarget.dataset.area);
		setActiveModal(null);
		setSwipe(() => changePanelWithSwipe);
	};

	const showSnackbar = (text) => {
		setSnackbar(
			<Snackbar
				layout='vertical'
				onClose={() => setSnackbar(null)}
				before={
					<Avatar
						size={24}
						style={{
							backgroundColor: 'var(--dynamic-red)',
						}}>
						<Icon24Error fill='#fff' width={14} height={14} />
					</Avatar>
				}
				duration={1000}>
				{text}
			</Snackbar>
		);
	};

	const [tempCords, setTempCords] = useState([]); // ! Временный массив для получения координат
	const [geo, setGeo] = useState([]); // ! Основной массив с координатами

	const getCoordinates = async function () {
		try {
			setTempCords([]);
			const getCords = await bridge.send('VKWebAppGetGeodata');
			if (getCords.available === 1) {
				// Если координаты доступны
				tempCords.push(getCords.long);
				tempCords.push(getCords.lat);
			} else {
				// Если координаты разрешены но недоступны
				showSnackbar('Не получили координаты... :(');
				setTempCords(null);
			}
		} catch (error) {
			// Если доступ к координатам запрещён
			console.log('GEO_DENIED');
			showSnackbar('Не получили координаты... :(');
			setTempCords(null);
		}
		requestAnimationFrame(Testdva);
		setGeo(tempCords);
	};

	const nextIntroPage = (e) => setActivePanel(e.currentTarget.dataset.to);

	useEffect(() => {
		// Парсим данные пользователя
		async function fetchData() {
			const userData = await bridge.send('VKWebAppGetUserInfo');
			// 	} catch (error) {
			// 		setSnackbar(
			// 			<Snackbar
			// 				layout='vertical'
			// 				onClose={() => setSnackbar(null)}
			// 				before={
			// 					<Avatar
			// 						size={24}
			// 						style={{
			// 							backgroundColor: 'var(--dynamic-red)',
			// 						}}>
			// 						<Icon24Error fill='#fff' width={14} height={14} />
			// 					</Avatar>
			// 				}
			// 				duration={1000}>
			// 				Упс, какая-то ошибка... :(
			// 			</Snackbar>
			// 		);
			// 	}
			// });
			setUser(userData);
			setPopout(null);
		}
		fetchData();
		getCoordinates();

		console.log('Хуле забыл?');

		window.addEventListener('popstate', () => changePanelWithSwipe()); // Поведение системных кнопок Android при возврате
	}, []);

	const endIntroWatch = async function () {
		try {
			await bridge.send('VKWebAppStorageSet', {
				key: STORAGE_KEYS.STATUS,
				value: JSON.stringify({
					hasSeenIntro: true,
				}),
			});
			setActivePanel('home');
		} catch (error) {
			showSnackbar('Упс, какая-то ошибка отправки данных... :(');
		}
	};

	//! Перекинуть модалку в отдельный компонент
	const modal = (
		<ModalRoot
			activeModal={activeModal}
			onClose={() => {
				setActiveModal(null);
				setSwipe(() => changePanelWithSwipe);
			}}>
			<ModalCard
				id='filters'
				onClose={() => {
					setActiveModal(null);
					setSwipe(() => changePanelWithSwipe);
				}}
				header='Фильтры'
				caption='Выберите, что хотите увидеть в списке'
				actions={[
					{
						title: 'Сбросить',
						mode: 'secondary',
						action: () => {
							setParksFilter(false);
							setMuseumsFilter(false);
							setMonumentsFilter(false);
							setEntertaimentFilter(false);
							setArchitectureFilter(false);
						},
					},
				]}>
				<Cell
					onClick={() => setParksFilter(!parksFilter)}
					asideContent={
						parksFilter ? <Icon24Done fill='var(--accent)' /> : null
					}>
					Парки и Скверы
				</Cell>
				<Cell
					onClick={() => setMuseumsFilter(!museumsFilter)}
					asideContent={
						museumsFilter ? <Icon24Done fill='var(--accent)' /> : null
					}>
					Музеи
				</Cell>
				<Cell
					onClick={() => setMonumentsFilter(!monumentsFilter)}
					asideContent={
						monumentsFilter ? <Icon24Done fill='var(--accent)' /> : null
					}>
					Памятники
				</Cell>
				<Cell
					onClick={() => setEntertaimentFilter(!entertaimentFilter)}
					asideContent={
						entertaimentFilter ? <Icon24Done fill='var(--accent)' /> : null
					}>
					Спорт и Развлечения
				</Cell>
				<Cell
					onClick={() => setArchitectureFilter(!architectureFilter)}
					asideContent={
						architectureFilter ? <Icon24Done fill='var(--accent)' /> : null
					}>
					Архитектура
				</Cell>
			</ModalCard>
			<ModalCard
				id='places'
				onClose={() => {
					setActiveModal(null);
					setSwipe(() => changePanelWithSwipe);
				}}
				header='Районы'
				caption='Выберите, какой район хотите посмотреть'
				actions={[
					{
						title: 'Сбросить',
						mode: 'secondary',
						action: () => {
							setArea(null);
							setActiveModal(null);
							setSwipe(() => changePanelWithSwipe);
						},
					},
				]}>
				<Cell
					onClick={selectAreaInModal}
					data-area='cntr'
					asideContent={
						area === 'cntr' ? <Icon24Done fill='var(--accent)' /> : null
					}>
					Центральный район
				</Cell>
				<Cell
					onClick={selectAreaInModal}
					data-area='west'
					asideContent={
						area === 'west' ? <Icon24Done fill='var(--accent)' /> : null
					}>
					Восточный район
				</Cell>
				<Cell
					onClick={selectAreaInModal}
					data-area='nwl'
					asideContent={
						area === 'nwl' ? <Icon24Done fill='var(--accent)' /> : null
					}>
					Северо-Восточный Жилой район
				</Cell>
				<Cell
					onClick={selectAreaInModal}
					data-area='nl'
					asideContent={
						area === 'nl' ? <Icon24Done fill='var(--accent)' /> : null
					}>
					Северный Жилой район
				</Cell>
				<Cell
					onClick={selectAreaInModal}
					data-area='all'
					asideContent={
						area === 'all' ? <Icon24Done fill='var(--accent)' /> : null
					}>
					Все районы
				</Cell>
			</ModalCard>
		</ModalRoot>
	);

	return (
		<ConfigProvider>
			<Root>
				<View
					activeModal={activeModal}
					activePanel={activePanel}
					popout={popout}
					modal={modal}
					history={history}
					onSwipeBack={swipe}>
					<Intro
						id='introodin'
						fetchedUser={fetchedUser}
						nextIntroPage={nextIntroPage}
						snackbarError={snackbar}
					/>
					<Introdva
						id='introdva'
						nextIntroPage={nextIntroPage}
						getCoordinates={getCoordinates}
					/>
					<Introtri id='introtri' endIntroWatch={endIntroWatch} />
					<Home
						id='home'
						shareButtonAction={shareButtonAction}
						fetchedUser={fetchedUser}
						changePanel={changePanel}
						changePanelToPlaces={changePanelToPlaces}
						snackbarError={snackbar}
					/>
					<Places
						id='places'
						changePanel={changePanel}
						openFilters={openFilters}
						area={area}
						openAreaFilters={openAreaFilters}
						parksFilter={parksFilter}
						museumsFilter={museumsFilter}
						monumentsFilter={monumentsFilter}
						entertaimentFilter={entertaimentFilter}
						architectureFilter={architectureFilter}
					/>
					<Osnovcrd id='osnovcrd' geo={geo} />
					<Ssurcrd id='ssurcrd' geo={geo} />
					<Kedrcrd id='kedrcrd' geo={geo} />
					<Saimacrd id='saimacrd' geo={geo} />
					<Univcrd id='univcrd' geo={geo} />
					<Agaz id='agaz' geo={geo} />
					<Bben id='bben' geo={geo} />
					<Bibl id='bibl' geo={geo} />
					<Centr id='centr' geo={geo} />
					<Ckid id='ckid' geo={geo} />
					<Cmoll id='cmoll' geo={geo} />
					<Cplos id='cplos' geo={geo} />
					<Dneft id='dneft' geo={geo} />
					<Dock id='dock' geo={geo} />
					<Filarm id='filarm' geo={geo} />
					<Gperer id='gperer' geo={geo} />
					<Gpkio id='gpkio' geo={geo} />
					<Gtrans id='gtrans' geo={geo} />
					<Gzprm id='gzprm' geo={geo} />
					<Human id='human' geo={geo} />
					<Kedr id='kedr' geo={geo} />
					<Kupec id='kupec' geo={geo} />
					<Kuzn id='kuzn' geo={geo} />
					<Lis id='lis' geo={geo} />
					<Mneft id='mneft' geo={geo} />
					<Mperv id='mperv' geo={geo} />
					<Narod id='narod' geo={geo} />
					<Osnov id='osnov' geo={geo} />
					<Patr id='patr' geo={geo} />
					<Pgaz id='pgaz' geo={geo} />
					<Port id='port' geo={geo} />
					<Pstro id='pstro' geo={geo} />
					<Scentr id='scentr' geo={geo} />
					<Sdet id='sdet' geo={geo} />
					<Sener id='sener' geo={geo} />
					<Slav id='slav' geo={geo} />
					<Smld id='smld' geo={geo} />
					<Snarod id='snarod' geo={geo} />
					<Snezh id='snezh' geo={geo} />
					<Sng id='sng' geo={geo} />
					<Sstar id='sstar' geo={geo} />
					<Ssur id='ssur' geo={geo} />
					<Sterh id='sterh' geo={geo} />
					<Surgu id='surgu' geo={geo} />
					<Taras id='taras' geo={geo} />
					<Tsgu id='tsgu' geo={geo} />
					<Uchit id='uchit' geo={geo} />
					<Voinam id='voinam' geo={geo} />
					<Zags id='zags' geo={geo} />
					<Zahar id='zahar' geo={geo} />
					<Btrud id='btrud' geo={geo} />
					<Budda id='budda' geo={geo} />
					<Nab id='nab' geo={geo} />
					<Nerozh id='nerozh' geo={geo} />
					<Obel id='obel' geo={geo} />
					<Pgeo id='pgeo' geo={geo} />
					<Repres id='repres' geo={geo} />
					<Rib id='rib' geo={geo} />
					<Saima id='saima' geo={geo} />
					<Salm id='salm' geo={geo} />
					<Sgeo id='sgeo' geo={geo} />
					<Stroit id='stroit' geo={geo} />
					<Univ id='univ' geo={geo} />
					<Musclx id='musclx' geo={geo} />
					<Pmed id='pmed' geo={geo} />
					<Sgusch id='sgusch' geo={geo} />
					<Smile id='smile' geo={geo} />
					<Vershina id='vershina' geo={geo} />
					<Aerop id='aerop' geo={geo} />
					<Agora id='agora' geo={geo} />
					<Aura id='aura' geo={geo} />
					<Bridge id='bridge' geo={geo} />
					<Brmsm id='brmsm' geo={geo} />
					<Chaes id='chaes' geo={geo} />
					<Pavia id='pavia' geo={geo} />
					<Pkey id='pkey' geo={geo} />
					<Poezd id='poezd' geo={geo} />
					<Polet id='polet' geo={geo} />
					<Smdt id='smdt' geo={geo} />
					<Surgut id='surgut' geo={geo} />
					<Trakt id='trakt' geo={geo} />
					<Business id='business' changePanel={changePanel} />
					<Percicrd id='percicrd' geo={geo} />
					<Nyccrd id='nyccrd' geo={geo} />
					<Auditcrd id='auditcrd' geo={geo} />
					<Cafes id='cafes' changePanel={changePanel} />
					<Botanica id='botanica' geo={geo} />
					<Cofein id='cofein' geo={geo} />
					<Dovlatov id='dovlatov' geo={geo} />
					<Endorf id='endorf' geo={geo} />
					<Friends id='friends' geo={geo} />
					<Nyc id='nyc' geo={geo} />
					<Trvls id='trvls' geo={geo} />
					<Vkus id='vkus' geo={geo} />
					<Zerno id='zerno' geo={geo} />
					<Bars id='bars' changePanel={changePanel} />
					<Audit id='audit' geo={geo} />
					<Bird id='bird' geo={geo} />
					<Dpub id='dpub' geo={geo} />
					<Frank id='frank' geo={geo} />
					<Hops id='hops' geo={geo} />
					<Jaws id='jaws' geo={geo} />
					<Mars id='mars' geo={geo} />
					<Pints id='pints' geo={geo} />
					<Rnb id='rnb' geo={geo} />
					<Off id='off' geo={geo} />
					<Restaraunts id='restaraunts' changePanel={changePanel} />
					<Ajb id='ajb' geo={geo} />
					<Ds id='ds' geo={geo} />
					<Hurma id='hurma' geo={geo} />
					<Joint id='joint' geo={geo} />
					<Kitcha id='kitcha' geo={geo} />
					<Klkv id='klkv' geo={geo} />
					<Mishka id='mishka' geo={geo} />
					<Peoples id='peoples' geo={geo} />
					<Perci id='perci' geo={geo} />
					<Pivo id='pivo' geo={geo} />
					<Seven id='seven' geo={geo} />
					<Storia id='storia' geo={geo} />
					<Veranda id='veranda' geo={geo} />
					<Visota id='visota' geo={geo} />
					<Wdn id='wdn' geo={geo} />
					<Hookah id='hookah' changePanel={changePanel} />
					<Aloft id='aloft' geo={geo} />
					<Brutal id='brutal' geo={geo} />
					<Bsb id='bsb' geo={geo} />
					<HPlace id='hplace' geo={geo} />
					<Jin id='jin' geo={geo} />
					<Light id='light' geo={geo} />
					<Mint id='mint' geo={geo} />
					<Mrmld id='mrmld' geo={geo} />
					<Office id='office' geo={geo} />
					<Pbar id='pbar' geo={geo} />
					<About id='about' changePanel={changePanel} />
					<Credits id='credits' />
					<Attention id='attention' />
					<Projects id='projects' />
				</View>
			</Root>
		</ConfigProvider>
	);
};

export default App;
