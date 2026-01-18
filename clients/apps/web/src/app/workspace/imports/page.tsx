'use client'

import { setBreadcrumbs } from '~widgets/nav'

import { Group, PageTitle } from '~packages/ui'

import { useMount } from '@wcsc/hooks'
import { href } from '@wcsc/href'

export default function Imports() {
	useMount(() =>
		setBreadcrumbs([{ text: 'Разметка', href: href.imports.index }]),
	)

	return (
		<Group>
			<PageTitle
				title={'Разметка'}
				subtitle={
					'Панель мониторинга и управления ключевыми метриками системы'
				}
			/>
		</Group>
	)
}
