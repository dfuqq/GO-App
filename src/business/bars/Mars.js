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

const Mars = ({ id, geo }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			Марс
		</PanelHeader>

		<Gallery
			slideWidth='100%'
			style={{ height: 225 }}
			align='center'
			bullets='light'>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-11.userapi.com/kXaPkNZiGXMEBy-w-coxZb-v0DpoAOOoivFcYg/QV4Qm8l1p0k.jpg'
				alt="Bar's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-57.userapi.com/koK6nTefNb1w4QhGfxXc4ZQE_ANR2QpaIQHBPA/v53AOW6cI90.jpg'
				alt="Bar's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-9.userapi.com/Ku2qqKGDq1MhUp340QYZpmb1VFBj_i_XTg8vnQ/-UioFkpQjlU.jpg'
				alt="Bar's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-32.userapi.com/Sy2WVFeCqRIIjnNMY0xEGdECqpVsaO3sOWO4rQ/4isMomrkqRk.jpg'
				alt="Bar's Staff"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-23.userapi.com/-UubROenkc0MDt1UHhUBK_JtPlTXyWuj4fOG6g/xVwQYdiNZRA.jpg'
				alt="Bar's Atmosphere"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-55.userapi.com/IDVG_KMsV-XBy9_AHEpVgHlkDXhFv1Vp2jklWQ/IkQ7_VWwaQA.jpg'
				alt="Bar's Atmosphere"
			/>
		</Gallery>

		<Separator wide style={{ paddingTop: '10px' }} />

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>Ночь открытий</Header>}>
			<Div>
				Не только клуб, но и бар нового формата.
				<br />
				"Марс" буквально отсылает Вас на красную планету со своим космическим
				интерьером: громадная барная стойка, танцпол с причудливыми стенами и
				потолком и свет словно из фильма "Бегущий по Лезвию 2049".
				<br />
				Поможет в Вашем путешествии музыка от крутых DJ, отличный звук, а также
				бар с большой коллекцией коктейлей (в том числе и авторских), кухня и
				кальяны.
				<br /> <br />
				Одним словом — космос. Отправляемся по адресу ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{ paddingBottom: 0 }}>
			<Cell
				size='l'
				multiline
				before={<Icon28PlaceOutline height={24} width={24} />}
				description='Пт, Сб: 21:00 - 05:00'>
				Нефтеюганское шоссе, 27/1с4
			</Cell>
			<Cell
				size='l'
				before={<Icon28MoneyCircleOutline height={24} width={24} />}>
				700-1200₽
			</Cell>
			<Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>
				91-07-47
			</Cell>
			<Cell
				size='l'
				href='https://instagram.com/nightbarmars'
				target='_blank'
				before={<Icon28LogoInstagram height={24} width={24} />}>
				@nightbarmars
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
					defaultState={{ center: [61.273842, 73.408996], zoom: 17 }}
					width='90vw'
					height='60vh'>
					<Placemark
						defaultGeometry={[61.273842, 73.408996]}
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

export default Mars;
