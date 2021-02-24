import React, { Fragment } from 'react';
import { YMaps, Map, Placemark, Circle } from 'react-yandex-maps';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Gallery from '@vkontakte/vkui/dist/components/Gallery/Gallery';

import Icon28MoneyCircleOutline from '@vkontakte/icons/dist/28/money_circle_outline';
import Icon28LogoInstagram from '@vkontakte/icons/dist/28/logo_instagram';
import Icon28PlaceOutline from '@vkontakte/icons/dist/28/place_outline';
import Icon28PhoneOutline from '@vkontakte/icons/dist/28/phone_outline';

const Light = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={() => window.history.back()}>
			</PanelHeaderBack>}
			separator={false}
		>
			Light Дым
		</PanelHeader>
        
		<Gallery
			slideWidth = "100%"
			style = {{ height: 225 }}
			align = "center"
			bullets="light"
		>
			<img style={{ objectFit: 'contain' }} src="https://sun9-22.userapi.com/HSTGTooVb_z7ZQu0qcbBxraoilYgpKbMeBKwfQ/_iGU3DliWr8.jpg" alt="Bar's Logo"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-16.userapi.com/mSOIEhdyf8UqJtcIeswuNciQl544m_Yy4XbIog/hlyEYBH72vY.jpg" alt="Bar's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-36.userapi.com/dkBWvsZoDPHrZlYNXV2OKOf1sMfuCv3GV1oivA/O1Yh_lccpMk.jpg" alt="Bar's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-7.userapi.com/q5trt5jWqg-1by-rOa33Q5N_pc2qFsuvBacXsQ/cmrzlYoDho4.jpg" alt="Bar's Hookah"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-32.userapi.com/BBcu65ao_lr4yr1OeYpDLs5bOXoufaJauACpZA/cajR2Rc2hgM.jpg" alt="Bar's Food"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-70.userapi.com/d8GQygKqlm_2pFdlTO2KAKNfbNUL1U4ZDRUNhQ/XuBKVBQ8mv4.jpg" alt="Bar's Food"/>
		</Gallery>

		<Separator wide style={{paddingTop: '10px'}}/>

		<Group separator='hide' style={{ padding: '0 3vw 20px 3vw'}} header={<Header>Эталон качества</Header>}>
			<Div>
			"Light Дым" великолепен. И это не преувеличение!
            <br />
			Вы не найдёте места лучше, чем этот лаунж-бар. Широкий ассортимент блюд мировой кухни, отличные напитки из бара, игры, а самое главное — великолепные кальяны! 
			<br />
			Знающий своё дело персонал с удовольствием будет обслуживать Вас в течение всего времени визита, делая Ваш визит приятным и незабываемым.
			<br /> <br />
			Вперёд отдыхать! Отлично провести вечер можно по адресу ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{paddingBottom: 0}}>
			<Cell size='l' before={<Icon28PlaceOutline height={24} width={24} />} description="12:00 - 00:00 (Пт, Сб - до 03:00)">30 Лет Победы, 37</Cell>
			<Cell size='l' before={<Icon28MoneyCircleOutline height={24} width={24} />}>900-1300₽</Cell>
            <Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>91-42-40</Cell>
			<Cell size='l' href="https://instagram.com/lightdym" target="_blank" before={<Icon28LogoInstagram height={24} width={24} />}>@lightdym</Cell>
		</Div>

		<Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
			<YMaps>
				<Map defaultState={{ center: [61.255536, 73.435487], zoom: 17 }} width='90vw' height='60vh'>
					<Placemark defaultGeometry={[61.255536, 73.435487]} defaultOptions={{preset: 'islands#circleIcon', iconColor: '#000'}} />
					{props.geo[0] !== undefined &&
						<Fragment>
							<Circle defaultGeometry={[[props.geo[1], props.geo[0]], 200]} options={{draggable: false, fillColor: 'rgba(0, 0, 0, 0.5)', strokeColor: '#000', strokeOpacity: 0.8, strokeWidth: 2 }} /> 
						</Fragment>
					}
				</Map>
			</YMaps>
		</Group>

	</Panel>
);

export default Light;