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
import { HomeBannersGroup } from '@/components/index';
import { useEffect } from 'react';
import { PageProps } from '@/src/@types/page-props';

export const Home = ({ nav }: PageProps) => {
	const router = useRouter();

	useEffect(() => {
		const routesToPrefetch: string[] = ['/business', '/about'];
		routesToPrefetch.forEach((route) => router.prefetch(route));
	}, [router]);

	return (
		<Panel nav={nav}>
			<PanelHeader fixed={false}>GO!</PanelHeader>

			<HomeBannersGroup />

			<Group style={{ margin: '0px 20px' }}>
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
