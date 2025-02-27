import { Button, ButtonGroup } from '@vkontakte/vkui';
import React from 'react';

interface Props {
	handleSaveClick: () => void;
	handleResetClick: () => void;
}

export const ModalFormCategoryButtons = ({
	handleSaveClick,
	handleResetClick,
}: Props) => {
	return (
		<ButtonGroup
			style={{
				display: 'flex',
				justifyContent: 'center',
				marginTop: '12px',
			}}>
			<Button
				size='l'
				onClick={() => handleSaveClick()}>
				Сохранить
			</Button>
			<Button
				size='l'
				mode='tertiary'
				onClick={() => handleResetClick()}>
				Сбросить
			</Button>
		</ButtonGroup>
	);
};
