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

const Snarod = props => {
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => window.history.back()}>
                </PanelHeaderBack>}
            >
                "Дружбы Народов"
            </PanelHeader>
            
            <Gallery
                slideWidth = "100%"
                style = {{ height: 225 }}
                align = "center"
                bullets="light"
            >
                <img style={{ objectFit: 'contain' }} src="https://sun9-37.userapi.com/lBN-cHe4yvGmdREwXTizN72COJqA2qQjTYNisQ/X2ZqzNptnCA.jpg" alt="Snarod"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-20.userapi.com/5qWjODgCxQpbAzc20Pr9Qa0ihy7CDbEmqTTy1g/voNEAr9nIpE.jpg" alt="Snarod"/>
            </Gallery>
            
            <Separator wide style={{ paddingBottom: '10px' }} />

            <Group style={{ padding: '0 5vw' }}>
                Совместный труд советских и болгарских строителей.
                <br /><br />
                Сквер площадью чуть больше 2 гектар был открыт в 1987 году. В 2003 году выполнены работы по благоустройству.
                <br />
                На территории сквера установлен памятник болгарскому руководителю коммунистической партии Георгию Димитрову, который на данный момент находится в плохом состоянии.
            </Group>

            <Group separator='hide' style={{ paddingBottom: '12px' }}>
                <Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>Дзержинского, 15</Cell>
            </Group>

            <Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                <YMaps>
                    <Map defaultState={{ center: [61.249036, 73.380008], zoom: 16.8 }} width='90vw' height='60vh'>
                        <Placemark defaultGeometry={[61.249036, 73.380008]} defaultOptions={{preset: 'islands#blueVegetationCircleIcon', iconColor: '#000'}} />
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

export default Snarod;