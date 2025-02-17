import React from 'react';
import { Gallery } from '@vkontakte/vkui';

interface Props {
	galleryImage: [{ src: string; alt: string }];
}

export const TestCafesGalleryImage = ({ galleryImage }: Props) => {
	return (
		<Gallery
			slideWidth='100%'
			style={{ height: 225 }}
			align='center'
			bullets='light'>
			{/* NOTE: need a key from db (possibly id) */}
			{galleryImage.map((image, index) => (
				<img
					style={{ objectFit: 'contain' }}
					src={image.src}
					alt={image.alt}
					key={index}
				/>
			))}
		</Gallery>
	);
};
