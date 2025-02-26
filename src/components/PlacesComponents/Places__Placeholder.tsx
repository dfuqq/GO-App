import { Icon56InfoOutline } from '@vkontakte/icons';
import { Button, Placeholder } from '@vkontakte/vkui';
import React, { Fragment } from 'react';

interface Props {
	setIsOpenModal: (isOpenModal: boolean) => void;
	setActiveModal: (modal: string) => void;
}

export const PlacesPlaceholder = ({
	setIsOpenModal,
	setActiveModal,
}: Props) => {
	return (
		<Fragment>
			<Placeholder
				icon={<Icon56InfoOutline />}
				title='Выберите район'
				action={
					<Button
						size='l'
						mode='primary'
						onClick={() => {
							setIsOpenModal(true);
							setActiveModal('areaFilters');
						}}>
						Выбрать
					</Button>
				}>
				Чтобы показать Вам места, Вы должны выбрать желаемый район
			</Placeholder>
		</Fragment>
	);
};
