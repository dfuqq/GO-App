'use client';
import { Card, CardGrid } from '@vkontakte/vkui';
import { useRouter } from 'next/navigation';
import React from 'react';

import { businessCardGroupData } from '../../../prisma/data/business__card-group-data';

export const BusinessCardGroup = () => {
	const router = useRouter();

	// TODO: Flex
	return (
		<CardGrid size='s'>
			{businessCardGroupData.map((cardItem) => (
				<Card
					style={{
						height: 82,
						backgroundColor: '#000',
						backgroundImage: `url(${cardItem.src})`,
						backgroundSize: 210,
						backgroundPosition: 'right',
						backgroundRepeat: 'no-repeat',
						cursor: 'pointer',
					}}
					onClick={() => router.push(`/business/${cardItem.type}`)}
					key={cardItem.title}>
					<h3 style={{ color: '#fff', paddingLeft: '12px' }}>
						{cardItem.title}
					</h3>
				</Card>
			))}
		</CardGrid>
	);
};
