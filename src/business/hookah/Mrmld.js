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

const Mrmld = ({ id, geo }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			Marmelad
		</PanelHeader>

		<Gallery
			slideWidth='100%'
			style={{ height: 225 }}
			align='center'
			bullets='light'>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-26.userapi.com/9GQwNV7nzlw0eblvTm9nPQ-SV5ceoiSGh9dcgw/3JIfZSfXhkk.jpg'
				alt="Bar's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-16.userapi.com/X8s5ZPUnVE-Emj5TTRizYuqqPok0FW1zLK03vA/hulv3mOwiAY.jpg'
				alt="Bar's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-58.userapi.com/WMpOHkSKbSaz2Hk1SRman1MRFOK5ftfFZ1EEQA/0ka0O0HrWtM.jpg'
				alt="Bar's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-23.userapi.com/C52CvDmGP1hvJJtSSd9HXgKlahD82cH2bel1xg/cwUYCSWriEg.jpg'
				alt="Bar's Staff"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-1.userapi.com/5EMcIzt-dPq_3HJ-4jK-I0CWXX63sbkF0xWOJw/9xKifs_07Vs.jpg'
				alt="Bar's Cocktails"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-13.userapi.com/-z7vVquxurGhI7tvjaE2vpRL2-32NsmPVTKvwQ/xcqjDVl10l0.jpg'
				alt="Bar's Cocktails"
			/>
		</Gallery>

		<Separator wide style={{ paddingTop: '10px' }} />

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>Образец вечеринок</Header>}>
			<Div>
				Вы когда-нибудь представляли себе идеальную вечеринку? Забудьте и
				придите в "Marmelad".
				<br />
				Всё начинается с дизайна, и он тут на высшем уровне. Обилие дыма и неона
				сразу погружает в атмосферу светских хроник, позволяя отключиться от
				всех проблем и сосредоточиться лишь на отдыхе.
				<br />
				Уже заняли своё место? Расслабьтесь и подготовьтесь сделать заказ: для
				Вас лучшие кальянные мастера могут сделать забивки мировых брендов
				разной крепкости, а в дополнение к отличному кальяну предложат коктейли
				из бара.
				<br />
				Покурили? Тогда вперёд на танцпол к остальным гостям! Музыка от
				приглашённых DJ точно не отпустит Вас, пока не будет проиграна последняя
				пластинка.
				<br />
				<br />
				Эта ночь Вам запомнится надолго. Доверьтесь нам — придите по адресу
				ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{ paddingBottom: 0 }}>
			<Cell
				size='l'
				before={<Icon28PlaceOutline height={24} width={24} />}
				description='12:00 - 02:00 (Пт, Сб - до 04:00)'>
				Иосифа Каролинского, 4
			</Cell>
			<Cell
				size='l'
				before={<Icon28MoneyCircleOutline height={24} width={24} />}>
				1000-1500₽
			</Cell>
			<Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>
				+7 (922) 419‒08‒36
			</Cell>
			<Cell
				size='l'
				href='https://instagram.com/marmelad_surgut'
				target='_blank'
				before={<Icon28LogoInstagram height={24} width={24} />}>
				@marmelad_surgut
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
					defaultState={{ center: [61.245305, 73.450069], zoom: 17 }}
					width='90vw'
					height='60vh'>
					<Placemark
						defaultGeometry={[61.245305, 73.450069]}
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
			,&#13;
			<br />
			<Link href='https://vk.com/mm_ivanovna' target='_blank'>
				Мария Маноли
			</Link>
		</Footer>
	</Panel>
);

export default Mrmld;
