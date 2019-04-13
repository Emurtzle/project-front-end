import React, { Component } from 'react'
import { Card, Container, Heading } from 'react-bulma-components'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import makeupIcon from '../makeupIcon.png'

class Collection extends Component {
    render() {
        return (
            <Container fluid className={"has-background-info"}>
                <Heading className={"has-text-centered has-text-white"}>Collection</Heading>
                <Container fluid className={"has-background-link"}>
                <Card className={"has-background-success"}>
                    <Card.Image size={64} src={makeupIcon} alt="Makeup icon type"/>
                    <Card.Content>
                        <Card.Header.Title>Makeup Name</Card.Header.Title>
                        <Card.Header>Makeup Brand</Card.Header>
                        <Card.Header>Makeup Expiration</Card.Header>
                    </Card.Content>
                    <Card.Footer >
                        <Card.Footer.Item renderAs="a" href="#edit">
                            Edit
                        </Card.Footer.Item>
                        <Card.Footer.Item renderAs="a" href="#edit">
                            Delete
                        </Card.Footer.Item>
                    </Card.Footer>
                </Card>
                </Container>
            </Container>
        )
    }
}

export default Collection;