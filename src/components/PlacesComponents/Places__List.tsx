'use client';
import { Place } from '@prisma/client';
import { Cell, Div, Headline } from '@vkontakte/vkui';
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
		</>
	);
};
