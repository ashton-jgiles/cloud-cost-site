import { useState, useEffect } from "react";
import { getUsers } from "../api/CloudCostApi";
import Breakdowns from "../components/Breakdowns"
import Insights from "../components/Insights"
import KeyMetrics from "../components/KeyMetrics"
import type { User } from '../types/User';

const Dashboard: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Dashboard component mounted');
        console.log('API URL:', import.meta.env.VITE_API_URL);
        
        getUsers()
            .then((data) => {
                console.log('Users data received:', data);
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching users:', err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    console.log('Dashboard render - users:', users, 'loading:', loading, 'error:', error);

    if (loading) {
        return <div className="p-6">Loading dashboard...</div>;
    }

    if (error) {
        return <div className="p-6 text-red-600">Error: {error}</div>;
    }

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