'use client';

import React, { useEffect, useState } from 'react';

import { BusinessItem } from '../../../../../src/components/';

import { useParams } from 'next/navigation';
import { BusinessDTO } from '../../../../api/business/cafes/[nav]/route';

export default function CafeItemPage() {
	const { nav }: { nav: string } = useParams();
	const [restaraunt, setRestaraunt] = useState<BusinessDTO | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`/api/business/restaraunts/${nav}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.error) {
					console.error('Ошибка загрузки ресторана:', data.error);
				} else {
					setRestaraunt(data);
				}
			})
			.catch((err) => console.error('Ошибка запроса:', err))
			.finally(() => setLoading(false));
	}, [nav]);

	// TODO: ScreenSpinner
	if (loading) return <h1>loading</h1>;
	// TODO: 404 Page
	if (!restaraunt) return <h1>404 Not found</h1>;

	return (
		<BusinessItem
			nav={nav}
			business={restaraunt}
		/>
	);
}
