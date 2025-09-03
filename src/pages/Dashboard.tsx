import Breakdowns from "../components/Breakdowns"
import Insights from "../components/Insights"
import KeyMetrics from "../components/KeyMetrics"
import Charts from "../components/Charts"

const Dashboard: React.FC = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 mb-16'>
                <KeyMetrics />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 mb-16'>
                <Charts />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16'>
                <Breakdowns />
                <Insights />
            </div>

        </div>
    )
}

export default Dashboard