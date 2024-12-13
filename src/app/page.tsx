import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Card, CardBody } from "@nextui-org/card"

export default function Home() {
  return (
    <main className='w-[1280px] mx-auto h-screen flex flex-col'>
      <div className='right flex justify-end'>
        <ThemeSwitcher/>
      </div>
      <div  className='h-full flex flex-row items-center justify-center gap-4'>
          <Card>
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
    </main>
  );
}
