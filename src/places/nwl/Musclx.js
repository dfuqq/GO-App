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

const Musclx = props => {
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => window.history.back()}>
                </PanelHeaderBack>}
            >
                Музейный Центр
            </PanelHeader>
            
            
            <Gallery
                slideWidth = "100%"
                style = {{ height: 225 }}
                align = "center"
                bullets="light"
            >
                <img style={{ objectFit: 'contain' }} src="https://sun9-32.userapi.com/GTM-WsYj3Y5aR9O5Nx_G5So3xTxT66XHAxKzbw/CEV0WPXnhI4.jpg" alt="Musclx"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-60.userapi.com/ZT7BeTJE-yYtEj0gzYUD28BxTVxMocDhGHnHkA/jBUSv0dbbWc.jpg" alt="Musclx"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-61.userapi.com/AABA8R8BGlPiu_9JUbHfEQudOMiWKg3-yQJxpQ/FKcUAs6EnUE.jpg" alt="Musclx"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-25.userapi.com/-20lQTsa5TKbaXMQ1enc62OHOmo2nfiy3d3noA/YBSKUMkKCP0.jpg" alt="Musclx"/>
            </Gallery>

            <Separator wide style={{ paddingBottom: '10px' }} />

            <Group style={{ padding: '0 5vw' }}>
                Главное здание Сургутского краеведческого музея.
                <br /><br />
                В здании разместились Сургутский краеведческий и художественный музеи. Каждый готов показать посетителю богатую историю города и округа, а современные системы, такие как "Виртуальный музей" и "Интерактивная карта", помогут увидеть все экспонаты музея без затруднений.
            </Group>

            <Group separator='hide' style={{ paddingBottom: '12px' }}>
                <Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />} description="10:00 - 17:00 (Сб, Вс - до 17:30; Чт: 12:00 - 19:00; Пн, Вт - выходной)">30 Лет Победы, 21/2</Cell>
                <Cell size='l' before={<Icon28MoneyCircleOutline width={24} height={24} />}>Для детей от 4 до 6 лет – 30 руб.<br />Для детей от 7 до 18 лет – 50 руб.<br />Взрослый – 100 руб.</Cell>
                <Cell size='l' before={<Icon24Link />} href="https://skmuseum.ru/museum-center" target="_blank">skmuseum.ru</Cell>
            </Group>

            <Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                <YMaps>
                    <Map defaultState={{ center: [61.253837, 73.423099], zoom: 17 }} width='90vw' height='60vh'>
                        <Placemark defaultGeometry={[61.253837, 73.423099]} defaultOptions={{preset: 'islands#blueLeisureCircleIcon', iconColor: '#000'}} />
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

export default Musclx;