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

const Friends = ({ id, geo }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			Друзья
		</PanelHeader>

		<Gallery
			slideWidth='100%'
			style={{ height: 225 }}
			align='center'
			bullets='light'>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-19.userapi.com/Y4CAj4WqtUcUYr4bPSwMHp18w9s6Wy38fbqKpw/FEVX4PO-jqs.jpg'
				alt="Cafe's Barpool"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-75.userapi.com/impg/S8OP6NzPA-zsJmiRvi4wzwA/cVec_8-yjTI.jpg'
				alt="Cafe's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-33.userapi.com/gcMomi7pC9GimyZDTulndoQQQlQ7hYPn374ZWw/vor-pBf7xKk.jpg'
				alt="Cafe's Food"
			/>
		</Gallery>

		<Separator wide style={{ paddingTop: '10px' }} />

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>Имей 100 друзей</Header>}>
			<Div>
				Кофейня "Друзья" полностью оправдывает своё название.
				<br />
				Мы серьёзно — это лучшее место, чтобы посидеть с друзьями, повспоминать
				хорошие моменты из жизни или познакомиться с новыми интересными людьми.
				<br />
				Невероятно уютное, оно словно погружает тебя в одну большую семью, где
				все друзья. Не знаем, быть может дело в тех волшебных чашках кофе и
				сырниках, что подаёт заведение?
				<br /> <br />
				Попробуйте разгадать секрет сами — "Друзья" находятся по адресу ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{ paddingBottom: 0 }}>
			<Cell
				size='l'
				before={<Icon28PlaceOutline height={24} width={24} />}
				description='10:00 - 00:00'>
				Энгельса, 11
			</Cell>
			<Cell
				size='l'
				before={<Icon28MoneyCircleOutline height={24} width={24} />}>
				60-400₽
			</Cell>
			<Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>
				+7 (922) 772-10-02
			</Cell>
			<Cell
				size='l'
				href='https://instagram.com/dobraya_kofeynya'
				target='_blank'
				before={<Icon28LogoInstagram height={24} width={24} />}>
				@dobraya_kofeynya
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
					defaultState={{ center: [61.239483, 73.392344], zoom: 17 }}
					width='90vw'
					height='60vh'>
					<Placemark
						defaultGeometry={[61.239483, 73.392344]}
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

export default Friends;
