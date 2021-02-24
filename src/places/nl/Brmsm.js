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

const Brmsm = props => {
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => window.history.back()}>
                </PanelHeaderBack>}
            >
                Музей Сургутского Моста
            </PanelHeader>
            
            
            <Gallery
                slideWidth = "100%"
                style = {{ height: 225 }}
                align = "center"
                bullets="light"
            >
                <img style={{ objectFit: 'contain' }} src="https://sun9-36.userapi.com/zTmSJa_B1WKnsrIPPqpzoRFWchYB2iK_HLWr1g/jAUrn4iZr0s.jpg" alt="Brmsm"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-47.userapi.com/QHOHytMJoRVO_mHie1wQfHcLZ89TquIw6zKd1w/q0zfsPJ1tbI.jpg" alt="Brmsm"/>
            </Gallery>

            <Separator wide style={{ paddingBottom: '10px' }} />
            

            <Group style={{ padding: '0 5vw' }}>
                Музей, показывающий историю создания Югорского моста.
                <br /><br />
                В коллекцию помимо самих материалов и технических решений, использованных при создании моста, входят также находки при возведении, а также техника, использованная в работе.
            </Group>

            <Group separator='hide' style={{ paddingBottom: '12px' }}>
                <Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />} description="Пн-Пт: 09:00 - 16:00">За п. Барсово, в сторону Нефтеюганска, под мостом</Cell>
                <Cell size='l' before={<Icon28MoneyCircleOutline width={24} height={24} />}>До 16 лет — 50 руб.<br />Взрослый — 70 руб.</Cell>
                <Cell size='l' before={<Icon24Link />} href="https://ugra-most.ru/about.htm">ugra-most.ru</Cell>
            </Group>

            <Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                <YMaps>
                    <Map defaultState={{ center: [61.215399, 73.158526], zoom: 17 }} width='90vw' height='60vh'>
                        <Placemark defaultGeometry={[61.215399, 73.158526]} defaultOptions={{preset: 'islands#blueLeisureCircleIcon', iconColor: '#000'}} />
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

export default Brmsm;