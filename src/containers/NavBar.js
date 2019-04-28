import React from 'react'
import history from '../history'

import { Menu, Segment } from 'semantic-ui-react'
import { setCurrentPage } from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'

class NavBar extends React.Component {
    state = {activeItem: this.props.currentPage}

    render() {
        return (
            <Segment inverted>
                <Menu inverted secondary widths={2}>
                    {this.props.tabs.map(navTab => {
                        let tabName = navTab.tabName
                        return (
                            <Menu.Item
                                key={tabName}
                                name={tabName}
                                active={this.props.currentPage === tabName}
                                onClick={() => {
                                    this.setState({activeItem: tabName})
                                    history.push(navTab.linkTo)
                                    this.props.actions.setCurrentPage(tabName)
                                }}
                            >
                                {tabName}
                            </Menu.Item>
                        )
                    })}
                </Menu>
            </Segment>
        )
    }
}

NavBar.propTypes = {
    currentPage: PropTypes.string.isRequired,
    tabs: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    currentPage: state.currentPage
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
)(NavBar)



