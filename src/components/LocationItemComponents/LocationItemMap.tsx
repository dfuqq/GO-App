import React, { Fragment } from 'react';

import { Group } from '@vkontakte/vkui';
import { YMaps, Map, Placemark, Circle } from '@pbe/react-yandex-maps';

interface Props {
	geo: [number, number];
}

export const LocationItemMap = ({ geo }: Props) => {
	return (
		<Group
			style={{
				display: 'flex',
				justifyContent: 'center',
				paddingBottom: '12px',
			}}>
			<YMaps>
				<Map
					defaultState={{ center: [61.247272, 73.405787], zoom: 17 }}
					width='90vw'
					height='60vh'>
					<Placemark
						defaultGeometry={[61.247272, 73.405787]}
						defaultOptions={{
							preset: 'islands#circleIcon',
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
	);
};
