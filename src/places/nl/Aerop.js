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
import Icon24Link from '@vkontakte/icons/dist/24/link';
import Icon24LogoVk from '@vkontakte/icons/dist/24/logo_vk';

const Aerop = props => {
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => window.history.back()}>
                </PanelHeaderBack>}
            >
                Аэропорт
            </PanelHeader>
            
            <Gallery
                slideWidth = "100%"
                style = {{ height: 225 }}
                align = "center"
                bullets="light"
            >
                <img style={{ objectFit: 'contain' }} src="https://sun9-5.userapi.com/Ae3dpwBBNwIOMiluZAEDFCSYv1s30O4o_uPizw/qB_vxBzsl_Y.jpg" alt="Aerop"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-46.userapi.com/BOLPERk5Rkq_BdNeSuQ7do5GhrADWE7J7Fn3ag/nBPlT6h38-w.jpg" alt="Aerop"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-61.userapi.com/FW3nzOTylTNQee5bQycnsuQJPilBdHSa4tleVw/uQF_KQ4S44A.jpg" alt="Aerop"/>
            </Gallery>

            <Separator wide style={{ paddingBottom: '10px' }}/>

            <Group style={{ padding: '0 5vw' }}>
                Место долгих встреч и недолгих расставаний.
                <br /><br />
                Работу начал в 1931 году, когда в Сургут прилетел первый самолёт. В 2001 году получил статус международного, что позволило организовать вылеты за границу прямо из Сургута.
                <br />
                На фасаде здания есть уникальная мозаика "Сургутская Мадонна", установленная в 1981 году, которой присвоен статус объекта культурного наследия. 
            </Group>

            <Group separator='hide' style={{ paddingBottom: '12px' }}>
                <Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>Аэрофлотская, 50</Cell>
                <Cell size='l' before={<Icon24Link />} href="https://airport-surgut.ru" target="_blank">airport-surgut.ru</Cell>
                <Cell size='l' before={<Icon24LogoVk />} href="https://vk.com/surgutairport" target="_blank">Группа VK</Cell>
            </Group>

            <Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                <YMaps>
                    <Map defaultState={{ center: [61.340298, 73.408124], zoom: 17 }} width='90vw' height='60vh'>
                        <Placemark defaultGeometry={[61.340298, 73.408124]} defaultOptions={{preset: 'islands#blueAirportCircleIcon', iconColor: '#000'}} />
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

export default Aerop;