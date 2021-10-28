import React, { Fragment } from 'react';

import { Panel, Button, Group, Div, FixedLayout } from '@vkontakte/vkui';

import './Intro.css';

import Vidt from './RenderT.mp4';

const Intro = ({ id, snackbarError, fetchedUser, nextIntroPage }) => {
	return (
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
				{fetchedUser && (
					<Fragment>
						<Group>
							<Div
								style={{
									display: 'flex',
									justifyContent: 'center',
									paddingBottom: 0,
								}}>
								<video
									width='128'
									height='128'
									src={Vidt}
									autoPlay={true}
									playsInline={true}
								/>
							</Div>
							<Div className='User'>
								<h2 style={{ marginTop: 0, color: '#FEFEFE' }}>
									Привет, {fetchedUser.first_name}!
								</h2>
								<h3 style={{ color: '#FEFEFE', fontWeight: 500 }}>
									Добро пожаловать в "GO!"
									<br />
									Это — первое приложение-гид по Сургуту
									<br />
									<br />
									Создано горожанами для горожан
								</h3>
							</Div>
						</Group>
						<FixedLayout vertical='bottom'>
							<Div>
								<Button
									className='Gogogo'
									mode='commerce'
									size='xl'
									onClick={nextIntroPage}
									data-to='introdva'>
									Круто!
								</Button>
							</Div>
						</FixedLayout>
					</Fragment>
				)}
			</div>
			{snackbarError}
		</Panel>
	);
};

export default Intro;
