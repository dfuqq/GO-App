import React, { Fragment } from 'react';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import List from '@vkontakte/vkui/dist/components/List/List';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Placeholder from '@vkontakte/vkui/dist/components/Placeholder/Placeholder';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Gallery from '@vkontakte/vkui/dist/components/Gallery/Gallery';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';

import Icon56InfoOutline from '@vkontakte/icons/dist/56/info_outline';


const Places = props => {
    return (
            <Panel id={props.id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => window.history.back()}>
                    </PanelHeaderBack>}
                >
                    Места
                </PanelHeader>
                {props.mode === 'cntr' &&
                    <Fragment>
                        <Div>
                            <Button size="xl" mode="primary" onClick={props.page}>
                                Фильтры
                            </Button>
                        </Div>
                        <Header style={{ userSelect: 'none', msUserSelect: 'none', MozUserSelect: 'none', KhtmlUserSelect: 'none', WebkitUserSelect: 'none', WebkitTouchCallout: 'none' }}>Центральный Район</Header>
                        {props.f1 &&
                            <List>
                                <Cell expandable onClick={props.go} data-to="agaz" description="Небольшая аллея со скульптурами">Аллея "Газовиков"</Cell>
                                <Cell expandable onClick={props.go} data-to="gpkio" description="Один из первых парков города">Городской Парк Культуры и Отдыха</Cell>
                                <Cell expandable onClick={props.go} data-to="kedr" description="Популярный городской парк">Парк "Кедровый Лог"</Cell>
                                <Cell expandable onClick={props.go} data-to="sdet" description="Популярный городской сквер">Сквер "Детства"</Cell>
                                <Cell expandable onClick={props.go} data-to="snarod" description="Популярный городской сквер">Сквер "Дружбы Народов"</Cell>
                                <Cell expandable onClick={props.go} data-to="slav" description="Популярный городской сквер">Сквер "Мемориал Славы"</Cell>
                                <Cell expandable onClick={props.go} data-to="smld" description="Популярный городской сквер">Сквер "Молодёжный"</Cell>
                                <Cell expandable onClick={props.go} data-to="sstar" description="Крупнейший сквер города">Сквер "Старожилов Сургута"</Cell>
                                <Cell expandable onClick={props.go} data-to="scentr" description="Популярный городской сквер">Сквер "Центральный"</Cell>
                                <Cell expandable onClick={props.go} data-to="sener" description="Популярный городской сквер">Сквер "Энергетиков"</Cell>
                                <Cell expandable onClick={props.go} data-to="cplos" description="Новая городская площадь">Центральная городская площадь</Cell>
                            </List>
                        }
                        {props.f2 &&
                            <List>
                                <Cell expandable onClick={props.go} data-to="sterh" description="Дом современного искусства">Галерея Современного Искусства "Стерх"</Cell>
                                <Cell expandable onClick={props.go} data-to="kupec" description="Памятник архитектуры XIX века">Дом Купца Г.С. Клепикова</Cell>
                                <Cell expandable onClick={props.go} data-to="port" description="Площадка для различных мероприятий">Культурный Центр "Порт"</Cell>
                                <Cell expandable onClick={props.go} data-to="gzprm" description="Музей развития нефтяной промышленности">Музей Истории "Газпрома"</Cell>
                                <Cell expandable onClick={props.go} data-to="kuzn" description="Уникальная городская кузница">Обская Кузница</Cell>
                                <Cell expandable onClick={props.go} data-to="ssur" description="Историко-культурный центр">Старый Сургут</Cell>
                                <Cell expandable onClick={props.go} data-to="patr" description="Единственный центр патриотической тематики">Центр Патриотического Наследия</Cell>
                            </List>
                        }
                        {props.f3 &&
                            <List>
                                <Cell expandable onClick={props.go} data-to="mperv" description="Монумент первопроходцам Севера">Монумент "Первым Строителям Нового Города"</Cell>
                                <Cell expandable onClick={props.go} data-to="mneft" description="Монумент в честь нефтяных работников">Монумент "Трудовому Подвигу Нефтяников"</Cell>
                                <Cell expandable onClick={props.go} data-to="voinam" description="Монумент погибшим при исполнении долга">Памятник "Воинам-Интернационалистам"</Cell>
                                <Cell expandable onClick={props.go} data-to="dock" description="Монумент герою детских сказок">Памятник "Доктору Айболиту"</Cell>
                                <Cell expandable onClick={props.go} data-to="narod" description="Монумент в честь дружбы народов">Памятник "Дружбы Народов"</Cell>
                                <Cell expandable onClick={props.go} data-to="pgaz" description="Монумент работникам газодобычи">Памятник "Землякам-Газовикам"</Cell>
                                <Cell expandable onClick={props.go} data-to="zahar" description="Монумент известному журналисту">Памятник Ивану Захарову</Cell>
                                <Cell expandable onClick={props.go} data-to="osnov" description="Главный монумент города">Памятник Основателям</Cell>
                                <Cell expandable onClick={props.go} data-to="pstro" description="Монумент в честь строителей">Памятник "Строителю"</Cell>
                                <Cell expandable onClick={props.go} data-to="taras" description="Монумент украинскому поэту">Памятник Тарасу Шевченко</Cell>
                                <Cell expandable onClick={props.go} data-to="uchit" description="Монумент работникам образования">Памятник "Учительнице"</Cell>
                                <Cell expandable onClick={props.go} data-to="lis" description="Монумент символу города">Памятник Чёрному Лису</Cell>
                                <Cell expandable onClick={props.go} data-to="human" description="Копия зарубежной скульптуры">Скульптура "Гуманоиды"</Cell>
                            </List>
                        }
                        {props.f4 &&
                            <List>
                                <Cell expandable onClick={props.go} data-to="bibl" description="Главная библиотека Сургута">Библиотека им. А.С. Пушкина</Cell>
                                <Cell expandable onClick={props.go} data-to="dneft" description="Крупнейший концертный зал города">ДИ "Нефтяник"</Cell>
                                <Cell expandable onClick={props.go} data-to="snezh" description="Спортивное ядро города">Стадион "Снежинка"</Cell>
                                <Cell expandable onClick={props.go} data-to="filarm" description="Главный концертный зал города">Сургутская филармония</Cell>
                                <Cell expandable onClick={props.go} data-to="tsgu" description="Один из главных театров города">Театр СурГУ</Cell>
                                <Cell expandable onClick={props.go} data-to="cmoll" description="Один из крупных городских ТЦ">ТЦ "Сити Молл"</Cell>
                                <Cell expandable onClick={props.go} data-to="ckid" description="Популярный концертный зал">ЦКИД "Камертон"</Cell>
                            </List>
                        }
                        {props.f5 &&
                            <List>
                                <Cell expandable onClick={props.go} data-to="bben" description="Школа изучения иностранных языков">Биг-Бен</Cell>
                                <Cell expandable onClick={props.go} data-to="gperer" description="Недостроенный офис">"Газпром Переработка"</Cell>
                                <Cell expandable onClick={props.go} data-to="gtrans" description="Офис градообразующей компании">"Газпром Трансгаз"</Cell>
                                <Cell expandable onClick={props.go} data-to="zags" description="Городской ЗАГС">Дворец Торжеств</Cell>
                                <Cell expandable onClick={props.go} data-to="sng" description="Офис градообразующей компании">ПАО "Сургутнефтегаз"</Cell>
                                <Cell expandable onClick={props.go} data-to="centr" description="Известная точка города">ТЦ "City Centre"</Cell>
                                <Cell expandable onClick={props.go} data-to="surgu" description="Главный университет города">Университет</Cell>
                            </List>
                        }
                        {(!props.f1 && !props.f2 && !props.f3 && !props.f4 && !props.f5) &&
                            <List>
                                <Cell expandable onClick={props.go} data-to="agaz" description="Небольшая аллея со скульптурами">Аллея "Газовиков"</Cell>
                                <Cell expandable onClick={props.go} data-to="bibl" description="Главная библиотека Сургута">Библиотека им. А.С. Пушкина</Cell>
                                <Cell expandable onClick={props.go} data-to="bben" description="Школа изучения иностранных языков">Биг-Бен</Cell>
                                <Cell expandable onClick={props.go} data-to="gperer" description="Недостроенный офис">"Газпром Переработка"</Cell>
                                <Cell expandable onClick={props.go} data-to="gtrans" description="Офис градообразующей компании">"Газпром Трансгаз"</Cell>
                                <Cell expandable onClick={props.go} data-to="sterh" description="Дом современного искусства">Галерея Современного Искусства "Стерх"</Cell>
                                <Cell expandable onClick={props.go} data-to="gpkio" description="Один из первых парков города">Городской Парк Культуры и Отдыха</Cell>
                                <Cell expandable onClick={props.go} data-to="zags" description="Городской ЗАГС">Дворец Торжеств</Cell>
                                <Cell expandable onClick={props.go} data-to="dneft" description="Крупнейший концертный зал города">ДИ "Нефтяник"</Cell>
                                <Cell expandable onClick={props.go} data-to="kupec" description="Памятник архитектуры XIX века">Дом Купца Г.С. Клепикова</Cell>
                                <Cell expandable onClick={props.go} data-to="port" description="Площадка для различных мероприятий">Культурный Центр "Порт"</Cell>
                                <Cell expandable onClick={props.go} data-to="mperv" description="Монумент первопроходцам Севера">Монумент "Первым Строителям Нового Города"</Cell>
                                <Cell expandable onClick={props.go} data-to="mneft" description="Монумент в честь нефтяных работников">Монумент "Трудовому Подвигу Нефтяников"</Cell>
                                <Cell expandable onClick={props.go} data-to="gzprm" description="Музей развития нефтяной промышленности">Музей Истории "Газпрома"</Cell>
                                <Cell expandable onClick={props.go} data-to="kuzn" description="Уникальная городская кузница">Обская Кузница</Cell>
                                <Cell expandable onClick={props.go} data-to="voinam" description="Монумент погибшим при исполнении долга">Памятник "Воинам-Интернационалистам"</Cell>
                                <Cell expandable onClick={props.go} data-to="narod" description="Монумент в честь дружбы народов">Памятник "Дружбы Народов"</Cell>
                                <Cell expandable onClick={props.go} data-to="dock" description="Монумент герою детских сказок">Памятник "Доктору Айболиту"</Cell>
                                <Cell expandable onClick={props.go} data-to="pgaz" description="Монумент работникам газодобычи">Памятник "Землякам-Газовикам"</Cell>
                                <Cell expandable onClick={props.go} data-to="zahar" description="Монумент известному журналисту">Памятник Ивану Захарову</Cell>
                                <Cell expandable onClick={props.go} data-to="osnov" description="Главный монумент города">Памятник Основателям</Cell>
                                <Cell expandable onClick={props.go} data-to="pstro" description="Монумент в честь строителей">Памятник "Строителю"</Cell>
                                <Cell expandable onClick={props.go} data-to="taras" description="Монумент украинскому поэту">Памятник Тарасу Шевченко</Cell>
                                <Cell expandable onClick={props.go} data-to="uchit" description="Монумент работникам образования">Памятник "Учительнице"</Cell>
                                <Cell expandable onClick={props.go} data-to="lis" description="Монумент символу города">Памятник Чёрному Лису</Cell>
                                <Cell expandable onClick={props.go} data-to="kedr" description="Популярный городской парк">Парк "Кедровый Лог"</Cell>
                                <Cell expandable onClick={props.go} data-to="sng" description="Офис градообразующей компании">ПАО "Сургутнефтегаз"</Cell>
                                <Cell expandable onClick={props.go} data-to="sdet" description="Популярный городской сквер">Сквер "Детства"</Cell>
                                <Cell expandable onClick={props.go} data-to="snarod" description="Популярный городской сквер">Сквер "Дружбы Народов"</Cell>
                                <Cell expandable onClick={props.go} data-to="slav" description="Популярный городской сквер">Сквер "Мемориал Славы"</Cell>
                                <Cell expandable onClick={props.go} data-to="smld" description="Популярный городской сквер">Сквер "Молодёжный"</Cell>
                                <Cell expandable onClick={props.go} data-to="sstar" description="Крупнейший сквер города">Сквер "Старожилов Сургута"</Cell>
                                <Cell expandable onClick={props.go} data-to="scentr" description="Популярный городской сквер">Сквер "Центральный"</Cell>
                                <Cell expandable onClick={props.go} data-to="sener" description="Популярный городской сквер">Сквер "Энергетиков"</Cell>
                                <Cell expandable onClick={props.go} data-to="human" description="Копия зарубежной скульптуры">Скульптура "Гуманоиды"</Cell>
                                <Cell expandable onClick={props.go} data-to="snezh" description="Спортивное ядро города">Стадион "Снежинка"</Cell>
                                <Cell expandable onClick={props.go} data-to="ssur" description="Историко-культурный центр">Старый Сургут</Cell>
                                <Cell expandable onClick={props.go} data-to="filarm" description="Главный концертный зал города">Сургутская филармония</Cell>
                                <Cell expandable onClick={props.go} data-to="tsgu" description="Один из главных театров города">Театр СурГУ</Cell>
                                <Cell expandable onClick={props.go} data-to="centr" description="Известная точка города">ТЦ "City Centre"</Cell>
                                <Cell expandable onClick={props.go} data-to="cmoll" description="Один из крупных городских ТЦ">ТЦ "Сити Молл"</Cell>
                                <Cell expandable onClick={props.go} data-to="surgu" description="Главный университет города">Университет</Cell>
                                <Cell expandable onClick={props.go} data-to="patr" description="Единственный центр патриотической тематики">Центр Патриотического Наследия</Cell>
                                <Cell expandable onClick={props.go} data-to="cplos" description="Новая городская площадь">Центральная городская площадь</Cell>
                                <Cell expandable onClick={props.go} data-to="ckid" description="Популярный концертный зал">ЦКИД "Камертон"</Cell>
                            </List>
                        }
                        <Div>
                            <Div>
                                <Div>
                                    <FixedLayout vertical="bottom">
                                        <Div>
                                            <Button size="xl" mode="primary" onClick={props.places}>Выбрать район</Button>
                                        </Div>
                                    </FixedLayout>
                                </Div>
                            </Div>
                        </Div>
                    </Fragment>
                }
                {props.mode === 'west' &&
                    <Fragment>
                        <Div>
                            <Button size="xl" mode="primary" onClick={props.page}>
                                Фильтры
                            </Button>
                        </Div>
                        <Header style={{ userSelect: 'none', msUserSelect: 'none', MozUserSelect: 'none', KhtmlUserSelect: 'none', WebkitUserSelect: 'none', WebkitTouchCallout: 'none' }}>Восточный Район</Header>
                        {props.f1 &&
                            <List>
                                <Cell expandable onClick={props.go} data-to="nab" description="Территория бывшего речного вокзала">Набережная Речпорта</Cell>
                                <Cell expandable onClick={props.go} data-to="pgeo" description="Парк на юго-востоке города">Парк "Геологов"</Cell>
                                <Cell expandable onClick={props.go} data-to="saima" description="Главный парк города">Парк "За Саймой"</Cell>
                                <Cell expandable onClick={props.go} data-to="sgeo" description="Сквер в юго-восточной части города">Сквер "Геологов-Первопроходцев"</Cell>
                            </List>
                        }
                        {props.f2 && 
                            <List>
                                <Cell expandable onClick={props.go} data-to="salm" description="Дом-музей первооткрывателя Сибирской нефти">Музей Ф.К. Салманова</Cell>
                            </List>
                        }
                        {props.f3 &&
                            <List>
                                <Cell expandable onClick={props.go} data-to="obel" description="Памятный обелиск воинам ВОВ">Обелиск "Ушедшим на Фронт"</Cell>
                                <Cell expandable onClick={props.go} data-to="budda" description="Монумент в честь будизма">Памятник Будде</Cell>
                                <Cell expandable onClick={props.go} data-to="repres" description="Монумент в честь спецпереселенцов">Памятник "Жертвам Репрессий"</Cell>
                                <Cell expandable onClick={props.go} data-to="btrud" description="Монумент в честь рыбокомбината">Памятник "Мужеству Рыбаков"</Cell>
                                <Cell expandable onClick={props.go} data-to="nerozh" description="Копия зарубежной скульптуры">Памятник "Нерождённым Детям"</Cell>
                                <Cell expandable onClick={props.go} data-to="rib" description="Монумент в честь работников тыла">Памятник "Труженикам Рыбокомбината"</Cell>
                            </List>
                        }
                        {props.f4 &&
                            <List>
                                <Cell expandable onClick={props.go} data-to="stroit" description="Популярный концертный зал">Городской Культурный Центр</Cell>
                            </List>
                        }
                        {props.f5 &&
                            <List>
                                <Cell expandable onClick={props.go} data-to="univ" description="Популярная улица Сургута">Университетская</Cell>
                            </List>
                        }
                        {(!props.f1 && !props.f2 && !props.f3 && !props.f4 && !props.f5) &&
                            <List>
                                <Cell expandable onClick={props.go} data-to="stroit" description="Популярный концертный зал">Городской Культурный Центр</Cell>
                                <Cell expandable onClick={props.go} data-to="salm" description="Дом-музей первооткрывателя Сибирской нефти">Музей Ф.К. Салманова</Cell>
                                <Cell expandable onClick={props.go} data-to="nab" description="Территория бывшего речного вокзала">Набережная Речпорта</Cell>
                                <Cell expandable onClick={props.go} data-to="obel" description="Памятный обелиск воинам ВОВ">Обелиск "Ушедшим на Фронт"</Cell>
                                <Cell expandable onClick={props.go} data-to="budda" description="Монумент в честь будизма">Памятник Будде</Cell>
                                <Cell expandable onClick={props.go} data-to="repres" description="Монумент в честь спецпереселенцов">Памятник "Жертвам Репрессий"</Cell>
                                <Cell expandable onClick={props.go} data-to="btrud" description="Монумент в честь рыбокомбината">Памятник "Мужеству Рыбаков"</Cell>
                                <Cell expandable onClick={props.go} data-to="nerozh" description="Копия зарубежной скульптуры">Памятник "Нерождённым Детям"</Cell>
                                <Cell expandable onClick={props.go} data-to="rib" description="Монумент в честь работников тыла">Памятник "Труженикам Рыбокомбината"</Cell>
                                <Cell expandable onClick={props.go} data-to="univ" description="Популярная улица Сургута">Университетская</Cell>
                                <Cell expandable onClick={props.go} data-to="pgeo" description="Парк на юго-востоке города">Парк "Геологов"</Cell>
                                <Cell expandable onClick={props.go} data-to="saima" description="Главный парк города">Парк "За Саймой"</Cell>
                                <Cell expandable onClick={props.go} data-to="sgeo" description="Сквер в юго-восточной части города">Сквер "Геологов-Первопроходцев"</Cell>
                            </List>
                        }
                        <Div>
                            <Div>
                                <Div>
                                    <FixedLayout vertical="bottom">
                                        <Div>
                                            <Button size="xl" mode="primary" onClick={props.places}>Выбрать район</Button>
                                        </Div>
                                    </FixedLayout>
                                </Div>
                            </Div>
                        </Div>
                    </Fragment>
                }
                {props.mode === 'nwl' &&
                    <Fragment>
                        <List>
                            <Header style={{ userSelect: 'none', msUserSelect: 'none', MozUserSelect: 'none', KhtmlUserSelect: 'none', WebkitUserSelect: 'none', WebkitTouchCallout: 'none' }}>Северо-Восточный Жилой Район</Header>
                            <Cell expandable onClick={props.go} data-to="musclx" description="Крупный музейный комплекс">Музейный Центр</Cell>
                            <Cell expandable onClick={props.go} data-to="pmed" description="Монумент в честь врачей">Памятник "Медсестре"</Cell>
                            <Cell expandable onClick={props.go} data-to="smile" description="Монумент в честь эмоции">Памятник "Улыбке"</Cell>
                            <Cell expandable onClick={props.go} data-to="vershina" description="Популярный городской ТЦ">ТЦ "Вершина"</Cell>
                            <Cell expandable onClick={props.go} data-to="sgusch" description="Монумент популярного продукта">Памятник Сгущёнке</Cell>
                            <FixedLayout vertical="bottom">
                                <Div>
                                    <Button size="xl" mode="primary" onClick={props.places}>Выбрать район</Button>
                                </Div>
                            </FixedLayout>
                        </List>
                    </Fragment>
                }
                {props.mode === 'nl' &&
                    <Fragment>
                        <Div>
                            <Button size="xl" mode="primary" onClick={props.page}>
                                Фильтры
                            </Button>
                        </Div>
                        <Header style={{ userSelect: 'none', msUserSelect: 'none', MozUserSelect: 'none', KhtmlUserSelect: 'none', WebkitUserSelect: 'none', WebkitTouchCallout: 'none' }}>Северный Жилой Район</Header>
                        {props.f1 && 
                            <List>
                                <Cell expandable onClick={props.go} data-to="pkey" description="Новый популярный парк">Парк "Новые Ключи"</Cell>
                                <Cell expandable onClick={props.go} data-to="chaes" description="Сквер в честь ликвидаторов аварии">Сквер "Памяти Чернобыльцев"</Cell>
                            </List>
                        }
                        {props.f2 &&
                            <List>
                                <Cell expandable onClick={props.go} data-to="brmsm" description="Музей создания моста">Музей Югорского Моста</Cell>
                            </List>
                        }
                        {props.f3 &&
                            <List>
                                <Cell expandable onClick={props.go} data-to="pavia" description="Монумент Сургутскому авиаотряду">Памятник "Авиаторам Сибири"</Cell>
                                <Cell expandable onClick={props.go} data-to="poezd" description="Монумент первому тепловозу в городе">Памятник "Первому поезду"</Cell>
                                <Cell expandable onClick={props.go} data-to="polet" description="Скульптура на северном въезде">Стела "Полёт"</Cell>
                                <Cell expandable onClick={props.go} data-to="surgut" description="Скульптура на западном въезде">Стела "Сургут"</Cell>
                            </List>
                        }
                        {props.f4 &&
                            <List>
                                <Cell expandable onClick={props.go} data-to="smdt" description="Популярный городской театр">Сургусткий Музыкально-Драматический Театр</Cell>
                                <Cell expandable onClick={props.go} data-to="agora" description="Популярный городской ТЦ">ТЦ "Агора"</Cell>
                                <Cell expandable onClick={props.go} data-to="aura" description="Один из крупных городских ТЦ">ТЦ "Аура"</Cell>
                            </List>
                        }
                        {props.f5 &&
                            <List>
                                <Cell expandable onClick={props.go} data-to="aerop" description="Сургутский аэровокзал">Аэропорт</Cell>
                                <Cell expandable onClick={props.go} data-to="trakt" description="Транспортная артерия города">Тюменский Тракт</Cell>
                                <Cell expandable onClick={props.go} data-to="bridge" description="Важнейший транспортный узел Сургута">Югорский Мост</Cell>
                            </List>
                        }
                        {(!props.f1 && !props.f2 && !props.f3 && !props.f4 && !props.f5) &&
                            <List>
                                <Cell expandable onClick={props.go} data-to="aerop" description="Сургутский аэровокзал">Аэропорт</Cell>
                                <Cell expandable onClick={props.go} data-to="bridge" description="Важнейший транспортный узел Сургута">Мост через Обь</Cell>
                                <Cell expandable onClick={props.go} data-to="brmsm" description="Музей создания моста">Музей Югорского Моста</Cell>
                                <Cell expandable onClick={props.go} data-to="pavia" description="Монумент Сургутскому авиаотряду">Памятник "Авиаторам Сибири"</Cell>
                                <Cell expandable onClick={props.go} data-to="poezd" description="Монумент первому тепловозу в городе">Памятник "Первому Поезду"</Cell>
                                <Cell expandable onClick={props.go} data-to="pkey" description="Новый популярный парк">Парк "Новые Ключи"</Cell>
                                <Cell expandable onClick={props.go} data-to="chaes" description="Сквер в честь ликвидаторов аварии">Сквер "Памяти Чернобыльцев"</Cell>
                                <Cell expandable onClick={props.go} data-to="polet" description="Скульптура на северном въезде">Стела "Полёт"</Cell>
                                <Cell expandable onClick={props.go} data-to="surgut" description="Скульптура на западном въезде">Стела "Сургут"</Cell>
                                <Cell expandable onClick={props.go} data-to="smdt" description="Популярный городской театр">Сургутский Музыкально-Драматический Театр</Cell>
                                <Cell expandable onClick={props.go} data-to="agora" description="Популярный городской ТЦ">ТЦ "Агора"</Cell>
                                <Cell expandable onClick={props.go} data-to="aura" description="Один из крупных городских ТЦ">ТЦ "Аура"</Cell>
                                <Cell expandable onClick={props.go} data-to="trakt" description="Транспортная артерия города">Тюменский Тракт</Cell>
                            </List>
                        }
                        <Div>
                            <Div>
                                <Div>
                                    <FixedLayout vertical="bottom">
                                        <Div>
                                            <Button size="xl" mode="primary" onClick={props.places}>Выбрать район</Button>
                                        </Div>
                                    </FixedLayout>
                                </Div>
                            </Div>
                        </Div>
                    </Fragment>
                }
                {props.mode === 'all' &&
                    <Fragment>
                        <Div>
                            <Button size="xl" mode="primary" onClick={props.page}>
                                Фильтры
                            </Button>
                        </Div>
                        <Header style={{ userSelect: 'none', msUserSelect: 'none', MozUserSelect: 'none', KhtmlUserSelect: 'none', WebkitUserSelect: 'none', WebkitTouchCallout: 'none' }}>Все Районы</Header>
                        {props.f1 &&
                            <List>
                                <Cell expandable onClick={props.go} data-to="agaz" description="Небольшая аллея со скульптурами">Аллея "Газовиков"</Cell>
                                <Cell expandable onClick={props.go} data-to="gpkio" description="Один из первых парков города">Городской Парк Культуры и Отдыха</Cell>
                                <Cell expandable onClick={props.go} data-to="nab" description="Территория бывшего речного вокзала">Набережная Речпорта</Cell>
                                <Cell expandable onClick={props.go} data-to="pgeo" description="Парк на юго-востоке города">Парк "Геологов"</Cell>
                                <Cell expandable onClick={props.go} data-to="saima" description="Главный парк города">Парк "За Саймой"</Cell>
                                <Cell expandable onClick={props.go} data-to="kedr" description="Популярный городской парк">Парк "Кедровый Лог"</Cell>
                                <Cell expandable onClick={props.go} data-to="pkey" description="Новый популярный парк">Парк "Новые Ключи"</Cell>
                                <Cell expandable onClick={props.go} data-to="sgeo" description="Сквер в юго-восточной части города">Сквер "Геологов-Первопроходцев"</Cell>
                                <Cell expandable onClick={props.go} data-to="sdet" description="Популярный городской сквер">Сквер "Детства"</Cell>
                                <Cell expandable onClick={props.go} data-to="snarod" description="Популярный городской сквер">Сквер "Дружбы Народов"</Cell>
                                <Cell expandable onClick={props.go} data-to="slav" description="Популярный городской сквер">Сквер "Мемориал Славы"</Cell>
                                <Cell expandable onClick={props.go} data-to="smld" description="Популярный городской сквер">Сквер "Молодёжный"</Cell>
                                <Cell expandable onClick={props.go} data-to="chaes" description="Сквер в честь ликвидаторов аварии">Сквер "Памяти Чернобыльцев"</Cell>
                                <Cell expandable onClick={props.go} data-to="sstar" description="Крупнейший сквер города">Сквер "Старожилов Сургута"</Cell>
                                <Cell expandable onClick={props.go} data-to="scentr" description="Популярный городской сквер">Сквер "Центральный"</Cell>
                                <Cell expandable onClick={props.go} data-to="sener" description="Популярный городской сквер">Сквер "Энергетиков"</Cell>
                                <Cell expandable onClick={props.go} data-to="cplos" description="Новая городская площадь">Центральная городская площадь</Cell>
                            </List>
                        }
                        {props.f2 &&
                            <List>
                                <Cell expandable onClick={props.go} data-to="sterh" description="Дом современного искусства">Галерея Современного Искусства "Стерх"</Cell>
                                <Cell expandable onClick={props.go} data-to="kupec" description="Памятник архитектуры XIX века">Дом Купца Г.С. Клепикова</Cell>
                                <Cell expandable onClick={props.go} data-to="port" description="Площадка для различных мероприятий">Культурный Центр "Порт"</Cell>
                                <Cell expandable onClick={props.go} data-to="gzprm" description="Музей развития нефтяной промышленности">Музей Истории "Газпрома"</Cell> 
                                <Cell expandable onClick={props.go} data-to="brmsm" description="Музей создания моста">Музей Югорского Моста</Cell>
                                <Cell expandable onClick={props.go} data-to="salm" description="Дом-музей первооткрывателя Сибирской нефти">Музей Ф.К. Салманова</Cell>
                                <Cell expandable onClick={props.go} data-to="musclx" description="Крупный музейный комплекс">Музейный Комплекс</Cell>
                                <Cell expandable onClick={props.go} data-to="kuzn" description="Уникальная городская кузница">Обская Кузница</Cell>
                                <Cell expandable onClick={props.go} data-to="ssur" description="Историко-культурный центр">Старый Сургут</Cell>
                                <Cell expandable onClick={props.go} data-to="patr" description="Единственный центр патриотической тематики">Центр Патриотического Наследия</Cell>
                            </List>
                        }
                        {props.f3 &&
                            <List>
                                <Cell expandable onClick={props.go} data-to="mneft" description="Монумент в честь нефтяных работников">Монумент "Трудовому Подвигу Нефтяников"</Cell>
                                <Cell expandable onClick={props.go} data-to="mperv" description="Монумент первопроходцам Севера">Монумент "Первым Строителям Нового Города"</Cell>
                                <Cell expandable onClick={props.go} data-to="obel" description="Памятный обелиск воинам ВОВ">Обелиск "Ушедшим на Фронт"</Cell>
                                <Cell expandable onClick={props.go} data-to="pavia" description="Монумент Сургутскому авиаотряду">Памятник "Авиаторам Сибири"</Cell>
                                <Cell expandable onClick={props.go} data-to="budda" description="Монумент в честь будизма">Памятник Будде</Cell>
                                <Cell expandable onClick={props.go} data-to="voinam" description="Монумент погибшим при исполнении долга">Памятник "Воинам-Интернационалистам"</Cell>
                                <Cell expandable onClick={props.go} data-to="dock" description="Монумент герою детских сказок">Памятник "Доктору Айболиту"</Cell>
                                <Cell expandable onClick={props.go} data-to="narod" description="Монумент в честь дружбы народов">Памятник "Дружбы Народов"</Cell>
                                <Cell expandable onClick={props.go} data-to="repres" description="Монумент в честь спецпереселенцов">Памятник "Жертвам Репрессий"</Cell>
                                <Cell expandable onClick={props.go} data-to="pgaz" description="Монумент работникам газодобычи">Памятник "Землякам-Газовикам"</Cell>
                                <Cell expandable onClick={props.go} data-to="zahar" description="Монумент известному журналисту">Памятник Ивану Захарову</Cell>
                                <Cell expandable onClick={props.go} data-to="pmed" description="Монумент в честь врачей">Памятник "Медсестре"</Cell>
                                <Cell expandable onClick={props.go} data-to="btrud" description="Монумент в честь рыбокомбината">Памятник "Мужеству Рыбаков"</Cell>
                                <Cell expandable onClick={props.go} data-to="nerozh" description="Копия зарубежной скульптуры">Памятник "Нерождённым Детям"</Cell>
                                <Cell expandable onClick={props.go} data-to="osnov" description="Главный монумент города">Памятник Основателям</Cell>
                                <Cell expandable onClick={props.go} data-to="poezd" description="Монумент первому тепловозу в городе">Памятник "Первому Поезду"</Cell>
                                <Cell expandable onClick={props.go} data-to="sgusch" description="Монумeнт популярного продукта">Памятник Сгущёнке</Cell>
                                <Cell expandable onClick={props.go} data-to="pstro" description="Монумент в честь строителей">Памятник "Строителю"</Cell>
                                <Cell expandable onClick={props.go} data-to="taras" description="Монумент украинскому поэту">Памятник Тарасу Шевченко</Cell>
                                <Cell expandable onClick={props.go} data-to="rib" description="Монумент в честь работников тыла">Памятник "Труженикам Рыбокомбината"</Cell>
                                <Cell expandable onClick={props.go} data-to="smile" description="Монумент в честь эмоции">Памятник "Улыбке"</Cell>
                                <Cell expandable onClick={props.go} data-to="uchit" description="Монумент работникам образования">Памятник "Учительнице"</Cell>
                                <Cell expandable onClick={props.go} data-to="lis" description="Монумент символу города">Памятник Чёрному Лису</Cell>
                                <Cell expandable onClick={props.go} data-to="human" description="Копия зарубежной скульптуры">Скульптура "Гуманоиды"</Cell>
                                <Cell expandable onClick={props.go} data-to="polet" description="Скульптура на северном въезде">Стела "Полёт"</Cell>
                                <Cell expandable onClick={props.go} data-to="surgut" description="Скульптура на западном въезде">Стела "Сургут"</Cell>
                            </List>
                        }
                        {props.f4 &&
                            <List>
                                <Cell expandable onClick={props.go} data-to="bibl" description="Главная библиотека Сургута">Библиотека им. А.С. Пушкина</Cell>
                                <Cell expandable onClick={props.go} data-to="stroit" description="Популярный концертный зал">Городской Культурный Центр</Cell>
                                <Cell expandable onClick={props.go} data-to="dneft" description="Крупнейший концертный зал города">ДИ "Нефтяник"</Cell>
                                <Cell expandable onClick={props.go} data-to="snezh" description="Спортивное ядро города">Стадион "Снежинка"</Cell>
                                <Cell expandable onClick={props.go} data-to="smdt" description="Популярный городской театр">Сургутский Музыкально-Драматический Театр</Cell>
                                <Cell expandable onClick={props.go} data-to="filarm" description="Главный концертный зал города">Сургутская филармония</Cell>
                                <Cell expandable onClick={props.go} data-to="tsgu" description="Один из главных театров города">Театр СурГУ</Cell>
                                <Cell expandable onClick={props.go} data-to="agora" description="Популярный городской ТЦ">ТЦ "Агора"</Cell>
                                <Cell expandable onClick={props.go} data-to="aura" description="Один из крупных городских ТЦ">ТЦ "Аура"</Cell>
                                <Cell expandable onClick={props.go} data-to="vershina" description="Популярный городской ТЦ">ТЦ "Вершина"</Cell>
                                <Cell expandable onClick={props.go} data-to="cmoll" description="Один из крупных городских ТЦ">ТЦ "Сити Молл"</Cell>
                                <Cell expandable onClick={props.go} data-to="ckid" description="Популярный концертный зал">ЦКИД "Камертон"</Cell>
                            </List>
                        }
                        {props.f5 &&
                            <List>
                                <Cell expandable onClick={props.go} data-to="aerop" description="Сургутский аэровокзал">Аэропорт</Cell>
                                <Cell expandable onClick={props.go} data-to="bben" description="Школа изучения иностранных языков">Биг-Бен</Cell>
                                <Cell expandable onClick={props.go} data-to="gperer" description="Недостроенный офис">"Газпром Переработка"</Cell>
                                <Cell expandable onClick={props.go} data-to="gtrans" description="Офис градообразующей компании">"Газпром Трансгаз"</Cell>
                                <Cell expandable onClick={props.go} data-to="zags" description="Городской ЗАГС">Дворец Торжеств</Cell>
                                <Cell expandable onClick={props.go} data-to="bridge" description="Важнейший транспортный узел Сургута">Мост через Обь</Cell>
                                <Cell expandable onClick={props.go} data-to="sng" description="Офис градообразующей компании">ПАО "Сургутнефтегаз"</Cell>
                                <Cell expandable onClick={props.go} data-to="centr" description="Известная точка города">ТЦ "City Centre"</Cell>
                                <Cell expandable onClick={props.go} data-to="trakt" description="Транспортная артерия города">Тюменский Тракт</Cell>
                                <Cell expandable onClick={props.go} data-to="surgu" description="Главный университет города">Университет</Cell>
                                <Cell expandable onClick={props.go} data-to="univ" description="Популярная улица Сургута">Университетская</Cell>
                            </List>
                        }
                        {(!props.f1 && !props.f2 && !props.f3 && !props.f4 && !props.f5) &&
                            <List>
                                <Cell expandable onClick={props.go} data-to="agaz" description="Небольшая аллея со скульптурами">Аллея "Газовиков"</Cell>
                                <Cell expandable onClick={props.go} data-to="aerop" description="Сургутский аэровокзал">Аэропорт</Cell>
                                <Cell expandable onClick={props.go} data-to="bibl" description="Главная библиотека Сургута">Библиотека им. А.С. Пушкина</Cell>
                                <Cell expandable onClick={props.go} data-to="bben" description="Школа изучения иностранных языков">Биг-Бен</Cell>
                                <Cell expandable onClick={props.go} data-to="gperer" description="Недостроенный офис">"Газпром Переработка"</Cell>
                                <Cell expandable onClick={props.go} data-to="gtrans" description="Офис градообразующей компании">"Газпром Трансгаз"</Cell>
                                <Cell expandable onClick={props.go} data-to="sterh" description="Дом современного искусства">Галерея Современного Искусства "Стерх"</Cell>
                                <Cell expandable onClick={props.go} data-to="stroit" description="Популярный концертный зал">Городской Культурный Центр</Cell>
                                <Cell expandable onClick={props.go} data-to="gpkio" description="Один из первых парков города">Городской Парк Культуры и Отдыха</Cell>
                                <Cell expandable onClick={props.go} data-to="zags" description="Городской ЗАГС">Дворец Торжеств</Cell>
                                <Cell expandable onClick={props.go} data-to="dneft" description="Крупнейший концертный зал города">ДИ "Нефтяник"</Cell>
                                <Cell expandable onClick={props.go} data-to="kupec" description="Памятник архитектуры XIX века">Дом Купца Г.С. Клепикова</Cell>
                                <Cell expandable onClick={props.go} data-to="port" description="Площадка для различных мероприятий">Культурный Центр "Порт"</Cell>
                                <Cell expandable onClick={props.go} data-to="mperv" description="Монумент первопроходцам Севера">Монумент "Первым Строителям Нового Города"</Cell>
                                <Cell expandable onClick={props.go} data-to="mneft" description="Монумент в честь нефтяных работников">Монумент "Трудовому Подвигу Нефтяников"</Cell>
                                <Cell expandable onClick={props.go} data-to="bridge" description="Важнейший транспортный узел Сургута">Мост через Обь</Cell>
                                <Cell expandable onClick={props.go} data-to="gzprm" description="Музей развития нефтяной промышленности">Музей Истории "Газпрома"</Cell> 
                                <Cell expandable onClick={props.go} data-to="musclx" description="Крупный музейный комплекс">Музейный Комплекс</Cell>
                                <Cell expandable onClick={props.go} data-to="brmsm" description="Музей создания моста">Музей Югорского Моста</Cell>
                                <Cell expandable onClick={props.go} data-to="salm" description="Дом-музей первооткрывателя Сибирской нефти">Музей Ф.К. Салманова</Cell>
                                <Cell expandable onClick={props.go} data-to="nab" description="Территория бывшего речного вокзала">Набережная Речпорта</Cell>
                                <Cell expandable onClick={props.go} data-to="obel" description="Памятный обелиск воинам ВОВ">Обелиск "Ушедшим на Фронт"</Cell>
                                <Cell expandable onClick={props.go} data-to="kuzn" description="Уникальная городская кузница">Обская Кузница</Cell>
                                <Cell expandable onClick={props.go} data-to="pavia" description="Монумент Сургутскому авиаотряду">Памятник "Авиаторам Сибири"</Cell>
                                <Cell expandable onClick={props.go} data-to="budda" description="Монумент в честь будизма">Памятник Будде</Cell>
                                <Cell expandable onClick={props.go} data-to="voinam" description="Монумент погибшим при исполнении долга">Памятник "Воинам-Интернационалистам"</Cell>
                                <Cell expandable onClick={props.go} data-to="dock" description="Монумент герою детских сказок">Памятник "Доктору Айболиту"</Cell>
                                <Cell expandable onClick={props.go} data-to="narod" description="Монумент в честь дружбы народов">Памятник "Дружбы Народов"</Cell>
                                <Cell expandable onClick={props.go} data-to="repres" description="Монумент в честь спецпереселенцов">Памятник "Жертвам Репрессий"</Cell>
                                <Cell expandable onClick={props.go} data-to="pgaz" description="Монумент работникам газодобычи">Памятник "Землякам-Газовикам"</Cell>
                                <Cell expandable onClick={props.go} data-to="zahar" description="Монумент известному журналисту">Памятник Ивану Захарову</Cell>
                                <Cell expandable onClick={props.go} data-to="pmed" description="Монумент в честь врачей">Памятник "Медсестре"</Cell>
                                <Cell expandable onClick={props.go} data-to="btrud" description="Монумент в честь рыбокомбината">Памятник "Мужеству Рыбаков"</Cell>
                                <Cell expandable onClick={props.go} data-to="nerozh" description="Копия зарубежной скульптуры">Памятник "Нерождённым Детям"</Cell>
                                <Cell expandable onClick={props.go} data-to="osnov" description="Главный монумент города">Памятник Основателям</Cell>
                                <Cell expandable onClick={props.go} data-to="poezd" description="Монумент первому тепловозу в городе">Памятник "Первому Поезду"</Cell>
                                <Cell expandable onClick={props.go} data-to="sgusch" description="Монумент популярного продукта">Памятник Сгущёнке</Cell>
                                <Cell expandable onClick={props.go} data-to="pstro" description="Монумент в честь строителей">Памятник "Строителю"</Cell>
                                <Cell expandable onClick={props.go} data-to="taras" description="Монумент украинскому поэту">Памятник Тарасу Шевченко</Cell>
                                <Cell expandable onClick={props.go} data-to="rib" description="Монумент в честь работников тыла">Памятник "Труженикам Рыбокомбината"</Cell>
                                <Cell expandable onClick={props.go} data-to="smile" description="Монумент в честь эмоции">Памятник "Улыбке"</Cell>
                                <Cell expandable onClick={props.go} data-to="uchit" description="Монумент работникам образования">Памятник "Учительнице"</Cell>
                                <Cell expandable onClick={props.go} data-to="lis" description="Монумент символу города">Памятник Чёрному Лису</Cell>
                                <Cell expandable onClick={props.go} data-to="sng" description="Офис градообразующей компании">ПАО "Сургутнефтегаз"</Cell>
                                <Cell expandable onClick={props.go} data-to="pgeo" description="Парк на юго-востоке города">Парк "Геологов"</Cell>
                                <Cell expandable onClick={props.go} data-to="saima" description="Главный парк города">Парк "За Саймой"</Cell>
                                <Cell expandable onClick={props.go} data-to="kedr" description="Популярный городской парк">Парк "Кедровый Лог"</Cell>
                                <Cell expandable onClick={props.go} data-to="pkey" description="Новый популярный парк">Парк "Новые Ключи"</Cell>
                                <Cell expandable onClick={props.go} data-to="sgeo" description="Сквер в юго-восточной части города">Сквер "Геологов-Первопроходцев"</Cell>
                                <Cell expandable onClick={props.go} data-to="sdet" description="Популярный городской сквер">Сквер "Детства"</Cell>
                                <Cell expandable onClick={props.go} data-to="snarod" description="Популярный городской сквер">Сквер "Дружбы Народов"</Cell>
                                <Cell expandable onClick={props.go} data-to="slav" description="Популярный городской сквер">Сквер "Мемориал Славы"</Cell>
                                <Cell expandable onClick={props.go} data-to="smld" description="Популярный городской сквер">Сквер "Молодёжный"</Cell>
                                <Cell expandable onClick={props.go} data-to="chaes" description="Сквер в честь ликвидаторов аварии">Сквер "Памяти Чернобыльцев"</Cell>
                                <Cell expandable onClick={props.go} data-to="sstar" description="Крупнейший сквер города">Сквер "Старожилов Сургута"</Cell>
                                <Cell expandable onClick={props.go} data-to="scentr" description="Популярный городской сквер">Сквер "Центральный"</Cell>
                                <Cell expandable onClick={props.go} data-to="sener" description="Популярный городской сквер">Сквер "Энергетиков"</Cell>
                                <Cell expandable onClick={props.go} data-to="human" description="Копия зарубежной скульптуры">Скульптура "Гуманоиды"</Cell>
                                <Cell expandable onClick={props.go} data-to="snezh" description="Спортивное ядро города">Стадион "Снежинка"</Cell>
                                <Cell expandable onClick={props.go} data-to="ssur" description="Историко-культурный центр">Старый Сургут</Cell>
                                <Cell expandable onClick={props.go} data-to="polet" description="Скульптура на северном въезде">Стела "Полёт"</Cell>
                                <Cell expandable onClick={props.go} data-to="surgut" description="Скульптура на западном въезде">Стела "Сургут"</Cell>
                                <Cell expandable onClick={props.go} data-to="smdt" description="Популярный городской театр">Сургутский Музыкально-Драматический Театр</Cell>
                                <Cell expandable onClick={props.go} data-to="filarm" description="Главный концертный зал города">Сургутская филармония</Cell>
                                <Cell expandable onClick={props.go} data-to="tsgu" description="Один из главных театров города">Театр СурГУ</Cell>
                                <Cell expandable onClick={props.go} data-to="centr" description="Известная точка города">ТЦ "City Centre"</Cell>
                                <Cell expandable onClick={props.go} data-to="agora" description="Популярный городской ТЦ">ТЦ "Агора"</Cell>
                                <Cell expandable onClick={props.go} data-to="aura" description="Один из крупных городских ТЦ">ТЦ "Аура"</Cell>
                                <Cell expandable onClick={props.go} data-to="vershina" description="Популярный городской ТЦ">ТЦ "Вершина"</Cell>
                                <Cell expandable onClick={props.go} data-to="cmoll" description="Один из крупных городских ТЦ">ТЦ "Сити Молл"</Cell>
                                <Cell expandable onClick={props.go} data-to="trakt" description="Транспортная артерия города">Тюменский Тракт</Cell>
                                <Cell expandable onClick={props.go} data-to="surgu" description="Главный университет города">Университет</Cell>
                                <Cell expandable onClick={props.go} data-to="univ" description="Популярная улица Сургута">Университетская</Cell>
                                <Cell expandable onClick={props.go} data-to="patr" description="Единственный центр патриотической тематики">Центр Патриотического Наследия</Cell>
                                <Cell expandable onClick={props.go} data-to="cplos" description="Новая городская площадь">Центральная городская площадь</Cell>
                                <Cell expandable onClick={props.go} data-to="ckid" description="Популярный концертный зал">ЦКИД "Камертон"</Cell>
                            </List>
                        }
                        <Div>
                            <Div>
                                <Div>
                                    <FixedLayout vertical="bottom">
                                        <Div>
                                            <Button size="xl" mode="primary" onClick={props.places}>Выбрать район</Button>
                                        </Div>
                                    </FixedLayout>
                                </Div>
                            </Div>
                        </Div>
                    </Fragment>
                }
                {props.mode === null &&
                    <Fragment>
                    	<Header mode="secondary" style={{ userSelect: 'none', msUserSelect: 'none', MozUserSelect: 'none', KhtmlUserSelect: 'none', WebkitUserSelect: 'none', WebkitTouchCallout: 'none' }}>Наши Фавориты</Header>
                        <Gallery
                            slideWidth = "92%"
                            style = {{ height: 200 }}
                            align = "center"
                        >
                            <img src="https://sun9-55.userapi.com/yTKHn4Y6ptM-Jz-Y9A0HD-C8gZFMHaZuwS-K7g/KdONUzkzZM4.jpg" style={{ objectFit: 'contain', borderRadius: '20px', margin: '0 3px', width: '90vw', backgroundColor: '#000' }} alt="osnovcrd" onClick={props.go} data-to="osnovcrd" />
                            <img src="https://sun9-44.userapi.com/I-UM88WCVwVhh5QpE8FGmogz6aKLdxmBc4bq0A/mgk6RgOq5c0.jpg" style={{ objectFit: 'contain', borderRadius: '20px', margin: '0 3px', width: '90vw', backgroundColor: '#000' }} alt="ssurcrd" onClick={props.go} data-to="ssurcrd" />
                            <img src="https://sun9-54.userapi.com/BnecEL2jHbz1VyNwTq5eKfqX_oUGImiu-rgMdQ/Z4cL14qo8xQ.jpg" style={{ objectFit: 'contain', borderRadius: '20px', margin: '0 3px', width: '90vw', backgroundColor: '#000' }} alt="kedrcrd" onClick={props.go} data-to="kedrcrd" />
                            <img src="https://sun9-40.userapi.com/CPi8dmJxIXPbYDobKqlhAscmGyTrZ-9E9dgE9g/KLVlFRaqlC4.jpg" style={{ objectFit: 'contain', borderRadius: '20px', margin: '0 3px', width: '90vw', backgroundColor: '#000' }} alt="saimacrd" onClick={props.go} data-to="saimacrd" />
                            <img src="https://sun9-75.userapi.com/g7zQFq8An0RZorOQSd67af_OJRQ6OzGK-2OhvQ/EX39HRhSuf0.jpg" style={{ objectFit: 'contain', borderRadius: '20px', margin: '0 3px', width: '90vw', backgroundColor: '#000' }} alt="univcrd" onClick={props.go} data-to="univcrd" />
                        </Gallery>

                        <Separator wide style={{ paddingBottom: '10px', marginTop: '10px' }} />

                        <Group>
                            <Placeholder
                                icon={<Icon56InfoOutline />}
                                header="Выберите район"
                                action={ <Button size='xl' mode='primary' onClick={props.places}>Выбрать</Button> }
                            >
                                Чтобы показать Вам места, Вы должны выбрать желаемый район
                            </Placeholder>
                        </Group>
                    </Fragment>
                }
            </Panel>
    )
}

export default Places;