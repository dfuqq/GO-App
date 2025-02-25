import React, { Fragment } from 'react';

import { Panel, Group, Separator } from '@vkontakte/vkui';

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

			<Group>
				<BannersGallery category='business' />

				<Separator size='4xl' />

				<Fragment>
					<BusinessCardGroup />
				</Fragment>
			</Group>
		</Panel>
	);
};
