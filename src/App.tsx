import Header from './components/Header'
import KeyMetrics from './components/KeyMetrics'
import Insights from './components/Insights'
import Breakdowns from './components/Breakdowns'
import { AiOutlineCloudSync } from 'react-icons/ai'

const App: React.FC = () => {
  return (
   <div className='h-screen bg-gray-100'>
    <Header />
    <main className='p-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <KeyMetrics />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <Breakdowns />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <Insights />
      </div>
    </main>
   </div>
  )
}

export default App
