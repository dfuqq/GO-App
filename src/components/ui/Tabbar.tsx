import React from 'react';

interface Props {
	setActiveTab: (id: string) => void;
}

export const Tabbar = ({ setActiveTab }: Props) => {
	return (
		<div
			style={{
				height: '10vh',
				backgroundColor: 'red',
				display: 'flex',
				justifyContent: 'center',
			}}>
			<div
				style={{
					backgroundColor: 'yellow',
					height: '100px',
					width: '100px',
					margin: '12px',
					cursor: 'pointer',
				}}
				onClick={() => setActiveTab('home')}>
				Главная
			</div>
			<div
				style={{
					backgroundColor: 'blue',
					height: '100px',
					width: '100px',
					margin: '12px',
					cursor: 'pointer',
				}}
				onClick={() => setActiveTab('places')}>
				Места
			</div>
			<div
				style={{
					backgroundColor: 'green',
					height: '100px',
					width: '100px',
					margin: '12px',
					cursor: 'pointer',
				}}
				onClick={() => setActiveTab('business')}>
				Заведения
			</div>
			<div
				style={{
					backgroundColor: 'green',
					height: '100px',
					width: '100px',
					margin: '12px',
					cursor: 'pointer',
				}}
				onClick={() => setActiveTab('favourites')}>
				Избранное
			</div>
		</div>
	);
};
