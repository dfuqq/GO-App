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

const Sener = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				Сквер "Энергетиков"
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-53.userapi.com/LQawomsbqHq5hkdu7fKnNRSLdS8NXUcCvcXCIg/y8FvUOv_K4w.jpg'
					alt='Sener'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-36.userapi.com/RCvUPmGA067ASIRBUiaJwgH_3UV7SFqQ4GMzuQ/8Sk02JVkxu4.jpg'
					alt='Sener'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-66.userapi.com/zCyclEpXn57r8AS_BoaX9pgYjkEObOf4YtMllw/D84o0xl_mdg.jpg'
					alt='Sener'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-24.userapi.com/HWVr871uGRwHHt9rIbfEwfIQ6pA5t1VUMs6xAg/rl9Q3votJZQ.jpg'
					alt='Sener'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-69.userapi.com/rbyj_9P2MtpUzi_2CJmWW0bojycYLHd1qM_2WQ/6Z0_vuQg80c.jpg'
					alt='Sener'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Сказочный мир.
				<br />
				<br />
				Ранее носил название "Детский парк", а после был переименован в "Сквер
				Энергетиков им. В.Г. Губачева". По территории разбросаны памятники из
				детских сказок и детские площадки. Кроме того, предусмотрены скамейки
				для отдыха.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Энергетиков, 53А
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
						defaultState={{ center: [61.247317, 73.391106], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.247317, 73.391106]}
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

export default Sener;
