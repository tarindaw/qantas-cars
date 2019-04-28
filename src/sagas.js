import { takeEvery, call, all, put } from 'redux-saga/effects'
import { fetchFAQsDetailsByTitle, fetchFAQsTitles } from './api'
import {
    FETCH_FAQS_DETAILS,
    FETCH_FAQS_DETAILS_SUCCESS,
    FETCH_FAQS_DETAILS_FAIL,
    FETCH_FAQS_TITLES,
    FETCH_FAQS_TITLES_SUCCESS,
    FETCH_FAQS_TITLES_FAIL
} from './constants'

export default function* rootSaga() {
    yield all([
        takeEvery(FETCH_FAQS_TITLES, fetchFAQsTitlesSaga),
        takeEvery(FETCH_FAQS_DETAILS, fetchFAQsDetailsByTitleSaga)
    ])
}

export function* fetchFAQsDetailsByTitleSaga(action) {
    try {
        const title = action ? action.title : ''
        const faq = yield call(fetchFAQsDetailsByTitle, title)

        yield put({
            type: FETCH_FAQS_DETAILS_SUCCESS,
            faq,
        })
    } catch (error) {
        yield put({
            type: FETCH_FAQS_DETAILS_FAIL,
            error
        })
    }
}

export function* fetchFAQsTitlesSaga() {
    try {
        const faqsTitles = yield call(fetchFAQsTitles)

        yield put({
            type: FETCH_FAQS_TITLES_SUCCESS,
            faqsTitles,
        })
    } catch (error) {
        yield put({
            type: FETCH_FAQS_TITLES_FAIL,
            error
        })
    }
}
