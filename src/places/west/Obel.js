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

const Obel = props => {
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => window.history.back()}>
                </PanelHeaderBack>}
            >
                "Ушедшим на фронт"
            </PanelHeader>
            
            <Gallery
                slideWidth = "100%"
                style = {{ height: 225 }}
                align = "center"
                bullets="light"
            >
                <img style={{ objectFit: 'contain' }} src="https://sun9-30.userapi.com/AZCAb69-OWiarDcXDIQdM-9kGJ09w5Ob5jeDTQ/GTx8_xqytxw.jpg" alt="Obel"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-53.userapi.com/WP2TF05AtTcEnmrT7tD7ym_tOqcp0xXkhQfDwQ/BngV5cRZvdk.jpg" alt="Obel"/>
            </Gallery>

            <Separator wide style={{ paddingBottom: '10px' }} />

            <Group style={{ padding: '0 5vw' }}>
                Памятный обелиск воинам ВОВ.
                <br /><br />
                Установлен в 1945 году в деревянном исполнении на территории речном вокзале, откуда воины отправлялись на фронт. В последущие годы памятник был утрачен, а в 1995 году восстановлен в каменном исполнении.
                <br />
                Сейчас это стела из белого мрамора весом 8 тонн, на которой размещена гранитная плита с высеченными словами в память о невернувшихся.
            </Group>

            <Group separator='hide' style={{ paddingBottom: '12px' }}>
                <Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>Набережная Речпорта</Cell>
            </Group>

            <Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                <YMaps>
                    <Map defaultState={{ center: [61.231264, 73.476560], zoom: 17 }} width='90vw' height='60vh'>
                        <Placemark defaultGeometry={[61.231264, 73.476560]} defaultOptions={{preset: 'islands#blueObservationCircleIcon', iconColor: '#000'}} />
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

export default Obel;