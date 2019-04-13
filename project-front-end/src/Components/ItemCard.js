import React, { Component } from 'react'
import { Card } from 'react-bulma-components'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import makeupIcon from '../makeupIcon.png'

class ItemCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            active: false
        }
    }
    render() {
        let {name, brand, expiration} = this.props.item

        return(
            <Card size="4by3" className={"has-background-grey-light"}>
                <Card.Image size={64} src={makeupIcon} alt="Makeup icon type"/>
                <Card.Content>
                    <Card.Header.Title>{name}</Card.Header.Title>
                    <Card.Header>By: {brand}</Card.Header>
                    <Card.Header>Expires: {expiration}</Card.Header>
                </Card.Content>
                <Card.Footer >
                    <Card.Footer.Item renderAs="a" href="#edit">
                        Edit
                    </Card.Footer.Item>
                    <Card.Footer.Item renderAs="a" href="#remove">
                        Remove
                    </Card.Footer.Item>
                </Card.Footer>
            </Card>
        )
    }
}

export default ItemCard;