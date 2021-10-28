import React, { Fragment, useEffect } from 'react';
import { platform, ANDROID } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';

import {
	Panel,
	PanelHeader,
	Button,
	Group,
	Banner,
	Footer,
	Cell,
} from '@vkontakte/vkui';

import Icon24Info from '@vkontakte/icons/dist/24/info';
import Icon24ShareOutline from '@vkontakte/icons/dist/24/share_outline';
import Icon24AddSquareOutline from '@vkontakte/icons/dist/24/add_square_outline';

const osName = platform();

const Home = ({ id, changePanel, placesGo, shareButtonAction }) => {
	useEffect(() => {
		const joinGroup = async function () {
			await bridge.send('VKWebAppJoinGroup', {
				group_id: 107414531,
			});
		};

		joinGroup(); //Выполнение bridge.send на подписку при инициализации App
	}, []);

	const add = async function () {
		await bridge.send('VKWebAppAddToHomeScreen'); // bridge.send при добавлении на главный экран устройства (Android)
	};

	return (
		<Panel id={id}>
			<PanelHeader>GO!</PanelHeader>

			<Group>
				<Banner
					mode='image'
					size='m'
					header='Места'
					subheader={
						<span>
							Лучшие места города
							<br />
							уже тут!
						</span>
					}
					actions={
						<Button
							mode='overlay_primary'
							size='l'
							onClick={placesGo}
							data-to='places'>
							Посмотреть
						</Button>
					}
					background={
						<div
							style={{
								backgroundColor: '#000',
								backgroundImage:
									'url(https://sun9-39.userapi.com/Ne6kjvxq_9v3igWMUhREw0fmGSVPXda4lPjXvQ/U3T2zDQiY1c.jpg)',
								backgroundSize: 250,
								backgroundPosition: 'right',
								backgroundRepeat: 'no-repeat',
							}}
						/>
					}
				/>

				<Banner
					mode='image'
					size='m'
					header='Заведения'
					subheader={
						<span>
							Известные заведения
							<br />
							находятся здесь!
						</span>
					}
					actions={
						<Button
							mode='overlay_primary'
							size='l'
							onClick={changePanel}
							data-to='business'>
							Узнать
						</Button>
					}
					background={
						<div
							style={{
								backgroundColor: '#000',
								backgroundImage:
									'url(https://sun9-21.userapi.com/d4XPHmkEHPMX1t_36IWTzOso6xKpegcpeFIywA/SrCnBt6_lTc.jpg)',
								backgroundSize: 250,
								backgroundPosition: 'right',
								backgroundRepeat: 'no-repeat',
							}}
						/>
					}
				/>

				{/*	<Banner 
				mode="image"
				size="m"
				header="Мероприятия"
				subheader={<span>Самые интересные события<br />в этой вкладке!</span>}
				actions={<Button mode="overlay_primary" size="l" onClick={changePanel} data-to="partys">Подробнее</Button>}
				background={
					<div
						style={{
							backgroundColor: '#000',
							backgroundImage: 'url(https://sun9-65.userapi.com/QgrbZjUdWZnEayP6p3plOutrjm3zrHkBNE7dUQ/MxRDn_eB2fk.jpg)',
							backgroundSize: 250,
							backgroundPosition: 'right',
							backgroundRepeat: 'no-repeat'
						}}
					/>
				}
			/> */}
			</Group>

			<Group>
				<Cell before={<Icon24Info />} onClick={changePanel} data-to='about'>
					О приложении
				</Cell>
				<Cell before={<Icon24ShareOutline />} onClick={shareButtonAction}>
					Поделиться
				</Cell>
				{osName === ANDROID && (
					<Fragment>
						<Cell before={<Icon24AddSquareOutline />} onClick={add}>
							Добавить на экран устройства
						</Cell>
					</Fragment>
				)}
			</Group>

			<Footer>© РСД, 2020</Footer>
		</Panel>
	);
};

export default Home;
