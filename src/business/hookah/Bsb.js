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

const Bsb = ({ id, geo }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			Baker Street 221B
		</PanelHeader>

		<Gallery
			slideWidth='100%'
			style={{ height: 225 }}
			align='center'
			bullets='light'>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-23.userapi.com/Zh1zm0c1LtCNtixhdc4Hkqp9ojsZvYt0ex1umg/PZfi42kVZ84.jpg'
				alt="Bar's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-70.userapi.com/EtKKdibJ0wJXU9ZGzuKPO5ZrJGAxXEXgDZsGPQ/1HNfTMfBvBA.jpg'
				alt="Bar's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-49.userapi.com/W0bQSE7epFpYrsXyIqCL0ya9z7HZhNIlE8rCVw/KY3CL3fYxuM.jpg'
				alt="Bar's Staff"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-27.userapi.com/Ap7X8LC93D7_rj9vBfrAbFR0ioB9X79-q-N7XQ/IwWabqJo3-o.jpg'
				alt="Bar's Staff"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-28.userapi.com/8giTrUhg-tzvG0YCykv5rU8DOLKqOJKvAL3mKg/sJ3d_cXgzJE.jpg'
				alt="Bar's Footage"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-13.userapi.com/yVf_AMBDig7mThhw2VgR-xgFVJOeBU9h3-KN5g/d5PcaKtkgbY.jpg'
				alt="Bar's Food"
			/>
		</Gallery>

		<Separator wide style={{ paddingTop: '10px' }} />

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>Элементарно, Ватсон</Header>}>
			<Div>
				Сразу заявим: заведение не совсем про Шерлока. Но, фанаты сериала, не
				стоит огорчаться — "Baker Street" ещё способны удивить!
				<br />
				Да, здесь есть отсылки на сериал. Очень красивые отсылки, к слову.
				<br />
				Но не отсылками славится данное заведение, а первоклассной кухней с
				кальянами. Говоря честно, мы даже не можем выбрать, что лучше: "Baker"
				тут хорош везде. Персонал отзывчивый и всегда готов помочь с кальяном,
				кухня очень вкусная и недорогая, так ещё и часто проводятся вечеринки.
				<br /> <br />
				Словом, нас сразили наповал. Оценить самому можно по адресу ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{ paddingBottom: 0 }}>
			<Cell
				size='l'
				before={<Icon28PlaceOutline height={24} width={24} />}
				description='12:00 - 02:00 (Сб, Вс - до 04:00)'>
				Университетская, 29
			</Cell>
			<Cell
				size='l'
				before={<Icon28MoneyCircleOutline height={24} width={24} />}>
				1000-1500₽
			</Cell>
			<Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>
				44-72-27
			</Cell>
			<Cell
				size='l'
				href='https://instagram.com/bakerstreet_universitetskaya'
				target='_blank'
				before={<Icon28LogoInstagram height={24} width={24} />}>
				@bakerstreet_universitetskaya
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
					defaultState={{ center: [61.25046, 73.443114], zoom: 17 }}
					width='90vw'
					height='60vh'>
					<Placemark
						defaultGeometry={[61.25046, 73.443114]}
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
			За фото спасибо:{' '}
			<Link href='https://vk.com/id391241331' target='_blank'>
				Кристина Кочамай
			</Link>
			,
			<br />
			<Link href='https://vk.com/antoninkin' target='_blank'>
				Антон Инкин
			</Link>
			.
		</Footer>
	</Panel>
);

export default Bsb;
