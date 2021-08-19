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

const Kedr = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				Кедровый Лог
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-72.userapi.com/a1_daRZEBYcC6TbyFvQZvgLID8HunhR35naoNw/e5fhVHXzSIA.jpg'
					alt='Kedr'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-29.userapi.com/AjUF4KObZ3nqElOR_Eu26fJgmV04ZhLxupiqRQ/7LEUZxruwxE.jpg'
					alt='Kedr'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-50.userapi.com/jBx5bnZopGwAZ0J2g82gYTqnqutwHYHB7nlcVA/kLFc9Kk21DI.jpg'
					alt='Kedr'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-15.userapi.com/1TUOaK2q6scGhW45_0nk4xdlsIbauz-94g-Q6g/k6CM53CuSzY.jpg'
					alt='Kedr'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Ещё один главный парк Сургута.
				<br />
				<br />
				На лесном участке площадью более 60 гектаров раскинулись многочисленные
				детские площадки и скамейки. Парк очень живописный и подходит для
				приятных прогулок в любое время года.
				<br />В 2019 году начались работы по реконструкции парка, в результате
				которых в парке появилась новая световая аллея для прогулок, амфитеатр и
				парковка для автомобилей. Работы по преображению всё ещё продолжаются, и
				в будущем власти планируют сделать парк местом притяжения всех горожан.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					пр. Набережный, 39/1
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
						defaultState={{ center: [61.263364, 73.352052], zoom: 15 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.263364, 73.352052]}
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

export default Kedr;
