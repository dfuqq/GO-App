import { Place } from '@prisma/client';
import {
	FormItem,
	Group,
	ModalPage,
	ModalPageHeader,
	ModalRoot,
	Radio,
	RadioGroup,
} from '@vkontakte/vkui';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {
	activeModal: string;
	isOpenModal: boolean;
	setData: (data: Place[]) => void;
	setLoading: (loading: boolean) => void;
	setActiveArea: (area: string) => void;
	setActiveModal: (modal: string) => void;
	setIsOpenModal: (isOpenModal: boolean) => void;
}

export const Modal = ({
	activeModal,
	isOpenModal,
	setData,
	setLoading,
	setActiveArea,
	setActiveModal,
	setIsOpenModal,
}: Props) => {
	const router = useRouter();

	const handleClose = () => {
		setActiveModal(null);
		setIsOpenModal(false);
	};

	const handleSelect = (e) => {
		router.push(`/places?area=${e.currentTarget.value}`);
		setLoading(true);

		fetch(`/api/places?area=${e.currentTarget.value}`)
			.then((res) => res.json())
			.then((data) => setData(data))
			.catch((err) => console.error('Ошибка загрузки мест:', err))
			.finally(() => setLoading(false));

		setActiveArea(e.currentTarget.value);
		handleClose();
	};
	return (
		<ModalRoot
			activeModal={activeModal}
			onClose={handleClose}>
			<ModalPage
				id='filters'
				open={isOpenModal}
				onClose={handleClose}
				size='l'>
				<ModalPageHeader>Район</ModalPageHeader>
				<Group>
					<FormItem top='Выберите район'>
						<RadioGroup>
							<Radio
								name='radio'
								value='CNTR'
								onChange={(e) => handleSelect(e)}>
								Центр
							</Radio>
							<Radio
								name='radio'
								value='NWL'
								onChange={(e) => handleSelect(e)}>
								Северо-Восточный Жилой Район
							</Radio>
							<Radio
								name='radio'
								value='NL'
								onChange={(e) => handleSelect(e)}>
								Северный Жилой Район
							</Radio>
							<Radio
								name='radio'
								value='WEST'
								onChange={(e) => handleSelect(e)}>
								Восточный Район
							</Radio>
							<Radio
								name='radio'
								value='ALL'
								onChange={(e) => handleSelect(e)}>
								Все районы
							</Radio>
						</RadioGroup>
					</FormItem>
				</Group>
			</ModalPage>
		</ModalRoot>
	);
};
