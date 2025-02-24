'use client';
import { Gallery } from '@vkontakte/vkui';
import { useRouter } from 'next/navigation';
import React from 'react';

import { businessBannersGalleryData } from '../../prisma/data/business__banners-gallery-data';
import { placesBannersGalleryData } from '../../prisma/data/places__banners-gallery-data';

interface Props {
	category: 'business' | 'places';
}

// TODO: Beautify
export const BannersGallery = ({ category }: Props) => {
	const router = useRouter();

	return (
		<Gallery
			slideWidth='92%'
			style={{ maxHeight: '25vh' }}
			align='center'>
			{category === 'business' &&
				businessBannersGalleryData.map((galleryItem) => (
					<img
						src={galleryItem.src}
						style={{
							objectFit: 'contain',
							borderRadius: '20px',
							margin: '0 3px',
							backgroundColor: '#000',
							maxHeight: '25vh',
						}}
						alt={galleryItem.alt}
						key={galleryItem.businessSlug}
						onClick={() =>
							router.push(
								`/business/${galleryItem.type}/${galleryItem.businessSlug}`
							)
						}
					/>
				))}
			{category === 'places' &&
				placesBannersGalleryData.map((galleryItem) => (
					<img
						src={galleryItem.src}
						style={{
							objectFit: 'contain',
							borderRadius: '20px',
							margin: '0 3px',
							backgroundColor: '#000',
							maxHeight: '25vh',
						}}
						alt={galleryItem.alt}
						key={galleryItem.placeSlug}
						onClick={() =>
							router.push(
								`/places/${galleryItem.area}/${galleryItem.placeSlug}`
							)
						}
					/>
				))}
		</Gallery>
	);
};
