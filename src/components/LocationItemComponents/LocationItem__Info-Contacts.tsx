import {
	Icon24MoneyCircleOutline,
	Icon24PhoneOutline,
	Icon24PlaceOutline,
} from '@vkontakte/icons';
import { Cell } from '@vkontakte/vkui';
import { BusinessDTO } from '@/api/business/[type]/[nav]/route';
import { PlaceDTO } from '@/api/places/[area]/[nav]/route';
import React from 'react';
import { getIsBusiness } from '@/lib/get-is-business';

interface Props {
	item: BusinessDTO | PlaceDTO;
}

export const LocationItemInfoContacts = ({ item }: Props) => {
	return (
		<>
			<Cell
				before={<Icon24PlaceOutline />}
				subtitle={item.hours || undefined}
				style={{ whiteSpace: 'pre-line' }}>
				<span style={{ whiteSpace: 'pre-line' }}>{item.address}</span>
			</Cell>

			{getIsBusiness(item) ?
				<Cell before={<Icon24MoneyCircleOutline />}>
					{item.priceFrom}-{item.priceTo}₽
				</Cell>
			: item.price ?
				<Cell before={<Icon24MoneyCircleOutline />}>
					<span style={{ whiteSpace: 'pre-line' }}>{item.price}</span>
				</Cell>
			:	null}

			{getIsBusiness(item) && (
				<Cell before={<Icon24PhoneOutline />}>
					<span style={{ whiteSpace: 'pre-line' }}>{item.phone}</span>
				</Cell>
			)}
		</>
	);
};
