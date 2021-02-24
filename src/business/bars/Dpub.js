import React, { Fragment } from 'react';
import { YMaps, Map, Placemark, Circle } from 'react-yandex-maps';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Gallery from '@vkontakte/vkui/dist/components/Gallery/Gallery';

import Icon28MoneyCircleOutline from '@vkontakte/icons/dist/28/money_circle_outline';
import Icon28LogoInstagram from '@vkontakte/icons/dist/28/logo_instagram';
import Icon28PlaceOutline from '@vkontakte/icons/dist/28/place_outline';
import Icon28PhoneOutline from '@vkontakte/icons/dist/28/phone_outline';

const Dpub = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={() => window.history.back()}>
			</PanelHeaderBack>}
			separator={false}
		>
            The Dock Pub
		</PanelHeader>
        
		<Gallery
			slideWidth = "100%"
			style = {{ height: 225 }}
			align = "center"
			bullets="light"
		>
			<img style={{ objectFit: 'contain' }} src="https://sun9-67.userapi.com/sHDZSg-XXmEqeupF8y7BqujZqCY8XtRd9Pd_xA/l6FsBafeNR8.jpg" alt="Bar's Outside"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-47.userapi.com/e0uraE1se3-l9jTwzDv-JksYQ_ZNNrSGN2EvSQ/6T1vlmS_H50.jpg" alt="Bar's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-72.userapi.com/sBGaBuY7xO8ZNYZNuFtjnD2iOLUfxcnF8_ZBrw/xK8bOOmuUOk.jpg" alt="Bar's Food"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-10.userapi.com/st91LrtpUpHMd5lsX04eQlM58EMg7hR1Q2iFEQ/8yfz1ad0kWA.jpg" alt="Bar's Food"/>
		</Gallery>

		<Separator wide style={{paddingTop: '10px'}}/>

		<Group separator='hide' style={{ padding: '0 3vw 20px 3vw'}} header={<Header>Вперёд в прошлое</Header>}>
			<Div>
			Паб, каким он и должен быть.
            <br />
			Лишь только Вы входите в заведение, как вдруг перед Вами меняются эпохи: из современного Сургута Вы перемещаетесь в Нью-Йорк 50-60х годов и проникаетесь этим.
			<br />
			К счастью, еда тут постоянно свежая и очень вкусная. Многообразие закусок к пенному, блюда на гриле и бургеры, а самое главное — широкий выбор пива — всё это не оставит Вас голодным и равнодушным.
			<br /> <br />
			Возвращаемся в настоящее. Адрес заведения указан ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{paddingBottom: 0}}>
			<Cell size='l' multiline before={<Icon28PlaceOutline height={24} width={24} />} description="12:00 - 00:00 (Пт, Сб - до 02:00)">Университетская, 9</Cell>
			<Cell size='l' before={<Icon28MoneyCircleOutline height={24} width={24} />}>1200-1700₽</Cell>
            <Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>77-27-23</Cell>
			<Cell size='l' href="https://instagram.com/thedockpub" target="_blank" before={<Icon28LogoInstagram height={24} width={24} />}>@thedockpub</Cell>
		</Div>

		<Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
			<YMaps>
				<Map defaultState={{ center: [61.246867, 73.417275], zoom: 17 }} width='90vw' height='60vh'>
					<Placemark defaultGeometry={[61.246867, 73.417275]} defaultOptions={{preset: 'islands#circleIcon', iconColor: '#000'}} />
					{props.geo[0] !== undefined &&
						<Fragment>
							<Circle defaultGeometry={[[props.geo[1], props.geo[0]], 200]} options={{draggable: false, fillColor: 'rgba(0, 0, 0, 0.5)', strokeColor: '#000', strokeOpacity: 0.8, strokeWidth: 2 }} /> 
						</Fragment>
					}
				</Map>
			</YMaps>
		</Group>

	</Panel>
);

export default Dpub;