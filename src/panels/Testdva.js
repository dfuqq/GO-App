import React, { Fragment } from 'react';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

const Testdva = (props) => (
	<Panel id={props.id} centered={true}>
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
						src='#'
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
						<Button
							size='m'
							mode='overlay_primary'
							onClick={props.getCoordinates}>
							Дать доступ
						</Button>
					</Div>
				</Div>
				<FixedLayout vertical='bottom'>
					<Div>
						<Fragment>
							{props.check === false && (
								<Button
									disabled
									size='xl'
									mode='commerce'
									onClick={props.nextIntroPage}
									data-to='testtri'>
									Продолжить
								</Button>
							)}
							{props.check === true && (
								<Button
									size='xl'
									mode='commerce'
									onClick={props.nextIntroPage}
									data-to='testtri'>
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

export default Testdva;
