import { FormItem, Radio, RadioGroup } from '@vkontakte/vkui';
import { useRouter } from 'next/navigation';
import React from 'react';
import { areasList } from 'src/consts';

interface Props {
	activeArea: string;
	handleClose: () => void;
	setActiveCategories: (activeCategories: string) => void;
	setActiveArea: (activeArea: string) => void;
}

export const ModalFormArea = ({
	activeArea,
	handleClose,
	setActiveCategories,
	setActiveArea,
}: Props) => {
	const router = useRouter();

	const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
		router.push(`/places?area=${e.currentTarget.value}&categories=`);
		setActiveArea(e.currentTarget.value);
		setActiveCategories('');
		handleClose();
	};

	return (
		<FormItem top='Выберите район'>
			<RadioGroup>
				{areasList.map(({ value, title }) => (
					<Radio
						key={value}
						name='radio'
						value={value}
						checked={activeArea?.includes(value)}
						onChange={(e) => handleSelect(e)}>
						{title}
					</Radio>
				))}
			</RadioGroup>
		</FormItem>
	);
};
