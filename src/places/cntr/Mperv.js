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

const Mperv = props => {
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => window.history.back()}>
                </PanelHeaderBack>}
            >
                "Первым Строителям"
            </PanelHeader>
            
            
            <Gallery
                slideWidth = "100%"
                style = {{ height: 225 }}
                align = "center"
                bullets="light"
            >
                <img style={{ objectFit: 'contain' }} src="https://sun9-57.userapi.com/qvqT3l6FnZGeuIy6_kuuFlsCcQOiwZNWeAgeJA/tuC96nOgDPs.jpg" alt="Mperv"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-63.userapi.com/VH8tnk5O9ognqXrewGXRBTBvw2ruTJldqft5bA/qHv2t8lifAM.jpg" alt="Mperv"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-39.userapi.com/mmQq-IzJuRYZ1Ky9nooOSxt808jNTiOj3fdsew/qqd4xkV9pOg.jpg" alt="Mperv"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-26.userapi.com/5RQaBSnWb1KXSVpOVI4tnKXVb1MDLTF5-knO7A/Eswbzx5pRkU.jpg" alt="Mperv"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-53.userapi.com/oX_QYetADd9BRR_TgDd146kEa3xU9u6fCafaIQ/wnX0VfhtqSY.jpg" alt="Mperv"/>
            </Gallery>
            
            <Separator wide style={{ paddingBottom: '10px' }} />

            <Group style={{ padding: '0 5vw' }}>
                Монумент первопроходцам Севера.
                <br /><br />
                Установлен в 1975 году. В 2012 году начались работы по восстановлению, в результате которых монумент с историей предстал для горожан в свежем виде.
                <br />
                Примечательна редкая техника, по которой выполнен монумент — глазурированная обожжённая глина.
            </Group>

            <Group separator='hide' style={{ paddingBottom: '12px' }}>
                <Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>Бульвар Свободы, 1</Cell>
            </Group>

            <Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                <YMaps>
                    <Map defaultState={{ center: [61.248385, 73.402225], zoom: 17 }} width='90vw' height='60vh'>
                        <Placemark defaultGeometry={[61.248385, 73.402225]} defaultOptions={{preset: 'islands#blueObservationCircleIcon', iconColor: '#000'}} />
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

export default Mperv;