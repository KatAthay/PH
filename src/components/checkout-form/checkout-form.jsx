import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { IoIosArrowBack } from 'react-icons/io'

import Button from '../button/main-button/Button'

import './checkout-form.styles.scss'

const CheckoutForm = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)
  const toggleCartOpen = () => setIsCartOpen(!isCartOpen)
  return (
    <div className="checkout-form-container">
      <Form>
        <div>
          <h4>Contact</h4>
        </div>

        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3 "
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            className="form-control"
          />
        </FloatingLabel>
        <Form.Group className="mb-3 " id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="Email me with news and offers"
            className=""
          />
        </Form.Group>
        <div className="styled-line"></div>

        <h4 className="mt-5 mb-3">Delivery</h4>
        <Row>
          <Form.Group
            size="sm"
            as={Col}
            controlId="formGridFirstName"
            className=""
          >
            <FloatingLabel
              controlId="floatingInput"
              label="First Name"
              className="mb-3 mb-3 "
            >
              <Form.Control type="text" placeholder="First Name" className="" />
            </FloatingLabel>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLastName">
            <FloatingLabel
              controlId="floatingInput"
              label="Last Name"
              className="mb-3 mb-3 "
            >
              <Form.Control type="text" placeholder="Last Name" />
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <FloatingLabel
            controlId="floatingInput"
            label="Address"
            className="mb-3 mb-3 "
          >
            <Form.Control type="text" placeholder="Address" />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <FloatingLabel
            controlId="floatingInput"
            label="Apartment, studio, or floor"
            className="mb-3 mb-3 "
          >
            <Form.Control
              type="text"
              placeholder="Apartment, studio, or floor"
            />
          </FloatingLabel>
        </Form.Group>
        <Row>
          <Form.Group as={Col} controlId="formGridCity">
            <FloatingLabel
              controlId="floatingInput"
              label="City"
              className="mb-3 mb-3  "
            >
              <Form.Control
                type="text"
                placeholder="City"
                className="input-sm"
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState" className=" ">
            <FloatingLabel
              className="custom-input  "
              controlId="floatingSelect"
              label="select state"
            >
              <Form.Select aria-label="select state">
                <option value="1">AL</option>
                <option value="2">AK</option>
                <option value="3">AZ</option>
                <option value="4">AR</option>
                <option value="5">CA</option>
                <option value="6">CO</option>
                <option value="7">CT</option>
                <option value="8">DE</option>
                <option value="9">FL</option>
                <option value="10">GA</option>
                <option value="11">HI</option>
                <option value="12">ID</option>
                <option value="13">IL</option>
                <option value="14">IN</option>
                <option value="15">IA</option>
                <option value="16">KS</option>
                <option value="17">KY</option>
                <option value="18">LA</option>
                <option value="19">ME</option>
                <option value="20">MD</option>
                <option value="21">MA</option>
                <option value="22">MI</option>
                <option value="23">MN</option>
                <option value="24">MS</option>
                <option value="25">MO</option>
                <option value="26">MT</option>
                <option value="27">NE</option>
                <option value="28">NV</option>
                <option value="29">NH</option>
                <option value="30">NJ</option>
                <option value="31">NM</option>
                <option value="32" selected>
                  NY
                </option>
                <option value="33">NC</option>
                <option value="34">ND</option>
                <option value="35">OH</option>
                <option value="36">OK</option>
                <option value="37">OR</option>
                <option value="38">PA</option>
                <option value="39">RI</option>
                <option value="40">SC</option>
                <option value="41">SD</option>
                <option value="42">TN</option>
                <option value="43">TX</option>
                <option value="44">UT</option>
                <option value="45">VT</option>
                <option value="46">VA</option>
                <option value="47">WA</option>
                <option value="48">WV</option>
                <option value="49">WI</option>
                <option value="50">WY</option>
              </Form.Select>
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <FloatingLabel
              controlId="floatingInput"
              label="Zip"
              className="mb-3 "
            >
              <Form.Control type="text" placeholder="Zipcode" />
            </FloatingLabel>
          </Form.Group>
        </Row>
        <div className="checkout-footer">
          <div onClick={toggleCartOpen} className="return-cart">
            <div>
              <IoIosArrowBack className="cartarrow" />
            </div>
            <div className="return-cart-text" onClick={toggleCartOpen}>
              Return To Cart
            </div>
          </div>
          <div className="shipping-btn">
            <Button variant="primary" type="submit">
              Continue to&nbsp;Shipping
            </Button>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default CheckoutForm
