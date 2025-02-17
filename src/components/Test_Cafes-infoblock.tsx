import React from 'react';

import { Div, Cell } from '@vkontakte/vkui';

import {
	Icon28MoneyCircleOutline,
	Icon28LogoInstagram,
	Icon28PlaceOutline,
	Icon28PhoneOutline,
} from '@vkontakte/icons/';

interface CafeItem {
	hours: string;
	address: string;
	priceFrom: number;
	priceTo: number;
	phone: string;
	social: string;
}

interface Props {
	item: CafeItem;
}

export const TestCafesInfoBlock = ({ item }: Props) => {
	return (
		<Div style={{ paddingBottom: 0 }}>
			<Cell
				before={
					<Icon28PlaceOutline
						height={24}
						width={24}
					/>
				}
				subtitle={item.hours}>
				{item.address}
			</Cell>
			<Cell
				before={
					<Icon28MoneyCircleOutline
						height={24}
						width={24}
					/>
				}>
				{item.priceFrom}-{item.priceTo}₽
			</Cell>
			<Cell
				before={
					<Icon28PhoneOutline
						height={24}
						width={24}
					/>
				}>
				{item.phone}
			</Cell>
			<Cell
				href='https://instagram.com/ny_coffee_surgut'
				target='_blank'
				before={
					<Icon28LogoInstagram
						height={24}
						width={24}
					/>
				}>
				{item.social}
			</Cell>
		</Div>
	);
};
