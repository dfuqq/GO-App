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

const Bben = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				Биг-Бен
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-58.userapi.com/hiQk7erft33UbSJ_MgIdQTfPgp_UJg15ZhgCGw/VCBPgru7xQI.jpg'
					alt='Bben'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-7.userapi.com/hkB1l-F3Uf91mVYxBwtkmlqyEg8YfYKIydAGvg/hr0eIyqWCiQ.jpg'
					alt='Bben'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-39.userapi.com/77Ze1l1BtV-1eYUI6QTmQtHP2gsaLWAknjjBvA/SnEAeUpmyX4.jpg'
					alt='Bben'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-24.userapi.com/TwoKd-veFqaXpLdF027kMlDbpEBPqV0teajJPA/FzxIYUgkx8s.jpg'
					alt='Bben'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Сургутский Биг-Бен на самом деле является школой для изучения
				иностранных языков.
				<br />
				<br />
				Хоть и очевидно, что Сургутский Биг-Бен не полностью повторяет свой
				английский оригинал, он всё равно является самой точной копией здания в
				мире.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Островского, 8/1
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
						defaultState={{ center: [61.256427, 73.398498], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.256427, 73.398498]}
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

export default Bben;
