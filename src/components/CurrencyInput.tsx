'use client'

import { Input, Select, SelectItem } from '@nextui-org/react'

const currency = [
	{key: 'USD', label: 'USD'},
	{key: 'RUB', label: 'RUB'},
	{key: 'EUR', label: 'EUR'},
]

function CurrencyInput() {
	return (
		<div className='w-full flex flex-row items-end gap-2'>
			<Input variant='underlined' placeholder="0.00" type="number"/>
			<Select className="text-default-400 w-28" label='Currency' variant='underlined'>
				{currency.map((cur) => (
					<SelectItem key={cur.key}>
						{cur.label}
					</SelectItem>
				))}
			</Select>
		</div>
	)
}

export default CurrencyInput



