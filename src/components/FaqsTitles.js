import React from 'react'

import PropTypes from 'prop-types'
import { Grid, Icon, List } from 'semantic-ui-react'
import '../styles/faqsTitles.css'

const FaqsTitles = props => {
    const titlesList = props.titles.map((title, index) =>
        // Using an array index as the key is not the best practise.
        // Assuming the records are not deleted from the Titles list  && when adding records it will be only added to the end of the list.
        <List.Item
            as='a'
            key={index}>
            <Icon className="icon" name='right triangle'/>
            <List.Content>
                <List.Header
                    className="list"
                    onClick={() => {
                        props.onClick(title)
                    }}
                >
                    {title}
                </List.Header>
            </List.Content>
        </List.Item>
    )

    return (
        <Grid>
            <div>
                <List divided relaxed>
                    {titlesList}
                </List>
            </div>
        </Grid>
    )
}

FaqsTitles.defaultProps = {
    titles: []
}

FaqsTitles.propTypes = {
    titles: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
}

export default FaqsTitles
