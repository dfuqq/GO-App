import React from 'react';

import { Div, Cell } from '@vkontakte/vkui';

import Icon28MoneyCircleOutline from '@vkontakte/icons/dist/28/money_circle_outline';
import Icon28LogoInstagram from '@vkontakte/icons/dist/28/logo_instagram';
import Icon28PlaceOutline from '@vkontakte/icons/dist/28/place_outline';
import Icon28PhoneOutline from '@vkontakte/icons/dist/28/phone_outline';

export const TestCafesInfoBlock = ({ item }) => {
	return (
		<Div style={{ paddingBottom: 0 }}>
			<Cell
				size='l'
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
				size='l'
				before={
					<Icon28MoneyCircleOutline
						height={24}
						width={24}
					/>
				}>
				{item.priceFrom}-{item.priceTo}₽
			</Cell>
			<Cell
				size='l'
				before={
					<Icon28PhoneOutline
						height={24}
						width={24}
					/>
				}>
				{item.phone}
			</Cell>
			<Cell
				size='l'
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
