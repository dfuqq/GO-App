import React, { Fragment } from 'react';
import { YMaps, Map, Placemark, Circle } from 'react-yandex-maps';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Cell,
	Group,
	Separator,
	Div,
	Header,
	Gallery,
} from '@vkontakte/vkui';

import Icon28MoneyCircleOutline from '@vkontakte/icons/dist/28/money_circle_outline';
import Icon28LogoInstagram from '@vkontakte/icons/dist/28/logo_instagram';
import Icon28PlaceOutline from '@vkontakte/icons/dist/28/place_outline';
import Icon28PhoneOutline from '@vkontakte/icons/dist/28/phone_outline';

const Mishka = ({ id, geo }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			Mishka
		</PanelHeader>

		<Gallery
			slideWidth='100%'
			style={{ height: 225 }}
			align='center'
			bullets='light'>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-3.userapi.com/PK-d2_GB-bgL_6WtiA-ti6pACyS6tPjyFJl-0g/-dlmnev-o8Y.jpg'
				alt="Restaraunt's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-13.userapi.com/PjSz0zIn-8J8EawJmcZbUNABoccXGG8FxIdZzA/QJw3QK7dm-k.jpg'
				alt="Restaraunts's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-8.userapi.com/5853CAXON8A8yEYD-uk8KwQzV-GX74jfeogK8g/v_MUTeSKbIo.jpg'
				alt="Restaraunt's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-67.userapi.com/K4uML6kMnLB9XwQKRtjp8d-cuUfRYzFKurO4nw/vFh8AFuaJ_k.jpg'
				alt="Restaraunt's Food"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-22.userapi.com/eUDLOW6Pkri8Ex2MF3rDhYNDr9K3QYlXDtG8MQ/tvGRRacvh4s.jpg'
				alt="Restaraunt's Food"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-68.userapi.com/Us4WwX8ro5I85Tln-_dMnDzfyIREhdHqJpPMyA/zAklNdqJy44.jpg'
				alt="Restaraunt's Food"
			/>
		</Gallery>

		<Separator wide style={{ paddingTop: '10px' }} />

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>Гриль как искусство</Header>}>
			<Div>
				О нём слышал каждый.
				<br />
				"Mishka" способны угодить любому гостю. Ещё бы — ведь в "Mishka"
				персонал может лично подобрать блюдо, исходя из Ваших предпочтений!
				<br />
				Десятки мясных порций, самые известные блюда грузинской кухни, а также
				позиции для вегетарианцев — такое встретишь далеко не в каждом заведении
				города. Сытные и недорогие бизнес-ланчи, собственные кальяны и коллекция
				изысканных домашних вин — и всё это в уютной атмосфере. А если не можете
				прийти, то для Вас работает быстрая доставка.
				<br /> <br />
				Стоит ли говорить что-то ещё? Скорее смотрите информацию ниже!
			</Div>
		</Group>

		<Separator wide />

		<Div style={{ paddingBottom: 0 }}>
			<Cell
				size='l'
				before={<Icon28PlaceOutline height={24} width={24} />}
				description='12:00 - 00:00'>
				Мира, 2Б
			</Cell>
			<Cell
				size='l'
				before={<Icon28MoneyCircleOutline height={24} width={24} />}>
				1000-1500₽
			</Cell>
			<Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>
				99-42-42
			</Cell>
			<Cell
				size='l'
				href='https://instagram.com/mishka.bar'
				target='_blank'
				before={<Icon28LogoInstagram height={24} width={24} />}>
				@mishka.bar
			</Cell>
		</Div>

		<Group
			style={{
				display: 'flex',
				justifyContent: 'center',
				paddingBottom: '12px',
			}}>
			<YMaps>
				<Map
					defaultState={{ center: [61.258592, 73.403162], zoom: 17 }}
					width='90vw'
					height='60vh'>
					<Placemark
						defaultGeometry={[61.258592, 73.403162]}
						defaultOptions={{ preset: 'islands#circleIcon', iconColor: '#000' }}
					/>
					{geo[0] !== undefined && (
						<Fragment>
							<Circle
								defaultGeometry={[[geo[1], geo[0]], 200]}
								options={{
									draggable: false,
									fillColor: 'rgba(0, 0, 0, 0.5)',
									strokeColor: '#000',
									strokeOpacity: 0.8,
									strokeWidth: 2,
								}}
							/>
						</Fragment>
					)}
				</Map>
			</YMaps>
		</Group>
	</Panel>
);

export default Mishka;
