import React from 'react';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Group,
	Separator,
	Div,
	Header,
} from '@vkontakte/vkui';

import { BusinessItemImageGallery, BusinessItemInfo } from '..';

import { BusinessDTO } from 'app/api/business/cafes/[nav]/route';

interface Props {
	nav: string;
	// geo: [number, number];
	cafe: BusinessDTO;
}

// TODO: Map
export const BusinessItem = ({ nav, cafe }: Props) => (
	<Panel nav={nav}>
		<PanelHeader
			before={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			delimiter='auto'>
			{cafe.name}
		</PanelHeader>

		<BusinessItemImageGallery imageGallery={cafe.images} />

		<Separator
			size='4xl'
			style={{ paddingTop: '10px' }}
		/>

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>{cafe.descriptionHeader}</Header>}>
			<Div style={{ whiteSpace: 'pre-line' }}>{cafe.description}</Div>
		</Group>

		<Separator size='4xl' />

		<BusinessItemInfo cafe={cafe} />

		{/* <CafeItemMap geo={geo} /> */}
	</Panel>
);
