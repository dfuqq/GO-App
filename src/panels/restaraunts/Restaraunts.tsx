import React from 'react';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Cell,
	Avatar,
} from '@vkontakte/vkui';
import { Restaraunt, restarauntsData } from './restaraunts-data';
import { Disclaimer } from '../../components';

interface Props {
	id: string;
	changePanel: (e: React.MouseEvent) => void;
}

export const Restaraunts = ({ id, changePanel }: Props) => (
	<Panel id={id}>
		<PanelHeader
			before={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			delimiter='auto'>
			Рестораны
		</PanelHeader>

		{restarauntsData.map((restaraunt: Restaraunt) => (
			<Cell
				chevron='always'
				before={
					<Avatar
						src={restaraunt.image}
						size={56}
					/>
				}
				onClick={changePanel}
				data-to={restaraunt.id}
				subtitle={restaraunt.subtitle}
				key={restaraunt.id}>
				{restaraunt.name}
			</Cell>
		))}

		<Disclaimer />
	</Panel>
);
