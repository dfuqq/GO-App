import React from 'react';

import { Panel, Button, FixedLayout, Group, Div } from '@vkontakte/vkui';

import Stars from './stars.png';

const IntroTri = ({ id, viewIntro }) => (
	<Panel id={id} centered={true}>
		<div
			style={{
				height: '100vh',
				width: '100vw',
				backgroundColor: '#19191A',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<Group>
				<Div style={{ textAlign: 'center', color: '#FEFEFE' }}>
					<img
						src={Stars}
						alt='ready'
						style={{ width: '65px', height: '65px' }}
					/>
					<h2 style={{ marginTop: '10px' }}>Всё готово!</h2>
				</Div>
				<FixedLayout vertical='bottom'>
					<Div>
						<Button size='xl' mode='commerce' onClick={viewIntro}>
							Поехали!
						</Button>
					</Div>
				</FixedLayout>
			</Group>
		</div>
	</Panel>
);

export default IntroTri;
