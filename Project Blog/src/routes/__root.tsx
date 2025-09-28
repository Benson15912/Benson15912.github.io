import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Sidebar } from '../components/Sidebar'

const RootLayout = () => (
  <div className="flex h-screen">
    {/* Sidebar stays fixed */}
    <Sidebar/>

    {/* Main content scrolls independently */}
    <div className="flex-1 overflow-auto p-4 text-center">
      <div className="max-w-4xl mx-auto">
        <Outlet />
      </div>
    </div>

    <TanStackRouterDevtools />
  </div>
)

export const Route = createRootRoute({ component: RootLayout })
