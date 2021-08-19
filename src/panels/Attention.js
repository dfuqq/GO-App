import React from 'react';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Group,
	Div,
	Placeholder,
	Button,
} from '@vkontakte/vkui';

import Icon56ErrorOutline from '@vkontakte/icons/dist/56/error_outline';

const Attention = ({ id }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}>
			Бизнесам
		</PanelHeader>

		<Group
			style={{
				textAlign: 'center',
				paddingLeft: '10px',
				paddingRight: '10px',
			}}>
			<Div
				style={{
					background: 'linear-gradient(to right, #fc466b, #3f5efb)',
					borderRadius: '15px',
				}}>
				<h2
					style={{ paddingLeft: '10px', paddingRight: '10px', color: '#fff' }}>
					Владелец
					<br />
					представленного бизнеса?
				</h2>
			</Div>

			<Div>
				Все данные о заведениях были взяты из открытых источников сети Интернет,
				а приоритетной являлась информация из официальных аккаунтов.
				<br />
				По любым вопросам, касающимся Вашего бизнеса, просим обращаться в личные
				сообщения сообщества.
			</Div>
		</Group>

		<Group
			style={{
				textAlign: 'center',
				paddingLeft: '10px',
				paddingRight: '10px',
			}}>
			<Div
				style={{
					background: 'linear-gradient(to right, #00b09b, #96c93d)',
					borderRadius: '15px',
				}}>
				<h2
					style={{ paddingLeft: '10px', paddingRight: '10px', color: '#fff' }}>
					Хотите попасть в каталог?
				</h2>
			</Div>

			<Div>
				Убедитесь, что Ваше заведение имеет один из типов, что представлены в
				каталоге.
				<br />
				<br />
				Чтобы попасть на модерацию, напишите в личные сообщения сообщества,
				приложив несколько фотографий интерьера (в горизонтальной ориентации),
				блюда и описание заведение Вашими словами.
			</Div>
		</Group>

		<Group style={{ paddingTop: 0 }}>
			<Placeholder
				style={{ paddingBottom: '10px', marginTop: 0 }}
				icon={<Icon56ErrorOutline />}
				header='Внимание'
				action={
					<Button
						size='xl'
						mode='primary'
						href='https://vk.me/romsurdvorov'
						target='_blank'>
						Написать
					</Button>
				}>
				Срок рассмотрения заявки может занять до трёх дней.
			</Placeholder>
		</Group>
	</Panel>
);

export default Attention;
