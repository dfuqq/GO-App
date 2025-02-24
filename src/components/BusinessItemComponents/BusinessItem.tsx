import React from 'react';

import { Panel, Group, Separator, Div, Header } from '@vkontakte/vkui';

import { BusinessItemImageGallery, BusinessItemInfo, PanHead } from '..';

import { BusinessDTO } from 'app/api/business/cafes/[nav]/route';
import { PlaceDTO } from 'app/api/places/[area]/[nav]/route';

interface Props {
	nav: string;
	// geo: [number, number];
	item: BusinessDTO | PlaceDTO;
}

// TODO: Map
export const BusinessItem = ({ nav, item }: Props) => (
	<Panel nav={nav}>
		<PanHead title={item.name} />

		<BusinessItemImageGallery imageGallery={item.images} />

		<Separator
			size='4xl'
			style={{ paddingTop: '10px' }}
		/>

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>{item.descriptionHeader}</Header>}>
			<Div style={{ whiteSpace: 'pre-line' }}>{item.description}</Div>
		</Group>

		<Separator size='4xl' />

		<BusinessItemInfo item={item} />

		{/* <CafeItemMap geo={geo} /> */}
	</Panel>
);
