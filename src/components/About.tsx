import React from 'react';

import { Panel, Separator, Group } from '@vkontakte/vkui';

import { AboutButtons, AboutCardGroup, AboutInfo, PanHead } from './';
import { PageProps } from 'src/@types/page-props';

export const About = ({ nav }: PageProps) => {
	return (
		<Panel nav={nav}>
			<PanHead title='О приложении' />

			<AboutInfo />

			<Separator size='4xl' />

			<Group separator='hide'>
				<AboutCardGroup />

				<Separator size='4xl' />

				<AboutButtons />
			</Group>
		</Panel>
	);
};
