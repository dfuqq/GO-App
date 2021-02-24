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
import Icon24LogoVk from '@vkontakte/icons/dist/24/logo_vk';
import Icon24Link from '@vkontakte/icons/dist/24/link';

const Stroit = props => {
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => window.history.back()}>
                </PanelHeaderBack>}
            >
                Культурный Центр
            </PanelHeader>
            
            <Gallery
                slideWidth = "100%"
                style = {{ height: 225 }}
                align = "center"
                bullets="dark"
            >
                <img style={{ objectFit: 'contain' }} src="https://sun9-72.userapi.com/-XVefPkREjR_TqNURojczmypfjjjm1muRYXezw/6QW-zhCt2gM.jpg" alt="Stroit"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-16.userapi.com/sI4Xu3YsiaktB3UvWFXLjKx5e3f9dNV7cps6wg/MuaoacNsJCE.jpg" alt="Stroit"/>
            </Gallery>
            
            <Separator wide style={{ paddingBottom: '10px' }} />

            <Group style={{ padding: '0 5vw' }}>
                Популярный городской культурный центр.
                <br /><br />
                Создан в 1969 году, с тех пор и по сей день радует горожан спектаклями, концертами и вечеринками. В 2019 году ГКЦ отметил 50 лет со дня основания!
                <br />
                В скором времени зданию предстоит реновация, в результате которой увеличится вместимость центра и повысится удобство для зрителей.
            </Group>

            <Group separator='hide' style={{ paddingBottom: '12px' }}>
                <Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />} description="08:00 - 21:00">Сибирская, 2</Cell>
                <Cell size='l' before={<Icon24Link />} href="https://gkc-surgut.ru" target="_blank">gkc-surgut.ru</Cell>
                <Cell size='l' before={<Icon24LogoVk />} href="https://vk.com/gkc86" target="_blank">Группа VK</Cell>
            </Group>

            <Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                <YMaps>
                    <Map defaultState={{ center: [61.249700, 73.410024], zoom: 17 }} width='90vw' height='60vh'>
                        <Placemark defaultGeometry={[61.249700, 73.410024]} defaultOptions={{preset: 'islands#blueTheaterCircleIcon', iconColor: '#000'}} />
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

export default Stroit;