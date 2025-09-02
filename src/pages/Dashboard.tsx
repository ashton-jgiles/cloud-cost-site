import Breakdowns from "../components/Breakdowns"
import Insights from "../components/Insights"
import KeyMetrics from "../components/KeyMetrics"

const Dashboard: React.FC = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 mb-16'>
                <KeyMetrics />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6'>
                <div className='bg-white p-6 rounded-lg shadow-sm'>
                    <span>Charts</span>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6'>
                <Breakdowns />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <Insights />
            </div>
        </div>
    )
}

export default Dashboard