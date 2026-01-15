'use client'

import { PropsWithChildren } from 'react'

import WithReactQuery from './with-react-query'

export const WithProviders = ({ children }: PropsWithChildren) => {
	return <WithReactQuery>{children}</WithReactQuery>
}
