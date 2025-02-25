'use client';
import React, { useState } from 'react';

import {
	Panel,
	Button,
	Group,
	Separator,
	ScreenSpinner,
	Div,
} from '@vkontakte/vkui';

import { PanHead } from './PanHead';
import { Modal } from './Modal';
import { BannersGallery } from './Banners-Gallery';
import { Place } from '@prisma/client';
import { PlacesList } from './PlacesComponents/Places__List';
import { PlacesPlaceholder } from './PlacesComponents/Places__Placeholder';

interface Props {
	nav: string;
}

export const Places = ({ nav }: Props) => {
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

			<Group>
				<BannersGallery category='places' />

				<Separator size='4xl' />

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
					<PlacesPlaceholder
						setIsOpenModal={setIsOpenModal}
						setActiveModal={setActiveModal}
					/>
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
			</Group>
		</Panel>
	);
};
