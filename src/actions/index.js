import { FETCH_FAQS_DETAILS, FETCH_FAQS_TITLES, SET_CURRENT_PAGE } from '../constants'

export const getFAQsDetails = (title) => ({
    type: FETCH_FAQS_DETAILS,
    title
})

export const getFAQsTitles = () => ({
    type: FETCH_FAQS_TITLES
})

export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    page
})
