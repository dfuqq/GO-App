'use client';
import React, { useEffect, useState } from 'react';

import { Panel } from '@vkontakte/vkui';
import { BusinessesList, Disclaimer, PanHead } from './';
import { Business } from '@prisma/client';

interface Props {
	nav: string;
}

export const Hookah = ({ nav }: Props) => {
	const [data, setData] = useState<Business[]>([]);

	// Получаем данные с сервера через API
	useEffect(() => {
		fetch('/api/business/hookahs')
			.then((res) => res.json())
			.then((data) => setData(data))
			.catch((err) => console.error('Ошибка загрузки кальянной:', err));
	}, []);

	return (
		<Panel nav={nav}>
			<PanHead title='Кальянные' />

			{data.map((hookah: Business) => (
				<BusinessesList
					business={hookah}
					key={hookah.slug}
				/>
			))}

			<Disclaimer />
		</Panel>
	);
};
