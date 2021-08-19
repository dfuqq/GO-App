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

const Pgeo = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				Парк "Геологов"
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-21.userapi.com/Pj_0u07IwTzhYZapjcjQwfafKAVUHWpH47xZuA/43nD-BpQBig.jpg'
					alt='Pgeo'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-58.userapi.com/NQ2ztDXyfe67eXTGHVzwFTen0Hb0K6kwKhbiFg/MxGF5GtylKs.jpg'
					alt='Pgeo'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Крупный парк у берега пойменной части Оби.
				<br />
				<br />
				Площадь парка 5,1 га. Он протянут вдоль всего берега, позволяя неспешно
				прогуляться, наслаждаясь свежим воздухом.
				<br />
				На территории есть скамейки, светильники и клумбы, а также пара
				монументов: памятник первым комсомольцам города и мемориал
				геологоразведчикам.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Мелик-Карамова, 92
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
						defaultState={{ center: [61.23631, 73.42537], zoom: 16.5 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.23631, 73.42537]}
							defaultOptions={{
								preset: 'islands#blueVegetationCircleIcon',
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

export default Pgeo;
