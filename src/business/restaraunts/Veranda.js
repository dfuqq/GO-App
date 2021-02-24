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

const Veranda = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={() => window.history.back()}>
			</PanelHeaderBack>}
			separator={false}
		>
			Веранда
		</PanelHeader>

		<Gallery
			slideWidth = "100%"
			style = {{ height: 225 }}
			align = "center"
			bullets="light"
		>
			<img style={{ objectFit: 'contain' }} src="https://sun9-48.userapi.com/xX0WU9-Ss1gTXxb3uKb1iIWlHfq3qzV_mcZYWg/lT742eoU0Wk.jpg" alt="Restaraunt's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-11.userapi.com/e-NZsgjAXXTTYdYh0ceiLd5gp7g8Cwsfkb7xpA/E4b9rYr_7KA.jpg" alt="Restaraunt's Food"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-66.userapi.com/YFCgbJoG_amf79wBy8SU-Z2B5vIEpEYwnYL7rg/eXU-OwLLo9k.jpg" alt="Restaraunt's Food"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-43.userapi.com/X-8x8-2NZRml_kwq9f3qTDXYBqIXAQCnoUmC4g/P5pwj3aGZ3U.jpg" alt="Restaraunt's Food"/>
		</Gallery>

		<Separator wide style={{paddingTop: '10px'}}/>

		<Group separator='hide' style={{ padding: '0 3vw 20px 3vw'}} header={<Header>Уютная терраса</Header>}>
			<Div>
			"Веранда" буквально окутывает Вас своей приятной, по-домашнему тёплой атмосферой. Эта ностальгия по летним вечерам на дачной террасе пронизывает всё тело, подготавливая перед самым важным: ужином в кругу семьи.
            <br />
			Пожалуй, это как раз идеальное место для важных переговоров или семейных трапез. Время тут течёт медленее, а удовольствие от пребывания растёт с каждой минутой. Может, всё дело в блюдах?
			<br />
			Авторские блюда от шефповара современной кухни искусно переплетаются с традиционными северными рецептами, создавая уникальный колорит, способный угодить любому гурману. Супы, салаты, порции из мяса, рыбы и птицы — ассортимент широк, и от всего можно получить гастрономическое удовольствие.
			<br /> <br />
			Встретимся в "Веранде". Вся информация — ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{paddingBottom: 0}}>
			<Cell size='l' before={<Icon28PlaceOutline height={24} width={24} />} description="12:00 - 02:00">Ленина, 43</Cell>
			<Cell size='l' before={<Icon28MoneyCircleOutline height={24} width={24} />}>2500-3000₽</Cell>
            <Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>44-80-80</Cell>
			<Cell size='l' href="https://instagram.com/veranda_surgut" target="_blank" before={<Icon28LogoInstagram height={24} width={24} />}>@veranda_surgut</Cell>
		</Div>

		<Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
			<YMaps>
				<Map defaultState={{ center: [61.254809, 73.383906], zoom: 17 }} width='90vw' height='60vh'>
					<Placemark defaultGeometry={[61.254809, 73.383906]} defaultOptions={{preset: 'islands#circleIcon', iconColor: '#000'}} />
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

export default Veranda;