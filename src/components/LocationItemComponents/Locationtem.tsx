'use client';
import React from 'react';

import { Panel, Group, Separator, Div, Header } from '@vkontakte/vkui';

import {
	LocationItemImageGallery,
	LocationItemInfo,
	LocationItemMap,
	PanHead,
} from '..';

import { BusinessDTO } from '../../../app/api/business/[type]/[nav]/route';
import { PlaceDTO } from 'app/api/places/[area]/[nav]/route';

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

			{/* TODO: Add Geo to all Items */}
			<LocationItemMap geo={[73.405787, 61.247272]} />
		</Panel>
	);
};
