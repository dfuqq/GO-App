import { Div, Cell } from '@vkontakte/vkui';

import {
	Icon28MoneyCircleOutline,
	Icon28LogoInstagram,
	Icon28PlaceOutline,
	Icon28PhoneOutline,
} from '@vkontakte/icons/';

import { Business } from '@prisma/client';

interface Props {
	cafe: Business;
}

export const CafeItemInfo = ({ cafe }: Props) => {
	return (
		<Div style={{ paddingBottom: 0 }}>
			<Cell
				before={
					<Icon28PlaceOutline
						height={24}
						width={24}
					/>
				}
				subtitle={cafe.hours}>
				{cafe.address}
			</Cell>
			<Cell
				before={
					<Icon28MoneyCircleOutline
						height={24}
						width={24}
					/>
				}>
				{cafe.priceFrom}-{cafe.priceTo}₽
			</Cell>
			<Cell
				before={
					<Icon28PhoneOutline
						height={24}
						width={24}
					/>
				}>
				{cafe.phone}
			</Cell>
			<Cell
				href={cafe.socialHref}
				target='_blank'
				before={
					<Icon28LogoInstagram
						height={24}
						width={24}
					/>
				}>
				{cafe.social}
			</Cell>
		</Div>
	);
};
