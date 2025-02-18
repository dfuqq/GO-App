'use client';
import { Business } from '@prisma/client';
import { Avatar, Cell } from '@vkontakte/vkui';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {
	business: Business;
}

export const BusinessesList = ({ business }: Props) => {
	const router = useRouter();

	return (
		<Cell
			chevron='always'
			before={
				<Avatar
					src={business.logo}
					size={56}
				/>
			}
			onClick={() => {
				router.push(`/business/cafes/${business.slug}`);
			}}
			subtitle={business.subtitle}>
			{business.name}
		</Cell>
	);
};
