import React, { Component } from 'react';
import Home from './Home'
import NavigationBar from './Containers/NavigationBar'
import NewItemForm from './Containers/NewItemForm'
import Collection from './Containers/Collection'
import Content from './Containers/Content'
import Login from './Containers/Login'
import Signup from './Containers/Signup'
import { BrowserRouter as Router, Route } from 'react-router-dom';


import { Columns, Container, Button } from 'react-bulma-components'
import 'react-bulma-components/dist/react-bulma-components.min.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      addItemFormOpen: false,
      activeTile: "",
      loggedIn: false
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
        <NavigationBar addItemToggle={this.handleAddItemButton} logOut={this.logOut}/>

        {addItemToggle ? <NewItemForm /> : null}

        <Router>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path='/signup' component={() => <Signup />} />
          <Route exact path='/login' component={() => <Login />} />
        </Router>
      </Container>

    );
  }
}

export default App;
