'use client';
import { Card, Flex } from '@vkontakte/vkui';
import { useRouter } from 'next/navigation';
import React from 'react';

import { businessCardGroupData } from '../../../prisma/data/business__card-group-data';

export const BusinessCardGroup = () => {
	const router = useRouter();

	return (
		<Flex
			align='center'
			justify='center'
			gap='l'
			style={{ marginBottom: '12px' }}>
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
						minWidth: '250px',
					}}
					onClick={() => router.push(`/business/${cardItem.type}`)}
					key={cardItem.type}>
					<h3 style={{ color: '#fff', paddingLeft: '12px' }}>
						{cardItem.title}
					</h3>
				</Card>
			))}
		</Flex>
	);
};
