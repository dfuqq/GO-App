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

const Surgu = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				Университет
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-29.userapi.com/EFBUEtzWxe_YdCDgDu-OZOZcwSU6jfWirliIEA/nK6gdhBuNy0.jpg'
					alt='Surgu'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-35.userapi.com/gqDZZgD190mvJ9mYUlN1WL7oaPAeMkpyD2lihw/bim-c4ZOnw0.jpg'
					alt='Surgu'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-64.userapi.com/5QspmNPWP1lqgXLjTzodu2yNffMsfscRkF-XKQ/u-zSdE8YiLo.jpg'
					alt='Surgu'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				"СурГУ" — Сургутский государственный университет. Основан 26 мая 1993
				года.
				<br />
				<br />
				На территории расположились большая площадь со скамейками, площадь для
				проведения мероприятий, а также набережная для прогулок.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Ленина, 1
				</Cell>
				<Cell
					size='l'
					before={<Icon24Link />}
					href='https://surgu.ru'
					target='_blank'>
					surgu.ru
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
						defaultState={{ center: [61.240115, 73.410676], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.240115, 73.410676]}
							defaultOptions={{
								preset: 'islands#blueEducationCircleIcon',
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

export default Surgu;
