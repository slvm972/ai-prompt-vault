'use client'

import { Lock, CreditCard, Shield, Check } from 'lucide-react'

export default function Checkout() {
  const lemonSqueezyUrl = 'https://mostovoy-ai.lemonsqueezy.com/checkout/buy/cd5c0d33-6bf5-49f9-a366-1b46f8cf92c7'

  const handleCheckout = () => {
    // Redirect to Lemon Squeezy checkout
    window.location.href = lemonSqueezyUrl
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Complete Your Purchase</h1>
          <p className="text-xl text-gray-600">Get instant access to 1500+ premium AI prompts</p>
        </div>

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

        {/* Payment Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-xl font-semibold mb-6">Secure Checkout</h3>
          
          {/* Payment Info */}
          <div className="border-2 border-gray-200 rounded-lg p-6 mb-6 bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium text-lg">AI Prompt Vault - All Access</span>
              <div className="flex space-x-2">
                <CreditCard className="w-8 h-5 text-gray-400" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">One-time payment</span>
              <span className="text-2xl font-bold text-primary-600">$39</span>
            </div>
          </div>

          {/* Security Badges */}
          <div className="flex items-center justify-center space-x-6 text-gray-400 text-sm mb-6">
            <div className="flex items-center">
              <Lock className="w-4 h-4 mr-2" />
              <span>Secure Checkout</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              <span>Protected Payment</span>
            </div>
            <div className="flex items-center">
              <CreditCard className="w-4 h-4 mr-2" />
              <span>All Major Cards</span>
            </div>
          </div>

          {/* Checkout Button */}
          <button
            onClick={handleCheckout}
            className="w-full bg-gradient text-white py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition flex items-center justify-center"
          >
            <Lock className="w-5 h-5 mr-2" />
            Pay $39 - Instant Access
          </button>

          {/* Money Back Guarantee */}
          <p className="text-center text-gray-500 text-sm mt-4">
            🔒 30-day money-back guarantee. No questions asked.
          </p>
          
          {/* Powered by Lemon Squeezy */}
          <p className="text-center text-gray-400 text-xs mt-4">
            🔐 Secured by Lemon Squeezy
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
