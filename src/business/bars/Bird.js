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
	Footer,
	Link,
} from '@vkontakte/vkui';

import Icon28MoneyCircleOutline from '@vkontakte/icons/dist/28/money_circle_outline';
import Icon28LogoInstagram from '@vkontakte/icons/dist/28/logo_instagram';
import Icon28PlaceOutline from '@vkontakte/icons/dist/28/place_outline';
import Icon28PhoneOutline from '@vkontakte/icons/dist/28/phone_outline';

const Bird = ({ id, geo }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			Спой, Птичка!
		</PanelHeader>

		<Gallery
			slideWidth='100%'
			style={{ height: 225 }}
			align='center'
			bullets='light'>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-45.userapi.com/p00rSf3iBP54bEUA-WAkG6RQs-S-zETeK18Esg/xAunOoN8n3s.jpg'
				alt="Bar's Logo"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-65.userapi.com/F_EJLKxtV98EQRTKvRzt7zXt1RquVGapPNnSOA/lJShnKHtCv4.jpg'
				alt="Bar's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-41.userapi.com/VWKVO6ElQXgM-pxVgxWmuDHATco_XBbGj4qViw/tctsj6onN_g.jpg'
				alt="Bar's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-50.userapi.com/JkarduqzT9wspdPwWlObLVkTPLiSia0FrpaF2g/xRz3Ez-xn_0.jpg'
				alt="Bar's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-22.userapi.com/oNaAZzhQROZZNrSNmmzyUEdDXkqIV4ObAh1t-g/QxzSmUyqH8E.jpg'
				alt="Bar's Staff"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-9.userapi.com/Tt5SYVzD0kuMoBcJI-k-j2XJGG1KFRsYludrwg/Ex1NA6RqpdM.jpg'
				alt="Bar's Atmosphere"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-8.userapi.com/DcgFCsYouzrEtjOo4WZG6BsvX2HPwFfjXW6XMg/Dl45zNUX03g.jpg'
				alt="Bar's Atmosphere"
			/>
		</Gallery>

		<Separator wide style={{ paddingTop: '10px' }} />

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>Вперёд и с песней</Header>}>
			<Div>
				Эх! Гуляй душа!
				<br />
				Когда сердце так и рвётся, чтобы выдать свой вокальный талант, идите в
				"Спой, Птичка!".
				<br />
				Почему именно туда? А потому, что это крутейший караоке-бар в Сургуте!
				<br />
				Качественный звук и отличная караоке-система, собственные бек-вокалисты
				(!) и даже дуэты с приглашёнными артистами — вот что Вас ждёт в этом
				месте. Не любите петь? Тогда пускайтесь в пляс со всеми остальными
				гостями! А если проголодались, то быстро перекусите из обширного меню
				блюд, и снова в бой.
				<br /> <br />
				Летим в бар! Распеться можно по адресу ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{ paddingBottom: 0 }}>
			<Cell
				size='l'
				multiline
				before={<Icon28PlaceOutline height={24} width={24} />}
				description='Ср, Чт, Вс: 20:00 - 03:00 (Пт, Сб: 19:00 - 05:00)'>
				Мира, 31/1
			</Cell>
			<Cell
				size='l'
				before={<Icon28MoneyCircleOutline height={24} width={24} />}>
				700-1500₽
			</Cell>
			<Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>
				97-21-97
			</Cell>
			<Cell
				size='l'
				href='https://instagram.com/spoi_ptichka'
				target='_blank'
				before={<Icon28LogoInstagram height={24} width={24} />}>
				@spoi_ptichka
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
					defaultState={{ center: [61.259651, 73.402797], zoom: 17 }}
					width='90vw'
					height='60vh'>
					<Placemark
						defaultGeometry={[61.259651, 73.402797]}
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

		<Footer>
			За фото спасибо:
			<br />
			<Link href='https://vk.com/antoninkin' target='_blank'>
				Антон Инкин
			</Link>
			,&#13;
			<Link href='https://vk.com/evgpro86' target='_blank'>
				{' '}
				Евгений Кирсанов
			</Link>
			.
		</Footer>
	</Panel>
);

export default Bird;
