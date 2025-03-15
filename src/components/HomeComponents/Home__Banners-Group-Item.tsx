import { Banner } from '@vkontakte/vkui';
import { useRouter } from 'next/navigation';
import { BannerProps } from '@/prisma/data/types';
import React from 'react';

import { Button } from '../ui';

interface Props {
	banner: BannerProps;
}

export const HomeBannersGroupItem = ({ banner }: Props) => {
	const router = useRouter();

	return (
		<Banner
			mode='image'
			size='m'
			title={banner.title}
			subtitle={
				<span style={{ whiteSpace: 'pre-line' }}>
					{banner.subtitle}
				</span>
			}
			style={{ marginBottom: 12 }}
			actions={
				<Button
					text={banner.buttonText}
					onClick={() => router.push(banner.buttonLink)}
				/>
			}
			background={
				<div
					style={{
						backgroundColor: '#000',
						backgroundImage: `url(${banner.backgroundImage})`,
						backgroundSize: 250,
						backgroundPosition: 'right',
						backgroundRepeat: 'no-repeat',
					}}
				/>
			}
		/>
	);
};
