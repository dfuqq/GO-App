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
import { TestCafesMap } from './Test_Cafes-map';
import { TestCafesGalleryImage } from './Test_Cafes-galleryImage';

export const TestCafes = ({ id, geo, item }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			{item.name}
		</PanelHeader>

		<TestCafesGalleryImage galleryImage={item.galleryImage} />

		<Separator
			wide
			style={{ paddingTop: '10px' }}
		/>

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>{item.descriptionHeader}</Header>}>
			<Div style={{ whiteSpace: 'pre-line' }}>{item.description}</Div>
		</Group>

		<Separator wide />

		<TestCafesInfoBlock item={item} />

		<TestCafesMap geo={geo} />
	</Panel>
);
