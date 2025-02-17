'use client';

import {
	AdaptivityProvider,
	AppRoot,
	ConfigProvider,
	Root,
	ViewWidth,
} from '@vkontakte/vkui';
import { usePathname } from 'next/navigation';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname(); // Получаем текущий путь
	const nav = pathname === '/' ? 'home' : pathname.substring(1); // '/' → 'home', '/business' → 'business'

	return (
		<html lang='ru'>
			<body>
				<ConfigProvider
					platform='ios'
					transitionMotionEnabled>
					<AdaptivityProvider viewWidth={ViewWidth.MOBILE}>
						<AppRoot userSelectMode='disabled'>
							<Root nav={nav}>{children}</Root>
						</AppRoot>
					</AdaptivityProvider>
				</ConfigProvider>
			</body>
		</html>
	);
}
