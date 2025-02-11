import React from 'react';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Cell,
	Avatar,
} from '@vkontakte/vkui';
import { Disclaimer } from '../../components';
import { barsData } from './bars-data';

const Bars = ({ id, changePanel }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			Бары
		</PanelHeader>

		{barsData.map((bar) => (
			<Cell
				expandable
				before={
					<Avatar
						src={bar.image}
						size={56}
					/>
				}
				onClick={changePanel}
				data-to={bar.id}
				subtitle={bar.subtitle}
				key={bar.id}>
				{bar.name}
			</Cell>
		))}

		<Disclaimer />
	</Panel>
);

export default Bars;
