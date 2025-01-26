import { DefaultButton } from "@/components/default-button"
import { stripe } from "@/lib/stripe"
import { ProductContainer, ProductDetails, ImageContainer } from "@/styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
//import { useRouter } from "next/router"
import Stripe from "stripe"
import Head from "next/head"
import { useShop } from "@/contexts/ShopContext"

interface ProductProps {
  product: {
    id: string,
    name: string,
    imageUrl: string,
    price: number,
    description: string,
    defaultPriceId: string,
  }
}

export default function Product({ product }: ProductProps) {
    //const router = useRouter()
    /*
    const { isFallback } = useRouter()
    if(isFallback) {
      return <p>Loading...</p>
    }
    */
    // estado de loading case o fallback do getStaticPaths seja true
    // quando o fallback: "blocking" ele nao vai carregar a pagina até ter os dados

    const { handleAddProductShop } = useShop()

    return (
      <>
         <Head>
          <title>{product.name} | Ignite Shop</title>
        </Head>

        <ProductContainer>
          <ImageContainer>
            <Image src={product.imageUrl} width={520} height={480} alt=""/>
          </ImageContainer>

          <ProductDetails>
            <h1>{product.name}</h1>
            <span>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL' }).format(product.price / 100)}
            </span>

            <p>{product.description}</p>

            <DefaultButton 
              label="Colocar na sacola"
              onClick={() => handleAddProductShop({
                id: product.id,
                name: product.name,
                description: product.description,
                imageUrl: product.imageUrl,
                price: product.price,
                defaultPriceId: product.defaultPriceId
              })}
              />
          </ProductDetails>
        </ProductContainer>
      </>
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
        price: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1, // 1 hora em cache
  }
}
  