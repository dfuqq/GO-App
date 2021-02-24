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

const Botanica = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={() => window.history.back()}>
			</PanelHeaderBack>}
			separator={false}
		>
			Ботаника
		</PanelHeader>

		<Gallery
			slideWidth = "100%"
			style = {{ height: 225 }}
			align = "center"
			bullets="light"
		>
			<img style={{ objectFit: 'contain' }} src="https://sun9-22.userapi.com/ZXSemOlMGoOfRkdz8bmIk24QRzmuEZuPTyWiGg/1N4faj6cXpE.jpg" alt="Restaraunt's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-33.userapi.com/Xw3rUkquXjJsGD4ysM8Xr8PZSQ8wYlOMLJzqZw/72SeqkhbFY8.jpg" alt="Restaraunts's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-61.userapi.com/QdHBZBm7QoQXZJHmcbbqC_iJElRV4m97UOruJA/b7DY8BqJOXs.jpg" alt="Restaraunt's Food"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-46.userapi.com/9UIGVGIO-ujPuBUwsamGJfP6X0_I-i-DrEQJRA/XETk6eMGxD4.jpg" alt="Restaraunt's Food"/>
		</Gallery>

		<Separator wide style={{paddingTop: '10px'}}/>

		<Group separator='hide' style={{ padding: '0 3vw 20px 3vw'}} header={<Header>Самая вкусная наука</Header>}>
			<Div>
			"Ботаника" — излюбленное место сургутян.
            <br />
			Это уютное место на берегу Саймы, в котором переплетены хороший вид, правильная еда и тёплая, почти домашняя атмосфера. Заведение идеально подходит как и для дневных бизнес-переговоров, так и для вечерних посиделок с семьёй.
			<br />
			Не знаете, что заказать? Приветливый персонал с радостью посоветует Вам то, что будет соответствовать Вашим предпочтениям и особенностям. Каждая порция здесь будет большой и полезной, так что Вы сразу поймёте, за что платите. Роллы, пицца, WOK — всё это Вы несомненно оцените по-достойнству.
			<br /> <br />
			Время проверить всё самим — приходите по адресу ниже, или оформляйте доставку на дом.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{paddingBottom: 0}}>
			<Cell size='l' before={<Icon28PlaceOutline height={24} width={24} />} description="11:00 - 21:30">Энергетиков, 12</Cell>
			<Cell size='l' before={<Icon28MoneyCircleOutline height={24} width={24} />}>500-1500₽</Cell>
            <Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>77-44-00 (Бронь)<br />77-48-48 (Доставка)</Cell>
			<Cell size='l' href="https://instagram.com/botanicacafe" target="_blank" before={<Icon28LogoInstagram height={24} width={24} />}>@botanicacafe</Cell>
		</Div>

		<Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
			<YMaps>
				<Map defaultState={{ center: [61.240119, 73.404912], zoom: 17 }} width='90vw' height='60vh'>
					<Placemark defaultGeometry={[61.240119, 73.404912]} defaultOptions={{preset: 'islands#circleIcon', iconColor: '#000'}} />
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

export default Botanica;