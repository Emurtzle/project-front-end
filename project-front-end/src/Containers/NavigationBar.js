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

    handleLogOutClick = () => {
        this.props.setlogOut()
        localStorage.clear();
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
                        <Navbar.Item onClick={this.props.addItemToggle}>
                            Add Item
                        </Navbar.Item>
                    </Navbar.Container>

                    <Navbar.Container position="end">
                        <Navbar.Item href="/">About</Navbar.Item>
                        
                        {this.props.loggedIn && (
                            <Navbar.Item href="/" onClick={this.handleLogOutClick}>Log out</Navbar.Item>
                        )}
                        

                    </Navbar.Container>

                </Navbar.Menu>
            </Navbar>
        )
    }
}

export default NavigationBar;