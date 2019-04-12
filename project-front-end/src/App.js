import React, { Component } from 'react';
import NavigationBar from './Containers/NavigationBar'
import NewItemForm from './Containers/NewItemForm'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <NewItemForm />

      </div>
    );
  }
}

export default App;
