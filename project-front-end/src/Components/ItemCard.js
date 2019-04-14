import React, { Component } from 'react'
import { Card } from 'react-bulma-components'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import test from '../icons/eyeshadow.png'

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
            active: false,
            icon: null
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

    render() {
        let { name, brand, makeup_type, notes, rating, expiration } = this.props.item
        let icon = this.state.icon

        return(
            <Card size="4by3" className={"has-background-grey-light"}>
                <Card.Image size={48} src={icon} alt="Makeup Icon Type"/>
                <Card.Content>
                    <Card.Header.Title>{name}</Card.Header.Title>
                    <Card.Header>By: {brand}</Card.Header>
                    <Card.Header>Expires: {expiration}</Card.Header>
                </Card.Content>
                <Card.Footer >
                    <Card.Footer.Item renderAs="a" href="#edit">
                        Edit
                    </Card.Footer.Item>
                    <Card.Footer.Item renderAs="a" href="#remove">
                        Remove
                    </Card.Footer.Item>
                </Card.Footer>
            </Card>
        )
    }
}

export default ItemCard;