'use client';
import React, { useEffect, useState } from 'react';

import { Panel } from '@vkontakte/vkui';
import { BusinessesList, Disclaimer, PanHead } from '.';

import { Business } from '@prisma/client';

interface Props {
	nav: string;
}

export const Restaraunts = ({ nav }: Props) => {
	const [data, setData] = useState<Business[]>([]);

	// Получаем данные с сервера через API
	useEffect(() => {
		fetch('/api/business/restaraunts')
			.then((res) => res.json())
			.then((data) => setData(data))
			.catch((err) => console.error('Ошибка загрузки ресторана:', err));
	}, []);

	return (
		<Panel nav={nav}>
			<PanHead title='Рестораны' />

			{data.map((restaraunt: Business) => (
				<BusinessesList
					business={restaraunt}
					key={restaraunt.slug}
				/>
			))}

			<Disclaimer />
		</Panel>
	);
};
