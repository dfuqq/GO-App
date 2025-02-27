'use client';
import React, { useEffect, useState } from 'react';

import { Panel, Group, Separator, ScreenSpinner } from '@vkontakte/vkui';

import { Place } from '@prisma/client';

import { BannersGallery, Modal, PanHead, PlacesControls, PlacesList } from './';
import { useSearchParams } from 'next/navigation';
import { PageProps } from 'src/@types/page-props';

export const Places = ({ nav }: PageProps) => {
	const [activeModal, setActiveModal] = useState(null);
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [data, setData] = useState<Place[]>([]);
	const [loading, setLoading] = useState(false);
	const [activeArea, setActiveArea] = useState(useSearchParams().get('area'));
	const [activeCategories, setActiveCategories] = useState(
		useSearchParams().get('categories')
	);

	useEffect(() => {
		setLoading(true);
		fetch(`/api/places?area=${activeArea}&categories=${activeCategories}`)
			.then((res) => res.json())
			.then((data) => setData(data))
			.catch((err) => console.error('Ошибка загрузки мест:', err))
			.finally(() => setLoading(false));
	}, [activeArea, activeCategories]);

	return (
		<Panel nav={nav}>
			<PanHead
				title='Места'
				route='/'
			/>

			{loading && <ScreenSpinner />}

			{!loading && (
				<Group>
					<BannersGallery category='places' />

					<Separator size='4xl' />

					<PlacesControls
						isOpenModal={isOpenModal}
						activeArea={activeArea}
						activeCategories={activeCategories}
						setIsOpenModal={setIsOpenModal}
						setActiveModal={setActiveModal}
					/>

					<PlacesList
						activeArea={activeArea}
						data={data}
					/>

					{isOpenModal && (
						<Modal
							activeModal={activeModal}
							activeArea={activeArea}
							isOpenModal={isOpenModal}
							setActiveArea={setActiveArea}
							setIsOpenModal={setIsOpenModal}
							setActiveModal={setActiveModal}
							activeCategories={activeCategories}
							setActiveCategories={setActiveCategories}
						/>
					)}
				</Group>
			)}
		</Panel>
	);
};
