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

const Budda = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				Памятник Будде
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-25.userapi.com/lCSiK8ozCnjxRal1GcDlRD4JoMk0mAGyXD3tUg/SeOyONVF3OY.jpg'
					alt='Budda'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-19.userapi.com/Qvcx02RfLeip9tjQBFK91DmVXHTZYMg5vyw9WQ/Coj0O2wrppE.jpg'
					alt='Budda'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-56.userapi.com/VZMYtw_K_7Z1Nmb6MhHfXqfYeCvIsV0X6UGREw/C3A87SXbUn0.jpg'
					alt='Budda'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Монумент в честь основателя буддизма.
				<br />
				<br />
				Установлен в 2014 году руководителем организации "Правоведы" Альбертом
				Леоновым. Представляет из себя небольшой участок, оформленный как
				молитвенное место.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Мелик-Карамова, 28/1
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
						defaultState={{ center: [61.231552, 73.456934], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.231552, 73.456934]}
							defaultOptions={{
								preset: 'islands#blueObservationCircleIcon',
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

export default Budda;
