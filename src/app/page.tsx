import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Card, CardBody } from "@nextui-org/card"

export default function Home() {
  return (
    <main className='h-screen flex justify-center'>
      <div className='w-[1280px]'>
        <div className='w-full flex justify-end py-4'>
          <ThemeSwitcher/>
        </div>
        <div  className='h-full flex justify-center items-center'>
          <div className='flex flex-row gap-12'>
            <Card className='h-40'>
              <CardBody>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quia nesciunt facilis sit autem quos, porro hic blanditiis soluta, officiis fugit, laboriosam laborum rem! Mollitia veniam provident quis dignissimos unde.1
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda similique odio nulla sit maxime officiis officia, perferendis minima deserunt laboriosam eius, natus magnam quis quaerat consequatur nihil? Cum, iste earum.
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
