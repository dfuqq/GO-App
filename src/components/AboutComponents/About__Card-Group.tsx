'use client';

import { Card, CardGrid } from '@vkontakte/vkui';
import React from 'react';
import { aboutCardGroupData } from '@/prisma/data/about__card-group-data';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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
					<Image
						src={card.src}
						alt={card.alt}
						height={82}
						width={82}
						unoptimized
					/>
				</Card>
			))}
		</CardGrid>
	);
};
