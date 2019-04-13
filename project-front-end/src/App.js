import React, { Component } from 'react';
import NavigationBar from './Containers/NavigationBar'
import NewItemForm from './Containers/NewItemForm'
import Collection from './Containers/Collection'
import { Columns, Container, Heading } from 'react-bulma-components'
import 'react-bulma-components/dist/react-bulma-components.min.css'

import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <NavigationBar />
        <NewItemForm />

        <Columns>
          <Columns.Column size={"half"} >
              <Collection />
            </Columns.Column>

            <Columns.Column size={"half"}>
            <Container fluid className={"has-background-info"}>
              <Heading className={"has-text-centered has-text-white"}>Inspiration</Heading>
            </Container>
            </Columns.Column>

          </Columns>
        </Container>
    );
  }
}

export default App;
