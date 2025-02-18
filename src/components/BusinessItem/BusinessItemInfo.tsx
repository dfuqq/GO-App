import { Div, Cell } from '@vkontakte/vkui';

import {
	Icon28MoneyCircleOutline,
	Icon28LogoInstagram,
	Icon28PlaceOutline,
	Icon28PhoneOutline,
} from '@vkontakte/icons/';

import { Business } from '@prisma/client';

interface Props {
	business: Business;
}

export const BusinessItemInfo = ({ business }: Props) => {
	return (
		<Div style={{ paddingBottom: 0, whiteSpace: 'pre-line' }}>
			<Cell
				before={
					<Icon28PlaceOutline
						height={24}
						width={24}
					/>
				}
				subtitle={business.hours}
				style={{ whiteSpace: 'pre-line' }}>
				{business.address}
			</Cell>
			<Cell
				before={
					<Icon28MoneyCircleOutline
						height={24}
						width={24}
					/>
				}>
				{business.priceFrom}-{business.priceTo}₽
			</Cell>
			<Cell
				before={
					<Icon28PhoneOutline
						height={24}
						width={24}
					/>
				}>
				{business.phone}
			</Cell>
			<Cell
				href={business.socialHref}
				target='_blank'
				before={
					<Icon28LogoInstagram
						height={24}
						width={24}
					/>
				}>
				{business.social}
			</Cell>
		</Div>
	);
};
