import React, { Fragment } from 'react';
import { YMaps, Map, Placemark, Circle } from 'react-yandex-maps';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Gallery from '@vkontakte/vkui/dist/components/Gallery/Gallery';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';

import Icon28PlaceOutline from '@vkontakte/icons/dist/28/place_outline';

const Mneft = props => {
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => window.history.back()}>
                </PanelHeaderBack>}
            >
                "Подвигу Нефтяников"
            </PanelHeader>
            
            
            <Gallery
                slideWidth = "100%"
                style = {{ height: 225 }}
                align = "center"
                bullets="light"
            >
                <img style={{ objectFit: 'contain' }} src="https://sun9-39.userapi.com/vW3S8JjatJt3SqHOskQYaruBnHf239qHbUyOYQ/iIDQpYlCgvk.jpg" alt="Mneft"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-67.userapi.com/qlRyhv0r6tm_2gnh8K9H_SgQk750_YLYA5Fc-A/zYdTujOBqzU.jpg" alt="Mneft"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-54.userapi.com/KQFffq6hSrm4PR1Jix1wWzU042i6G8POLUmjJA/E3d9Yu0Tgx4.jpg" alt="Mneft"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-8.userapi.com/E3CWrc6CoNNh_mRtSKtNGxowZ3DLH_I8Fu3vjA/7tFwL1cLlBA.jpg" alt="Mneft"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-63.userapi.com/tCz4jMLAQPBLcgGiqJ90IMR2igRoTRJBOgQQHw/wn7Z1T_F10E.jpg" alt="Mneft"/>
            </Gallery>
            
            <Separator wide style={{ paddingBottom: '10px' }} />

            <Group style={{ padding: '0 5vw' }}>
                Монумент в честь всех нефтяных работников Севера.
                <br /><br />
                Открыт в 2016 году. Представляет из себя стилизованную вышку буровой установки, струи бьющей нефти (т.н. "Чёрное золото") и 11 бронзовых фигур разных профессий, стоящих за этим подвигом.
                <br />
                Со слов генерального директора "Сургутнефтегаза" Владимира Богданова:
                <br />
                "Это была победа человеческого духа. В суровых условиях могло сломаться все - железо, техника, но не люди"
                <br /><br />
                Памятник часто сравнивают с логотипом "Макдональдса", что оскорбительно для представителей работников нефтяной промышленности. Имел место случай, когда с дизайнером Артемием Лебедевым спорил глава города Вадим Шувалов.
            </Group>

            <Group separator='hide' style={{ paddingBottom: '12px' }}>
                <Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>Энтузиастов, 32</Cell>
            </Group>

            <Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                <YMaps>
                    <Map defaultState={{ center: [61.258781, 73.364462], zoom: 17 }} width='90vw' height='60vh'>
                        <Placemark defaultGeometry={[61.258781, 73.364462]} defaultOptions={{preset: 'islands#blueObservationCircleIcon', iconColor: '#000'}} />
                        {props.geo[0] !== undefined &&
						<Fragment>
							<Circle defaultGeometry={[[props.geo[1], props.geo[0]], 200]} options={{draggable: false, fillColor: 'rgba(0, 0, 0, 0.5)', strokeColor: '#000', strokeOpacity: 0.8, strokeWidth: 2 }} /> 
						</Fragment>
					    }
                    </Map>
                </YMaps>
		    </Group>

        </Panel>
    )
}

export default Mneft;