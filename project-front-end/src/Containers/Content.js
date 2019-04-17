import React, { Component } from 'react'
import { Container, Heading, Tabs, Button } from 'react-bulma-components'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import ContentCard from '../Components/ContentCard'


class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            tiles: []
        }
    }

    componentDidUpdate() {
        if (this.props.activeTile) {
            this.fetchActive()
        }
    }

    fetchActive() {
      console.log(`https://www.reddit.com/r/MakeupAddiction/search.json?q=${this.props.activeTile.name}&restrict_sr=1`)
      fetch(`https://www.reddit.com/r/MakeupAddiction/search.json?q=${this.props.activeTile.name}&restrict_sr=1`)
        .then(response => response.json())
        .then(items => {
            document.getElementById('ConContainer').innerHTML = ""
            for (var i = 0; i < items.data.children.length; i++) {

                var div = document.createElement('div')
                div.className = "tile is-parent is-vertical"
                div.style.backgroundColor = "#CB59FF"
                // div.style.border = 

                var h1Title = document.createElement('h1')
                h1Title.className = "title is-5"
                h1Title.textContent = items.data.children[i].data.title
                
                var h1Creator = document.createElement('h1')
                h1Creator.className = "subtitle is-5"
                h1Creator.textContent = "by " + items.data.children[i].data.author
                
                div.appendChild(h1Title)
                div.appendChild(h1Creator)


                document.getElementById('ConContainer').appendChild(div)
            }
        })
    }

    findThumbnails = (items) => {
      let itemsArray = items.data.children
      console.log(itemsArray)
      let itemThumbnails = itemsArray.filter(item => item.data.thumbnail !== 'self')
      console.log(itemThumbnails)
      this.setState({items: itemThumbnails})
      console.log(this.state)
    }


    render () {
        return (
            <Container fluid style={{background: '#FF9B6D'}}>
                <Heading className={"has-text-centered"} style={{color: '#F2F1DC'}}>Inspiration</Heading>
                <div className="tile is-fluid is-vertical" id="ConContainer" style={{padding: '10px'}} />
            </Container>
        )
    }
}

export default Content;
