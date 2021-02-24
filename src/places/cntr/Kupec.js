import React, { Fragment } from 'react';
import { YMaps, Map, Placemark, Circle } from 'react-yandex-maps';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Gallery from '@vkontakte/vkui/dist/components/Gallery/Gallery';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';

import Icon28PlaceOutline from '@vkontakte/icons/dist/28/place_outline';
import Icon28MoneyCircleOutline from '@vkontakte/icons/dist/28/money_circle_outline';
import Icon24Link from '@vkontakte/icons/dist/24/link';

const Kupec = props => {
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => window.history.back()}>
                </PanelHeaderBack>}
            >
                Дом Купца Клепикова
            </PanelHeader>
            
            
            <Gallery
                slideWidth = "100%"
                style = {{ height: 225 }}
                align = "center"
                bullets="light"
            >
                <img style={{ objectFit: 'contain' }} src="https://sun9-23.userapi.com/rkK6JMSAwUZEnAJNRhJD5k0EZjCSjKHR0mXpoA/t2kxGD4qsxU.jpg" alt="Kupec"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-17.userapi.com/KPf-ZhTpPo1RvlUJjUEzGsllQYh2LPX-NPuXGg/wr1ufnjPAvY.jpg" alt="Kupec"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-27.userapi.com/earB1RBQr3H6neLJRlyS0dOK0WD6nwu6QcrBzQ/a8IJjEOKO7w.jpg" alt="Kupec"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-28.userapi.com/dYGe2ifY0jxAj7RE1WMPiRlWe3IfyOhepjsQMA/xl8qdXmA4VY.jpg" alt="Kupec"/>
            </Gallery>
            
            <Separator wide style={{ paddingBottom: '10px' }} />

            <Group style={{ padding: '0 5vw' }}>
                Объект культурного наследия регионального значения.
                <br /><br />
                Дом Купца Клепикова является единстенным в Сургуте памятником архитектуры XIX века и представляет из себя образец сибирского деревянного зодчества.
                <br />
                В доме представлены различные предметы купеческого быта прошлой эпохи, а также материалы из истории города.
            </Group>

            <Group separator='hide' style={{ paddingBottom: '12px' }}>
                <Cell size='l' multiline before={<Icon28PlaceOutline width={24} height={24} />} description="10:00 - 17:00 (Сб, Вс - до 17:30; Чт: 12:00 - 19:00; Пн, Вт - выходной)">Просвещения, 7</Cell>
                <Cell size='l' before={<Icon28MoneyCircleOutline width={24} height={24} />}>Для детей от 4 до 6 лет – 30 руб.<br />Для детей от 7 до 18 лет – 50 руб.<br />Взрослый – 100 руб.</Cell>
                <Cell size='l' before={<Icon24Link />} href="https://skmuseum.ru/klepikov" target="_blank">skmuseum.ru</Cell>
            </Group>

            <Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                <YMaps>
                    <Map defaultState={{ center: [61.234935, 73.403276], zoom: 17 }} width='90vw' height='60vh'>
                        <Placemark defaultGeometry={[61.234935, 73.403276]} defaultOptions={{preset: 'islands#blueLeisureCircleIcon', iconColor: '#000'}} />
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

export default Kupec;