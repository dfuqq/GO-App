import { Button, ButtonGroup } from '@vkontakte/vkui';
import React from 'react';

export const AboutButtons = () => {
	return (
		<>
			<ButtonGroup
				style={{
					display: 'flex',
					justifyContent: 'center',
					margin: '0 0 12px',
				}}>
				<Button
					mode='secondary'
					size='l'
					href='https://t.me/d_fuq'
					target='_blank'>
					Связаться
				</Button>
			</ButtonGroup>
		</>
	);
};
