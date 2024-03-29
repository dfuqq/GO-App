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

const Sdet = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				Сквер "Детства"
			</PanelHeader>

			<Gallery slideWidth='100%' style={{ height: 225 }} align='center'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-34.userapi.com/-rjCH2J2NNBQsaDLIFWZIYVnVnXUuNJQFoKyMQ/NQddH5eygvU.jpg'
					alt='Sdet'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Один из самых известных скверов Сургута.
				<br />
				<br />
				Расположен на территории бывшего кинотеатра "Аврора". На площади 1,2
				гектара расположились оригинальные скамейки, стелла "Аврора", а также
				фигуры персонажей детских мультиков из декоративных растений.
				<br />
				Зимой на территории сквера устанавливают зимний городок с ледяными
				горками и фигурами, доступный всем желающим.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Ленина, 47
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
						defaultState={{ center: [61.257456, 73.379884], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.257456, 73.379884]}
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

export default Sdet;
