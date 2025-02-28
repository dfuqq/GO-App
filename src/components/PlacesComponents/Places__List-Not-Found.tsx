import { Icon56MessageMissingOutline } from '@vkontakte/icons';
import { Placeholder } from '@vkontakte/vkui';
import React from 'react';

export const PlacesListNotFound = () => {
	return (
		<Placeholder
			title='Ничего не найдено'
			icon={<Icon56MessageMissingOutline />}>
			Попробуйте поискать что-то другое
		</Placeholder>
	);
};
