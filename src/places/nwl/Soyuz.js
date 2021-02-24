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
import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';
import Icon24Recent from '@vkontakte/icons/dist/24/recent';
import Icon24Link from '@vkontakte/icons/dist/24/link';
import Icon24LogoInstagram from '@vkontakte/icons/dist/24/logo_instagram';

const Soyuz = props => {
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={props.go} data-to="places">
                </PanelHeaderBack>}
            >
                ТЦ "Союз"
            </PanelHeader>
            
            
            <Gallery
                slideWidth = "100%"
                style = {{ height: 225 }}
                align = "center"
                bullets="light"
            >
                <img style={{ objectFit: 'contain' }} src=" " alt="Soyuz"/>
                <img style={{ objectFit: 'contain' }} src=" " alt="Soyuz"/>
            </Gallery>
            
            <Separator wide style={{ paddingBottom: '10px' }} />

            <Group style={{ padding: '0 5vw' }}>
                Сургутский Мост через Обь.
                <br />
                Занесён в книгу Рекордов Гиннесса.
            </Group>

            <Group separator='hide' style={{paddingBottom: '12px'}}>
                <Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>30 Лет Победы, 46</Cell>
                <Cell size='l' before={<Icon24Recent />}>Магазины: 10:00 - 22:00<br />"Перекрёсток": 09:00 - 23:00<br />Кинотеатр "Галактика": 10:00 - 00:00</Cell>
                <Cell size='l' before={<Icon28InfoOutline width={24} height={24} />}>Есть велопарковка<br />Есть фудкорт<br />Есть парк развлечений<br />78 магазинов</Cell>
                <Cell size='l' before={<Icon24Link />} href="https://soyuzsurgut.ru" target="_blank">soyuzsurgut.ru</Cell>
                <Cell size='l' before={<Icon24LogoInstagram />} href="https://instagram.com/soyuz_surgut" target="_blank">@soyuz_surgut</Cell>
            </Group>

            <Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                <YMaps>
                    <Map defaultState={{ center: [61.254182, 73.433559], zoom: 17 }} width='90vw' height='60vh'>
                        <Placemark defaultGeometry={[61.254182, 73.433559]} defaultOptions={{preset: 'islands#blueShoppingCircleIcon', iconColor: '#000'}} />
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

export default Soyuz;