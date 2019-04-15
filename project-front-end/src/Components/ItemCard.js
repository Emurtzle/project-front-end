import React, { Component } from 'react'
import { Tile, Image, Heading, Button } from 'react-bulma-components'
import 'react-bulma-components/dist/react-bulma-components.min.css'

import star from '../icons/star.png'
import bb_cc_creamImg from '../icons/bb_cc_cream.png'
import blushImg from '../icons/blush.png'
import bronzerImg from '../icons/bronzer.png'
import brushImg from '../icons/brush.png'
import concealerImg from '../icons/concealer.png'
import contourImg from '../icons/contour.png'
import eye_primerImg from '../icons/eye_primer.png'
import eyebrowImg from '../icons/eyebrow.png'
import eyelinerImg from '../icons/eyeliner.png'
import eyeshadowImg from '../icons/eyeshadow.png'
import face_primerImg from '../icons/face_primer.png'
import false_eyelashesImg from '../icons/false_eyelashes.png'
import foundationImg from '../icons/foundation.png'
import highlighterImg from '../icons/highlighter.png'
import lipImg from '../icons/lip.png'
import makeupIcon from '../icons/makeupIcon.png'
import mascaraImg from '../icons/mascara.png'
import setting_powderImg from '../icons/setting_powder.png'
import setting_sprayImg from '../icons/setting_spray.png'
import tinted_moisturizerImg from '../icons/tinted_moisturizer.png'

class ItemCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            icon: makeupIcon,
            active: false
        }
    }

    iconList = () => {
        return (
            {
                "bb_cc_cream": bb_cc_creamImg,
                "blush": blushImg,
                "bronzer": bronzerImg,
                "brush": brushImg,
                "concealer": concealerImg,
                "contour": contourImg,
                "eye_primer": eye_primerImg,
                "eyebrow": eyebrowImg,
                "eyeliner": eyelinerImg,
                "eyeshadow": eyeshadowImg,
                "face_primer": face_primerImg,
                "false_eyelashes": false_eyelashesImg,
                "foundation": foundationImg,
                "highlighter": highlighterImg,
                "lip": lipImg,
                "makeup": makeupIcon,
                "mascara": mascaraImg,
                "setting_powder": setting_powderImg,
                "setting_spray": setting_sprayImg,
                "tinted_moisturizer": tinted_moisturizerImg
            }
        )
        
    }

    componentDidMount() {
        this.loadIcon();
    }

    loadIcon = () => {
        this.setState({icon: this.iconList()[this.props.item.makeup_type]})
    }

    renderStars = (rating) => {
        var stars = []
        for (var i = 0; i < rating; i++) {
            stars.push(<Image size={24} src={star} alt="Star" key={i} />)
        }
        return stars
    }

    toggle = () => {
        this.setState({active: !this.state.active})
    }

    render() {
        let { name, brand, notes, rating, expiration } = this.props.item
        let { icon, active } = this.state

        return (
            <Tile 
                vertical
                kind="child"
                onClick={this.toggle} 
                className={active ? "has-background-success" : "has-background-info"} 
                style={{
                    border: active ? '5px solid #ffff00' : ''
                }}
            >
                <Tile size={12}>   
                    <Tile size={8}>
                        <Tile >
                            <Image size={48} src={icon} alt="Makeup Icon" />
                            <Tile vertical>
                                <Heading size={5}>{name}</Heading>
                                <Heading subtitle size={6}>{brand}</Heading>
                            </Tile>
                        </Tile>
                    </Tile>

                    <Tile size={active ? 3 : 4}>
                        <Tile vertical>
                            <Heading size={6}>Expires</Heading>
                            <Heading subtitle size={6}>{expiration}</Heading>
                        </Tile>
                    </Tile>

                    {active && (
                        <Tile size={1}>
                            <button className="delete has-background-danger"/>
                        </Tile>
                    )}
                    

                </Tile>

                {active && (
                    <Tile size={12}>
                        <Tile size={9} >
                            {this.renderStars(rating)}
                        </Tile>
                        <Tile size={3}>
                            <Button size="small" color="link" fullwidth outlined>Edit</Button>
                        </Tile>
                    </Tile>
                )}
                
            </Tile>
        )
    }
}

export default ItemCard;