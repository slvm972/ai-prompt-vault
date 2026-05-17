import { marketingPrompts, programmingPrompts, writingPrompts } from '../data/prompts'
import { Check, Copy, Search } from 'lucide-react'
import Link from 'next/link'

export default async function Catalog({ searchParams }) {
  const { category = 'all' } = await searchParams
  
  const categories = [
    { id: 'all', name: 'All Categories', icon: '📚', count: 1500 },
    { id: 'marketing', name: 'Marketing', icon: '📊', count: 500 },
    { id: 'programming', name: 'Programming', icon: '💻', count: 500 },
    { id: 'texts', name: 'Writing', icon: '✍️', count: 500 },
  ]
  
  const prompts = category === 'marketing' ? marketingPrompts :
                 category === 'programming' ? programmingPrompts :
                 category === 'texts' ? writingPrompts :
                 [...marketingPrompts, ...programmingPrompts, ...writingPrompts]
  
  const selectedCategory = categories.find(c => c.id === category) || categories[0]
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            {selectedCategory.icon} {selectedCategory.name} Prompts
          </h1>
          <p className="text-xl text-gray-600">
            {selectedCategory.count}+ professionally crafted prompts
          </p>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/catalog?category=${cat.id}`}
              className={`px-6 py-3 rounded-full font-medium transition ${
                category === cat.id
                  ? 'bg-gradient text-white'
                  : 'bg-white text-gray-600 hover:bg-primary-50'
              }`}
            >
              {cat.icon} {cat.name} ({cat.count})
            </Link>
          ))}
        </div>
        
        {/* Search */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search prompts..."
              className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>
        
        {/* Prompts Grid */}
        <div className="grid gap-6">
          {prompts.map((prompt, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border border-gray-100"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
                      {prompt.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {prompt.difficulty}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{prompt.title}</h3>
                  <p className="text-gray-600 mb-4">{prompt.description}</p>
                  
                  <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm text-gray-700 mb-4">
                    {prompt.prompt}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {prompt.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="ml-4 p-2 rounded-lg border border-gray-200 hover:bg-primary-50 transition">
                  <Copy className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gradient text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition">
            Load More Prompts
          </button>
        </div>
      </div>
    </div>
  )
}