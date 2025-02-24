import React from 'react';

import { Panel, Group, Header, Separator } from '@vkontakte/vkui';

import { PanHead } from './PanHead';
import { BannersGallery } from './Banners-Gallery';
import { BusinessCardGroup } from './Business__Card-Group';

interface Props {
	nav: string;
}
// XXX: Data to Prisma
export const Business = ({ nav }: Props) => {
	return (
		<Panel nav={nav}>
			<PanHead title='Заведения' />

			<Header>Наши Фавориты</Header>
			<BannersGallery category='business' />

			<Separator
				size='4xl'
				style={{ paddingBottom: '10px', marginTop: '10px' }}
			/>

			<Group style={{ paddingBottom: '12px' }}>
				<BusinessCardGroup />
			</Group>
		</Panel>
	);
};
