import { Button, Div } from '@vkontakte/vkui';
import React from 'react';

export const AboutButtons = () => {
	return (
		<>
			<Div style={{ paddingBottom: 0 }}>
				<Button
					mode='primary'
					size='l'
					href='https://vk.cc/atIYtr'
					target='_blank'>
					Поддержать
				</Button>
			</Div>
			<Div>
				<Button
					mode='primary'
					size='l'
					href='https://t.me/d_fuq'
					target='_blank'>
					Связаться
				</Button>
			</Div>
		</>
	);
};
