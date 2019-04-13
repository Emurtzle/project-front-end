import React from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Container } from 'react-bulma-components'

class NewItemForm extends React.Component {
  constructor() {
    super()
    this.state = {
      makeup_type: '',
      rating: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }


  render() {
    return (
      <Container fluid>

        <form>
        <label>
        Describe the new item for your collection!
        <input type='text' placeholder='Name'></input>
        <input type='text' placeholder='Brand'></input>
        <input type='text' placeholder='Image'></input>

        <input type='text' placeholder='Notes'></input>
        <label>
        Rating:
          <select value={this.state.rating} onChange={this.handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          </label>
          <label>
          Type of product:
          <select value={this.state.makeup_type} onChange={this.handleChange}>
            <option value="Eyeshadow">Eyeshadow</option>
            <option value="Eyeliner">Eyeliner</option>
            <option value="Eyebrow">Eyebrow</option>
            <option value="Mascara">Mascara</option>
            <option value="Eye Primer">Eye Primer</option>
            <option value="False Eyelashes">False Eyelashes</option>
            <option value="Under-eye Concealer">Under-eye Concealer</option>
            <option value="Bullet Lipstick">Bullet Lipstick</option>
            <option value="Liquid Lipstick">Liquid Lipstick</option>
            <option value="Lip Stain">Lip Stain</option>
            <option value="Lip Liner">Lip Liner</option>
            <option value="Blush">Blush</option>
            <option value="Bronzer">Bronzer</option>
            <option value="Highlighter">Highlighter</option>
            <option value="Contour">Contour</option>
            <option value="Foundation">Foundation</option>
            <option value="BB & CC Cream">BB & CC Cream</option>
            <option value="Tinted Moisturizer">Tinted Moisturizer</option>
            <option value="Concealer">Concealer</option>
            <option value="Face Primer">Face Primer</option>
            <option value="Setting Spray">Setting Spray</option>
            <option value="Setting Powder">Setting Powder</option>
          </select>
          </label>
        <input type="submit"/>
        </label>
        </form>

      </Container>
    )
  }
}

export default NewItemForm;
