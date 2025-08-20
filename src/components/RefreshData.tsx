import { useState } from 'react'
import LastUpdated from './LastUpdated'

const RefreshData: React.FC = () => {
    const [lastUpdated, setLastUpdated] = useState<Date>(new Date())

    const handleRefresh = () => {
        console.log('Refreshing data...')
        setLastUpdated(new Date())
    }

    return (
        <div className='flex items-center space-x-4'>
            <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors' onClick={handleRefresh}>
                Refresh Data
            </button>
            <LastUpdated lastUpdated={lastUpdated} />
        </div>
    )
}

export default RefreshData;