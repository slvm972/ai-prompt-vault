'use client'

import Link from 'next/link'
import { ArrowRight, Check, Sparkles, Zap, Shield, Globe } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>1500+ Premium AI Prompts</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Supercharge Your
              <br />
              <span className="text-gradient">AI Productivity</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Access 1500+ professionally crafted prompts for ChatGPT, Claude & AI tools. 
              Save hours of work with ready-to-use prompts for marketing, programming & content.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/catalog"
                className="group bg-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition flex items-center"
              >
                Browse Catalog
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>
              <Link 
                href="#pricing"
                className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-primary-500 transition"
              >
                Get All Access - $39
              </Link>
            </div>
            
            <div className="mt-12 flex items-center justify-center space-x-8 text-gray-500">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>Instant Download</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>One-time Payment</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>Lifetime Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose AI Prompt Vault?</h2>
            <p className="text-xl text-gray-600">Everything you need to maximize AI productivity</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-gradient rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1500+ Premium Prompts</h3>
              <p className="text-gray-600">
                Hand-crafted prompts tested for maximum effectiveness across all major AI models.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-gradient rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Productivity</h3>
              <p className="text-gray-600">
                Copy, paste, and get results in seconds. No learning curve required.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-gradient rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">One-time Payment</h3>
              <p className="text-gray-600">
                Pay $39 once, access forever. No subscriptions, no hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Three Powerful Categories</h2>
            <p className="text-xl text-gray-600">Prompts organized by your needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Marketing */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
                <span className="text-6xl">📊</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">💼 Marketing</h3>
                <p className="text-gray-600 mb-4">500+ prompts for:</p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• Social Media Content</li>
                  <li>• Email Campaigns</li>
                  <li>• Ad Copywriting</li>
                  <li>• SEO Optimization</li>
                  <li>• Brand Voice</li>
                </ul>
                <Link 
                  href="/catalog?category=marketing"
                  className="mt-4 block text-center text-orange-600 font-medium hover:text-orange-700"
                >
                  View Marketing Prompts →
                </Link>
              </div>
            </div>
            
            {/* Programming */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                <span className="text-6xl">💻</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">💻 Programming</h3>
                <p className="text-gray-600 mb-4">500+ prompts for:</p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• Code Generation</li>
                  <li>• Debug & Refactor</li>
                  <li>• Documentation</li>
                  <li>• API Integration</li>
                  <li>• Code Review</li>
                </ul>
                <Link 
                  href="/catalog?category=programming"
                  className="mt-4 block text-center text-blue-600 font-medium hover:text-blue-700"
                >
                  View Programming Prompts →
                </Link>
              </div>
            </div>
            
            {/* Writing */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <span className="text-6xl">✍️</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">✍️ Writing</h3>
                <p className="text-gray-600 mb-4">500+ prompts for:</p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• Blog Posts</li>
                  <li>• Articles & Essays</li>
                  <li>• Creative Writing</li>
                  <li>• Product Descriptions</li>
                  <li>• Translation</li>
                </ul>
                <Link 
                  href="/catalog?category=texts"
                  className="mt-4 block text-center text-purple-600 font-medium hover:text-purple-700"
                >
                  View Writing Prompts →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/catalog"
              className="inline-flex items-center bg-gradient text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              Explore Full Catalog
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">One payment, lifetime access</p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-primary-500">
              <div className="bg-gradient p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">All Access Pass</h3>
                <p className="opacity-90">Complete AI Prompt Vault</p>
              </div>
              <div className="p-8">
                <div className="text-center mb-8">
                  <span className="text-5xl font-bold">$39</span>
                  <span className="text-gray-500 ml-2">one-time</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>1500+ Premium Prompts</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>3 Categories (Marketing, Programming, Writing)</span>
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
                
                <Link 
                  href="/checkout"
                  className="block w-full bg-gradient text-white text-center py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition"
                >
                  Get Access Now
                </Link>
                
                <p className="text-center text-gray-500 text-sm mt-4">
                  🔐 Secured by Lemon Squeezy • 30-day money back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Supercharge Your AI?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of marketers, developers & writers using AI Prompt Vault
          </p>
          <Link 
            href="/checkout"
            className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}