import React, { Fragment } from 'react';
import { YMaps, Map, Placemark, Circle } from 'react-yandex-maps';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Cell,
	Group,
	Separator,
	Div,
	Header,
	Gallery,
} from '@vkontakte/vkui';

import Icon28MoneyCircleOutline from '@vkontakte/icons/dist/28/money_circle_outline';
import Icon28LogoInstagram from '@vkontakte/icons/dist/28/logo_instagram';
import Icon28PlaceOutline from '@vkontakte/icons/dist/28/place_outline';
import Icon28PhoneOutline from '@vkontakte/icons/dist/28/phone_outline';

const Ajb = ({ id, geo }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			Адмирал Джон Бенбоу
		</PanelHeader>

		<Gallery
			slideWidth='100%'
			style={{ height: 225 }}
			align='center'
			bullets='light'>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-32.userapi.com/5JNymdFxbpx53IMfrdUEoHdEGT3HsniZ5SGOiA/Vbr9X3j09t4.jpg'
				alt="Restaraunt's Outside"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-2.userapi.com/NZG3Yqzukq546NmLM7Dxot88nt4vQYf3J-WMoQ/exs7D7TxtsI.jpg'
				alt="Restaraunts's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun3-11.userapi.com/nM-Lc1vTC-J1fDxVfEHC8fFRF6fiq1TL2Mpg1g/nMdsBQ_5XII.jpg'
				alt="Restaraunt's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-51.userapi.com/T80mqJEQTcCTyJ5PZx1A97pkhefiXVJiTBfcKA/tJbomZZB7jQ.jpg'
				alt="Restaraunt's Food"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-26.userapi.com/zeQhS-q33BaPtX5BXyK398LfGVunu4ceGbvb4A/NAAonBM58jE.jpg'
				alt="Restaraunt's Food"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-44.userapi.com/kl2MlDl40nQJhfZs8BNe7Z_egUyuMC9haqE-Uw/J7HIatUY9ho.jpg'
				alt="Restaraunt's Food"
			/>
		</Gallery>

		<Separator wide style={{ paddingTop: '10px' }} />

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>Дары моря</Header>}>
			<Div>
				Пожалуй, самый эксклюзивный ресторан города.
				<br />
				Почему? Да потому что "Адмирал Джон Бенбоу" — исключительно морской
				ресторан! Десятки позиций блюд, и все — сплошные произведения искусства
				прямиком из моря. Нежнейшие креветки и осьминоги, вкуснейшие лобстеры и
				мидии: далеко не вся коллекция, которую не описать простыми словами.
				<br />
				Отдельного внимания заслуживает оформление ресторана — Вы прямо
				проникнитесь атмосферой корабля адмирала.
				<br /> <br />
				Свистать всех на борт! Берём курс по адресу ниже!
			</Div>
		</Group>

		<Separator wide />

		<Div style={{ paddingBottom: 0 }}>
			<Cell
				size='l'
				before={<Icon28PlaceOutline height={24} width={24} />}
				description='12:00 - 00:00 (Пт, Сб - до 02:00)'>
				пр. Комсомольский, 13
			</Cell>
			<Cell
				size='l'
				before={<Icon28MoneyCircleOutline height={24} width={24} />}>
				1700-5000₽
			</Cell>
			<Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>
				26-33-44
			</Cell>
			<Cell
				size='l'
				href='https://instagram.com/admiral_surgut'
				target='_blank'
				before={<Icon28LogoInstagram height={24} width={24} />}>
				@admiral_surgut
			</Cell>
		</Div>

		<Group
			style={{
				display: 'flex',
				justifyContent: 'center',
				paddingBottom: '12px',
			}}>
			<YMaps>
				<Map
					defaultState={{ center: [61.240099, 73.439709], zoom: 17 }}
					width='90vw'
					height='60vh'>
					<Placemark
						defaultGeometry={[61.240099, 73.439709]}
						defaultOptions={{ preset: 'islands#circleIcon', iconColor: '#000' }}
					/>
					{geo[0] !== undefined && (
						<Fragment>
							<Circle
								defaultGeometry={[[geo[1], geo[0]], 200]}
								options={{
									draggable: false,
									fillColor: 'rgba(0, 0, 0, 0.5)',
									strokeColor: '#000',
									strokeOpacity: 0.8,
									strokeWidth: 2,
								}}
							/>
						</Fragment>
					)}
				</Map>
			</YMaps>
		</Group>
	</Panel>
);

export default Ajb;
