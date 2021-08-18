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

const Endorf = ({ id, geo }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			Эндорфин
		</PanelHeader>

		<Gallery slideWidth='100%' style={{ height: 225 }} align='center'>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-34.userapi.com/-rjCH2J2NNBQsaDLIFWZIYVnVnXUuNJQFoKyMQ/NQddH5eygvU.jpg'
				alt="Cafe's Exterior"
			/>
		</Gallery>

		<Separator wide style={{ paddingTop: '10px' }} />

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>Рай сладкоежек</Header>}>
			<Div>
				Познакомьтесь с "Эндорфином" — одной из лучших кондитерских в городе.
				<br />
				Не надейтесь быстро забежать туда и пойти по делам: в кондитерской море
				красивых и вкусных тортов и пирожных, а также прочей сладкой выпечки,
				каждый из которых Вам обязательно захочется попробовать. И поверьте:
				потом Вы будете возвращатся снова и снова.
				<br />
				Заведение работает как и на заказ блюд, так и как кафе. И во втором
				случае помимо пирожных и тортов Вас ожидают приятный интерьер, отличный
				кофе и нереальное количество положительных эмоций от пребывания там,
				которые будут ещё больше при посиделках в компании.
				<br /> <br />
				Скажем прямо — мы советуем Вам побывать в "Эндорфине". Вся информация о
				заведении ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{ paddingBottom: 0 }}>
			<Cell
				size='l'
				before={<Icon28PlaceOutline height={24} width={24} />}
				description='09:00 - 20:00'>
				Университетская, 19
			</Cell>
			<Cell
				size='l'
				before={<Icon28MoneyCircleOutline height={24} width={24} />}>
				350-450₽
			</Cell>
			<Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>
				97-07-91
			</Cell>
			<Cell
				size='l'
				href='https://instagram.com/endorfin.coffee'
				target='_blank'
				before={<Icon28LogoInstagram height={24} width={24} />}>
				@endorfin.coffee
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
					defaultState={{ center: [61.249394, 73.429283], zoom: 17 }}
					width='90vw'
					height='60vh'>
					<Placemark
						defaultGeometry={[61.249394, 73.429283]}
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

export default Endorf;
