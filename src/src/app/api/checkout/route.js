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
              description: '1500+ Premium AI Prompts for Marketing, Programming & Writing',
              images: ['https://yourdomain.com/og-image.jpg'],
            },
            unit_amount: 3900, // $39.00 in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout`,
    })

    return Response.json({ sessionId: session.id })
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 })
  }
}