import React from 'react';

import { Panel, Avatar, Group, Div, Button } from '@vkontakte/vkui';
import { PanHead } from './PanHead';

import { PageProps } from 'src/@types/page-props';

// XXX: Cleanup
export const Projects = ({ nav }: PageProps) => (
	<Panel
		nav={nav}
		centered>
		<PanHead title='Другие проекты' />

		<Group style={{ textAlign: 'center' }}>
			<Div style={{ display: 'flex', justifyContent: 'center' }}>
				<a
					href='https://vk.com/romsurdvorov'
					target='_blank'
					rel='noopener noreferrer'>
					<Avatar
						size={104}
						src='https://sun9-11.userapi.com/pWCnrYUZF1hUeqvcmnkClwmBvYKNX4Luib0AEA/bqlXyZvNJLM.jpg'
					/>
				</a>
			</Div>
			<h3
				style={{
					marginTop: 0,
					marginBottom: '4px',
					paddingLeft: '20px',
					paddingRight: '20px',
				}}>
				романтика сургутских дворов
			</h3>
			<h4
				style={{
					paddingLeft: '20px',
					paddingRight: '20px',
					fontWeight: 400,
				}}>
				Наш главный проект,
				<br />
				показывающий красоту Сургута через фотографии его жителей.
			</h4>
			<Div>
				<Button
					mode='primary'
					size='l'
					href='https://vk.com/romsurdvorov'
					target='_blank'>
					Перейти
				</Button>
			</Div>
		</Group>

		<Group style={{ textAlign: 'center' }}>
			<Div style={{ display: 'flex', justifyContent: 'center' }}>
				<a
					href='https://vk.com/romekbdvorov'
					target='_blank'
					rel='noopener noreferrer'>
					<Avatar
						size={104}
						src='https://sun9-29.userapi.com/IK5KQVhm5x95dtxqoTLLvTScxL-ciKyJOO0S-g/tE6CkBHndw0.jpg'
					/>
				</a>
			</Div>
			<h3
				style={{
					marginTop: 0,
					marginBottom: '4px',
					paddingLeft: '20px',
					paddingRight: '20px',
				}}>
				романтика екатеринбургских дворов
			</h3>
			<h4
				style={{
					paddingLeft: '20px',
					paddingRight: '20px',
					fontWeight: 400,
				}}>
				Наш второй проект,
				<br />
				который раскрывает Екатеринбург с новой стороны.
				<br />
				Подписывайтесь, чтобы получать ещё больше удовольствия.
			</h4>
			<Div>
				<Button
					mode='primary'
					size='l'
					href='https://vk.com/romekbdvorov'
					target='_blank'>
					Перейти
				</Button>
			</Div>
		</Group>
	</Panel>
);
