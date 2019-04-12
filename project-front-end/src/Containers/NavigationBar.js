import React, { Component } from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Navbar, Button } from 'react-bulma-components';
import logo from '../logo.png'

class NavigationBar extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Navbar color={"primary"} fixed={"top"} active={false} transparent={false}>
                    
                    <Navbar.Brand>
                        <Navbar.Item renderAs="a" href="/">
                            <img src={logo} alt="Panning Out Logo" width="80"/>
                        </Navbar.Item>
                        <Navbar.Burger />
                    </Navbar.Brand>

                    <Navbar.Menu>
                        <Navbar.Container>
                            <Navbar.Item href="/">Closet</Navbar.Item>
                            <Navbar.Item href="/">Inspiration</Navbar.Item>
                        </Navbar.Container>

                        <Navbar.Container position="end">
                            <Navbar.Item href="/">Profile</Navbar.Item>
                            <Navbar.Item href="/">Log In</Navbar.Item>
                        </Navbar.Container>

                    </Navbar.Menu>
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar;