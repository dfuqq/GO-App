import React from 'react';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Div,
	Button,
	Separator,
	Group,
	Avatar,
	CardGrid,
	Card,
} from '@vkontakte/vkui';

interface Props {
	id: string;
	changePanel: (e: React.MouseEvent) => void;
	setActiveView: (arg0: string) => void;
}

export const About = ({ id, changePanel, setActiveView }: Props) => (
	<Panel id={id}>
		<PanelHeader
			before={
				<PanelHeaderBack
					onClick={(e) => {
						setActiveView('home');
						changePanel(e);
					}}
					data-to='home'></PanelHeaderBack>
			}>
			О приложении
		</PanelHeader>

		<Group
			style={{ textAlign: 'center' }}
			description='v. 1.1.3'
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

		<Separator size='4xl' />

		<Group separator='hide'>
			<CardGrid size='s'>
				<Card
					style={{
						height: 82,
						backgroundColor: '#000',
						display: 'flex',
						justifyContent: 'center',
					}}
					onClick={changePanel}
					data-to='credits'>
					<img
						style={{ height: 82, width: 82 }}
						src='https://sun9-12.userapi.com/ROG9IYSur1xbUvDcT919Q0gUh0n5w5_a90bFjg/oydD9n7iwPg.jpg'
						alt='credits'
					/>
				</Card>
				<Card
					style={{
						height: 82,
						backgroundColor: '#000',
						display: 'flex',
						justifyContent: 'center',
					}}
					onClick={changePanel}
					data-to='attention'>
					<img
						style={{ height: 82, width: 82 }}
						src='https://sun9-40.userapi.com/L0O5qItpUnMy1Cwd6rNYNoQJ-c_5DCZVMs_B5Q/YXvZOX_R6_o.jpg'
						alt='attention'
					/>
				</Card>
				<Card
					style={{
						height: 82,
						backgroundColor: '#000',
						display: 'flex',
						justifyContent: 'center',
					}}
					onClick={changePanel}
					data-to='projects'>
					<img
						style={{ height: 82, width: 82 }}
						src='https://sun9-54.userapi.com/gar1Q9QxsTnUgQpNZWfTbQtLhQXc08vPenmVrg/55wgZfq-FW8.jpg'
						alt='projects'
					/>
				</Card>
			</CardGrid>
		</Group>

		<Group>
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
					href='https://vk.me/romsurdvorov'
					target='_blank'>
					Связаться
				</Button>
			</Div>
		</Group>
	</Panel>
);
