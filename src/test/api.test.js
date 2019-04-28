import axios from 'axios'
import { fetchFAQsDetailsByTitle, fetchFAQsTitles } from '../api/index'

// Mock axios get method
jest.mock('axios', () => ({
    request: jest.fn(async () => await 'test promise function')
}))

describe('apis', () => {
    test('get FAQ by title', () => {
        fetchFAQsDetailsByTitle('title')
        expect(axios.request).toBeCalledWith({"method": "get", "params": {"title": "title"}, "url": "/api/faq"})
    })

    test('get all the FAQs titles', () => {
        fetchFAQsTitles()
        expect(axios.request).toBeCalledWith({"method": "get", "url": "/api/faqs/titles"})
    })
})
