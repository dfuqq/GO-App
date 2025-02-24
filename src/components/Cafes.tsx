'use client';
import { useEffect, useState } from 'react';

import { Group, Panel, ScreenSpinner } from '@vkontakte/vkui';

import { BusinessesList, Disclaimer, PanHead } from '.';

import { Business } from '@prisma/client';

interface Props {
	nav: string;
}

export const Cafes = ({ nav }: Props) => {
	const [data, setData] = useState<Business[]>([]);
	const [loading, setLoading] = useState(true);

	// Получаем данные с сервера через API
	// TODO: custom Hook Services
	useEffect(() => {
		fetch('/api/business/cafes')
			.then((res) => res.json())
			.then((data) => setData(data))
			.catch((err) => console.error('Ошибка загрузки кафе:', err))
			.finally(() => setLoading(false));
	}, []);

	return (
		<Panel nav={nav}>
			<PanHead title='Кафе' />

			{loading && <ScreenSpinner />}

			{!loading && (
				<Group>
					{data.map((cafe: Business) => (
						<BusinessesList
							category='cafes'
							business={cafe}
							key={cafe.slug}
						/>
					))}
				</Group>
			)}

			<Disclaimer />
		</Panel>
	);
};
