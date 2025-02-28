import { useRouter } from 'next/navigation';
import { ImagesBannersDTO } from '@/prisma/data/types';
import React from 'react';
import Image from 'next/image';

interface Props {
	galleryItem: ImagesBannersDTO;
	category: 'business' | 'places';
}

export const BannersGalleryItem = ({ galleryItem, category }: Props) => {
	const router = useRouter();

	return (
		<Image
			src={galleryItem.src}
			style={{
				objectFit: 'contain',
				borderRadius: '20px',
				margin: '0 3px',
				backgroundColor: '#000',
			}}
			fill={true}
			alt={galleryItem.alt}
			onClick={() =>
				category === 'business' ?
					router.push(
						`/business/${galleryItem.type}/${galleryItem.businessSlug}`
					)
				:	router.push(
						`/places/${galleryItem.area.toUpperCase()}/${galleryItem.placeSlug}?type=card`
					)
			}
			unoptimized
		/>
	);
};
