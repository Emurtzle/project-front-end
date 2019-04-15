import React, { Component, Fragment } from 'react'
import { Container, Heading, Panel, Form, Tile } from 'react-bulma-components'
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
                </Panel>

                <Accordion>
                    <div label='All'>
                        <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.loadAllItems()}
                            </Tile>
                        </Tile>  
                    </div>
                    <div label='BB and CC Cream'>
                        <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.loadItemCategory("bb_cc_cream")}
                            </Tile>
                        </Tile> 
                    </div>
                    <div label='Blush'>
                        <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.loadItemCategory("blush")}
                            </Tile>
                        </Tile> 
                    </div>
                    <div label='Bronzer'>
                        <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.loadItemCategory("bronzer")}
                            </Tile>
                        </Tile> 
                    </div>
                    <div label='Concealer'>
                        <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.loadItemCategory("concealer")}
                            </Tile>
                        </Tile> 
                    </div>
                    <div label='Contour'>
                        <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                            {this.loadItemCategory("contour")}
                            </Tile>
                        </Tile> 
                    </div>
                    <div label='Eye Primer'>
                        <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.loadItemCategory("eye_primer")}
                            </Tile>
                        </Tile> 
                    </div>
                    <div label='Eyebrow'>
                         <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.loadItemCategory("eyebrow")}
                            </Tile>
                        </Tile> 
                    </div>
                    <div label='Eyeliner'>
                         <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.loadItemCategory("eyeliner")}
                            </Tile>
                        </Tile> 
                    </div>
                    <div label='Eyeshadow'>
                         <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.loadItemCategory("eyeshadow")}
                            </Tile>
                        </Tile> 
                    </div>
                    <div label='Face Primer'>
                         <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.loadItemCategory("face_primer")}
                            </Tile>
                        </Tile> 
                    </div>
                    <div label='False Eyelashes'>
                         <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.loadItemCategory("eye_primer")}
                            </Tile>
                        </Tile> 
                        {this.loadItemCategory("false_eyelashes")}
                    </div>
                    <div label='Foundation'>
                         <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.loadItemCategory("foundation")}
                            </Tile>
                        </Tile> 
                        
                    </div>
                    <div label='Highlighter'>
                         <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                            {this.loadItemCategory("highlighter")}
                            </Tile>
                        </Tile> 
                    </div>
                    <div label='Lips'>
                         <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.loadItemCategory("lips")}
                            </Tile>
                        </Tile> 
                    </div>
                    <div label='Mascara'>
                         <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.loadItemCategory("mascara")}
                            </Tile>
                        </Tile> 
                        
                    </div>
                    <div label='Setting Powder'>
                         <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.loadItemCategory("setting_powder")}
                            </Tile>
                        </Tile> 
                        
                    </div>
                    <div label='Setting Spray'>
                         <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.loadItemCategory("setting_spray")}
                            </Tile>
                        </Tile> 
                        
                    </div>
                    <div label='Tined Moisturizer'>
                         <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.loadItemCategory("tinted_moisturizer")}
                            </Tile>
                        </Tile>    
                    </div>
                </Accordion>



            </Container>
        )
    }
}

export default Collection;