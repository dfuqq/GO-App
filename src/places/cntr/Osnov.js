import React, { Fragment } from 'react';
import { YMaps, Map, Placemark, Circle } from 'react-yandex-maps';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Cell,
	Group,
	Gallery,
	Separator,
} from '@vkontakte/vkui';

import Icon28PlaceOutline from '@vkontakte/icons/dist/28/place_outline';

const Osnov = ({ id, geo }) => {
	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<PanelHeaderBack
						onClick={() => window.history.back()}></PanelHeaderBack>
				}>
				Памятник Основателям
			</PanelHeader>

			<Gallery
				slideWidth='100%'
				style={{ height: 225 }}
				align='center'
				bullets='light'>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-52.userapi.com/68vI8W7wgdjwsCMEkME7Og5wxMKG-Ow9vMbkfA/rUCoi8EjQww.jpg'
					alt='Osnov'
				/>
				<img
					style={{ objectFit: 'contain' }}
					src='https://sun9-66.userapi.com/riIqFVlwazAafMf3MAjp9RUMDGOdjPovxi7sJg/PUxt6mrISa0.jpg'
					alt='Osnov'
				/>
			</Gallery>

			<Separator wide style={{ paddingBottom: '10px' }} />

			<Group style={{ padding: '0 5vw' }}>
				Главный памятник города.
				<br />
				<br />
				Открыт 12 июня 2002 года в честь 400-летия со дня основания Сургута. Вес
				памятника более 15 тонн, а на создание было потрачено 40 тонн бронзы.
				Кроме того, памятник по частям был доставлен из Санкт-Петербурга, где и
				создавался.
				<br />
				На монументе представлены 4 фигуры, которые знаменуют освоение всей
				Сибири: князь Фёдор Борятинский, воевода Владимир Оничков, казак-плотник
				и безымянный священник.
				<br />
				Является негласным центром города. В изначальной задумке к памятнику
				можно было пройти по подземному переходу, однако эта идея так и не
				воплотилась.
			</Group>

			<Group separator='hide' style={{ paddingBottom: '12px' }}>
				<Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>
					Ленина, 38 (Кольцо на Ленина)
				</Cell>
			</Group>

			<Group
				style={{
					display: 'flex',
					justifyContent: 'center',
					paddingBottom: '12px',
				}}>
				<YMaps>
					<Map
						defaultState={{ center: [61.254023, 73.396254], zoom: 17 }}
						width='90vw'
						height='60vh'>
						<Placemark
							defaultGeometry={[61.254023, 73.396254]}
							defaultOptions={{
								preset: 'islands#blueObservationCircleIcon',
								iconColor: '#000',
							}}
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
};

export default Osnov;
