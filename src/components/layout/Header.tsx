import { AiOutlineCloudSync, AiOutlineReload } from "react-icons/ai"
import { useState } from 'react'

const Header: React.FC = () => {
    const [lastUpdated, setLastUpdated] = useState<Date>(new Date())

    const handleRefresh = () => {
        // add api call to refresh data
        setLastUpdated(new Date())
    }

    return (
        <div>
            <header className='flex justify-between items-center p-6 bg-white shadow-sm'>
                <span className='text-4xl font-semibold text-gray-800 flex items-center gap-3'>
                    <AiOutlineCloudSync className='text-4xl text-gray-800' />
                    Cloud Cost Dashboard
                </span>
                <div className='flex items-center space-x-4'>
                    <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2' onClick={handleRefresh}>
                        <AiOutlineReload className='text-xl' />
                        Refresh Data
                    </button>
                    <div className='text-sm text-gray-600'>
                        <p>Last Updated: {lastUpdated.toLocaleString()}</p>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header