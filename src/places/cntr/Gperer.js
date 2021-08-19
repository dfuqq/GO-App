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

const Gperer = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				"Газпром Переработка"
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-34.userapi.com/NEjwxp1ZuW3Y-moWmmx7FOPhYoHmv6U7CxUG-Q/yf0OePzWg4w.jpg'
					alt='Gperer'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-73.userapi.com/VCYZNtNwkdYWQjkQFfLXzciJAhtInrj50AUTXw/6gArI6vVCjE.jpg'
					alt='Gperer'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-51.userapi.com/1h-alosf1QFdNdc_BfOPSxLgFcepy2CekyGVEA/BoU3zkQyRhY.jpg'
					alt='Gperer'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Недостроенный офис градообразующего предприятия "Газпром Переработка".
				<br />
				<br />
				Находится на улице университетской, около офиса "Газпром Трансгаз".
				<br />
				Работы по возведению начались в 2012 году, однако так и не были
				закончены. Сейчас решается вопрос о передаче здания в собственность
				города и дальнейшего благоустройства.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Университетская, 1
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
						defaultState={{ center: [61.245981, 73.404269], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.245981, 73.404269]}
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

export default Gperer;
