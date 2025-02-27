'use client';
import { useEffect, useState } from 'react';

import { Group, Panel, ScreenSpinner } from '@vkontakte/vkui';

import { LocationsList, Disclaimer, PanHead } from '..';

import { Business } from '@prisma/client';
import { useBusinessType } from 'src/hooks';

interface Props {
	nav: string;
	type: string;
	title: string;
	searchType: string;
}

export const BusinessType = ({ nav, type, title, searchType }: Props) => {
	const { data, loading } = useBusinessType(type, searchType);

	return (
		<Panel nav={nav}>
			{loading && <ScreenSpinner />}

			<PanHead title={title} />
			{!loading && (
				<>
					<Group>
						{data.map((businessItem: Business) => (
							<LocationsList
								category={type}
								business={businessItem}
								key={businessItem.slug}
							/>
						))}
					</Group>
				</>
			)}

			<Disclaimer />
		</Panel>
	);
};
