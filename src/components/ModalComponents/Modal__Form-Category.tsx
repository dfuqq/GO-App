import { Checkbox, FormItem } from '@vkontakte/vkui';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { categoriesList } from 'src/consts';
import { ModalFormCategoryButtons } from './Modal__Form-Category-Buttons';

interface Props {
	handleClose: () => void;
	activeArea: string;
	activeCategories: string;
	setActiveCategories: (activeCategories: string) => void;
}

export const ModalFormCategory = ({
	handleClose,
	activeArea,
	activeCategories,
	setActiveCategories,
}: Props) => {
	const router = useRouter();
	const [selectedCategories, setSelectedCategories] =
		useState<string>(activeCategories);

	const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (selectedCategories?.includes(e.currentTarget.value)) {
			setSelectedCategories(
				selectedCategories
					.split(',')
					.filter((category) => category !== e.currentTarget.value)
					.join(',')
			);
		} else {
			setSelectedCategories(
				selectedCategories ?
					selectedCategories.concat(`,${e.currentTarget.value}`)
				:	e.currentTarget.value
			);
		}
	};

	const handleSaveClick = () => {
		if (selectedCategories?.length > 0) {
			router.push(
				`/places?area=${activeArea}&categories=${selectedCategories}`
			);
			setActiveCategories(selectedCategories);
			handleClose();
		} else {
			handleResetClick();
		}
	};

	const handleResetClick = () => {
		setActiveCategories('');
		router.push(`/places?area=${activeArea}&categories=`);
		handleClose();
	};

	return (
		<FormItem top='Выберите район'>
			{categoriesList.map(({ value, title }) => (
				<Checkbox
					name='checkbox'
					value={value}
					key={value}
					checked={selectedCategories?.includes(value)}
					onChange={(e) => handleSelect(e)}>
					{title}
				</Checkbox>
			))}

			<ModalFormCategoryButtons
				handleSaveClick={handleSaveClick}
				handleResetClick={handleResetClick}
			/>
		</FormItem>
	);
};
