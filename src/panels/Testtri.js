import React from 'react';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

const Testtri = props => (
    <Panel id={props.id} centered={true}>
        <div style={{ height: '100vh', width: '100vw', backgroundColor: '#19191A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Group>
                <Div style={{textAlign: 'center', color: '#FEFEFE'}}>
                    <img src='#' alt='ready' style={{width: '65px', height: '65px'}} />
                    <h2 style={{marginTop: '10px'}}>Всё готово!</h2>
                </Div>
                <FixedLayout vertical='bottom'>
                    <Div>
                        <Button size='xl' mode='commerce' onClick={props.viewIntro}>Поехали!</Button>
                    </Div>
                </FixedLayout>
            </Group>
        </div>
    </Panel>
);

export default Testtri;