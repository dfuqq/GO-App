import { Gallery } from '@vkontakte/vkui';
import { Image } from '@prisma/client';

interface Props {
	imageGallery: Image[];
}

export const BusinessItemImageGallery = ({ imageGallery }: Props) => {
	return (
		<Gallery
			slideWidth='100%'
			style={{ height: 225 }}
			align='center'
			bullets='light'>
			{imageGallery.map((image, index) => (
				<img
					style={{ objectFit: 'contain' }}
					src={image.src}
					alt={image.alt}
					key={image.id}
				/>
			))}
		</Gallery>
	);
};
