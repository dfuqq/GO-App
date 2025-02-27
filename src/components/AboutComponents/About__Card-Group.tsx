'use client';

import { Card, CardGrid } from '@vkontakte/vkui';
import React from 'react';
import { aboutCardGroupData } from '@/prisma/data/about__card-group-data';
import { useRouter } from 'next/navigation';

export const AboutCardGroup = () => {
	const router = useRouter();
	return (
		<CardGrid size='s'>
			{aboutCardGroupData.map((card) => (
				<Card
					style={{
						height: 82,
						backgroundColor: '#000',
						display: 'flex',
						justifyContent: 'center',
						cursor: 'pointer',
					}}
					key={card.alt}
					onClick={() => router.push(`/about/${card.route}`)}>
					<img
						style={{ height: 82, width: 82 }}
						src={card.src}
						alt={card.alt}
					/>
				</Card>
			))}
		</CardGrid>
	);
};
