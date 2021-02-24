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
import Icon28PhoneOutline from '@vkontakte/icons/dist/28/phone_outline';


const Gzprm = props => {
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => window.history.back()}>
                </PanelHeaderBack>}
            >
                Музей "Газпрома"
            </PanelHeader>
            
            
            <Gallery
                slideWidth = "100%"
                style = {{ height: 225 }}
                align = "center"
                bullets="light"
            >
                <img style={{ objectFit: 'contain' }} src="https://sun9-41.userapi.com/4TFE0d_nozPo9CeHpG8JM8TbRyXJN4Igc5Qsiw/JvIjUb7q0Vo.jpg" alt="Gzprm"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-74.userapi.com/QeD9MbZeaFlayFG4Z9tHbhYXhzaNaUSp35g46Q/njxGNniBTA8.jpg" alt="Gzprm"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-69.userapi.com/iDFIqKy5OeHNsYYfZCPBtWdwIDPNwobRvfonFQ/-ZqMkhbcuYo.jpg" alt="Gzprm"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-6.userapi.com/DVqST_Rkg8ozEtuWwMx_r5xHHYdAx6-Lc4EsTw/0N0S5AXeZKc.jpg" alt="Gzprm"/>
            </Gallery>
            
            <Separator wide style={{ paddingBottom: '10px' }} />

            <Group style={{ padding: '0 5vw' }}>
                Один из немногих музеев истории развития нефтяной промышленности в Сургуте.
                <br /><br />
                Открыт 14 февраля 2002 года. Эскпозиция музея включает в себя более 4 тысяч единиц фондов и представляет наиболее сложный период становления в истории предприятия.
                <br />
                Попасть в музей сложно — он обслуживает лишь экскурсионные группы по предварительной записи.
            </Group>

            <Group separator='hide' style={{ paddingBottom: '12px' }}>
                <Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>Университетская, 1</Cell>
                <Cell size='l' before={<Icon24Link />} href="https://surgut-tr.gazprom.ru/about/history/muzei" target="_blank">surgut-tr.gazprom.ru</Cell>
                <Cell size='l' before={<Icon28PhoneOutline width={24} height={24} />}>75-12-05<br />75-05-01</Cell>
            </Group>

            <Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                <YMaps>
                    <Map defaultState={{ center: [61.245173, 73.405057], zoom: 17 }} width='90vw' height='60vh'>
                        <Placemark defaultGeometry={[61.245173, 73.405057]} defaultOptions={{preset: 'islands#blueLeisureCircleIcon', iconColor: '#000'}} />
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

export default Gzprm;