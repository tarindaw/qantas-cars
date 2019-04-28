import { getFAQsDetails, getFAQsTitles, setCurrentPage } from '../actions'
import { FETCH_FAQS_DETAILS, FETCH_FAQS_TITLES, SET_CURRENT_PAGE } from '../constants'

describe('actions', () => {
    test('getFAQsDetails', () => {
        expect(getFAQsDetails('title')).toEqual({
            type: FETCH_FAQS_DETAILS,
            title: 'title'
        })

    })

    test('getFAQsTitles', () => {
        expect(getFAQsTitles('title')).toEqual({
            type: FETCH_FAQS_TITLES
        })

    })

    test('setCurrentPage', () => {
        expect(setCurrentPage('page')).toEqual({
            type: SET_CURRENT_PAGE,
            page: 'page'
        })

    })
})
