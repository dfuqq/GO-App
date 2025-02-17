import React, { Fragment } from 'react';
import { PlatformProvider } from '@vkontakte/vkui';

import {
	Panel,
	PanelHeader,
	Button,
	Group,
	Banner,
	Footer,
	Cell,
} from '@vkontakte/vkui';

import {
	Icon24Info,
	Icon24ShareOutline,
	Icon24AddSquareOutline,
} from '@vkontakte/icons';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Props {
	nav: string;
	// changePanel: (panel: string, view?: string) => void;
	// changePanelToPlaces: (e: React.MouseEvent) => void;
	// shareButtonAction: () => void;
	// setActiveView: (arg0: string) => void;
}

export const Home = ({
	nav,
	// changePanelToPlaces,
	// shareButtonAction,
	// setActiveView,
}: Props) => {
	const router = useRouter();
	// useEffect(() => {
	// 	const joinGroup = async function () {
	// 		await bridge.send('VKWebAppJoinGroup', {
	// 			group_id: 107414531,
	// 		});
	// 	};

	// 	joinGroup(); //Выполнение bridge.send на подписку при инициализации App
	// }, []);

	// const add = async function () {
	// 	await bridge.send('VKWebAppAddToHomeScreen'); // bridge.send при добавлении на главный экран устройства (Android)
	// };

	return (
		<Panel nav={nav}>
			<PanelHeader>GO!</PanelHeader>

			<Group style={{ margin: 20 }}>
				<Banner
					mode='image'
					size='m'
					title='Места'
					subtitle={
						<span>
							Лучшие места города
							<br />
							уже тут!
						</span>
					}
					style={{ marginBottom: 12 }}
					actions={
						<Button
							mode='primary'
							size='l'
							// onClick={changePanelToPlaces}
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
					title='Заведения'
					subtitle={
						<span>
							Известные заведения
							<br />
							находятся здесь!
						</span>
					}
					actions={
						<Button
							mode='primary'
							size='l'
							onClick={(e) => {
								// setActiveView('business');
								changePanel('business', 'business');
							}}
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

				<Link href='/business'>
					<Button onClick={() => router.push('/business')}>
						To Business
					</Button>
				</Link>

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

			<Group style={{ margin: 20 }}>
				<Cell
					before={<Icon24Info />}
					onClick={(e) => {
						// setActiveView('about');
						// changePanel(e);
					}}
					data-to='about'>
					О приложении
				</Cell>
				<Cell
					before={<Icon24ShareOutline />}
					// onClick={shareButtonAction}
				>
					Поделиться
				</Cell>
				<PlatformProvider value='android'>
					<Fragment>
						<Cell
							before={<Icon24AddSquareOutline />}
							// onClick={add}
						>
							Добавить на экран устройства
						</Cell>
					</Fragment>
				</PlatformProvider>
			</Group>

			<Footer>© РСД, 2020</Footer>
		</Panel>
	);
};
