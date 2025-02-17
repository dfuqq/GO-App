import React from 'react';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Cell,
	Avatar,
} from '@vkontakte/vkui';
import { Disclaimer } from '../../components';
import { Bar, barsData } from './bars-data';

interface Props {
	id: string;
	changePanel: (e: React.MouseEvent) => void;
}

export const Bars = ({ id, changePanel }: Props) => (
	<Panel id={id}>
		<PanelHeader
			before={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			delimiter='auto'>
			Бары
		</PanelHeader>

		{barsData.map((bar: Bar) => (
			<Cell
				chevron='always'
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
