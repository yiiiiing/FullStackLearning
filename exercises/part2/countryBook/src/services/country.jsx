import axios from "axios"
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'


const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const getAllByFilter = (filter) => {
    const request = axios.get(baseUrl)
    return request.then(response => {
        const items = response.data.filter((item) => {
            return item.name.common.toLowerCase().includes(filter.toLowerCase())
        })
        return items
    })
}
  


export default {getAll, getAllByFilter}