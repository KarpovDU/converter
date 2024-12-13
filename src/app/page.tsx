import CurrencyBlock from '@/components/CurrencyBlock'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { FaExchangeAlt } from "react-icons/fa"


export default function Home() {
  return (
    <main className='w-[1280px] mx-auto h-screen flex flex-col'>
      <div className='right flex justify-end'>
        <ThemeSwitcher/>
      </div>
      <div  className='h-full flex flex-row items-center justify-center gap-24'>
          <CurrencyBlock/>
          <FaExchangeAlt className='h-12 w-12'/>
          <CurrencyBlock/>
      </div>
    </main>
  );
}
