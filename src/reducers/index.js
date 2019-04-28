import {
    FETCH_FAQS_DETAILS_SUCCESS,
    FETCH_FAQS_DETAILS_FAIL,
    FETCH_FAQS_TITLES_SUCCESS,
    FETCH_FAQS_TITLES_FAIL,
    SET_CURRENT_PAGE
} from '../constants'

export default (initialState = {}, action) => {
    switch (action.type) {
        case FETCH_FAQS_DETAILS_SUCCESS:
            return {...initialState, faq: action.faq.data}
        case FETCH_FAQS_DETAILS_FAIL:
            return {...initialState, error: action.error}
        case FETCH_FAQS_TITLES_SUCCESS:
            return {...initialState, faqsTitles: action.faqsTitles.data}
        case FETCH_FAQS_TITLES_FAIL:
            return {...initialState, error: action.error}
        case SET_CURRENT_PAGE:
            return {...initialState, currentPage: action.page}
        default:
            return initialState
    }
}
