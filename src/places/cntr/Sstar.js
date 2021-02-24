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

const Sstar = props => {
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => window.history.back()}>
                </PanelHeaderBack>}
            >
                Сквер "Старожилов"
            </PanelHeader>
            
            <Gallery
                slideWidth = "100%"
                style = {{ height: 225 }}
                align = "center"
                bullets="light"
            >
                <img style={{ objectFit: 'contain' }} src="https://sun9-57.userapi.com/B42RyA56GcU5lseESy7gmn5s830SkbFcYzNChg/WROjire25k0.jpg" alt="Sstar"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-9.userapi.com/BwJziS5efMH_RINOfjvyE9qJmul0UxUbYSuidQ/fgslDzGh4Ek.jpg" alt="Sstar"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-59.userapi.com/nb_WKjEnlCP9d_TSB7ATeK73N_kFHeu0aU8xCA/cFtSFCbHReU.jpg" alt="Sstar"/>
            </Gallery>
            
            <Separator wide style={{ paddingBottom: '10px' }} />

            <Group style={{ padding: '0 5vw' }}>
                Один из самых больших скверов города.
                <br /><br />
                Расположен около СОКБ, на территории бывшего старого кладбища.
                <br />
                Площадь сквера более 5 га, а на территории расположены живописные тропинки и дорожки, а также скамейки для отдыха и оригинальные светильники.
            </Group>

            <Group separator='hide' style={{ paddingBottom: '12px' }}>
                <Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>Энергетиков, около Больничного компл.</Cell>
            </Group>

            <Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                <YMaps>
                    <Map defaultState={{ center: [61.246669, 73.395701], zoom: 16.8 }} width='90vw' height='60vh'>
                        <Placemark defaultGeometry={[61.246669, 73.395701]} defaultOptions={{preset: 'islands#blueVegetationCircleIcon', iconColor: '#000'}} />
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

export default Sstar;