'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const Places = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	let touchStartX = 0;
	let touchEndX = 0;

	const router = useRouter();

	const items = ['Экран 1', 'Экран 2', 'Экран 3', 'Экран 4'];

	const handleTouchStart = (e: React.TouchEvent) => {
		touchStartX = e.touches[0].clientX;
	};

	const handleTouchEnd = (e: React.TouchEvent) => {
		touchEndX = e.changedTouches[0].clientX;
		const deltaX = touchStartX - touchEndX;

		if (deltaX > 50) {
			// Свайп влево (следующий div)
			setActiveIndex((prev) =>
				prev === items.length - 1 ? 0 : prev + 1
			);
		} else if (deltaX < -50) {
			// Свайп вправо (предыдущий div)
			setActiveIndex((prev) =>
				prev === 0 ? items.length - 1 : prev - 1
			);
		}
	};

	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				overflow: 'hidden',
				position: 'relative',
			}}
			onTouchStart={handleTouchStart}
			onTouchMove={(e: React.TouchEvent) => e.preventDefault()}
			onTouchEnd={handleTouchEnd}>
			{items.map((item, index) => (
				<div
					key={index}
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100vw',
						height: '100vh',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontSize: '24px',
						fontWeight: 'bold',
						backgroundColor:
							index % 2 === 0 ? 'lightgray' : 'darkgray',
						transition: 'transform 0.5s ease-in-out',
						transform: `translateX(${(index - activeIndex) * 100}%)`, // Двигаем div'ы по X
					}}>
					<div
						style={{ backgroundColor: 'blue' }}
						onClick={() => router.push('/business/cafes/nyc')}>
						{item}
					</div>
				</div>
			))}
		</div>
	);
};
