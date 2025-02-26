'use client';
import React, { useState } from 'react';

import { Panel, Group, Separator, ScreenSpinner } from '@vkontakte/vkui';

import { Place } from '@prisma/client';

import { BannersGallery, Modal, PanHead, PlacesControls, PlacesList } from './';

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

				<PlacesControls
					isOpenModal={isOpenModal}
					activeArea={activeArea}
					setIsOpenModal={setIsOpenModal}
					setActiveModal={setActiveModal}
				/>
			</Group>
		</Panel>
	);
};
