import React, { Fragment } from 'react';
import { YMaps, Map, Placemark, Circle } from 'react-yandex-maps';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Gallery from '@vkontakte/vkui/dist/components/Gallery/Gallery';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';

import Icon24Link from '@vkontakte/icons/dist/24/link';
import Icon28PlaceOutline from '@vkontakte/icons/dist/28/place_outline';
import Icon28MoneyCircleOutline from '@vkontakte/icons/dist/28/money_circle_outline'

const Salm = props => {
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => window.history.back()}>
                </PanelHeaderBack>}
            >
                Музей Ф.К. Салманова
            </PanelHeader>
            
            
            <Gallery
                slideWidth = "100%"
                style = {{ height: 225 }}
                align = "center"
                bullets="light"
            >
                <img style={{ objectFit: 'contain' }} src="https://sun9-72.userapi.com/EgFpakwsl1ZrdLw6xFF_1kBEQ5XZhvJwA2yLXw/tSZEUgY2LqU.jpg" alt="Salm"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-48.userapi.com/KQw-UiKJwhDL7dr5ztv02GJmqo1xXtX17vhaRg/yyeoYcBb0eU.jpg" alt="Salm"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-23.userapi.com/GRSEEVrFjsBf9xhEzdGPVQXO4HsWeJrY8iLesw/pB9wzJYlvAM.jpg" alt="Salm"/>
            </Gallery>
            
            <Separator wide style={{ paddingBottom: '10px' }} />

            <Group style={{ padding: '0 5vw' }}>
                Дом первооткрывателя сибирской нефти Фармана Курбановича Салманова.
                <br /><br />
                Открыт в сентябре 2007 года в честь 50-летия высадки первых геологоразведчиков в Сургут.
                <br />
                На территории мемориального комплекса расположен дом с личными вещами Салманова, а снаружи находится техника для нефтеразработки и образцы проб горных пород и нефти.
            </Group>

            <Group separator='hide' style={{ paddingBottom: '12px' }}>
                <Cell size='l' multiline before={<Icon28PlaceOutline width={24} height={24} />} description="10:00 - 17:00 (Сб, Вс - до 17:30; Чт: 12:00 - 19:00; Пн, Вт - выходной)">Терешковой, 49</Cell>
                <Cell size='l' before={<Icon28MoneyCircleOutline width={24} height={24} />}>Для детей от 4 до 6 лет – 30 руб.<br />Для детей от 7 до 18 лет – 50 руб.<br />Взрослый – 100 руб.</Cell>
                <Cell size='l' before={<Icon24Link />} href="https://skmuseum.ru/salmanov" target="_blank">skmuseum.ru</Cell>
            </Group>

            <Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                <YMaps>
                    <Map defaultState={{ center: [61.240783, 73.475595], zoom: 17 }} width='90vw' height='60vh'>
                        <Placemark defaultGeometry={[61.240783, 73.475595]} defaultOptions={{preset: 'islands#blueLeisureCircleIcon', iconColor: '#000'}} />
                        {props.geo[0] !== undefined &&
						<Fragment>
							<Circle defaultGeometry={[[props.geo[1], props.geo[0]], 200]} options={{draggable: false, fillColor: 'rgba(0, 0, 0, 0.5)', strokeColor: '#000', strokeOpacity: 0.8, strokeWidth: 2 }} /> 
						</Fragment>
					    }
                    </Map>
                </YMaps>
		    </Group>

        </Panel>
    )
}

export default Salm;