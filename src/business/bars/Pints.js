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

const Pints = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={() => window.history.back()}>
			</PanelHeaderBack>}
			separator={false}
		>
            Две Пинты
		</PanelHeader>
        
		<Gallery
			slideWidth = "100%"
			style = {{ height: 225 }}
			align = "center"
			bullets="light"
		>
			<img style={{ objectFit: 'contain' }} src="https://sun9-60.userapi.com/ixjE4kWMUtGlNFWQd-Cxuu00VVyXEcuskI8Zrg/-VLyzgVYhcs.jpg" alt="Pub's Staff"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-26.userapi.com/Fd3n7yxN083rLiD6dmLIraS-gGcDscLVGeOyJQ/JPqRbLdjxFA.jpg" alt="Pub's Food"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-50.userapi.com/hwj4yPUzvEwh_i4b2xUsFhFLWiu2woCpUHINOw/p8VFQvIpaDc.jpg" alt="Pub's Guests"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-70.userapi.com/e3KsXNE5g85Nbhi_-GZnawNhE143ybPFWNFTcw/xn8FNk73KGY.jpg" alt="Pub's Guests"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-71.userapi.com/3wx3TAvXPPDA2y_zJEDzbLlFZjmEUBTM9FzR8g/UIW5iuyB9AY.jpg" alt="Pub's Food"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-13.userapi.com/IzAZvYZ_9RAzEtSk8b66ZqVZa2eMgrVVtH4_aw/CV11ABHW_fk.jpg" alt="Pub's Food"/>
		</Gallery>

		<Separator wide style={{paddingTop: '10px'}}/>

		<Group separator='hide' style={{ padding: '0 3vw 20px 3vw'}} header={<Header>Двух не хватит</Header>}>
			<Div>
			Прямиком из заграницы — теперь в Сургуте.
            <br />
			"Две Пинты" имеет в своём арсенале всё, чтобы влюбить в себя клиента.
			<br />
			Например, море пива из разных уголков мира, которое не оставит равнодушным даже искушённого гостя. Вкусные закуски, отличная кухня и приятная атмосфера, которые выливаются в одно — желание приходить снова и снова.
			<br /> <br />
			За границу не выезжая из Сургута? Легко.
			<br />
			Достаточно прийти по адресу ниже.	
			</Div>
		</Group>

		<Separator wide />

		<Div style={{paddingBottom: 0}}>
			<Cell size='l' multiline before={<Icon28PlaceOutline height={24} width={24} />} description="17:00 - 22:00 (Пт, Сб - до 02:00)">Ленина, 39</Cell>
			<Cell size='l' before={<Icon28MoneyCircleOutline height={24} width={24} />}>700-1300₽</Cell>
            <Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>63-38-96</Cell>
			<Cell size='l' href="https://instagram.com/two.pint.bar.surgut" target="_blank" before={<Icon28LogoInstagram height={24} width={24} />}>@two.pint.bar.surgut</Cell>
		</Div>

		<Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
			<YMaps>
				<Map defaultState={{ center: [61.254515, 73.387993], zoom: 17 }} width='90vw' height='60vh'>
					<Placemark defaultGeometry={[61.254515, 73.387993]} defaultOptions={{preset: 'islands#circleIcon', iconColor: '#000'}} />
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

export default Pints;