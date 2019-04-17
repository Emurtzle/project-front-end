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
            <Navbar fixed={"top"} active={false} transparent={false} style={{background: '#FF5A51'}}>
                
                <Navbar.Brand>
                    <Navbar.Item renderAs="a" href="/">
                        <img src={logo} alt="Panning Out Logo" width="80"/>
                    </Navbar.Item>
                    <Navbar.Burger />
                </Navbar.Brand>

                <Navbar.Menu>
                    <Navbar.Container>
                        <Navbar.Item onClick={this.props.addItemToggle} style={{color: '#F2F1DC'}}>
                            Add Item
                        </Navbar.Item>
                    </Navbar.Container>

                    <Navbar.Container position="end">
                        <Navbar.Item href="/" style={{color: '#F2F1DC'}}>About</Navbar.Item>
                        
                        {this.props.loggedIn && (
                            <Navbar.Item href="/" onClick={this.handleLogOutClick} style={{color: '#F2F1DC'}}>Log out</Navbar.Item>
                        )}
                        

                    </Navbar.Container>

                </Navbar.Menu>
            </Navbar>
        )
    }
}

export default NavigationBar;