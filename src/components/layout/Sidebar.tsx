import { Link, useLocation } from 'react-router-dom'
import { AiOutlineDashboard, AiOutlineExperiment, AiOutlineInfoCircle, AiOutlineFileText } from 'react-icons/ai'

const Sidebar: React.FC = () => {
  const location = useLocation()

  const navigationItems = [
    { name: 'Dashboard', path: '/', icon: AiOutlineDashboard },
    { name: 'Test Dashboard', path: '/test', icon: AiOutlineExperiment },
    { name: 'About', path: '/about', icon: AiOutlineInfoCircle },
    { name: 'EULA', path: '/eula', icon: AiOutlineFileText },
  ]

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <div className="w-64 bg-white shadow-sm h-full">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">Navigation</h2>
        <nav className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 text-sm rounded-md transition-colors ${
                  isActive(item.path)
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="text-lg" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

export default Sidebar