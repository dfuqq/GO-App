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

const Chaes = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				"Памяти Чернобыльцев"
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-36.userapi.com/SwG7D0iOxm-SxDp8QQpa4pnJllUSaxRhPmI2MQ/WU1A0RCd7dQ.jpg'
					alt='Chaes'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-31.userapi.com/r-GzbOHVWHrKVuyxHWdBX8mJgZGV0MTZEgbBcQ/YsMiGIGlvhg.jpg'
					alt='Chaes'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Посвящён участникам ликвидации аварии на ЧАЭС.
				<br />
				<br />
				Открыт в 2011 году по инициативе Сургутской организации "Ветераны
				Чернобыля". Во время аварии добровольцы со всего СССР вызвались помогать
				в ликвидации последствий, и многие ликвидаторы вернулись и проживают в
				Сургуте по сей день.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Чехова, 3
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
						defaultState={{ center: [61.26487, 73.375776], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.26487, 73.375776]}
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

export default Chaes;
