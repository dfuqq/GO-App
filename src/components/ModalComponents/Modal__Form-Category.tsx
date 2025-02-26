import { Button, ButtonGroup, Checkbox, Div, FormItem } from '@vkontakte/vkui';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

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
			<Checkbox
				name='checkbox'
				value='ARCHITECTURE'
				checked={selectedCategories?.includes('ARCHITECTURE')}
				onChange={(e) => handleSelect(e)}>
				Архитектура
			</Checkbox>
			<Checkbox
				name='checkbox'
				value='ENTERNTAIMENT'
				checked={selectedCategories?.includes('ENTERNTAIMENT')}
				onChange={(e) => handleSelect(e)}>
				Развлечения
			</Checkbox>
			<Checkbox
				name='checkbox'
				value='MONUMENT'
				checked={selectedCategories?.includes('MONUMENT')}
				onChange={(e) => handleSelect(e)}>
				Монументы
			</Checkbox>
			<Checkbox
				name='checkbox'
				value='MUSEUM'
				checked={selectedCategories?.includes('MUSEUM')}
				onChange={(e) => handleSelect(e)}>
				Музеи
			</Checkbox>
			<Checkbox
				name='checkbox'
				value='PARK'
				checked={selectedCategories?.includes('PARK')}
				onChange={(e) => handleSelect(e)}>
				Парки и скверы
			</Checkbox>

			<ButtonGroup style={{ display: 'flex', justifyContent: 'center' }}>
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
		</FormItem>
	);
};
