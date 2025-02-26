'use client';

import {
	Panel,
	PanelHeader,
	Group,
	Footer,
	Cell,
	useColorScheme,
} from '@vkontakte/vkui';

import { Icon24Info } from '@vkontakte/icons';

import { useRouter } from 'next/navigation';
import { HomeBannersGroup } from './';

interface Props {
	nav: string;
}

export const Home = ({ nav }: Props) => {
	const router = useRouter();

	// TODO: Learn prefetch

	return (
		<Panel nav={nav}>
			<PanelHeader fixed={false}>GO!</PanelHeader>

			<HomeBannersGroup />

			<Group style={{ margin: 20 }}>
				<Cell
					before={
						<Icon24Info
							color={
								useColorScheme() === 'dark' ? 'white' : (
									'#2688eb'
								)
							}
						/>
					}
					onClick={() => router.push('/about')}>
					О приложении
				</Cell>
			</Group>

			<Footer>© d_fuq, 2025</Footer>
		</Panel>
	);
};
