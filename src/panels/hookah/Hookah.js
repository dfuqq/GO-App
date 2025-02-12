import React from 'react';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Cell,
	Avatar,
} from '@vkontakte/vkui';
import { Disclaimer } from '../../components';
import { hookahData } from './hookah-data';

export const Hookah = ({ id, changePanel }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			Кальянные
		</PanelHeader>

		{hookahData.map((hookah) => (
			<Cell
				expandable
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
