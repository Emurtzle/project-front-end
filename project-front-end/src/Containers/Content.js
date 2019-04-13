import React, { Component } from 'react'
import { Container, Heading } from 'react-bulma-components'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import ContentCard from '../Components/ContentCard'

const Tab = (props) => {
    const { name } = props.tab;
    const { activeTab, changeActiveTab } = props;

    return (
        <li className={name === activeTab && "is-active"} onClick={null} >
            <a>
                <span>{name}</span>
            </a>
        </li>
    );
};

class Tabs extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="tabs">
                <ul>
                    { this.props.tabList.map(tab => 
                        <Tab    tab={tab}
                                key={tab.name}
                                activeTab={this.props.activeTab}
                                changeActiveTab={this.props.changeActiveTab}
                        />  
                    )}
                </ul>
            </div>
        )
    }

}

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
            activeTab: "Youtube",
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

    changeActiveTab = (tab) => {
        this.setState({activeTab: tab})
    }

    activeTabContent = () => {
        const activeIndex = tabList.findIndex((tab) => {
            return tab.name === this.state.activeTab
        })

        return tabList[activeIndex].content;
    }

    render () {
        return (
            <Container fluid className={"has-background-info"}>
                <Heading className={"has-text-centered has-text-white"}>Inspiration</Heading>
                {/* <Tabs   tabList={tabList}
                        activeTab={this.state.activeTab}
                        changeActiveTab={this.changeActiveTab}
                /> */}
            </Container>
        )
    }
}

export default Content;