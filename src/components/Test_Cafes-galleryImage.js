import React from 'react';
import { Gallery } from '@vkontakte/vkui';

export const TestCafesGalleryImage = ({ galleryImage }) => {
	return (
		<Gallery
			slideWidth='100%'
			style={{ height: 225 }}
			align='center'
			bullets='light'>
			{galleryImage.map((image) => (
				<img
					style={{ objectFit: 'contain' }}
					src={image.src}
					alt={image.alt}
				/>
			))}
		</Gallery>
	);
};
