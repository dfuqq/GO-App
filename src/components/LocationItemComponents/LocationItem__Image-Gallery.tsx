import { Gallery } from '@vkontakte/vkui';
import { Image } from '@prisma/client';

interface Props {
	imageGallery: Image[];
}

export const LocationItemImageGallery = ({ imageGallery }: Props) => {
	return (
		<Gallery
			slideWidth='100%'
			style={{ maxHeight: '50vh' }}
			align='center'
			bullets={imageGallery.length > 1 ? 'light' : null}>
			{imageGallery.map((image) => (
				<img
					style={{ objectFit: 'contain', maxHeight: '50vh' }}
					src={image.src}
					alt={image.alt}
					key={image.id}
				/>
			))}
		</Gallery>
	);
};
