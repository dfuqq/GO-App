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

const Nerozh = props => {
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => window.history.back()}>
                </PanelHeaderBack>}
            >
                "Нерождённым Детям"
            </PanelHeader>
            
            
            <Gallery
                slideWidth = "100%"
                style = {{ height: 225 }}
                align = "center"
                bullets="light"
            >
                <img style={{ objectFit: 'contain' }} src="https://sun9-34.userapi.com/89glgis5W2wssM2-XZVh-_6jpzIPCGrSH8P7Kg/YQN-6z-yVXc.jpg" alt="Nerozh"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-20.userapi.com/MiQlQ23p7XchOBe8zRRk1x8kV-VhE2tgVBmIjQ/fVIMWlmppE0.jpg" alt="Nerozh"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-58.userapi.com/w-U0FlwsH55l0sQD0m0IiH-om7ZfZWOozaMV9Q/5FvZl-dPljs.jpg" alt="Nerozh"/>
            </Gallery>
            
            <Separator wide style={{ paddingBottom: '10px' }} />

            <Group style={{ padding: '0 5vw' }}>
                Копия Словакской скульптуры Мартина Худачека.
                <br /><br />
                Установлен в 2013 году на территории храма в честь великомученника Георгия Победоносца, при центре помощи семье и детям.
                <br />
                Интересны материалы: бедная мать, выполненная из гранита, олицетворяет собой физическое тело, в то время, как дочь из прозрачной смолы — душа ребёнка.
            </Group>

            <Group separator='hide' style={{ paddingBottom: '12px' }}>
                <Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>Университетская, 12</Cell>
            </Group>

            <Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                <YMaps>
                    <Map defaultState={{ center: [61.247696, 73.427176], zoom: 17 }} width='90vw' height='60vh'>
                        <Placemark defaultGeometry={[61.247696, 73.427176]} defaultOptions={{preset: 'islands#blueObservationCircleIcon', iconColor: '#000'}} />
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

export default Nerozh;