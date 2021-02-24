import React, { Fragment } from 'react';
import { YMaps, Map, Placemark, Circle } from 'react-yandex-maps';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Gallery from '@vkontakte/vkui/dist/components/Gallery/Gallery';

import Icon28MoneyCircleOutline from '@vkontakte/icons/dist/28/money_circle_outline';
import Icon28LogoInstagram from '@vkontakte/icons/dist/28/logo_instagram';
import Icon28PlaceOutline from '@vkontakte/icons/dist/28/place_outline';
import Icon28PhoneOutline from '@vkontakte/icons/dist/28/phone_outline';

const Ds = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={() => window.history.back()}>
			</PanelHeaderBack>}
			separator={false}
		>
			Диван-Сарай
		</PanelHeader>

		<Gallery
			slideWidth = "100%"
			style = {{ height: 225 }}
			align = "center"
			bullets="light"
		>
			<img style={{ objectFit: 'contain' }} src="https://sun9-62.userapi.com/yPd4nm1DGbIOQCpYXub8QhGyi8yZ1_9fUZFwxg/kzLx1uMEvk0.jpg" alt="Restaraunt's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-29.userapi.com/HihrQYmwc8xLDksHrkVIEvhCZ775c15dt07Xfg/bGzHpg9s0lE.jpg" alt="Restaraunts's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-55.userapi.com/FrsoX-aRK_UMxrJQf-pdaeBJ_E4c2aVP3R_kNw/wJBZq2Bt1mU.jpg" alt="Restaraunt's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-68.userapi.com/Ch5E1B7oo0kxQ_WfhDbLuM4JzYSmpz7KAKka_w/RDBgFlFDkSE.jpg" alt="Restaraunt's Food"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-63.userapi.com/Ynu5YY5p3ltzEcpBDz3ewYB5qOfFQ_A_6wzrWA/kDKvflNMNpc.jpg" alt="Restaraunt's Food"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-60.userapi.com/9zP0CFgPLDBzvQASSASjn8byINYDTKewP9JWnQ/abGzqjjSLvY.jpg" alt="Restaraunt's Food"/>
		</Gallery>

		<Separator wide style={{paddingTop: '10px'}}/>

		<Group separator='hide' style={{ padding: '0 3vw 20px 3vw'}} header={<Header>Восток зовёт</Header>}>
			<Div>
			Грядёт восточный ветер!
            <br />
			Укройтесь в великолепном ресторане восточной кухни "Диван-Сарай". 
            <br />
			Роскошный интерьер в стиле старых восточных дворцов, кальяны и вкусная кухня — вот Ваши спутники в этот неспокойный вечер. Под красивую музыку Вы сможете испробовать блюда на углях, настоящие восточные супы и, конечно, известные восточные десерты.
			<br />
			Будьте уверены — после посещения Вы точно не останетесь голодным.
			<br /> <br />
			Что же, дорога зовёт! Оставляем Вам адрес, чтобы и Вы смогли забежать туда.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{paddingBottom: 0}}>
			<Cell size='l' multiline before={<Icon28PlaceOutline height={24} width={24} />} description="12:00 - 00:00 (Пт, Сб — до 02:00, кроме Нефтеюганского ш., 1)">пр. Набережный, 14/1<br />Нефтеюганское ш., 1</Cell>
			<Cell size='l' before={<Icon28MoneyCircleOutline height={24} width={24} />}>1500-2000₽</Cell>
            <Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>24-33-24 (Бронь)<br />33-21-21 (Доставка)</Cell>
			<Cell size='l' href="https://instagram.com/divansaray" target="_blank" before={<Icon28LogoInstagram height={24} width={24} />}>@divansaray</Cell>
		</Div>

		<Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
			<YMaps>
				<Map defaultState={{ center: [61.263517, 73.364393], zoom: 12 }} width='90vw' height='60vh'>
					<Placemark defaultGeometry={[61.250263, 73.370409]} defaultOptions={{preset: 'islands#circleIcon', iconColor: '#000'}} />
					<Placemark defaultGeometry={[61.277243, 73.367255]} defaultOptions={{preset: 'islands#circleIcon', iconColor: '#000'}} />
					{props.geo[0] !== undefined &&
						<Fragment>
							<Circle defaultGeometry={[[props.geo[1], props.geo[0]], 200]} options={{draggable: false, fillColor: 'rgba(0, 0, 0, 0.5)', strokeColor: '#000', strokeOpacity: 0.8, strokeWidth: 2 }} /> 
						</Fragment>
					}
				</Map>
			</YMaps>
		</Group>

	</Panel>
);

export default Ds;