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

const Trakt = props => {
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => window.history.back()}>
                </PanelHeaderBack>}
            >
                Тюменский Тракт
            </PanelHeader>
            
            
            <Gallery
                slideWidth = "100%"
                style = {{ height: 225 }}
                align = "center"
                bullets="light"
            >
                <img style={{ objectFit: 'contain' }} src="https://sun9-35.userapi.com/4gsE8SntFpkK4aOFbzhKYuCXxHezry9q9tJ5Ug/BXfNkDMFPtk.jpg" alt="Trakt"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-75.userapi.com/m1sc1UiWzMaburJ38A_D9kDIyPcGu6OZuSX23A/p5xqQ-W5oOI.jpg" alt="Trakt"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-65.userapi.com/UNBrEVKrzBkBZEODDfQlGSKq_VHVU0S2TRbHbw/kbgjD6dT2a4.jpg" alt="Trakt"/>
            </Gallery>
            
            <Separator wide style={{ paddingBottom: '10px' }} />

            <Group style={{ padding: '0 5vw' }}>
                Транспортная артерия Сургута.
                <br /><br />
                Связывает машины с Сургутским районом, а пешеходов с ЖД районом.
                <br />
                С моста открывается прекрасная панорама на район Киртбая.
            </Group>

            <Group separator='hide' style={{ paddingBottom: '12px' }}>
                <Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>Тюменский Тракт</Cell>
            </Group>

            <Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                <YMaps>
                    <Map defaultState={{ center: [61.275624, 73.350891], zoom: 17 }} width='90vw' height='60vh'>
                        <Placemark defaultGeometry={[61.275624, 73.350891]} defaultOptions={{preset: 'islands#blueObservationCircleIcon', iconColor: '#000'}} />
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

export default Trakt;