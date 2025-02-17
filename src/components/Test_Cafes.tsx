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
import { TestCafesInfoBlock } from './Test_Cafes-infoblock';
import { TestCafesGalleryImage } from './Test_Cafes-galleryImage';
import { TestCafesMap } from './Test_Cafes-map';

interface Props {
	id: string;
	geo: [number, number];
	item: any;
}

export const TestCafes = ({ id, geo, item }: Props) => (
	<Panel id={id}>
		<PanelHeader
			before={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			delimiter='auto'>
			{item.name}
		</PanelHeader>

		<TestCafesGalleryImage galleryImage={item.galleryImage} />

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

		<TestCafesInfoBlock item={item} />

		<TestCafesMap geo={geo} />
	</Panel>
);
