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

const Liberty = ({ id, geo }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			Liberty
		</PanelHeader>

		<Gallery
			slideWidth='100%'
			style={{ height: 225 }}
			align='center'
			bullets='light'>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-22.userapi.com/ZXSemOlMGoOfRkdz8bmIk24QRzmuEZuPTyWiGg/1N4faj6cXpE.jpg'
				alt="Restaraunt's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-56.userapi.com/-O0xplTQZYQB7-DVETKPZepw8_PpcrU5Dx2_4w/EF50u5ae910.jpg'
				alt="Restaraunts's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-62.userapi.com/rCtLI2KKKm5TiEF1_6U32yrY-Bg7ZnYHdn6fkg/fEx-9P8tjO0.jpg'
				alt="Restaraunt's Food"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-35.userapi.com/vIqu9rmei6tBjZrwaRgPRV7r938LP9cPAh8hNQ/zGWPGQKF88g.jpg'
				alt="Restaraunt's Food"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-64.userapi.com/TeUVlj1Y53eo2gGoCDtO2CJOVssI0yhZ70-4Sw/4r3TAb6VtcY.jpg'
				alt="Restaraunt's Food"
			/>
		</Gallery>

		<Separator wide style={{ paddingTop: '10px' }} />

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>Американская мечта</Header>}>
			<Div>
				"Ботаника" — излюбленное место сургутян.
				<br />
				Это уютное место на берегу Саймы, в котором переплетены хороший вид,
				правильная еда и тёплая, почти домашняя атмосфера. Заведение идеально
				подходит как и для дневных бизнес-переговоров, так и для вечерних
				посиделок с семьёй.
				<br />
				Не знаете, что заказать? Приветливый персонал с радостью посоветует Вам
				то, что будет соответствовать Вашим предпочтениям и особенностям. Каждая
				порция здесь будет большой и полезной, так что Вы сразу поймёте, за что
				платите. Роллы, пицца, WOK — всё это Вы несомненно оцените
				по-достойнству.
				<br /> <br />
				Время проверить всё самим — приходите по адресу ниже, или оформляйте
				доставку на дом.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{ paddingBottom: 0 }}>
			<Cell
				size='l'
				before={<Icon28PlaceOutline height={24} width={24} />}
				description='12:00 - 22:00'>
				Генерала Иванова, 1
			</Cell>
			<Cell
				size='l'
				before={<Icon28MoneyCircleOutline height={24} width={24} />}>
				700-1000₽
			</Cell>
			<Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>
				21-54-54, 33-21-21 (Доставка)
			</Cell>
			<Cell
				size='l'
				href='https://instagram.com/liberty_cafe'
				target='_blank'
				before={<Icon28LogoInstagram height={24} width={24} />}>
				@liberty_cafe
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
					defaultState={{ center: [61.256348, 73.430847], zoom: 17 }}
					width='90vw'
					height='60vh'>
					<Placemark
						defaultGeometry={[61.256348, 73.430847]}
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

export default Liberty;
