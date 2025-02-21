import React from 'react';

import { Panel, Separator, Group } from '@vkontakte/vkui';

import { AboutButtons, AboutCardGroup, AboutInfo, PanHead } from './';

interface Props {
	nav: string;
}

export const About = ({ nav }: Props) => {
	return (
		<Panel nav={nav}>
			<PanHead title='О приложении' />

			<AboutInfo />

			<Separator size='4xl' />

			<Group separator='hide'>
				<AboutCardGroup />
			</Group>

			<Group>
				<AboutButtons />
			</Group>
		</Panel>
	);
};
