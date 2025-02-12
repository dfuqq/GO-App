import React from 'react';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Cell,
	Avatar,
} from '@vkontakte/vkui';

import { Disclaimer } from '../../components';
import { cafesData } from './cafes-data';

export const Cafes = ({ id, changePanel, setActiveCard }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}>
			Кафе
		</PanelHeader>

		{cafesData.map((cafe) => (
			<Cell
				expandable
				before={
					<Avatar
						src={cafe.image}
						size={56}
					/>
				}
				onClick={(e) => {
					changePanel(e);
					setActiveCard(cafe);
				}}
				data-to='testcaf'
				subtitle={cafe.subtitle}
				key={cafe.id}>
				{cafe.name}
			</Cell>
		))}

		<Disclaimer />
	</Panel>
);
