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

const Slav = props => {
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => window.history.back()}>
                </PanelHeaderBack>}
            >
                Мемориал Славы
            </PanelHeader>
            
            <Gallery
                slideWidth = "100%"
                style = {{ height: 225 }}
                align = "center"
                bullets="light"
            >
                <img style={{ objectFit: 'contain' }} src="https://sun9-51.userapi.com/JiAOxOCvsE0zc5h8_-9iCWFYdwfewnk7JlL6_g/06GV_j2AugI.jpg" alt="Slav"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-72.userapi.com/6N7V6PwFXkct6eZS8hKRNgrbqbC-LDmmP0Nmew/luULt5ntK6w.jpg" alt="Slav"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-73.userapi.com/mMNhq6DVSB9pitKeu_aV-hO3AYAMkP4LfRhdPg/6fb2FTD-qz4.jpg" alt="Slav"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-45.userapi.com/T2aCB2Cdoohpb6K-FnlTPGdGPfFjFtvbgqeUOA/kLXaMUwwBfs.jpg" alt="Slav"/>
            </Gallery>
            
            <Separator wide style={{ paddingBottom: '10px' }} />

            <Group style={{ padding: '0 5vw' }}>
                Знаковое место для города.
                <br /><br />
                Сквер богат историей. Так, изначально это была "Троицкая площадь", которая с приходом большевиков переименовалась в площадь "Красных партизан", а после войны приобревшая своё настоящее имя. 
                <br />
                На территории сквера находятся сразу 6 памятников культуры: памятники "Борцам за Советскую власть", "Сургутянам, павшим на фронтах ВОВ", бюст Ленина, вечный огонь, каменная часовня в честь бывшей Троцкой церкви и танк Т-55.
            </Group>

            <Group separator='hide' style={{ paddingBottom: '12px' }}>
                <Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>Гагарина, 30</Cell>
            </Group>

            <Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                <YMaps>
                    <Map defaultState={{ center: [61.237821, 73.395082], zoom: 17 }} width='90vw' height='60vh'>
                        <Placemark defaultGeometry={[61.237821, 73.395082]} defaultOptions={{preset: 'islands#blueObservationCircleIcon', iconColor: '#000'}} />
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

export default Slav;