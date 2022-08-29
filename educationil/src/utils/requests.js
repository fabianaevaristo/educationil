import axios from 'axios'
export const get = (url) => {
    return axios.get(`https://mockend.com/agathasilva28/mock-educational-site/${url}`)
}