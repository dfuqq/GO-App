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

const Poezd = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				"Первому поезду"
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-37.userapi.com/Fi3amX5XhgQGTk7IupmerFcS4RtvNboRpi0P7g/uW25CBu9UnE.jpg'
					alt='Poezd'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-15.userapi.com/gmDpn5fxKPVQBoK_KxxM4MOtuvhhU3uGuRiXgA/PnYzvXW8C0o.jpg'
					alt='Poezd'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Памятник в честь освоения ЖД путей Севера.
				<br />
				<br />
				До 1975 года в город можно было попасть только самолётом или кораблём. В
				1975 году, после долгих работ по прокладке ЖД путей, в Сургут прибыл
				первый тепловоз, который и установлен ныне на постаменте.
				<br />
				Прибытие тепловоза ознаменовало новую веху в развитии транспортных
				связей на Севере и ускорило развитие нефтяных месторождений.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Привокзальная, 23
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
						defaultState={{ center: [61.290007, 73.326395], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.290007, 73.326395]}
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

export default Poezd;
