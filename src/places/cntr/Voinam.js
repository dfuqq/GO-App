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

const Voinam = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				"Воинам-Интернационалистам"
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-73.userapi.com/bhyoOd2Bn07QaTM02cDW2MqsARBok37d3PF0CQ/O2TwELVE0Ds.jpg'
					alt='Voinam'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-43.userapi.com/ZBChHa1pULuaMd-FfpdjMHiimEzEIgc1giCfVg/SzfbpuTLNwY.jpg'
					alt='Voinam'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Монумент героически погибшим при исполнении служебного долга.
				<br />
				<br />
				Установлен в 1998 году. Инициатива организации ветеранов-афганцев
				"Саланг", а создан памятник на пожертвования от предприятий и граждан.
				<br />
				Сам памятник представляет из себя изображение раненного воина,
				пытающегося подняться, сдерживая автомат в руках. Позади воина находится
				стена в виде горы, а по бокам расположены мраморные доски с данными
				погибших военных.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Энергетиков, у сквера "Центральный"
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
						defaultState={{ center: [61.249387, 73.392855], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.249387, 73.392855]}
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

export default Voinam;
