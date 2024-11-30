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
        const showedCountries = data.map((country) => {return {...country, show:false}})
        setCountries(showedCountries)
      })
    }
  }, [filter])

  const onClickCountryShow = (item) => {
    console.log(`Toggle show button for country: ${item.name.common}`)
    const showedCountries = countries.map((country) =>{
      return country.name.common === item.name.common? {...country, show:!country.show} : country
    })
    setCountries(showedCountries)
  }

  return (
    <div>
      <CountryForm countryFilter={filter} onFilterChange={onFilterChange}/>
      <CountryDisplay countries={countries} onClickCountryShow={onClickCountryShow}/>
    </div>
  )
}
export default App
