import { Select } from '@gravity-ui/uikit'

export default function DepartmentButton() {
	return (
		<Select
			disabled
			value={['Направление «Теплицы»']}
			options={[
				{
					content: 'Направление «Теплицы»',
					value: 'Направление «Теплицы»',
				},
			]}
			title={'Выберите рабочее пространство'}
		/>
	)
}
