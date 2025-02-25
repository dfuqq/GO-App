'use client';

import React, { useEffect, useState } from 'react';

import { LocationItem } from '../../../../../src/components/';

import { useParams } from 'next/navigation';
import { BusinessDTO } from '../../../../api/business/[type]/[nav]/route';
import { ScreenSpinner } from '@vkontakte/vkui';

export default function BusinessItemPage() {
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
	}, [nav]);

	if (loading) return <ScreenSpinner />;
	// TODO: 404 Page
	if (!data) return <h1>404 Not found</h1>;

	return (
		<LocationItem
			nav={nav}
			item={data}
		/>
	);
}
