'use client';
import React from 'react';

import { Panel, Group, Separator, Div, Header } from '@vkontakte/vkui';

import { LocationItemImageGallery, LocationItemInfo, PanHead } from '..';

import { BusinessDTO } from '../../../app/api/business/[type]/[nav]/route';
import { PlaceDTO } from 'app/api/places/[area]/[nav]/route';
import { useRouter, useSearchParams } from 'next/navigation';

interface Props {
	nav: string;
	// geo: [number, number];
	item: BusinessDTO | PlaceDTO;
}

// TODO: Map
export const LocationItem = ({ nav, item }: Props) => {
	return (
		<Panel nav={nav}>
			<PanHead title={item.name} />

			<LocationItemImageGallery imageGallery={item.images} />

			<Separator size='4xl' />

			<Group
				separator='hide'
				style={{ padding: '0 3vw' }}
				header={
					<Header style={{ marginTop: '2px' }}>
						{item.descriptionHeader}
					</Header>
				}>
				<Div style={{ whiteSpace: 'pre-line', marginBottom: '2px' }}>
					{item.description}
				</Div>
			</Group>

			<Separator size='4xl' />

			<LocationItemInfo item={item} />

			{/* <CafeItemMap geo={geo} /> */}
		</Panel>
	);
};
