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
import Icon24LogoInstagram from '@vkontakte/icons/dist/24/logo_instagram';

const Bibl = props => {
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => window.history.back()}>
                </PanelHeaderBack>}
            >
                Центральная Библиотека
            </PanelHeader>
            
            <Gallery
                slideWidth = "100%"
                style = {{ height: 225 }}
                align = "center"
                bullets="light"
            >
                <img style={{ objectFit: 'contain' }} src="https://sun9-37.userapi.com/tLg0U1U3hWZL7U4Icx2I_vJtwGcNaPnLMC8YQA/gpPOwXwiij8.jpg" alt="Bibl"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-25.userapi.com/1spBBuxr0DdnZ9SeHNvYyNUp3dWehACgll46bA/waJ9TjQUIB4.jpg" alt="Bibl"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-14.userapi.com/pMKiXAnrc9y1wWVmDKxTP-oARaMYAhkfXdU0ag/02EXIDTIOdI.jpg" alt="Bibl"/>
            </Gallery>

            <Separator wide style={{ paddingBottom: '10px' }} />

            <Group style={{ padding: '0 5vw' }}>
                Главное здание Сургутской библиотеки.
                <br /><br />
                В 2002 году библиотеке было присвоено имя А.С. Пушкина. На базе библиотеки действует Региональный Центр Всероссийского музея Пушкина в Санкт-Петербурге.
                <br />
                Фонд библиотеки насчитывает более 200 тысяч единиц хранения, из которых есть и особо ценные издания, такие как "Пушкиниана", "Есениана" и другие.
            </Group>

            <Group separator='hide' style={{ paddingBottom: '12px' }}>
                <Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />} description="11:00 - 19:00 (Пт - выходной)">Республики, 78/1</Cell>
                <Cell size='l' before={<Icon24LogoInstagram />} href="https://instagram.com/libsurgut_86" target="_blank">@libsurgut_86</Cell>
            </Group>

            <Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                <YMaps>
                    <Map defaultState={{ center: [61.244252, 73.387262], zoom: 17 }} width='90vw' height='60vh'>
                        <Placemark defaultGeometry={[61.244252, 73.387262]} defaultOptions={{preset: 'islands#blueEducationCircleIcon', iconColor: '#000'}} />
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

export default Bibl;