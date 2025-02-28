import { PlaceDTO } from '@/api/places/[area]/[nav]/route';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useGeolocation } from './use-geolocation';

export const usePlacesNav = () => {
	const [data, setData] = useState<PlaceDTO | null>(null);
	const { area, nav } = useParams<{ area: string; nav: string }>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`/api/places/${area}/${nav}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.error) {
					console.error('Ошибка загрузки места:', data.error);
				} else {
					setData(data);
				}
			})
			.catch((err) => console.error('Ошибка запроса:', err))
			.finally(() => setLoading(false));
	}, [area, nav]);

	const { geo, geoLoading } = useGeolocation();
	return { data, loading, geo, geoLoading };
};
