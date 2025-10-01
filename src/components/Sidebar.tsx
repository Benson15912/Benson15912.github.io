import { Link, useRouterState } from "@tanstack/react-router"
import { useState } from "react"
import { ProfileIcon } from "./sidebar/ProfileIcon"

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const routerState = useRouterState()   // ✅ get router state
  const currentPath = routerState.location.pathname

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/work', label: 'Work Experience' }, // ✅ remove trailing slash
    { to: '/projects', label: 'Projects' },
    { to: '/blogs', label: 'Blogs' },
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact' },
  ]

  const closeSidebar = () => setIsOpen(false)

  return (
    <div className="h-full border-r border-gray-200  bg-stone-100">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-1 bg-stone-100 px-4 py-3 flex items-center border-b border-gray-200 ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md hover:bg-gray-200 transition-colors mr-4"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <h1 className="text-xl">Menu</h1>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-opacity-50 z-30"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-64 border-r border-gray-200  bg-stone-100
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo/Brand */}
          <div className="p-4 border-b border-gray-200 ">
            <ProfileIcon />
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const isActive = currentPath === item.to || currentPath.startsWith(item.to + "/")
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={closeSidebar}
                      className={`
                        block px-4 py-3 rounded-lg transition-colors duration-200
                        ${isActive
                          ? 'bg-gray-300  font-medium'
                          : 'text-gray-700  hover:bg-gray-200 :bg-gray-700'
                        }
                      `}
                      activeOptions={{ exact: item.to === '/' }}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 ">
            <div className="text-sm text-gray-500 ">
              {/* Footer text or links here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
