import React, { Component } from 'react'
import { Tile, Image, Heading, Button, Section } from 'react-bulma-components'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import temp from '../icons/star.png'

class ContentCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            active: false
        }
    }
    
    render() {
        let {title, creator, thumbnail, url} = this.props.content
        return (
            // <Card size="4by3" className={"has-background-grey-light"}>
            //     <Card.Image size={64} src={thumbnail} alt="Thumbnail"/>
            //     <Card.Content>
            //         <Card.Header.Title>{title}</Card.Header.Title>
            //         <Card.Header>By: {creator}</Card.Header>
            //     </Card.Content>
            //     <Card.Footer >
            //         <Card.Footer.Item renderAs="a" href={url}>
            //             Visit
            //         </Card.Footer.Item>
            //     </Card.Footer>
            // </Card>

            <Tile kind="ancestor" className="has-background-primary">
                <Tile size={1}>
                    <Image size={72} src={temp} alt="Thumbnail" />
                </Tile>

                <Tile kind="parent" size={9} vertical>
                    <Heading>{title}</Heading>
                    <Heading size={4}subtitle>{creator}</Heading>
                </Tile>

                <Tile kind="parent" size={2} vertical>
                        <Button fullwidth color="info">Favorite</Button>
                        <Button fullwidth color="info">Visit</Button>
                </Tile>
            </Tile>
        )
    }
}

export default ContentCard;