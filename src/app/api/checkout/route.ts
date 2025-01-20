import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia', 
})

// Define types for cart details
interface CartItem {
  name: string
  price: number
  quantity: number
}

interface CartDetails {
  [key: string]: CartItem
}

export async function POST(request: Request) {
  try {
    // Parse cart details from request body
    const cartDetails: CartDetails = await request.json()

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: Object.values(cartDetails).map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: item.price,
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${request.headers.get('origin')}/success`,
      cancel_url: `${request.headers.get('origin')}/cancel`,
    })

    // Return session ID
    return NextResponse.json({ sessionId: session.id })
  } catch (err) {
    // Handle errors
    console.error(err)
    return NextResponse.json({ error: 'Error creating checkout session' }, { status: 500 })
  }
}
