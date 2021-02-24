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
import Icon24Recent from '@vkontakte/icons/dist/24/recent';
import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';
import Icon24Link from '@vkontakte/icons/dist/24/link';


const Vershina = props => {
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => window.history.back()}>
                </PanelHeaderBack>}
            >
                ТЦ "Вершина"
            </PanelHeader>
            
            
            <Gallery
                slideWidth = "100%"
                style = {{ height: 225 }}
                align = "center"
                bullets="light"
            >
                <img style={{ objectFit: 'contain' }} src="https://sun9-38.userapi.com/J_zTBa3PLiANcxw2GoTi1ivyUtdTlY_xQ0I1xw/C9sYzX1EMUc.jpg" alt="Vershina"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-58.userapi.com/0d-e7L2uYZf4u-pXplD9im73apVYPq6cLZvoVQ/0LXqXvlkZsM.jpg" alt="Vershina"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-67.userapi.com/KE_pO54gdF7ws69w_-Y7IAq8T_EUa9abWpshNQ/830KxumhPp4.jpg" alt="Vershina"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-7.userapi.com/2Vmq8KqRTwDNdujTzj9E0pckZ0O7_c9K_xUsXQ/TF8YVH5zYKw.jpg" alt="Vershina"/>
            </Gallery>
            
            <Separator wide style={{ paddingBottom: '10px' }} />

            <Group style={{ padding: '0 5vw' }}>
                Узнаваемый ТЦ города.
                <br /><br />
                Расположен в северо-восточной части города, содержит в себе множество магазинов и кафе. Примечателен футуристичный дизайн ТЦ, который приковывает к себе внимание.
            </Group>

            <Group separator='hide' style={{ paddingBottom: '12px' }}>
                <Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>Генерала Иванова, 1</Cell>
                <Cell size='l' before={<Icon24Recent />}>Магазины: 10:00 - 22:00<br />Кинотеатр "Вершина": 10:00 - 02:00</Cell>
                <Cell size='l' before={<Icon28InfoOutline width={24} height={24} />}>Есть подземный паркинг<br />Есть велопарковка<br />39 магазинов</Cell>
                <Cell size='l' before={<Icon24Link />} href="https://vershina1.ru" target="_blank">vershina1.ru</Cell>
            </Group>

            <Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                <YMaps>
                    <Map defaultState={{ center: [61.256666, 73.431499], zoom: 17 }} width='90vw' height='60vh'>
                        <Placemark defaultGeometry={[61.256666, 73.431499]} defaultOptions={{preset: 'islands#blueShoppingCircleIcon', iconColor: '#000'}} />
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

export default Vershina;