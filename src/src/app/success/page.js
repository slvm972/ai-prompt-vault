import { CheckCircle, Download, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Success({ searchParams }) {
  const sessionId = searchParams.session_id

  return (
    <div className="min-h-screen bg-gradient flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. You now have lifetime access to AI Prompt Vault!
          </p>
          
          <div className="bg-primary-50 rounded-xl p-6 mb-8">
            <h2 className="font-semibold mb-4">What's Next?</h2>
            <ul className="text-left space-y-3">
              <li className="flex items-center">
                <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm mr-3">1</span>
                <span>Check your email for login details</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm mr-3">2</span>
                <span>Download all 1500+ prompts</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm mr-3">3</span>
                <span>Start using prompts immediately</span>
              </li>
            </ul>
          </div>
          
          <Link 
            href="/catalog"
            className="inline-flex items-center bg-gradient text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            <Download className="w-5 h-5 mr-2" />
            Access Your Prompts
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
        
        <p className="text-white/80 mt-6">
          Need help? Contact us at support@aipromptvault.com
        </p>
      </div>
    </div>
  )
}