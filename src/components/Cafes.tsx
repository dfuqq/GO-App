'use client';
import { useEffect, useState } from 'react';

import { Panel } from '@vkontakte/vkui';

import { BusinessesList, Disclaimer, PanHead } from '.';

import { Business } from '@prisma/client';

interface Props {
	nav: string;
}

export const Cafes = ({ nav }: Props) => {
	const [data, setData] = useState<Business[]>([]);

	// Получаем данные с сервера через API
	useEffect(() => {
		fetch('/api/business/cafes')
			.then((res) => res.json())
			.then((data) => setData(data))
			.catch((err) => console.error('Ошибка загрузки кафе:', err));
	}, []);

	return (
		<Panel nav={nav}>
			<PanHead title='Кафе' />

			{data.map((cafe: Business) => (
				<BusinessesList
					business={cafe}
					key={cafe.slug}
				/>
			))}

			<Disclaimer />
		</Panel>
	);
};
