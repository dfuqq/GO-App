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

const Lis = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				Памятник "Чёрному Лису"
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-54.userapi.com/tDzuzd0XAg9y9zyKyomVL5dDP9egguUuCNQr-A/EtyG_9Izghk.jpg'
					alt='Lis'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-58.userapi.com/kXCjTXITT5Z2hdjETA-mGatljnZGWz9_wwjJIg/53Np3bnQXSE.jpg'
					alt='Lis'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Скульптура в честь символа города.
				<br />
				<br />
				Установлена в 2006 году. Создавалась в Международном центре культуры и
				искусства Санкт-Петербурга и представляет из себя бронзовую лису длиной
				2,4 метра, прыгающую по горам.
				<br />В основе лежит легенда о всаднике, что в образе лисы спустился с
				небес и стал покровителем Сургута. Примечательно, что чёрные лисы раньше
				действительно водились на территории округа, но из-за обильного отлова
				до наших дней не дожили.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Энергетиков, 2
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
						defaultState={{ center: [61.236745, 73.407073], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.236745, 73.407073]}
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

export default Lis;
