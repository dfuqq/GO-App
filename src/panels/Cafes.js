import React from 'react';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Footer from '@vkontakte/vkui/dist/components/Footer/Footer';

const Cafes = props => (
    <Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={() => window.history.back()}>
			</PanelHeaderBack>}
		>
			Кафе
		</PanelHeader>

        <Cell expandable before={<Avatar src="https://sun9-19.userapi.com/QlrHYrnSYimVruI0aytyvpx7M5Uj2Vpj6Yls7w/AKiGv9x6vh8.jpg" size={56} />} onClick={props.go} data-to="nyc" description="Антикафе на Ленина 18">New York Coffee</Cell>
        <Cell expandable before={<Avatar src="https://sun9-26.userapi.com/JLQqgcG4PwD2jIJZCN3eD_-JYssZ3HPFWMZVeA/mdjleC0STG4.jpg" size={56} />} onClick={props.go} data-to="trvls" description="Сеть кофеен">Traveler's Coffee</Cell>
        <Cell expandable before={<Avatar src="https://sun9-22.userapi.com/IJ6V1x3zFKXu0bvehgovZEaQ7p7H9Ono9HP1wQ/7naj9IeTKj4.jpg" size={56} />} onClick={props.go} data-to="vkus" description="Кофейня на Ленина 16">Академия Вкуса</Cell>
        <Cell expandable before={<Avatar src="https://sun9-63.userapi.com/NeuIamfZ41psyXoBY9DIqGxc6w_CpwafxgXecg/9jyrHQC1ukY.jpg" size={56} />} onClick={props.go} data-to="botanica" description="Кафе на Энергетиков 12">Ботаника</Cell>
        <Cell expandable before={<Avatar src="https://sun9-46.userapi.com/ZkDGMCkOfGHrXBmYatlVWFeAZwwdZ8ZG1qGClA/V2dJXbx-2YY.jpg" size={56} />} onClick={props.go} data-to="dovlatov" description="Кафе на Сибирской 15">Довлатов</Cell>
        <Cell expandable before={<Avatar src="https://sun9-49.userapi.com/o3f_rsOSg7AJAcbqS378krASkisMg6WvRQzPqQ/n3hvUqn0RcE.jpg" size={56} />} onClick={props.go} data-to="friends" description="Кофейня на Энгельса 11">Друзья</Cell>
        <Cell expandable before={<Avatar src="https://sun9-2.userapi.com/43tYe8dy4gn41kK2g-DyThxyadRPqXjqRZFXsA/7yt-QpsMOEM.jpg" size={56} />} onClick={props.go} data-to="zerno" description="Кофейня на пр. Пролетарский 11">Зерно</Cell>
        <Cell expandable before={<Avatar src="https://sun9-41.userapi.com/ZmAdch4EcttzJycEb6Ggo6MNw--EhJTU5bZJRA/Y9J607NMdTw.jpg" size={56} />} onClick={props.go} data-to="cofein" description="Кофейня на Бульвар Свободы 1">Кофеин</Cell>
        <Cell expandable before={<Avatar src="https://sun9-11.userapi.com/4Zl8gA8MrejT8iHo9TvbhjmdMJn2olfGshJ_9w/wix2yvmG37U.jpg" size={56} />} onClick={props.go} data-to="loft" description="Антикафе на Ленина 18">Лофт-проект "Место"</Cell>
        <Cell expandable before={<Avatar src="https://sun9-46.userapi.com/ClJn2-tpDd0UWhRO_CFjrBni6e2X6-PgFNzMAQ/whLThYAHzsU.jpg" size={56} />} onClick={props.go} data-to="endorf" description="Кофейня на Университетской 19">Эндорфин</Cell>

        <Footer>
            Создатели приложения не несут<br />ответственность за достоверность данных.
            <br />
            Вся информация взята<br />из открытых источников сети Интернет<br />от аккаунтов официальных представителей заведений.
            <br />
            Уточняйте подробности работы по телефону.
        </Footer>

    </Panel>
);


export default Cafes;