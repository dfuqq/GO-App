import React from 'react';
import { PlacesControlsButtons, PlacesPlaceholder } from '.';

interface Props {
	isOpenModal: boolean;
	activeArea: string;
	activeCategories: string;
	setIsOpenModal: (isOpenModal: boolean) => void;
	setActiveModal: (modal: string) => void;
}

export const PlacesControls = ({
	isOpenModal,
	activeArea,
	activeCategories,
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
				<PlacesControlsButtons
					activeCategories={activeCategories}
					setIsOpenModal={setIsOpenModal}
					setActiveModal={setActiveModal}
				/>
			)}
		</>
	);
};
