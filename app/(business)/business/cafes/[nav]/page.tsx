'use client';

import React, { useEffect, useState } from 'react';

import { BusinessItem } from '../../../../../src/components/';

import { useParams } from 'next/navigation';
import { BusinessDTO } from '../../../../api/business/cafes/[nav]/route';
import { ScreenSpinner } from '@vkontakte/vkui';

export default function CafeItemPage() {
	const { nav }: { nav: string } = useParams();
	const [cafe, setCafe] = useState<BusinessDTO | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`/api/business/cafes/${nav}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.error) {
					console.error('Ошибка загрузки кафе:', data.error);
				} else {
					setCafe(data);
				}
			})
			.catch((err) => console.error('Ошибка запроса:', err))
			.finally(() => setLoading(false));
	}, [nav]);

	if (loading) return <ScreenSpinner />;
	// TODO: 404 Page
	if (!cafe) return <h1>404 Not found</h1>;

	return (
		<BusinessItem
			nav={nav}
			business={cafe}
		/>
	);
}
