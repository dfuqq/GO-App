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

const Joint = ({ id, geo }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			Joint
		</PanelHeader>

		<Gallery
			slideWidth='100%'
			style={{ height: 225 }}
			align='center'
			bullets='light'>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-70.userapi.com/UQtPR3KxvH0OPJLCuioLq9Qqb1VJk24JKd9C5A/3-0zjCFBNSU.jpg'
				alt="Restaraunt's Outside"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-30.userapi.com/xWAAlBmBZBfIcFjQbujRUu6Q3fLmFaxBoHSQoA/1A71iC0UVqc.jpg'
				alt="Restaraunts's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-14.userapi.com/rBGQTeBA8m2_USV709QbsYrrzRhcBnpODkptNw/3SKavX5ASOA.jpg'
				alt="Restaraunt's Food"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-45.userapi.com/UayP8rTUzScvqcX4dKWMth5T02wNQb6wsTYeNg/3fNlt2zLiyc.jpg'
				alt="Restaraunt's Food"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-18.userapi.com/STMshcOsZ6-PKGGPRR0dYsktAzlNIOtsfMfIGQ/fAh6cIDvVrs.jpg'
				alt="Restaraunt's Food"
			/>
		</Gallery>

		<Separator wide style={{ paddingTop: '10px' }} />

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>Ирландский уголок</Header>}>
			<Div>
				"Joint" уже давно известен всем любителям атмосферы ирландских уютных
				пабов, ведь он почти таковым и является.
				<br />
				Давайте сравним: настоящий ирландский алкоголь (и даже настоящий
				Guinness!), ирландское меню, и, главный атрибут всех пабов, — живая
				музыка с приглашёнными ИНОСТРАННЫМИ артистами!
				<br />
				Настоящая Ирландия!
				<br /> <br />
				За малым исключением: Вы всё ещё в Сургуте.
				<br />
				Но посетить "Joint" всё же стоит — адрес ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{ paddingBottom: 0 }}>
			<Cell
				size='l'
				multiline
				before={<Icon28PlaceOutline height={24} width={24} />}
				description='12:00 - 00:00 (Пт, Сб — до 01:00, Вс — до 23:00)'>
				Ленина, 39
			</Cell>
			<Cell
				size='l'
				before={<Icon28MoneyCircleOutline height={24} width={24} />}>
				3000-3500₽
			</Cell>
			<Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>
				95-88-85
			</Cell>
			<Cell
				size='l'
				href='https://instagram.com/pub_joint'
				target='_blank'
				before={<Icon28LogoInstagram height={24} width={24} />}>
				@pub_joint
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
					defaultState={{ center: [61.254411, 73.388833], zoom: 17 }}
					width='90vw'
					height='60vh'>
					<Placemark
						defaultGeometry={[61.254411, 73.388833]}
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

export default Joint;
