import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import history from '../history'

import Faqs from '../containers/Faqs'
import Home from '../containers/Home'
import NavBar from '../containers/NavBar'
import { HOME, FAQS } from '../constants'

import { Header } from 'semantic-ui-react'

class App extends Component {
    render() {
        const heading = 'Qantas cars'
        const subHeading = 'Powered by the sun with the best safety record on the planet'

        const navTabs = [
            {
                tabName: 'HOME',
                linkTo: HOME
            },
            {
                tabName: 'FAQS',
                linkTo: FAQS
            },

        ]

        return (
            <div className="ui container">
                <Header as='h1' textAlign='center'>{heading}</Header>
                <Header as='h3' textAlign='center'>{subHeading}</Header>
                <Router history={history}>
                    <NavBar
                        tabs={navTabs}
                    />
                    <Route path='/' exact component={Home}/>

                    <Route path='/faqs' component={Faqs}/>
                </Router>
            </div>
        )
    }
}

export default App
