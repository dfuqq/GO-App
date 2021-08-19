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

const Rib = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				"Труженикам Рыбокомбината"
			</PanelHeader>

			<Gallery slideWidth='100%' style={{ height: 225 }} align='center'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-16.userapi.com/feqL3kYXtUKYm00cOax0t2kMifBo0EzkhQxj8g/T7Qlp7yZsl4.jpg'
					alt='Rib'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Барельеф в честь подвига сургутских рыбаков.
				<br />
				<br />
				Установлен в 1972 году на территории бывшего рыбокомбината. На монументе
				изображены солдат, рыбак и женщина-мать.
				<br />
				Во времена ВОВ большинство работников рыбоконсервного завода были
				отправлены на фронт, когда остальные работали не покладая рук на
				комбинате. Сургут был одним из главных поставщиков продовольствия на
				фронт, и в честь победы и был установлен памятник.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Около набережной Речпорта
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
						defaultState={{ center: [61.230852, 73.468635], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.230852, 73.468635]}
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

export default Rib;
