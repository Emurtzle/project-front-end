import React, { Component } from 'react';
import NavigationBar from './Containers/NavigationBar'
import NewItemForm from './Containers/NewItemForm'
import Collection from './Containers/Collection'
import Content from './Containers/Content'
import { Columns, Container } from 'react-bulma-components'
import 'react-bulma-components/dist/react-bulma-components.min.css'

import './App.css';

class App extends Component {
  render() {
    return (
      <Container fluid >
        <NavigationBar />
        <NewItemForm />

        <Columns >
          <Columns.Column size="one-third" >
              <Collection />
            </Columns.Column>

            <Columns.Column size="two-thirds">
              <Content />
            </Columns.Column>

          </Columns>
        </Container>
    );
  }
}

export default App;
