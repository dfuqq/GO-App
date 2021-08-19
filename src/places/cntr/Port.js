import React, { Fragment } from 'react';
import { YMaps, Map, Placemark, Circle } from 'react-yandex-maps';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Cell,
	Group,
	Gallery,
	Separator,
} from '@vkontakte/vkui';

import Icon28PlaceOutline from '@vkontakte/icons/dist/28/place_outline';
import Icon24Link from '@vkontakte/icons/dist/24/link';
import Icon28LogoInstagram from '@vkontakte/icons/dist/28/logo_instagram';

const Port = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				"Порт"
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-62.userapi.com/_Y6s0d4D92hsMJYF7UMYR5bYc3bg3zZc7wiHPA/RXdg_kB9aMI.jpg'
					alt='Port'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-43.userapi.com/gbpmf37BbE9tCRwZqWR-d5KRIfYMwJ_Qv2d3gQ/DTUyiUiprU8.jpg'
					alt='Port'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-31.userapi.com/rmt9AiFaOZS_D6PdYqqNq1IDDXnToL8KvFTUCg/urAfTxYp2xA.jpg'
					alt='Port'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-28.userapi.com/yZvsBExoRG5A9CdzaVWx7PcqYQLduMYPw_3o2g/jr03MfYn4d8.jpg'
					alt='Port'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Обогащение культурных знаний горожан — вот главная цель культурного
				центра "Порт".
				<br />
				<br />
				В "Порту" часто проводятся дизайнерские выставки и арт-перфомансы, а
				также центр является площадкой для проведения образовательных программ и
				мастер-классов.
				<br />
				Предстоящие мероприятия можно узнать по ссылкам ниже.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell
					size='l'
					before={<Icon28PlaceOutline width={24} height={24} />}
					description='10:00 - 20:00 (Сб, Вс - с 12:00, Пн - выходной)'>
					Майская, 10
				</Cell>
				<Cell
					size='l'
					before={<Icon24Link />}
					href='https://portsurgut.ru'
					target='_blank'>
					portsurgut.ru
				</Cell>
				<Cell
					size='l'
					before={<Icon28LogoInstagram width={24} height={24} />}
					href='https://instagram.com/portsurgut'
					target='_blank'>
					@portsurgut
				</Cell>
			</Group>

			<Group
				style={{
					display: 'flex',
					justifyContent: 'center',
					paddingBottom: '12px',
				}}>
				<YMaps>
					<Map
						defaultState={{ center: [61.2505, 73.391285], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.2505, 73.391285]}
							defaultOptions={{
								preset: 'islands#blueLeisureCircleIcon',
								iconColor: '#000',
							}}
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
};

export default Port;
