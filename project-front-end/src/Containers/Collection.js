import React, { Component } from 'react'
import { Container, Heading, Tile, Image } from 'react-bulma-components'
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
                    makeup_type: "eyeshadow",
                    expiration: "Tuesday",
                    rating: 4
                },
                {
                    name: "Sparkle Planet",
                    brand: "Lust Mechanic",
                    makeup_type: "eyeliner",
                    expiration: "Next Month",
                    rating: 3
                },
                {
                    name: "Butterfly Dust",
                    brand: "Lust Mechanic",
                    makeup_type: "foundation",
                    expiration: "Next Week",
                    rating: 5
                },
                {
                    name: "City Nights",
                    brand: "Sephora",
                    makeup_type: "concealer",
                    expiration: "Tomorrow",
                    rating: 2
                },
                {
                    name: "Spring Days",
                    brand: "Ulta",
                    makeup_type: "lip",
                    expiration: "Thursday",
                    rating: 1
                },
                {
                    name: "Nightclub",
                    brand: "Cover Girl",
                    makeup_type: "mascara",
                    expiration: "now",
                    rating: 5
                }
            ]
        }
    }

    loadItems = () => {
        return this.state.items.map((item, index) => (
            <ItemCard item={item} key={index} />
        ))
    }

    loadItemCategory = () => {
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