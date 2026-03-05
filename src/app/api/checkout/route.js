// Lemon Squeezy Checkout Redirect
// This endpoint redirects directly to Lemon Squeezy checkout page

export async function POST(req) {
  try {
    // Redirect to Lemon Squeezy checkout
    const lemonSqueezyUrl = 'https://mostovoy-ai.lemonsqueezy.com/checkout/buy/cd5c0d33-6bf5-49f9-a366-1b46f8cf92c7'
    
    return Response.json({ 
      url: lemonSqueezyUrl,
      message: 'Redirecting to Lemon Squeezy checkout'
    })
  } catch (err) {
    return Response.json({ 
      error: err.message 
    }, { status: 500 })
  }
}
