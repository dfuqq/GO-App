import { FormItem, Radio, RadioGroup } from '@vkontakte/vkui';
import { useRouter } from 'next/navigation';
import React from 'react';

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
				<Radio
					name='radio'
					value='CNTR'
					checked={activeArea?.includes('CNTR')}
					onChange={(e) => handleSelect(e)}>
					Центр
				</Radio>
				<Radio
					name='radio'
					value='NWL'
					checked={activeArea?.includes('NWL')}
					onChange={(e) => handleSelect(e)}>
					Северо-Восточный Жилой Район
				</Radio>
				<Radio
					name='radio'
					value='NL'
					checked={activeArea?.includes('NL')}
					onChange={(e) => handleSelect(e)}>
					Северный Жилой Район
				</Radio>
				<Radio
					name='radio'
					value='WEST'
					checked={activeArea?.includes('WEST')}
					onChange={(e) => handleSelect(e)}>
					Восточный Район
				</Radio>
				<Radio
					name='radio'
					value='ALL'
					checked={activeArea?.includes('ALL')}
					onChange={(e) => handleSelect(e)}>
					Все районы
				</Radio>
			</RadioGroup>
		</FormItem>
	);
};
