'use client';

import {
	AdaptivityProvider,
	AppRoot,
	ConfigProvider,
	ViewWidth,
} from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

// FIXME: Loadings until data received

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
