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
import Icon24Link from '@vkontakte/icons/dist/24/link';
import Icon24LogoVk from '@vkontakte/icons/dist/24/logo_vk';

const Ssur = props => {
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => window.history.back()}>
                </PanelHeaderBack>}
            >
                Старый Сургут
            </PanelHeader>
            
            
            <Gallery
                slideWidth = "100%"
                style = {{ height: 225 }}
                align = "center"
                bullets="light"
            >
                <img style={{ objectFit: 'contain' }} src="https://sun9-27.userapi.com/jRyN5CiSNi7AKxVTiMt9CeiCBCOPE5UZOKkp4g/WY1dYbPE1OY.jpg" alt="Ssur"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-71.userapi.com/WVR_GGf64TrxhEfUyy2G1JBj1SeF0nXfT_vt8g/Ga-bH3ZWtv0.jpg" alt="Ssur"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-61.userapi.com/07c9v9INr5v1Css8O6v2V1DEXiGAIL7eW58Ofg/JfDP9qXl0OI.jpg" alt="Ssur"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-22.userapi.com/SvorgI52GqgzgBAPUJv9T0nGB0jUJUMz_ZaPIA/3uzVXFNO30A.jpg" alt="Ssur"/>
            </Gallery>
            
            <Separator wide style={{ paddingBottom: '10px' }} />

            <Group style={{ padding: '0 5vw' }}>
                Историко-этнографический комплекс города.
                <br /><br />
                "Старый Сургут" даёт наглядное представление об историческом облике города на рубеже XIX-XX вв, продолжая свою работу с 1999 года по сей день.
                <br />
                На территории посетителей ждёт множество стариных зданий и предметов быта, интересных выставок и оригинальных развлечений. 
            </Group>

            <Group separator='hide' style={{ paddingBottom: '12px' }}>
                <Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />} description="10:00 - 22:00">Энергетиков, 2</Cell>
                <Cell size='l' before={<Icon24Link />} href="https://stariy-surgut.ru" target="_blank">stariy-surgut.ru</Cell>
                <Cell size='l' before={<Icon24LogoVk />} href="https://vk.com/old_surgut" target="_blank">Группа VK</Cell>
            </Group>

            <Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                <YMaps>
                    <Map defaultState={{ center: [61.236588, 73.408485], zoom: 17 }} width='90vw' height='60vh'>
                        <Placemark defaultGeometry={[61.236588, 73.408485]} defaultOptions={{preset: 'islands#blueLeisureCircleIcon', iconColor: '#000'}} />
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

export default Ssur;