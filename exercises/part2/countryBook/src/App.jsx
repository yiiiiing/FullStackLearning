import { useState, useEffect } from 'react'
import countryService from './services/country'
import CountryForm from './components/CountryForm'
import CountryDisplay from './components/CountryDisplay'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState("")

  const onFilterChange = (event) => {
    setFilter(event.target.value)
  }

  useEffect(() => {
    if (filter) {
      console.log('fetching countries...')
      countryService
      .getAllByFilter(filter)
      .then((data) => {
        setCountries(data)
      })
    }
  }, [filter])

  return (
    <div>
      <CountryForm countryFilter={filter} onFilterChange={onFilterChange}/>
      <CountryDisplay countries={countries}/>
    </div>
  )
}
export default App
