import React, { Component, Fragment } from 'react'
import { Container, Heading, Panel, Form } from 'react-bulma-components'
import 'react-bulma-components/dist/react-bulma-components.min.css'

import ItemCard from '../Components/ItemCard'
import Accordion from './Accordion'

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
            ],
            query: ""
        }
    }

    loadAllItems = () => {
        return this.state.items.map((item, index) => (
            <ItemCard item={item} key={index} onClick={this.handleActiveTileChange}/>
        ))
    }

    loadItemCategory = (category) => {
        return this.state.items.filter((item) => item.makeup_type === category).map((item, index) => (
            <ItemCard item={item} key={index} onClick={this.handleActiveTileChange} />
        ))
    }

    handleActiveTileChange = (ev) => {

    }

    openTab = (ev) => {
        var tabs = document.getElementsByClassName("content-colTab")
        var tabLinks = document.getElementsByClassName("colTab")
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].style.display = "none"
        }
        for (var i = 0; i < tabs.length; i++ ) {
            tabLinks[i].className = tabLinks[i].className.replace(" is-active", "")
        }
        document.getElementById(`${ev.target.id}-colTab`).style.display = ""
        ev.target.parentNode.className += " is-active"

    }

    handleSearch = (ev) => {
        this.setState({query: ev.target.value})
    }

    render() {
        return (
            <Container fluid className={"has-background-info"}>
                <Heading className={"has-text-centered has-text-white"}>Collection</Heading>
                
                <Panel >
                    <Panel.Block>
                        <Form.Control>
                            <Form.Input onChange={this.handleSearch} size="small" type="text" placeholder="Search" value={this.state.query} />
                        </Form.Control>
                    </Panel.Block>

                    <Panel.Tabs>
                        <Panel.Tabs.Tab active>All</Panel.Tabs.Tab>
                        <Panel.Tabs.Tab>Favorites</Panel.Tabs.Tab>
                    </Panel.Tabs>
                </Panel>
                
                <Accordion>
                    <div label='All'>
                        
                    </div>
                    <div label='BB and CC Cream'>
                        
                    </div>
                    <div label='Blush'>
                        
                    </div>
                    <div label='Bronzer'>
                        
                    </div>
                    <div label='Concealer'>
                        
                    </div>
                    <div label='Contour'>
                        
                    </div>
                    <div label='Eye Primer'>
                        
                    </div>
                    <div label='Eyebrow'>
                        
                    </div>
                    <div label='Eyeliner'>
                        
                    </div>
                    <div label='Eyeshadow'>
                        
                    </div>
                    <div label='Face Primer'>
                        
                    </div>
                    <div label='False Eyelashes'>
                        
                    </div>
                    <div label='Foundation'>
                        
                    </div>
                    <div label='Highlighter'>
                        
                    </div>
                    <div label='Lips'>
                        
                    </div>
                    <div label='Mascara'>
                        
                    </div>
                    <div label='Setting Powder'>
                        
                    </div>
                    <div label='Setting Spray'>
                        
                    </div>
                    <div label='Tined Moisturizer'>
                        
                    </div>
                </Accordion>



            </Container>
        )
    }
}

export default Collection;