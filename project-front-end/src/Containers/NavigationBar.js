import React, { Component } from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Navbar, Button } from 'react-bulma-components'
import logo from '../icons/logo.png'

class NavigationBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loggedIn: false
        }
    }
    render() {
        return (
            <Navbar color={"primary"} fixed={"top"} active={false} transparent={false}>
                
                <Navbar.Brand>
                    <Navbar.Item renderAs="a" href="/">
                        <img src={logo} alt="Panning Out Logo" width="80"/>
                    </Navbar.Item>
                    <Navbar.Burger />
                </Navbar.Brand>

                <Navbar.Menu>
                    <Navbar.Container>
                        <Navbar.Item>
                            <Button color="info" onClick={this.props.addItemToggle}>Add Item</Button>
                        </Navbar.Item>
                    </Navbar.Container>

                    <Navbar.Container position="end">
                        <Navbar.Item href="/">About</Navbar.Item>

                        {this.state.loggedIn && (
                            <Navbar.Item href="/">Sign Up</Navbar.Item>
                        )}

                        {this.state.loggedIn && (
                            <Navbar.Item href="/">Log In</Navbar.Item>
                        )}
                        
                        {!this.state.loggedIn && (
                            <Navbar.Item href="/">Log out</Navbar.Item>
                        )}
                        

                    </Navbar.Container>

                </Navbar.Menu>
            </Navbar>
        )
    }
}

export default NavigationBar;