import { stripe } from "@/lib/stripe";
import { SuccessContainer, ImageContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

interface SuccessProps {
  customerName: string;
  products: { id: string; imageUrl: string }[];
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada</h1>

        <ImageContainer>
            {products.length > 0 &&
            products.map((product) => (
                <div key={product.id} className="image-flex-row">
                     <Image src={product.imageUrl} width={120} height={110} alt="" />
                </div>
            ))}
        </ImageContainer>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{" "}
          {products.length} camisetas já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session?.customer_details?.name;

  const products = session?.line_items?.data.map((item) => {
    const product = item.price?.product as Stripe.Product;

    return {
      id: product.id,
      imageUrl: product.images[0] || "", // Garante que existe uma imagem ou usa uma string vazia
    };
  });

  return {
    props: {
      customerName,
      products,
    },
  };
};
