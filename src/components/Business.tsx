import React, { Fragment } from 'react';

import { Panel, Group, Separator } from '@vkontakte/vkui';
import { BannersGallery, BusinessCardGroup, PanHead } from './';
import { PageProps } from 'src/@types/page-props';

export const Business = ({ nav }: PageProps) => {
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
