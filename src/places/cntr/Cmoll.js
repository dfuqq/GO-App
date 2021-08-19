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
import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';
import Icon24Recent from '@vkontakte/icons/dist/24/recent';
import Icon24Link from '@vkontakte/icons/dist/24/link';
import Icon24LogoInstagram from '@vkontakte/icons/dist/24/logo_instagram';

const Cmoll = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				ТЦ "Сити Молл"
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-24.userapi.com/j08i4ETjmTAiAWIWkNUZldGQQRkx37LoJW_vJg/m9Q5B6jQNCc.jpg'
					alt='Cmoll'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-66.userapi.com/9On4QLShOXc9vp1Oy7oZCaTG0rcZItX4fabIig/pf6aBy5nHZw.jpg'
					alt='Cmoll'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-53.userapi.com/l2ZA98yCowErMAs-Q6NCLGWN1lcAR7kv-oBkkg/HZTRET6SnRg.jpg'
					alt='Cmoll'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Один из самых популярных ТЦ Сургута.
				<br />
				<br />
				Расположился в юго-западной части города, на территории объездной
				дороги, позволяющей удобно добраться из любой точки города.
				<br />
				Внутри размещены множество магазинов и развлечений, в числе которых
				каток, парк аттракционов и огромный фудкорт. Кроме того, в ТЦ регулярно
				проводятся развлекательные мероприятия.
				<br />
				Есть крупные строительные гипермаркеты "OBI" и "Hoff".
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Югорский тр-т, 38
				</Cell>
				<Cell size='l' before={<Icon24Recent />}>
					Магазины: 10:00 - 22:00
					<br />
					"О'КЕЙ": 09:00 - 23:00
					<br />
					"ОБИ": 07:00 - 22:00
				</Cell>
				<Cell size='l' before={<Icon28InfoOutline width={24} height={24} />}>
					Есть подземный паркинг
					<br />
					Есть велопарковка
					<br />
					Есть фудкорт
					<br />
					Есть парк развлечений
					<br />
					174 магазинов
				</Cell>
				<Cell
					size='l'
					before={<Icon24Link />}
					href='https://surgutmall.ru'
					target='_blank'>
					surgutmall.ru
				</Cell>
				<Cell
					size='l'
					before={<Icon24LogoInstagram />}
					href='https://instagram.com/surgutcitymall'
					target='_blank'>
					@surgutcitymall
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
						defaultState={{ center: [61.240184, 73.375458], zoom: 16 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.240184, 73.375458]}
							defaultOptions={{
								preset: 'islands#blueShoppingCircleIcon',
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

export default Cmoll;
