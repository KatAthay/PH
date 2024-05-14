import { useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'

import { TfiClose } from 'react-icons/tfi'

import Button from '../button/main-button/Button'
import CartItem from '../cart-item/cart-item'
import { scrollToTop } from '../../utils/scrollToTop'
import './cart-sidebar.styles.scss'

const CartSidebar = () => {
  const { isCartOpen, setIsCartOpen, cartItems, cartTotal, cartCount } =
    useContext(CartContext)

  const toggleCartClosed = () => setIsCartOpen(!isCartOpen)

  const navigate = useNavigate()

  const goToCheckoutHandler = () => {   
    navigate('/checkout')
    scrollToTop()
  }

  const cartRef = useRef(null) 

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    if (isCartOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isCartOpen, setIsCartOpen]);

  return (
    <div
      className={`cart-sidebar-container${isCartOpen ? ' open' : ''}`}
      ref={cartRef}
    >
      <div className="cart-sidebar-container">
        <div className="cart-sidebar-header-container">
          <div className="cart-sidebar-x-container">
            <TfiClose onClick={toggleCartClosed} className="closeX" />
          </div>
          <div className="cart-sidebar-title-amount">
            <h2 className="cart-sidebar-title">Your Cart</h2>
            <div className="cart-sidebar-item-count">{cartCount} items</div>
          </div>

          <div className="cart-sidebar-info">
            Each order is meticulously prepared and packaged by our dedicated
            team! In the chilly winter season, additional protective packaging
            is included to ensure the safety of your plants.
          </div>
          <div className="styled-line"></div>
        </div>

        <div className="cart-sidebar-items">
          {cartItems.length ? (
            cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
          ) : (
            <div className="cart-sidebar-empty-cart">Your cart is empty</div>
          )}
        </div>

        <div className="cart-sidebar-footer">
          <div className="cart-sidebar-subtotal-container">
            <div className="cart-sidebar-subtotal">Subtotal: </div>
            <span className="sidebar-total-price">${cartTotal}</span>
          </div>

          <Button buttonType="checkout" onClick={goToCheckoutHandler}>
            Checkout Page
          </Button>
          <div className="cart-sidebar-shipping">
            Taxes and shipping calculated at checkout.
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartSidebar
