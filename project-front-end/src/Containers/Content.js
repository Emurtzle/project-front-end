import React, { Component } from 'react'
import { Container, Heading, Tabs, Button } from 'react-bulma-components'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import ContentCard from '../Components/ContentCard'

const ActiveTabContent = (props) => <div>{props.content}</div>


class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            tiles: []
        }
    }

    loadContent = () => {
        console.log("I am here")
        if (this.props.activeTile) {
            console.log("Made it!")
            this.fetchActive()
        } else {
            
        }
    }

    fetchActive() {
      console.log(`https://www.reddit.com/r/MakeupAddiction/search.json?q=${this.props.activeTile.name}&restrict_sr=1`)
      fetch(`https://www.reddit.com/r/MakeupAddiction/search.json?q=${this.props.activeTile.name}&restrict_sr=1`)
        .then(response => response.json())
        .then(items => {
            this.setState({items: items}, () => {
                this.loadTiles()
            })
            this.findThumbnails(items)
        })
    }

    loadTiles = () => {
        var temp = this.state.items.data.children.map((item, index) => {
            return <ContentCard content={item} key={index}/>
        })

        document.getElementById('ConContainer')

        var container = document.getElementById("ConContainer");
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        for (var i = 0; i < temp.length; i++) {
            document.getElementById('ConContainer').append(temp[i])
        }
    }

    findThumbnails = (items) => {
      let itemsArray = items.data.children
      console.log(itemsArray)
      let itemThumbnails = itemsArray.filter(item => item.data.thumbnail !== 'self')
      console.log(itemThumbnails)
    }


    render () {
        return (
            <Container fluid style={{background: '#FF9B6D'}}>
                <Heading className={"has-text-centered"} style={{color: '#F2F1DC'}}>Inspiration</Heading>
                <Heading size={2}>Active Tile: {this.props.activeTile.name}</Heading>

                <Container fluid id={"ConContainer"}>
                    {this.loadContent()}
                </Container>
                

            </Container>
        )
    }
}

export default Content;
