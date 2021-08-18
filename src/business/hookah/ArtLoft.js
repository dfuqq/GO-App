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

const Aloft = ({ id, geo }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			Art Loft
		</PanelHeader>

		<Gallery
			slideWidth='100%'
			style={{ height: 225 }}
			align='center'
			bullets='light'>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-4.userapi.com/Z3xbwfzvmyuSHYrf0tLNswOeAUMaBjWbXoABhQ/JQkZr12_N5k.jpg'
				alt="Bar's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-14.userapi.com/B7b6xlP6ru_wlS3Wt-sGay7QG7NWs5t9_1z0qg/OkEmHx-sek8.jpg'
				alt="Bar's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-75.userapi.com/X_yHjXIl-srp1pulPTdqDr3tXioYz5YLM2Stjw/miqd1UgJ1gE.jpg'
				alt="Bar's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-64.userapi.com/mGXlBkeLIe7pLXN4-aD5C_TZNJ9c0UVM5TzwKw/tg_tBMjAnlg.jpg'
				alt="Bar's Atmosphere"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-20.userapi.com/h4s50EJBbkyMQfs4brQEv9QV1FLiTVtLnTzlcA/VARe1bijklw.jpg'
				alt="Bar's Atmosphere"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-3.userapi.com/R68mTvRwrmusQqwqd5OeIoclpsKKWgqtVLkBoQ/ifmZJYRzts8.jpg'
				alt="Bar's Atmosphere"
			/>
		</Gallery>

		<Separator wide style={{ paddingTop: '10px' }} />

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>В центре внимания</Header>}>
			<Div>
				"Art Loft" можно смело назвать одной из лучших кальянных города.
				<br />
				Хорошая кухня, освежающие напитки и качественные, дымные кальяны — вот
				что ждёт Вас в этом заведении. Приветливый и опытный персонал всегда
				поможет Вам выбрать наилучший табак и подготовит кальян для Вашего
				комфортного отдыха.
				<br />
				Отметим также классный дизайн заведения, наличие постоянных акций,
				удобное расположение, а ещё частые вечеринки под уикенд.
				<br /> <br />
				Посетить заведение можно по адресу ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{ paddingBottom: 0 }}>
			<Cell
				size='l'
				multiline
				before={<Icon28PlaceOutline height={24} width={24} />}
				description='12:00 - 02:00 (Пт: 12:00 - 04:00, Сб: 16:00 - 04:00, Вс: 16:00 - 02:00)'>
				Ленина, 26
			</Cell>
			<Cell
				size='l'
				before={<Icon28MoneyCircleOutline height={24} width={24} />}>
				700-1000₽
			</Cell>
			<Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>
				68-01-17
			</Cell>
			<Cell
				size='l'
				href='https://instagram.com/artloft_hookah_club'
				target='_blank'
				before={<Icon28LogoInstagram height={24} width={24} />}>
				@artloft_hookah_club
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
					defaultState={{ center: [61.248846, 73.404621], zoom: 17 }}
					width='90vw'
					height='60vh'>
					<Placemark
						defaultGeometry={[61.248846, 73.404621]}
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
			За фото спасибо:{' '}
			<Link href='https://vk.com/antoninkin' target='_blank'>
				Антон Инкин
			</Link>
			.
		</Footer>
	</Panel>
);

export default Aloft;
