'use client';
import React, { Fragment, useState } from 'react';

import {
	Panel,
	Header,
	Placeholder,
	Button,
	Group,
	Separator,
	ScreenSpinner,
	Div,
} from '@vkontakte/vkui';

import { Icon56InfoOutline } from '@vkontakte/icons/';
import { PanHead } from './PanHead';
import { Modal } from './Modal';
import { BannersGallery } from './Banners-Gallery';
import { Place } from '@prisma/client';
import { PlacesList } from './PlacesList';

interface Props {
	nav: string;
	// area: string;
	// openFilters: () => void;
	// openAreaFilters: () => void;
	// parksFilter: boolean;
	// museumsFilter: boolean;
	// monumentsFilter: boolean;
	// entertaimentFilter: boolean;
	// architectureFilter: boolean;
}

export const Places = ({
	nav,
	// area,
	// 	openFilters,
	// 	openAreaFilters,
	// 	parksFilter,
	// 	museumsFilter,
	// 	monumentsFilter,
	// 	entertaimentFilter,
	// 	architectureFilter,
}: Props) => {
	const [activeModal, setActiveModal] = useState(null);
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [data, setData] = useState<Place[]>([]);
	const [loading, setLoading] = useState(false);
	const [activeArea, setActiveArea] = useState('');

	return (
		<Panel nav={nav}>
			<PanHead
				title='Места'
				route='/'
			/>

			{loading && <ScreenSpinner />}

			<Fragment>
				<Header>Наши Фавориты</Header>

				<BannersGallery category='places' />

				<Separator
					size='4xl'
					style={{ paddingBottom: '10px', marginTop: '10px' }}
				/>

				<PlacesList
					activeArea={activeArea}
					data={data}
				/>

				{isOpenModal && (
					<Modal
						activeModal={activeModal}
						isOpenModal={isOpenModal}
						setData={setData}
						setLoading={setLoading}
						setActiveArea={setActiveArea}
						setIsOpenModal={setIsOpenModal}
						setActiveModal={setActiveModal}
					/>
				)}

				{!isOpenModal && !activeArea && (
					<Group>
						<Placeholder
							icon={<Icon56InfoOutline />}
							title='Выберите район'
							action={
								<Button
									size='l'
									mode='primary'
									onClick={() => {
										setIsOpenModal(true);
										setActiveModal('filters');
									}}>
									Выбрать
								</Button>
							}>
							Чтобы показать Вам места, Вы должны выбрать желаемый
							район
						</Placeholder>
					</Group>
				)}

				{!isOpenModal && activeArea && (
					<Div>
						<Button
							size='l'
							mode='primary'
							onClick={() => {
								setIsOpenModal(true);
								setActiveModal('filters');
							}}>
							Сменить район
						</Button>
					</Div>
				)}
			</Fragment>
		</Panel>
	);
};
