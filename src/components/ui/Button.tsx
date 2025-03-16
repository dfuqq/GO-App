'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import arrow from 'src/arrow.svg';

interface Props {
	text: string;
	onClick?;
	variant?: 'primary' | 'secondary';
}

export const Button = ({ text, variant = 'primary', onClick }: Props) => {
	const [hover, setHover] = useState(false);

	switch (variant) {
		case 'primary':
			return (
				<button
					style={{
						height: '40px',
						padding: '8px 24px',
						paddingRight: hover ? '16px' : '0px',
						fontWeight: 'normal',
						fontSize: '20px',
						background: hover ? 'white' : 'none',
						transition:
							'all 0.2s ease, color 0.1s ease, border 1s ease',
						border: hover ? '1px solid red' : '1px solid gray',
						borderRadius: '25px',
						color: hover ? 'black' : 'white',
						display: 'inline flex',
						alignItems: 'center',
						justifyContent: 'center',
						whiteSpace: 'nowrap',
						cursor: 'pointer',
					}}
					onClick={onClick}
					onMouseEnter={() => setHover(!hover)}
					onMouseLeave={() => setHover(!hover)}>
					<span
						style={{
							translate: hover ? '-8px' : '0px',
							transition: 'all 0.2s ease-in-out',
						}}>
						{text.toLowerCase()}
					</span>
					<Image
						src={arrow}
						alt='arrow'
						style={{
							translate: hover ? '-4px' : '-40px',
							opacity: hover ? '1' : '0',
							zIndex: hover ? 0 : -10,
							transition:
								hover ?
									'translate 0.5s ease, opacity 1s ease'
								:	'translate 0.5s ease, opacity 0.1s ease',
						}}
					/>
				</button>
			);
		case 'secondary':
			return (
				<button
					style={{
						height: '40px',
						padding: '20px 32px',
						fontWeight: 'normal',
						fontSize: '20px',
						background: hover ? 'rgba(20,20,20,1)' : 'none',
						border: hover ? '1px solid white' : '1px solid gray',
						borderRadius: '25px',
						color: 'white',
						display: 'inline flex',
						alignItems: 'center',
						justifyContent: 'center',
						whiteSpace: 'nowrap',
						cursor: 'pointer',
						transition: 'border 0.5s ease, background 0.5s ease',
					}}
					onMouseEnter={() => setHover(!hover)}
					onMouseLeave={() => setHover(!hover)}>
					<span>{text.toLowerCase()}</span>
				</button>
			);
		default:
			return null;
	}
};
