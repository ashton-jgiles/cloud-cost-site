const KeyMetrics: React.FC = () => {
    return (
        <div>
            <header className='flex justify-between items-center p-6 bg-white shadow-sm'>
                <span className="text-lg font-semibold text-gray-800">Key Metrics</span>
            </header>
            <main className='p-6 -my-10 bg-white shadow-sm'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
                    {/* Total Spend (MTD) */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between mb-1">
                                <p className="text-sm font-medium text-blue-600">Total Spend (MTD)</p>
                                <div className="text-blue-500">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-2xl font-bold text-blue-900">$12,430</p>
                        </div>
                    </div>

                    {/* Budget Usage */}
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between mb-1">
                                <p className="text-sm font-medium text-green-600">Budget Usage</p>
                                <div className="text-green-500">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-2xl font-bold text-green-900">83%</p>
                            <p className="text-sm text-green-700">of $15,000</p>
                        </div>
                    </div>

                    {/* Forecasted Spend (EOM) */}
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between mb-1">
                                <p className="text-sm font-medium text-purple-600">Forecasted Spend (EOM)</p>
                                <div className="text-purple-500">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-2xl font-bold text-purple-900">$14,800</p>
                        </div>
                    </div>

                    {/* Month-over-Month Change */}
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between mb-1">
                                <p className="text-sm font-medium text-orange-600">Month-over-Month Change</p>
                                <div className="text-orange-500">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-2xl font-bold text-orange-900">+12%</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default KeyMetrics;