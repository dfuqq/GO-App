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

const Agora = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				ТЦ "Агора"
			</PanelHeader>

			<Gallery slideWidth='100%' style={{ height: 225 }} align='center'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-34.userapi.com/-rjCH2J2NNBQsaDLIFWZIYVnVnXUuNJQFoKyMQ/NQddH5eygvU.jpg'
					alt='Agora'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				ТЦ в северной части города.
				<br />
				<br />
				Современная торговая площадка с удобной транспортной и пешей
				доступностью.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Профсоюзов, 11
				</Cell>
				<Cell size='l' before={<Icon24Recent />}>
					Магазины: 10:00 - 22:00
					<br />
					"Перекрёсток": 09:00 - 23:00
				</Cell>
				<Cell size='l' before={<Icon28InfoOutline width={24} height={24} />}>
					Есть велопарковка
					<br />
					Есть парк развлечений
					<br />
					139 магазинов
				</Cell>
				<Cell
					size='l'
					before={<Icon24Link />}
					href='https://agoramall.ru'
					target='_blank'>
					agoramall.ru
				</Cell>
				<Cell
					size='l'
					before={<Icon24LogoInstagram />}
					href='https://instagram.com/agoramallsurgut'
					target='_blank'>
					@agoramallsurgut
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
						defaultState={{ center: [61.269404, 73.382013], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.269404, 73.382013]}
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

export default Agora;
