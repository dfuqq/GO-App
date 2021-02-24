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

const Vkus = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={() => window.history.back()}>
			</PanelHeaderBack>}
			separator={false}
		>
			Академия Вкуса
		</PanelHeader>

		<Gallery
			slideWidth = "100%"
			style = {{ height: 225 }}
			align = "center"
			bullets="light"
		>
			<img style={{ objectFit: 'contain' }} src="https://sun9-18.userapi.com/caBA5jDEVjz3cLCCT7RazQsR5gJX5UGMUWh2LA/aybudwQX4qo.jpg" alt="Cafe's Interior" />
			<img style={{ objectFit: 'contain' }} src="https://sun9-19.userapi.com/OMvz-zBauaxlrngDtAvQLpkjRATsNTOCCQrP-w/sIgN79N4h7c.jpg" alt="Cafe's Food"/>
		</Gallery>

		<Separator wide style={{paddingTop: '10px'}}/>

		<Group separator='hide' style={{ padding: '0 3vw 20px 3vw'}} header={<Header>Настоящая академия</Header>}>
			<Div>
			"Академия Вкуса" известна не каждому, но она стоит внимания.
            <br />
			Это маленькое, но уютное заведение оставляет положительное впечатление от посещения, даже если Вы просто забежали на чашечку кофе. Секрет в подаче — блюда тут сервируются с педантичным подходом, отчего их так и хочется сфотографировать и выложить в свой "Instagram". Подкрепят мнение о заведении работа персонала и само качество блюд.
			<br />
			Стоит упомянуть про цены: некоторые говорят, что он слегка завышены, но это с лихвой покрывается полученными эмоциями.
			<br /> <br />
			Уже потекли слюнки?
			<br />
			Скорее идите по адресу ниже!
			</Div>
		</Group>

		<Separator wide />

		<Div style={{paddingBottom: 0}}>
			<Cell size='l' before={<Icon28PlaceOutline height={24} width={24} />} description="08:00 - 21:00 (Сб, Вс: 09:00-21:00)">Ленина, 16</Cell>
			<Cell size='l' before={<Icon28MoneyCircleOutline height={24} width={24} />}>200-600₽</Cell>
            <Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>71-45-50</Cell>
			<Cell size='l' href="https://instagram.com/academy_of_taste" target="_blank" before={<Icon28LogoInstagram height={24} width={24} />}>@academy_of_taste</Cell>
		</Div>

		<Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
			<YMaps>
				<Map defaultState={{ center: [61.246266, 73.406547], zoom: 17 }} width='90vw' height='60vh'>
					<Placemark defaultGeometry={[61.246266, 73.406547]} defaultOptions={{preset: 'islands#circleIcon', iconColor: '#000'}} />
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

export default Vkus;
