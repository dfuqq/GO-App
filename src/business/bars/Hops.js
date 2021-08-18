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

const Hops = ({ id, geo }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			Hops Pub
		</PanelHeader>

		<Gallery
			slideWidth='100%'
			style={{ height: 225 }}
			align='center'
			bullets='light'>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-40.userapi.com/Zm0K7GO0CqeWgTtTg1uCSElJGn2zL9zMybgh3w/4l4YzSvssu8.jpg'
				alt="Bar's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-75.userapi.com/RbIQoQU0k2W_oWztDNtsdG2KUmmTQr5zwCFO2A/xU2U3jDXO-E.jpg'
				alt="Bar's Interior"
			/>
		</Gallery>

		<Separator wide style={{ paddingTop: '10px' }} />

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>Классический паб</Header>}>
			<Div>
				Пиво, пиво, пиво.
				<br />
				Кажется, в "Hops Pub" знают всё о нём. Хотя оно и неудивительно — в этом
				пабе подают пиво со всех крафтовых пивоварен России и не только.
				<br />
				Это отличное место, чтобы провести вечер в тихой и уютной атмосфере,
				потягивая пенное вместе с друзьями. Сорта пива обновляются еженедельно,
				а приятным дополнением к нему будут бургеры от "Rock N Burger".
				<br /> <br />
				Дожидаемся вечера и выезжаем — вся информация указана ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{ paddingBottom: 0 }}>
			<Cell
				size='l'
				multiline
				before={<Icon28PlaceOutline height={24} width={24} />}
				description='Вт-Чт, Вс: 15:00-23:00 (Пт, Сб - до 02:00)'>
				Мира, 31/1
			</Cell>
			<Cell
				size='l'
				before={<Icon28MoneyCircleOutline height={24} width={24} />}>
				600-1000₽
			</Cell>
			<Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>
				60-85-04
			</Cell>
			<Cell
				size='l'
				href='https://instagram.com/hopspub_surgut'
				target='_blank'
				before={<Icon28LogoInstagram height={24} width={24} />}>
				@hopspub_surgut
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
					defaultState={{ center: [61.259638, 73.402769], zoom: 17 }}
					width='90vw'
					height='60vh'>
					<Placemark
						defaultGeometry={[61.259638, 73.402769]}
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

export default Hops;
