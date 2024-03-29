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

const Repres = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				"Жертвам Репрессий"
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-16.userapi.com/PzREx5XViVODfO5KVb9dAh0TkcO6WfA20JBKeQ/JdY8i-rzjB0.jpg'
					alt='Repres'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-73.userapi.com/FIGV7WYe33YcpHZRsYJzVuPgeDyhH0k7KUP1lA/Tg2jXDWMe4U.jpg'
					alt='Repres'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-49.userapi.com/YxZQQS9HFVWRGBGNgd-q9zI4gjfTJ2WgkJWbfg/kPAWLLu9-TQ.jpg'
					alt='Repres'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Монумент в честь "спецпереселенцев".
				<br />
				<br />
				Установлен в 2018 году на Набережной — место, откуда все переселенцы
				прибывали в Сургут.
				<br />
				Главной целью является сохранение памяти о людях, что помогали
				отстраивать город, а в непростое военное время и поддерживали его
				жизнеспособность.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Набережная речпорта
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
						defaultState={{ center: [61.229249, 73.46959], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.229249, 73.46959]}
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

export default Repres;
