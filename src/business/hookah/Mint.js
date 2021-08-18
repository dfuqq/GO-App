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

const Mint = ({ id, geo }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			Мята
		</PanelHeader>

		<Gallery
			slideWidth='100%'
			style={{ height: 225 }}
			align='center'
			bullets='light'>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-6.userapi.com/MTGF9PiIAvj0I6qPFhmXyU2ocJPWW0f--iRWeg/MxWvp2tQsLg.jpg'
				alt="Bar's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-26.userapi.com/DRPVJFoccP0zUJwdjDc7rbDqWwJmVW1iPbAxeQ/-r4JS6zlubM.jpg'
				alt="Bar's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-53.userapi.com/aB2DzGn8uXNSyTXYHCFrB7hdwWYHhexwEytHtQ/QjgTuDn36X4.jpg'
				alt="Bar's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-8.userapi.com/EEPv5SU1lgSDkmzO-McafaZxkyWnGFhM-4EPGw/n0zjv9rKhlY.jpg'
				alt="Bar's Footage"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-49.userapi.com/ezGyxEm8iXhKQAihtnQjapvJv_15wyeY5cLIiQ/YVSOY92F0cQ.jpg'
				alt="Bar's Footage"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-65.userapi.com/LOoZLlQZJn3vZ3p-bxkq6d0_LCHkJnJA47w_1g/IpBwYGrkq70.jpg'
				alt="Bar's Footage"
			/>
		</Gallery>

		<Separator wide style={{ paddingTop: '10px' }} />

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>Мятный дым</Header>}>
			<Div>
				Вы наверянка знаете про "Мяту", даже если не курите кальян.
				<br />
				Всё просто. "Мята" — излюбленное место сургутской молодёжи. Это
				всероссийская сеть кальянных со своими принципами работы, исключением
				которых не стал и Сургут. Её полюбили за отличный сервис, приятный
				дизайн и широкий ассортимент кальянов.
				<br />
				Хотите "Darkside"? Не вопрос. "Spectrum"? Да, и он есть. "Musthave"?
				Прямо сейчас.
				<br />
				Располагайтесь поудобнее в закрытой зоне или зоне с приставками,
				выбирайте себе чай, коктейль или даже алкоголь в дополнение к Вашему
				кальяну, и получайте удовольствие.
				<br /> <br />
				Да, это "Мята". Адрес ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{ paddingBottom: 0 }}>
			<Cell
				size='l'
				before={<Icon28PlaceOutline height={24} width={24} />}
				description='14:00 - 02:00 (Пт, Сб - до 04:00)'>
				Мира, 47/2
			</Cell>
			<Cell
				size='l'
				before={<Icon28MoneyCircleOutline height={24} width={24} />}>
				700-1000₽
			</Cell>
			<Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>
				+7 (996) 329-07-04
			</Cell>
			<Cell
				size='l'
				href='https://instagram.com/myata_surgut'
				target='_blank'
				before={<Icon28LogoInstagram height={24} width={24} />}>
				@myata_surgut
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
					defaultState={{ center: [61.257635, 73.42004], zoom: 17 }}
					width='90vw'
					height='60vh'>
					<Placemark
						defaultGeometry={[61.257635, 73.42004]}
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

export default Mint;
