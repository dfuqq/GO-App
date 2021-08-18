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

const Wdn = ({ id, geo }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			Wooden Restobar
		</PanelHeader>

		<Gallery slideWidth='100%' style={{ height: 225 }} align='center'>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-34.userapi.com/-rjCH2J2NNBQsaDLIFWZIYVnVnXUuNJQFoKyMQ/NQddH5eygvU.jpg'
				alt="Restaraunts's Interior"
			/>
		</Gallery>

		<Separator wide style={{ paddingTop: '10px' }} />

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>Эстетика Wooden</Header>}>
			<Div>
				Особенное место — особенная кухня.
				<br />
				Наслаждаясь видом на берегу Саймы, Вы сможете отведать лучшие блюда
				мировой кухни в одном месте: от роллов до стейков. Да, это Wooden —
				ресторан, полюбившийся многим.
				<br />
				К Вашему желанию великолепная еда, отличные напитки от барменов и
				хорошее настроение от персонала. А по вечерам ресторан становится ночным
				клубом с крутой музыкой от местных DJ!
				<br /> <br />
				Столики стоит бронировать. Вся информация ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{ paddingBottom: 0 }}>
			<Cell
				size='l'
				before={<Icon28PlaceOutline height={24} width={24} />}
				description='12:00 - 01:00'>
				Энергетиков, 4
			</Cell>
			<Cell
				size='l'
				before={<Icon28MoneyCircleOutline height={24} width={24} />}>
				1200-2000₽
			</Cell>
			<Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>
				612-808
			</Cell>
			<Cell
				size='l'
				href='https://instagram.com/wooden_restobar'
				target='_blank'
				before={<Icon28LogoInstagram height={24} width={24} />}>
				@wooden_restobar
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
					defaultState={{ center: [61.237985, 73.405767], zoom: 17 }}
					width='90vw'
					height='60vh'>
					<Placemark
						defaultGeometry={[61.237985, 73.405767]}
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

export default Wdn;
