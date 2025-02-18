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
	return (
		<html lang='ru'>
			<body>
				<ConfigProvider
					platform='ios'
					transitionMotionEnabled>
					<AdaptivityProvider viewWidth={ViewWidth.MOBILE}>
						<AppRoot userSelectMode='disabled'>{children}</AppRoot>
					</AdaptivityProvider>
				</ConfigProvider>
			</body>
		</html>
	);
}
