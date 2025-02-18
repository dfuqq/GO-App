'use client';
import { Gallery } from '@vkontakte/vkui';
import { useRouter } from 'next/navigation';
import React from 'react';

import { businessBannersGalleryData } from '../../prisma/data/business__banners-gallery-data';

export const BusinessBannersGallery = () => {
	const router = useRouter();

	return (
		<Gallery
			slideWidth='92%'
			style={{ height: 200 }}
			align='center'>
			{businessBannersGalleryData.map((cardItem) => (
				<img
					src={cardItem.src}
					style={{
						objectFit: 'contain',
						borderRadius: '20px',
						margin: '0 3px',
						width: '90vw',
						backgroundColor: '#000',
					}}
					alt={cardItem.alt}
					key={cardItem.businessSlug}
					onClick={() =>
						router.push(
							`/business/${cardItem.type}/${cardItem.businessSlug}`
						)
					}
				/>
			))}
		</Gallery>
	);
};
