import { ShoppingBag } from '@phosphor-icons/react'
import { HomeContainer, Product } from "@/styles/pages/home"
import Image from "next/image"
import Head from 'next/head'

import { useKeenSlider } from 'keen-slider/react' 
import 'keen-slider/keen-slider.min.css'

import { stripe } from '@/lib/stripe'
import Stripe from "stripe"
import Link from "next/link"
import { /*GetServerSideProps*/  GetStaticProps } from "next"
import { useShop } from '@/contexts/ShopContext'
interface HomeProps {
  products: {
    id: string,
    name: string,
    description: string,
    imageUrl: string,
    price: number,
    defaultPriceId: string,
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
    
  })

  const { handleAddProductShop } = useShop()
 
  return (
    <>
        <Head>
          <title>Home | Ignite Shop</title>
        </Head>

        <HomeContainer ref={sliderRef} className="keen-slider">
            {products.map((product) => (
                <Product className="keen-slider__slide" key={product.id}>
                  <Link href={`/product/${product.id}`}  prefetch={false}>{/*Com prefetch false o next nao faz requisições por baixo dos panos*/}
                    <Image src={product.imageUrl} width={520} height={480} alt=""/>
                  </Link>

                  <footer>
                    <Link href={`/product/${product.id}`}  prefetch={false}>
                      <div>
                          <strong>{product.name}</strong>
                          <span>
                            {new Intl.NumberFormat('pt-BR', {
                              style: 'currency',
                              currency: 'BRL' }).format(product.price / 100)}
                          </span>
                      </div>
                    </Link>

                    <button className='Shop' 
                      onClick={() => 
                        handleAddProductShop({
                          id: product.id, 
                          name: product.name, 
                          description: product.description,
                          imageUrl: product.imageUrl,
                          price: product.price,
                          defaultPriceId: product.defaultPriceId
                        })}>
                      <ShoppingBag/>
                    </button>
                  </footer>
                </Product>
            ))}
        </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      imageUrl: product.images[0],
      price: Number(price.unit_amount),
      defaultPriceId: price.id
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // a cada duas horas  
    // o next faz requisições para api a cada 2 horas para criar um novo html estatico. OBS.: você determina o tempo
  }
}

/*
export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name:product.name,
      imageUrl: product.images[0],
      price: price.unit_amount
    }
  })

  return {
    props: {
      products,
    }
  }
}
*/