'use client';
import { Tabbar } from '@/components/ui';
import React, { useState } from 'react';
import { HomeBanner } from '@/components/HomeComponents';
import { Places } from '@/components/PlacesComponents';

const TestPage = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const [activeTab, setActiveTab] = useState<string>('home');
	const arrTest = [1, 2];

	if (activeTab === 'home') {
		return (
			<div
				style={{
					backgroundColor:
						openIndex ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 1)',
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
					{arrTest.map((index) => {
						const isOpen = openIndex === index;
						return (
							<HomeBanner
								key={index}
								index={index}
								openIndex={openIndex}
								setOpenIndex={setOpenIndex}
								isOpen={isOpen}
							/>
						);
					})}
				</section>
				<footer style={{ position: 'fixed', bottom: 0, width: '100%' }}>
					<Tabbar setActiveTab={setActiveTab} />
				</footer>
			</div>
		);
	}

	if (activeTab === 'places' || activeTab === 'business') {
		return (
			<div
				style={{
					backgroundColor:
						openIndex ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 1)',
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
					<h1 style={{ color: 'white', margin: 0 }}>
						{activeTab === 'places' ? 'Места' : 'Заведения '}
					</h1>
				</div>
				<Places />
				<footer style={{ position: 'fixed', bottom: 0, width: '100%' }}>
					<Tabbar setActiveTab={setActiveTab} />
				</footer>
			</div>
		);
	}

	if (activeTab === 'favourites') {
		return (
			<div
				style={{
					backgroundColor:
						openIndex ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 1)',
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
					<h1 style={{ color: 'white', margin: 0 }}>Избранное</h1>
				</div>
				<footer style={{ position: 'fixed', bottom: 0, width: '100%' }}>
					<Tabbar setActiveTab={setActiveTab} />
				</footer>
			</div>
		);
	}
};

export default TestPage;
