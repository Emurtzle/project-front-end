import React, { Component } from 'react'
import { Container, Heading, Tabs, Button } from 'react-bulma-components'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import ContentCard from '../Components/ContentCard'

const ActiveTabContent = (props) => <div>{props.content}</div>

// let activeItem = 'Modern Renaissance'
// this.fetchActive()
//
//   fetchActive() {
//     fetch('https://www.reddit.com/r/MakeupAddiction/.json')
//     .then(response => response.json())
//     .then(items => console.log(items))
//   }

const tabList = [
    {
        name: "Youtube",
        icon: "",
        content: "Stuff 1"
    }, {
        name: "Reddit",
        icon: "",
        content: "Stuff 2"
    }, {
        name: "Pinterest",
        icon: "",
        content: "Stuff 3"
    }
]

class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeTab: "youtube",
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
            pinterest: [
                {
                    title: "Do People Use This Anymore?",
                    creator: "Bob Ross",
                    url: "Go here yo!",
                    thumbnail: null
                },
                {
                    title: "Does The API Even Work?",
                    creator: "Bob Ross",
                    url: "Go here yo!",
                    thumbnail: null
                },
                {
                    title: "Should We Support This?",
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
    // youtube, reddit or pinterest
    loadWebsite = (website) => {
        return this.state[website].map((content, index) => (
            <ContentCard content={content} key={index} />
        ))
    }

    handleTabChange = (ev) => {
        if (!(ev.target.parentNode.className === "is-active")) {
            for (var i = 0; i < ev.target.parentNode.parentNode.childNodes.length; i++ ) {
                ev.target.parentNode.parentNode.childNodes[i].className=""
            }
            ev.target.parentNode.className="is-active"
            this.setState({activeTab: ev.target.name})
        }
    }

    renderActiveTab = () => {
        return this.loadWebsite(this.state.activeTab)
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
        return (
            <Container fluid className={"has-background-info"}>
                <Heading className={"has-text-centered has-text-white"}>Inspiration</Heading>

                <Tabs align="centered" fullwidth={true} size="medium" type="toggle" >
                    <Tabs.Tab className="conTab is-active" id="youtube" onClick={this.openTab} >
                        Youtube
                    </Tabs.Tab>
                    <Tabs.Tab className="conTab" id="reddit" onClick={this.openTab}>
                        Reddit
                    </Tabs.Tab>
                    <Tabs.Tab className="conTab" id="pinterest" onClick={this.openTab}>
                        Pinterest
                    </Tabs.Tab>
                    <Tabs.Tab className="conTab" id="favorites" onClick={this.openTab}>
                        Favorites
                    </Tabs.Tab>
                </Tabs>

                <Container fluid id="youtubeconTab" className="content-conTab" >
                        {this.loadWebsite("youtube")}
                </Container>

                <Container fluid id="redditconTab" className="content-conTab" style={{display: "none"}}>
                        {this.loadWebsite("reddit")}
                </Container>

                <Container fluid id="pinterestconTab" className="content-conTab" style={{display: "none"}}>
                        {this.loadWebsite("pinterest")}
                </Container>

                <Container fluid id="favoritesconTab" className="content-conTab" style={{display: "none"}}>
                        {this.loadWebsite("favorites")}
                </Container>
            </Container>
        )
    }
}

export default Content;
