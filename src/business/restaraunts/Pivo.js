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

const Pivo = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={() => window.history.back()}>
			</PanelHeaderBack>}
			separator={false}
		>
			Пивная №1
		</PanelHeader>

		<Gallery
			slideWidth = "100%"
			style = {{ height: 225 }}
			align = "center"
			bullets="light"
		>
			<img style={{ objectFit: 'contain' }} src="https://sun9-59.userapi.com/jW-LfUnA3PnC91LrLp3TTN-QdnkUXN1K_O8d6Q/mXdfM5dHZT4.jpg" alt="Restaraunt's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-10.userapi.com/-KLDtiKt0LoC1HsJxCHki_84qbCkXtqL3wafbw/iQD6si02XDo.jpg" alt="Restaraunts's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-72.userapi.com/aRAysGBzXbAHfKpYV2jLUH_DqoY3SUSs-PjfTA/MGFgJvUi6pc.jpg" alt="Restaraunt's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-37.userapi.com/a4NEddauq7ouAMmN8COEUNjBT7AyM15V5Zk00w/nQuDN7xvNVI.jpg" alt="Restaraunt's Food"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-55.userapi.com/ZEDWV5b5Xc6lruuHuKhPs30TkF_KwZOD1HKsGw/R9AK2p4stvA.jpg" alt="Restaraunt's Food"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-54.userapi.com/4kMB5_gC0blDmducJqywB2g8nkf7Q766OZgViA/9d2eFfk5okM.jpg" alt="Restaraunt's Food"/>
		</Gallery>

		<Separator wide style={{paddingTop: '10px'}}/>

		<Group separator='hide' style={{ padding: '0 3vw 20px 3vw'}} header={<Header>Ресторан с пивоварней</Header>}>
			<Div>
			И не стоит протирать глаза, мы не ошиблись.
            <br />
			Это действительно ресторан СО СВОЕЙ пивоварней. Видели такое когда-нибудь?
            <br />
			Выполненное в лучших немецких традициях, заведение расположилось на первом этаже ТЦ "Вершина". Тут буквально есть всё, чтобы провести идеальный вечер в компании своих друзей: пиво собственного производства (весьма отменное, к слову), отличные мясные закуски, и, собственно, кухня — богатый выбор от бургеров и салатов до полноценных порций. Также Вы обязательно обратите внимание на дизайн заведения, а ещё живую музыку, иногда играющую в заведении.
			<br /> <br />
			Не будем мучать Вас и заставлять глотать слюнки. Информация о заведении находится ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{paddingBottom: 0}}>
			<Cell size='l' multiline before={<Icon28PlaceOutline height={24} width={24} />} description="Вт-Чт: 18:00 - 00:00; Пт, Сб: 12:00 - 04:00)">Генерала Иванова, 1</Cell>
			<Cell size='l' before={<Icon28MoneyCircleOutline height={24} width={24} />}>500-2000₽</Cell>
            <Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>94-10-10<br />94-10-11</Cell>
			<Cell size='l' href="https://instagram.com/pivnayanomer1" target="_blank" before={<Icon28LogoInstagram height={24} width={24} />}>@pivnayanomer1</Cell>
		</Div>

		<Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
			<YMaps>
				<Map defaultState={{ center: [61.256504, 73.431698], zoom: 17 }} width='90vw' height='60vh'>
					<Placemark defaultGeometry={[61.256504, 73.431698]} defaultOptions={{preset: 'islands#circleIcon', iconColor: '#000'}} />
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

export default Pivo;