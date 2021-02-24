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
import Icon24Link from '@vkontakte/icons/dist/24/link'

const Zags = props => {
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => window.history.back()}>
                </PanelHeaderBack>}
            >
                Дворец Торжеств
            </PanelHeader>
            
     
            <Gallery
                slideWidth = "100%"
                style = {{ height: 200 }}
                align = "center"
                bullets="light"
            >
                <img style={{ objectFit: 'contain' }} src="https://sun9-6.userapi.com/2aJb-ADbm4l87vu_LxqJZaOwuTtyIBtZWY2hyw/ktmQkG_d214.jpg" alt="Zags"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-36.userapi.com/mZSk5c-fStYXESOoYeoGiCSyLO7pZzcNzzuRZA/ajlANsX-b6o.jpg" alt="Zags"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-42.userapi.com/VsFR-glNAqFGPIAsfTb7aWxm4RGvo5nUfgYqKQ/0pDr1Beaprw.jpg" alt="Zags"/>
            </Gallery>

            <Separator wide style={{ paddingBottom: '10px' }} />

            <Group style={{ padding: '0 5vw' }}>
                Главное здание бракосочетаний Сургута.
                <br /><br />
                Во дворце регулярно проводятся свадебные церемонии, а также мероприятия по укреплению семей. Дизайн принадлежит Сургусткой паре архитекторов Светлане и Кириллу Лиер.
            </Group>

            <Group separator='hide' style={{ paddingBottom: '12px' }}>
                <Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>Бульвар Свободы, 5</Cell>
                <Cell size='l' before={<Icon24Link />} href="https://dvorec-torzhestv.ru" target="_blank">dvorec-torzhestv.ru</Cell>
            </Group>

            <Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                <YMaps>
                    <Map defaultState={{ center: [61.247905, 73.400092], zoom: 17 }} width='90vw' height='60vh'>
                        <Placemark defaultGeometry={[61.247905, 73.400092]} defaultOptions={{preset: 'islands#blueObservationCircleIcon', iconColor: '#000'}} />
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

export default Zags;