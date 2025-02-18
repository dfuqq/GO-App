import React, { useEffect, useState } from 'react';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Cell,
	Avatar,
} from '@vkontakte/vkui';
import { Disclaimer } from './';
import { useRouter } from 'next/navigation';
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

	const router = useRouter();

	return (
		<Panel nav={nav}>
			<PanelHeader
				before={
					<PanelHeaderBack
						onClick={() => router.back()}></PanelHeaderBack>
				}
				delimiter='auto'>
				Бары
			</PanelHeader>

			{data.map((bar: Business) => (
				<Cell
					chevron='always'
					before={
						<Avatar
							src={bar.logo}
							size={56}
						/>
					}
					onClick={() => {
						router.push(`/business/bars/${bar.slug}`);
					}}
					subtitle={bar.subtitle}
					key={bar.slug}>
					{bar.name}
				</Cell>
			))}

			<Disclaimer />
		</Panel>
	);
};
