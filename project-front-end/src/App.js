import React, { Component } from 'react';
import NavigationBar from './Containers/NavigationBar'
import NewItemForm from './Containers/NewItemForm'
import Collection from './Containers/Collection'
import Content from './Containers/Content'
import Login from './Containers/Login'
import Signup from './Containers/Signup'
import { BrowserRouter as Router, Route } from 'react-router-dom';


import { Columns, Container, Button } from 'react-bulma-components'
import 'react-bulma-components/dist/react-bulma-components.min.css'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      addItemFormOpen: false,
      activeTile: ""
    }
  }

  sendToContent = (tile) => {
    this.setState({activeTile: tile})
  }

  handleAddItemButton = () => {
    this.toggleAddItemForm();
  }

  toggleAddItemForm = () => {
    if (this.state.addItemFormOpen === false) {
      this.setState({addItemFormOpen: true})
    } else if (this.state.addItemFormOpen === true) {
      this.setState({addItemFormOpen: false})
    }
  }

  render() {
    const addItemToggle= this.state.addItemFormOpen;
    return (
      <Container fluid >
        <NavigationBar addItemToggle={this.handleAddItemButton}/>

        {addItemToggle ? <NewItemForm /> : null}

        <Router>
          <Route exact path='/signup' component={() => <Signup />}/>
          <Route exact path='/login' component={() => <Login />}/>
        </Router>

        <Columns >
          <Columns.Column size="one-third" >
            <Collection sendToContent={this.sendToContent}/>
          </Columns.Column>

          <Columns.Column size="two-thirds">
            <Content activeTile={this.state.activeTile}/>
          </Columns.Column>
        </Columns>
      </Container>

    );
  }
}

export default App;
