import PropTypes from 'prop-types'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getFAQsTitles, getFAQsDetails } from '../actions'
import FaqsTitles from '../components/FaqsTitles'
import FaqsDetails from '../components/FaqsDetails'

import {Grid, Segment} from 'semantic-ui-react'

class Faqs extends React.Component {

    componentDidMount = () => {
        this.props.actions.getFAQsTitles()
    }

    render() {
        return (
            <Segment placeholder>
                <Grid columns={2} stackable textAlign='left'>
                    <Grid.Row>
                        <Grid.Column>
                            <Segment placeholder>
                                <FaqsDetails
                                    title={this.props.faq.title}
                                    body={this.props.faq.body}
                                />
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment placeholder>
                                <FaqsTitles
                                    onClick={this.props.actions.getFAQsDetails}
                                    titles={this.props.faqsTitles}
                                />
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}

Faqs.defaultProps = {
    faq: {
        title: '',
        body: ''
    },
    faqsTitles: []
}

Faqs.propTypes = {
    faq: PropTypes.shape({
        title: PropTypes.string,
        body: PropTypes.string,
    }).isRequired,
    faqsTitles: PropTypes.arrayOf(PropTypes.string).isRequired
}

const mapStateToProps = state => ({
    faq: state.faq,
    faqsTitles: state.faqsTitles
})

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                getFAQsTitles,
                getFAQsDetails
            },
            dispatch
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Faqs)

