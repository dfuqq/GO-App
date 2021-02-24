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
import Icon24Link from '@vkontakte/icons/dist/24/link';
import Icon24LogoVk from '@vkontakte/icons/dist/24/logo_vk';

const Smdt = props => {
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => window.history.back()}>
                </PanelHeaderBack>}
            >
                СМДТ
            </PanelHeader>
            
            <Gallery
                slideWidth = "100%"
                style = {{ height: 225 }}
                align = "center"
                bullets="light"
            >
                <img style={{ objectFit: 'contain' }} src="https://sun9-49.userapi.com/Hbwhl2_jFpQy9G5A-MeWTQyBcqvmGbg8Scq5uw/tUq2L-BgYMo.jpg" alt="Smdt"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-26.userapi.com/795F85RS1hVXF4K7gFz1niEKNj9r3mZq4pQiwA/VOvRbxg8WXQ.jpg" alt="Smdt"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-11.userapi.com/nvyzVrIyluZKcko13FOE9_rKt8lj_2GU3BaPdQ/y7RHVwU5q-M.jpg" alt="Smdt"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-11.userapi.com/3H3yUhCAFjvLybOW2DwGyEmViPT-aypZDG-KNA/JYu2xcKMOD8.jpg" alt="Smdt"/>
            </Gallery>

            <Separator wide style={{ paddingBottom: '10px' }} />

            <Group style={{ padding: '0 5vw' }}>
                Популярный городской театр.
                <br /><br />
                Открылся 4 сентября 2000 года по инициативе департамента культуры, молодёжной политики и спорта Сургута. На площадке проводятся спектакли и концерты, а также театр принимает различные фестивали.
                <br />
                Кроме того, в театре работает множество уникальных проектов, среди которых "Уроки литературы в театре", в котором известные литературные произведения воплощаются в игре актёров.
            </Group>

            <Group separator='hide' style={{ paddingBottom: '12px' }}>
                <Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>Грибоедова, 12</Cell>
                <Cell size='l' before={<Icon24Link />} href="https://surgu.ru/zhizn-surgu/teatr-plastiki-i-pantomimy-grotesk/obschaya-informatsiya" target="_blank">surgu.ru</Cell>
                <Cell size='l' before={<Icon24LogoVk />} href="https://vk.com/surgutteatr" target="_blank">Группа VK</Cell>
            </Group>

            <Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                <YMaps>
                    <Map defaultState={{ center: [61.247272, 73.405787], zoom: 17 }} width='90vw' height='60vh'>
                        <Placemark defaultGeometry={[61.247272, 73.405787]} defaultOptions={{preset: 'islands#blueTheaterCircleIcon', iconColor: '#000'}} />
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

export default Smdt;