'use client';
import React, { useEffect, useState } from 'react';

import { Panel, ScreenSpinner } from '@vkontakte/vkui';
import { LocationsList, Disclaimer, PanHead } from './';
import { Business } from '@prisma/client';

interface Props {
	nav: string;
}

export const Hookah = ({ nav }: Props) => {
	const [data, setData] = useState<Business[]>([]);
	const [loading, setLoading] = useState(true);

	// Получаем данные с сервера через API
	useEffect(() => {
		fetch('/api/business?type=Hookah')
			.then((res) => res.json())
			.then((data) => setData(data))
			.catch((err) => console.error('Ошибка загрузки кальянной:', err))
			.finally(() => setLoading(false));
	}, []);

	return (
		<Panel nav={nav}>
			<PanHead title='Кальянные' />

			{loading && <ScreenSpinner />}

			{data.map((hookah: Business) => (
				<LocationsList
					category='hookahs'
					business={hookah}
					key={hookah.slug}
				/>
			))}

			<Disclaimer />
		</Panel>
	);
};
