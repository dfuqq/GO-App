import React from 'react';

interface Props {
	className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
	children,
}) => {
	return (
		<div
			style={{
				maxWidth: '1280px',
				maxHeight: '100vh',
				margin: '0 auto',
				display: 'flex',
			}}>
			{children}
		</div>
	);
};
