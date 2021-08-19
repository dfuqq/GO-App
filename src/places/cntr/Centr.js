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

const Centr = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				ТЦ "City Centre"
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-44.userapi.com/aS9KQJV_eHhFXpHOrZ3NlQo8L7cisE68vIJzAQ/-Ut1ls94JT0.jpg'
					alt='Centr'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-51.userapi.com/HYFEGSwPkzkt57tN_VGtqr-M6E3na9BOQBq6cA/ftajJjD5PUY.jpg'
					alt='Centr'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Одна из самых узнаваемых точек города.
				<br />
				<br />
				Расположен в самом центре города. В своих стенах содержит магазины,
				рестораны и кафе, а также гостиницу, конференц-зал и банкетный зал на
				верхних этажах.
				<br />
				Кроме того, здесь функционирует один из популярных кинотеатров города.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Ленина, 43
				</Cell>
				<Cell
					size='l'
					before={<Icon24Link />}
					href='https://surgutgazstroy.ru/projects/completed/city_centre'
					target='_blank'>
					surgutgazstroy.ru
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
						defaultState={{ center: [61.25498, 73.383811], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.25498, 73.383811]}
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

export default Centr;
