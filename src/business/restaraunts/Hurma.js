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

const Hurma = ({ id, geo }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			Hurma
		</PanelHeader>

		<Gallery
			slideWidth='100%'
			style={{ height: 225 }}
			align='center'
			bullets='dark'>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-34.userapi.com/TMo82ZKZZvucgTMY3AwHpCVlWk8diNtLsNDANQ/yA42PHpfSGM.jpg'
				alt="Restaraunts's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-41.userapi.com/Isxula52fVFcVKcRajo4B44bbtbgR8dAcuCCSg/P4zxWENkJRk.jpg'
				alt="Restaraunt's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-36.userapi.com/7GDKZjxp5e_6sr_g6FsbKN5qAUKZCb2pIfqIzA/MOZVUiTV97A.jpg'
				alt="Restaraunt's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-30.userapi.com/_AkR4sh3CyESVAdPZcaUWs9lEIQjwff7Ql13DQ/P25ujAyGILo.jpg'
				alt="Restaraunt's Food"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-46.userapi.com/IgkKh52cmmagUv-RCoMRxtSrcRf-UUZ1s4rnyw/SKeiSs6SnBQ.jpg'
				alt="Restaraunt's Food"
			/>
		</Gallery>

		<Separator wide style={{ paddingTop: '10px' }} />

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>Шедевры грузинской кухни</Header>}>
			<Div>
				О нём слышал каждый.
				<br />
				"Hurma" способны угодить любому гостю. Ещё бы — ведь в "Hurma" персонал
				может лично подобрать блюдо, исходя из Ваших предпочтений!
				<br />
				Десятки мясных порций, самые известные блюда грузинской кухни, а также
				позиции для вегетарианцев — такое встретишь далеко не в каждом заведении
				города. Сытные и недорогие бизнес-ланчи, собственные кальяны и коллекция
				изысканных домашних вин — и всё это в уютной атмосфере. А если не можете
				прийти, то для Вас работает быстрая доставка.
				<br /> <br />
				Стоит ли говорить что-то ещё? Скорее смотрите информацию ниже!
			</Div>
		</Group>

		<Separator wide />

		<Div style={{ paddingBottom: 0 }}>
			<Cell
				size='l'
				before={<Icon28PlaceOutline height={24} width={24} />}
				description='12:00 - 00:00 (Пт, Сб - до 02:00)'>
				Мира, 31/1
			</Cell>
			<Cell
				size='l'
				before={<Icon28MoneyCircleOutline height={24} width={24} />}>
				600-1000₽
			</Cell>
			<Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>
				99-45-46 (Бронь)
				<br />
				98-28-76 (Доставка)
			</Cell>
			<Cell
				size='l'
				href='https://instagram.com/hurma_restaurant'
				target='_blank'
				before={<Icon28LogoInstagram height={24} width={24} />}>
				@hurma_restaurant
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
					defaultState={{ center: [61.259565, 73.40264], zoom: 17 }}
					width='90vw'
					height='60vh'>
					<Placemark
						defaultGeometry={[61.259565, 73.40264]}
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

export default Hurma;
