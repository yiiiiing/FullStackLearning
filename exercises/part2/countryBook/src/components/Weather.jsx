import { useState, useEffect} from 'react'
import weatherService from '../services/weather'


const Weather = ({city, show}) => {
    const [info, setInfo] = useState(null)

    useEffect(() => {
        console.log('fetching weather...')
        weatherService.
        getByCity(city).
        then((weather) =>{
            setInfo({temperature: weather.main.temp, wind: weather.wind.speed, icon: weather.weather[0].icon})
        })}, [])

    if (!show || !info) return null
    
    return (
        <div>
            <h2>Weather in {city}</h2>
            <p>temperature {info.temperature} Celcius</p>
            <img className='Icon' src={`https://openweathermap.org/img/wn/${info.icon}@2x.png`} alt='weather icon'></img>
            <p>wind {info.wind} m/s</p>
        </div>
    )
}

export default Weather