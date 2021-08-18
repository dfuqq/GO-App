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

const Cofein = ({ id, geo }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			Кофеин
		</PanelHeader>

		<Gallery
			slideWidth='100%'
			style={{ height: 225 }}
			align='center'
			bullets='light'>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-14.userapi.com/YFBGoH1KOIW1Dps2bEgZ6-iWWaS-93I2DdWWVQ/6xFaGeh2QlE.jpg'
				alt="Cafe's Barpool"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-4.userapi.com/RmCzIh-ZI5baLfDnJnMP0SxNF4ddwLcl1Up_EQ/uLP4GK3eryY.jpg'
				alt="Cafe's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-38.userapi.com/BFYPftqEfdTzBII6Rou_fHnb24RnzKjMOp198g/pnKPatfSIx0.jpg'
				alt="Cafe's Food"
			/>
		</Gallery>

		<Separator wide style={{ paddingTop: '10px' }} />

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>Бизнес-план</Header>}>
			<Div>
				"Кофеин" стал излюбленным местом для деловых встреч или тихого
				провождения времени.
				<br />
				Одно из самых "возрастных" заведений города, которое на протяжение всего
				времени работы постоянно радует своих посетителей кофе и десертами,
				приготовленными в сотрудничестве с кондитерской "АйКондитер". Отличный
				вид в центре города с панорамными окнами, приятная атмосфера и высокий
				класс обслуживания точно не оставят Вас равнодушными!
				<br /> <br />
				Обратите внимание на качество кофе: некоторые посетители отмечают, что
				оно бывает пережарено. Учтите этот момент, если Вы кофеман.
				<br /> <br />
				Прийти и попробовать всё самим — по адресу ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{ paddingBottom: 0 }}>
			<Cell
				size='l'
				before={<Icon28PlaceOutline height={24} width={24} />}
				description='09:00 - 22:00'>
				Югорский тракт, 38
				<br />
				Бульвар Свободы, 1
			</Cell>
			<Cell
				size='l'
				before={<Icon28MoneyCircleOutline height={24} width={24} />}>
				300-500₽
			</Cell>
			<Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>
				93-26-72
			</Cell>
			<Cell
				size='l'
				href='https://instagram.com/kofein_surgut'
				target='_blank'
				before={<Icon28LogoInstagram height={24} width={24} />}>
				@kofein_surgut
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
					defaultState={{ center: [61.248671, 73.402112], zoom: 17 }}
					width='90vw'
					height='60vh'>
					<Placemark
						defaultGeometry={[61.248671, 73.402112]}
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

export default Cofein;
