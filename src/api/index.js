import axios from 'axios'

export const fetchFAQsDetailsByTitle = title => {
    return axios.request({
        method: 'get',
        url: '/api/faq',
        params: {
            title: title
        }
    })
}

export const fetchFAQsTitles = () => {
    return axios.request({
        method: 'get',
        url: '/api/faqs/titles'
    })
}
