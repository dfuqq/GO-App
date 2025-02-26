import { Avatar, Div, Group } from '@vkontakte/vkui';
import React from 'react';

export const AboutInfo = () => {
	return (
		<Group
			style={{ textAlign: 'center' }}
			description='v. 2.0.0'
			separator='hide'>
			<Div style={{ display: 'flex', justifyContent: 'center' }}>
				<Avatar
					size={104}
					src='https://sun9-26.userapi.com/-1dDyuNbVzSzS-E0cdh4rZKEHUjU7MVmA8j6aw/MtOsN166n84.jpg'
				/>
			</Div>
			<h2 style={{ marginTop: 0, marginBottom: '4px' }}>
				GO! - Гид по Сургуту
			</h2>
		</Group>
	);
};
