import { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import Head from 'next/head'
import { ReactNode } from 'react'

import WithProviders from '~packages/providers'

import './globals.scss'

const manrope = Manrope({
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'WCSC AF',
	description: '',
	robots: 'index, follow',
	authors: [
		{
			name: 'Ashot Svazyan',
			url: 'https://github.com/TheWitcher1991',
		},
	],

	openGraph: {
		title: 'WCSC AF',
		description: '',
		type: 'website',
	},
	twitter: {
		title: 'WCSC AF',
		description: '',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang='ru' className={manrope.className} suppressHydrationWarning>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/favicon.ico'
				/>
				<link
					rel='shortcut icon'
					href='/favicon.ico'
					type='image/png'
				/>
			</Head>
			<body className={'g-root g-root_theme_dark'}>
				<WithProviders>{children}</WithProviders>
			</body>
		</html>
	)
}
