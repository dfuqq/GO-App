import { BusinessDTO } from '@/api/business/[type]/[nav]/route';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getGeolocation } from '../lib';

export const useBusiness = () => {
	const [data, setData] = useState<BusinessDTO | null>(null);
	const { type, nav } = useParams<{ type: string; nav: string }>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`/api/business/${type}/${nav}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.error) {
					console.error('Ошибка загрузки бизнеса:', data.error);
				} else {
					setData(data);
				}
			})
			.catch((err) => console.error('Ошибка запроса:', err))
			.finally(() => setLoading(false));
	}, []);

	const { geo, geoLoading, geoError } = getGeolocation();

	return { data, loading, nav, geo, geoLoading, geoError };
};
