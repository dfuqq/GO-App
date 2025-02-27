import { Business } from '@prisma/client';
import { useEffect, useState } from 'react';

export const useBusinessType = (type: string, searchType: string) => {
	const [data, setData] = useState<Business[]>([]);
	const [loading, setLoading] = useState(true);

	// TODO: custom Hook Services
	useEffect(() => {
		fetch(`/api/business?type=${searchType}`)
			.then((res) => res.json())
			.then((data) => setData(data))
			.catch((err) => console.error(`Ошибка загрузки ${type}:`, err))
			.finally(() => setLoading(false));
	}, []);

	return { data, loading };
};
