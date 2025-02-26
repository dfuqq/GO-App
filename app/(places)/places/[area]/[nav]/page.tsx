'use client';

import React, { useEffect, useState } from 'react';

import { useParams } from 'next/navigation';
import { PlaceDTO } from '../../../../../app/api/places/[area]/[nav]/route';
import { LocationItem } from '../../../../../src/components';
import { ScreenSpinner } from '@vkontakte/vkui';

export default function PlaceItemPage() {
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
	}, []);

	if (loading) return <ScreenSpinner />;
	// TODO: 404 Page
	if (!data) return <h1>404 Not found</h1>;

	return (
		<LocationItem
			nav={data.slug}
			item={data}
		/>
	);
}
