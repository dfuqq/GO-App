import {
	Icon24Link,
	Icon24LogoInstagram,
	Icon24LogoVk,
} from '@vkontakte/icons';
import { Cell } from '@vkontakte/vkui';
import { BusinessDTO } from '@/api/business/[type]/[nav]/route';
import { PlaceDTO } from '@/api/places/[area]/[nav]/route';
import React from 'react';

interface Props {
	item: BusinessDTO | PlaceDTO;
}

export const LocationItemInfoLinks = ({ item }: Props) => {
	return (
		<>
			{item.insta && (
				<Cell
					href={item.instaHref}
					target='_blank'
					before={<Icon24LogoInstagram />}>
					{item.insta}
				</Cell>
			)}

			{(item as PlaceDTO).vkHref && (
				<Cell
					before={<Icon24LogoVk />}
					href={(item as PlaceDTO).vkHref}
					target='_blank'>
					Группа VK
				</Cell>
			)}

			{(item as PlaceDTO).site && (
				<Cell
					before={<Icon24Link />}
					href={(item as PlaceDTO).siteHref}
					target='_blank'>
					{(item as PlaceDTO).site}
				</Cell>
			)}
		</>
	);
};
