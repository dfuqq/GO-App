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

const Visota = ({ id, geo }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			На Высоте
		</PanelHeader>

		<Gallery
			slideWidth='100%'
			style={{ height: 225 }}
			align='center'
			bullets='light'>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-25.userapi.com/mpn6PJCzRF7Sf197ns8v-IrcgJxazM7r6O0FtQ/qiivYUjzTyI.jpg'
				alt="Restaraunt's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-35.userapi.com/KxXtHImWIgufqsrQuKtRaoN3QDUayIdhqLacLg/BBrzCI0atKU.jpg'
				alt="Restaraunts's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-59.userapi.com/i6M-54SF3XBS9cHzpHwYMebX_KiZ7OqIWDzEWQ/t19Xq23N3Og.jpg'
				alt="Restaraunt's Food"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun3-10.userapi.com/5XgBrENw4WpnS_ezkJBEOVANf6e_Qti7SxXE1g/uA5r7jMVBIQ.jpg'
				alt="Restaraunt's Food"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-21.userapi.com/f-ZTUkww8bGtcQKv1h8_RUCMfQeFDH4_hb1Z1w/rR2p4VF5aK4.jpg'
				alt="Restaraunt's Food"
			/>
		</Gallery>

		<Separator wide style={{ paddingTop: '10px' }} />

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>Буквально в облаках</Header>}>
			<Div>
				Предупреждаем: Вы влюбитесь.
				<br />
				В ресторан "На высоте" стоит приходить, если Вы голодны как физически,
				так и эстетически.
				<br />
				Эстетический голод Вам поможет удалить невероятный вид с 22 этажа,
				позволяющий увидить весь город: просто придите, оцените лёгкий и
				приятный дизайн заведения, присядьте у окна. Готово — Вы уже удалили
				часть голода!
				<br />
				Пришло время сделать заказ. Выбирайте любое блюдо: каждое Вас удивит как
				оформлением, так и вкусовыми качествами. К Вашему желанию тут
				представлены отличные салаты, супы (настоятельно рекомендуем с
				морепродуктами) и роскошные блюда из мяса. А закончить трапезу помогут
				вкусные десерты.
				<br />
				Кроме того, в ресторане действуют спецпредложения: "Бизнес-завтрак",
				"Бизнес-обед" и "Бизнес-ужин", в рамках которых Вы сможете вкусно и
				недорого перекусить в рабочее время.
				<br /> <br />А теперь Вам осталось приехать по адресу ниже и сделать
				свой заказ. Только уточните бронь — столики бывают заняты!
			</Div>
		</Group>

		<Separator wide />

		<Div style={{ paddingBottom: 0 }}>
			<Cell
				size='l'
				before={<Icon28PlaceOutline height={24} width={24} />}
				description='06:30 - 00:00'>
				Гагарина, 12
			</Cell>
			<Cell
				size='l'
				before={<Icon28MoneyCircleOutline height={24} width={24} />}>
				1500-2500₽
			</Cell>
			<Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>
				94-04-05
				<br />
				94-04-09
			</Cell>
			<Cell
				size='l'
				href='https://instagram.com/restoran_navysote'
				target='_blank'
				before={<Icon28LogoInstagram height={24} width={24} />}>
				@restoran_navysote
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
					defaultState={{ center: [61.235115, 73.398997], zoom: 17 }}
					width='90vw'
					height='60vh'>
					<Placemark
						defaultGeometry={[61.235115, 73.398997]}
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

export default Visota;
