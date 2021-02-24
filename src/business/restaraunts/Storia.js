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

const Storia = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={() => window.history.back()}>
			</PanelHeaderBack>}
			separator={false}
		>
			La Storia
		</PanelHeader>

		<Gallery
			slideWidth = "100%"
			style = {{ height: 225 }}
			align = "center"
			bullets="dark"
		>
			<img style={{ objectFit: 'contain' }} src="https://sun9-34.userapi.com/_tFhRDlO0vQNHk2-5rwmib8SCDGvVxDPQWqExg/CQ0RsbMalFk.jpg" alt="Restaraunt's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-49.userapi.com/aBOovlwLWzodBGrSJEVKQXl0GM5z3id43rcoBw/JnW1glx6LGQ.jpg" alt="Restaraunts's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-75.userapi.com/MxZAAX8ELJNEiBSrVtq6PLpvmBzcp0zTNPiLww/XThttilK4yo.jpg" alt="Restaraunt's Food"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-8.userapi.com/tvnO6SCVoUNGbbqYxQ51t6TzQpnAZp2Sn607GQ/8uvItRFrlLE.jpg" alt="Restaraunt's Food"/>
			<img style={{ objectFit: 'contain' }} src="https://sun3-11.userapi.com/tAGadJdShzD1w9Ib6ccwlNmb6fzcPcXa20apvA/4t4SQUwuewo.jpg" alt="Restaraunt's Food"/>
		</Gallery>

		<Separator wide style={{paddingTop: '10px'}}/>

		<Group separator='hide' style={{ padding: '0 3vw 20px 3vw'}} header={<Header>Идеальный сервис</Header>}>
			<Div>
			"La Storia" поражает с первого взгляда.
			<br />
			Всему виной интерьер в классическом стиле, которым проникаешься с ног до головы, ощущая всю роскошь этого места.
            <br />
			Представляя европейскую кухню, ресторан имеет в своём ассортименте огромный выбор различных блюд: от салатов до мяса и птицы. Можно просто тыкнуть в меню пальцем и быть уверенным: Вам принесут изысканное блюдо, которое на 200% утолит Ваш голод — как эстетический, так и физический.
			<br /> <br />
			Кажется, всё. Проверьте вышесказанное по адресу ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{paddingBottom: 0}}>
			<Cell size='l' before={<Icon28PlaceOutline height={24} width={24} />} description="10:00 - 01:00">Энтузиастов, 44А</Cell>
			<Cell size='l' before={<Icon28MoneyCircleOutline height={24} width={24} />}>2000-2500₽</Cell>
            <Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>45-11-45</Cell>
			<Cell size='l' href="https://instagram.com/la_storia_restaurant" target="_blank" before={<Icon28LogoInstagram height={24} width={24} />}>@la_storia_restaurant</Cell>
		</Div>

		<Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
			<YMaps>
				<Map defaultState={{ center: [61.261294, 73.365622], zoom: 17 }} width='90vw' height='60vh'>
					<Placemark defaultGeometry={[61.261294, 73.365622]} defaultOptions={{preset: 'islands#circleIcon', iconColor: '#000'}} />
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

export default Storia;