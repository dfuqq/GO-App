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

const Snezh = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				Стадион "Снежинка"
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-37.userapi.com/P1Z8YWgxarg6k2m4MmLtpiLS1kJhgE_l2wYTeA/wnZMENCqniU.jpg'
					alt='Snezh'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun3-12.userapi.com/J4sArlyWhlO4H5QR9u6kNZuAvPGQxhAUAtfGQQ/VU6V_k8TY1g.jpg'
					alt='Snezh'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-60.userapi.com/YqNzqBwNr3PWvshEhE3UH4oXuQKMVsjUrnHuUw/SOxmVMtJ1Z8.jpg'
					alt='Snezh'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Главный спортивный стадион города.
				<br />
				<br />
				Функционирует круглый год, летом работают футбольное поле и беговые
				дорожки. Есть лыжероллерная трасса на 3 км и 5 км. Также расположены
				спортивные и детские площадки, каток и турники.
				<br />
				Работает аренда оборудования.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Югорский тр-т, 8
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
						defaultState={{ center: [61.265576, 73.344545], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.265576, 73.344545]}
							defaultOptions={{
								preset: 'islands#blueRunCircleIcon',
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

export default Snezh;
