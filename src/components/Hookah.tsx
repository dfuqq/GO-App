import React, { useEffect, useState } from 'react';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Cell,
	Avatar,
} from '@vkontakte/vkui';
import { Disclaimer } from './';
import { Business } from '@prisma/client';
import { useRouter } from 'next/navigation';

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

	const router = useRouter();

	return (
		<Panel nav={nav}>
			<PanelHeader
				before={
					<PanelHeaderBack
						onClick={() => router.back()}></PanelHeaderBack>
				}
				delimiter='auto'>
				Кальянные
			</PanelHeader>

			{data.map((hookah: Business) => (
				<Cell
					chevron='always'
					before={
						<Avatar
							src={hookah.logo}
							size={56}
						/>
					}
					onClick={() => {
						router.push(`/business/hookahs/${hookah.slug}`);
					}}
					subtitle={hookah.subtitle}
					key={hookah.slug}>
					{hookah.name}
				</Cell>
			))}

			<Disclaimer />
		</Panel>
	);
};
