import React from 'react';

interface Props {
	isOpen: boolean;
}

export const HomeBannerInfo = ({ isOpen }: Props) => {
	return (
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
				Лучшее антикафе города – выбор тысяч горожан на протяжении 10
				лет
			</span>
		</div>
	);
};
