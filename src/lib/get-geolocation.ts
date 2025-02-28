'use client';
import { useEffect, useState } from 'react';

export const getGeolocation = () => {
	const [geo, setGeo] = useState<number[] | null>(null);
	const [geoLoading, setGeoLoading] = useState(true);
	const [geoError, setGeoError] = useState(false);

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setGeo([
						position.coords.latitude,
						position.coords.longitude,
					]);
					setGeoLoading(false);
				},
				(error) => {
					console.error(error.message, error.code);
					setGeoError(true);
				}
			);
		}
	}, []);
	return { geo, geoLoading, geoError };
};
