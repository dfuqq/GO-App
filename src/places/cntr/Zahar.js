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

const Zahar = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				Памятник Ивану Захарову
			</PanelHeader>

			<Gallery slideWidth='100%' style={{ height: 225 }} align='center'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-24.userapi.com/WVRuz65xjAuVsP4Fpq1D8lMcIdPsL4DZ_Aqf-A/NIGx0MBGe5Q.jpg'
					alt='Zahar'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Памятник местному журналисту и краеведу.
				<br />
				<br />
				Установлен в 2012 году. Иван Захаров — почётный гражданин города,
				журналист и краевед. Он стал организатором журналистской организации и
				организации ветеранов Сургута, стоял у истоков краеведческого музея.
				<br />
				Иван Захаров буквально творил и писал всю историю Сургута.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Бульвар Свободы, 1
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
						defaultState={{ center: [61.24847, 73.40222], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.24847, 73.40222]}
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

export default Zahar;
