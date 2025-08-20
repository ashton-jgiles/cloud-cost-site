import './App.css'
import RefreshData from './components/RefreshData'

const App: React.FC = () => {
  return (
   <div className='h-screen bg-gray-100'>
    <header className='flex justify-between items-center p-6 bg-white shadow-sm'>
      <span className='text-4xl font-semibold text-gray-800'>Cloud Cost</span>
      <RefreshData />
    </header>
    <main className='p-6'>
      {/* Main content will go here */}
    </main>
   </div>
  )
}

export default App
