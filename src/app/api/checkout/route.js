import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(req) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'AI Prompt Vault - All Access',
              description: '1500+ Premium AI Prompts',
            },
            unit_amount: 3900,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout`,
    })

    return Response.json({ url: session.url })
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 })
  }
}