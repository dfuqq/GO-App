'use client';
import React from 'react';

import { Group } from '@vkontakte/vkui';
import { YMaps, Map, Placemark, Circle } from '@pbe/react-yandex-maps';

interface Props {
	geo: number[];
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
					defaultState={{
						center: [61.247272, 73.405787],
						zoom: 17,
					}}
					style={{ width: '100vw', height: '39vh' }}>
					<Placemark
						defaultGeometry={[61.247272, 73.405787]}
						defaultOptions={{
							preset: 'islands#circleIcon',
							iconColor: '#000',
						}}
					/>
					{geo !== null && (
						<>
							<Circle
								defaultGeometry={[[geo[0], geo[1]], 200]}
								options={{
									draggable: false,
									fillColor: 'rgba(0, 0, 0, 0.5)',
									strokeColor: '#000',
									strokeOpacity: 0.8,
									strokeWidth: 2,
								}}
							/>
						</>
					)}
				</Map>
			</YMaps>
		</Group>
	);
};
