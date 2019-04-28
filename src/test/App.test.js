import React from 'react'
import { Provider } from 'react-redux'

import configureMockStore from 'redux-mock-store'
import App from '../components/App'

const mockStore = configureMockStore()
const store = mockStore({})

it('renders without crashing', () => {
    <Provider store={store}>
        const div = document.createElement('div')
        ReactDOM.render(<App/>, div)
        ReactDOM.unmountComponentAtNode(div)
    </Provider>
})
