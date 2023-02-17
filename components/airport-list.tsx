import InfiniteScroll from 'react-infinite-scroll-component'
import Airport from '../types/airport'

interface AirportListProps {
  airports: Airport[]
  getNewAirports: () => void
}

const AirportList: React.FC<AirportListProps> = ({
  airports,
  getNewAirports,
}) => {
  return (
    <InfiniteScroll
      dataLength={airports.length}
      next={getNewAirports}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {airports.map(airport => (
          <a
            href={`/airports/${airport.iata.toLowerCase()}`}
            key={airport.iata}
            className='mt-5 flex flex-col items-start justify-between shadow p-5 border gap-2 max-w-md'
          >
            <div>
              {airport.name}, {airport.city}
            </div>
            <div className='text-mono text-gray-400'>{airport.country}</div>
          </a>
        ))}
      </div>
    </InfiniteScroll>
  )
}

export default AirportList
