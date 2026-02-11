import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI Prompt Vault - Premium Prompts for Marketing, Programming & Texts',
  description: 'Access 1500+ high-quality AI prompts for ChatGPT, Claude & AI tools. Boost productivity with professionally crafted prompts.',
  keywords: 'AI prompts, ChatGPT prompts, Claude prompts, marketing prompts, programming prompts, content writing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RFC17LPYEK"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RFC17LPYEK');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl">🧠</span>
                <span className="text-xl font-bold text-gradient">AI Prompt Vault</span>
              </Link>
              
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/#features" className="text-gray-600 hover:text-primary-600 transition">
                  Features
                </Link>
                <Link href="/#pricing" className="text-gray-600 hover:text-primary-600 transition">
                  Pricing
                </Link>
                <Link href="/catalog" className="text-gray-600 hover:text-primary-600 transition">
                  Catalog
                </Link>
                <Link 
                  href="/#pricing"
                  className="bg-gradient text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition"
                >
                  Get Access - $39
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-16">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl">🧠</span>
                  <span className="text-xl font-bold">AI Prompt Vault</span>
                </div>
                <p className="text-gray-400">
                  Premium AI prompts for marketing, programming & content creation.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Categories</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>📊 Marketing Prompts</li>
                  <li>💻 Programming Prompts</li>
                  <li>✍️ Writing Prompts</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>About Us</li>
                  <li>Contact</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Payment</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">💳</span>
                  <span className="text-gray-400">Secure via Stripe</span>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>© 2024 AI Prompt Vault. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}