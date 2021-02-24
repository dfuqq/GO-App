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

const Pmed = props => {
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => window.history.back()}>
                </PanelHeaderBack>}
            >
                Памятник "Медсестре"
            </PanelHeader>
            
            <Gallery
                slideWidth = "100%"
                style = {{ height: 225 }}
                align = "center"
                bullets="light"
            >
                <img style={{ objectFit: 'contain' }} src="https://sun9-57.userapi.com/MOV6tpUykPIXYm236rMvW2_sJlcuBGCG4qv_dA/3zve2_ejO9c.jpg" alt="Pmed"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-31.userapi.com/s280qfnpxa2T-zausqfp14HPwZijnneH_alRbw/E_fceV3AfXA.jpg" alt="Pmed"/>
            </Gallery>
            
            <Separator wide style={{ paddingBottom: '10px' }} />

            <Group style={{ padding: '0 5vw' }}>
                Монумент в честь медицинских работников.
                <br /><br />
                Памятник установлен в 2007 году. Инициатива по возведению принадлежит главному врачу Сергею Тарасенко, а установлен монумент был на средства предприятий и медицинских работников. Отлит в Екатеринбурге из 600 кг бронзы.
                <br />
                Олицетворяет собой медицинскую сестру, что запечатлена "в движении", готовая всегда прийти на помощь больному.
            </Group>

            <Group separator='hide' style={{ paddingBottom: '12px' }}>
                <Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>Нефтеюганское ш., 20</Cell>
            </Group>

            <Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                <YMaps>
                    <Map defaultState={{ center: [61.268559, 73.404585], zoom: 17 }} width='90vw' height='60vh'>
                        <Placemark defaultGeometry={[61.268559, 73.404585]} defaultOptions={{preset: 'islands#blueObservationCircleIcon', iconColor: '#000'}} />
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

export default Pmed;