// routes/blogs/index.tsx
import { createFileRoute } from '@tanstack/react-router'
import { BlogCard } from '../../components/BlogCard'
import { blogs } from '../../constants/Blogs'

export const Route = createFileRoute('/blogs/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen mt-15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Documenting my tech journey, knowledge sharing, and insights from my experiences in software development
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              link={blog.link}
              date={blog.date}
              description={blog.description}
            />
          ))}
        </div>

        {/* Empty State */}
        {blogs.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white rounded-lg border border-gray-200 p-8 max-w-md mx-auto">
              <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Blog Posts Yet</h3>
              <p className="text-gray-500">Blog posts will be added soon.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}