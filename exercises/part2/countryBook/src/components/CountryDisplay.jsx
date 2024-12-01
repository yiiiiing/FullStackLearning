import { nanoid } from 'nanoid'
import Weather from './Weather'


const Country = ({country, showWeather}) => {

    const lanComp = Object.values(country.languages).map((lan) => {return <li key={nanoid()}>{lan}</li>})
    const capital = country.capital[0]
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {capital}</p>
            <p>area {country.area}</p>
            <h3>languages:</h3>
            {lanComp}
            <img className='flag' src={country.flags.png} alt='Image of flag' />
            <Weather city={capital} show={showWeather}/>
        </div>
    )
}

const CountryDisplay = ({countries, onClickCountryShow}) => {
    if (countries.length > 10){
        return <p>Too many matches, specify another filter</p>
    }

    if (countries.length === 1){
        return <Country country={countries[0]} showWeather={true}/>
    }

    const countryComp = countries.map((item) => {
        return (
            <div key={nanoid()}>
                <p>{item.name.common}
                    <button onClick={() => onClickCountryShow(item)}>show</button>
                </p>
                {item.show? <Country country={item} showWeather={true}/> : null}
            </div>
        )
    })

    return (
        <div>
            {countryComp}
        </div>
    )
}


export default CountryDisplay