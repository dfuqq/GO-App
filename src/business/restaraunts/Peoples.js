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

const Peoples = ({ id, geo }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			People's
		</PanelHeader>

		<Gallery
			slideWidth='100%'
			style={{ height: 225 }}
			align='center'
			bullets='light'>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-33.userapi.com/WXxq8oXxxvK0-HhhXFDmDYlfA6z4zlCxTbYUVw/0UcDbBkwXSw.jpg'
				alt="Restaraunts's Outside"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-15.userapi.com/1-8q9-XUMES4OEAfIluE-iqt9LgFFlVKiw0Q1g/0TVZI-zlS_8.jpg'
				alt="Restaraunt's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-44.userapi.com/Zc7_2naA5vb01yG_SpeTq1iF8ed5LuwHZkTm7w/_4Q9fUCwBtk.jpg'
				alt="Restaraunt's Food"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-66.userapi.com/1iBa-kTRob1-cs_iJuSS8LwToDjzcbqUfrxzOA/Fq2Oo-x-V2M.jpg'
				alt="Restaraunt's Food"
			/>
		</Gallery>

		<Separator wide style={{ paddingTop: '10px' }} />

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>Настоящий мегаполисбар</Header>}>
			<Div>
				"People's" — легенда.
				<br />
				Один из самых известных ресторанов Сургута, он всегда был и будет во
				внимании людей. Высокие стандарты качества и обслуживания подстегают
				сердце приходить раз за разом, а разум — брать ещё одно блюдо для
				очередного вкусового удовольствия. Будьте уверены: одним Вы не
				обойдётесь. "People's" имеет в своём распоряжении отличный набор мировой
				кухни, в котором каждый найдёт, что отведать.
				<br /> <br />
				Долой красивые слова! Проверить сказанное нами можно по адресу ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{ paddingBottom: 0 }}>
			<Cell
				size='l'
				before={<Icon28PlaceOutline height={24} width={24} />}
				description='Круглосуточно'>
				Островского, 14/1
			</Cell>
			<Cell
				size='l'
				before={<Icon28MoneyCircleOutline height={24} width={24} />}>
				1000-2500₽
			</Cell>
			<Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>
				93-61-11
			</Cell>
			<Cell
				size='l'
				href='https://instagram.com/peoplessurgut'
				target='_blank'
				before={<Icon28LogoInstagram height={24} width={24} />}>
				@peoplessurgut
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
					defaultState={{ center: [61.25861, 73.399991], zoom: 17 }}
					width='90vw'
					height='60vh'>
					<Placemark
						defaultGeometry={[61.25861, 73.399991]}
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

export default Peoples;
