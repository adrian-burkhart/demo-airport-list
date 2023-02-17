import { NextPage } from 'next'
import React from 'react'
import AirportList from '../components/airport-list'

import Layout from '../components/layout'
import ListCounter from '../components/list-counter'
import SearchInput from '../components/search-input'
import useApiData from '../hooks/use-api-data'
import Airport from '../types/airport'

const Page: NextPage = () => {
  const airports = useApiData<Airport[]>('/api/airports', [])
  const [filter, setFilter] = React.useState<string>('')
  const [currentAirports, setCurrentAirports] = React.useState<Airport[]>([])

  const filteredAirports = React.useMemo(() => {
    return airports.filter(
      airport =>
        airport.name.toLowerCase().includes(filter.toLowerCase()) ||
        airport.city.toLowerCase().includes(filter.toLowerCase()) ||
        airport.country.toLowerCase().includes(filter.toLowerCase()) ||
        airport.iata.toLowerCase().includes(filter.toLowerCase())
    )
  }, [airports, filter])

  React.useEffect(() => {
    setCurrentAirports(filteredAirports)
  }, [filter])

  React.useEffect(() => {
    getNewAirports()
  }, [airports])

  const getNewAirports = () => {
    setCurrentAirports(current =>
      current.concat(
        filteredAirports.slice(current.length, current.length + 20)
      )
    )
  }

  return (
    <Layout>
      <h1 className='text-2xl'>DBL Code Challenge: Airports</h1>

      <SearchInput setFilter={setFilter} />

      <div className='flex items-baseline gap-2'>
        <h2 className='mt-10 text-xl'>All Airports</h2>
        <ListCounter count={filteredAirports.length} />
      </div>

      <AirportList airports={currentAirports} getNewAirports={getNewAirports} />
    </Layout>
  )
}

export default Page
