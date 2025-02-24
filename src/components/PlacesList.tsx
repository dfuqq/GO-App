'use client';
import { Place } from '@prisma/client';
import { Cell, Group, Headline } from '@vkontakte/vkui';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {
	activeArea: string;
	data: Place[];
}

export const PlacesList = ({ activeArea, data }: Props) => {
	const router = useRouter();

	return (
		<>
			<Headline>{activeArea}</Headline>
			{activeArea && data.length > 0 && (
				<Group>
					{data.map((place) => (
						<Cell
							chevron='always'
							key={place.slug}
							subtitle={place.subtitle}
							style={{ cursor: 'pointer' }}
							onClick={() =>
								router.push(
									`/places/${place.areaSlug}/${place.slug}`
								)
							}>
							{place.name}
						</Cell>
					))}
				</Group>
			)}
		</>
	);
};
