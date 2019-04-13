import React, { Component, PureComponent } from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import 'bulma-calendar/dist/css/bulma-calendar.min.css'
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min.js'
import { Container, Form, Button } from 'react-bulma-components'


class NewItemForm extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      makeupType: '',
      rating: '',
      brand: "",
      name: "",
      notes: "",
      expiration: ""
    }
  }

  handleChange = (ev) => {
    const value = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value
    this.setState({[ev.target.name]: value})
  }

  render() {
    const { makeupType, name, brand, rating, expiration, notes } = this.state

    return (
      <Container fluid>
        <Form.Field>
          <Form.Control>
            <Form.Label>Type</Form.Label>
            <Form.Select onChange={this.handleChange} name="makeupType" value={makeupType}>
              <option value="">Select</option>
              <option value="eyeshadow">Eyeshadow</option>
              <option value="eyeliner">Eyeliner</option>
              <option value="eyebrow">Eyebrow</option>
              <option value="mascara">Mascara</option>
              <option value="eye_primer">Eye Primer</option>
              <option value="false_eyelashes">False Eyelashes</option>
              <option value="under-eye_concealer">Under-eye Concealer</option>
              <option value="bullet_lipstick">Bullet Lipstick</option>
              <option value="liquid_lipstick">Liquid Lipstick</option>
              <option value="lip_stain">Lip Stain</option>
              <option value="lip_liner">Lip Liner</option>
              <option value="blush">Blush</option>
              <option value="bronzer">Bronzer</option>
              <option value="highlighter">Highlighter</option>
              <option value="contour">Contour</option>
              <option value="foundation">Foundation</option>
              <option value="bb_cc_cream">BB & CC Cream</option>
              <option value="tinted_moisturizer">Tinted Moisturizer</option>
              <option value="concealer">Concealer</option>
              <option value="face_primer">Face Primer</option>
              <option value="setting_spray">Setting Spray</option>
              <option value="setting_powder">Setting Powder</option>
            </Form.Select>
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Control>
            <Form.Label>Name</Form.Label>
            <Form.Input onChange={this.handleChange} name="name" type="text" placeholder="Name" value={name} />
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Control>
            <Form.Label>Brand</Form.Label>
            <Form.Input onChange={this.handleChange} name="brand" type="text" placeholder="Brand" value={brand} />
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Control>
            <Form.Label>Rating</Form.Label>
            <Form.Select onChange={this.handleChange} name="rating" value={rating}>
              <option value={""}>Select</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </Form.Select>
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Control>
            <Form.Label>Expiration Date</Form.Label>
            <input type="date"></input>
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Label>Notes</Form.Label>
          <Form.Textarea onChange={this.handleChange} name="notes" value={notes} placeholder="Type Here" />
        </Form.Field>

        <Form.Field kind="group">
          <Form.Control>
            <Button color="primary">Add To Collection</Button>
          </Form.Control>
          <Form.Control>
            <Button color="primary">Add Another</Button>
          </Form.Control>
          <Form.Control>
            <Button color="link">Cancel</Button>
          </Form.Control>
        </Form.Field>

      </Container>
    )
  }
}


export default NewItemForm;
