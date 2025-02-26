import React from 'react';
import { PlacesPlaceholder } from '.';
import { Button, Div } from '@vkontakte/vkui';

interface Props {
	isOpenModal: boolean;
	activeArea: string;
	setIsOpenModal: (isOpenModal: boolean) => void;
	setActiveModal: (modal: string) => void;
}

export const PlacesControls = ({
	isOpenModal,
	activeArea,
	setIsOpenModal,
	setActiveModal,
}: Props) => {
	return (
		<>
			{!isOpenModal && !activeArea && (
				<PlacesPlaceholder
					setIsOpenModal={setIsOpenModal}
					setActiveModal={setActiveModal}
				/>
			)}

			{!isOpenModal && activeArea && (
				<Div style={{ display: 'flex', justifyContent: 'center' }}>
					<Button
						size='l'
						mode='outline'
						onClick={() => {
							setIsOpenModal(true);
							setActiveModal('filters');
						}}>
						Сменить район
					</Button>
				</Div>
			)}
		</>
	);
};
