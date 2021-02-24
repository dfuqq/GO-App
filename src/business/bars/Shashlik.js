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

const Off = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={() => window.history.back()}>
			</PanelHeaderBack>}
			separator={false}
		>
			ШашлыкoFF
		</PanelHeader>

		<Gallery
			slideWidth = "100%"
			style = {{ height: 225 }}
			align = "center"
			bullets="light"
		>
			<img style={{ objectFit: 'contain' }} src="https://sun9-69.userapi.com/kbDeVoU5aVpX4zP6SA0Yn74gRBqfwlRUuAq3yA/uBtHctfOmlU.jpg" alt="Restaraunt's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-21.userapi.com/vctODSRjK4cPgZyN5RtvmsBrpJ8Lawe7JQkjtw/gfp2q0LLqXA.jpg" alt="Restaraunt's Food"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-73.userapi.com/1gdAd88L9hz7S449Kk_HEvTEZrKh7HI4Yalv0w/P5TUBUomP_o.jpg" alt="Restaraunt's Food"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-14.userapi.com/fiVyqWqfVhDrM8lMMvy7KNLB_4oAbUqfrrhuyA/dXIT_O1lrxE.jpg" alt="Restaraunt's Food"/>
		</Gallery>

		<Separator wide style={{paddingTop: '10px'}}/>

		<Group separator='hide' style={{ padding: '0 3vw 20px 3vw'}} header={<Header>Райский гриль</Header>}>
			<Div>
			Вкуснейшее мясо, доступное каждому.
            <br />
			Это "ШашлыкoFF" — заведение, что за малую сумму доставит Вам огромное удовольствие. Демократичность, хорошая кухня и отличное обслуживание сильно выделяют это заведение, ведь где ещё можно отведать вкусный и недорогой шашлык, кроме как не здесь?
            <br />
			Кроме шашлыка, тут подают отличные супы и бургеры, а также стейки. Всё готовится из охлаждённого мяса, ведь именно в нём сохраняется больше всего витаминов и полезных для организма веществ.
			<br /> <br />
			Кажется, запахло грилем. Встретимся по адресу ниже!
			</Div>
		</Group>

		<Separator wide />

		<Div style={{paddingBottom: 0}}>
			<Cell size='l' before={<Icon28PlaceOutline height={24} width={24} />} description="11:00 - 01:00 (Пт, Сб - до 03:00)">Профсоюзов, 11<br />Ленина 50/1</Cell>
			<Cell size='l' before={<Icon28MoneyCircleOutline height={24} width={24} />}>400-800₽</Cell>
            <Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>94-56-00 (Профсоюзов 11)<br />93-74-79 (Ленина 50/1)</Cell>
			<Cell size='l' href="https://instagram.com/shashlikoff_surgut" target="_blank" before={<Icon28LogoInstagram height={24} width={24} />}>@shashlikoff_surgut</Cell>
		</Div>

		<Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
			<YMaps>
				<Map defaultState={{ center: [61.262673, 73.385365], zoom: 13 }} width='90vw' height='60vh'>
					<Placemark defaultGeometry={[61.269424, 73.382403]} defaultOptions={{preset: 'islands#circleIcon', iconColor: '#000'}} />
					<Placemark defaultGeometry={[61.255827, 73.388001]} defaultOptions={{preset: 'islands#circleIcon', iconColor: '#000'}} />
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

export default Off;