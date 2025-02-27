import React from 'react';

import { Group } from '@vkontakte/vkui';

import { bannersData } from '../../../prisma/data/home__banners-group-data';
import { HomeBannersGroupItem } from './';

export const HomeBannersGroup = () => {
	return (
		<Group style={{ margin: '10px 20px 0 20px' }}>
			{bannersData.map((banner) => (
				<HomeBannersGroupItem
					banner={banner}
					key={banner.title}
				/>
			))}
		</Group>
	);
};
