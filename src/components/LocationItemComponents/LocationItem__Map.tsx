'use client';
import React from 'react';

import { Group } from '@vkontakte/vkui';
import { YMaps, Map, Circle } from '@pbe/react-yandex-maps';
import { BusinessDTO } from '@/app/api/business/[type]/[nav]/route';
import { PlaceDTO } from '@/app/api/places/[area]/[nav]/route';
import { LocationItemMapPlacemarks } from './LocationItem__Map-Placemarks';

interface Props {
	geo: number[];
	item: BusinessDTO | PlaceDTO;
}

export const LocationItemMap = ({ item, geo }: Props) => {
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
						center: (item as BusinessDTO).geo,
						zoom: (item as BusinessDTO).zoom || 17,
					}}
					style={{ width: '100vw', height: '39vh' }}>
					<LocationItemMapPlacemarks item={item as BusinessDTO} />

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
