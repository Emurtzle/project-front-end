import React, { Component, PureComponent } from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import 'bulma-calendar/dist/css/bulma-calendar.min.css'
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min.js'
import { Container, Form, Button } from 'react-bulma-components'


class NewItemForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      makeup_type: '',
      rating: '',
      brand: "",
      name: "",
      notes: "",
      expiration: "",
      purchase_date: ""
    }
  }


  handleChange = (ev) => {
    const value = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value
    this.setState({[ev.target.name]: value})
  }

  handleType = (ev) => {
    const value = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value
    this.setState({[ev.target.name]: value})
    this.setExpiration()
  }

  handleSubmit = (ev) => {
    console.log(this.state)
    //post to database
  }

  setExpiration() {
    const sixMonth = ['liquid_eyeliner', 'cream_eyeshadow']
    const oneYear = ['bb_cc_cream', 'concealer', 'cream_contour', 'foundation', 'highlighter', 'lip_product', 'tinted_moisturizer'];
    const twoYear = ['blush','bronzer','powder_contour','eye_primer','eyebrow','pencil_eyeliner','powder_eyeshadow','face_primer','setting_powder','setting_spray'];
    if (this.state.makeup_type == 'mascara') {
      //recieves date yyyy-mm-dd
      console.log(this.state.purchase_date + 6)

    } else if (sixMonth.includes(this.state.makeup_type)) {
      console.log('hello')


    } else if (oneYear.includes(this.state.makeup_type)) {
      console.log('hi')

    } else if (twoYear.includes(this.state.makeup_type)) {
      console.log('whatsup')

    }
  }

  render() {
    const { makeup_type, name, brand, rating, purchase_date, notes } = this.state

    return (
      <Container fluid>
        <Form.Field>
          <Form.Control>
            <Form.Label>Type</Form.Label>
            <Form.Select onChange={this.handleType} name="makeup_type" value={makeup_type}>
              <option value="">Select</option>
              <option value="bb_cc_cream">BB & CC Cream</option>
              <option value="blush">Blush</option>
              <option value="bronzer">Bronzer</option>
              <option value="concealer">Concealer</option>
              <option value="cream contour">Contour</option>
              <option value="powder contour">Contour</option>
              <option value="eye_primer">Eye Primer</option>
              <option value="eyebrow">Eyebrow</option>
              <option value="liquid eyeliner">Eyeliner</option>
              <option value="pencil eyeliner">Eyeliner</option>
              <option value="cream eyeshadow">Eyeshadow</option>
              <option value="powder eyeshadow">Eyeshadow</option>
              <option value="face_primer">Face Primer</option>
              <option value="foundation">Foundation</option>
              <option value="highlighter">Highlighter</option>
              <option value="lip_product">Lip Product</option>
              <option value="mascara">Mascara</option>
              <option value="setting_powder">Setting Powder</option>
              <option value="setting_spray">Setting Spray</option>
              <option value="tinted_moisturizer">Tinted Moisturizer</option>
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
            <Form.Label>Purchase Date</Form.Label>
            <input  onChange={this.handleChange} value={purchase_date} name="purchase_date" type="date"></input>
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Label>Notes</Form.Label>
          <Form.Textarea onChange={this.handleChange} name="notes" value={notes} placeholder="Type Here" />
        </Form.Field>

        <Form.Field kind="group">
          <Form.Control >
            <Button onClick={this.handleSubmit} color="primary">Add To Collection</Button>
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
