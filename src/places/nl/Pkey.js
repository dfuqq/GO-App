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
import Icon24LogoVk from '@vkontakte/icons/dist/24/logo_vk';

const Pkey = props => {
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => window.history.back()}>
                </PanelHeaderBack>}
            >
                Парк "Новые Ключи"
            </PanelHeader>
            
            <Gallery
                slideWidth = "100%"
                style = {{ height: 225 }}
                align = "center"
                bullets="light"
            >
                <img style={{ objectFit: 'contain' }} src="https://sun9-38.userapi.com/5onzg_75iOoyZN9T4pVa5fKWRCtt8-LOFt1sjw/8NlWEayHYM0.jpg" alt="Pkey"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-59.userapi.com/Ts2MrG9PtuNOOuF54FdQRYm7qSSqahvZ6uWYlg/G_G4gPmeUZM.jpg" alt="Pkey"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-35.userapi.com/SMBs0exAGlb1MY_QqF6ROzSFFaOppoEmgCCwBA/r-uYBtQ1O9Y.jpg" alt="Pkey"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-73.userapi.com/pDJWYWvv4On9ha-hPBeOHQoYdlAPKugDUe0sTg/VOfrNFM3sQs.jpg" alt="Pkey"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-42.userapi.com/oO_TIPqb1ezqnVPXCNLHqtexcQkCtOAF3UfZ4g/yt4UpBATirM.jpg" alt="Pkey"/>
            </Gallery>
            
            <Separator wide style={{ paddingBottom: '10px' }} />

            <Group style={{ padding: '0 5vw' }}>
                Молодой и перспективный всесезонный парк.
                <br /><br />
                Расположен на территории 9 га рядом с одноимённым ЖК, в северо-западной части города. Сейчас активно застраиваается, чтобы в будущем стать одним из главных мест города.
                <br />
                На территории планируется разместить аттракционы, динопарк и многие другие развлечения для людей всех возрастов. Уже сейчас посетителям доступен этно-парк с историей округа, а зимой ещё и уникальный каток посреди леса.
            </Group>

            <Group separator='hide' style={{ paddingBottom: '12px' }}>
                <Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>Крылова, 53/4</Cell>
                <Cell size='l' before={<Icon24LogoVk />} href="https://vk.com/parknewkeys86" target="_blank">Группа VK</Cell>
            </Group>

            <Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                <YMaps>
                    <Map defaultState={{ center: [61.287470, 73.360908], zoom: 16.8 }} width='90vw' height='60vh'>
                        <Placemark defaultGeometry={[61.287470, 73.360908]} defaultOptions={{preset: 'islands#blueVegetationCircleIcon', iconColor: '#000'}} />
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

export default Pkey;