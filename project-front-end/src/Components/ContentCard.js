import React, { Component } from 'react'
import { Card } from 'react-bulma-components'
import 'react-bulma-components/dist/react-bulma-components.min.css'

class ContentCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            active: false
        }
    }
    
    render() {
        let {title, creator, thumbnail, url} = this.props.content
        return (
            <Card size="4by3" className={"has-background-grey-light"}>
                <Card.Image size={64} src={thumbnail} alt="Makeup icon type"/>
                <Card.Content>
                    <Card.Header.Title>{title}</Card.Header.Title>
                    <Card.Header>By: {creator}</Card.Header>
                </Card.Content>
                <Card.Footer >
                    <Card.Footer.Item renderAs="a" href={url}>
                        Visit
                    </Card.Footer.Item>
                </Card.Footer>
            </Card>
        )
    }
}

export default ContentCard;