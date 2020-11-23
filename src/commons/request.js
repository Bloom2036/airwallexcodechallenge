import axios from 'axios';
import { message } from 'antd';

const service = axios.create({
    baseURL: 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com',
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        if (error.toString().includes('timeout')){
            message.error('Time out error');
        }
        if (error.toString().includes('Network Error')) {
            message.error('Network Error');
        }
        if (error.toString().includes('Request failed with status code')) {
            
        }
        return Promise.reject(error)
    }
)

export default service
