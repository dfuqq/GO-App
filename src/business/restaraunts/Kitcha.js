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

const Kitcha = ({ id, geo }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			The Kitcha
		</PanelHeader>

		<Gallery
			slideWidth='100%'
			style={{ height: 225 }}
			align='center'
			bullets='light'>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-52.userapi.com/fkCImBQrFQk41RNE_2dy7U0y2HpaNKG_V2rnIw/CsO-jkGB5pQ.jpg'
				alt="Restaraunts's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-75.userapi.com/Vsz_tAEg3QTaJrpW6t5vARgSiPwYRRezJfe9nw/1CvecYDI78w.jpg'
				alt="Restaraunt's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-29.userapi.com/waM5hZQtk-_P300-HjuHML-Y-mGAiWlcJ9_dlQ/jDFDYncNv6Y.jpg'
				alt="Restaraunt's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-76.userapi.com/Qb7oKn4cHYGODLesEiJS-nUHswAsGsR5yHg80w/hG4rmxFJO1g.jpg'
				alt="Restaraunt's Food"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-45.userapi.com/ag9EZGbYwiV_3n__zpnyKloWlqUDMpYK6vsBzQ/4VEbbB393UQ.jpg'
				alt="Restaraunt's Food"
			/>
		</Gallery>

		<Separator wide style={{ paddingTop: '10px' }} />

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>(Не) Формат</Header>}>
			<Div>
				"Kitcha" — совершенно новое по концепции заведение, которое перенимает
				формат, популярный на Западе.
				<br />
				Знакомьтесь — True Cost.
				<br />
				Всё, что Вам нужно: заплатить небольшую сумму за вход, а затем
				заказывать блюда по себестоимости. Порции те же, качество не меняется,
				но цена ниже.
				<br />
				Выгодно? Ещё бы!
				<br /> <br />
				Скорее пробовать! Адрес заведения указан ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{ paddingBottom: 0 }}>
			<Cell
				size='l'
				before={<Icon28PlaceOutline height={24} width={24} />}
				description='12:00 - 00:00 (Пт, Сб - до 02:00)'>
				Энгельса, 15
			</Cell>
			<Cell
				size='l'
				before={<Icon28MoneyCircleOutline height={24} width={24} />}>
				900-1500₽
			</Cell>
			<Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>
				50-02-07
			</Cell>
			<Cell
				size='l'
				href='https://instagram.com/the.kitcha'
				target='_blank'
				before={<Icon28LogoInstagram height={24} width={24} />}>
				@the.kitcha
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
					defaultState={{ center: [61.23902, 73.387947], zoom: 17 }}
					width='90vw'
					height='60vh'>
					<Placemark
						defaultGeometry={[61.23902, 73.387947]}
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

export default Kitcha;
