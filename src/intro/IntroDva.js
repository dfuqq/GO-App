import React, { Fragment } from 'react';

import { Panel, Button, FixedLayout, Group, Div } from '@vkontakte/vkui';

import Think from './think.png';

const IntroDva = ({ id, check, goInt, getGeoIntro }) => (
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
						src={Think}
						alt='geo_access'
						style={{ width: '65px', height: '65px' }}
					/>
					<h2 style={{ marginTop: '10px' }}>Давай настроимся?</h2>
					<h4 style={{ color: '#76787A', fontWeight: 500 }}>
						Нам нужно получить
						<br />
						доступ к твоим геоданным,
						<br />
						чтобы мы смогли показывать тебя на картах.
					</h4>
					<Div
						style={{ padding: 0, display: 'flex', justifyContent: 'center' }}>
						<Button size='m' mode='overlay_primary' onClick={getGeoIntro}>
							Дать доступ
						</Button>
					</Div>
				</Div>
				<FixedLayout vertical='bottom'>
					<Div>
						<Fragment>
							{check === false && (
								<Button disabled size='xl' mode='commerce'>
									Продолжить
								</Button>
							)}
							{check === true && (
								<Button
									size='xl'
									mode='commerce'
									onClick={goInt}
									data-to='introtri'>
									Продолжить
								</Button>
							)}
						</Fragment>
					</Div>
				</FixedLayout>
			</Group>
		</div>
	</Panel>
);

export default IntroDva;
