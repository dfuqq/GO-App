import React from 'react';

import { Panel, Group, Separator, Div, Header } from '@vkontakte/vkui';

import { BusinessItemImageGallery, BusinessItemInfo, PanHead } from '..';

import { BusinessDTO } from 'app/api/business/cafes/[nav]/route';

interface Props {
	nav: string;
	// geo: [number, number];
	business: BusinessDTO;
}

// TODO: Map
export const BusinessItem = ({ nav, business }: Props) => (
	<Panel nav={nav}>
		<PanHead title={business.name} />

		<BusinessItemImageGallery imageGallery={business.images} />

		<Separator
			size='4xl'
			style={{ paddingTop: '10px' }}
		/>

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>{business.descriptionHeader}</Header>}>
			<Div style={{ whiteSpace: 'pre-line' }}>{business.description}</Div>
		</Group>

		<Separator size='4xl' />

		<BusinessItemInfo business={business} />

		{/* <CafeItemMap geo={geo} /> */}
	</Panel>
);
