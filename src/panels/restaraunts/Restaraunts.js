import React from 'react';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Cell,
	Avatar,
} from '@vkontakte/vkui';
import { restarauntsData } from './restaraunts-data';
import { Disclaimer } from '../../components';

const Restaraunts = ({ id, changePanel }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			Рестораны
		</PanelHeader>

		{restarauntsData.map((restaraunt) => (
			<Cell
				expandable
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

export default Restaraunts;
