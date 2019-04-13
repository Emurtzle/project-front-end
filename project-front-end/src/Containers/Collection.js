import React, { Component } from 'react'
import { Container, Heading } from 'react-bulma-components'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import ItemCard from '../Components/ItemCard'

class Collection extends Component {
    constructor(props) {
        super(props)

        this.state ={
            items: [
                {
                    name: "Blue Eagle",
                    brand: "Aspire",
                    expiration: "tuesday"
                },
                {
                    name: "Sparkle Planet",
                    brand: "Lust Mechanic",
                    expiration: "Next Month"
                },
                {
                    name: "Butterfly Dust",
                    brand: "Lust Mechanic",
                    expiration: "Next Week"
                },
                {
                    name: "City Nights",
                    brand: "Sephora",
                    expiration: "Tomorrow"
                },
                {
                    name: "Spring Days",
                    brand: "Ulta",
                    expiration: "Thursday"
                },
                {
                    name: "Nightclub",
                    brand: "Cover Girl",
                    expiration: "now"
                }
            ]
        }
    }

    loadItems = () => {
        return this.state.items.map((item, index) => (
            <ItemCard item={item} key={index} />
        ))
    }

    render() {
        return (
            <Container fluid className={"has-background-info"}>
                <Heading className={"has-text-centered has-text-white"}>Collection</Heading>
                <Container fluid className={"has-background-link"}>
                    {this.loadItems()}
                </Container>
            </Container>
        )
    }
}

export default Collection;