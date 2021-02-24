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
import Footer from '@vkontakte/vkui/dist/components/Footer/Footer';
import Link from '@vkontakte/vkui/dist/components/Link/Link';

import Icon28MoneyCircleOutline from '@vkontakte/icons/dist/28/money_circle_outline';
import Icon28LogoInstagram from '@vkontakte/icons/dist/28/logo_instagram';
import Icon28PlaceOutline from '@vkontakte/icons/dist/28/place_outline';
import Icon28PhoneOutline from '@vkontakte/icons/dist/28/phone_outline';

const Frank = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={() => window.history.back()}>
			</PanelHeaderBack>}
			separator={false}
		>
			Frank Bar & Kitchen
		</PanelHeader>

		<Gallery
			slideWidth = "100%"
			style = {{ height: 225 }}
			align = "center"
			bullets="light"
		>
			<img style={{ objectFit: 'contain' }} src="https://sun9-52.userapi.com/UBX7QGFzocB8EkqgFxakJd6d6ytVDWJt2HdGLQ/-anfUCrYRyQ.jpg" alt="Bar's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-33.userapi.com/9VLrhDgELzwgRmq8HzD8kxXmy-Dow4J7IyonzA/jMz0aBE5y5s.jpg" alt="Bar's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-9.userapi.com/NLzEo7vcamSLsp4KytTguGbiqamyeGekn3sCZg/8LgJp5Yfz38.jpg" alt="Bar's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-51.userapi.com/JFKAQIpBziwPPtUtJTXoaL6j0Jcyn1cBiHYPtg/QEIIYyLk_TQ.jpg" alt="Bar's Cocktail"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-71.userapi.com/VfH58K4EEAkNmY59Toe9D9whSPFPaP20NkoH0w/iGlvAr_0wds.jpg" alt="Bar's Food"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-21.userapi.com/HlQw-l3dOCLhMzsrAUYmGxyns02Aw7U2Rz1lXw/obEzEX5SUPQ.jpg" alt="Bar's Food"/>
		</Gallery>

		<Separator wide style={{paddingTop: '10px'}}/>

		<Group separator='hide' style={{ padding: '0 3vw 20px 3vw'}} header={<Header>Идеальное свидание</Header>}>
			<Div>
			Пользователи массово характеризуют "Frank Bar & Kitchen" как лучшее место для свиданий!
            <br />
			И честно говоря, мы придерживаемся этого мнения. Огромный выбор различных вин, хорошая кухня с пиццой, бургерами, салатами и мясными порциями — всё это отметит каждый, кто хоть раз побывает в этом заведении.
			<br />
			Большим плюсом можно выделить отличный дизайн и высококлассный персонал, которые оставляют приятное впечатление от визита.
			<br /> <br />
			Попробуйте сами —  посетить заведение можно по адресу ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{paddingBottom: 0}}>
			<Cell size='l' before={<Icon28PlaceOutline height={24} width={24} />} description="12:00 - 23:00 (Пт, Сб - до 02:00)">Мелик-Карамова, 4/4</Cell>
			<Cell size='l' before={<Icon28MoneyCircleOutline height={24} width={24} />}>900-1300₽</Cell>
            <Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>55-07-33</Cell>
			<Cell size='l' href="https://instagram.com/frankbarwine" target="_blank" before={<Icon28LogoInstagram height={24} width={24} />}>@frankbarwine</Cell>
		</Div>

		<Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
			<YMaps>
				<Map defaultState={{ center: [61.234299, 73.438364], zoom: 17 }} width='90vw' height='60vh'>
					<Placemark defaultGeometry={[61.234299, 73.438364]} defaultOptions={{preset: 'islands#circleIcon', iconColor: '#000'}} />
					{props.geo[0] !== undefined &&
						<Fragment>
							<Circle defaultGeometry={[[props.geo[1], props.geo[0]], 200]} options={{draggable: false, fillColor: 'rgba(0, 0, 0, 0.5)', strokeColor: '#000', strokeOpacity: 0.8, strokeWidth: 2 }} /> 
						</Fragment>
					}
				</Map>
			</YMaps>
		</Group>

		<Footer>
			За фото спасибо: <Link href="https://vk.com/antoninkin" target="_blank">Антон Инкин</Link>.
		</Footer>

	</Panel>
);

export default Frank;
