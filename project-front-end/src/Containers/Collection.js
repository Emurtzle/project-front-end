import React, { Component, Fragment } from 'react'
import { Container, Heading, Panel, Form, Tile } from 'react-bulma-components'
import 'react-bulma-components/dist/react-bulma-components.min.css'

import ItemCard from '../Components/ItemCard'
import Accordion from './Accordion'

class Collection extends Component {
    constructor(props) {
        super(props)

        this.state = {
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
            current_user: localStorage.getItem("UserID"),
            token: localStorage.getItem('Token'),
            tiles: [],
            query: ""
        }
        this.fetchCollection()
    }

    componentDidMount() {
        this.loadTiles()
    }

    loadTiles = () => {
        var temp = this.state.items.slice().map((item, index) => {
            return {
                category: item.makeup_type,
                item: item,
                active: false
            }
        })
        this.setState({tiles: temp})
    }

    displayAllTiles = () => {
        var temp = this.state.tiles.map((tile, index) => {
            return (
                <Fragment key={index}>
                    <ItemCard
                        item={tile.item}
                        active={tile.active}
                        selectTile= {this.selectTile} 
                        sendToContent={this.props.sendToContent}
                        key={index}
                    />
                </Fragment>
            )
        })
        return temp
    }

    displayTiles = (category) => {
        var temp = this.state.tiles.filter(tile => tile.category === category).map((tile, index) => {
            return (
                <Fragment key={index}>
                    <ItemCard 
                        item={tile.item}
                        active={tile.active} 
                        selectTile= {this.selectTile} 
                        sendToContent={this.props.sendToContent} 
                        key={index}
                    />
                </Fragment>
            )
        })
        return temp
    }

    selectTile = (item) => {
        var tempTile = this.state.tiles.slice().find(tile => tile.item.name === item.name)
        var tempIndex = this.state.tiles.indexOf(tempTile)
        var tempArr = this.state.tiles.slice()
        for(var i = 0; i < tempArr.length; i++) {
            tempArr[i].active = false
        }
        tempArr[tempIndex].active = true
        this.setState({tiles: tempArr})
    }

    fetchCollection() {
      //gotta send the token over
      fetch((`http://localhost:3000/collections/${this.state.current_user}`), {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.state.token}`
        }
      })
      .then(response => response.json())
      .then(json => console.log(json))
      //pulling from database is working just need to publish to cards
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
                                {this.displayAllTiles()}
                            </Tile>
                        </Tile>  
                    </div>
                    <div label='BB and CC Cream'>
                        <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.displayTiles("bb_cc_cream")}
                            </Tile>
                        </Tile> 
                    </div>
                    <div label='Blush'>
                        <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.displayTiles("blush")}
                            </Tile>
                        </Tile> 
                    </div>
                    <div label='Bronzer'>
                        <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.displayTiles("bronzer")}
                            </Tile>
                        </Tile> 
                    </div>
                    <div label='Concealer'>
                        <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.displayTiles("concealer")}
                            </Tile>
                        </Tile> 
                    </div>
                    <div label='Contour'>
                        <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.displayTiles("contour")}
                            </Tile>
                        </Tile> 
                    </div>
                    <div label='Eye Primer'>
                        <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.displayTiles("eye_primer")}
                            </Tile>
                        </Tile> 
                    </div>
                    <div label='Eyebrow'>
                         <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.displayTiles("eyebrow")}
                            </Tile>
                        </Tile> 
                    </div>
                    <div label='Eyeliner'>
                         <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.displayTiles("eyeliner")}
                            </Tile>
                        </Tile> 
                    </div>
                    <div label='Eyeshadow'>
                         <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.displayTiles("eyeshadow")}
                            </Tile>
                        </Tile> 
                    </div>
                    <div label='Face Primer'>
                         <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.displayTiles("face_primer")}
                            </Tile>
                        </Tile> 
                    </div>
                    <div label='False Eyelashes'>
                         <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.displayTiles("false_eyelashes")}
                            </Tile>
                        </Tile> 
                        
                    </div>
                    <div label='Foundation'>
                         <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.displayTiles("foundation")}
                            </Tile>
                        </Tile> 
                        
                    </div>
                    <div label='Highlighter'>
                         <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.displayTiles("highlighter")}
                            </Tile>
                        </Tile> 
                    </div>
                    <div label='Lips'>
                         <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.displayTiles("lips")}
                            </Tile>
                        </Tile> 
                    </div>
                    <div label='Mascara'>
                         <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.displayTiles("mascara")}
                            </Tile>
                        </Tile> 
                        
                    </div>
                    <div label='Setting Powder'>
                         <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.displayTiles("setting_powder")}
                            </Tile>
                        </Tile> 
                        
                    </div>
                    <div label='Setting Spray'>
                         <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.displayTiles("setting_spray")}
                            </Tile>
                        </Tile> 
                        
                    </div>
                    <div label='Tined Moisturizer'>
                         <Tile kind="ancestor" vertical>
                            <Tile size={12} vertical kind="parent">
                                {this.displayTiles("tinted_moisturizer")}
                            </Tile>
                        </Tile>    
                    </div>
                </Accordion>
            </Container>
        )
    }
}

export default Collection;
