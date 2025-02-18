import React, { useEffect, useState } from 'react';

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

export const Restaraunts = ({ nav }: Props) => {
	const [data, setData] = useState<Business[]>([]);

	// Получаем данные с сервера через API
	useEffect(() => {
		fetch('/api/business/restaraunts')
			.then((res) => res.json())
			.then((data) => setData(data))
			.catch((err) => console.error('Ошибка загрузки ресторана:', err));
	}, []);

	const router = useRouter();

	return (
		<Panel nav={nav}>
			<PanelHeader
				before={
					<PanelHeaderBack
						onClick={() => router.back()}></PanelHeaderBack>
				}
				delimiter='auto'>
				Рестораны
			</PanelHeader>

			{data.map((restaraunt: Business) => (
				<Cell
					chevron='always'
					before={
						<Avatar
							src={restaraunt.logo}
							size={56}
						/>
					}
					onClick={() => {
						router.push(`/business/restaraunts/${restaraunt.slug}`);
					}}
					subtitle={restaraunt.subtitle}
					key={restaraunt.slug}>
					{restaraunt.name}
				</Cell>
			))}

			<Disclaimer />
		</Panel>
	);
};
