interface LastUpdatedProps {
    lastUpdated: Date;
}

const LastUpdated: React.FC<LastUpdatedProps> = ({ lastUpdated }) => {
    return (
        <div className='text-sm text-gray-600'>
            <p>Last Updated: {lastUpdated.toLocaleString()}</p>
        </div>
    )
}

export default LastUpdated;