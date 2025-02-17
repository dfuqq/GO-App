import React from 'react';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Cell,
	Avatar,
} from '@vkontakte/vkui';
import { Disclaimer } from '../../components';
import { HookahItem, hookahData } from './hookah-data';

interface Props {
	id: string;
	changePanel: (e: React.MouseEvent) => void;
}

export const Hookah = ({ id, changePanel }: Props) => (
	<Panel id={id}>
		<PanelHeader
			before={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			delimiter='auto'>
			Кальянные
		</PanelHeader>

		{hookahData.map((hookah: HookahItem) => (
			<Cell
				chevron='always'
				before={
					<Avatar
						src={hookah.image}
						size={56}
					/>
				}
				onClick={changePanel}
				data-to={hookah.id}
				subtitle={hookah.subtitle}
				key={hookah.id}>
				{hookah.name}
			</Cell>
		))}

		<Disclaimer />
	</Panel>
);
