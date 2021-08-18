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

const PBar = ({ id, geo }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			ПароБар
		</PanelHeader>

		<Gallery
			slideWidth='100%'
			style={{ height: 225 }}
			align='center'
			bullets='light'>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-73.userapi.com/mH3ZvMuTKy-4glcb-EuabSmL25NxpHw0GIYTAA/p27WZdl4hy8.jpg'
				alt="Bar's Outside"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-75.userapi.com/jrrfoP9jzgqhiwGbuovWJ5Q7WZYodGk2ETaz_A/dbnexX5w7YY.jpg'
				alt="Bar's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-5.userapi.com/STDnaHTtXjosKxsChopoRQKYRI0azs-QKCKUKg/O663GcICMb8.jpg'
				alt="Bar's Interior"
			/>
		</Gallery>

		<Separator wide style={{ paddingTop: '10px' }} />

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>Отдел тестирования</Header>}>
			<Div>
				Доводилось ли Вам бывать в вейп-барах? Если нет, тогда Вам определённо
				стоит попробовать данный формат.
				<br />
				"ПароБар" позволяет Вам выбрать себе товар из огромного числа табачной
				продукции и протестировать его прямо в стенах магазина. А выбор есть: в
				бар поставляются эксклюзивные компоненты для вейпов и кальянов.
				<br />
				Но также здесь можно провести время ничего не приобретая, просто попарив
				за столом в сопровождении напитков из бара. Здесь рады каждому
				посетителю, и каждый работник поддержит беседу с Вами.
				<br /> <br />
				Меньше слов, больше пара! Адрес заведения указан ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{ paddingBottom: 0 }}>
			<Cell
				size='l'
				before={<Icon28PlaceOutline height={24} width={24} />}
				description='11:00 - 23:00'>
				Игоря Киртбая, 18
			</Cell>
			<Cell
				size='l'
				before={<Icon28MoneyCircleOutline height={24} width={24} />}>
				700-1200₽
			</Cell>
			<Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>
				37-47-07
			</Cell>
			<Cell
				size='l'
				href='https://instagram.com/parobarshop'
				target='_blank'
				before={<Icon28LogoInstagram height={24} width={24} />}>
				@parobarshop
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
					defaultState={{ center: [61.271302, 73.356131], zoom: 17 }}
					width='90vw'
					height='60vh'>
					<Placemark
						defaultGeometry={[61.271302, 73.356131]}
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

export default PBar;
