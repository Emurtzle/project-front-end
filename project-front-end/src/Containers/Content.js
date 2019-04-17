import React, { Component } from 'react'
import { Container, Heading, Tabs, Button } from 'react-bulma-components'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import ContentCard from '../Components/ContentCard'

const ActiveTabContent = (props) => <div>{props.content}</div>


class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeTile: this.props.activeTile.name,
            activeTab: null,
            youtube: [
                {
                    title: "Pop your eyes with the City Light Pallete!",
                    creator: "Bob Ross",
                    url: "Go here yo!",
                    thumbnail: null
                },
                {
                    title: "Gloss be Gone",
                    creator: "Bob Ross",
                    url: "Go here yo!",
                    thumbnail: null
                },
                {
                    title: "Smokey Eye Tutorial",
                    creator: "Bob Ross",
                    url: "Go here yo!",
                    thumbnail: null
                }
            ],
            reddit: [
                {
                    title: "Top Ten Vintage Palletes",
                    creator: "Bob Ross",
                    url: "Go here yo!",
                    thumbnail: null
                },
                {
                    title: "How To Start A Makeup Channel",
                    creator: "Bob Ross",
                    url: "Go here yo!",
                    thumbnail: null
                },
                {
                    title: "Yet Another Smokey Eye Tutorial",
                    creator: "Bob Ross",
                    url: "Go here yo!",
                    thumbnail: null
                }
            ],

            favorites: [
                {
                    title: "Man Bob Ross Sure is Active",
                    creator: "Bob Ross",
                    url: "Go here yo!",
                    thumbnail: null
                },
                {
                    title: "Is he on every platform?",
                    creator: "Bob Ross",
                    url: "Go here yo!",
                    thumbnail: null
                },
                {
                    title: "Well, he is fabulous",
                    creator: "Bob Ross",
                    url: "Go here yo!",
                    thumbnail: null
                }
            ]
        }
    }



    fetchActive() {
      console.log(`https://www.reddit.com/r/MakeupAddiction/search.json?q=${this.props.activeTile.name}&restrict_sr=1`)
      fetch(`https://www.reddit.com/r/MakeupAddiction/search.json?q=${this.props.activeTile.name}&restrict_sr=1`)
        .then(response => response.json())
        .then(items => {
          this.findThumbnails(items)
        })
    }

    findThumbnails = (items) => {
      let itemsArray = items.data.children
      console.log(itemsArray)
      let itemThumbnails = itemsArray.filter(item => item.data.thumbnail !== 'self')
      console.log(itemThumbnails)
    }

    // youtube, reddit or pinterest
    displayWebsite = (website) => {
        return this.state[website].map((content, index) => (
            <ContentCard content={content} key={index} />
            
        ))
    }

    loadYoutube = () => {

    }

    loadReddit = () => {

    }

    loadFavorites = () => {

    }

    openTab = (ev) => {
        var tabs = document.getElementsByClassName("content-conTab")
        var tabLinks = document.getElementsByClassName("conTab")
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].style.display = "none"
        }
        for (var i = 0; i < tabs.length; i++ ) {
            tabLinks[i].className = tabLinks[i].className.replace(" is-active", "")
        }
        document.getElementById(`${ev.target.id}conTab`).style.display = ""
        ev.target.parentNode.className += " is-active"

    }

    render () {
      this.fetchActive()
        return (
            <Container fluid className={"has-background-info"}>
                <Heading className={"has-text-centered has-text-white"}>Inspiration</Heading>
                <Heading size={2}>Active Tile: {this.props.activeTile.name}</Heading>

                <Tabs align="centered" fullwidth={true} size="medium" type="toggle" >
                    <Tabs.Tab className="conTab is-active" id="youtube" onClick={this.openTab} >
                        Youtube
                    </Tabs.Tab>
                    <Tabs.Tab className="conTab" id="reddit" onClick={this.openTab}>
                        Reddit
                    </Tabs.Tab>
                    <Tabs.Tab className="conTab" id="favorites" onClick={this.openTab}>
                        Favorites
                    </Tabs.Tab>
                </Tabs>

                <Container fluid id="youtubeconTab" className="content-conTab" >
                        {this.displayWebsite("youtube")}
                </Container>

                <Container fluid id="redditconTab" className="content-conTab" style={{display: "none"}}>
                        {this.displayWebsite("reddit")}
                </Container>

                <Container fluid id="favoritesconTab" className="content-conTab" style={{display: "none"}}>
                        {this.displayWebsite("favorites")}
                </Container>

            </Container>
        )
    }
}

export default Content;
