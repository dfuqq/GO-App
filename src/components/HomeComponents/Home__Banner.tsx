'use client';
import React from 'react';
import { Button } from '../ui';
import Image from 'next/image';
import { businessBannersGalleryData } from '@/prisma/data/business__banners-gallery-data';
import { HomeBannerInfo } from './Home__Banner-Info';
import { useRouter } from 'next/navigation';

interface Props {
	isOpen: boolean;
	openIndex: number | null;
	index: number;
	setOpenIndex: (index: number | null) => void;
}

export const HomeBanner = ({
	index,
	openIndex,
	isOpen,
	setOpenIndex,
}: Props) => {
	const router = useRouter();

	return (
		<div
			style={{
				height: isOpen ? '75vh' : '25vh',
				backgroundColor: 'black',
				margin: isOpen ? '8px 12px' : '8px 24px',
				borderRadius: '25px',
				position: 'relative',
				opacity: 1,
				transition:
					'height 0.33s ease-in-out 0.25s, margin 0.25s ease-in-out',
			}}
			onClick={() => setOpenIndex(openIndex === index ? null : index)}>
			<Image
				src={businessBannersGalleryData[0].src}
				alt='logo'
				fill
				unoptimized
				style={{
					objectFit: 'contain',
					// transition: 'all 0.25s',
				}}
			/>
			<HomeBannerInfo isOpen={isOpen} />
			<div
				style={{
					opacity: isOpen ? 1 : 0,
					translate: isOpen ? '0 0' : '0 150px',
					position: 'absolute',
					bottom: '12px',
					left: '12px',
					height: isOpen ? 'auto' : 0,
					transition:
						isOpen ?
							'translate 0.33s ease, opacity 0.5s ease'
						:	'opacity 0s',
				}}>
				<Button
					text='посмотреть'
					onClick={(e: React.MouseEvent) => {
						e.stopPropagation();
						router.push(
							`/business/cafes/${businessBannersGalleryData[0].businessSlug}`
						);
					}}
				/>
			</div>
		</div>
	);
};
