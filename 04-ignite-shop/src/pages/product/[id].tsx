import { stripe } from "@/lib/stripe"
import { ProductContainer, ProductDetails, ImageContainer } from "@/styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
//import { useRouter } from "next/router"
import Stripe from "stripe"
import axios from 'axios'
import { useState } from "react"

interface ProductProps {
  product: {
    id: string,
    name: string,
    imageUrl: string,
    price: string,
    description: string,
    defaultPriceId: string,
  }
}

export default function Product({ product }: ProductProps) {
  const [ isRedirect, setIsRedirect ] = useState(false)
    //const router = useRouter()
    /*
    const { isFallback } = useRouter()
    if(isFallback) {
      return <p>Loading...</p>
    }
    */
    // estado de loading case o fallback do getStaticPaths seja true
    // quando o fallback: "blocking" ele nao vai carregar a pagina até ter os dados

    async function handleBuyProduct() {
      setIsRedirect(true)

      try {
        const response = await axios.post('/api/checkout', {
          priceId: product.defaultPriceId
        })

        const { checkoutUrl } = response.data

        //router.push('/checkout') caso for uma rota interna no next se redireciona assim

        window.location.href = checkoutUrl

      } catch (err: any) {
        setIsRedirect(false)
        // conectar com uma ferramenta de observabilidade: datadog / sentry
        alert('Falha ao comprar pedido')

      }
    }
    return (
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt=""/>
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button 
            disabled={isRedirect}
            onClick={handleBuyProduct}>Buy right now</button>
        </ProductDetails>
      </ProductContainer>
    )
  }

export const getStaticPaths: GetStaticPaths = async () => {
  // Buscar produtos mais vendidos ou mais acessados e passaria dentro de paths

  return {
    paths: [
      { params: { id: 'prod_RdUSstoj9fHUt3'}}
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.id) {
    return {
      notFound: true,
    }
  }

  const productId = String(params.id)
  
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name:product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL' }).format(Number(price.unit_amount) / 100),
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1, // 1 hora em cache
  }
}
  