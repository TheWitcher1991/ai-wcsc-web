import { Nullable, Timeout } from '@wcsc/types'
import { useEffect, useRef } from 'react'

import { useMemoizedFn } from './use-memoized-fn'

export const useTimeoutCleanup = () => {
	const timeoutRef = useRef<Nullable<Timeout>>(null)

	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current)
			}
		}
	}, [])

	return useMemoizedFn((callback: () => void, delay: number) => {
		timeoutRef.current = setTimeout(callback, delay)
	})
}
