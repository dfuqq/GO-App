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

const Pavia = props => {
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => window.history.back()}>
                </PanelHeaderBack>}
            >
                "Авиаторам Сибири"
            </PanelHeader>
            
            <Gallery
                slideWidth = "100%"
                style = {{ height: 225 }}
                align = "center"
                bullets="light"
            >
                <img style={{ objectFit: 'contain' }} src="https://sun9-13.userapi.com/_WS2Fn2VWkMf9VtqpTY3wc39sEH-2Mu1Twcwow/2DkZRtN0W3E.jpg" alt="Pavia"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-51.userapi.com/Bc9ffgke1jSsBC49cjstXCFEvqV4VH-mW4RkQA/rFhXBOaAM0M.jpg" alt="Pavia"/>
            </Gallery>
            
            <Separator wide style={{ paddingBottom: '10px' }} />

            <Group style={{ padding: '0 5vw' }}>
                Монумент в честь 40-летия Сургутского авиаотряда.
                <br /><br />
                Установлен в 2004 году. Ми-6, что установлен на постаменте, на момент установки налетал 25 лет.
                <br />
                Памятник установлен авиаторам Сургута, благодаря работе которых регион смог быстро развиться и освоить свои богатства.
            </Group>

            <Group separator='hide' style={{ paddingBottom: '12px' }}>
                <Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>Около Аэропорта</Cell>
            </Group>

            <Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                <YMaps>
                    <Map defaultState={{ center: [61.336312, 73.410901], zoom: 17 }} width='90vw' height='60vh'>
                        <Placemark defaultGeometry={[61.336312, 73.410901]} defaultOptions={{preset: 'islands#blueObservationCircleIcon', iconColor: '#000'}} />
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

export default Pavia;