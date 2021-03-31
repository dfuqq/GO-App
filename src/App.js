import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
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
} from "@vkontakte/vkui";

import Icon24Done from "@vkontakte/icons/dist/24/done";
import Icon24Error from "@vkontakte/icons/dist/24/error";

import "@vkontakte/vkui/dist/vkui.css";

import { Intro, Introdva, Introtri } from "./intro/Exports_Intro";

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
} from "./panels/Exports_Panels";

///////////////////////////////// ИМПОРТ КАРТОЧЕК ////////////////////////////////
import Percicrd from "./business/Percicrd";
import Nyccrd from "./business/Nyccrd";
import Auditcrd from "./business/Auditcrd";
import Kedrcrd from "./places/Kedrcrd";
import Osnovcrd from "./places/Osnovcrd";
import Saimacrd from "./places/Saimacrd";
import Ssurcrd from "./places/Ssurcrd";
import Univcrd from "./places/Univcrd";
//////////////////////////// КОНЕЦ ИМПОРТА КАРТОЧЕК //////////////////////////////

import {
    Botanica,
    Cofein,
    Dovlatov,
    Endorf,
    Friends,
    Loft,
    Nyc,
    Trvls,
    Vkus,
    Zerno,
} from "./business/cafes/Exports_Cafes";

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
} from "./business/bars/Exports_Bars";

/////////////////////////////// ИМПОРТ РЕСТОРАНОВ //////////////////////////////
import Ajb from "./business/restaraunts/Ajb";
import Ds from "./business/restaraunts/Ds";
import Hurma from "./business/restaraunts/Hurma";
import Joint from "./business/restaraunts/Joint";
import Kitcha from "./business/restaraunts/Kitcha";
import Klkv from "./business/restaraunts/Klyukva";
import Mishka from "./business/restaraunts/Mishka";
import Peoples from "./business/restaraunts/Peoples";
import Perci from "./business/restaraunts/Perci";
import Pivo from "./business/restaraunts/Pivo";
import Seven from "./business/restaraunts/Seven";
import Storia from "./business/restaraunts/Storia";
import Veranda from "./business/restaraunts/Veranda";
import Visota from "./business/restaraunts/Visota";
import Wdn from "./business/restaraunts/Wdn";
////////////////////////////// КОНЕЦ ИМПОРТА РЕСТОРАНОВ /////////////////////////

///////////////////////////////// ИМПОРТ КАЛЬЯННЫХ /////////////////////////////
import Aloft from "./business/hookah/ArtLoft";
import Brutal from "./business/hookah/Brutal";
import Bsb from "./business/hookah/Bsb";
import HPlace from "./business/hookah/HPlace";
import Jin from "./business/hookah/Jin";
import Light from "./business/hookah/Light";
import Mint from "./business/hookah/Mint";
import Mrmld from "./business/hookah/Mrmld";
import Office from "./business/hookah/Office";
import Pbar from "./business/hookah/ParoBar";
//////////////////////////////// КОНЕЦ ИМПОРТА КАЛЬЯННЫХ //////////////////////

import Agaz from "./places/cntr/Agaz";
import Bben from "./places/cntr/Bben";
import Bibl from "./places/cntr/Bibl";
import Centr from "./places/cntr/Centr";
import Ckid from "./places/cntr/Ckid";
import Cmoll from "./places/cntr/Cmoll";
import Cplos from "./places/cntr/Cplos";
import Dneft from "./places/cntr/Dneft";
import Dock from "./places/cntr/Dock";
import Filarm from "./places/cntr/Filarm";
import Gperer from "./places/cntr/Gperer";
import Gpkio from "./places/cntr/Gpkio";
import Gtrans from "./places/cntr/Gtrans";
import Gzprm from "./places/cntr/Gzprm";
import Human from "./places/cntr/Human";
import Kedr from "./places/cntr/Kedr";
import Kupec from "./places/cntr/Kupec";
import Kuzn from "./places/cntr/Kuzn";
import Lis from "./places/cntr/Lis";
import Mneft from "./places/cntr/Mneft";
import Mperv from "./places/cntr/Mperv";
import Narod from "./places/cntr/Narod";
import Osnov from "./places/cntr/Osnov";
import Patr from "./places/cntr/Patr";
import Pgaz from "./places/cntr/Pgaz";
import Port from "./places/cntr/Port";
import Pstro from "./places/cntr/Pstro";
import Scentr from "./places/cntr/Scentr";
import Sdet from "./places/cntr/Sdet";
import Sener from "./places/cntr/Sener";
import Slav from "./places/cntr/Slav";
import Smld from "./places/cntr/Smld";
import Snarod from "./places/cntr/Snarod";
import Snezh from "./places/cntr/Snezh";
import Sng from "./places/cntr/Sng";
import Sstar from "./places/cntr/Sstar";
import Ssur from "./places/cntr/Ssur";
import Sterh from "./places/cntr/Sterh";
import Surgu from "./places/cntr/Surgu";
import Taras from "./places/cntr/Taras";
import Tsgu from "./places/cntr/Tsgu";
import Uchit from "./places/cntr/Uchit";
import Voinam from "./places/cntr/Voinam";
import Zags from "./places/cntr/Zags";
import Zahar from "./places/cntr/Zahar";

import Btrud from "./places/west/Btrud";
import Budda from "./places/west/Budda";
import Nab from "./places/west/Nab";
import Nerozh from "./places/west/Nerozh";
import Obel from "./places/west/Obel";
import Pgeo from "./places/west/Pgeo";
import Repres from "./places/west/Repres";
import Rib from "./places/west/Rib";
import Saima from "./places/west/Saima";
import Salm from "./places/west/Salm";
import Sgeo from "./places/west/Sgeo";
import Stroit from "./places/west/Stroit";
import Univ from "./places/west/Univ";

import Aerop from "./places/nl/Aerop";
import Agora from "./places/nl/Agora";
import Aura from "./places/nl/Aura";
import Bridge from "./places/nl/Bridge";
import Brmsm from "./places/nl/Brmsm";
import Chaes from "./places/nl/Chaes";
import Pavia from "./places/nl/Pavia";
import Pkey from "./places/nl/Pkey";
import Poezd from "./places/nl/Poezd";
import Polet from "./places/nl/Polet";
import Smdt from "./places/nl/Smdt";
import Surgut from "./places/nl/Surgut";
import Trakt from "./places/nl/Trakt";

import Musclx from "./places/nwl/Musclx";
import Pmed from "./places/nwl/Pmed";
import Sgusch from "./places/nwl/Sgusch";
import Smile from "./places/nwl/Smile";
import Vershina from "./places/nwl/Vershina";

import Test from "./panels/Test";
import Testdva from "./panels/Testdva";
import Testtri from "./panels/Testtri";

const STORAGE_KEYS = { STATUS: "status" };

// Для запуска в клиент:
// vk-tunnel --insecure=1 --http-protocol=https --ws-protocol=wss --host=localhost --port=10888

const App = () => {
    const [activePanel, setActivePanel] = useState("introodin");
    const [activeModal, setActiveModal] = useState(null);
    const [fetchedUser, setUser] = useState(null);
    const [userHasSeenIntro, setUserHasSeenIntro] = useState(false); // Чел смотрит startScreen приложения
    const [snackbar, setSnackbar] = useState(null);
    const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
    const [f1, setF1] = useState(false);
    const [f2, setF2] = useState(false);
    const [f3, setF3] = useState(false);
    const [f4, setF4] = useState(false);
    const [f5, setF5] = useState(false);
    const [mode, setMode] = useState(null);
    const [history, setHistory] = useState(["home"]);

    const placesGo = (e) => {
        setF1(false);
        setF2(false);
        setF3(false);
        setF4(false);
        setF5(false);
        setMode(null);
        go(e);
    };

    const slct1 = () => {
        setF1(!f1);
    };
    const slct2 = () => {
        setF2(!f2);
    };
    const slct3 = () => {
        setF3(!f3);
    };
    const slct4 = () => {
        setF4(!f4);
    };
    const slct5 = () => {
        setF5(!f5);
    };

    const share = async function () {
        // bridge.send на кнопке "Поделиться"
        try {
            await bridge.send("VKWebAppShare", {
                link: "https://vk.com/app7614127",
            });
        } catch (error) {
            console.log("Отмена шера");
        }
    };

    const go = (e) => {
        // Управление приложением, смена панелей
        window.history.pushState(
            { panel: e.currentTarget.dataset.to },
            e.currentTarget.dataset.to
        );
        setActivePanel(e.currentTarget.dataset.to);
        history.push(e.currentTarget.dataset.to);
    };

    const goBack = () => {
        // Функция для возврата по свайпу
        if (history.length > 1) {
            if (activeModal !== null) {
                setActiveModal(null); // Убираем модалки, если открыты
            }
            history.pop(); // Убираем из истории панель
            setActivePanel(history[history.length - 1]); // Меняем панель
        }
    };

    const [swipe, setSwipe] = useState(() => goBack); // Управление доступом к свайпу, блокируется при открытых модалках

    const page = () => {
        setActiveModal("filters");
        setSwipe(null);
    };
    const places = () => {
        setActiveModal("places");
        setSwipe(null);
    };
    const select = (e) => {
        setMode(e.currentTarget.dataset.mode);
        setActiveModal(null);
        setSwipe(() => goBack);
    };

    const [check, setCheck] = useState(false); // ! Флаг для пропуска в introDva
    const [cords, setCords] = useState([]); // ! Временный массив для получения координат
    const [geo, setGeo] = useState([]); // ! Основной массив с координатами

    const getGeoIntro = async function () {
        // ! Поиск геоданных с интро (только через onClick)
        try {
            setCords([]);
            const getCords = await bridge.send("VKWebAppGetGeodata");
            if (getCords.available === 1) {
                // Если координаты доступны
                cords.push(getCords.long);
                cords.push(getCords.lat);
            } else {
                // Если координаты разрешены но недоступны
                setCords(null);
            }
        } catch (error) {
            // Если доступ к координатам запрещён
            console.log("GEO_DENIED");
            setCords(null);
        }
        setCheck(true);
        requestAnimationFrame(Testdva);
        setGeo(cords);
    };

    const getGeoMain = async function () {
        // ! Основной поиск геоданных для тех, кто видел интро (через useEffect)
        try {
            setCords([]);
            const getCords = await bridge.send("VKWebAppGetGeodata");
            if (getCords.available === 1) {
                // Если координаты доступны
                cords.push(getCords.long);
                cords.push(getCords.lat);
            } else {
                // Если координаты разрешены но недоступны
                setCords(null);
            }
        } catch (error) {
            // Если доступ к координатам запрещён
            console.log("GEO_DENIED");
            setCords(null);
        }
        setGeo(cords);
    };

    const goInt = (e) => {
        setActivePanel(e.currentTarget.dataset.to);
    };

    useEffect(() => {
        // Парсим данные пользователя
        async function fetchData() {
            const user = await bridge.send("VKWebAppGetUserInfo");
            const storageData = await bridge.send("VKWebAppStorageGet", {
                keys: Object.values(STORAGE_KEYS),
            });
            const data = {};
            storageData.keys.forEach(({ key, value }) => {
                try {
                    data[key] = value ? JSON.parse(value) : {};
                    switch (key) {
                        case STORAGE_KEYS.STATUS:
                            if (data[key].hasSeenIntro) {
                                // ! Если видели интро, то переход на главную и чек геоданных
                                setActivePanel("home");
                                setUserHasSeenIntro(false);
                                getGeoMain();
                            }
                            break;
                        default:
                            break;
                    }
                } catch (error) {
                    setSnackbar(
                        <Snackbar
                            layout='vertical'
                            onClose={() => setSnackbar(null)}
                            before={
                                <Avatar
                                    size={24}
                                    style={{
                                        backgroundColor: "var(--dynamic-red)",
                                    }}
                                >
                                    <Icon24Error
                                        fill='#fff'
                                        width={14}
                                        height={14}
                                    />
                                </Avatar>
                            }
                            duration={1000}
                        >
                            Упс, какая-то ошибка... :(
                        </Snackbar>
                    );
                }
            });
            setUser(user);
            setPopout(null);
        }
        fetchData();

        console.log("Хуле забыл?");

        window.addEventListener("popstate", () => goBack()); // Поведение системных кнопок Android при возврате
    }, []);

    const viewIntro = async function () {
        try {
            await bridge.send("VKWebAppStorageSet", {
                key: STORAGE_KEYS.STATUS,
                value: JSON.stringify({
                    hasSeenIntro: true,
                }),
            });
            setActivePanel("home");
        } catch (error) {
            setSnackbar(
                <Snackbar
                    layout='vertical'
                    onClose={() => setSnackbar(null)}
                    before={
                        <Avatar
                            size={24}
                            style={{ backgroundColor: "var(--dynamic-red)" }}
                        >
                            <Icon24Error fill='#fff' width={14} height={14} />
                        </Avatar>
                    }
                    duration={1000}
                >
                    Упс, какая-то ошибка отправки данных... :(
                </Snackbar>
            );
        }
    };

    const modal = (
        <ModalRoot
            activeModal={activeModal}
            onClose={() => {
                setActiveModal(null);
                setSwipe(() => goBack);
            }}
        >
            <ModalCard
                id='filters'
                onClose={() => {
                    setActiveModal(null);
                    setSwipe(() => goBack);
                }}
                header='Фильтры'
                caption='Выберите, что хотите увидеть в списке'
                actions={[
                    {
                        title: "Сбросить",
                        mode: "secondary",
                        action: () => {
                            setF1(false);
                            setF2(false);
                            setF3(false);
                            setF4(false);
                            setF5(false);
                        },
                    },
                ]}
            >
                <Cell
                    onClick={slct1}
                    asideContent={
                        f1 ? <Icon24Done fill='var(--accent)' /> : null
                    }
                >
                    Парки и Скверы
                </Cell>
                <Cell
                    onClick={slct2}
                    asideContent={
                        f2 ? <Icon24Done fill='var(--accent)' /> : null
                    }
                >
                    Музеи
                </Cell>
                <Cell
                    onClick={slct3}
                    asideContent={
                        f3 ? <Icon24Done fill='var(--accent)' /> : null
                    }
                >
                    Памятники
                </Cell>
                <Cell
                    onClick={slct4}
                    asideContent={
                        f4 ? <Icon24Done fill='var(--accent)' /> : null
                    }
                >
                    Спорт и Развлечения
                </Cell>
                <Cell
                    onClick={slct5}
                    asideContent={
                        f5 ? <Icon24Done fill='var(--accent)' /> : null
                    }
                >
                    Архитектура
                </Cell>
            </ModalCard>
            <ModalCard
                id='places'
                onClose={() => {
                    setActiveModal(null);
                    setSwipe(() => goBack);
                }}
                header='Районы'
                caption='Выберите, какой район хотите посмотреть'
                actions={[
                    {
                        title: "Сбросить",
                        mode: "secondary",
                        action: () => {
                            setMode(null);
                            setActiveModal(null);
                            setSwipe(() => goBack);
                        },
                    },
                ]}
            >
                <Cell
                    onClick={select}
                    data-mode='cntr'
                    asideContent={
                        mode === "cntr" ? (
                            <Icon24Done fill='var(--accent)' />
                        ) : null
                    }
                >
                    Центральный район
                </Cell>
                <Cell
                    onClick={select}
                    data-mode='west'
                    asideContent={
                        mode === "west" ? (
                            <Icon24Done fill='var(--accent)' />
                        ) : null
                    }
                >
                    Восточный район
                </Cell>
                <Cell
                    onClick={select}
                    data-mode='nwl'
                    asideContent={
                        mode === "nwl" ? (
                            <Icon24Done fill='var(--accent)' />
                        ) : null
                    }
                >
                    Северо-Восточный Жилой район
                </Cell>
                <Cell
                    onClick={select}
                    data-mode='nl'
                    asideContent={
                        mode === "nl" ? (
                            <Icon24Done fill='var(--accent)' />
                        ) : null
                    }
                >
                    Северный Жилой район
                </Cell>
                <Cell
                    onClick={select}
                    data-mode='all'
                    asideContent={
                        mode === "all" ? (
                            <Icon24Done fill='var(--accent)' />
                        ) : null
                    }
                >
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
                    onSwipeBack={swipe}
                >
                    <Intro
                        id='introodin'
                        fetchedUser={fetchedUser}
                        userHasSeenIntro={userHasSeenIntro}
                        goInt={goInt}
                        snackbarError={snackbar}
                    />
                    <Introdva
                        id='introdva'
                        goInt={goInt}
                        check={check}
                        getGeoIntro={getGeoIntro}
                    />
                    <Introtri id='introtri' viewIntro={viewIntro} />
                    <Home
                        id='home'
                        share={share}
                        fetchedUser={fetchedUser}
                        go={go}
                        placesGo={placesGo}
                        snackbarError={snackbar}
                    />
                    <Places
                        id='places'
                        go={go}
                        page={page}
                        mode={mode}
                        places={places}
                        f1={f1}
                        f2={f2}
                        f3={f3}
                        f4={f4}
                        f5={f5}
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
                    <Business id='business' go={go} />
                    <Percicrd id='percicrd' geo={geo} />
                    <Nyccrd id='nyccrd' geo={geo} />
                    <Auditcrd id='auditcrd' geo={geo} />
                    <Cafes id='cafes' go={go} />
                    <Botanica id='botanica' geo={geo} />
                    <Cofein id='cofein' geo={geo} />
                    <Dovlatov id='dovlatov' geo={geo} />
                    <Endorf id='endorf' geo={geo} />
                    <Friends id='friends' geo={geo} />
                    <Loft id='loft' geo={geo} />
                    <Nyc id='nyc' geo={geo} />
                    <Trvls id='trvls' geo={geo} />
                    <Vkus id='vkus' geo={geo} />
                    <Zerno id='zerno' geo={geo} />
                    <Bars id='bars' go={go} />
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
                    <Restaraunts id='restaraunts' go={go} />
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
                    <Hookah id='hookah' go={go} />
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
                    <About id='about' go={go} />
                    <Credits id='credits' />
                    <Attention id='attention' />
                    <Projects id='projects' />
                    <Test id='test' fetchedUser={fetchedUser} />
                    <Testdva
                        id='testdva'
                        check={check}
                        getGeoIntro={getGeoIntro}
                        goInt={goInt}
                    />
                    <Testtri id='testtri' viewIntro={viewIntro} />
                </View>
            </Root>
        </ConfigProvider>
    );
};

export default App;
