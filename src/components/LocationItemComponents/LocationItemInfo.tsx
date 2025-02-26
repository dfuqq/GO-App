import { Div, Cell } from '@vkontakte/vkui';

import {
	Icon28MoneyCircleOutline,
	Icon28LogoInstagram,
	Icon28PlaceOutline,
	Icon28PhoneOutline,
} from '@vkontakte/icons/';

import { BusinessDTO } from '../../../app/api/business/[type]/[nav]/route';
import { PlaceDTO } from 'app/api/places/[area]/[nav]/route';

interface Props {
	item: BusinessDTO | PlaceDTO;
}

export const LocationItemInfo = ({ item }: Props) => {
	const isBusiness = (item: BusinessDTO | PlaceDTO): item is BusinessDTO => {
		return 'phone' in item && 'priceFrom' in item;
	};

	return (
		<Div
			style={{
				marginBottom: '12px',
				paddingTop: 0,
			}}>
			<Cell
				before={
					<Icon28PlaceOutline
						height={24}
						width={24}
					/>
				}
				subtitle={item.hours || undefined}
				style={{ whiteSpace: 'pre-line' }}>
				<span style={{ whiteSpace: 'pre-line' }}>{item.address}</span>
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
					<span style={{ whiteSpace: 'pre-line' }}>{item.price}</span>
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
					<span style={{ whiteSpace: 'pre-line' }}>{item.phone}</span>
				</Cell>
			)}

			{}

			{/* FIXME: Different Links */}
			{/* {(item.site) && (
				<Cell
					href={item.siteHref}
					target='_blank'
					before={
						<Icon28LogoInstagram
							height={24}
							width={24}
						/>
					}>
					{item.site}
				</Cell>
			)} */}
		</Div>
	);
};
