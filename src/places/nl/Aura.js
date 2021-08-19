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
import Icon24Recent from '@vkontakte/icons/dist/24/recent';
import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';
import Icon24Link from '@vkontakte/icons/dist/24/link';
import Icon24LogoInstagram from '@vkontakte/icons/dist/24/logo_instagram';

const Aura = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				ТЦ "Аура"
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-48.userapi.com/GWB2Ha6_qxndQEyvHITMjswIu8YY2CXKBjVYNg/qxU5yvsqgDA.jpg'
					alt='Aura'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-13.userapi.com/WHYUJkbx6GX-afITp4Rl3Gsow5ScyaIPwuZDQg/1DuU30mkJPQ.jpg'
					alt='Aura'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-64.userapi.com/Zb8oEwD1m_gARC0z35ATPEG218_qGEGAXyhtQg/WqGwuNaCUyo.jpg'
					alt='Aura'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-40.userapi.com/uVNtGP8rGJOTh7vaLK6NpEaYvZAG4AOBMim77g/51P_YPK_wz8.jpg'
					alt='Aura'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Один из самых популярных ТЦ Сургута.
				<br />
				<br />
				Удобное расположение на транспортной развязке среди застраивающегося
				района. Множество популярных магазинов и развлечений, постоянно
				проводятся мероприятия с коллективами города и проводятся розыгрыши
				ценных призов.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Нефтеюганское ш., 1
				</Cell>
				<Cell size='l' before={<Icon24Recent />}>
					Магазины: 10:00 - 22:00
					<br />
					"О'КЕЙ": 08:00 - 00:00
					<br />
					Кинотеатр "КАРО 8": 10:00 - 02:00 (Чт-Вс - до 03:00)
				</Cell>
				<Cell size='l' before={<Icon28InfoOutline width={24} height={24} />}>
					Есть паркинг
					<br />
					Есть велопарковка
					<br />
					Есть фудкорт
					<br />
					Есть парк развлечений
					<br />
					165 магазинов
				</Cell>
				<Cell
					size='l'
					before={<Icon24Link />}
					href='https://auramall.ru/surgut'
					target='_blank'>
					auramall.ru
				</Cell>
				<Cell
					size='l'
					before={<Icon24LogoInstagram />}
					href='https://instagram.com/surgutaura'
					target='_blank'>
					@surgutaura
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
						defaultState={{ center: [61.277623, 73.365511], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.277623, 73.365511]}
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

export default Aura;
