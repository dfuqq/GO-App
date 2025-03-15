'use client';
import { Button } from '@/components/ui';
import Image from 'next/image';
import React, { useState } from 'react';
import { businessBannersGalleryData } from 'prisma/data/business__banners-gallery-data';

const TestPage = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			style={{
				backgroundColor:
					isOpen ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 1)',
				height: '100vh',
				width: '100vw',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				transition: 'backgroundColor 0.5s ease',
			}}>
			<div
				style={{
					margin: '8px',
				}}>
				<h1 style={{ color: 'white', margin: 0 }}>В тренде</h1>
				<h2
					style={{
						color: 'gray',
						fontSize: '20px',
						fontWeight: 'lighter',
						margin: 0,
					}}>
					Самое популярное сейчас
				</h2>
			</div>
			<section style={{ height: '100%' }}>
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
					onClick={() => setIsOpen(!isOpen)}>
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
					<div
						style={{
							position: 'absolute',
							bottom: 0,
							left: 0,
							translate: isOpen ? '0 -90%' : '0',
							margin: '12px',
							display: 'flex',
							flexDirection: 'column',
							transition: 'translate 0.25s ease-in-out',
						}}>
						<span
							style={{
								fontWeight: 'lighter',
								fontSize: '20px',
								color: 'white',
								opacity: 0.75,
							}}>
							кафе
						</span>
						<span
							style={{
								fontWeight: 'bold',
								fontSize: '24px',
								color: 'white',
							}}>
							NYC
						</span>
						<span
							style={{
								color:
									isOpen ?
										'rgba(255,255,255,0.5)'
									:	'rgba(255,255,255,0)',
								translate: isOpen ? '0 0' : '0 150px',
								height: isOpen ? 'auto' : 0,
								transition:
									isOpen ?
										'translate 0.33s ease, color 0.75s ease'
									:	'color 0s',
							}}>
							Лучшее антикафе города – выбор тысяч горожан на
							протяжении 10 лет
						</span>
					</div>
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
							onClick={(e: React.MouseEvent) =>
								e.stopPropagation()
							}
						/>
					</div>
				</div>
				<div
					style={{
						height: '25vh',
						backgroundColor: 'white',
						margin: '8px 24px',
						borderRadius: '25px',
						position: 'relative',
						opacity: 1,
						transition:
							'height 0.33s ease-in-out 0.25s, margin 0.25s ease-in-out',
					}}>
					<div
						style={{
							position: 'absolute',
							bottom: 0,
							left: 0,
							translate: isOpen ? '0 -90%' : '0',
							margin: '12px',
							display: 'flex',
							flexDirection: 'column',
							transition: 'translate 0.25s ease-in-out',
						}}>
						<span
							style={{
								fontWeight: 'lighter',
								fontSize: '20px',
								color: 'black',
								opacity: 0.75,
							}}>
							бар
						</span>
						<span
							style={{
								fontWeight: 'bold',
								fontSize: '24px',
								color: 'black',
							}}>
							Auditorium
						</span>
					</div>
					<div
						style={{
							opacity: isOpen ? 1 : 0,
							translate: isOpen ? '0 0' : '0 -150px',
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
							onClick={(e: React.MouseEvent) =>
								e.stopPropagation()
							}
						/>
					</div>
				</div>
			</section>
			<footer style={{ position: 'fixed', bottom: 0, width: '100%' }}>
				<div style={{ height: '10vh', backgroundColor: 'red' }}>
					<span>tabbar</span>
				</div>
			</footer>
		</div>
	);
};

export default TestPage;
