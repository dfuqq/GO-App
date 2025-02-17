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

// FIXME: image => logo with db
interface CafeProps {
	id: string;
	name: string;
	subtitle: string;
	image: string;
}

interface Props {
	id: string;
	changePanel: (e: React.MouseEvent) => void;
	setActiveCard: (cafe: CafeProps) => void;
}

export const Cafes = ({ id, changePanel, setActiveCard }: Props) => (
	<Panel id={id}>
		<PanelHeader
			before={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}>
			Кафе
		</PanelHeader>

		{cafesData.map((cafe) => (
			<Cell
				chevron='always'
				before={
					<Avatar
						src={cafe.image}
						size={56}
					/>
				}
				onClick={(e) => {
					changePanel(e);
					// FIXME: code ignore, check with db
					setActiveCard(cafe as CafeProps);
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
