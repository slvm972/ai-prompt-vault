'use client'

import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Check, Lock, CreditCard, Shield, Loader2 } from 'lucide-react'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function Checkout() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleCheckout = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await response.json()

      if (data.error) {
        setError(data.error)
        setLoading(false)
        return
      }

      const stripe = await stripePromise
      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      })

      if (stripeError) {
        setError(stripeError.message)
      }
    } catch (err) {
      setError('Failed to start checkout. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Complete Your Purchase</h1>
          <p className="text-xl text-gray-600">Get instant access to 1500+ premium AI prompts</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {/* Product Summary */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient p-8 text-white">
            <h2 className="text-2xl font-bold mb-2">AI Prompt Vault - All Access</h2>
            <p className="opacity-90">Lifetime access to all prompts and future updates</p>
          </div>
          
          <div className="p-8">
            <h3 className="text-lg font-semibold mb-4">What&apos;s included:</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>1500+ Premium AI Prompts</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>3 Categories: Marketing, Programming, Writing</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>Regular Updates & New Prompts</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>Lifetime Access</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>Instant Download</span>
              </li>
            </ul>
            
            <div className="border-t pt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Original Price</span>
                <span className="text-gray-400 line-through">$197</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-bold">Today&apos;s Price</span>
                <span className="text-4xl font-bold text-primary-600">$39</span>
              </div>
              <p className="text-green-600 text-sm">80% OFF - Limited Time Offer</p>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-xl font-semibold mb-6">Payment Details</h3>
          
          {/* Stripe Elements Placeholder */}
          <div className="border-2 border-gray-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium">Credit Card</span>
              <div className="flex space-x-2">
                <CreditCard className="w-8 h-5 text-gray-400" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Card number"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <input
                type="text"
                placeholder="MM / YY"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <input
                type="text"
                placeholder="CVC"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <input
                type="text"
                placeholder="ZIP / Postal"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          {/* Security Badges */}
          <div className="flex items-center justify-center space-x-6 text-gray-400 text-sm mb-6">
            <div className="flex items-center">
              <Lock className="w-4 h-4 mr-2" />
              <span>256-bit SSL</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center">
              <CreditCard className="w-4 h-4 mr-2" />
              <span>PCI Compliant</span>
            </div>
          </div>

          {/* Checkout Button */}
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="w-full bg-gradient text-white py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              'Pay $39 - Instant Access'
            )}
          </button>

          {/* Money Back Guarantee */}
          <p className="text-center text-gray-500 text-sm mt-4">
            🔒 30-day money-back guarantee. No questions asked.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 mb-4">Trusted by 10,000+ customers worldwide</p>
          <div className="flex justify-center space-x-8 opacity-50">
            <span className="text-2xl">⭐⭐⭐⭐⭐</span>
            <span className="text-gray-400">4.9/5 rating</span>
          </div>
        </div>
      </div>
    </div>
  )
}