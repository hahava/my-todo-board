import axios, {AxiosInstance} from 'axios'

export default class AxiosService {
    static readonly instance: AxiosInstance = axios.create({
        baseURL: `http://localhost:8080`,
        timeout: 10000,
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8080'
        }
    })
}
