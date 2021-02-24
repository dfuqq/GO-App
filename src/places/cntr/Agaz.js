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

const Agaz = props => {
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => window.history.back()}>
                </PanelHeaderBack>}
            >
                Аллея "Газовиков"
            </PanelHeader>
            
            <Gallery
                slideWidth = "100%"
                style = {{ height: 225 }}
                align = "center"
                bullets="light"
            >
                <img style={{ objectFit: 'contain' }} src="https://sun9-74.userapi.com/QgRnQ23fOFfTe9QkRGRNAwTIUtwJ2qJmA4psFA/YMf4o9ePTRA.jpg" alt="Agaz"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-37.userapi.com/1f1zk9Sb1Kq-TTxXcTyUWjsFrfYbshNMj1QwIw/rXZYoVQrTzc.jpg" alt="Agaz"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-73.userapi.com/MLwwiEyai4xek8K4lcBNZNNQxDizIb1eqM_zbQ/kGAepVoKhWE.jpg" alt="Agaz"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-21.userapi.com/LvH31B4You6Qvg71eHKRbaDbAVHuTD7DqTD1hw/j87z6p_WmEQ.jpg" alt="Agaz"/>
            </Gallery>
            
            <Separator wide style={{ paddingBottom: '10px' }} />

            <Group style={{ padding: '0 5vw' }}>
                Аллея за зданием "Газпром Трансгаз".
                <br /><br />
                В 2014 году была благоустроена скульптурной композицией "Легенды Севера", автором которой стал Валерий Чалый. Композиция включает в себя семью хантов, оленей и медведей — традиционных символов Югры.
            </Group>

            <Group separator='hide' style={{ paddingBottom: '12px' }}>
                <Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>Университетская, 1</Cell>
            </Group>

            <Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                <YMaps>
                    <Map defaultState={{ center: [61.244438, 73.403295], zoom: 17 }} width='90vw' height='60vh'>
                        <Placemark defaultGeometry={[61.244438, 73.403295]} defaultOptions={{preset: 'islands#blueVegetationCircleIcon', iconColor: '#000'}} />
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

export default Agaz;