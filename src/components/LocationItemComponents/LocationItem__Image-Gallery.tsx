import { Gallery } from '@vkontakte/vkui';
import { Image as PrismaImage } from '@prisma/client';
import Image from 'next/image';

interface Props {
	imageGallery: PrismaImage[];
}

export const LocationItemImageGallery = ({ imageGallery }: Props) => {
	return (
		<Gallery
			slideWidth='100%'
			style={{ height: '50vw', minHeight: '15vh', maxHeight: '50vh' }}
			align='center'
			bullets={imageGallery.length > 1 ? 'light' : null}>
			{imageGallery.map((image) => (
				<div
					key={image.id}
					style={{
						position: 'relative',
						width: '100%',
						height: '100%',
					}}>
					<Image
						style={{
							borderRadius: '20px',
							margin: '0 3px',
							backgroundColor: '#000',
							objectFit: 'contain',
						}}
						src={image.src}
						alt={image.alt}
						key={image.id}
						fill={true}
						unoptimized
					/>
				</div>
			))}
		</Gallery>
	);
};
