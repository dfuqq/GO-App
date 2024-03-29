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

const Sgeo = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				Геологов-Первопроходцев
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-9.userapi.com/lEmGl7Atp6TCkoj6Kp_vhTwRM3fgDYPip53agw/SKIbzTfJt-Q.jpg'
					alt='Sgeo'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-34.userapi.com/k0Xp5J6nQfl_Nqky9uGORCpDhZ4ACSQP3fSe1A/aI8npsjhlO8.jpg'
					alt='Sgeo'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-23.userapi.com/_io7S-R0B_pZAXK20dkLM0LwS-JIvnLek6KH3g/LWbqNtLh26A.jpg'
					alt='Sgeo'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Небольшой сквер в восточном районе города.
				<br />
				<br />
				Площадь 1,3 гектара была обустроена в 2007 году. На её территории
				находятся несколько детских площадок, площадка для локальных мероприятий
				и карманы со скамейками.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Фёдорова, 5/2
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
						defaultState={{ center: [61.237606, 73.43607], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.237606, 73.43607]}
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

export default Sgeo;
