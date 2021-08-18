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

const Klkv = ({ id, geo }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			Клюква
		</PanelHeader>

		<Gallery
			slideWidth='100%'
			style={{ height: 225 }}
			align='center'
			bullets='light'>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-56.userapi.com/ffXfDuTt3w69DTBDRN1iUxMIaEVzdgB_MAf-ow/sBcTtbuqwug.jpg'
				alt="Restaraunt's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-11.userapi.com/AL1JuOrOke2jRaedC7EJKdIMBFfFtZ83n_TX9A/ZJFN5WtXgCQ.jpg'
				alt="Restaraunts's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-57.userapi.com/bxTFmx7YmldTlTpdHeJSrqaJ3OS5FNEku6tRQA/sxAcP7q_sh0.jpg'
				alt="Restaraunt's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-68.userapi.com/aDjoTE902f7JAghGJQF2DjCVhxqbxQ6x9PgFaA/ucQbuVr5OA0.jpg'
				alt="Restaraunt's Food"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-7.userapi.com/YgVmkhZoB8mOdp1hSoPuvXTu3gSyeFmaUO7wDw/twg8jhwAA6A.jpg'
				alt="Restaraunt's Food"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-26.userapi.com/nWuCPrMgAGN8RQ5utQ_4IjR0HvmsXiz5FgOn4g/qlWXGIjsAz0.jpg'
				alt="Restaraunt's Food"
			/>
		</Gallery>

		<Separator wide style={{ paddingTop: '10px' }} />

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>Сибирская роскошь</Header>}>
			<Div>
				"Клюква" — кладезь лучших рецептов Сибири.
				<br />
				И мы заявляем это не просто так: заведение содержит одну из самых
				интересных кухонь в городе.
				<br />
				Пельмени с начинкой из мяса диких животных, уха из редкой рыбы, а также
				море других блюд из национальных рецептов, что помогут прочувствовать
				весь национальный колорит округа. Помимо этого, в ресторане Вы найдёте и
				привычную европейскую кухню. А отведать Вы это всё сможете в одном из
				нескольких залов заведения с уникальным дизайном.
				<br /> <br />
				Вперёд пробовать местную кухню — вся информация о заведении ниже!
			</Div>
		</Group>

		<Separator wide />

		<Div style={{ paddingBottom: 0 }}>
			<Cell
				size='l'
				before={<Icon28PlaceOutline height={24} width={24} />}
				description='12:00 - 22:00'>
				Крылова, 23/1
			</Cell>
			<Cell
				size='l'
				before={<Icon28MoneyCircleOutline height={24} width={24} />}>
				2000-2500₽
			</Cell>
			<Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>
				53-03-03
				<br />
				53-02-02
			</Cell>
			<Cell
				size='l'
				href='https://instagram.com/medved_ugol'
				target='_blank'
				before={<Icon28LogoInstagram height={24} width={24} />}>
				@medved_ugol
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
					defaultState={{ center: [61.285953, 73.340385], zoom: 17 }}
					width='90vw'
					height='60vh'>
					<Placemark
						defaultGeometry={[61.285953, 73.340385]}
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

export default Klkv;
