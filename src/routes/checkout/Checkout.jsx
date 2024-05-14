import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import CheckoutForm from '../../components/checkout-form/checkout-form'
import CheckoutItem from '../../components/checkout-item/checkout-item'
import Form from 'react-bootstrap/Form'

import './checkout.styles.scss'

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext)

  return (
    <div className="checkout-page-container">
      <div className="checkout-form">
        <CheckoutForm />
      </div>
      <div className="checkout-container">
        <div className="checkout-order-summary">
          <h4>Order Summary</h4>
        </div>

        <div className="checkout-items">
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <div className="discount-row">
            <Form.Control
              size="sm"
              type="text"
              placeholder="Discount Code"
              className="discount-input"
            />

            <div className="discount-btn">Apply</div>
          </div>
          <div className="subtotal-row">
            <div className="subtotal">Subtotal</div>
            <div className="subtotal-text">${cartTotal}</div>
          </div>
          <div className="shipping-row">
            <div className="shipping">Shipping</div>
            <div className="shipping-text">Caluclated at next step</div>
          </div>

          <div className="total-container">
            <div className="styled-line"></div>
            <div className="total-row">
              <div className="total">Total</div>
              <div className="total-text">${cartTotal}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
