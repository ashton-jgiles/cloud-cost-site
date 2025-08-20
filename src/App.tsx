import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from "./pages/Dashboard"
import TestDashboard from "./pages/TestDashboard"
import About from "./pages/About"
import EULA from "./pages/EULA"
import Sidebar from "./components/layout/Sidebar"
import Header from "./components/layout/Header"

const App: React.FC = () => {
  return (
    <Router>
      <div className='h-screen bg-gray-100 flex flex-col'>
        <Header />
        <div className='flex flex-1 overflow-hidden'>
          <Sidebar />
          <main className='flex-1 p-6 overflow-auto'>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/tests" element={<TestDashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/eula" element={<EULA />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
