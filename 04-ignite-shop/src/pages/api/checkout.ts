import type { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "@/lib/stripe";
import { PropsShop } from "@/contexts/ShopContext";

export default async function checkout(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const arrayPriceIds: PropsShop[] = req.body.arrayPriceIds

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  
  if(!arrayPriceIds[0].defaultPriceId) {
    return res.status(400).json({ error: 'priceId not found' })
  }

  const formatToStipeItems = arrayPriceIds.map((product) => {
    return {
      price: product.defaultPriceId,
      quantity: 1
    }
  })

  const success_url = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancel_url = `${process.env.NEXT_URL}`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url,
    cancel_url,
    mode: 'subscription',
    line_items: formatToStipeItems
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}
