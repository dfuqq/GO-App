'use client';
import React, { useEffect, useState } from 'react';

import { Panel, ScreenSpinner } from '@vkontakte/vkui';
import { LocationsList, Disclaimer, PanHead } from '.';

import { Business } from '@prisma/client';

interface Props {
	nav: string;
}

export const Restaraunts = ({ nav }: Props) => {
	const [data, setData] = useState<Business[]>([]);
	const [loading, setLoading] = useState(true);

	// Получаем данные с сервера через API
	useEffect(() => {
		fetch('/api/business?type=Restaraunt')
			.then((res) => res.json())
			.then((data) => setData(data))
			.catch((err) => console.error('Ошибка загрузки ресторана:', err))
			.finally(() => setLoading(false));
	}, []);

	return (
		<Panel nav={nav}>
			<PanHead title='Рестораны' />

			{loading && <ScreenSpinner />}

			{data.map((restaraunt: Business) => (
				<LocationsList
					category='restaraunts'
					business={restaraunt}
					key={restaraunt.slug}
				/>
			))}

			<Disclaimer />
		</Panel>
	);
};
