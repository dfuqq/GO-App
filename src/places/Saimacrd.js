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

const Saimacrd = props => {
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => window.history.back()}>
                </PanelHeaderBack>}
            >
                За Саймой
            </PanelHeader>
            
            <Gallery
                slideWidth = "100%"
                style = {{ height: 225 }}
                align = "center"
                bullets="light"
            >
                <img style={{ objectFit: 'contain' }} src="https://sun9-4.userapi.com/q5O1V32omeoM7yAKweBEDSA-mcOoiJSI8_8r0A/zbGPyDApbCA.jpg" alt="Saima"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-69.userapi.com/7yPqTRoGdAMIByl6pnD2IzpEsKGuo3omGCrokQ/xSnEtD4xG5o.jpg" alt="Saima"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-56.userapi.com/CvAjSWzJhHRvHt29bX3BIclpslE781lW3S_igA/iMFxQKSKWBA.jpg" alt="Saima"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-8.userapi.com/s-PrktZhWkrvPoYv7J7LQ08UP8OUYu0fdlubUw/63Y1MoQS44s.jpg" alt="Saima"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-65.userapi.com/eIwlKF01iHAg-upq346yFT6ltQ3-6xsY4Hv2vA/15iNjEniFxw.jpg" alt="Saima"/>
                <img style={{ objectFit: 'contain' }} src="https://sun9-58.userapi.com/_FcGFHnItXY7eh5tyMid0CDKckj0wYESXYQP-A/JHo1FUOvYLU.jpg" alt="Saima"/>
            </Gallery>
            
            <Separator wide style={{ paddingBottom: '10px' }} />

            <Group style={{ padding: '0 5vw' }}>
                Главный парк города.
                <br /><br />
                Общая площадь более 65 га. На территории находятся спортивные площадки и скейтпарк, набережная с лежаками, а также множество скамеек и детских площадок.
                <br />
                В начале 90-х годов был необустроен. В 2000 году на территории было решено разместить ботанический сад, однако проект пока не был реализован. Позднее, в 2013 году, появился план по обустройству парка, а в 2020 году начались первые работы по реконструкции.
            </Group>

            <Group separator='hide' style={{ paddingBottom: '12px' }}>
                <Cell size='l' before={<Icon28PlaceOutline width={24} height={24} />}>Учебная, 4А<br />Ивана Кайдалова, 30<br />Университетская, 12</Cell>
            </Group>

            <Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                <YMaps>
                    <Map defaultState={{ center: [61.244550, 73.427265], zoom: 15 }} width='90vw' height='60vh'>
                        <Placemark defaultGeometry={[61.244550, 73.427265]} defaultOptions={{preset: 'islands#blueVegetationCircleIcon', iconColor: '#000'}} />
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

export default Saimacrd;