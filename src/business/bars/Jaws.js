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

const Jaws = ({ id, geo }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			Jawsspot
		</PanelHeader>

		<Gallery
			slideWidth='100%'
			style={{ height: 225 }}
			align='center'
			bullets='light'>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-10.userapi.com/wcxG_rfMHrZ7jkP2RM7qNrBElgWnQ4Y8KMflPA/VhdguYO5qpI.jpg'
				alt="Bar's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-71.userapi.com/Ru9dPOeJK5IFKadJ6KNFsvFOuYyOM5hixhx1zg/qyi8Ku-uvzM.jpg'
				alt="Bar's Atmosphere"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-69.userapi.com/QyPyK5UQntMdE15SeCTyLodJdLDWUZsNjwZPEQ/LO40zhOLp6o.jpg'
				alt="Bar's Atmosphere"
			/>
		</Gallery>

		<Separator wide style={{ paddingTop: '10px' }} />

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>Центр андерграунда</Header>}>
			<Div>
				Запомните раз и навсегда: "Джоус", а не "Джавс".
				<br />
				Запомнили? Тогда можете смело приходить в это заведение.
				<br />
				Здесь нет старых порядков и пафоса, что обычно показываются Вам в
				фильмах: только непринуждённая дружеская атмосфера, отличная музыка и
				крафтовое пиво. А ещё в пабе часто проводятся тусовки, так что можете
				влиться в компанию и познакомиться с новыми интересными людьми.
				<br /> <br />
				Добро пожаловать в Jawsspot. Актуальные данные — ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{ paddingBottom: 0 }}>
			<Cell
				size='l'
				multiline
				before={<Icon28PlaceOutline height={24} width={24} />}
				description='Вс-Чт: 17:00 - 00:00 (Пт, Сб: до 02:00)'>
				Юности, 8
			</Cell>
			<Cell
				size='l'
				before={<Icon28MoneyCircleOutline height={24} width={24} />}>
				500-1000₽
			</Cell>
			<Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>
				+7 (982) 413-35-45
			</Cell>
			<Cell
				size='l'
				href='https://instagram.com/jawsspot_sgt_'
				target='_blank'
				before={<Icon28LogoInstagram height={24} width={24} />}>
				@jawsspot_sgt_
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
					defaultState={{ center: [61.24848, 73.418264], zoom: 17 }}
					width='90vw'
					height='60vh'>
					<Placemark
						defaultGeometry={[61.24848, 73.418264]}
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

export default Jaws;
