import { BusinessDTO } from '@/app/api/business/[type]/[nav]/route';
import { PlaceDTO } from '@/app/api/places/[area]/[nav]/route';
import { getIsBusiness } from '@/src/lib/get-is-business';
import { Placemark } from '@pbe/react-yandex-maps';
import React from 'react';

interface Props {
	item: BusinessDTO | PlaceDTO;
}

export const LocationItemMapPlacemarks = ({ item }: Props) => {
	return (
		<>
			{getIsBusiness(item) && item.placemarks.length > 0 ?
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
