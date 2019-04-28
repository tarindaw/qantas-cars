import React from 'react'
import { Header } from 'semantic-ui-react'

import PropTypes from 'prop-types'
import '../styles/faqsDetails.css'

const FaqsDetails = props => {
    return (
        <div>
            {props.title ?
                <div>
                    <Header as='h2'>
                        {props.title}
                    </Header>
                    <div className="details">
                        {props.body}
                    </div>
                </div>
                :
                <div>
                    <Header as='h2'>
                        Please select a frequently asked question
                    </Header>
                </div>
            }
        </div>
    )
}

FaqsDetails.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string
}

export default FaqsDetails
