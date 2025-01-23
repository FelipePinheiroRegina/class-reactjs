import { HomeContainer, Product } from "@/styles/pages/home"
import Image from "next/image"

import { useKeenSlider } from 'keen-slider/react' 
import 'keen-slider/keen-slider.min.css'

import shirt1 from '@/assets/shirts/shirt1.png'
import shirt2 from '@/assets/shirts/shirt2.png'
import shirt3 from '@/assets/shirts/shirt3.png'
import { useEffect, useState } from "react"

export default function Home() {
  const [list, setList] = useState<number[]>([])
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  useEffect(() => {
    setTimeout(() => {
      setList([1, 2, 3, 4])
    }, 2000)
  }, [])

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
        <Product className="keen-slider__slide">
          <Image src={shirt1} width={520} height={480} alt=""/>

          <footer>
            <strong>Shirt X</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>

        <Product className="keen-slider__slide">
          <Image src={shirt2} width={520} height={480} alt=""/>

          <footer>
            <strong>Shirt X</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>

        <Product className="keen-slider__slide">
          <Image src={shirt3} width={520} height={480} alt=""/>

          <footer>
            <strong>Shirt X</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>

        <Product className="keen-slider__slide">
          <Image src={shirt3} width={520} height={480} alt=""/>

          <footer>
            <strong>Shirt X</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
    </HomeContainer>
  )
}
