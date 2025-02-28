import { BusinessDTO } from '@/app/api/business/[type]/[nav]/route';
import { Placemark } from '@pbe/react-yandex-maps';
import React from 'react';

interface Props {
	item: BusinessDTO;
}

export const LocationItemMapPlacemarks = ({ item }: Props) => {
	return (
		<>
			{item.placemarks.length > 0 ?
				item.placemarks.map((placemark) => (
					<Placemark
						key={placemark.id}
						defaultGeometry={[
							placemark.latitude,
							placemark.longitude,
						]}
						defaultOptions={{
							preset: 'islands#circleIcon',
							iconColor: '#000',
						}}
					/>
				))
			:	<Placemark
					defaultGeometry={item.geo}
					defaultOptions={{
						preset: 'islands#circleIcon',
						iconColor: '#000',
					}}
				/>
			}
		</>
	);
};
