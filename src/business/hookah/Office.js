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

const Office = ({ id, geo }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			The OFFICE Nargilia
		</PanelHeader>

		<Gallery
			slideWidth='100%'
			style={{ height: 225 }}
			align='center'
			bullets='light'>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-71.userapi.com/C9qmrAWNh6bE7zdvb364ZVC0GaA_gqeg2R5pWQ/gjPOco0sb5U.jpg'
				alt="Bar's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-71.userapi.com/L7bzwZOg6R9DN4ATw0E7755tvMAMcy-uPeVouw/S0SuffV94ZI.jpg'
				alt="Bar's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-58.userapi.com/W3LxrYMp2MTYfnBySIbHHqOrVe2O7c26S0YI2Q/bjGnEKcBeuA.jpg'
				alt="Bar's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-69.userapi.com/4e0JZ6yjN5Kak49BMiAgmaj7u91xeUF9hmVJAQ/42NRoomXNc8.jpg'
				alt="Bar's Guests"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-71.userapi.com/4YMbcDH-Dx1KfaqagBst0QAQNjPlgRSbG1GfLA/HuV3Cj5XMrM.jpg'
				alt="Bar's Guests"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-19.userapi.com/kNHgr-Y5RQm20DbRFx9Wm8IRcMJ3Bp77ZzT6ZQ/HpaCIjn95OE.jpg'
				alt="Bar's Guests"
			/>
		</Gallery>

		<Separator wide style={{ paddingTop: '10px' }} />

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>Футуризм во всём</Header>}>
			<Div>
				"The OFFICE" работает в России с 2009 года, и за это время компания
				создала чёткие принципы работы своих заведений.
				<br />
				Первым делом Вы отметите дизайн: Hi-Tech интерьер, выполненный в смеси
				типичного офисного кабинета и космического корабля. Он сразу даёт
				понять, что Вы пришли сюда лишь отдыхать, вырываясь из будничной суеты.
				<br />
				Приходите с компанией. Здесь каждый найдёт себе занятие за большими
				столиками для общения, игровыми приставками или настольными играми.
				<br />
				К Вашим услугам работает бар с безалкогольными напитками, а также часто
				проводятся мастер-классы от кальянных мастеров, рассказывающих больше о
				кальянах.
				<br />
				<br />
				Кажется, время оторваться. Вас ждут в "Офисе" по адресу ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{ paddingBottom: 0 }}>
			<Cell
				size='l'
				before={<Icon28PlaceOutline height={24} width={24} />}
				description='15:00 - 03:00 (Пт, Сб - до 06:00)'>
				Энгельса, 11
			</Cell>
			<Cell
				size='l'
				before={<Icon28MoneyCircleOutline height={24} width={24} />}>
				700-1300₽
			</Cell>
			<Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>
				64-06-88
			</Cell>
			<Cell
				size='l'
				href='https://instagram.com/the_office_surgut'
				target='_blank'
				before={<Icon28LogoInstagram height={24} width={24} />}>
				@the_office_surgut
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
					defaultState={{ center: [61.239877, 73.392422], zoom: 17 }}
					width='90vw'
					height='60vh'>
					<Placemark
						defaultGeometry={[61.239877, 73.392422]}
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

export default Office;
