'use client';
import React, { useEffect, useState } from 'react';

import { Panel, ScreenSpinner } from '@vkontakte/vkui';
import { BusinessesList, Disclaimer, PanHead } from './';
import { Business } from '@prisma/client';

interface Props {
	nav: string;
}

export const Bars = ({ nav }: Props) => {
	const [data, setData] = useState<Business[]>([]);
	const [loading, setLoading] = useState(true);

	// Получаем данные с сервера через API
	useEffect(() => {
		fetch('/api/business/bars')
			.then((res) => res.json())
			.then((data) => setData(data))
			.catch((err) => console.error('Ошибка загрузки кафе:', err))
			.finally(() => setLoading(false));
	}, []);

	return (
		<Panel nav={nav}>
			<PanHead title='Бары' />

			{loading && <ScreenSpinner />}

			{data.map((bar: Business) => (
				<BusinessesList
					category='bars'
					business={bar}
					key={bar.slug}
				/>
			))}

			<Disclaimer />
		</Panel>
	);
};
