import { Div, Cell } from '@vkontakte/vkui';

import {
	Icon28MoneyCircleOutline,
	Icon28LogoInstagram,
	Icon28PlaceOutline,
	Icon28PhoneOutline,
} from '@vkontakte/icons/';

import { BusinessDTO } from 'app/api/business/cafes/[nav]/route';
import { PlaceDTO } from 'app/api/places/[area]/[nav]/route';

interface Props {
	item: BusinessDTO | PlaceDTO;
}

export const BusinessItemInfo = ({ item }: Props) => {
	const isBusiness = (item: BusinessDTO | PlaceDTO): item is BusinessDTO => {
		return 'phone' in item && 'priceFrom' in item;
	};

	return (
		<Div style={{ paddingBottom: 0, whiteSpace: 'pre-line' }}>
			<Cell
				before={
					<Icon28PlaceOutline
						height={24}
						width={24}
					/>
				}
				subtitle={item.hours || undefined}
				style={{ whiteSpace: 'pre-line' }}>
				{item.address}
			</Cell>

			{isBusiness(item) ?
				<Cell
					before={
						<Icon28MoneyCircleOutline
							height={24}
							width={24}
						/>
					}>
					{item.priceFrom}-{item.priceTo}₽
				</Cell>
			: item.price ?
				<Cell
					before={
						<Icon28MoneyCircleOutline
							height={24}
							width={24}
						/>
					}>
					{item.price}
				</Cell>
			:	null}

			{isBusiness(item) && (
				<Cell
					before={
						<Icon28PhoneOutline
							height={24}
							width={24}
						/>
					}>
					{item.phone}
				</Cell>
			)}

			{item.social && (
				<Cell
					href={item.socialHref}
					target='_blank'
					before={
						<Icon28LogoInstagram
							height={24}
							width={24}
						/>
					}>
					{item.social}
				</Cell>
			)}
		</Div>
	);
};
