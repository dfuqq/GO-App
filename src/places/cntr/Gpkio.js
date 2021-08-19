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

const Gpkio = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				Парк культуры
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-20.userapi.com/ivpAiL5Al_aE300lI8qpRWs65N5H5svIEaFdIg/EuS7FjEjwAQ.jpg'
					alt='Gpkio'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-31.userapi.com/-gHL7TqbERPCGWzUU3wg7hVzRRereT9b7-E4SA/gwgAkmRAAGg.jpg'
					alt='Gpkio'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-11.userapi.com/yBl-39bihjws-FJKIw9PkoCB8UvXIEF3YxsAnw/IPaOVEmdvaw.jpg'
					alt='Gpkio'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Один из первых и самых известных парков Сургута.
				<br />
				<br />
				На территории расположены детские аттракционы, а также спортивные
				площадки. Помимо этого, можно погулять в лесу и насладиться свежим
				воздухом.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Набережный, 37
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
						defaultState={{ center: [61.259802, 73.356071], zoom: 16.7 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.259802, 73.356071]}
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

export default Gpkio;
