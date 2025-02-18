'use client';
import React, { useEffect, useState } from 'react';

import { Panel } from '@vkontakte/vkui';
import { BusinessesList, Disclaimer, PanHead } from './';
import { Business } from '@prisma/client';

interface Props {
	nav: string;
}

export const Bars = ({ nav }: Props) => {
	const [data, setData] = useState<Business[]>([]);

	// Получаем данные с сервера через API
	useEffect(() => {
		fetch('/api/business/bars')
			.then((res) => res.json())
			.then((data) => setData(data))
			.catch((err) => console.error('Ошибка загрузки кафе:', err));
	}, []);

	return (
		<Panel nav={nav}>
			<PanHead title='Бары' />

			{data.map((bar: Business) => (
				<BusinessesList
					business={bar}
					key={bar.slug}
				/>
			))}

			<Disclaimer />
		</Panel>
	);
};
