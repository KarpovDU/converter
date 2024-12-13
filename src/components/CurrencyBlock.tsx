import { Card, CardBody } from "@nextui-org/card"
import { LiaFlagUsaSolid } from "react-icons/lia"
import CurrencyInput from './CurrencyInput'


function CurrencyBlock() {
	return (
		<Card className='w-full'>
			<CardBody className='flex flex-col gap-4 items-center justify-center'>
				<div className='flex flex-row gap-4 w-full items-center'>
					<LiaFlagUsaSolid className='h-12 w-12'/>
					<div className='w-full text-center'>Select currency</div>
				</div>
				<CurrencyInput/>
			</CardBody>
		</Card>
	)
}

export default CurrencyBlock

