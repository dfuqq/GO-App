'use client';
import { Place } from '@prisma/client';
import { Cell, Div, Headline } from '@vkontakte/vkui';
import { useRouter } from 'next/navigation';
import React from 'react';
import { PlacesListNotFound } from '.';
import { getAreaTitle } from '@/lib/get-area-title';

interface Props {
	activeArea: string;
	data: Place[];
}

export const PlacesList = ({ activeArea, data }: Props) => {
	const router = useRouter();

	return (
		<>
			<Headline style={{ padding: '10px 0 0 20px' }}>
				{getAreaTitle(activeArea)}
			</Headline>
			{activeArea && data.length > 0 && (
				<Div>
					{data.map((place) => (
						<Cell
							chevron='always'
							key={place.slug}
							subtitle={place.subtitle}
							style={{
								cursor: 'pointer',
								borderBottom: '1px solid rgb(54, 55, 56)',
								margin: '4px 0',
							}}
							onClick={() =>
								router.push(
									`/places/${place.areaSlug}/${place.slug}`
								)
							}>
							{place.name}
						</Cell>
					))}
				</Div>
			)}
			{activeArea && data.length === 0 && <PlacesListNotFound />}
		</>
	);
};
