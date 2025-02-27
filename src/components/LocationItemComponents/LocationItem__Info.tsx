import { Div, Cell } from '@vkontakte/vkui';

import { Icon24InfoCircleOutline } from '@vkontakte/icons/';

import { BusinessDTO } from '@/api/business/[type]/[nav]/route';
import { PlaceDTO } from '@/api/places/[area]/[nav]/route';
import {
	LocationItemInfoContacts,
	LocationItemInfoLinks,
} from '@/components/index';

interface Props {
	item: BusinessDTO | PlaceDTO;
}

export const LocationItemInfo = ({ item }: Props) => {
	return (
		<Div
			style={{
				marginBottom: '12px',
				paddingTop: 0,
			}}>
			<LocationItemInfoContacts item={item} />

			{(item as PlaceDTO).utility && (
				<Cell
					before={<Icon24InfoCircleOutline />}
					style={{ whiteSpace: 'pre-line' }}>
					{(item as PlaceDTO).utility}
				</Cell>
			)}

			<LocationItemInfoLinks item={item} />
		</Div>
	);
};
