import axios from "axios"
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'
const appId = import.meta.env.VITE_SOME_KEY

const getByCity = (city) => {
    const request = axios.get(`${baseUrl}q=${city}&units=metric&appid=${appId}`)
    return request.then(response => response.data)
}
  

export default {getByCity}