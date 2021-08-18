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
	Footer,
	Link,
} from '@vkontakte/vkui';

import Icon28MoneyCircleOutline from '@vkontakte/icons/dist/28/money_circle_outline';
import Icon28LogoInstagram from '@vkontakte/icons/dist/28/logo_instagram';
import Icon28PlaceOutline from '@vkontakte/icons/dist/28/place_outline';
import Icon28PhoneOutline from '@vkontakte/icons/dist/28/phone_outline';

const HPlace = ({ id, geo }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			HookahPlace
		</PanelHeader>

		<Gallery
			slideWidth='100%'
			style={{ height: 225 }}
			align='center'
			bullets='light'>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-71.userapi.com/CoRG9WCnk0m1pKtrd9UIeGlk5hSAlkYW7mbhhg/3kEqz9UnxVI.jpg'
				alt="Bar's Logo"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-27.userapi.com/nZsNbWgD6fs1XVAU2XQMhKqcT_zXA0HL1IkU9g/Fbv_JoBTG3s.jpg'
				alt="Bar's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-45.userapi.com/UZRWaAOYIHMoe41SOH948Ex70PFSC2EtfYseHw/jUe7-Lx1aNc.jpg'
				alt="Bar's Staff"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-27.userapi.com/xpSjMWIhZE-2rDxPm-ZpqK6VEFaG7Wn24mkaPA/xVi7pgexpW8.jpg'
				alt="Bar's Cocktail"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-42.userapi.com/HIXzQB6aib-nrjYbPTUXXFsWDUbSna9YjYO8Hw/M6fbVPezMQg.jpg'
				alt="Bar's Cocktail"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-34.userapi.com/JRKgLOSWcF-oxdVs2qFuz_Efweql7I7rEM52Sw/-U4JgDCzqRk.jpg'
				alt="Bar's Food"
			/>
		</Gallery>

		<Separator wide style={{ paddingTop: '10px' }} />

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>Мировой представитель</Header>}>
			<Div>
				"HookahPlace" — сеть мировых кальянных. И да, одно из заведений этой
				мировой сети находится в Сургуте.
				<br />
				Будучи одними из первооткрывателей кальянного бизнеса в России,
				заведение задаёт тренд всей кальянной культуры страны, предлагаю своему
				гостю премиальное обсуживание за вполне демократичные цены. В
				"HookahPlace" Вы найдёте табак и кальяны исключительно мировых брендов,
				а опытные мастера, проходящие обучение в академии компании, грамотно
				сделают его специально по Вашим предпочтениям.
				<br />
				В дополнение Вы получаете доступ к настольным и видео-играм,
				прохладительным напиткам и блюдам из бара. А ещё велик шанс, что Вы
				попадёте на какой-нибудь тренинг или мастер-класс: они проводятся
				регулярно, позволяя поглубже окунуться в кальянный мир.
				<br /> <br />
				Словом, место обязательно для посещения. Всю информацию Вы можете найти
				ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{ paddingBottom: 0 }}>
			<Cell
				size='l'
				multiline
				before={<Icon28PlaceOutline height={24} width={24} />}
				description='12:00 - 02:00 (Пт: 12:00 - 03:00, Сб: 15:00 - 03:00, Вс: 15:00 - 01:00)'>
				30 Лет Победы, 50
			</Cell>
			<Cell
				size='l'
				before={<Icon28MoneyCircleOutline height={24} width={24} />}>
				900-1300₽
			</Cell>
			<Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>
				71-27-77
			</Cell>
			<Cell
				size='l'
				href='https://instagram.com/hookahplace_surgut'
				target='_blank'
				before={<Icon28LogoInstagram height={24} width={24} />}>
				@hookahplace_surgut
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
					defaultState={{ center: [61.25448, 73.436439], zoom: 17 }}
					width='90vw'
					height='60vh'>
					<Placemark
						defaultGeometry={[61.25448, 73.436439]}
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

		<Footer>
			За фото спасибо:{' '}
			<Link href='https://vk.com/antoninkin' target='_blank'>
				Антон Инкин
			</Link>
			.
		</Footer>
	</Panel>
);

export default HPlace;
