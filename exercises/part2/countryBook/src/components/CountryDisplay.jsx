import { nanoid } from 'nanoid'


const Country = ({country}) => {

    const lanComp = Object.values(country.languages).map((lan) => {return <li key={nanoid()}>{lan}</li>})
    
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital[0]}</p>
            <p>area {country.area}</p>
            <h2>languages:</h2>
            {lanComp}
            <img className='flag' src={country.flags.png} alt='Image of flag' />
        </div>
    )
}


const CountryDisplay = ({countries}) => {
    if (countries.length > 10){
        return <p>Too many matches, specify another filter</p>
    }

    if (countries.length == 1){
        return <Country country={countries[0]}/>
    }

    const countryComp = countries.map((item) => {
        return <p key={nanoid()}>{item.name.common}</p>
    })

    return (
        <div>
            {countryComp}
        </div>
    )
}


export default CountryDisplay