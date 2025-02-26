import React from 'react';

import { Group, ModalPage, ModalPageHeader, ModalRoot } from '@vkontakte/vkui';
import { ModalFormArea, ModalFormCategory } from '.';

interface Props {
	activeModal: string;
	activeArea: string;
	activeCategories: string;
	isOpenModal: boolean;
	setActiveArea: (area: string) => void;
	setActiveCategories: (category: string) => void;
	setActiveModal: (modal: string) => void;
	setIsOpenModal: (isOpenModal: boolean) => void;
}

export const Modal = ({
	activeModal,
	activeArea,
	activeCategories,
	isOpenModal,
	setActiveArea,
	setActiveCategories,
	setActiveModal,
	setIsOpenModal,
}: Props) => {
	const handleClose = () => {
		setActiveModal(null);
		setIsOpenModal(false);
	};

	return (
		<ModalRoot
			activeModal={activeModal}
			onClose={handleClose}>
			<ModalPage
				id='areaFilters'
				open={isOpenModal}
				onClose={handleClose}
				size='l'>
				<ModalPageHeader>Район</ModalPageHeader>
				<Group>
					<ModalFormArea
						activeArea={activeArea}
						handleClose={handleClose}
						setActiveCategories={setActiveCategories}
						setActiveArea={setActiveArea}
					/>
				</Group>
			</ModalPage>
			<ModalPage id='categoryFilters'>
				<ModalPageHeader>Категория</ModalPageHeader>
				<Group>
					<ModalFormCategory
						activeArea={activeArea}
						activeCategories={activeCategories}
						handleClose={handleClose}
						setActiveCategories={setActiveCategories}
					/>
				</Group>
			</ModalPage>
		</ModalRoot>
	);
};
