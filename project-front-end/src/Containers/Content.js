import React, { Component } from 'react'
import { Container, Heading, Tabs, Button } from 'react-bulma-components'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import ContentCard from '../Components/ContentCard'

const ActiveTabContent = (props) => <div>{props.content}</div>

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

    render () {
        return (
            <Container fluid className={"has-background-info"}>
            <Button onClick={() => {this.selectTab("redditTab")}}>
                Test
            </Button>
                <Heading className={"has-text-centered has-text-white"}>Inspiration</Heading>
                <Tabs align="centered" fullwidth={true} size="medium" type="toggle" >
                    <Tabs.Tab className={"is-active"} onClick={this.handleTabChange} name="youtube" id="youtube">
                        Youtube
                    </Tabs.Tab>
                    <Tabs.Tab onClick={this.handleTabChange} name="reddit" id="redditTab">
                        Reddit
                    </Tabs.Tab>
                    <Tabs.Tab onClick={this.handleTabChange} name="pinterest" id="pinterestTab">
                        Pinterest
                    </Tabs.Tab>
                </Tabs>

                <Container fluid>
                        {this.renderActiveTab()}
                </Container>
            </Container>
        )
    }
}

export default Content;