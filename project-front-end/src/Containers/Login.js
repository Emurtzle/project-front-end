import React, { Component, PureComponent } from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import 'bulma-calendar/dist/css/bulma-calendar.min.css'
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min.js'
import { Container, Form, Button } from 'react-bulma-components'


class Login extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }


  handleChange = (ev) => {
    const value = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value
    this.setState({[ev.target.name]: value})
  }

  // get auth from user profiles on backend
  handleSubmit = (ev) => {
    //post to user database
      fetch('http://localhost:3000/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        user: {
          name: this.state.username,
          password: this.state.password,
          }
        })
      })
      .then(response => response.json())
      .then(json => {
        localStorage.setItem('UserID', json.user.id);
        localStorage.setItem('UserName', json.user.name);

      })
  }


  render() {
    const { username, password } = this.state

    return (
      <Container fluid>

      <Form.Field>
        <Form.Label>Username</Form.Label>
        <Form.Input onChange={this.handleChange} name="username" value={username} placeholder="Type Username Here" />
      </Form.Field>


        <Form.Field>
          <Form.Label>Password</Form.Label>
          <Form.Input onChange={this.handleChange} name="password" value={password} placeholder="Type Password Here" />
        </Form.Field>

        <Form.Field >
          <Button onClick={this.handleSubmit} color="primary">Login</Button>
        </Form.Field>

      </Container>
    )
  }
}


export default Login;
