import React from 'react';
import {YMaps, Map} from 'react-yandex-maps';

import bridge from '@vkontakte/vk-bridge';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';

import Icon24ShareOutline from '@vkontakte/icons/dist/24/share_outline';

const Test = props => {
    var cords = [];

    const share =  async function() {await bridge.send("VKWebAppShare", {link: "https://vk.com/app7614127"}) };

    const getGeo = async function() {
        try {
            cords = [];
            const geo = await bridge.send("VKWebAppGetGeodata");
            cords.push(geo.long);
            cords.push(geo.lat);
        } 
        catch(error) {
            console.log('GEO_DENIED'); // TODO перенести функцию в testdva (будущий introdva)
            cords = null;
        }
    }

    const check = () => {console.log(cords)};


    return (
        <Panel id={props.id} centered={true}>
            <Group>
                <Cell onClick={getGeo}>Координаты</Cell>
                <Cell before={<Icon24ShareOutline />} onClick={share}>Поделиться</Cell>
                <Cell onClick={check}>Проверка</Cell>
            </Group>
            <YMaps>
                <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} width='90vw' height='35vh' />
            </YMaps>
        </Panel>
    )
};

export default Test;