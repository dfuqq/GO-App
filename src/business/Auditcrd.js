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

const Auditcrd = ({ id, geo }) => (
	<Panel id={id}>
		<PanelHeader
			left={
				<PanelHeaderBack
					onClick={() => window.history.back()}></PanelHeaderBack>
			}
			separator={false}>
			Auditorium
		</PanelHeader>

		<Gallery
			slideWidth='100%'
			style={{ height: 225 }}
			align='center'
			bullets='light'>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-37.userapi.com/OhsVJpeUISDBHlNXSqpQ0_0fRs2cLzAR6DxxCw/O4Pe5fwf-kM.jpg'
				alt="Club's Logo"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-24.userapi.com/v21DCRIzhH3Q7XFfmgRSSPpzk3OkVg2pnh61uA/PKdAWgTC8QU.jpg'
				alt="Club's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-61.userapi.com/j1-PKV95A0fTFHMpq1wEcANylCz5RiBsK1UOzw/nq8BD0z_SM4.jpg'
				alt="Club's Interior"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-30.userapi.com/iRrSv2ofN-b07v7sIjpG70VJj6hLPPVRErkBwg/V_jskuyeUYA.jpg'
				alt="Club's Stuff"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-57.userapi.com/x7MiTI0mXgzqYFkNsFi2m4XSMrwkJd76dd-SAw/JGTlUiFgd7w.jpg'
				alt="Club's Atmosphere"
			/>
			<img
				style={{ objectFit: 'contain' }}
				src='https://sun9-41.userapi.com/2T3VKhIT4fHjHsI-roWoKw72J2oauOFjRGSjnQ/aYYjzo72n7w.jpg'
				alt="Club's Atmosphere"
			/>
		</Gallery>

		<Separator wide='true' style={{ paddingTop: '10px' }} />

		<Group
			separator='hide'
			style={{ padding: '0 3vw 20px 3vw' }}
			header={<Header>В ритме ночи</Header>}>
			<Div>
				Ночной клуб, каким он и должен быть.
				<br />
				"Auditorium" знаком многим, как преемник "Biblioteca" — действительно
				легендарного бара, который закрылся в конце 2019 года. А затем явился в
				новом, ещё более привлекательном формате.
				<br />
				Здесь прекрасно всё: заводящая музыка от приглашённых DJ, которая
				заставляет двигаться даже самого ленивого человека, отличный дизайн, в
				котором хочется остаться на всю ночь (или даже на две), хорошая кухня и
				отпадный бар с настоящими мастерами своего дела.
				<br /> <br />
				Не будем лгать: Вы просто обязаны там побывать. Выйти в ночь можно по
				адресу ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{ paddingBottom: 0 }}>
			<Cell
				size='l'
				multiline
				before={<Icon28PlaceOutline height={24} width={24} />}
				description='Только Пт и Сб: 20:00 - 05:00'>
				Мира, 31/1
			</Cell>
			<Cell
				size='l'
				before={<Icon28MoneyCircleOutline height={24} width={24} />}>
				800-1500₽
			</Cell>
			<Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>
				97-16-97
			</Cell>
			<Cell
				size='l'
				href='https://instagram.com/auditorium_bar'
				target='_blank'
				before={<Icon28LogoInstagram height={24} width={24} />}>
				@auditorium_bar
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
					defaultState={{ center: [61.259651, 73.402797], zoom: 17 }}
					width='90vw'
					height='60vh'>
					<Placemark
						defaultGeometry={[61.259651, 73.402797]}
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

export default Auditcrd;
