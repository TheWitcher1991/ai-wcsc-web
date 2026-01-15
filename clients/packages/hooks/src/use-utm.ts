'use client'

import { useMemo } from 'react'

interface UTMData {
	source?: string
	medium?: string
	campaign?: string
	content?: string
	term?: string
}

export const useUTM = (): UTMData => {
	return useMemo(() => {
		const searchParams = new URLSearchParams(window.location.search)

		return {
			source: searchParams.get('utm_source') || undefined,
			medium: searchParams.get('utm_medium') || undefined,
			campaign: searchParams.get('utm_campaign') || undefined,
			content: searchParams.get('utm_content') || undefined,
			term: searchParams.get('utm_term') || undefined,
		}
	}, [window.location.search])
}
