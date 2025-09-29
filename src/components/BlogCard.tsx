// components/BlogCard.tsx
import { Link } from '@tanstack/react-router'

interface BlogCardProps {
  title: string
  link: string
  date: string
  description: string
}

export function BlogCard({ title, link, date, description }: BlogCardProps) {
  return (
    <Link
      to={link}
      className="block bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-6"
    >
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-3">{date}</p>
          <p className="text-gray-700 line-clamp-3">
            {description}
          </p>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-blue-600 hover:text-blue-800 font-medium text-sm">
            Read more →
          </span>
        </div>
      </div>
    </Link>
  )
}