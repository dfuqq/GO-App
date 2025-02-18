'use client';
import { useEffect, useState } from 'react';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Cell,
	Avatar,
} from '@vkontakte/vkui';

import { Disclaimer } from '.';
import { useRouter } from 'next/navigation';

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

	const router = useRouter();

	return (
		<Panel nav={nav}>
			<PanelHeader
				before={
					<PanelHeaderBack
						onClick={() => router.back()}></PanelHeaderBack>
				}>
				Кафе
			</PanelHeader>

			{data.map((cafe: Business) => (
				<Cell
					chevron='always'
					before={
						<Avatar
							src={cafe.logo}
							size={56}
						/>
					}
					onClick={() => {
						router.push(`/business/cafes/${cafe.slug}`);
					}}
					subtitle={cafe.subtitle}
					key={cafe.slug}>
					{cafe.name}
				</Cell>
			))}

			<Disclaimer />
		</Panel>
	);
};
