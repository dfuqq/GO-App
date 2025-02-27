'use client';
import { useState } from 'react';

export const getGeolocation = () => {
	const [geo, setGeo] = useState<number[]>(null);
	const [geoLoading, setGeoLoading] = useState(true);

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				setGeo([position.coords.latitude, position.coords.longitude]);
				setGeoLoading(false);
			},
			(error) => {
				console.error(error);
				console.error(error.message);
				console.error(error.code);
				setGeoLoading(false);
			},
			{ timeout: 10000 }
		);
	}

	return { geo, geoLoading };
};
