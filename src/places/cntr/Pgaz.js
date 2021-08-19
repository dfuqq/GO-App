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

const Pgaz = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				"Землякам-Газовикам"
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-13.userapi.com/YXdlD9vs0jmHfXWjWK3PdAuHJQzrR_gfX5T2Aw/26V_EDQntWc.jpg'
					alt='Pgaz'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-10.userapi.com/C0_7e422N7yU3NvnedWTTHaxVjNOMUoIFq26QA/vhOp0bakdiE.jpg'
					alt='Pgaz'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-39.userapi.com/EImnmcs8TTAWerixSCmyU9Rkc5vMs3b6ctHkng/sFxhyixhR6g.jpg'
					alt='Pgaz'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-20.userapi.com/qpdYyphp_7gHnTeIDCiaQxIyl6fkGRuTjFVqpg/YFpeRzkp9oo.jpg'
					alt='Pgaz'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Монумент в честь работников нефтяной и газовой промышленности.
				<br />
				Памятник показывает тяжёлую и слаженную работу нефтяников и газовиков,
				благодаря усилиям которых регион существует и продолжает развиваться.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Университетская, 1
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
						defaultState={{ center: [61.244592, 73.40411], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.244592, 73.40411]}
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

export default Pgaz;
