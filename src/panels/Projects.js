import React from 'react';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Avatar,
	Group,
	Div,
	Button,
} from '@vkontakte/vkui';

const Projects = ({ id }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}>
			Другие проекты
		</PanelHeader>

		<Group style={{ textAlign: 'center' }}>
			<Div style={{ display: 'flex', justifyContent: 'center' }}>
				<a
					href='https://vk.com/romsurdvorov'
					target='_blank'
					rel='noopener noreferrer'>
					<Avatar
						mode='default'
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
				style={{ paddingLeft: '20px', paddingRight: '20px', fontWeight: 400 }}>
				Наш главный проект,
				<br />
				показывающий красоту Сургута через фотографии его жителей.
			</h4>
			<Div>
				<Button
					mode='primary'
					size='xl'
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
						mode='default'
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
				style={{ paddingLeft: '20px', paddingRight: '20px', fontWeight: 400 }}>
				Наш второй проект,
				<br />
				который раскрывает Екатеринбург с новой стороны.
				<br />
				Подписывайтесь, чтобы получать ещё больше удовольствия.
			</h4>
			<Div>
				<Button
					mode='primary'
					size='xl'
					href='https://vk.com/romekbdvorov'
					target='_blank'>
					Перейти
				</Button>
			</Div>
		</Group>

		<Group style={{ textAlign: 'center' }}>
			<Div style={{ display: 'flex', justifyContent: 'center' }}>
				<a
					href='https://instagram.com/romsurdvorov'
					target='_blank'
					rel='noopener noreferrer'>
					<Avatar
						mode='default'
						size={104}
						src='https://sun9-23.userapi.com/V4COqUco6ohYrA7tXNjEMdCU5eJjNT7pRSORVA/NHKHZ2SxZJo.jpg'
					/>
				</a>
			</Div>
			<h2>Instagram</h2>
			<h4
				style={{ paddingLeft: '20px', paddingRight: '20px', fontWeight: 400 }}>
				Мини-блог паблика,
				<br />в котором мы иногда рассказываем о грядущих обновлениях.
			</h4>
			<Div>
				<Button
					mode='primary'
					size='xl'
					href='https://instagram.com/romsurdvorov'
					target='_blank'>
					Перейти
				</Button>
			</Div>
		</Group>
	</Panel>
);

export default Projects;
