'use client';
import { useEffect, useState } from 'react';

import { Group, Panel, ScreenSpinner } from '@vkontakte/vkui';

import { LocationsList, Disclaimer, PanHead } from '..';

import { Business } from '@prisma/client';

interface Props {
	nav: string;
	type: string;
	searchType: string;
}

export const BusinessType = ({ nav, type, searchType }: Props) => {
	const [data, setData] = useState<Business[]>([]);
	const [loading, setLoading] = useState(true);

	// TODO: custom Hook Services
	useEffect(() => {
		fetch(`/api/business?type=${searchType}`)
			.then((res) => res.json())
			.then((data) => setData(data))
			.catch((err) => console.error(`Ошибка загрузки ${type}:`, err))
			.finally(() => setLoading(false));
	}, []);

	return (
		<Panel nav={nav}>
			<PanHead title='Кафе' />

			{loading && <ScreenSpinner />}

			{!loading && (
				<Group>
					{data.map((cafe: Business) => (
						<LocationsList
							category={type}
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
