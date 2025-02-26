import React, { Fragment } from 'react';

import { Panel, Group, Separator } from '@vkontakte/vkui';
import { BannersGallery, BusinessCardGroup, PanHead } from './';

interface Props {
	nav: string;
}
export const Business = ({ nav }: Props) => {
	return (
		<Panel nav={nav}>
			<PanHead
				title='Заведения'
				route='/'
			/>

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
