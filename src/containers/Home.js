import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { setCurrentPage } from '../actions/index'
import { Loader, Segment } from 'semantic-ui-react'
import '../styles/home.css'

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.imageRef = React.createRef()
        this.state = {imageLoading: false}
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', () => this.setState({imageLoading: true}))
    }

    render() {
        return (
            <Segment placeholder>
                <img
                    className="ui big image centered rounded"
                    ref={this.imageRef}
                    alt="Qantas hero"
                    src='https://drive.google.com/uc?id=1svw9VdyX4fyRHd1kggq0akDSafmdOS7L'
                />

                {!this.state.imageLoading &&
                <Loader active inline='centered'>Loading</Loader>
                }

                <Segment basic textAlign='center'>
                    <Link
                        className="home-links"
                        to={'/faqs'}
                        onClick={() => this.props.actions.setCurrentPage('FAQS')}
                    >
                        <u>Learn more</u>
                    </Link>
                </Segment>
            </Segment>
        )
    }
}

const mapStateToProps = state => ({
    faq: state.faq,
    faqsTitles: state.faqsTitles
})

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                setCurrentPage
            },
            dispatch
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
