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

const Trvls = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={() => window.history.back()}>
			</PanelHeaderBack>}
			separator={false}
		>
			Traveler's Coffee
		</PanelHeader>

		<Gallery
			slideWidth = "100%"
			style = {{ height: 225 }}
			align = "center"
			bullets="light"
		>
			<img style={{ objectFit: 'contain' }} src="https://sun9-39.userapi.com/mbcoSVyjqnoSYXosjS2kspUMRAKnH6B4h2FeVw/ZlGfodfErLQ.jpg" alt="Cafe's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-74.userapi.com/cAR7KE3Tr5ncOjvszoRb0Fn663jG3M-3cdxLpg/nb8RMimSWFY.jpg" alt="Cafe's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-31.userapi.com/ELpeGFcwb_wuEjI2qmKtcC-p1GxtBOIyviJLOg/hircXwCOeCk.jpg" alt="Cafe's Food"/>
		</Gallery>

		<Separator wide style={{paddingTop: '10px'}}/>

		<Group separator='hide' style={{ padding: '0 3vw 20px 3vw'}} header={<Header>Международная сеть<br />кофеен в Сургуте</Header>}>
			<Div>
            Хотите провести вечер, перекусить во время ланча или просто взять кофе с собой?
            <br />
            "Traveler's Coffee" — отличное место для таких целей! Огромный опыт работы, в течение которого каждый посетитель оставался довольным, высокое качество продукции и внимание к каждому клиенту позволили закрепиться кофейне в сердцах многих людей.
			<br /> <br />
			Вы не останетесь разочарованы! Посетить заведение можно по адресам ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{paddingBottom: 0}}>
			<Cell size='l' before={<Icon28PlaceOutline height={24} width={24} />} description="07:30 - 00:00">Ленина, 38<br />Ленина, 17<br />Ленина, 63</Cell>
			<Cell size='l' before={<Icon28MoneyCircleOutline height={24} width={24} />}>700-1200₽</Cell>
            <Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>550-422 (Ленина, 38)<br />550-411 (Ленина, 17)</Cell>
			<Cell size='l' href="https://instagram.com/travelerscoffeesurgut" target="_blank" before={<Icon28LogoInstagram height={24} width={24} />}>@travelerscoffeesurgut</Cell>
		</Div>

		<Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
			<YMaps>
				<Map defaultState={{ center: [61.258479, 73.391443], zoom: 12.5 }} width='90vw' height='60vh'>
					<Placemark defaultGeometry={[61.254789, 73.392651]} defaultOptions={{preset: 'islands#circleIcon', iconColor: '#000'}} />
					<Placemark defaultGeometry={[61.266427, 73.370178]} defaultOptions={{preset: 'islands#circleIcon', iconColor: '#000'}} />
					<Placemark defaultGeometry={[61.250818, 73.401331]} defaultOptions={{preset: 'islands#circleIcon', iconColor: '#000'}} />
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

export default Trvls;
