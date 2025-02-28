import { Button, ButtonGroup, Counter } from '@vkontakte/vkui';
import React from 'react';

interface Props {
	activeCategories: string;
	setIsOpenModal: (isOpenModal: boolean) => void;
	setActiveModal: (modal: string) => void;
}

export const PlacesControlsButtons = ({
	activeCategories,
	setIsOpenModal,
	setActiveModal,
}: Props) => {
	return (
		<ButtonGroup
			style={{
				display: 'flex',
				justifyContent: 'center',
				position: 'sticky',
				top: '15px',
				backgroundColor: '#0a0a0a',
				padding: '10px 0px',
				borderRadius: '10px',
				border: '0.1px solid #535354',
				zIndex: '10',
				margin: '0 6px',
			}}>
			<Button
				size='l'
				mode='outline'
				onClick={() => {
					setIsOpenModal(true);
					setActiveModal('areaFilters');
				}}>
				Сменить район
			</Button>
			<Button
				size='l'
				mode='outline'
				onClick={() => {
					setIsOpenModal(true);
					setActiveModal('categoryFilters');
				}}
				after={
					activeCategories !== '' ?
						<Counter>{activeCategories?.split(',').length}</Counter>
					:	null
				}>
				Выбрать категорию
			</Button>
		</ButtonGroup>
	);
};
