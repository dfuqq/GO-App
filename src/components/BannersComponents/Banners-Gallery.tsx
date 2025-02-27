import { Gallery, Header } from '@vkontakte/vkui';
import React from 'react';

import { businessBannersGalleryData } from '@/prisma/data/business__banners-gallery-data';
import { placesBannersGalleryData } from '@/prisma/data/places__banners-gallery-data';
import { ImagesBannersDTO } from '@/prisma/data/types';

import { BannersGalleryItem } from '@/components/index';

interface Props {
	category: 'business' | 'places';
}

export const BannersGallery = ({ category }: Props) => {
	const galleryData =
		category === 'business' ?
			businessBannersGalleryData
		:	placesBannersGalleryData;

	return (
		<>
			<Header>Наши Фавориты</Header>

			<Gallery
				slideWidth='92%'
				style={{ maxHeight: '25vh' }}
				align='center'>
				{galleryData.map((galleryItem: ImagesBannersDTO) => (
					<BannersGalleryItem
						galleryItem={galleryItem}
						category={category}
						key={
							category === 'business' ?
								galleryItem.businessSlug
							:	galleryItem.placeSlug
						}
					/>
				))}
			</Gallery>
		</>
	);
};
