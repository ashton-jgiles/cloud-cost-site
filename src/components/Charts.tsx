import { GetProviders } from "../api/providers";
import { GetServices } from "../api/services";

const providers = await GetProviders();
const services = await GetServices();

const Charts: React.FC = () => {
    return (
        <div>
            <header className='flex justify-between items-center p-6 bg-white shadow-sm'>
                <span className="text-lg font-semibold text-gray-800">Charts</span>
            </header>
        </div>
    )
}

export default Charts;